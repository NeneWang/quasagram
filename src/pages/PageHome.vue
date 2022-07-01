<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-sm-8 col-12">
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
      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar>
              <img
                src="https://en.gravatar.com/userimage/154408686/cc0f6634352ebaba1c30d7bd2101dbcf.jpg?size=200"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">Nelson__Wang</q-item-label>
            <q-item-label caption> Nelson Wang </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from "quasar";

export default {
  name: "PageHome",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      console.log("GetPosts")
      this.$axios.get('http://localhost:4000/posts').then(response => {
        console.log('response: ', response)
        this.posts = response.data
      }).catch(err => {
        console.log('err: ', err)
      })

    },
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM d h:mm");
    },
  },
  created(){
    this.getPosts()
  }
};
</script>

<style lang="sass">
.card-post
    .q-img
        min-height: 200px
</style>
