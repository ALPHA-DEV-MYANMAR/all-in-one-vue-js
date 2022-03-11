<template>
  <div>
    <h5>A Different Component - links~{{ countLinks }}</h5>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters([
          'countLinks'
      ])
    },
  }
</script>