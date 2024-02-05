<script setup>
  import { ref, onUnmounted, onMounted } from 'vue'

  const isDesktop = ref(true)

  const handleResize = () => {
    isDesktop.value = window.innerWidth >= 768
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
  })
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
</script>
<template>
  <nav>
    <TheNavBar v-if="isDesktop" />
    <TheMobileNavBar v-else />
  </nav>
</template>
