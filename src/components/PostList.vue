<template>
    <!-- условная отрисовка директивы v-if и v-else, при этом второй элемент удаляется из дом-дерева;
    
    v-show="posts.length > 0"
    v-show="posts.length === 0"
    другой метод сохраняет элемент в дом-дереве только со свойством display:none-->
    <div v-if="posts.length>0" >
        <h3>Post list</h3>
        
        <!-- использование готовых компонент для анимации в name задается основной класс для css-->
        <!-- <transition-group name="post-list" tag="div"> -->
            <!-- пример метода map для массива данных -->
            <post-item 
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
        /><!-- принимаем событие remove от дочернего-нижнего элемента и передаем post еще выше -->
        <!-- </transition-group> -->

    </div>
    <h3 v-else
        style="color: red;">The list of items is empty</h3>
</template>


<script>
import PostItem from '@/components/PostItem.vue'

export default {
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>


<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 1s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
