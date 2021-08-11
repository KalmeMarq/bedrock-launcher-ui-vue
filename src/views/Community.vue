<template>
  <div class="base-route com-route">
    <h1>Coming Soon!</h1>
    <p>Check back here later for something SUPER DUPER AWESOME!</p>

    <div className='donate-panel'>
      <p>❤ Support Development ❤</p>
      <form action="https://www.paypal.com/donate" method="post" target="_blank">
        <input type="hidden" name="business" value="RNZMRCMNX3SJY" />
        <input type="hidden" name="item_name" value="Support the Launcher's Development" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Community'
})
</script>

<style lang="scss" scoped>
.com-route {
  place-content: center;
  place-items: center;
  width: 100%;

   h1, p {
    color: white;
  }

  h1 {
    font-family: 'Noto Sans Bold';
  }

  p {
    padding-top: 0.5rem;
    font-family: 'Noto Sans';
    font-size: 15px;
  }

  .donate-panel {
    position: absolute;
    background: hsl(0, 0%, 7%);
    width: max-content;
    height: 126px;
    right: 0;
    bottom: 0;
    border-top-left-radius: 16px;
    display: flex;
    padding: 0 1rem;
    flex-direction: column;
    place-items: center;

    p {
      color: red;
      font-size: 0.9rem;
      padding: 0.6rem 0;
    }
  }
}
</style>
