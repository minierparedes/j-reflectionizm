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
