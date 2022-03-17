<template>
    <h3 class="text-center" >Edit Employee</h3>
    <div>
    <form>
        <label>First Name</label>
        <input type="text" class="rounded p-2 w-10" v-model="Employee.fname" />
        <br />
        <label>Last Name</label>
        <input type="text" class="rounded p-2 w-10" v-model="Employee.lname" />
        <br />
        <label>Email</label>
        <input type="email" class="rounded p-2 w-10" v-model="Employee.email" />
        <br />
        <label>Mobile No</label>
        <input type="tel" class="rounded p-2 w-10" v-model="Employee.mobile" />
        <br />
        <button type="submit">Save</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            Employee:{
            id: '',
            fname: '',
            lname: '',
            email: '',
            mobile: '',
            },
            employees: [],
            isNewOpen: false,
            editEmp: false,
                firstn: '',
                lastn: '',
                emailn: '',
                mobilen: '',
        }
    },
    async mounted(){
        const result = await axios.get('http://localhost:3000/employees/'+this.$route.params.id)
        // console.warn(this.$route.params.id)
        console.warn(result.data)
        this.Employee = result.data
    }
}
</script>

<style>

</style>