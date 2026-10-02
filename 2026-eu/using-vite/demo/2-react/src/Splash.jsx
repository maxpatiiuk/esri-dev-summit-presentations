import globie from "./resources/globie.png";
import React from "react";

function Splash() {
  return (
    <div className="splash-content">
      {/* If we make changes, the changed elements will be updated in the browser */}
      <h1>Welcome to our demo!</h1>
      <img src={globie} alt="Globie" />
    </div>
  );
}

export default Splash;
