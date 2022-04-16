<template>
    <div>
        <div class="container">
            <div class="row">
                <h4>Register Here</h4>
                <div class="col-12 col-md-4 mx-auto">
                    <form @submit.prevent="Reg()">
                        <div class=" input-group mb-2">
                            <input type="email" placeholder="Enter Email" v-model="email" class="form-control">
                        </div>
                        <div class="input-group mb-2">
                            <input type="password" placeholder="Enter Password" v-model="password" class="form-control">
                        </div>
                        <div class="input-group float-end">
                            <button class="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth';
    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            Reg() {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    this.$router.push('/login');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>