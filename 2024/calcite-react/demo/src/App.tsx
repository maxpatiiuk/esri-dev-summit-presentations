import { useState } from 'react';

import '@esri/calcite-components/dist/components/calcite-shell';
import { CalciteShell } from '@esri/calcite-components-react';

import '@arcgis/map-components/dist/components/arcgis-map';
import { ArcgisMap } from '@arcgis/map-components-react';

import { Header } from './Components/Header/Header';
import { Panel } from './Components/Panel/Panel';

interface AppProps {
  webmap: string;
  title: string;
  panelHeading: string;
}

function App({ webmap, title, panelHeading }: AppProps) {
  const [view, setView] = useState<__esri.MapView | null>(null);

  // Render app layout: Calcite Shell
  // Calcite Components Documentation: https://developers.arcgis.com/calcite-design-system/components/shell
  return (
    <CalciteShell>
      {/* Header slot */}
      <Header title={title} />
      {/* Panel Start slot */}
      <Panel view={view} panelHeading={panelHeading} />
      {/* Default content slot */}
      <ArcgisMap
        itemId={webmap}
        onViewReady={(e) => {
          const { view } = e.detail;
          view.popupEnabled = false;
          setView(view);
        }}
      />
    </CalciteShell>
  );
}

export default App;
