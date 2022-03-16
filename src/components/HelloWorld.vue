<template>
  <div>
    <!-- Props -->
    <!-- <h1>Name : {{ name }}</h1>
    <h1>Age : {{ age }}</h1>
    <h1>Job : {{ job }}</h1> -->
    <!-- {{ id }} {{ title }} -->
    <!-- {{ post }} -->
    <ul>
      <li v-for="(p,index) in post" :key="index">
        {{ p.data }}
      </li>
    </ul>

  </div>
</template>


<script>

export default {
  data:()=>{
    return {
   
    }
  },
  created(){
    console.log(this.post)
  },
  // props: ['name','age','job'],
  // props: ['id','title']
  props: ['post']
}

</script>
