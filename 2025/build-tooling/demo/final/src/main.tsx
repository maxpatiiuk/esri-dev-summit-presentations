import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import "./index.css";

const App = React.lazy(() => import("./App"));
const Splash = React.lazy(() => import("./Splash"));

const placesServiceInfo = {
  authentication: ApiKeyManager.fromKey(import.meta.env.VITE_API_KEY),
  // Use a local proxy in development mode
  endpoint:
    import.meta.env.DEV === true
      ? "/arcgis/rest/services/places-service/v1/places/near-point"
      : undefined,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/app" element={<App placesServiceInfo={placesServiceInfo} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
