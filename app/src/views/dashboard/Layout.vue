<template>
  <v-app
    id="app"
  >
    <v-app-bar
      id="app-bar"
      elevation="0"
      clipped-left
      clipped-right
      height="60px"
      app
      color="white"
    >
      <v-app-bar-nav-icon />
      <v-toolbar-title
        class="d-flex"
        height="100%"
      >
        <v-img
          contain
          max-width="126px"
          src="@/assets/logo-extended.png"
        />
      </v-toolbar-title>
      <v-divider
        vertical
        class="ml-14"
      />
    </v-app-bar>
    <v-navigation-drawer
      class="elevation-12"
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

  #app-bar {
    border-bottom: 1px solid #0000001f !important
  }
</style>

