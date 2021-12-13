<template>
    <div class="modal"
        v-show="show" 
        @click="hideDialog">
        <!-- @click.stop это остановка действия клик-->
        <div @click.stop class="modal-content">
            <slot></slot>
        </div>
    </div>
</template>


<script>
export default {
    name: 'modal-dialog', //для глобальной регистрации компонентов
    props: {
        show: {
            type: Boolean,
            required: true,
            default: false //значение по default
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false) //это передача наверх для обновления props
        }
    }
} 
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
}
.modal-content {
    padding: 20px;
    background: #fff;
    border-radius: 2%;
    min-height: 50px;
    min-width: 400px;
    margin: 0 auto;
}
</style>
