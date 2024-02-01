import { useSeoMeta } from '#imports';
<template>
  <main>
    <div>
      <ThePageHero />
      <TheAboutUs />
    </div>
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
