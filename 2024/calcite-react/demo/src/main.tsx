import React from 'react';
import ReactDOM from 'react-dom/client';

import esriConfig from '@arcgis/core/config';

import App from './App.tsx';

// Step 1: Import CSS
import './index.css';

// Step 3 (optional): JSON containing values to configure app
import {
  portalUrl,
  webmap,
  title,
  panelHeading,
} from './config/application.json';

// Step 4: Calcite Components: Use defineCustomElements to load calcite components into the app
import { defineCustomElements } from '@esri/calcite-components/dist/loader';
// CDN hosted assets
defineCustomElements(window, {
  resourcesUrl: 'https://js.arcgis.com/calcite-components/2.6.0/assets',
});

// Step 5: Set portal URL to work with content from within ArcGIS Online or ArcGIS Enterprise Portal
esriConfig.portalUrl = portalUrl;

document.title = title;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App webmap={webmap} title={title} panelHeading={panelHeading} />
  </React.StrictMode>,
);
