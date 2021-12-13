<template>
    <select v-model="modelValue" @change="changeOption">
        <option disabled value="">Select</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value">
            {{option.name}}
        </option>
    </select>
</template>


<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => [] //при обозначении массива лучше использовать стрелочную функцию
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>
