import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import "./index.scss";
import './App.scss';

import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath("https://cdn.jsdelivr.net/npm/@esri/calcite-components/dist/calcite/assets");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
