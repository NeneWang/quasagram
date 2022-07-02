<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-sm-8 col-12">
        <template v-if="!loadingPosts">
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
        </template>
        <template v-else>
          <q-card flat bordered>
            <q-item>
              <q-item-section avatar>
                <q-skeleton type="QAvatar" />
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  <q-skeleton type="text" />
                </q-item-label>
                <q-item-label caption>
                  <q-skeleton type="text" />
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-skeleton height="200px" square />

            <q-card-actions align="right" class="q-gutter-md">
              <q-skeleton type="QBtn" />
              <q-skeleton type="QBtn" />
            </q-card-actions>
          </q-card>
        </template>
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
      loadingPosts: false,
    };
  },
  methods: {
    getPosts() {
      this.loadingPosts = true;
      this.$axios
        .get("http://localhost:4000/posts")
        .then((res) => {
          this.posts = res.data;
          this.loadingPosts = false;
        })
        .catch((err) => {
          this.$q.dialog({
            title: "Error",
            message: "Could not find your location",
          });
        });
    },
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM d h:mm");
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style lang="sass">
.card-post
    .q-img
        min-height: 200px
</style>
