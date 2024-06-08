<script setup lang="ts">
defineProps<{
  name: string;
  url: string;
}>()
</script>

<template>
  <a :href="url" target="_blank" class="btn btn-outline btn-wide btn-lg rounded-xl font-normal transform transition duration-150 hover:scale-105 hover:drop-shadow-glow">
    {{ name }} 
  </a>
</template>