<template>
<section @click="$emit('close-login')" class="sec"></section>
<div class="position-absolute top-50 start-50 translate-middle" style="z-index: 30">
    <div style="height: 100%" class="d-flex">
        <div id="login-div">
            <h4 class="text-center">Login</h4>
            <form class="p-2 my-2">
                <div class="my-4">
                    <label> Email</label>
                    <input v-model="form.email" placeholder="enter email id" class="rounded p-2 shadow-lg w-100" type="email"/>
                    <p v-if="!emailisValid" class="error-message">Email cannot be blank</p>
                </div>
                <div class="my-4">
                    <label>Password</label>
                    <input v-model="form.pass" placeholder="enter password" class="rounded p-2 shadow-lg w-100" type="password" />
                    <p v-if="!passisValid" class="error-message">Password cannot be blank</p>
                </div>
                <div class="my-4">
                    <button type="submit" class="w-100 rounded shadow-md p-2" :disabled="!formisValid" style="background-color: cyan" @click.prevent="submitForm">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      form:{
        email:'',
        pass:'',
      }
    }
  },
    methods: {
        async submitForm() {
          let result = await axios.get(`http://localhost:3000/form?email=${this.form.email}&pass=${this.form.pass}`)
          console.warn(result)
          if(result.status==200 && result.data.length>0){
            localStorage.setItem("userinfo",JSON.stringify(result.data[0]))
            this.$router.push({name:"DashBoard"})
          }
          else{
            alert("Email/Password invalid")
          }
        },
        mounted(){
          let user = localStorage.getItem('userinfo');
          if(user){
            this.$router.push({name:'DashBoard'})
          }
        }
    },
    computed: {
      emailisValid(){
        return this.form.email !== ""
      },
      passisValid(){
        return this.form.pass !== ""
      },
      formisValid(){
        return this.form.email && this.form.pass
      }
    }
}
</script>

<style>
.sec {
    z-index: 20;
    height: 100vh;
    width: 100vw;
    background-color: rgb(107 114 128);
    position: fixed;
    top: 0px;
    opacity: 0.5;
}

#login-div {
    margin: auto;
    background: black !important;
    color: white;
    padding: 2px;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    width: 33.33333;
}
</style>
