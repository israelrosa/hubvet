<template>
  <v-app
    id="app"
  >
    <v-app-bar
      elevation="0"
      clipped-left
      clipped-right
      height="60"
      app
    >
      <v-img
        contain
        width="100%"
        max-height="70%"
        src="@/assets/logo-extended.png"
        content-class="d-flex justify-end"
      />
    </v-app-bar>
    <v-navigation-drawer
      clipped
      app
    />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style lang="scss">
  #app {
    max-height: 100vh;
    max-width: 100vw;
  }
</style>

