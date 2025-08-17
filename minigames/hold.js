dark.onclick = () => {
  if (progress < 100) {
    progress += 10;
    progressBar.textContent = `Progress ${progress}%`;
    progressBar.style.width = `${progress}%`;
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
  hold.textContent = "CLICK QUICKLY!!!";
  background.appendChild(hold);
  await delay(100);
  hold.style.opacity = 1;
  dark.style.cursor = "pointer";
  addEventListener("minigameend", async () => {
    dark.style.cursor = "";
    dark.onclick = () => {};
    hold.style.opacity = 0;
    await delay(1000);
    hold.remove();
    removeEventListener("minigameend", () => {});
  });
}
minigame();
