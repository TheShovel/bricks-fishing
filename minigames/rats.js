async function minigame() {
  const hold = document.createElement("div");
  hold.style.cssText = `
    z-index: 9999;
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
    left: 32%;
    bottom: 50%;
    transition: all 0.5s linear;
  `;
  hold.textContent = "CATCH THE RATS!!!";
  background.appendChild(hold);
  await delay(100);
  hold.style.opacity = 1;
  const ratstyle = `
    opacity:0;
    cursor: pointer;
    background: brown;
    color: white;
    font-family: monospace;
    user-select: none;
    white-space: nowrap;
    align-content: center;
    text-align: center;
    position: absolute;
    width: 100px;
    height: 100px;
    transition: all 0.5s linear;
  `;

  const rat1 = document.createElement("div");
  rat1.style.cssText = ratstyle;
  rat1.style.top = 20 + randomInt(0, 60) + "%";
  rat1.style.left = randomInt(0, 78) + "%";
  rat1.onclick = async () => {
    rat1.style.backgroundColor = "red";
    rat1.style.top = 100 + "%";
    if (progress < 100) {
      progress += 20;
      progressBar.textContent = `Progress ${progress}%`;
      progressBar.style.width = `${progress}%`;
    }
  };
  background.appendChild(rat1);
  await delay(100);
  rat1.style.opacity = 1;

  const rat2 = document.createElement("div");
  rat2.style.cssText = ratstyle;
  rat2.style.top = 20 + randomInt(0, 60) + "%";
  rat2.style.left = randomInt(0, 78) + "%";
  rat2.onclick = async () => {
    rat2.style.backgroundColor = "red";
    rat2.style.top = 100 + "%";
    if (progress < 100) {
      progress += 20;
      progressBar.textContent = `Progress ${progress}%`;
      progressBar.style.width = `${progress}%`;
    }
  };
  background.appendChild(rat2);
  await delay(100);
  rat2.style.opacity = 1;

  const rat3 = document.createElement("div");
  rat3.style.cssText = ratstyle;
  rat3.style.top = 20 + randomInt(0, 60) + "%";
  rat3.style.left = randomInt(0, 78) + "%";
  rat3.onclick = async () => {
    rat3.style.backgroundColor = "red";
    rat3.style.top = 100 + "%";
    if (progress < 100) {
      progress += 20;
      progressBar.textContent = `Progress ${progress}%`;
      progressBar.style.width = `${progress}%`;
    }
  };
  background.appendChild(rat3);
  await delay(100);
  rat3.style.opacity = 1;

  const rat4 = document.createElement("div");
  rat4.style.cssText = ratstyle;
  rat4.style.top = 20 + randomInt(0, 60) + "%";
  rat4.style.left = randomInt(0, 78) + "%";
  rat4.onclick = async () => {
    rat4.style.backgroundColor = "red";
    rat4.style.top = 100 + "%";
    if (progress < 100) {
      progress += 20;
      progressBar.textContent = `Progress ${progress}%`;
      progressBar.style.width = `${progress}%`;
    }
  };
  background.appendChild(rat4);
  await delay(100);
  rat4.style.opacity = 1;

  const rat5 = document.createElement("div");
  rat5.style.cssText = ratstyle;
  rat5.style.top = 20 + randomInt(0, 60) + "%";
  rat5.style.left = randomInt(0, 78) + "%";
  rat5.onclick = async () => {
    rat5.style.backgroundColor = "red";
    rat5.style.top = 100 + "%";
    if (progress < 100) {
      progress += 20;
      progressBar.textContent = `Progress ${progress}%`;
      progressBar.style.width = `${progress}%`;
    }
  };
  background.appendChild(rat5);
  await delay(100);
  rat5.style.opacity = 1;

  addEventListener("minigameend", async () => {
    dark.onclick = () => {};
    hold.style.opacity = 0;
    await delay(1000);
    hold.remove();
    rat1.remove();
    rat2.remove();
    rat3.remove();
    rat4.remove();
    rat5.remove();
    removeEventListener("minigameend", () => {});
  });
}
minigame();
