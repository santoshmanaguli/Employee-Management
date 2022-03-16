<template>
<AppHeader @open-login="isLoginOpen = true" />
<div>
    <router-view></router-view>
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
</div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from './components/LoginModal.vue';

export default {
    data() {
        return {
            isLoginOpen: false,
        }
    },
    name: "App",
    components: {
        AppHeader,
        LoginModal
    }
};
</script>

<style>
</style>
