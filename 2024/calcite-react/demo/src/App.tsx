import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";

import { CalcitePanel, CalciteShell, CalciteShellPanel } from '@esri/calcite-components-react';
import { View } from "./Components/View/View";

import config from "./config/application.json";

import esriConfig from "@arcgis/core/config";
import { Panel } from "./Components/Panel/Panel";

esriConfig.portalUrl = config.portalUrl;

function App() {
  return (
    <CalciteShell>
      <header slot="header">
        <h1>
          2024 Esri Developer Summit: Building Web Apps with Calcite Design System and React
        </h1>
      </header>
      <CalciteShellPanel slot="panel-start">
        <CalcitePanel>
          <Panel />
        </CalcitePanel>
      </CalciteShellPanel>
      <View webmap={config.webmap} />
    </CalciteShell>
  )
}

export default App
