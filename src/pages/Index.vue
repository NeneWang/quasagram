<template>
  <q-page padding>
    <button style="position: absolute; right: 10px" @click="counter++">
      {{ counter }}
    </button>
    <input
      v-autofocus
      @keyup="handleKeyUp"
      v-model="message"
      type="text"
      :style="errorStyle"
      ref="messageInput"
    />
    <button @click="clearMessage">Clear</button>

    <div>
      {{message.length}}
    </div>

    <h5 v-if="message.length" class="border-grey">{{ message }}</h5>
    <h6 v-else>No message entered 😢</h6>
    <hr />
    <p>Uppercased Message: {{ messageUppercase }}</p>
    <p>Lowercase Message: {{ message | messageLowercase }}</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "I love Vue.js",
      counter: 0,
    };
  },
  computed: {
    messageUppercase() {
      console.log("MessageUppercase was fired");
      return this.message.toUpperCase();
    },
    errorStyle(){
      if(this.message.length > 22){
        return 'color: red;'
      }
    }
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
  filters: {
    messageLowercase(value) {
      return value.toLowerCase();
    },
  },
  directives: {
    autofocus: {
      inserted(el) {
        console.log("directive fired");
        el.focus();
      },
    },
  },
  mounted(){
    console.log(this.$refs)
    this.$refs.messageInput.className = 'bg-green'
  }
};
</script>

<style>
.border-grey {
  border: 1px solid grey;
}

input,
button {
  font-size: 23px;
}

.error {
  color: red;
  background: pink;
}
</style>
