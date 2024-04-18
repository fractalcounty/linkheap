<script>
let resizeTimeout;

document.addEventListener("DOMContentLoaded", function () {
  placeRandomStars();

  window.addEventListener("resize", onWindowResize);
});

function onWindowResize() {
  fadeOutAndAdjustStarPositions();
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    removeExistingStars();
    placeRandomStars();
  }, 1000);
}

function placeRandomStars() {
  // Pixel density: 1 star per 5000 pixels
  const pixelDensity = 2000;

  const bodyWidth = document.body.clientWidth - 2;
  const bodyHeight = document.body.clientHeight - 2;

  const totalPixels = bodyWidth * bodyHeight;

  const numberOfStars = Math.floor(totalPixels / pixelDensity);

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const randomX = Math.floor(Math.random() * bodyWidth);
    const randomY = Math.floor(Math.random() * bodyHeight);

    star.dataset.percentX = randomX / bodyWidth;
    star.dataset.percentY = randomY / bodyHeight;

    star.style.left = `${randomX}px`;
    star.style.top = `${randomY}px`;

    const pulseDuration = 4 + Math.random() * 8;
    star.style.animation = `pulse ${pulseDuration}s infinite`;

    document.body.appendChild(star);

    void star.offsetWidth;

    // Fade in the star
    setTimeout(() => (star.style.opacity = "1"), 10);
  }
}

function fadeOutAndAdjustStarPositions() {
  const bodyWidth = document.body.clientWidth - 2;
  const bodyHeight = document.body.clientHeight - 2;

  const existingStars = document.querySelectorAll(".star");
  existingStars.forEach((star) => {
    star.style.opacity = "0";

    const adjustedX = star.dataset.percentX * bodyWidth;
    const adjustedY = star.dataset.percentY * bodyHeight;

    star.style.left = `${adjustedX}px`;
    star.style.top = `${adjustedY}px`;
  });
}

function removeExistingStars() {
  const existingStars = document.querySelectorAll(".star");
  existingStars.forEach((star) => {
    document.body.removeChild(star);
  });
}
</script>

<style>
:root {
  --stars: rgba(176, 176, 176, 0.099);
}

.gradient-overlay {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
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
	opacity: 0.8;
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

/* --- Star Background ------------------------------------------------ */

@keyframes pulse {
  0%,
  100% {
    opacity: 0.23;
  }
  50% {
    opacity: 0.05;
  }
}

.star {
  position: absolute;
  width: 1px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.805);
  box-shadow: 0 0 6px 1px rgba(255, 255, 255, 0.278) !important;
  opacity: 0;
  transition: opacity 0.5s;
}
</style>