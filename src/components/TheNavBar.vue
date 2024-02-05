<script setup>
  import { Icon } from '@iconify/vue'
</script>
<template>
  <nav class="nav">
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
    <div class="mobile-menu-list"></div>
  </nav>
</template>

<style lang="scss" scoped>
  .nav {
    overflow: hidden;
    display: flex;
  }

  .logo {
    position: relative;
    flex: 1;
    display: flex;
    padding: 20px;
    //   background-color: red;
  }

  .logo h2 {
    padding-left: 30px;
  }

  .menu-list {
    flex: 1.2;
    justify-content: flex-start;
    gap: 64px;
    align-items: center;
    display: flex;
    padding: 20px;
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
