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

// Step 4: Calcite Components
// 4a. Use setAssetPath to the path where assets were copied (occurs in package.json)
import { setAssetPath } from '@esri/calcite-components/dist/components';
const { href } = new URL(`${window.location.href}assets`);
setAssetPath(href);

// 4b. Use defineCustomElements to load calcite components into the app
import { defineCustomElements } from '@esri/calcite-components/dist/loader';
defineCustomElements(window, {
  resourcesUrl: href,
});

// Step 5: Set portal URL to work with content from within ArcGIS Online or ArcGIS Enterprise Portal
esriConfig.portalUrl = portalUrl;

document.title = title;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App webmap={webmap} title={title} panelHeading={panelHeading} />
  </React.StrictMode>,
);
