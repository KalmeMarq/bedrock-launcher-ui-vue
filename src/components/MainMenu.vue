<template>
  <nav class="main-menu">
    <MainMenuTab :icon="require('../assets/icons/news_icon.png')" :to="'/news'">
      News
    </MainMenuTab>
    <MainMenuTab :icon="require('../assets/icons/grass_icon.png')" :to="'/java'">
      <i>Minecraft:</i>
      <span>Java Edition</span>
    </MainMenuTab>
    <MainMenuTab :icon="require('../assets/icons/bugrock_icon.png')" :to="'/bugrock'">
      <i>Minecraft:</i>
      <span>Bugrock Edition</span>
    </MainMenuTab>
    <MainMenuTab :icon="require('../assets/icons/dungeons_icon.png')" :to="'/dungeons'">
      <i>Minecraft</i>
      <span>Dungeons</span>
    </MainMenuTab>
    <MainMenuTab :icon="require('../assets/icons/store.png')" :to="'/store'">
      Store
    </MainMenuTab>
    <MainMenuTab :icon="require('../assets/icons/com_icon.png')" :to="'/community'">
      Community  
    </MainMenuTab>
    <div class="filler"></div>
    <MainMenuTab :icon="require('../assets/icons/settings_icon.png')" :to="'/settings'">
      Settings
    </MainMenuTab>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainMenuTab from './MainMenuTab.vue'

export default defineComponent({
  name: 'MainMenu',
  components: {
    MainMenuTab
  }
})
</script>

<style scoped lang="scss">
.main-menu {
  display: flex;
  flex-direction: column;
  width: 180px;
  max-width: 180px;
  min-width: 180px;
  height: 100%;
  background: hsl(0, 0%, 15%);

  .filler {
    height: 100%;
  }
}
</style>