<script lang="ts" setup>
  import { useSeoMeta } from '#imports'

  useSeoMeta({
    title: '',
    description: '',
    ogImage: '',
    ogUrl: '',
    robots: '',
  })
</script>

<template>
  <div class="container">
    <header>
      <TheHeader />
    </header>
    <main>
      <ThePageHero />
      <TheAboutUs />
      <TheThirdSection />
    </main>
  </div>
</template>

<style scoped>
  .container {
    --max-width: 1219px;
    --padding: 1rem;

    width: min(var(--max-width), 100% - (var(--padding) * 2));
    margin-inline: auto;
  }
</style>
