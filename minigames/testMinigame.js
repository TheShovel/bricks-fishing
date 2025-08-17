async function minigame() {
  console.log("Test minigame loaded");
  const test = document.createElement("div");
  test.style.cssText = `
    opacity: 0;
    position: absolute;
    width: 125px;
    height: 125px;
    background: red;
    right: 50%;
    bottom: 110px;
    transition: all 0.5s linear;
  `;
  test.textContent = "Test minigame!!";
  background.appendChild(test);
  await delay(100);
  test.style.opacity = 1;
  await delay(9900);
  test.style.opacity = 0;
  await delay(1000);
  test.remove();
}
minigame();
