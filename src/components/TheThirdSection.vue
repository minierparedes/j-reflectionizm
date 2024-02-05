<script setup>
  import * as image from '../assets/images/useAssets'

  const flowers = image.flowers_tombstone
</script>

<template>
  <div class="container">
    <div class="heading">
      <h2>後継ぎの心配不要</h2>
    </div>
    <MediaBlock
      title="全区画永代供養付き"
      text="後継者がいない、子供に迷惑のかからないお墓が欲しい、将来跡継ぎが心配などの理由により、現代では当たり前となった永代供養。他の霊園では限定的に実施される場合も多いですが、陽向の里では全区画永代供養付きでご提供しており、安心してご購入頂けます。"
      :img="flowers"
    />
  </div>
</template>

<style lang="scss" scoped>
  .heading {
    justify-content: center;
    align-items: center;
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
    font-size: 2.25rem /* 36px */;
    color: white;
    line-height: 2.5rem /* 40px */;
    background: url('../assets/images/about_us_location_bg_pattern_image.png');
    background-size: cover;
  }
</style>
