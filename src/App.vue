<template>
  <main> 
	<title>FRACTALCOUNTY - Links</title>
    <RouterView />
    <div id="noise-bg"></div>
    <div class="gradient-overlay"></div> 
  </main>
</template>

<style>

.gradient-overlay {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.203), rgba(0, 0, 0, 0));
  pointer-events: none;
}

#noise-bg {
	position: fixed;
	top: -50%;
	left: -50%;
	right: -50%;
	bottom: -50%;
	width: 400%;
	height: 400vh;
	background: transparent
		url("https://portfolio-v4-abjt14.vercel.app/assets/images/noise/noise.png")
		repeat 0 0;
	background-repeat: repeat;
	animation: 1000ms infinite noise;
	pointer-events: none;
	opacity: 0.6;
}

@keyframes noise {
	0%,
	100% {
		background-position: 0 0;
	}
	10% {
		background-position: -5% -10%;
	}
	20% {
		background-position: -15% 5%;
	}
	30% {
		background-position: 7% -25%;
	}
	40% {
		background-position: 20% 25%;
	}
	50% {
		background-position: -25% 10%;
	}
	60% {
		background-position: 15% 5%;
	}
	70% {
		background-position: 0 15%;
	}
	80% {
		background-position: 25% 35%;
	}
	90% {
		background-position: -10% 10%;
	}
}

</style>