import "./index.css";
import Splash from "./Splash";

const root = document.getElementById("root");
if (!root) {
  throw new Error("No root element found");
}

const splash = Splash();
root.appendChild(splash);
