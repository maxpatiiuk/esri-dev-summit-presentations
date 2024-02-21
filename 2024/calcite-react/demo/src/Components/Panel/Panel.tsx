import { useEffect, useState } from 'react';

// Import calcite components -  Shell Panel, Block, and Panel
import '@esri/calcite-components/dist/components/calcite-block';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-panel';

//  Import Calcite Component react wrappers
// At React 19, we are expecting React to fully support web components which will eliminate the need of web component wrappers, but as of now we will use these.
import {
  CalciteBlock,
  CalciteShellPanel,
  CalcitePanel,
} from '@esri/calcite-components-react';

import '@arcgis/map-components/dist/components/arcgis-features';
import { ArcgisFeatures } from '@arcgis/map-components-react';

import { on } from '@arcgis/core/core/reactiveUtils';

interface PanelProps {
  view: __esri.MapView | null;
  panelHeading: string;
}

export const Panel = ({ view, panelHeading }: PanelProps) => {
  const [featuresWidget, setFeaturesWidget] = useState<__esri.Features | null>(
    null,
  );

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
    return () => {
      featuresWidget?.destroy();
      clickHandle.remove();
    };
  }, [view, featuresWidget]);

  return (
    <CalciteShellPanel slot="panel-start">
      {/* Block to render panel heading  */}
      <CalciteBlock heading={panelHeading}></CalciteBlock>
      {/* Panel to render features widget container node */}
      <CalcitePanel>
        {view ? (
          <ArcgisFeatures
            view={view}
            onWidgetReady={(e) => setFeaturesWidget(e.detail.widget)}
          />
        ) : null}
      </CalcitePanel>
    </CalciteShellPanel>
  );
};
