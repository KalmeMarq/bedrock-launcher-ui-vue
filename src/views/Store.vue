<template>
  <div class="base-route">
    <LoadingSpinner></LoadingSpinner>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

export default defineComponent({
  name: 'Store',
  components: {
    LoadingSpinner
  }
})
</script>
