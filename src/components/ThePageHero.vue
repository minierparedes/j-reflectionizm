<script setup>
  import { Icon } from '@iconify/vue'
</script>
<template>
  <div id="page-hero-id" class="page-hero">
    <div class="hero-image"><img src="../assets/images/page_hero.png" alt="hero background" /></div>
    <div class="container">
      <div class="headline">
        <h4 class="headline-1">歴史と自然の都「所沢」の公園墓地</h4>
        <div class="headline-main">
          <h3 class="headline-2">霊源寺墓苑</h3>
          <h1 class="headline-3">陽向の里</h1>
        </div>
      </div>
      <div class="columns">
        <div class="pill-list">
          <h3 class="pill-1">所沢駅からバスで10分</h3>
          <h3 class="pill-2">後継ぎ心配不要・全区画永代供養付き</h3>
          <h3 class="pill-3">30万円～用途別のお墓を用意</h3>
        </div>
        <div class="badge">
          <img src="../assets/images/gold_badge.png" alt="gold badge" />
          <p class="badge-text">
            一般墓<br />
            好評発売中
          </p>
        </div>
      </div>
      <div class="button-content">
        <button class="button">無料で詳細資料を見る</button>
        <span><Icon icon="icon-park-solid:play" class="button-icon" /></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    height: 100vh;
  }

  .hero-image {
    position: relative;
  }
  .headline {
    margin-top: 10rem;
    color: black;
    text-align: center;
  }
  .headline-1 {
    margin-bottom: 1rem;
    font-size: 2.25rem /* 36px */;
    line-height: 2.5rem /* 40px */;
  }

  .headline-2 {
    font-size: 3.75rem /* 60px */;
    line-height: 1;
  }

  .headline-3 {
    font-size: 6rem /* 96px */;
    line-height: 1;
  }

  .headline-main {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .columns {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    gap: 1rem;
  }

  .pill-list {
    grid-template-columns: 1;
    display: grid;
    text-align: center;
  }

  .pill-1 {
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;

    color: rgb(239 68 68 / var(--tw-text-opacity));
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }

  .pill-1,
  .pill-2,
  .pill-3 {
    margin-bottom: 10px;
    border-radius: 9999px;
  }

  .pill-2,
  .pill-3 {
    --tw-bg-opacity: 1;

    background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  }

  .badge {
    position: relative;
    text-align: center;
  }

  .badge-text {
    --tw-text-opacity: 1;

    font-size: 1.25rem /* 20px */;
    font-weight: 700;
    color: rgb(220 38 38 / var(--tw-text-opacity));
    line-height: 1.75rem /* 28px */;
  }

  .badge p {
    position: absolute;
    top: 0;
    left: 5%; // move position to left with neg %
    margin: 0.5rem 0 0;
    transform: translateX(-175%);
    transform: translateY(45%);
  }

  .badge img {
    width: 140px;
    height: auto;
  }

  .button-content {
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 35rem;
    margin-top: 10rem;
    padding: 1rem;
    border-radius: 35px;

    --tw-gradient-from: #c2410c var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(194 65 12 / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to-: #f97316 var(--tw-gradient-to-position); // TODO: needs to be fixed

    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
  }

  .button {
    font-size: 1.25rem /* 20px */;
    color: white;
    line-height: 1.75rem /* 28px */;
  }

  .button-icon {
    width: 1.25rem /* 20px */;
    height: 1.25rem /* 20px */;
    color: white;
  }
</style>
