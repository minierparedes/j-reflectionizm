<script setup>
  import { Icon } from '@iconify/vue'
</script>
<template>
  <div id="page-hero" class="c-page-hero">
    <div class="c-page-hero-image"><img src="../assets/images/page_hero.png" alt="hero background" /></div>
    <div class="l-page-hero-container">
      <div class="c-page-hero-headline text-black">
        <h4 class="t-page-hero-headline-1 mb-4 text-4xl">歴史と自然の都「所沢」の公園墓地</h4>
        <div class="t-page-hero-headline-main">
          <h3 class="t-page-hero-headline-3 text-6xl">霊源寺墓苑</h3>
          <h1 class="t-page-hero-headline-4 text-8xl">陽向の里</h1>
        </div>
      </div>
      <div class="l-page-hero-columns">
        <div class="c-page-hero-pill-list">
          <h3 class="c-page-hero-pill-1 rounded-full bg-white text-red-500">所沢駅からバスで10分</h3>
          <h3 class="c-page-hero-pill-2 rounded-full bg-blue-500">後継ぎ心配不要・全区画永代供養付き</h3>
          <h3 class="c-page-hero-pill-3 rounded-full bg-blue-500">30万円～用途別のお墓を用意</h3>
        </div>
        <div class="c-page-hero-badge">
          <img src="../assets/images/gold_badge.png" alt="gold badge" />
          <p class="t-page-hero-badge-text text-l font-bold text-red-600">
            一般墓<br />
            好評発売中
          </p>
        </div>
      </div>
      <div class="c-page-hero-button-content bg-gradient-to-b from-orange-700 to-orange-500">
        <button class="c-page-hero-button text-xl text-white">無料で詳細資料を見る</button>
        <span><Icon icon="icon-park-solid:play" class="t-page-hero-button-icon size-5 text-white" /></span>
      </div>
    </div>
  </div>
</template>
