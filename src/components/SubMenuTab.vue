<template>
  <li>
    <router-link :to="goTo" :title="title">{{title}}</router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const SubMenuTab = defineComponent({
  name: 'SubMenuTab',
  props: {
    title: String,
    goTo: String
  }
})

export default SubMenuTab
</script>