preloadImage("assets/kidWhat.PNG");
pickup = new Audio("sound/pickup.wav");
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
    left: 33%;
    bottom: 50%;
    transition: all 0.5s linear;
  `;
  const bomb = document.createElement("div");
  bomb.style.cssText = `
    opacity: 0;
    background: green;
    font-family: monospace;
    user-select: none;
    white-space: nowrap;
    align-content: center;
    text-align: center;
    position: absolute;
    width: 150px;
    height: 150px;
    transition: all 0.5s linear;
    bottom: 50px;
    left: 40%;
    background: url("assets/kid.PNG");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `;
  const candy = document.createElement("div");
  candy.style.cssText = `
    background: blue;
    font-family: monospace;
    user-select: none;
    white-space: nowrap;
    align-content: center;
    text-align: center;
    position: absolute;
    width: 65px;
    height: 105px;
    right: -10px;
    top: 10px;
    transition: all 1s linear;
    background: url("assets/candy.PNG");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `;
  background.appendChild(bomb);
  bomb.appendChild(candy);
  candy.onclick = () => {
    candy.onclick = null;
    if (progress < 100) {
      pickup.play();
      bomb.style.background = "url(assets/kidWhat.PNG)";
      bomb.style.backgroundSize = "100% 100%";
      bomb.style.backgroundRepeat = "no-repeat";
      progress = 100;
      progressBar.textContent = `Progress ${progress}%`;
      progressBar.style.width = `${progress}%`;
      candy.style.right = "-300px";
    }
  };

  candy.style.cursor = "pointer";
  hold.textContent = "TAKE THE CANDY!!!";
  background.appendChild(hold);
  await delay(100);
  hold.style.opacity = 1;
  bomb.style.opacity = 1;
  dark.style.cursor = "";
  addEventListener("minigameend", async () => {
    await delay(1000);
    dark.style.cursor = "";
    dark.onclick = () => {};
    hold.style.opacity = 0;
    bomb.style.opacity = 0;
    await delay(1000);
    hold.remove();
    bomb.remove();
    candy.remove();
    removeEventListener("minigameend", () => {});
  });
}
minigame();
