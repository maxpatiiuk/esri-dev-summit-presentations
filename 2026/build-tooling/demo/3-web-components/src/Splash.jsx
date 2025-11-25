// Import the components we are using
import "@esri/calcite-components/components/calcite-link";
import globie from "./resources/globie.png";
import React from "react";

function Splash() {
  return (
    <div className="splash-content">
      <h1>Welcome to our demo!</h1>
      {/* Display a Calcite link */}
      <calcite-link href="">Open app</calcite-link>
      <img src={globie} alt="Globie" />
    </div>
  );
}

export default Splash;
