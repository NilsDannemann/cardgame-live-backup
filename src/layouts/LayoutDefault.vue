<script setup lang="ts">
import Logo from '../components/Logo.vue';

withDefaults(
  defineProps<{
    showFooter?: boolean;
    animateLogo?: boolean;
  }>(),
  {
    showFooter: true,
    animateLogo: false,
  }
);
</script>

<template>
  <div class="h-full flex flex-col">
    <Logo :animate-in="animateLogo" class="mt-4" />
    <main class="h-full relative">
      <slot />
    </main>
    <footer v-if="showFooter" class="text-center uppercase mb-3">
      <p class="text-xs text-white">Created by</p>
      <a class="text-red" href="#" target="_blank">Name</a>
    </footer>
  </div>
</template>

<style scoped></style>
