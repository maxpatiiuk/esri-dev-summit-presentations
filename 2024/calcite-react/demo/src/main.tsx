import React from 'react';
import ReactDOM from 'react-dom/client';

import esriConfig from '@arcgis/core/config';

import App from './App.tsx';

// Step 1: Import CSS
import './index.css';

// Step 3 (OPTIONAL): JSON containing values to configure app
import {
  portalUrl,
  webmap,
  title,
  panelHeading,
} from './config/application.json';

// Step 4: Calcite Components Assets (Recommended to use CDN based on documentation)
// Please note: You can also manage assets locally by copying assets directly from Calcite Components in your project.
import { setAssetPath } from '@esri/calcite-components/dist/components/index';
setAssetPath(
  'https://cdn.jsdelivr.net/npm/@esri/calcite-components/dist/calcite/assets',
);

// Step 5: Set portal URL to work with content from within ArcGIS Online or ArcGIS Enterprise Portal
esriConfig.portalUrl = portalUrl;

document.title = title;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App webmap={webmap} title={title} panelHeading={panelHeading} />
  </React.StrictMode>,
);
