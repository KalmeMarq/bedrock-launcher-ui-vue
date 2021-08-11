<template>
  <div class="base-route">
    <SubMenu title="Minecraft: Java Edition">
      <SubMenuTab title="Play" goTo="/java/play"></SubMenuTab>
      <SubMenuTab title="Installations" goTo="/java/configurations"></SubMenuTab>
      <SubMenuTab title="Skins" goTo="/java/skins"></SubMenuTab>
      <SubMenuTab title="Patch notes" goTo="/java/patchnotes"></SubMenuTab>
    </SubMenu>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SubMenu from '../components/SubMenu.vue'
import SubMenuTab from '../components/SubMenuTab.vue'

export default defineComponent({
  name: 'Java',
  components: {
    SubMenu,
    SubMenuTab
  }
})
</script>

<style lang="scss" scoped>
</style>