<template>
<section @click="$emit('close-edit')" class="sec3"></section>
<div class="position-absolute top-50 start-50 translate-middle" style="z-index: 30">
    <div style="height: 100%" class="d-flex">
        <div id="edit-div">
            <h3 class="text-center">Edit Employee</h3>
            <form class="p-2 my-2" id="editmodal">
                <div class="my-4">
                    <label>First Name</label><br>
                    <input type="text" class="rounded p-1 w-100" v-model="Employee.fname" />
                </div>
                <div class="my-4">
                    <label>Last Name</label><br>
                    <input type="text" class="rounded p-1 w-100" v-model="Employee.lname" />
                </div>
                <div class="my-4">
                    <label>Email:-</label><br>
                    <input type="email" class="rounded p-1 w-100" v-model="Employee.email" />
                </div>
                <div class="my-4">
                    <label>Mobile No</label><br>
                    <input type="tel" class="rounded p-1 w-100" v-model="Employee.mobile" />
                </div>
                <div class="d-grid gap-2 col-4 mx-auto">
                    <button type="button" class="btn btn-primary" @click="saveEmp">Save</button>
                </div>
            </form>

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            Employee: {
                id: '',
                fname: '',
                lname: '',
                email: '',
                mobile: '',
            }
        }
    },
    methods: {
        async saveEmp() {
            console.warn(this.Employee)
            const result = await axios.put("http://localhost:3000/employees/" + this.$route.params.id, {
                fname: this.Employee.fname,
                lname: this.Employee.lname,
                email: this.Employee.email,
                mobile: this.Employee.mobile,
            });
            if (result.status == 200) {
                this.$router.push({
                    name: 'DashBoard'
                });
            }
        }
    },
    async mounted() {
        const result = await axios.get('http://localhost:3000/employees/' + this.$route.params.id)
        // console.warn(this.$route.params.id)
        console.warn(result.data)
        this.Employee = result.data
    }
}
</script>

<style>
.sec3 {
    z-index: 20;
    height: 100vh;
    width: 100vw;
    background-color: rgb(107 114 128);
    position: fixed;
    top: 0px;
    opacity: 0.5;
}

#edit-div {
    margin: auto;
    background: white !important;
    color: black;
    padding: 2px;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    width: 33.33333;
}

#editmodal {
    top: 196px;
    left: 163px;
    width: 656px;
    height: 400px;
}
</style>
