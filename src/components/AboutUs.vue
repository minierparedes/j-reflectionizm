<template>
  <div class="c-about-us">
    <div class="l-about-us-container">
      <div class="c-about-us-heading">
        <h3 class="t-about-us-heading-title1 text-4xl font-semibold text-[#449732]">陽向の里が</h3>
        <h2 class="t-about-us-heading-title2 text-6xl font-semibold text-[#449732]">選ばれる理由</h2>
      </div>
      <div class="c-about-us-location">
        <h2
          class="c-about-us-location-heading bg-[url('/assets/images/about_us_location_bg_pattern_image.png')] text-4xl text-white"
        >
          立地良好
        </h2>
        <div class="c-about-us-location-content">
          <h3 class="c-about-us-location-title text-xl font-semibold text-orange-400">所沢駅からバスで10分</h3>
          <p>
            霊源寺墓苑「陽向の里」は、ターミナル駅である所沢駅からバスでアクセスが可能。10分に1本はバスが走るため、交通の便が良く、市内随一の好立地公園墓地です。埼玉県所沢市上安松に位置する住宅地から近い霊園であり、都市部からも近いのが特徴です。
          </p>
          <div class="c-about-us-location-image">
            <img src="../assets/images/about_us_office_location.png" alt="office location" />
          </div>
        </div>
      </div>
      <div class="c-about-us-transportation">
        <div class="c-about-us-transportion-tab">
          <h1 class="t-about-us-transport-tab-heading text-3xl text-white">交通のご案内</h1>
        </div>
        <div class="l-about-us-transport-container">
          <div class="c-about-us-transportation-content">
            <div class="c-about-us-card-container">
              <AboutUsCard />
              <p>
                西武バス <br />「所沢駅東口行」に乗車 <br />約<span
                  class="t-about-us-card-time text-xl font-extrabold text-red-600"
                  >15</span
                >分
              </p>
            </div>
            <div class="c-about-us-card-container">
              <AboutUsCard />
              <p>
                西武バス <br />「所沢駅東口行」に乗車 <br />約<span
                  class="t-about-us-card-time text-xl font-extrabold text-red-600"
                  >15</span
                >分
              </p>
            </div>
            <div class="c-about-us-card-container">
              <AboutUsCard />
              <p>
                西武バス <br />「所沢駅東口行」に乗車 <br />約<span
                  class="t-about-us-card-time text-xl font-extrabold text-red-600"
                  >15</span
                >分
              </p>
            </div>
          </div>
          <div class="c-about-us-transport-orange-pill bg-orange-600 text-3xl font-extrabold text-white">
            <p>バス停「上安松」下車</p>
          </div>
          <p class="t-about-us-transport-pill-text text-xl">
            徒歩 約<span class="t-about-us-transport-pill-number text-2xl text-red-700">1</span>分
          </p>
          <div class="c-about-us-transport-red-pill bg-red-600 text-3xl font-extrabold text-white">
            <p>霊源寺墓苑 陽向の里</p>
          </div>

          <p class="t-about-us-transport-pill-text3 text-2xl">
            ●西武池袋線「秋津駅」よりタクシーで約<span class="t-about-us-transport-pill-number text-2xl text-red-700"
              >8</span
            >分
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
