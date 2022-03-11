<template>
  <div class="hello">
    <input type="text" placeholder="link" @keydown.enter="addLink"  v-model="add_link">
    <button  @click="addLink">Add Link</button>
    <h2>
      {{ title }}
    </h2>
    <ul>
      <li v-for="(link , index) in links" :key="link.id">
        {{ link.link }} <button @click="editLink(index)">edit</button> <button @click="removeLink(index)">remove</button>
      </li>
    </ul>

<!--    Another Component-->

    <stuff></stuff>

  </div>
</template>

<script>
import { mapState , mapMutations } from 'vuex';
import Stuff from "@/components/stuff";
export default {
  name: 'HelloWorld',
  data() {
    return {
      add_link: '',
      isEdit: false,
      edit_index: '',
    }
  },
  components: {Stuff},
  // computed:mapState([
  //     'title'
  // ])
  // computed: {
  //   ...mapState({
  //     custom : 'title'
  //   }),
  // Other Property
  // },
  computed: {
    ...mapState([
        'title',
        'links',
    ]),
  },
  methods: {
    ...mapMutations([
        'Add_link',
        'Remove_link',
        'Edit_link'
    ]),
    addLink() {
      this.Add_link(this.add_link);
      this.add_link = '';
    },
    removeLink(index) {
      this.Remove_link(index);
    },
    editLink(index) {
      this.Edit_link(index);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
