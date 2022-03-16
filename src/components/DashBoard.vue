<template>
<div>
    <h1 class="text-center">Employees</h1>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button class="rounded btn btn-primary" type="button">Add New</button>
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
            </tr>
        </tbody>
    </table>
</div>
<div>
</div>
<AddNew  />
</template>

<script>
import axios from 'axios';
import AddNew from './AddNew.vue';

export default {
  components: { AddNew },
    name: "DashBoard",
    data() {
        return {
            id: '',
            fname: '',
            lname: '',
            email: '',
            mobile: '',
            employees: []
        }
    },
    async mounted() {
        let result = await axios.get("http://localhost:3000/employees");
        console.warn(result)
        this.employees = result.data;
    }
}
</script>
