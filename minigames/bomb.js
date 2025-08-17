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
    transition: all 20s linear;
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
    width: 250px;
    height: 150px;
    transition: all 0.5s linear;
    bottom: 50px;
    left: 25%;
  `;
  const redwire = document.createElement("div");
  redwire.style.cssText = `
    background: red;
    font-family: monospace;
    user-select: none;
    white-space: nowrap;
    align-content: center;
    text-align: center;
    position: absolute;
    width: 90%;
    height: 15px;
    left: 12.5px;
    bottom: 40px;
    transition: all 0.5s linear;
  `;
  const bluewire = document.createElement("div");
  bluewire.style.cssText = `
    background: blue;
    font-family: monospace;
    user-select: none;
    white-space: nowrap;
    align-content: center;
    text-align: center;
    position: absolute;
    width: 90%;
    height: 15px;
    left: 12.5px;
    top: 40px;
    transition: all 0.5s linear;
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
      };
      wire = "RED";
      break;
    case 1:
      bluewire.onclick = () => {
        bluewire.onclick = null;
        progress = 100;
        progressBar.textContent = `Progress ${progress}%`;
        progressBar.style.width = `${progress}%`;
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
