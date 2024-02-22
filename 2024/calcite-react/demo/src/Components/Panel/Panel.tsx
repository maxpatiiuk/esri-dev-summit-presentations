import { useEffect, useState } from 'react';

// Step 10: Panel, Shell Panel, and Block and the associated react wrappers
import '@esri/calcite-components/dist/components/calcite-block';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-panel';

import {
  CalciteBlock,
  CalciteShellPanel,
  CalcitePanel,
} from '@esri/calcite-components-react';

// Step 11: Import Features components
import '@arcgis/map-components/dist/components/arcgis-features';
import { ArcgisFeatures } from '@arcgis/map-components-react';

// Step 12: Import reactiveUtils.on to listen for view click
import { on } from '@arcgis/core/core/reactiveUtils';

interface PanelProps {
  view: __esri.MapView | null;
  panelHeading: string;
}

export const Panel = ({ view, panelHeading }: PanelProps) => {
  // Step 13: Set up state to store features component - to eventually set up click handle
  const [featuresWidget, setFeaturesWidget] = useState<__esri.Features | null>(
    null,
  );

  // Step 14: useEffect - when features component and view is available, set up click handle
  // On click, open the clicked feature if any
  useEffect(() => {
    if (!featuresWidget || !view) return;
    const clickHandle = on(
      () => view,
      'click',
      (event) => {
        featuresWidget.open({
          location: event.mapPoint,
          fetchFeatures: true,
        });
      },
    );
    return () => clickHandle.remove();
  }, [view, featuresWidget]);

  // Step 15: Render shell panel, containing features component
  return (
    <CalciteShellPanel slot="panel-start">
      {/* Block to render panel heading  */}
      <CalciteBlock heading={panelHeading} />
      {/* Panel to render features widget container node */}
      <CalcitePanel>
        {view ? (
          // Step 16: Render Features component to display feature information in side panel on click
          <ArcgisFeatures
            view={view}
            // Step 17: Listen for on widget ready to store features component in react component's state
            onWidgetReady={(e) => setFeaturesWidget(e.detail.widget)}
          />
        ) : null}
      </CalcitePanel>
    </CalciteShellPanel>
  );
};
