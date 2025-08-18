cut = new Audio("sound/cut.mp3");
cut.volume = 0.5;
for (let i = 1; i < 8; i++) {
  preloadImage(`assets/onion${i}.PNG`);
}
onionGuy = null;
spinny = null;
rotation = 1;
dark.onclick = async () => {
  if (progress < 100) {
    cut.play();
    rotation += 1;
    spinny.style.background = `url("assets/onion${rotation}.PNG")`;
    spinny.style.backgroundSize = "100% 100%";
    spinny.style.backgroundRepeat = "no-repeat";
    progress += 20;
    progressBar.textContent = `Progress ${progress}%`;
    progressBar.style.width = `${progress}%`;
  }
  if (progress >= 100) {
    onionGuy.style.bottom = "0%";
    await delay(1000);
    onionGuy.style.bottom = "-40%";
  }
};
async function minigame() {
  const hold = document.createElement("div");
  hold.style.cssText = `
    pointer-events: none;
    color: white;
    font-family: monospace;
    user-select: none;
    white-space: nowrap;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    align-content: center;
    text-align: center;
    opacity: 0;
    position: absolute;
    width: 0%;
    height: 50px;
    background: white;
    left: 37%;
    bottom: 50%;
    transition: all 0.5s linear;
  `;
  hold.textContent = "CUT THE ONION!!!";
  background.appendChild(hold);
  spinny = document.createElement("div");
  spinny.style.cssText = `
    pointer-events: none;
    opacity:0;
    cursor: pointer;
    background: brown;
    user-select: none;
    text-align: center;
    position: absolute;
    width: 200px;
    height: 190px;
    bottom: 8%;
    left: 30%;
    transition: all 0.5s ease;
    background: url("assets/onion1.PNG");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `;
  background.appendChild(spinny);

  onionGuy = document.createElement("div");
  onionGuy.style.cssText = `
    pointer-events: none;
    opacity:1;
    cursor: pointer;
    background: brown;
    user-select: none;
    text-align: center;
    position: absolute;
    width: 320px;
    height: 200px;
    bottom: -40%;
    left: 0%;
    transition: all 0.1s ease;
    background: url("assets/guycryingbecauseofonion.PNG");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `;
  background.appendChild(onionGuy);

  await delay(100);

  spinny.style.opacity = 1;
  hold.style.opacity = 1;
  dark.style.cursor = "pointer";
  addEventListener("minigameend", async () => {
    dark.style.cursor = "";
    dark.onclick = () => {};
    hold.style.opacity = 0;
    spinny.style.opacity = 0;
    await delay(1000);
    hold.remove();
    spinny.remove();
    onionGuy.remove();
    removeEventListener("minigameend", () => {});
  });
}
minigame();
