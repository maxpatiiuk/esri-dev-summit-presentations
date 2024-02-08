import { useEffect, useRef, useState } from 'react';

import '@esri/calcite-components/dist/components/calcite-shell';
import { CalciteShell } from '@esri/calcite-components-react';

import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

import { Header } from './Components/Header/Header';
import { Panel } from './Components/Panel/Panel';
import { View } from './Components/View/View';

interface AppProps {
  webmap: string;
  title: string;
  panelHeading: string;
}

function App({ webmap, title, panelHeading }: AppProps) {
  const viewRef = useRef(null) as React.RefObject<HTMLDivElement>;

  const [view, setView] = useState<MapView | null>(null);

  const createView = async (map: __esri.WebMap, container: HTMLDivElement) => {
    try {
      const loadedMap = await map.load();
      const view = new MapView({
        container,
        map: loadedMap,
        popupEnabled: false,
      });
      return Promise.resolve(view);
    } catch (err) {
      console.error('ERROR: ', err);
      return Promise.reject(null);
    }
  };

  useEffect(() => {
    const container = viewRef?.current;
    if (!container) return;

    const map = new WebMap({
      portalItem: {
        id: webmap,
      },
    });

    createView(map, container)
      .then((res) => setView(res))
      .catch();

    return () => view?.destroy();
  }, []);

  return (
    <CalciteShell>
      <Header title={title} />
      <Panel view={view} panelHeading={panelHeading} />
      <View viewRef={viewRef} />
    </CalciteShell>
  );
}

export default App;
