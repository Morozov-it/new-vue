// html-скелет, только один корневой элемент div! 
// {{ variable }} метод вставки переменных в html-код (интерполяция)

<template>
    <div>
        <!-- <h1>{{$store.state.post.page}}</h1> -->
        <h3 
            @click="$store.commit('toggleAuthorize')"
            class="auth"
            :class="{
                'is': $store.state.isAuth
            }">
            {{$store.state.isAuth ? "Authorized" : "Unauthorized"}}
        </h3>
        <div class="app-post">
            <h3 style="margin-bottom: 10px">Post's page</h3>
            <my-input 
                v-focus
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
            <modal-dialog v-model:show="modalVisible">
                <post-form @create="createPost" />
            </modal-dialog>
        </div>

        <div class="app-list">
            <post-list
                v-if="!isPostsLoading"
                :posts="sortedAndSearchedPosts"
                @remove="removePost"
            />
            <div 
                v-else
                class="loading">Loading...</div>
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
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'


export default {
    components: {
        PostList, PostForm,},
    data() {
        return {

            modalVisible: false,
            modificatorValue: '',
            isPostsLoading: false,
            searchQuery: '',
            selectedSort: '',
            sortOptions: [
                { value: 'title', name: 'via name'},
                { value: 'body', name: 'via description'},
            ],
            page: 1,
            limit: 10,
            totalPages: 0
        }
    },
    methods: {
        ...mapMutations({

        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts', //это получение actions по названию
            fetchPosts: 'post/fetchPosts'
        }),
        createPost(post) { 
            this.posts.push(post);
            this.modalVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id)
        },
        showModal() {
            this.modalVisible = true;
        },
        async fetchPosts() {
            try{
                this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = response.data;
                this.isPostsLoading = false;
            } catch (e) {
                alert(`${e.message}`);
            } finally {}
        },
        async loadMorePosts() {
            try{
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert(`${e.message}`);
            }
        },
    },
    mounted() {
        this.fetchPosts();
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                console.log('пересечен');
                this.loadMorePosts();
            }
        };
        const observer = new IntersectionObserver(callback, options);

        observer.observe(this.$refs.observer);
    },
    watch: {},
    computed: {
        
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
.auth {
    width: 110px;
    margin-left: auto;
    color: red;
    cursor: pointer;
}
.is {
    color: green;
}
.observer {
    height: 30px;
    background: grey;
}
</style>

