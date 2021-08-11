<template>
  <div className='mainmenu-tab'>
    <router-link title="tooltip" :to="to">
      <div className='mainmenu-tab-icon'>
        <img :src=icon alt="icon" />
      </div>
      <div className='mainmenu-tab-cont'>
        <slot />
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainMenuTab',
  props: {
    icon: String,
    to: String
  }
})
</script>

<style lang="scss">
.mainmenu-tab {
  width: 100%;
  height: 56px;
  min-height: 56px;
  transition-property: background;
  transition-duration: 180ms;

  a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    text-decoration: none;
    border: 1px solid transparent;

    &:hover {
      background: hsl(0, 0%, 24%);
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      border: 1px solid white;
      background: hsl(0, 0%, 24%);
    }
  }

  .router-link-active {
    pointer-events: none;

    .mainmenu-tab-cont {
      font-family: 'Noto Sans Bold';
    }

    &::before {
      background: white;
      transition-property: height;
      transition-duration: 200ms;
      height: 18px;
    }
  }

  a::before {
    content: '';
    display: block;
    position: absolute;
    background: transparent;
    width: 4px;
    height: 0px;
    top: 50%;
    transform: translate(0, -50%);
  }

  .mainmenu-tab-icon {
    padding: 0rem 0.9rem;
    display: flex;
    height: 100%;
    place-items: center;
    place-content: center;
    padding: 0.8rem 0.85rem;

    img {
      width: auto;
      height: 29px;
      image-rendering: pixelated;
    }
  }

  .mainmenu-tab-cont {
    display: flex;
    flex-direction: column;
    place-content: center;
    width: 100%;
    font-size: 14px;
    line-height: 1rem;
    text-align: middle;
    margin-top: -0.1rem;
    color: white;
    font-family: 'Noto Sans';

    i {
      font-style: normal;
      text-transform: uppercase;
      width: 100%;
      font-size: 11px;
      color: white;
    }

    span {
      font-weight: 100;
      font-style: normal;
    }
  }
}

@media screen and (max-width: 964px) {
  .mainmenu-tab .mainmenu-tab-cont {
    display: none;
  }
}
</style>
