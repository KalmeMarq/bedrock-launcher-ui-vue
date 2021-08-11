<template>
  <LoadingSpinner></LoadingSpinner>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoadingSpinner from './LoadingSpinner.vue'

const Empty = defineComponent({
  components: {
    LoadingSpinner
  }
})

export default Empty
</script>