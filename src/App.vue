<template>

  <div>

  <nav class="d-flex justify-content-center align-items-center ">
    <router-link v-if="is_auth" class="nav-link" to="/">Home</router-link> 
    <router-link v-if="is_auth" class="nav-link" to="/about">About</router-link> 
    <router-link v-if="is_auth" class="nav-link" to='/add-city'>Add City</router-link> 
    <router-link v-if="is_auth == false" class="nav-link" to='/login'>Login</router-link> 
    <router-link v-if="is_auth == false" class="nav-link" to='/register'>Register</router-link> 
    <span v-if="is_auth" class='nav-link pointer-event text-danger fw-bold' @click="out()">Logout</span>
  </nav> 
  <router-view/>

  </div>


</template>

<script>
import { getAuth, signInWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";
   export default{
    computed: {
      is_auth() {
        if(localStorage.getItem('token')){
          return true;
        } else{
          return false;
        }
      }
    },
    created () {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          
        } else {
          // User is signed out
          // ...
        }
      });
    },
    methods: {
      out(){
        localStorage.clear();
        this.$router.go('/login');
      }
    },
  }
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
