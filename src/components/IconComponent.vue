<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  name: string;
  url: string;
  path: string;
}>()
</script>

<template>
  <a :href="url" target="_blank" class="icon-button transform transition duration-150 hover:scale-105 hover:drop-shadow-glow">
    <img :src="path" alt="" class="icon-svg w-10 h-10 filter grayscale brightness-150">
    <span class="visually-hidden">{{ name }}</span>
  </a>
</template>


<style scoped>

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* .icon-button {
} */

.icon-svg {
  filter: saturate(100%) invert(30%) sepia(4%) saturate(748%) hue-rotate(160deg) brightness(100%) contrast(85%);
}
</style>