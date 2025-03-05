import "@esri/calcite-components/components/calcite-link";
import globie from "./resources/globie.png";

function Splash({ name }: { name?: string }) {
  // Incorrect code - ESLint will catch this:
  // const showHeading = !name == null;
  // Correct:
  const showHeading = name != null;
  return (
    <div className="splash-content">
      {showHeading && <h1>Welcome to our demo!</h1>}
      <calcite-link href="">Open app</calcite-link>
      <img src={globie} alt="Globie" />
    </div>
  );
}

export default Splash;
