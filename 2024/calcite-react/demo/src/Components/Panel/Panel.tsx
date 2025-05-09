import { useEffect, useState } from 'react';

// Step 11: Import CalciteBlock, CalciteShellPanel, and CalcitePanel
import {
  CalciteBlock,
  CalciteShellPanel,
  CalcitePanel,
} from '@esri/calcite-components-react';

// Step 12: Import Features component
import '@arcgis/map-components/dist/components/arcgis-features';
import { ArcgisFeatures } from '@arcgis/map-components-react';

interface PanelProps {
  map: HTMLArcgisMapElement | null;
  panelHeading: string;
  referenceElement: string;
}

export const Panel = ({ map, referenceElement, panelHeading }: PanelProps) => {
  // Step 13: Set up state to store features component - to eventually set up click handle
  const [featuresComponent, setFeaturesComponent] =
    useState<HTMLArcgisFeaturesElement | null>(null);

  // Step 14: useEffect - when features component and view is available, set up click handle
  // On click, open the clicked feature if any
  useEffect(() => {
    if (!featuresComponent || map == null) {
      return;
    }

    // Step 15: disable popup for features widget as feature information will be rendered in side panel
    map.view.popupEnabled = false;

    const handle = map.view.on('click', (event) => {
      featuresComponent.open({
        location: event.mapPoint,
        fetchFeatures: true,
      });
    });

    return () => handle.remove();
  }, [featuresComponent, map]);

  // Step 16: Render shell panel, containing features component
  return (
    <CalciteShellPanel slot="panel-start">
      {/* Block to render panel heading  */}
      <CalciteBlock heading={panelHeading} />
      {/* Panel to render features widget container node */}
      <CalcitePanel loading={map == null}>
        {/* Step 17: Render Features component to display feature information in
        side panel on click */}
        <ArcgisFeatures
          // Step 18: Because ArcgisFeatures is displayed outside the map, we need to pass a reference to the map
          referenceElement={referenceElement}
          // Step 19: Use onArcgisFeaturesReady to store ArcgisFeatures in react component's state
          onArcgisFeaturesReady={(e) => setFeaturesComponent(e.target)}
        />
      </CalcitePanel>
    </CalciteShellPanel>
  );
};
