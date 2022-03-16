import { createStore } from 'vuex'

export default createStore({
  state: { // Like the Data
    title: 'My Custom Title',
    links: []
  },
  getters: { // Like the Computed
    countLinks: state => {
      return state.links.length;
    }
  },
  mutations: { // Like the method
    Add_link: (state,link) => {
      state.links.push({
        'link' : link
      });
    },
    Remove_link: (state,index) => {
      state.links.splice( index,1 );
    },
    Edit_link: (state,index) => {
      state.links[index].link = 'hello';
    }
  },
  actions: {
  },
  modules: {
  }
})
