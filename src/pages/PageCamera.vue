<template>
  <q-page class="flex flex-center">
    <div class="camera-frame q-pa-md">
        <img class="full-width" src="https://data.whicdn.com/images/342829695/original.jpg" alt="">
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageCamera",
};
</script>


<style lang="sass" > 
    .camera-frame
        border: 2px solid $grey-10
        border-radius: 10px
</style>
