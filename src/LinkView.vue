<script setup lang="ts">
import ButtonComponent from './components/ButtonComponent.vue'
import BackgroundComponent from './components/BackgroundComponent.vue'
import YamlContent from './config.yml';
</script>

<template>
  <BackgroundComponent />
  <div class="min-h-screen bg-base-300 text-base-content flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold mb-0 animate-wiggle1">FRACTAL COUNTY</h1>
    <h2 class="text-xl  mb-8 animate-wiggle2">LINK DIRECTORY</h2>
    <div class="flex flex-col gap-4">
      <ButtonComponent v-for="link in YamlContent.links" :key="link.name" 
                       :name="link.name" :url="link.url" />
    </div>
  </div>
</template>

<style scoped>
@keyframes wiggle1 {
  0% { 
    transform: translateY(0) rotate(-0.3deg) scale(1.1); 
  }
  50% { 
    transform: translateY(-1px) rotate(-0.5deg) scale(1.115); 
  }
  100% { 
    transform: translateY(0) rotate(0deg) scale(1.1);  
  } 
}

@keyframes wiggle2 {
  0% { 
    transform: translateY(1.0px) rotate(0.4deg) scale(1.01); 
  }
  50% { 
    transform: translateY(0) rotate(-0.1deg) scale(1.0); 
  }
  100% { 
    transform: translateY(-0.8px) rotate(0deg) scale(1.008);  
  } 
}

.animate-wiggle1 {
  animation: wiggle1 5s ease-in-out infinite alternate;  
}

.animate-wiggle2 {
  animation: wiggle2 4s ease-in-out infinite alternate-reverse;  
}

</style>