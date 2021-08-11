<template>
  <div class="base-route">
    <SubMenu title="Minecraft: Bugrock Edition">
      <SubMenuTab title="Play" goTo="/bugrock/play"></SubMenuTab>
      <SubMenuTab title="Installations" goTo="/bugrock/configurations"></SubMenuTab>
      <SubMenuTab title="Skins" goTo="/bugrock/skins"></SubMenuTab>
      <SubMenuTab title="Patch notes" goTo="/bugrock/patchnotes"></SubMenuTab>
    </SubMenu>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SubMenu from '../components/SubMenu.vue'
import SubMenuTab from '../components/SubMenuTab.vue'

export default defineComponent({
  name: 'Bugrock',
    components: {
    SubMenu,
    SubMenuTab
  }
})
</script>
