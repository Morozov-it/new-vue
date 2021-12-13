<template>
    <form @submit.prevent>
        <h4>Creating posts</h4>
        <!-- директива v-model организует двустороннее связывание Vue3 -->
        <my-input 
            v-model="post.title"
            type="text"
            placeholder="Title"
        />
        <!-- v-bind:value="post.body" 
            @input="post.body = $event.target.value" также организует двустороннее связывание -->
        <my-input
            v-model="post.body"
            type="text"
            placeholder="Post"
        />
        <!-- все атрибуты применяются к корневому элементу этой компоненты -->
        <my-button 
            style="align-self: flex-end; margin: 10px 15px;"
            @click="createPost">
            Create
        </my-button>
    </form>
</template>


<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        //обращение через this и без метода data
        // addLike() {
        //     this.likes += 1; 
        // },
        // addDislike() {
        //     this.dislikes += 1;
        // },
        createPost() {
            // event.preventDefault(); отмена перезагрузки страницы по клику на кнопку
            this.post.id = Date.now();
            this.$emit('create', this.post, 'second', 'third'); //это функция на результат вызова которой подписывается родитель, первый аргумент это название действия, второй это данные для работы этой функции
            this.post = {
                title: '',
                body: ''
            }
        }
        //этот метод можно заменить на $event.target.value
        // inputTitle(event) {
        //     console.log(event.target.value);
        //     this.title = event.target.value;
        // }
    },

    // watch: { //наблюдаемые свойства
    //     post: { //объект для глубокого отслеживания изменения моделей
    //         handler(newValue) {
    //             console.log(newValue)
    //         },
    //         deep: true //включаем глубокое отслеживание
    //     }
    // }
}
</script>


<style scoped>
form {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
}


</style>
