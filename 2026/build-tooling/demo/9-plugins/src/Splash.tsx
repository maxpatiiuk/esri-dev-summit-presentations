import "@esri/calcite-components/components/calcite-link";
import globie from "./resources/globie.png";

function Splash() {
  // Note: To use client-side navigation, use `useLinkClickHandler` from "react-router"
  // https://api.reactrouter.com/v7/functions/react_router.useLinkClickHandler.html
  return (
    <div className="splash-content">
      <h1>Welcome to our demo!</h1>
      <calcite-link href="/app">Open app</calcite-link>
      <img src={globie} alt="Globie" />
    </div>
  );
}

export default Splash;
