const music = new Audio("sound/music.wav");
music.loop = true;
music.volume = 0.5;
const cast = new Audio("sound/cast.wav");
const plop = new Audio("sound/plop.mp3");
const complete = new Audio("sound/complete.wav");
plop.volume = 0.25;

const body = document.body;
let history = [];
function preloadImage(url) {
  var img = new Image();
  img.src = url;
}

body.onmousedown = () => {
  body.onmousedown = null;
  music.play();
};

preloadImage("assets/personSwing1.PNG");
preloadImage("assets/personSwing2.PNG");
preloadImage("assets/personFishing.PNG");

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes sway {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(5deg); }
    100% { transform: rotate(-5deg); }
  }
  @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
  }
  @keyframes spini {
      from {
          transform:rotate(360deg);
      }
      to {
          transform:rotate(0deg);
      }
  }
  @keyframes water {
      from {
          background-position-x: 0px;
      }
      to {
          background-position-x: 500px;
      }
  }
  @keyframes clouds {
    0% { transform: translateY(-5px); }
    50% { transform: translateY(0px); }
    100% { transform: translateY(5px); }
  }
`;
document.head.appendChild(styleSheet);

body.style.cssText = `
  background: black;
  user-select: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  `;

const background = document.createElement("div");
background.style.cssText = `
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  width: 500px;
  height: 500px;
  background: white;
`;

body.appendChild(background);
const clouds = document.createElement("div");
clouds.style.cssText = `
  opacity: 0.25;
  user-select: none;
  right: -100px;
  top: 40px;
  position: absolute;
  width: 500px;
  height: 100px;
  background: url("assets/clouds.PNG");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: all 5s ease;
  animation: clouds 3s ease-in-out infinite alternate;
  `;

background.appendChild(clouds);
const ground = document.createElement("div");
ground.style.cssText = `
  position: absolute;
  width: 300px;
  height: 200px;
  background: grey;
  right: 0px;
  bottom: 0px;
  background: url("assets/ground.PNG");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position-x: 5px;
  background-position-y: 5px;
`;
const water = document.createElement("div");
water.style.cssText = `
  position: absolute;
  width: 100%;
  height: 40px;
  background: blue;
  right: 0px;
  bottom: 300px;
  background: url("assets/water.PNG");
  background-size: 100% 100%;
  animation: water 25s linear infinite;
`;

const sun = document.createElement("div");
sun.style.cssText = `
  position: absolute;
  width: 100px;
  height: 115px;
  background: yellow;
  left: 0px;
  top: 0px;
  background: url("assets/sun.PNG");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position-x: -11px;
  background-position-y: -11px;
`;
const person = document.createElement("div");
person.style.cssText = `
  position: absolute;
  width: 125px;
  height: 200px;
  right: 75px;
  bottom: 110px;
`;
const fishingSpot = document.createElement("div");
fishingSpot.style.cssText = `
  opacity: 0;
  position: absolute;
  width: 80px;
  height: 80px;
  background: green;
  right: 325px;
  bottom: 145px;
  transition: all 1s linear;
  background: url("assets/splash.PNG");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: sway 1s ease-in-out infinite alternate;
`;
const fish = document.createElement("div");
fish.style.cssText = `
  opacity: 0;
  position: absolute;
  width: 80px;
  height: 40px;
  background: green;
  right: 500px;
  bottom: 180px;
  transition: all 5s ease;
  background: url("assets/fish.PNG");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
const dark = document.createElement("div");
dark.style.cssText = `
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  transition: all 1s ease;
`;
const bestCatch = document.createElement("div");
bestCatch.style.cssText = `
  opacity: 0;
  left: 5px;
  bottom: 5px;
  position: absolute;
  align-content: center;
  color: white;
  font-family: monospace;
  font-size: 13px;
  transition: all 0.25s ease;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;
const lose = document.createElement("div");
lose.style.cssText = `
  opacity: 0;
  position: absolute;
  align-content: center;
  width: 100%;
  background: black;
  color: white;
  font-family: monospace;
  font-size: 20px;
  transition: all 1s ease;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  top: 50%;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;
lose.textContent = "Your catch got away!";
bestCatch.textContent = "";
background.appendChild(sun);
background.appendChild(water);
background.appendChild(fish);
background.appendChild(fishingSpot);
background.appendChild(ground);
background.appendChild(person);
background.appendChild(bestCatch);
background.appendChild(dark);
background.appendChild(lose);
function setPlantImage(url, object) {
  const img = new Image();
  img.src = url;
  img.onload = function () {
    object.style.background = `url(${url})`;
    object.style.width = this.width + "px";
    object.style.height = this.height + "px";
    object.style.backgroundSize = "100% 100%";
    object.style.backgroundRepeat = "no-repeat";
  };
}
setPlantImage("assets/person.PNG", person);
if (localStorage.brickFishBestRarity != undefined) {
  bestCatch.innerHTML = localStorage.brickFishBestFish;
  bestCatch.style.color = localStorage.brickFishBestColor;
  bestCatch.style.opacity = 1;
}

const progressBar = document.createElement("div");
progressBar.style.cssText = `
  opacity: 0;
  position: absolute;
  align-content: center;
  width: 0%;
  height: 20px;
  background: white;
  color: white;
  font-family: monospace;
  font-size: 13px;
  transition: all 0.25s ease;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

`;
const timer = document.createElement("div");
timer.style.cssText = `
  opacity: 0;
  position: absolute;
  align-content: center;
  color: white;
  font-family: monospace;
  font-size: 50px;
  transition: all 0.5s ease;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  top: 10px;
  left: 0px;
`;

progressBar.textContent = "Progress 0%";
timer.textContent = "8";
background.appendChild(progressBar);
background.appendChild(timer);

const minigames = ["hold", "candy", "rats", "bomb", "glasses", "onion"];
let currentGame = 0;
let fishing = false;
let progress = 0;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function fixzoom() {
  if (window.innerWidth > window.innerHeight) {
    background.style.zoom = (250 * window.innerWidth) / 2507 + "%";
  } else {
    background.style.zoom = (500 * window.innerWidth) / 2507 + "%";
  }
  await delay(100);
  fixzoom();
}
fixzoom();

async function loadMinigame(minigameName) {
  try {
    const response = await fetch(`./minigames/${minigameName}.js`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const scriptText = await response.text();
    const script = document.createElement("script");
    script.textContent = scriptText;
    document.body.appendChild(script);
  } catch (error) {
    console.error("Failed to load minigame:", error);
  }
}

background.onclick = async () => {
  if (fishing) return;
  fish.style.visibility = "visible";
  progress = 0;
  background.style.cursor = "wait";
  fishing = true;
  cast.play();
  setPlantImage("assets/personSwing1.PNG", person);
  await delay(250);
  setPlantImage("assets/personSwing2.PNG", person);
  await delay(250);
  setPlantImage("assets/personFishing.PNG", person);
  plop.play();
  fishingSpot.style.opacity = 1;
  await delay(750);
  fish.style.opacity = 1;
  fish.style.right = "325px";
  await delay(4500);
  dark.style.opacity = 0.75;
  progressBar.style.opacity = 1;
  timer.style.opacity = 1;
  progressBar.textContent = "Progress 0%";
  progressBar.style.width = `0%`;
  await loadMinigame(minigames[currentGame]);
  background.style.cursor = "";
  for (let i = 0; i < 6; i++) {
    timer.textContent = 5 - i;
    await delay(1000);
    if (progress >= 100) break;
  }
  dispatchEvent(new Event("minigameend"));
  setPlantImage("assets/person.PNG", person);
  fish.style.transition = "all 1s ease";
  fish.style.opacity = 0;
  fishingSpot.style.opacity = 0;
  await delay(1000);
  timer.style.opacity = 0;
  progressBar.style.opacity = 0;
  fish.style.right = "500px";
  dark.style.opacity = 0;
  if (progress >= 100) {
    fishCatch();
  } else {
    lose.style.opacity = 1;
    await delay(4000);
    lose.style.opacity = 0;
    background.style.cursor = "pointer";
    fish.style.transition = "all 5s ease";
    fishing = false;
  }
  currentGame++;
  if (currentGame > minigames.length - 1) currentGame = 0;
};

const catchFishBG = document.createElement("div");
catchFishBG.style.cssText = `
  opacity: 0;
  transition: all 1s ease;
  pointer-events: none;
  cursor: pointer;
  position: absolute;
  width: 500px;
  height: 500px;
  background: green;
  animation: spin 8s linear infinite;
  background: url("assets/fishBG.PNG");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
const catchFish = document.createElement("div");
catchFish.style.cssText = `
  pointer-events: none;
  scale: 2;
  transition: all 1s ease;
  opacity: 0;
  align-content: center;
  pointer-events: none;
  cursor: pointer;
  position: absolute;
  width: 125px;
  height: 69px;
  left: 37%;
  top: 40%;
`;
const catchFishText = document.createElement("div");
catchFishText.style.cssText = `
  align-content: center;
  text-align: center;
  pointer-events: none;
  cursor: pointer;
  position: absolute;
  width: 150px;
  height: 50px;
  color: white;
  font-family: monospace;
  font-size: 13px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  top: -65px;
  left: -10px;
`;
catchFishText.innerHTML = "";
const catchFishTextRarity = document.createElement("div");
catchFishTextRarity.style.cssText = `
  align-content: center;
  text-align: center;
  pointer-events: none;
  cursor: pointer;
  position: absolute;
  width: 150px;
  height: 50px;
  color: cyan;
  font-family: monospace;
  font-size: 13px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  top: -35px;
    left: -10px;
`;
catchFishTextRarity.innerHTML = "";
const catchFishContinue = document.createElement("div");
catchFishContinue.style.cssText = `
  opacity: 0;
  transition: all 1s ease;
  align-content: center;
  text-align: center;
  pointer-events: none;
  cursor: pointer;
  position: absolute;
  width: 150px;
  height: 50px;
  color: white;
  font-family: monospace;
  font-size: 13px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  bottom: -50px;
  left: -10px;
`;
const brickFish = document.createElement("div");
brickFish.style.cssText = `
  pointer-events: none;
  scale: 2;
  transition: all 1s ease;
  align-content: center;
  pointer-events: none;
  cursor: pointer;
  position: absolute;
  width: 75px;
  height: 50px;
  left: 26px;
  top: 8px;
  background: url("assets/fishFish.PNG");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
catchFishContinue.innerHTML = "Click to continue!";
background.appendChild(catchFishBG);
background.appendChild(catchFish);
catchFish.appendChild(brickFish);
catchFish.appendChild(catchFishText);
catchFish.appendChild(catchFishTextRarity);
catchFish.appendChild(catchFishContinue);

async function fishCatch() {
  const r = randomInt(0, 255);
  const g = randomInt(0, 255);
  const b = randomInt(0, 255);
  const rarityScore = Math.round(r / 255 + g / 255 + b / 255);
  const rarityScoreRaw = r / 255 + g / 255 + b / 255;
  switch (rarityScore) {
    case 0:
      catchFishTextRarity.innerHTML = "LEGENDARY";
      catchFishTextRarity.style.color = "yellow";
      break;
    case 1:
      catchFishTextRarity.innerHTML = "Rare";
      catchFishTextRarity.style.color = "cyan";
      break;
    case 2:
      catchFishTextRarity.innerHTML = "Common";
      catchFishTextRarity.style.color = "grey";
      break;
    case 3:
      catchFishTextRarity.innerHTML = "Uncommon";
      catchFishTextRarity.style.color = "lime";
      break;
  }
  const color = await fetch(
    `https://www.thecolorapi.com/id?rgb=rgb(${r},${g},${b})`,
  ).then((response) => response.json());

  if (
    localStorage.brickFishBestRarity > rarityScoreRaw ||
    localStorage.brickFishBestRarity == undefined
  ) {
    localStorage.brickFishBestColor = color.hex.value;
    localStorage.brickFishBestFish =
      "Best brick found: " +
      color.name.value +
      " Brick " +
      "(" +
      catchFishTextRarity.innerHTML +
      ")";
    localStorage.brickFishBestRarity = rarityScore;
  }
  bestCatch.innerHTML = localStorage.brickFishBestFish;
  bestCatch.style.color = localStorage.brickFishBestColor;
  bestCatch.style.opacity = 1;
  catchFishText.innerHTML = color.name.value + " Brick";
  catchFish.style.backgroundColor = color.hex.value;
  catchFish.style.scale = 1;
  dark.style.opacity = 0.75;
  catchFish.style.opacity = 1;
  catchFishBG.style.opacity = 1;
  complete.play();
  await delay(4000);
  catchFishContinue.style.opacity = 1;
  background.style.cursor = "pointer ";
  dark.onclick = async () => {
    dark.onclick = null;
    catchFish.style.scale = 2;
    catchFishContinue.style.opacity = 0;
    catchFish.style.opacity = 0;
    catchFishBG.style.opacity = 0;
    background.style.cursor = "";
    fish.style.transition = "all 5s ease";
    dark.style.opacity = 0;
    await delay(500);
    catchFish.style.background = "white";
    background.style.cursor = "pointer";
    fishing = false;
  };
}
