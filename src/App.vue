<script setup lang="ts">
import ButtonComponent from './components/ButtonComponent.vue'
import GrainEffect from './components/GrainEffect.vue'
import YamlContent from './assets/defaults.yml';
</script>

<template>
  <header>
    <title>FRACTALCOUNTY - Links</title>
    <GrainEffect /> 
  </header>
  <main class="main">
    
    <section class="content-container flex flex-col items-center justify-center safe-area">
      <h1 class="text-6xl md:text-5xl lg:text-5xl font-bold text-center leading-[3rem] mb-2 drop-shadow-glow">
        <span class="animate-fractal">FRACTAL</span> <span class="animate-county">COUNTY</span>
      </h1>
      <h2 class="text-2xl md:text-3xl lg:text-3xl mt-0 mb-10 leading-2 text-center animate-subtitle drop-shadow-glow">Link Directory</h2>
      <div class="button-list inline-flex flex-col">
        <ButtonComponent v-for="link in YamlContent.links" :key="link.name" 
            :name="link.name" :url="link.url" />
      </div>
    </section>
  </main>
  <div class="bg bg-gradient-to-t from-stone-900 from-5% via-stone-900 via-5% to-neutral-950 z-5 opacity-10"></div>
  <div class="bg bg-gradient-to-t from-stone-900 from-5% via-stone-900 via-5% to-neutral-950 -z-10 opacity-100"></div>
</template>


<style>
html, body {
  width: 100%;
  height: 100%;  /* Core full height */
  overflow: hidden;  /* Removes scrollability */
  margin: 0;
  padding: 0;
  font-family: 'Alte Haas Grotesk', sans-serif;
  text-transform: uppercase;
}

.main {
  z-index: 5;
  height: 100svh;  /* Using small viewport height to account for mobile UI */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: env(safe-area-inset-top, 20px);  /* Considers top bar adjustment */
  padding-bottom: env(safe-area-inset-bottom, 20px);  /* Considers bottom bar adjustment */
}

.bg {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  pointer-events: none;
  overflow: hidden;
  background-color: #000;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.37); /* Dark overlay color */
  opacity: 1.0; /* Full opacity for foreground content */
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

@keyframes wiggle-fractal {
  0%, 100% { transform: translateY(1px) scale(1.01) rotate(-0.6deg); }
  50% { transform: translateY(-1px) scale(0.98) rotate(0.4deg); }
}

@keyframes wiggle-county {
  0%, 100% { transform: translateY(3px) scale(1.005) rotate(0.6deg); }
  50% { transform: translateY(-2px) scale(0.99) rotate(-0.4deg); }
}

@keyframes wiggle-subtitle {
  0% { transform: translateY(0px) scale(0.98) rotate(0.3deg); }
  25% { transform: translateY(-2px) scale(0.985) rotate(-0.4deg); }
  50% { transform: translateY(0px) scale(0.97) rotate(-0.3deg); }
  75% { transform: translateY(2px) scale(0.99) rotate(0.4deg); }
  100% { transform: translateY(0px) scale(0.98) rotate(0.3deg); }
}

.animate-fractal, .animate-county {
  display: inline-block; /* Crucial for animations to apply properly */
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.animate-fractal {
  animation: wiggle-fractal 6s ease-in-out infinite;
}

.animate-county {
  animation: wiggle-county 7s ease-in-out infinite;
}

.animate-subtitle {
  animation: wiggle-subtitle 5s ease-in-out infinite;
}
</style>