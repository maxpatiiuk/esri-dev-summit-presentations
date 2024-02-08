import { useEffect, useRef, useState } from 'react';

import '@esri/calcite-components/dist/components/calcite-block';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-panel';

import {
  CalciteBlock,
  CalciteShellPanel,
  CalcitePanel,
} from '@esri/calcite-components-react';

import Features from '@arcgis/core/widgets/Features';
import Handles from '@arcgis/core/core/Handles';
import { on } from '@arcgis/core/core/reactiveUtils';

interface PanelProps {
  view: __esri.MapView | null;
  panelHeading: string;
}

export const Panel = ({ view, panelHeading }: PanelProps) => {
  const handles = new Handles();
  const featuresRef = useRef<HTMLDivElement | null>(null);

  const [featuresWidget, setFeaturesWidget] = useState<__esri.Features | null>(
    null,
  );

  useEffect(() => {
    return () => featuresWidget?.destroy();
  }, []);

  useEffect(() => {
    if (!view || featuresWidget) return;
    const container = featuresRef?.current as HTMLDivElement;
    const features = new Features({
      container,
      view: view as __esri.MapView,
    });
    setFeaturesWidget(features);
  }, [view]);

  useEffect(() => {
    if (!featuresWidget || !view) return;

    const handlesKey = 'clickHandles';
    if (handles.has(handlesKey)) return;

    handles.add(
      on(
        () => view,
        'click',
        (event) => {
          featuresWidget.open({
            location: event.mapPoint,
            fetchFeatures: true,
          });
        },
      ),
      handlesKey,
    );
  }, [view, featuresWidget]);

  return (
    <CalciteShellPanel slot="panel-start">
      <CalciteBlock heading={panelHeading}></CalciteBlock>
      <CalcitePanel>
        <div ref={featuresRef} id="panel" />
      </CalcitePanel>
    </CalciteShellPanel>
  );
};
