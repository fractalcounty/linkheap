<script setup lang="ts">
defineProps<{
  name: string;
  url: string;
}>()
</script>

<template>
  <a :href="url" target="_blank" class="btn btn-outline content-center font-normal text-xl px-6 py-6 m-3 ... rounded-xl transform transition duration-150 hover:scale-105 hover:drop-shadow-glow">
    {{ name }} 
  </a>
</template>