import "./index.css";
import Splash from "./Splash";
import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");
if (!root) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(<Splash />);
