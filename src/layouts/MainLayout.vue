<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-tabs>
        <q-route-tab
          to="/"
          icon="mail"
          label="Home"
          name="home" />
        <q-route-tab
          to="/camera"
          icon="alarm"
          label="Camera"
          name="camera" />
      </q-tabs>
    </q-header>

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
