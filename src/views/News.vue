<template>
  <div class="base-route news-route">
    <header>
      <img src="../assets/logos/logo.png" alt='logo' />
    </header>
    <LoadingSpinner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoadingSpinner from '../components/LoadingSpinner.vue'

export default defineComponent({
  name: 'News',
  components: {
    LoadingSpinner
  },
});
</script>

<style lang="scss" scoped>
.news-route {
  header {
    position: relative;
    width: 100%;
    height: 69px;
    min-height: 69px;
    background: url(../assets/bg-wool-dark.png);
    background-position-x: right;

    box-shadow: 0 3px 5px -1px #00000099;

    img {
      position: absolute;
      max-width: 400px;
      top: 1rem;
      left: 50%;
      transform: translate(-50%);
    }
  }
}
</style>
