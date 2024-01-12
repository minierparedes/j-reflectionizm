import { useSeoMeta } from '#imports';
<template>
  <div class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
    <h1>Index page</h1>
  </div>
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
