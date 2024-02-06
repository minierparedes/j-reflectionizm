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
              <span>一般墓</span><br />
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
    position: relative;
    margin-top: -20px;
    margin-left: 70px;
    text-align: center;
  }
  .badge p {
    top: 50%;
    left: 50%;
    margin: 0;
    padding: 0;
    font-size: 26px;
    font-weight: 500;
    color: #dc2626;
    line-height: 1.75rem;
    transform: translate(-40px, -135px);
  }
  .badge span {
    font-size: 40px;
    font-weight: 700;
  }
  .badge img {
    width: 220px;
    height: auto;
  }
  .pill-list {
    margin-right: -50px;
    margin-left: -50px;
    padding: 8px;
    text-align: center;
  }

  .pill-1 {
    font-size: 25px;
    font-weight: 800;
    color: #ef4444;
    background-color: white;
  }

  .pill-2,
  .pill-3 {
    font-size: 18px;
    color: white;
    background-color: rgba(25, 93, 185, 0.7);
  }

  .pill-1,
  .pill-2,
  .pill-3 {
    display: inline-block;
    width: 100%;
    margin-bottom: 10px;
    padding: 12px;
    border-radius: 50px;
  }
  .button-content {
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 65rem;
    margin-top: 9rem;
    padding: 1.5rem;
    text-align: center;
    border-radius: 55px;

    // background-image: linear-gradient(to bottom, #c2410c, #f97316);
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 0%,
      #bd0d01 6%,
      #bd0d01 8%,
      #bd0d01 10%,
      #ae4c24 12%,
      #c85e34 14%,
      #c85e34 16%,
      #c2410c 20%,
      #c2410c 20%,
      #f97316 70%,
      #f97316 80%,
      rgba(225, 95, 9, 0.8) 90%,
      rgba(225, 95, 9, 0.7) 90%,
      rgba(225, 95, 9, 0.5) 90%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }

  .button {
    font-size: 2.3rem;
    font-weight: 600;
    color: white;
    line-height: 1.75rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .button-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin: 5px;
    color: white;
  }
</style>
