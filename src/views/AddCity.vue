<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 mx-auto">
          <h2>Add City</h2>

            <form @submit.prevent="add()">
                <div class="form-group mb-2">
                    <input type="text" class="form-control" placeholder="city" v-model="name" required>
                </div>
                <div class="form-group mb-2">
                    <input type="text" class="form-control" placeholder="county" v-model="county" required>
                </div>
                <div class="form-group mb-2">
                    <input type="text" class="form-control" placeholder="country" v-model="country" required>
                </div>
                <button class="btn btn-primary">Create</button>
            </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from '../firebase';
import { addDoc } from 'firebase/firestore';
export default {
    data() {
        return {
            name : null,
            county : null,
            country : null,
        }
    },
    methods: {
        async add() {
            const addedDoc = await addDoc(citiesColRef,this.$data);
            alert('City create successfully!');
            this.$router.push('/');
            console.log(addedDoc);
        }
    },
};
</script>

<style lang="scss" scoped></style>
