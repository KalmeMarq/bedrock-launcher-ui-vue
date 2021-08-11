<template>
  <div class="alert-messaging">
    <div v-for="alert in alerts" v-bind:key="alert.id" class="alert-message">
       <img src="../assets/icons/info.svg" class='icon' />
      <div v-html="alert.message" class="message"></div>
      <button class="close-btn">
        <img src="../assets/icons/cancel.svg" alt="">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const AlertMessaging = defineComponent({
  data() {
    return {
      alerts: []
    }
  },
  mounted() {
    fetch('https://launchercontent.mojang.com/alertMessaging.json')
      .then(res => res.json())
      .then(data => this.alerts = data.entries)
  }
})

export default AlertMessaging
</script>

<style lang="scss">
$alert-border: #6D6D6E;
$alert-bg: #48494A;

.alert-messaging {
  display: flex;
  flex-direction: column;
}

.alert-message {
  display: flex;
  flex-direction: row;
  border-top: 1px solid $alert-border;
  background: $alert-bg;
  width: 100%;
  place-items: center;
}

.icon {
  width: 22px;
  height: 22px;
  margin: 0 0.5rem 0 0.7rem;
  filter: invert(100%);
}

.message {
  vertical-align: middle;
  width: 100%;
  padding: 0.4rem 2rem 0.5rem 0;
  color: white;
  font-family: 'Noto Sans';
  font-size: 0.9rem;
}

.external-link {
  color: white;
  position: relative;
  padding: 0px 26px 2px 4px;
  border-radius: 3px;
  font-family: 'Noto Sans Bold';

  &:hover {
    background: #ffffff44;
  }

  &::after {
    position: absolute;
    content: '';
    display: block;
    background: url(../assets/icons/hyperlink.png) no-repeat;
    width: calc(14px);
    height: calc(14px);
    top: 3px;
    right: 6px;    
  }
}

.close-btn {
  cursor: pointer;
  width: 36px;
  height: 100%;
  border: 1px solid transparent;
  background: none;

  &:hover,
  &:focus {
    outline: none;
    background: hsl(180, 1%, 36%);
  }

  img {
    width: 12px;
  }
}
</style>