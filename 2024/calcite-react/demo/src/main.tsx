import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

// Import CSS
import './index.css';

// JSON containing values to configure app
import {
  portalUrl,
  webmap,
  title,
  panelHeading,
} from './config/application.json';

// Calcite Components Assets (Recommended to use CDN based on documentation)
// Please note: You can also manage assets locally by copying assets directly from Calcite Components in your project.
import { setAssetPath } from '@esri/calcite-components/dist/components/index';
setAssetPath(
  'https://cdn.jsdelivr.net/npm/@esri/calcite-components/dist/calcite/assets',
);

// Set portal URL to work with content from within ArcGIS Online or ArcGIS Enterprise Portal
import esriConfig from '@arcgis/core/config';
esriConfig.portalUrl = portalUrl;

document.title = title;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App webmap={webmap} title={title} panelHeading={panelHeading} />
  </React.StrictMode>,
);
