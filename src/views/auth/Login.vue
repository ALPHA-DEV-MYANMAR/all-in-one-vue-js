<template>
    <div>
        <div class="container">
            <div class="row">
                <h4>Login Here</h4>
                <div class="col-12 col-md-4 mx-auto">
                    <form @submit.prevent="log()">
                        <div class=" input-group mb-2">
                            <input type="email" placeholder="Enter Email" v-model="email" class="form-control">
                        </div>
                        <div class="input-group mb-2">
                            <input type="password" placeholder="Enter Password" v-model="password" class="form-control">
                        </div>
                        <div class="input-group float-end">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";
    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            log() {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    this.getUid();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                    this.password = '';
                });
            },
            getUid(){
                const auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    localStorage.setItem('token',uid);
                    this.$router.go('/');
                } else {
                    // User is signed out
                    // ...
                }
                });
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>