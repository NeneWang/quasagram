<template>
  <q-page padding>
    <input v-model="message" type="text" />
    <button @click="clearMessage">Clear</button>
    <h5>{{ message }}</h5>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "I love Vue.js",
    };
  },
  methods: {
    clearMessage(){
      this.message = ''
    }
  }
};
</script>

<style></style>
