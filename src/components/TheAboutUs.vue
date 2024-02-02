<template>
  <div class="about-us">
    <div class="about-us-container">
      <div class="about-us-heading">
        <h3 class="about-us-heading-title1">陽向の里が</h3>
        <h2 class="about-us-heading-title2">選ばれる理由</h2>
      </div>
      <div class="about-us-location">
        <h2 class="about-us-location-heading">立地良好</h2>
        <div class="about-us-location-content">
          <h3 class="about-us-location-title">所沢駅からバスで10分</h3>
          <p>
            霊源寺墓苑「陽向の里」は、ターミナル駅である所沢駅からバスでアクセスが可能。10分に1本はバスが走るため、交通の便が良く、市内随一の好立地公園墓地です。埼玉県所沢市上安松に位置する住宅地から近い霊園であり、都市部からも近いのが特徴です。
          </p>
          <div class="about-us-location-image">
            <img src="../assets/images/about_us_office_location.png" alt="office location" />
          </div>
        </div>
      </div>
      <div class="about-us-transportation">
        <div class="about-us-transportion-tab">
          <h1 class="about-us-transport-tab-heading">交通のご案内</h1>
        </div>
        <div class="about-us-transport-container">
          <div class="about-us-transportation-content">
            <div class="about-us-card-container">
              <TheAboutUsCard />
              <p>西武バス <br />「所沢駅東口行」に乗車 <br />約<span class="about-us-card-time">15</span>分</p>
            </div>
            <div class="about-us-card-container">
              <TheAboutUsCard />
              <p>西武バス <br />「所沢駅東口行」に乗車 <br />約<span class="about-us-card-time">15</span>分</p>
            </div>
            <div class="about-us-card-container">
              <TheAboutUsCard />
              <p>西武バス <br />「所沢駅東口行」に乗車 <br />約<span class="about-us-card-time">15</span>分</p>
            </div>
          </div>
          <div class="about-us-transport-orange-pill">
            <p>バス停「上安松」下車</p>
          </div>
          <p class="about-us-transport-pill-text">徒歩 約<span>1</span>分</p>
          <div class="about-us-transport-red-pill">
            <p>霊源寺墓苑 陽向の里</p>
          </div>

          <p class="about-us-transport-pill-text3">●西武池袋線「秋津駅」よりタクシーで約<span>8</span>分</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about-us-container {
    height: 150vh;
  }
  .about-us-heading {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 15vh;
  }

  .about-us-heading-title1 {
    --tw-text-opacity: 1;

    font-size: 2.25rem /* 36px */;
    font-weight: 600;
    color: rgb(68 151 50 / var(--tw-text-opacity));
    line-height: 2.5rem /* 40px */;
  }

  .about-us-heading-title2 {
    --tw-text-opacity: 1;

    font-size: 3.75rem /* 60px */;
    font-weight: 600;
    color: rgb(68 151 50 / var(--tw-text-opacity));
    line-height: 1;
  }
  .about-us-location-heading {
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 20px;
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 2.25rem /* 36px */;
    color: white;
    line-height: 2.5rem /* 40px */;
    background: url('../assets/images/about_us_location_bg_pattern_image.png');
  }

  .about-us-location-content {
    flex-wrap: wrap;
    align-items: flex-start;
    display: flex;
    max-width: 1349px;
    margin-inline: auto;
  }
  .about-us-location-title {
    --tw-text-opacity: 1;

    flex: 1 0 100%;
    margin-right: 20px;
    font-size: 1.25rem /* 20px */;
    font-weight: 600;
    color: rgb(251 146 60 / var(--tw-text-opacity));
    line-height: 1.75rem /* 28px */;
  }

  .about-us-location-content p {
    flex: 1;
    max-width: 100%;
    margin-right: 25px;
  }

  .about-us-location-content img {
    max-width: 100%;
    margin-top: 20px;
  }
  @media (max-width: 764px) {
    .about-us-location-content {
      flex-direction: column;
      align-items: center;
    }
    .about-us-location-title,
    .about-us-location-content p,
    .about-us-location-image {
      width: 100%;
      margin-right: 0;
      text-align: center;
    }
  }

  .about-us-transportation {
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    margin-top: 120px;
  }

  .about-us-transportion-tab {
    padding: 10px 20px;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #449732;
  }

  .about-us-transport-tab-heading {
    font-size: 1.875rem /* 30px */;
    color: white;
    line-height: 2.25rem /* 36px */;
  }

  .about-us-transport-container {
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

  .about-us-transportation-content {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    display: grid;
    gap: 20px;
    width: 90%; // TODO: content not dead center
    padding: 50px;
  }

  .about-us-card-container {
    width: 100%;
  }

  .about-us-card-container p {
    width: 80%;
    margin-top: 25px;
    text-align: center;
  }

  .about-us-card-time {
    --tw-text-opacity: 1;

    font-size: 1.25rem /* 20px */;
    font-weight: 800;
    color: rgb(220 38 38 / var(--tw-text-opacity));
    line-height: 1.75rem /* 28px */;
  }

  .about-us-transport-orange-pill,
  .about-us-transport-red-pill {
    width: 76%; // TODO: re-adjust based on: c-about-us-transportation-content
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

  .about-us-transport-orange-pill {
    --tw-bg-opacity: 1;
    background-color: rgb(234 88 12 / var(--tw-bg-opacity));
  }

  .about-us-transport-red-pill {
    --tw-bg-opacity: 1;
    background-color: rgb(220 38 38 / var(--tw-bg-opacity));
  }

  .about-us-transport-pill-text {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
  }

  .about-us-transport-pill-text span {
    --tw-text-opacity: 1;

    font-size: 1.5rem /* 24px */;
    color: rgb(185 28 28 / var(--tw-text-opacity));
    line-height: 2rem /* 32px */;
  }

  .about-us-transport-pill-text3 {
    margin-bottom: 50px;
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
  }

  .about-us-transport-pill-text3 span {
    --tw-text-opacity: 1;

    margin-bottom: 50px;
    font-size: 1.5rem /* 24px */;
    color: rgb(185 28 28 / var(--tw-text-opacity));
    line-height: 2rem /* 32px */;
  }
</style>
