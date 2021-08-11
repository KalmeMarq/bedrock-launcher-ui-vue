<template>
  <header class="java-header">
    <h2>{{title}}</h2>
    <nav>
      <ul>
        <slot />
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SubMenu',
  props: {
    title: String
  }
})
</script>


<style scope lang="scss">
.java-header {
  background: hsl(0, 0%, 15%);
  padding: 30px 1.2rem 0;
  height: 83px;
  min-height: 83px;
  position: relative;

   h2 {
    font-family: 'Noto Sans Bold';
    color: white;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 100;
    padding: 0 0 3px;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }

  li {
    text-align: center;
    list-style: none;
    margin: 2.5px 1.6rem 0.8rem 0;

    &:first-of-type {
      padding-right: 0;
    }

    &:last-of-type {
      padding-left: 0;
    }
  }

  a {
    color: hsl(0, 0%, 79%);
    text-decoration: none;
    position: relative;
    font-family: 'Noto Sans';
    font-size: 14px;

    &:hover {
      color: hsl(0, 0%, 89%);
    }
  }

  a::before {
    display: block;
    content: attr(title);
    font-family: 'Noto Sans Bold';
    overflow: hidden;
    visibility: hidden;
    height: 0px;
  }

  a.router-link-active {
    pointer-events: none;
    font-family: 'Noto Sans Bold';
    color: hsl(0, 0%, 100%);

    &::after {
      background: hsl(150, 100%, 26%);
      transition-property: width;
      transition-duration: 200ms;
      width: 20px;
    }
  }

  a:focus {
    outline: none;
  }

  a:focus-visible {
    font-family: 'Noto Sans Bold';
    color: hsl(0, 0%, 100%);
  }

  a.router-link-active:focus-visible::after {
    background: hsl(0, 0%, 100%);
    width: 20px;
  }

  a::after {
    content: '';
    display: block;
    position: relative;
    width: 0;
    height: 3px;
    background: transparent;
    left: 50%;
    transform: translate(-50%);
    bottom: -8px;
  }
}
</style>