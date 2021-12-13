<template>
    <!-- @input это слушатель события input-->
    <input 
        :value="modelValue"
        @input="updateInput"
        class="input" type="text">
</template>


<script>
export default {
    name: 'my-input', //для глобальной регистрации компонентов
    props: {
        modelValue: [String, Number]
    },
    methods:{
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
} 
</script>

<style scoped>
.input {
    width: 100%;
    border: 1px solid rgb(6, 124, 99);
    margin: 10px 0px;
    padding: 10px;
}
</style>
