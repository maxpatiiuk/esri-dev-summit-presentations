import "@esri/calcite-components/components/calcite-link";
import globie from "./resources/globie.png";

function Splash() {
  return (
    <div className="splash-content">
      <h1>Welcome to our demo!</h1>
      {/* Hover over the `href` prop and see inline documentation */}
      <calcite-link href="">Open app</calcite-link>
      {/* TypeScript will catch if you misspell the prop or pass wrong data type */}
      {/* <calcite-link href2="">Open app</calcite-link> */}
      {/* <calcite-link href={false}>Open app</calcite-link> */}
      {/* You get autocomplete and checks for all Esri web components. */}
      {/* <calcite-button appearance="outline" /> */}
      {/* If you write your code in TypeScript, you will also benefit from such checks */}
      <img src={globie} alt="Globie" />
    </div>
  );
}

export default Splash;
