import React from 'react';
import ReactDOM from 'react-dom/client';

import esriConfig from '@arcgis/core/config';

import App from './App.tsx';

import './index.css';

import {
  portalUrl,
  webmap,
  title,
  panelHeading,
} from './config/application.json';

import { setAssetPath } from '@esri/calcite-components/dist/components';
setAssetPath(
  'https://cdn.jsdelivr.net/npm/@esri/calcite-components/dist/calcite/assets',
);

esriConfig.portalUrl = portalUrl;

document.title = title;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App webmap={webmap} title={title} panelHeading={panelHeading} />
  </React.StrictMode>,
);
