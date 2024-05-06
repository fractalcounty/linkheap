<template>
<div id="grain-overlay" class="-z-5"></div>
</template>

<style>
#grain-overlay {
	animation: grain 1s steps(1) infinite;
	background-image: url("public/assets/grain.webp");
	width: 200%;
	height: 200vh;
	top: -50%;
	left: -50%;
	position: fixed;
	opacity: 0.19;
	pointer-events: none;
}

@keyframes grain {
  0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-5%, -8%) }
  20% { transform:translate(-15%, 5%) }
  30% { transform:translate(7%, -10%) }
  40% { transform:translate(-5%, 15%) }
  50% { transform:translate(-15%, 10%) }
  60% { transform:translate(10%, 0%) }
  70% { transform:translate(0%, 8%) }
  80% { transform:translate(3%, 10%) }
  90% { transform:translate(-10%, 10%) }
}

</style>