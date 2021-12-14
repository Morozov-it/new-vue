export default {
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
    },
    mounted() {
        console.log('mixin mounted')
    }
}