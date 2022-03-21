<template>
<div>
    <form>
        <div>
            <h4 id="h4" style="text-align: center">User Registration</h4>
        </div>
        <div class="row g-3 align-items-center d-grid gap-3 p-3 col-4 mx-auto">
            <div id="name"><input class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="First Name" v-model="form.fname" />
                <p v-if="!fnameisValid" class="error-message">First Name cannot be blank</p>
                <br>
                <input class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Last Name" v-model="form.lname" />
                <p v-if="!lnameisValid" class="error-message">Last Name cannot be blank</p>
                <br />
                <input class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Email" type="email" v-model="form.email" required />
                <p v-if="!emailisValid" class="error-message">Enter valid email</p>
                <br />
                <div class="col-auto">
                    <input id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" placeholder="Password" type="password" v-model="form.pass" required />
                    <p v-if="!passisValid" class="error-message">Password length should be greater 6 and less then 16 </p>
                </div>
            </div>
        </div>
        <div class="d-grid gap-2 col-1 mx-auto">
            <button class="btn btn-dark" id="btn" :disabled="!formisValid" @click="submitform" type="button">Register</button>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: "RPage",

    data() {
        return {
            form: {
                fname: "",
                lname: "",
                email: "",
                pass: "",
            }
        };
    },
    methods: {
        async submitform() {
            console.warn(this.form)
            const result = await axios.post("http://localhost:3000/form", {
                fname: this.form.fname,
                lname: this.form.lname,
                email: this.form.email,
                pass: this.form.pass,
            });
            console.warn(result)
            if (result.status == 201) {
                alert("User Registered now click on Login")
            }

        },
    },
    computed: {
        fnameisValid() {
            return !!this.form.fname && this.form.fname.length < 20
        },
        lnameisValid() {
            return !!this.form.lname && this.form.lname.length < 20
        },
        emailisValid() {
            return this.form.email !== ""
        },
        passisValid() {
            return this.form.pass !== "" && this.form.pass.length > 6 && this.form.pass.length < 16
        },
        formisValid() {
            return this.fnameisValid && this.lnameisValid && this.emailisValid && this.passisValid
        }

    }
};
</script>

<style>
.error-message {
    color: red;
}
</style>
