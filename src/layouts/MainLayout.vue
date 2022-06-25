<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          to="/camera"
          class="large-screen-only"
          flat
          icon="eva-camera-outline"
          size="18px"
          round
          dense
        />

        <q-toolbar-title class="text-grand-hotel text-bold">
          Quasar App
        </q-toolbar-title>

        <q-btn
          to="/"
          class="large-screen-only"
          flat
          icon="eva-home-outline"
          size="18px"
          round
          dense
        />

        <q-separator inset vertical></q-separator>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white small-screen-only">
      <q-tabs
        class="text-grey-10"
        active-color="primary"
        indicator-color="transparent"
      >
        <q-route-tab to="/" icon="mail" label="Home" name="home" />
        <q-route-tab to="/camera" icon="alarm" label="Camera" name="camera" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  },
};
</script>

<style lang="sass">
.q-toolbar__title
  font-size: 30px
  text-align: center

.q-footer
  .q-tab__icon
    font-size: 30px
</style>
