import "@esri/calcite-components/components/calcite-link";
import { useHref, useLinkClickHandler } from "react-router";
import globie from "./resources/globie.png";

function Splash() {
  const toApp = "/app";
  const href = useHref(toApp);
  const handleClick = useLinkClickHandler<HTMLCalciteLinkElement>(toApp);
  //const x ='k';
  //const value3 = !x == null;
  return (
    <div className="splash-content">
      <h1>
        Welcome to our demo!{" "}
        <calcite-link href={href} onClick={handleClick}>
          Open app
        </calcite-link>
      </h1>
      <img src={globie} alt="Globie" />
    </div>
  );
}

export default Splash;
