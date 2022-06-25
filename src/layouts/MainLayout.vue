<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />

        <q-toolbar-title class="text-center"> Quasar App </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer class="bg-white">
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
  text-align: center

.q-footer
  .q-tab__icon
    font-size: 30px
</style>
