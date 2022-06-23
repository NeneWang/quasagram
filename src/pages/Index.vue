<template>
  <q-page padding>
    <button style="position: absolute; right: 10px" @click="counter++"> {{counter}} </button>
    <input @keyup="handleKeyUp" v-model="message" type="text" />
    <button @click="clearMessage">Clear</button>
    <h5 v-if="message.length" class="border-grey" >{{ message }}</h5>
    <h6 v-else>No message entered 😢</h6>
    <hr>
    <p>Uppercased Message: {{messageUppercase()}}</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "I love Vue.js",
      counter: 0
    };
  },
  methods: {
    clearMessage() {
      this.message = "";
    },
    handleKeyUp(e) {
      console.log(e);
      if (e.keyCode == 27) {
        this.clearMessage();
      } else if (e.keyCode == 13) {
        alert(this.message);
      }
    },
    messageUppercase(){
      return this.message.toUpperCase()
    }
  },
};
</script>

<style>
.border-grey {
  border: 1px solid grey;
}
</style>
