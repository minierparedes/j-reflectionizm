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
  <div class="media-block-container">
    <div class="media-block-items">
      <div class="media-block-title">
        <h2 class="title">{{ props.title }}</h2>
      </div>
      <div class="media-block-paragraph">
        <p class="text">
          {{ props.text }}
        </p>
      </div>
      <div class="media-block-image">
        <img :src="`${props.img}`" alt="media block image" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .media-block-items {
    flex-wrap: wrap;
    align-items: flex-start;
    display: flex;
    max-width: 1349px;
    margin-inline: auto;
  }
  .media-block-title {
    flex: 1 0 100%;
    margin-right: 20px;
  }

  .text {
    flex: 1;
    max-width: 100%;
    margin-right: 25px;
  }

  .media-block-image {
    max-width: 100%;
    margin-top: 20px;
  }
  @media (max-width: 764px) {
    .media-block-items {
      flex-direction: column;
      align-items: center;
    }
    .media-block-title,
    .text,
    .media-block-image {
      width: 100%;
      margin-right: 0;
      text-align: center;
    }
  }
</style>
