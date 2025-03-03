import React from "react";
import ReactDOM from "react-dom/client";
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { App } from "./App";
import "./index.css";

const serviceInfo = {
  authentication: ApiKeyManager.fromKey(import.meta.env.VITE_API_KEY),
  endpoint: import.meta.env.DEV
    ? "/arcgis/rest/services/places-service/v1/places/near-point"
    : undefined,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App serviceInfo={serviceInfo} />
  </React.StrictMode>,
);
