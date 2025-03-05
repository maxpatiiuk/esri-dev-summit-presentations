import globie from "./resources/globie.png";

function Splash() {
  const splash = document.createElement("div");
  splash.className = "splash-content";
  splash.innerHTML = `
    <h1>
      Welcome to my demo!
    </h1>
    <img src="${globie}" alt="Globie" />
  `;
  return splash;
}

export default Splash;
