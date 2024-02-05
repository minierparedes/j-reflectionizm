<script setup>
  import * as image from '@/assets/images/useAssets'

  const office_location = image.about_us_office_location
</script>

<template>
  <div class="about-us">
    <div class="container">
      <div class="heading">
        <h3 class="heading-title1">陽向の里が</h3>
        <h2 class="heading-title2">選ばれる理由</h2>
      </div>
      <div class="location">
        <h2 class="location-heading">立地良好</h2>
        <div class="location-content">
          <MediaBlock
            title="所沢駅からバスで10分"
            text="霊源寺墓苑「陽向の里」は、ターミナル駅である所沢駅からバスでアクセスが可能。10分に1本はバスが走るため、交通の便が良く、市内随一の好立地公園墓地です。埼玉県所沢市上安松に位置する住宅地から近い霊園であり、都市部からも近いのが特徴です。"
            :img="office_location"
          />
        </div>
      </div>
      <div class="transportation">
        <div class="transportion-tab">
          <h1 class="transport-tab-heading">交通のご案内</h1>
        </div>
        <div class="transport-container">
          <div class="transportation-content">
            <div class="card-container">
              <TheAboutUsCard />
              <p>西武バス <br />「所沢駅東口行」に乗車 <br />約<span class="card-time">15</span>分</p>
            </div>
            <div class="card-container">
              <TheAboutUsCard />
              <p>西武バス <br />「所沢駅東口行」に乗車 <br />約<span class="card-time">15</span>分</p>
            </div>
            <div class="card-container">
              <TheAboutUsCard />
              <p>西武バス <br />「所沢駅東口行」に乗車 <br />約<span class="card-time">15</span>分</p>
            </div>
          </div>
          <div class="transport-orange-pill">
            <p>バス停「上安松」下車</p>
          </div>
          <p class="transport-pill-text">徒歩 約<span>1</span>分</p>
          <div class="transport-red-pill">
            <p>霊源寺墓苑 陽向の里</p>
          </div>

          <p class="transport-pill-text3">●西武池袋線「秋津駅」よりタクシーで約<span>8</span>分</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    // height: 150vh;
  }
  .heading {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 15vh;
  }

  .heading-title1 {
    --tw-text-opacity: 1;

    font-size: 2.25rem /* 36px */;
    font-weight: 600;
    color: rgb(68 151 50 / var(--tw-text-opacity));
    line-height: 2.5rem /* 40px */;
  }

  .heading-title2 {
    --tw-text-opacity: 1;

    font-size: 3.75rem /* 60px */;
    font-weight: 600;
    color: rgb(68 151 50 / var(--tw-text-opacity));
    line-height: 1;
  }
  .location-heading {
    justify-content: center;
    align-items: center;
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 2.25rem /* 36px */;
    color: white;
    line-height: 2.5rem /* 40px */;
    background: url('../assets/images/about_us_location_bg_pattern_image.png');
  }

  .location-title {
    --tw-text-opacity: 1;

    flex: 1 0 100%;
    margin-right: 20px;
    font-size: 1.25rem /* 20px */;
    font-weight: 600;
    color: rgb(251 146 60 / var(--tw-text-opacity));
    line-height: 1.75rem /* 28px */;
  }

  .transportation {
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    margin-top: 120px;
  }

  .transportion-tab {
    padding: 10px 20px;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #449732;
  }

  .transport-tab-heading {
    font-size: 1.875rem /* 30px */;
    color: white;
    line-height: 2.25rem /* 36px */;
  }

  .transport-container {
    position: relative;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
    margin-inline: auto;
    border: 2px solid #449732;
    background-color: beige;
  }

  .transportation-content {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    display: grid;
    gap: 20px;
    width: 90%; // TODO: content not dead center
    padding: 50px;
  }

  .card-container {
    width: 100%;
  }

  .card-container p {
    width: 80%;
    margin-top: 25px;
    text-align: center;
  }

  .card-time {
    --tw-text-opacity: 1;

    font-size: 1.25rem /* 20px */;
    font-weight: 800;
    color: rgb(220 38 38 / var(--tw-text-opacity));
    line-height: 1.75rem /* 28px */;
  }

  .transport-orange-pill,
  .transport-red-pill {
    width: 76%; // TODO: re-adjust based on: c-transportation-content
    margin-top: 10px;
    margin-bottom: 25px;
    padding: 10px;
    font-size: 1.875rem /* 30px */;
    font-weight: 800;
    color: white;
    line-height: 2.25rem /* 36px */;
    text-align: center;
    border-radius: 30px;
  }

  .transport-orange-pill {
    --tw-bg-opacity: 1;
    background-color: rgb(234 88 12 / var(--tw-bg-opacity));
  }

  .transport-red-pill {
    --tw-bg-opacity: 1;
    background-color: rgb(220 38 38 / var(--tw-bg-opacity));
  }

  .transport-pill-text {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
  }

  .transport-pill-text span {
    --tw-text-opacity: 1;

    font-size: 1.5rem /* 24px */;
    color: rgb(185 28 28 / var(--tw-text-opacity));
    line-height: 2rem /* 32px */;
  }

  .transport-pill-text3 {
    margin-bottom: 50px;
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
  }

  .transport-pill-text3 span {
    --tw-text-opacity: 1;

    margin-bottom: 50px;
    font-size: 1.5rem /* 24px */;
    color: rgb(185 28 28 / var(--tw-text-opacity));
    line-height: 2rem /* 32px */;
  }
</style>
