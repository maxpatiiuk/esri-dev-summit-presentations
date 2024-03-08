import { useEffect, useState } from 'react';

// Step 11: Panel, Shell Panel, and Block and the associated react wrappers
import '@esri/calcite-components/dist/components/calcite-block';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-panel';

import {
  CalciteBlock,
  CalciteShellPanel,
  CalcitePanel,
} from '@esri/calcite-components-react';

// Step 12: Import Features component
import '@arcgis/map-components/dist/components/arcgis-features';
import { ArcgisFeatures } from '@arcgis/map-components-react';

// Step 13: Import reactiveUtils.on to listen for view click
import { on } from '@arcgis/core/core/reactiveUtils';

interface PanelProps {
  view: __esri.MapView | null;
  panelHeading: string;
}

export const Panel = ({ view, panelHeading }: PanelProps) => {
  // Step 14: Set up state to store features component - to eventually set up click handle
  const [featuresComponent, setFeaturesComponent] =
    useState<__esri.Features | null>(null);

  // Step 15: useEffect - when features component and view is available, set up click handle
  // On click, open the clicked feature if any
  useEffect(() => {
    if (!featuresComponent || !view) return;

    // Disable popup for features widget as feature information will be rendered in side panel
    view.popupEnabled = false;

    const clickHandle = on(
      () => view,
      'click',
      (event) => {
        featuresComponent.open({
          location: event.mapPoint,
          fetchFeatures: true,
        });
      },
    );
    return () => clickHandle.remove();
  }, [view, featuresComponent]);

  // Step 16: Render shell panel, containing features component
  return (
    <CalciteShellPanel slot="panel-start">
      {/* Block to render panel heading  */}
      <CalciteBlock heading={panelHeading} />
      {/* Panel to render features widget container node */}
      <CalcitePanel>
        {view ? (
          // Step 17: Render Features component to display feature information in side panel on click
          <ArcgisFeatures
            view={view}
            // Step 18: Listen for on widget ready to store features component in react component's state
            onWidgetReady={(e) => setFeaturesComponent(e.detail.widget)}
          />
        ) : null}
      </CalcitePanel>
    </CalciteShellPanel>
  );
};
