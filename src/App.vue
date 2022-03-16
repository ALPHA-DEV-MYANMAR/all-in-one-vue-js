<template>
  <div>
    <!-- Props -->
    <!-- <hello-world name='Aung Paing Soe' age='22' job='Web Developer'/> -->
    <!-- <hello-world :id="post.id" :title="post.title" ></hello-world> -->
    <hello-world :post="post"></hello-world>

    <hello-world-2 @do-something='DoSomething'></hello-world-2>
    <h1>{{ count }}</h1> 
    <hello-world-2 @submit='Submit'></hello-world-2>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloWorld2 from './components/HelloWorld2.vue';
export default {
  data() {
    return {
      count: 0,
      post: [
        {
          'id':1,
          'data': 'hello'
        },
        {
          'id':2,
          'data': 'world'
        }
      ]
    }
  },
  methods: {
    DoSomething(n){
      this.count += n;
    },
    Submit({email,password}){
      console.log(email,password)
    }
  },
  components: {
    HelloWorld,
    HelloWorld2,
  },
};
</script>


