<template>
  <q-page class="constrain q-pa-md">
    <q-card
      class="card-post q-mb-md"
      v-for="post in posts"
      :key="post.id"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img
              src="https://en.gravatar.com/userimage/154408686/cc0f6634352ebaba1c30d7bd2101dbcf.jpg?size=200"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">Nelson__Wang</q-item-label>
          <q-item-label caption> {{ post.location }} </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-img :src="post.imageUrl" />

      <q-card-section>
        <div class="text-h6">{{ post.caption }}</div>
        <div class="text-GREY">{{ post.date | niceDate }}</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { date } from "quasar";

export default {
  name: "PageHome",
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: "Golden Gate Bridge",
          date: 1656193420878,
          location: "San Francisco, United States",
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          id: 2,
          caption: "Aint a Gate Bridge",
          date: 1656193420878,
          location: "San Francisco, United States",
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          id: 3,
          caption: "Golden Gate Bridge",
          date: 1656193420878,
          location: "San Francisco, United States",
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          id: 4,
          caption: "Golden Gate Bridge",
          date: 1656193420878,
          location: "San Francisco, United States",
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
      ],
    };
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM d h:mm");
    },
  },
};
</script>

<style lang="sass">
.card-post
    .q-img
        min-height: 200px
</style>
