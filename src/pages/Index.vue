<template>
  <q-page padding>
    <input @keyup="handleKeyUp" v-model="message" type="text" />
    <button @click="clearMessage">Clear</button>
    <h5 class="border-grey" v-show="message.length">{{ message }}</h5>
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
  },
};
</script>

<style>
.border-grey {
  border: 1px solid grey;
}
</style>
