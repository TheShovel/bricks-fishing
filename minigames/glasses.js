preloadImage("assets/glassGuy2.PNG");
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
    left: 35%;
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
    width: 225px;
    height: 250px;
    transition: all 0.5s linear;
    bottom: 0px;
    left: 25%;
    background: url("assets/glassGuy1.PNG");
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
    width: 200px;
    height: 90px;
    transition: all 0.5s linear;
    background: url("assets/glasses.PNG");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `;
  candy.style.left = randomInt(-140, 200) + "px";
  candy.style.top = randomInt(-50, -150) + "px";
  background.appendChild(bomb);
  bomb.appendChild(candy);
  candy.onclick = async () => {
    candy.onclick = null;
    if (progress < 100) {
      pickup.play();
      candy.style.top = "15%";
      candy.style.left = "15%";
      await delay(500);
      bomb.style.backgroundImage = "url('assets/glassGuy2.PNG')";
      progress = 100;
      progressBar.textContent = `Progress ${progress}%`;
      progressBar.style.width = `${progress}%`;
      candy.style.right = "-300px";
    }
  };

  candy.style.cursor = "pointer";
  hold.textContent = "WEAR GLASSES!!!";
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
