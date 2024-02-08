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
import { on } from '@arcgis/core/core/reactiveUtils';

interface PanelProps {
  view: __esri.MapView | null;
  panelHeading: string;
}

export const Panel = ({ view, panelHeading }: PanelProps) => {
  const featuresRef = useRef<HTMLDivElement | null>(null);

  const [featuresWidget, setFeaturesWidget] = useState<Features | null>(null);

  useEffect(() => {
    if (!view) return;

    if (!featuresWidget) {
      const container = featuresRef?.current as HTMLDivElement;
      const features = new Features({
        container,
        view,
      });
      setFeaturesWidget(features);
    }

    return () => featuresWidget?.destroy();
  }, [view]);

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

  return (
    <CalciteShellPanel slot="panel-start">
      <CalciteBlock heading={panelHeading}></CalciteBlock>
      <CalcitePanel>
        <div ref={featuresRef} id="panel" />
      </CalcitePanel>
    </CalciteShellPanel>
  );
};
