/* eslint-disable react-refresh/only-export-components */
import esriConfig from "@arcgis/core/config.js";
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

const App = React.lazy(async () => await import("./App"));
const Splash = React.lazy(async () => await import("./Splash"));

const placesServiceInfo = {
  authentication: (() => {
    try {
      return ApiKeyManager.fromKey(import.meta.env.VITE_API_KEY);
    } catch (error) {
      console.warn("No API key provided, places service will not work", error);
      return undefined;
    }
  })(),
  // Use a local proxy in development mode
  endpoint: import.meta.env.DEV
    ? "/arcgis/rest/services/places-service/v1/places/near-point"
    : undefined,
};

// Proxy ArcGIS REST API requests via the development server so we can intercept them with our chaos monkey plugin
if (import.meta.env.DEV) {
  esriConfig.request.interceptors.push({
    urls: /^https:\/\/services\.arcgis\.com\/V6ZHFr6zdgNZuVG0\/arcgis\/rest\/services\/NY%20Educational%20Attainment\/FeatureServer\/0\/query/i,
    before(params) {
      params.url = "/arcgis";
    },
  });
}

const root = document.getElementById("root");
if (!root) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route
          path="/app"
          element={<App placesServiceInfo={placesServiceInfo} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
