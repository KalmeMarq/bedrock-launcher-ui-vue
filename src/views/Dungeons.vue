<template>
  <div class="base-route">
    <SubMenu title="Minecraft Dungeons">
      <SubMenuTab title="Play" goTo="/dungeons/play"></SubMenuTab>
      <SubMenuTab title="DLC" goTo="/dungeons/dlc"></SubMenuTab>
      <SubMenuTab title="FAQ" goTo="/dungeons/faq"></SubMenuTab>
      <SubMenuTab title="Installation" goTo="/dungeons/configuration"></SubMenuTab>
      <SubMenuTab title="Mods" goTo="/dungeons/mods"></SubMenuTab>
      <SubMenuTab title="Patch notes" goTo="/dungeons/patchnotes"></SubMenuTab>
    </SubMenu>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SubMenu from '../components/SubMenu.vue'
import SubMenuTab from '../components/SubMenuTab.vue'

export default defineComponent({
  name: 'Dungeons',
  components: {
    SubMenu,
    SubMenuTab
  }
})
</script>
