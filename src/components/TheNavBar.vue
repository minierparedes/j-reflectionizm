<script setup>
  import { Icon } from '@iconify/vue'
</script>
<template>
  <nav class="l-header-nav">
    <div class="c-header-logo">
      <div class="c-header-logo-overlay"></div>
      <img src="../assets/images/header_logo.png" alt="header logo" />
    </div>
    <div>
      <ul class="c-header-nav-menu-list">
        <li>TITLE 1</li>
        <li>TITLE 2</li>
        <li class="c-header-nav-phone-items text-4xl">
          <span><Icon icon="ic:round-phone-in-talk" class="t-header-nav-phone-icon text-5xl" /></span>
          <span class="c-header-nav-phone-number">04-2998-0766</span>
        </li>
      </ul>
    </div>
    <div class="c-header-mobile-menu-list"></div>
  </nav>
</template>

<style lang="scss" scoped>
  .l-header-nav {
    overflow: hidden;
    display: flex;
  }

  .c-header-logo {
    position: relative;
    flex: 1;
    display: flex;
    padding: 20px;
    //   background-color: red;
  }

  .c-header-logo-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    // logo svg goes here
  }

  .c-header-logo h2 {
    padding-left: 30px;
  }

  .c-header-nav-menu-list {
    flex: 1.2;
    justify-content: flex-start;
    gap: 64px;
    align-items: center;
    display: flex;
    padding: 20px;
    list-style: none;
    cursor: pointer;
  }

  .c-header-nav-phone-items {
    align-items: center;
    display: flex;
  }

  .c-header-nav-phone-number {
    margin-left: 0.5rem;
  }
</style>
