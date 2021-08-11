<template>
  <div class='loader'>
    <div class='loaders0'></div>
    <div class='loaders1'></div>
    <div class='loaders2'></div>
    <div class='loaders3'></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingSpinner'
})
</script>

<style lang="scss" scoped>
$spinner-bg: white;

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  display: grid;
  backface-visibility: visible;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  transform-style: preserve-3d;
  perspective: 250px;
  animation: animOpac 1000ms;

  .loaders2 {
    background: $spinner-bg;
    transform-origin: top right;
    transform: rotateY(450deg) rotateX(0);
    animation: loaders2 2300ms linear infinite;
    animation-delay: 100ms;
  }

  .loaders3 {
    background: $spinner-bg;
    transform-origin: top left;
    transform: rotateX(450deg) rotateY(0);
    animation: loaders3 2300ms linear infinite;
    animation-delay: 100ms;
  }

  .loaders1 {
    background: $spinner-bg;
    transform-origin: bottom left;
    transform: rotateY(270deg) rotateX(0);
    animation: loaders1 2300ms linear infinite;
    animation-delay: 100ms;
  }

  .loaders0 {
    background: $spinner-bg;
    transform-origin: bottom right;
    transform: rotateX(360deg) rotateY(0);
    animation: loaders0 2300ms linear infinite;
    animation-delay: 100ms;
  }
}

@keyframes loaders0 {
  0% { transform: rotateX(270deg) rotateY(0) }
  12.5% { transform: rotateX(360deg) rotateY(0) }
  25% { transform: rotateX(360deg) rotateY(0) }
  37.5% { transform: rotateX(360deg) rotateY(0) }
  50% { transform: rotateX(360deg) rotateY(0deg) }
  62.5% { transform: rotateX(360deg) rotateY(90deg) }
  75% { transform: rotateX(360deg) rotateY(90deg) }
  87.5% { transform: rotateX(360deg) rotateY(90deg) }
  100% { transform: rotateX(360deg) rotateY(90deg) }
}

@keyframes loaders1 {
  0% { transform: rotateY(270deg) rotateX(0); }
  12.5% { transform: rotateY(270deg) rotateX(0); }
  25% { transform: rotateY(360deg) rotateX(0); }
  37.5% { transform: rotateY(360deg) rotateX(0); }
  50% { transform: rotateY(360deg) rotateX(0); }
  62.5% { transform: rotateY(360deg) rotateX(0); }
  75% { transform: rotateY(360deg) rotateX(-90deg); }
  87.5% { transform: rotateY(360deg) rotateX(-90deg); }
  100% { transform: rotateY(360deg) rotateX(-90deg); }
}

@keyframes loaders3 {
  0% { transform: rotateX(450deg) rotateY(0); }
  12.5% { transform: rotateX(450deg) rotateY(0); }
  25% { transform: rotateX(450deg) rotateY(0); }
  37.5% { transform: rotateX(360deg) rotateY(0); }
  50% { transform: rotateX(360deg) rotateY(0); }
  62.5% { transform: rotateX(360deg) rotateY(0); }
  75% { transform: rotateX(360deg) rotateY(0); }
  87.5% { transform: rotateX(360deg) rotateY(-90deg); }
  100% { transform: rotateX(360deg) rotateY(-90deg); }
}

@keyframes loaders2 {
  0% { transform: rotateY(450deg) rotateX(0); }
  12.5% { transform: rotateY(450deg) rotateX(0); }
  50% { transform: rotateY(450deg) rotateX(0); }
  37.5% { transform: rotateY(450deg) rotateX(0); }
  50% { transform: rotateY(360deg) rotateX(0); }
  62.5% { transform: rotateY(360deg) rotateX(0); }
  75% { transform: rotateY(360deg) rotateX(0); }
  87.5% { transform: rotateY(360deg) rotateX(0); }
  100% { transform: rotateY(360deg) rotateX(90deg); }
}
</style>