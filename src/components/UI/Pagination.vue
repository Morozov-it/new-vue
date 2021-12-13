<template>
    <!-- можно итерироваться и по числу, при этом будет учитываться сколько раз по нему проходить -->
    <div class="pagination">
        <div 
            v-for="pageNumber in totalPages"
            :key='pageNumber'
            class="page"
            :class="{
                'current': page === pageNumber
            }"
            @click="changePage(pageNumber)"
            >{{pageNumber}}
        </div>
        <!-- динамическое присваивание классов
        :class="{'current': page === pageNumber}"
        также можно динамически изменять стили
        :style="{color: --- }"-->
    </div>
</template>


<script>
export default {
    name: 'pagination', //для глобальной регистрации компонентов
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        page:{
            type: Number,
        }
    },
    methods: {
        changePage(pageNumber) {
            this.$emit('update:page', pageNumber) //это передача наверх для обновления props
        }
    }
} 
</script>

<style scoped>
.pagination {
    display: flex;
    margin-top: 15px;
}
.page {
    width: 30px;
    text-align: center;
    margin-right: 5px;
    cursor: pointer;
    border: 1px solid rgb(6, 124, 99);
}
.current {
    border: 2px solid rgb(6, 124, 99);
    font-weight: bold;
}
</style>
