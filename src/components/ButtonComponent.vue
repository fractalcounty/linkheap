<script setup lang="ts">
defineProps<{
  name: string;
  url: string;
}>()
</script>

<template>
  <a :href="url" target="_blank" class="btn btn-sm btn-outline transform transition duration-150 hover:scale-105">
    {{ name }} 
  </a>
</template>