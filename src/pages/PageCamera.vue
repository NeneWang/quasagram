<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="camera-frame q-pa-md">
      <img
        class="full-width"
        src="https://data.whicdn.com/images/342829695/original.jpg"
        alt=""
      />
      <div class="text-center q-pa-md v">
        <q-btn color="grey-10" icon="eva-camera" round size="lg" />
      </div>

      <div class="row justify-center q-sm-6">
        <q-input v-model="post.caption" class="col" label="Caption" dense />
      </div>

      <div class="row justify-center q-sm-6">
        <q-input v-model="post.location" class="col" label="Location" dense>
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
import { uid } from "quasar";

export default {
  name: "PageCamera",
  data() {
    return {
      post: {
        id: uid(),
        caption: "",
        location: "",
        photo: null,
        date: Date.now()
      },
    };
  },
};
</script>

<style lang="sass">
.camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>
