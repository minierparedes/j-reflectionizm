<template>
  <div class="transport-card">
    <h3 class="transpot-card-content1">西武池袋線</h3>
    <h2 class="transpot-card-content2">清瀬駅</h2>
    <h3 class="transpot-card-content3">北口3番乗り場</h3>
  </div>
</template>

<style scoped>
  .transport-card {
    justify-content: center;
    width: 90%;
    padding: 20px;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #c7e0c2;
  }

  .transpot-card-content1,
  .transpot-card-content3 {
    margin: 5px;
    color: #15803d;
    line-height: 25px;
  }

  .transpot-card-content2 {
    margin: 5px 0;
    padding: 5px 20px;
    font-size: 1.5rem;
    color: white;
    line-height: 25px;
    line-height: 2rem;
    background-color: #449732;
  }

  .transpot-card-content3 {
    padding: 0 20px;
    border-radius: 30px;
    background-color: aliceblue;
  }
  @media (max-width: 390px) {
    .transport-card {
      width: 125px;
      height: 108px;
      padding: 1px;
    }

    .transpot-card-content1,
    .transpot-card-content2,
    .transpot-card-content3 {
      font-size: 11px;
    }

    .transpot-card-content3 {
      padding: 0px 0px;
      border-radius: 30px;
    }
  }
</style>
