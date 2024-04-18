<script setup lang="ts">
import ButtonComponent from './components/ButtonComponent.vue'
import EffectsComponent from './components/EffectsComponent.vue'
import YamlContent from './assets/defaults.yml';
</script>

<template>
  <header>
    <title>FRACTALCOUNTY - Links</title>
    </header>
  <main class="min-h-screen">
    <section class="content-container flex flex-col items-center justify-center">
      <h1 class="text-6xl md:text-5xl font-bold text-center leading-[3rem] mb-3 animate-wiggle1 drop-shadow-glow">FRACTAL COUNTY</h1>
      <h2 class="text-3xl md:text-3xl mt-0 mb-16 leading-2 text-center animate-wiggle2 drop-shadow-glow">Link Directory</h2>
      <div class="button-list inline-flex flex-col">
        <ButtonComponent v-for="link in YamlContent.links" :key="link.name" 
            :name="link.name" :url="link.url" />
      </div>
    </section>
    <EffectsComponent /> 
  </main>
    <div class="backgrounds">
      <div id="noise-bg" class="z-20"></div>
      <div class="gradient-overlay bg-gradient-to-t from-stone-900 from-5% via-stone-900 via-5% to-neutral-950 z-10 opacity-500 "></div>
    </div>
</template>

<style>
main {
  z-index: 5;
  min-height: 100vh;        /* Ensure 'main' takes up full viewport height */
  display: flex;            /* Activate flexbox */
  flex-direction: column;   /* Align items vertically */
  align-items: center;      /* Horizontal centering */
  justify-content: center;  /* Vertical centering */
}

body {
  margin: 0;
  font-family: 'Alte Haas Grotesk', sans-serif; /* Specify your font */
  text-transform: uppercase; 
}

.backgrounds {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent scrollbars if backgrounds exceed viewport */
  pointer-events: none; /* Allow mouse events to pass through */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%; 
  background-color: rgba(0, 0, 0, 0.37); /* Or your desired dark color */
  opacity: 1.0; /* Adjust opacity between 0 and 1 */
}

.content-container {
  max-width: 800px; /* Adjust as needed */
  margin: 0 auto;
  padding: 2rem;  /* Or your preferred spacing */
}

@keyframes wiggle1 {
  0% { 
    transform: translateY(0) rotate(-0.3deg) scale(1.1); 
  }
  50% { 
    transform: translateY(-1px) rotate(-0.5deg) scale(1.13); 
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
    transform: translateY(0) rotate(-0.1deg) scale(0.99); 
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