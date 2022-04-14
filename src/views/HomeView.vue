<template>
  <div>
    <h2>Cities</h2>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mx-auto">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">County</th>
                <th scope="col">Country</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='c in cities' :key="c.id">
                <td>{{ c.name }}</td>
                <td>{{ c.county }}</td>
                <td>{{ c.country }}</td>
                <td>
                  <button class="btn btn-primary btn-sm" @click="go(c)">Edit</button>
                  <button class="btn btn-danger btn-sm" @click="del(c)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import citiesColRef from '../firebase';
import { getDocs , doc , deleteDoc } from 'firebase/firestore';

export default {
  name: 'HomeView',
  data() {
    return {
      cities : [],
    }
  },
  created () {
    this.fetchCities();
  },
  methods:{
    async fetchCities(){
      let citiesSnapShot = await getDocs(citiesColRef);
      let cities = [];
      citiesSnapShot.forEach(city => {
        let cityData = city.data();
        cityData.id = city.id;
        cities.push(cityData);
      });
      this.cities = cities;
    },
    go(c) {
        this.$router.push({name: 'editCity',params: { 'id' : c.id }}); 
    },

    async del(c){
      let cityRef = doc(citiesColRef,c.id);
      await deleteDoc(cityRef);
      let delcity = this.cities.filter((el)=>{
        return el.id !== c.id ; 
      });
      this.cities = delcity;
    }
  },

}
</script>
