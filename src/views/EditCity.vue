<template>
  <div>
    <h2>Cities Update</h2>

    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 mx-auto">
                <form @submit.prevent="update()">
                    <div class="form-group mb-2">
                        <input type="text" class="form-control" placeholder="edit city" v-model="name" required>
                    </div>
                    <div class="form-group mb-2">
                        <input type="text" class="form-control" placeholder="edit county" v-model="county" required>
                    </div>
                    <div class="form-group mb-2">
                        <input type="text" class="form-control" placeholder="edit country" v-model="country" required>
                    </div>
                    <button class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import citiesColRef from '../firebase';
import { getDoc , doc ,setDoc } from 'firebase/firestore';
export default {
   data() {
       return {
           selectedCity: {},
           cityId: null,
           docRef: null,
           name: null,
           county: null,
           country: null,
       }
   },
   methods: {
       async getCity() {
           let cityRef = doc(citiesColRef,this.cityId);
           this.docRef = cityRef;
           let city = await getDoc(this.docRef);
           console.log(city.data());
           this.name = city.data().name;
           this.county = city.data().county;
           this.country = city.data().country;
       },

       async update(){
           const updateDoc = await setDoc(this.docRef,{
               'name' : this.name ,
               'county' : this.county ,
               'country' : this.country 
           });
           this.$router.push('/');
       }
   },
   created(){
       let cityId = this.$route.params.id;
       this.cityId = cityId;
       this.getCity();
   }
}
</script>

<style lang="scss" scoped>

</style>