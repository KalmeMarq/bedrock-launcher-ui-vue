<template>
  <div class="base-route">
    <SubMenu title="Settings">
      <SubMenuTab title="General" goTo="/settings/general"></SubMenuTab>
      <SubMenuTab title="Versions" goTo="/settings/versions"></SubMenuTab>
      <SubMenuTab title="Accouns" goTo="/settings/accounts"></SubMenuTab>
      <SubMenuTab title="About" goTo="/settings/about"></SubMenuTab>
    </SubMenu>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SubMenu from '../components/SubMenu.vue'
import SubMenuTab from '../components/SubMenuTab.vue'

export default defineComponent({
  name: 'Settings',
  components: {
    SubMenu,
    SubMenuTab
  }
})
</script>
