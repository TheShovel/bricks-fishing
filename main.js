const body = document.body;

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
  overflow: hidden;
  position: absolute;
  width: 500px;
  height: 500px;
  background: white;
`;

body.appendChild(background);
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

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
