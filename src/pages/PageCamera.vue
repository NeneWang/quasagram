<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="camera-frame q-pa-md">
      <video v-show="!imageCaptured" class="full-width" autoplay ref="video" />

      <canvas
        v-show="imageCaptured"
        ref="canvas"
        class="full-width"
        height="240"
      >
      </canvas>

      <!-- <img
        class="full-width"
        src="https://data.whicdn.com/images/342829695/original.jpg"
        alt=""
      /> -->
      <div class="text-center q-pa-md v">
        <q-btn
          @click="captureImage"
          color="grey-10"
          icon="eva-camera"
          round
          size="lg"
        />
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

require("md-gum-polyfill");

export default {
  name: "PageCamera",
  data() {
    return {
      post: {
        id: uid(),
        caption: "",
        location: "",
        photo: null,
        date: Date.now(),
      },
      imageCaptured: false,
    };
  },
  methods: {
    initCamera() {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((stream) => {
          this.$refs.video.srcObject = stream;
        });
    },
    captureImage() {
      let video = this.$refs.video;
      let canvas = this.$refs.canvas;

      canvas.width = video.getBoundingClientRect().width;
      canvas.heigth = video.getBoundingClientRect().heigth;

      let context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.width);
      this.imageCaptured = true;
      this.post.photo = this.dataURItoBlob(canvas.toDataURL());
    },
    dataURItoBlob() {
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
      var byteString = atob(dataURI.split(",")[1]);

      // separate out the mime component
      var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

      // write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length);

      // create a view into the buffer
      var ia = new Uint8Array(ab);

      // set the bytes of the buffer to the correct values
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      // write the ArrayBuffer to a blob, and you're done
      var blob = new Blob([ab], { type: mimeString });
      return blob;
    },
  },
  mounted() {
    this.initCamera();
  },
};
</script>

<style lang="sass">
.camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>
