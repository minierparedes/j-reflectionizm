<script setup>
  import { Icon } from '@iconify/vue'
</script>
<template>
  <div id="page-hero-id" class="page-hero">
    <div class="container">
      <div class="headline">
        <h4>歴史と自然の都「所沢」の公園墓地</h4>
        <div class="headline-main">
          <h3 class="headline-1">霊源寺墓苑</h3>
          <h1 class="headline-2">陽向の里</h1>
        </div>
      </div>
      <div class="columns">
        <div class="right-column">
          <div class="pill-list">
            <h3 class="pill-1">所沢駅からバスで10分</h3>
            <h3 class="pill-2">後継ぎ心配不要・全区画永代供養付き</h3>
            <h3 class="pill-3">30万円～用途別のお墓を用意</h3>
          </div>
        </div>
        <div class="left-column">
          <div class="badge">
            <img src="../assets/images/gold_badge.png" alt="gold badge" />
            <p class="badge-text">
              一般墓<br />
              好評発売中
            </p>
          </div>
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
  .page-hero {
    height: 800px;
    background: url('../assets/images/page_hero.png') center/cover no-repeat;
  }

  .container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 20px;
  }

  .headline {
    margin-bottom: 20px;
    color: white;
    text-align: center;
  }

  .headline h4 {
    font-size: 46px;
  }

  .headline-main {
    flex-direction: row;
    align-items: center;
    display: flex;
    margin-top: 10px;
  }

  .headline-1 {
    font-size: 84px;
  }
  .headline-2 {
    font-size: 140px;
  }

  .columns {
    justify-content: space-between;
    display: flex;
    width: 100%;
    max-width: 800px; // Adjust the maximum width as needed
    margin-top: 20px;
  }

  .left-column,
  .right-column {
    width: 48%; // Adjust the width of the columns
  }

  .badge {
    text-align: center;
  }
  .badge p {
    top: 0;
    left: 5%; // move position to left with neg %
    margin: 0.5rem 0 0;
    font-size: 1.25rem /* 20px */;
    font-weight: 700;
    color: #dc2626;
    line-height: 1.75rem /* 28px */;
  }
  .badge img {
    width: 140px;
    height: auto;
  }

  .pill-list {
    padding: 10px;
    text-align: center;
  }

  .pill-1 {
    font-size: 24px;
    color: #ef4444;
    background-color: white;
  }

  .pill-2,
  .pill-3 {
    font-size: 20px;
    background-color: #3b82f6;
  }

  .pill-1,
  .pill-2,
  .pill-3 {
    display: inline-block;
    margin-bottom: 10px;
    border-radius: 50px;
  }

  .button-content {
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 35rem;
    margin-top: 10rem;
    padding: 1rem;
    text-align: center;
    border-radius: 35px;

    background-image: linear-gradient(to bottom, #c2410c, #f97316);
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
