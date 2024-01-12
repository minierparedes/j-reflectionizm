import { useSeoMeta } from '#imports';
<template>
  <main>
    <section>
      <h1>Index page</h1>
      <div class="container">
        <h1 class="hero-section">Hero section</h1>
        <TheHeroSection />
      </div>
    </section>
    <section><TheAboutSection /></section>
    <section><TheCarouselSection /></section>
    <section><TheSchedulingSection /></section>
    <section><TheServicesSection /></section>
    <section><TheFormSection /></section>
    <section><TheAccessSection /></section>
  </main>
</template>

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
