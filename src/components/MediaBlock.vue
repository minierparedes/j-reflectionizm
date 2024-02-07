<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div class="container">
    <div class="items">
      <div class="title">
        <h2 class="title">{{ props.title }}</h2>
      </div>
      <div class="text">
        <p class="text">
          {{ props.text }}
        </p>
      </div>
      <div class="image">
        <img :src="`${props.img}`" alt="media block image" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .items {
    flex-wrap: wrap;
    align-items: flex-start;
    display: flex;
    max-width: 1349px;
    margin-inline: auto;
  }

  .title {
    flex: 1 0 100%;
    order: 1;
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    font-size: x-large;
    color: orange;
    background: url(../assets/images/bg_brush_stroke.png);
    background-repeat: no-repeat;
  }

  .text {
    flex: 1;
    order: 2;
    max-width: 100%;
    margin-right: 25px;
  }

  .image {
    order: 3;
    max-width: 100%;
    margin-top: 20px;
  }
  @media (max-width: 1024px) {
    .items {
      flex-direction: column;
      align-items: center;
    }
    .title,
    .text,
    .image {
      order: unset;
      width: 100%;
      margin-right: 0;
      text-align: center;
      background-position: center;
    }
    .image img {
      display: block;
      margin: 0 auto;
    }
  }
  @media (max-width: 764px) {
    .items {
      flex-direction: column;
      align-items: center;
    }
    .title,
    .text,
    .image {
      order: unset;
      width: 100%;
      margin-right: 0;
      text-align: center;
      background-position: center;
    }
    .image img {
      display: block;
      margin: 0 auto;
    }
  }
  @media (max-width: 390px) {
    .items {
      flex-direction: column;
      align-items: center;
    }
    .title,
    .text,
    .image {
      order: unset;
      width: 100%;
      margin-right: 0;
      text-align: center;
      background-position: center;
    }
    .image img {
      display: block;
      margin: 0 auto;
    }

    .image {
      order: -1;
    }
    .title {
      order: 1;
    }
    .text {
      order: 2;
    }
  }
</style>
