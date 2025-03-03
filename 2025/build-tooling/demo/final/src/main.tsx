import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import "./index.css";

const App = React.lazy(() => import("./App"));
const Splash = React.lazy(() => import("./Splash"));

const serviceInfo = {
  authentication: ApiKeyManager.fromKey(import.meta.env.VITE_API_KEY),
  endpoint: import.meta.env.VITE_API_ENDPOINT,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/app" element={<App serviceInfo={serviceInfo} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
