<template>
<div v-if="isNewOpen">
    <section class="sec1" @click="isNewOpen = false"></section>
    <div class="position-absolute top-50 start-50 translate-middle" style="z-index: 30">
        <div style="height: 100%" class="d-flex">
            <div id="login-div1">
                <h4 class="text-center">Employees</h4>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isNewOpen: false,
        }
    }
}
</script>

<style>
.sec1 {
    z-index: 20;
    height: 100vh;
    width: 100vw;
    background-color: rgb(107 114 128);
    position: fixed;
    top: 0px;
    opacity: 0.8;
}

#login-div1 {
    margin: auto;
    background: white !important;
    color: black;
    padding: 2px;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    width: 33.33333;
}
</style>
