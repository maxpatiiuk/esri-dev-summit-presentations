import globie from "./resources/globie.png";

function Splash() {
  const splash = document.createElement("div");
  splash.className = "splash-content";

  const h1 = document.createElement("h1");
  // If we make changes, the page reloads right away
  h1.textContent = "Welcome to my demo!";
  splash.appendChild(h1);

  const img = document.createElement("img");
  img.src = globie;
  img.alt = "Globie";
  splash.appendChild(img);

  return splash;
}

export default Splash;
