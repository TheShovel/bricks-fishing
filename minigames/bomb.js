preloadImage("assets/blueWireBreak.PNG");
preloadImage("assets/redWireBreak.PNG");

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
    transition: all 5s linear;
  `;
  const bomb = document.createElement("div");
  bomb.style.cssText = `
    opacity: 0;
    user-select: none;
    white-space: nowrap;
    align-content: center;
    text-align: center;
    position: absolute;
    width: 325px;
    height: 225px;
    transition: all 0.5s linear;
    bottom: 50px;
    left: 20%;
    background: url("assets/bomb.PNG");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `;
  const redwire = document.createElement("div");
  redwire.style.cssText = `
    font-family: monospace;
    user-select: none;
    white-space: nowrap;
    align-content: center;
    text-align: center;
    position: absolute;
    width: 213px;
    height: 70px;
    left: 60px;
    bottom: 40px;
    transition: all 0.5s linear;
    background: url("assets/redWire.PNG");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `;
  const bluewire = document.createElement("div");
  bluewire.style.cssText = `
    font-family: monospace;
    user-select: none;
    white-space: nowrap;
    align-content: center;
    text-align: center;
    position: absolute;
    width: 213px;
    height: 70px;
    left: 60px;
    top: 65px;
    transition: all 0.5s linear;
    background: url("assets/blueWire.PNG");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `;
  background.appendChild(bomb);
  bomb.appendChild(redwire);
  bomb.appendChild(bluewire);

  let wire;
  bluewire.style.cursor = "pointer";
  redwire.style.cursor = "pointer";
  switch (randomInt(0, 1)) {
    case 0:
      redwire.onclick = () => {
        redwire.onclick = null;
        progress = 100;
        progressBar.textContent = `Progress ${progress}%`;
        progressBar.style.width = `${progress}%`;
        redwire.style.background = "url('assets/redWireBreak.PNG')";
        redwire.style.backgroundSize = "100% 100%";
        redwire.style.backgroundRepeat = "no-repeat";
      };
      wire = "RED";
      break;
    case 1:
      bluewire.onclick = () => {
        bluewire.onclick = null;
        progress = 100;
        progressBar.textContent = `Progress ${progress}%`;
        progressBar.style.width = `${progress}%`;
        bluewire.style.background = "url('assets/blueWireBreak.PNG')";
        bluewire.style.backgroundSize = "100% 100%";
        bluewire.style.backgroundRepeat = "no-repeat";
      };
      wire = "BLUE";
      break;
  }
  hold.textContent = wire + " WIRE!!!";
  background.appendChild(hold);
  await delay(100);
  hold.style.opacity = 1;
  bomb.style.opacity = 1;
  dark.style.cursor = "pointer";
  addEventListener("minigameend", async () => {
    dark.style.cursor = "";
    dark.onclick = () => {};
    hold.style.opacity = 0;
    bomb.style.opacity = 0;
    await delay(1000);
    hold.remove();
    bomb.remove();
    removeEventListener("minigameend", () => {});
  });
}
minigame();
