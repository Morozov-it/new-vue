// html-скелет, только один корневой элемент div! 
// {{ variable }} метод вставки переменных в html-код (интерполяция)

<template>
    <div>
        <!-- Простой функционал
        <div>Count of likes <b>{{ likes }}</b></div>
        <div>Count of dislikes <strong>{{ dislikes }}</strong></div>
        <div>
            <button @click='addLike'>like</button>
            <button @click='addDislike'>dislike</button>
        </div> -->
        <div class="app-post">

            <!-- модификаторы для 
            v-model.trim удаляет пробелы при вводе 
            v-model.number преобразует строку в число-->
            <!-- <div><input type="text" v-model.trim="modificatorValue"></div> -->
            
            <h3 style="margin-bottom: 10px">Post's page</h3>
            <my-input 
                v-model="searchQuery"
                placeholder="Find..."
            />
            <div class="app-buttons">
                <my-button @click="showModal">
                    Create post
                </my-button>
                <my-select
                    v-model="selectedSort"
                    :options="sortOptions">
                </my-select>
            </div>
            <!-- <my-button @click="fetchPosts" style="margin-right: 20px;">Get posts</my-button> -->


            <modal-dialog v-model:show="modalVisible">
                <!-- v-model для двустороннего связывания с props-->

                <!--@input="inputTitle" этот атрибут для двустороннего связывания input
                v-bind:value="title" это атрибут для привязки значения в input из созданной переменной в local-store
                -->
                <post-form @create="createPost" />
            </modal-dialog>
        </div>

        <div class="app-list">
            <!-- передача props. Props нельзя менять!!! -->
            <!-- computed функции возвращают готовый отсортированный массив и его как простую переменную передаем через пропс-->
            <!-- в передачу для props попадает отсортированный массив после вычисления в computed -->
            <post-list
                v-if="!isPostsLoading"
                :posts="sortedAndSearchedPosts"
                @remove="removePost"
            />
            <div 
                v-else
                class="loading">Loading...</div>

            <!-- добавление компоненты для выбора страниц -->
            <!-- v-model для двустороннего связывания с props-->
            <!-- <pagination 
                v-model:page="page"
                :totalPages="totalPages"
            /> -->

            <!-- это элемент для бесконечной прокрутки -->
            <!-- Intersection observer API -->
            <!-- Ref для получения доступа к дом-элементу -->
            <div 
                ref="observer"
                class="observer">
            </div>
        </div>
    </div>
</template>


// экспорт одного объекта с методами:
// data() - это переменные для состояния
// methods() - это методы изменения состояния

<script>
import axios from 'axios';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';


export default {
    components: { //регистрация дочерних компонент
        PostList, PostForm,},
    data() { // это аналог locale storage
        return {
            // likes: 0,
            // dislikes: 0
            // posts: [
            //     {id:1, title: 'JavaScript', body: 'Description'},
            //     {id:2, title: 'JavaScript 2', body: 'Description 2'},
            //     {id:3, title: 'JavaScript 3', body: 'Description 3'}
            // ],
            posts: [],
            modalVisible: false,
            modificatorValue: '',
            isPostsLoading: false,
            searchQuery: '',
            selectedSort: '',
            sortOptions: [
                { value: 'title', name: 'via name'},
                { value: 'body', name: 'via description'},
            ],

            //для pagination
            page: 1,
            limit: 10,
            totalPages: 0
        }
    },
    methods: { // это объект с методами компоненты
        createPost(post) { // это подписка на событие в дочерней компоненте
            this.posts.push(post);
            this.modalVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id)
        }, //это метод удаления элемента из массива
        showModal() {
            this.modalVisible = true;
        },
        async fetchPosts() {
            try{ //сработает в случае успеха
                this.isPostsLoading = true;
                // const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=4');
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });//параметры в axios передаются объектом
                // console.log(response);
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit); //вычисление количества страниц с округлением до большего
                this.posts = response.data;
                this.isPostsLoading = false;
            } catch (e) { //сработает в случае ошибки
                alert(`${e.message}`);
            } finally { //сработает в любом случае
                // this.isPostsLoading = false;
            }
        },
        async loadMorePosts() {
            try{ //сработает в случае успеха
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });//параметры в axios передаются объектом
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = [...this.posts, ...response.data];//добавляем в текущий массив постов полученный массив от сервера 
            } catch (e) { //сработает в случае ошибки
                alert(`${e.message}`);
            }
        },
        // функция для pagination
        // changePage(pageNumber) {
        //     this.page = pageNumber;
            // this.fetchPosts();} // можно отправить исполнение этой функции в наблюдаемые свойства watch
    },
    mounted() { //это метод жизненного цикла компоненты before rendering
        this.fetchPosts();
        //console.log(this.$refs.observer);получение дом-элемента
        //Intersection Observer API---------------
        const options = {
            //root полностью удалить потому что в корневом компоненте APP
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            // console.log('пересечение');
            //console.log(entries);
            if (entries[0].isIntersecting) {
                console.log('пересечен');
                this.loadMorePosts();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        //----------------------------------------
        observer.observe(this.$refs.observer);//функция для слежения за объектом

    },
    // watch: { //это объект-наблюдатель (аналог useEffect)
    //     selectedSort(newValue) { //название функции-наблюдателя должно быть как и название модели (переменной) за которой следим. Она срабатыет в тот момент когда меняется модель
    //         this.posts.sort((post1, post2) => { //метод сорт вызывает callback, в который принимаются аргументами два элемента массива для сравнения
    //             return post1[newValue]?.localeCompare(post2[newValue]) //функция для сравнения строк
    //         }) //функция сорт мутирует текущий массив
    //     },

    // },

    
    watch: {
        //слежение для пагинации
    //     page() { //следим за переменной page и при ее изменении вызываем функцию
    //         this.fetchPosts();
    //     }
    },

    computed: { //это объект-вычислитель (аналог useMemo)
        sortedPosts() { // произвольное название функции
        console.log('computed')
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]) 
            })
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase())) // это функция поиска по элементам массива содержащим в свойстве title символы переменной searchQuery
        }
    }
}
</script>


<style>
.app-post {
    margin-bottom: 20px;
}
.loading {
    font-weight: bold;
    color: red;
    font-size: 18px;
}
.app-buttons {
    display: flex;
    justify-content: space-between;
}

.observer {
    height: 30px;
    background: grey;
}
</style>

