<template>
  <div class="about-us">
    <div class="about-us-container">
      <div class="about-us-heading">
        <h3 class="about-us-heading-title1 text-4xl font-semibold text-[#449732]">陽向の里が</h3>
        <h2 class="about-us-heading-title2 text-6xl font-semibold text-[#449732]">選ばれる理由</h2>
      </div>
      <div class="about-us-location">
        <h2
          class="about-us-location-heading bg-[url('/assets/images/about_us_location_bg_pattern_image.png')] text-4xl text-white"
        >
          立地良好
        </h2>
        <div class="about-us-location-content">
          <h3 class="about-us-location-title text-xl font-semibold text-orange-400">所沢駅からバスで10分</h3>
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
          <h1 class="about-us-transport-tab-heading text-3xl text-white">交通のご案内</h1>
        </div>
        <div class="about-us-transport-container">
          <div class="about-us-transportation-content">
            <div class="about-us-card-container">
              <TheAboutUsCard />
              <p>
                西武バス <br />「所沢駅東口行」に乗車 <br />約<span
                  class="about-us-card-time text-xl font-extrabold text-red-600"
                  >15</span
                >分
              </p>
            </div>
            <div class="about-us-card-container">
              <TheAboutUsCard />
              <p>
                西武バス <br />「所沢駅東口行」に乗車 <br />約<span
                  class="about-us-card-time text-xl font-extrabold text-red-600"
                  >15</span
                >分
              </p>
            </div>
            <div class="about-us-card-container">
              <TheAboutUsCard />
              <p>
                西武バス <br />「所沢駅東口行」に乗車 <br />約<span
                  class="about-us-card-time text-xl font-extrabold text-red-600"
                  >15</span
                >分
              </p>
            </div>
          </div>
          <div class="about-us-transport-orange-pill bg-orange-600 text-3xl font-extrabold text-white">
            <p>バス停「上安松」下車</p>
          </div>
          <p class="about-us-transport-pill-text text-xl">
            徒歩 約<span class="about-us-transport-pill-number text-2xl text-red-700">1</span>分
          </p>
          <div class="about-us-transport-red-pill bg-red-600 text-3xl font-extrabold text-white">
            <p>霊源寺墓苑 陽向の里</p>
          </div>

          <p class="about-us-transport-pill-text3 text-2xl">
            ●西武池袋線「秋津駅」よりタクシーで約<span class="about-us-transport-pill-number text-2xl text-red-700"
              >8</span
            >分
          </p>
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

  .about-us-location-heading {
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 20px;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .about-us-location-content {
    flex-wrap: wrap;
    align-items: flex-start;
    display: flex;
  }

  .about-us-location-title {
    flex: 1 0 100%;
    margin-right: 20px;
  }

  .about-us-location-content p {
    flex: 1;
    max-width: 764px;
    margin-right: 125px;
  }

  .about-us-location-content img {
    max-width: 100%;
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

  .about-us-transport-orange-pill,
  .about-us-transport-red-pill {
    width: 76%; // TODO: re-adjust based on: c-about-us-transportation-content
    margin-top: 10px;
    margin-bottom: 25px;
    padding: 10px;
    text-align: center;
    border-radius: 30px;
  }

  .about-us-transport-pill-text3 {
    margin-bottom: 50px;
  }
</style>
