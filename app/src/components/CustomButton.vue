<template>
  <v-btn
    color="primary"
    large
    tile
  >
    {{ value }}
  </v-btn>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    value: {type: String, required: true}
  }
}
</script>
