<template>
        <!-- пример метода map для массива данных -->
    <div class="post">
        <div class="post-body">
            <div><strong>ID: </strong>{{post.id}}</div>
            <div><strong>Name: </strong>{{post.title}}</div>
            <div><strong>Description: </strong>{{post.body}}</div>
        </div>
        <div class="post-btns">
            <!-- $router.push(`/posts/${post.id}`) по клику в url-адрес добавляется указанный параметр -->
            <my-button 
                style="margin-right: 5px"
                @click="$router.push(`/posts/${post.id}`)">
                Open
            </my-button>
            <!-- emit для передачи наверх - родителю данных -->
            <my-button 
                @click="$emit('remove', post)">
                Delete
            </my-button>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {

    }
}
</script>


<style scoped>
.post {
    margin-top: 10px;
    padding: 15px;
    border: 2px solid rgb(6, 124, 99);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post-btns {
    display: flex;
}
</style>