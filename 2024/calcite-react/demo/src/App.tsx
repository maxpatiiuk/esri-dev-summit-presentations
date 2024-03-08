import { useState } from 'react';

// Step 6: Import Calcite Shell
import '@esri/calcite-components/dist/components/calcite-shell';

// Please note: At React 19, we are expecting React to fully support web components which will eliminate the need for web component wrappers, but as of now we will use these.
import { CalciteShell } from '@esri/calcite-components-react';

// Step 7: Import ArcgisMap from map-components
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
  // Step 8: Set up state to store view to pass into other components (Panel)
  const [map, setMap] = useState<HTMLArcgisMapElement | null>(null);

  // Step 9: Render app layout: Calcite shell, along with header, panel, and map
  // Calcite Components Documentation: https://developers.arcgis.com/calcite-design-system/components/shell
  return (
    <CalciteShell>
      {/* Header slot */}
      <Header title={title} />
      {/* Panel Start slot */}
      <Panel map={map} panelHeading={panelHeading} />
      {/* Default content slot */}
      <ArcgisMap
        itemId={webmap}
        // Step 10: Use onArcgisViewReadyChange to store map in state to pass into panel
        onArcgisViewReadyChange={(e) => setMap(e.target)}
      />
    </CalciteShell>
  );
}

export default App;
