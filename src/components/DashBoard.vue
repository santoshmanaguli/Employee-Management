<template>
<div>
    <h1 class="text-center">Employees</h1>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="rounded btn btn-primary" type="button" @click="isNewOpen = true">Add New</button>
    </div>
    <div v-if="isNewOpen">
        <section class="sec1" @click="isNewOpen = false"></section>
        <div class="position-absolute top-50 start-50 translate-middle" style="z-index: 30">
            <div style="height: 100%" class="d-flex">
                <div id="login-div1">
                    <h4 class="text-center">Add New Employee</h4>
                    <form>
                        <label>First Name</label>
                        <input placeholder="enter first name" class="rounded p-2 shadow-lg w-100" type="text" v-model="newEmployee.firstn" />
                        <label>Last Name</label>
                        <input placeholder="enter last name" class="rounded p-2 shadow-lg w-100" type="text" v-model="newEmployee.lastn" />
                        <label>Email</label>
                        <input placeholder="enter email id" class="rounded p-2 shadow-lg w-100" type="email" v-model="newEmployee.emailn" />
                        <label>Mobile No</label>
                        <input placeholder="enter mobile id" class="rounded p-2 shadow-lg w-100" type="tel" v-model="newEmployee.mobilen" />
                        <button type="button" class="btn btn-success" @click="addEmp">Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">SR.NO</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Mobile No</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="employ in employees" :key="employ.id">
                <td>{{employ.id}}</td>
                <td>{{employ.fname}}</td>
                <td>{{employ.lname}}</td>
                <td>{{employ.email}}</td>
                <td>{{employ.mobile}}</td>
                <td>
                    <button class="btn-close" aria-label="Close" @click="deleteemp(employ.id)"></button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "DashBoard",
    data() {
        return {
            id: '',
            fname: '',
            lname: '',
            email: '',
            mobile: '',
            employees: [],
            isNewOpen: false,
            newEmployee:{
                firstn:'',
                lastn:'',
                emailn:'',
                mobilen:'',
            }
        }
    },
    methods: {
        async addEmp(){
            console.warn(this.newEmployee)
            const result = await axios.post("http://localhost:3000/employees",{
                fname:this.newEmployee.firstn,
                lname:this.newEmployee.lastn,
                email:this.newEmployee.emailn,
                mobile:this.newEmployee.mobilen,
            });
            console.warn("result",result)
        },
        async deleteemp(id) {
            let result = await axios.delete("http://localhost:3000/employees/" + id);
            console.warn(result)
            if (result.status === 200) {
                this.loadData()
            }
        },
        async loadData() {
            let result = await axios.get("http://localhost:3000/employees");
            console.warn(result)
            this.employees = result.data;
        }
    },
    async mounted() {
        this.loadData();
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
