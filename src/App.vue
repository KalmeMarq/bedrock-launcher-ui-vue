<template>
  <div class="main-app">
    <MainMenu />
    <router-view class="routes"/>
  </div>
  <AlertMessaging />
</template>

<script lang="ts">
import AlertMessaging from './components/AlertMessaging.vue'
import MainMenu from './components/MainMenu.vue'

export default {
  components: {
    MainMenu,
    AlertMessaging
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Noto Sans';
  src: url(./assets/fonts/NotoSans-Regular.ttf);
}

@font-face {
  font-family: 'Noto Sans Bold';
  src: url(./assets/fonts/NotoSans-Bold.ttf);
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: hsl(0, 0%, 22%);
}

.main-app {
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  height: 100%;
}

.routes {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.base-route {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  background: #323232;
}
</style>
