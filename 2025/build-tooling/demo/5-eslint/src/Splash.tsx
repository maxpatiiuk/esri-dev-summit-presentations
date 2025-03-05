import "@esri/calcite-components/components/calcite-link";
import globie from "./resources/globie.png";

// Define that component accepts an optional appName prop
function Splash({ appName }: SplashProps) {
  // Incorrect code - ESLint will catch this:
  // const showHeading = !name == null;
  // Correct:
  const showHeading = appName != null;
  return (
    <div className="splash-content">
      {/** Conditionally rendering an element */}
      {showHeading && <h1>Welcome to {appName}!</h1>}
      <calcite-link href="">Open app</calcite-link>
      <img src={globie} alt="Globie" />
    </div>
  );
}

// By default TypeScript ESLint will encourage usage of `interface` over `type`
// You may or may not agree with this rule
// Fortunately, it is easy to re-configure ESLint
interface SplashProps {
  // type SplashProps = {
  appName?: string;
}

export default Splash;
