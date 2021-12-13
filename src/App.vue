<template>
    <div class="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>


<script>
import Navbar from '@/components/UI/Navbar.vue';
export default {
    components: {
        Navbar
    }
}
</script>


<style>
/* минимальное обнуление */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    max-width: 900px;
    margin: 0 auto;
    height: 100vh;
    overflow: auto;
    padding: 10px;
    border-right: 1px solid #000;
    border-left: 1px solid #000;
}
</style>
