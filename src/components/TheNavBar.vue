<script setup>
  import { Icon } from '@iconify/vue'
</script>
<template>
  <nav class="header-nav">
    <div class="header-logo">
      <img src="../assets/images/header_logo.png" alt="header logo" />
    </div>
    <div>
      <ul class="header-nav-menu-list">
        <li class="header-nav-phone-items">
          <span><Icon icon="ic:round-phone-in-talk" class="t-header-nav-phone-icon" /></span>
          <span class="header-nav-phone-number">04-2998-0766</span>
        </li>
      </ul>
    </div>
    <div class="header-mobile-menu-list"></div>
  </nav>
</template>

<style lang="scss" scoped>
  .header-nav {
    overflow: hidden;
    display: flex;
  }

  .header-logo {
    position: relative;
    flex: 1;
    display: flex;
    padding: 20px;
    //   background-color: red;
  }

  .header-logo h2 {
    padding-left: 30px;
  }

  .header-nav-menu-list {
    flex: 1.2;
    justify-content: flex-start;
    gap: 64px;
    align-items: center;
    display: flex;
    padding: 20px;
    list-style: none;
    cursor: pointer;
  }

  .header-nav-phone-items {
    align-items: center;
    display: flex;

    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .header-nav-phone-number {
    margin-left: 0.5rem;
  }

  .t-header-nav-phone-icon {
    font-size: 3rem;
    line-height: 1;
  }
</style>
