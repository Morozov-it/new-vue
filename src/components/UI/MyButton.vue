<template>
    <!-- в слот идет текст из кнопки -->
    <button class="btn">
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: 'my-button'
} //для глобальной регистрации компонентов
</script>

<style scoped>
.btn {
    cursor: pointer;
    background: none;
    color: rgb(6, 124, 99);
    padding: 10px;
    border: 1px solid rgb(6, 124, 99);
}
</style>
