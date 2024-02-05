<script setup>
  import { Icon } from '@iconify/vue'
</script>
<template>
  <nav class="mobile-nav">
    <div class="logo">
      <img src="../assets/images/header_logo.png" alt="header logo" />
    </div>
    <div>
      <ul class="menu-list">
        <li class="phone-items">
          <span><Icon icon="ic:round-phone-in-talk" class="t-phone-icon" /></span>
          <span class="phone-number">04-2998-0766</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .mobile-nav {
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    display: flex;
    padding: 20px;
  }

  .logo {
    position: relative;
    padding: 20px;
  }

  .menu-list {
    width: 100%;
    padding: 0;
    list-style: none;
    cursor: pointer;
  }

  .phone-items {
    align-items: center;
    display: flex;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .phone-number {
    margin-left: 0.5rem;
  }

  .t-phone-icon {
    font-size: 3rem;
    line-height: 1;
  }
</style>
