<template>
  <q-page class="flex flex-center">
    <div class="camera-frame q-pa-md">
      <img
        class="full-width"
        src="https://data.whicdn.com/images/342829695/original.jpg"
        alt=""
      />
      <div class="text-center q-pa-md v">
        <q-btn color="grey-10" icon="eva-camera" round size="lg" />
      </div>

      <div class="row justify-center q-ma-md">
        <q-input v-model="text" class="col" label="Caption" dense />
      </div>

      <div class="row justify-center q-ma-md">
        <q-input v-model="text" class="col" label="Location" dense>
          <template v-slot:append>
            <q-btn round dense flat icon="eva-navigation-2-outline" />
          </template>
        </q-input>
      </div>

      <div class="row justify-center q-ma-lg">
        <q-btn unelevated rounded color="primary" label="Post Image" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageCamera",
};
</script>

<style lang="sass">
.camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>
