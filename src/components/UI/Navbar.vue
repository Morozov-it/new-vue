<template>
    <div class="navbar">
        <h3 @click="$router.push('/')">Vue3</h3>
        <div class="navbar-btns">
            <!-- при нажатии на кнопку идет переброс на путь -->
            <my-button
                @click="$router.push('/posts')"
                >Posts
            </my-button>
            <my-button 
                @click="$router.push('/about')"
                style="margin-left: 10px">About
            </my-button>
        </div>
    </div>
</template>


<script>

</script>

<style scoped>
.navbar {

    height: 50px;
    display: flex;
    align-items: center;
}
.navbar-btns {
    margin-left: auto;
}
</style>
