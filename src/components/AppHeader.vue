<template>
<h1 class="text-center">Employee Management</h1>
<nav class="navbar navbar-expand-lg navbar-light bg-light" style="color:black">
    <div class="container-fluid">
        <router-link to="/rpage" v-if="!isLoggedIn" class="nav-link" style="color: grey">Register</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-if="!isLoggedIn" class="nav-item">
                    <a class="nav-link" @click="$emit('open-login')" href="#">Login</a>
                </li>
                <li v-if="isLoggedIn" class="nav-item">
                    <a class="nav-link">{{email}}</a>
                </li>
                <li v-if="isLoggedIn" class="nav-item">
                    <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
            <li v-if="isLoggedIn" class="nav-item">
                <a href="#" class="nav-link" @click="logout">Logout</a>
            </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "AppHeader",
    data() {
        return {
            isLoggedIn: false,
            email: ''
        }
    },
    mounted() {
        let user = localStorage.getItem('userinfo');
        this.email = JSON.parse(user).email;
        if (user) {
            this.isLoggedIn = true;
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({
                name: "RPage"
            })
        }
    }
}
</script>

<style>

</style>
