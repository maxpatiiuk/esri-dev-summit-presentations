import { useState, useRef } from "react";
import "@esri/calcite-components/components/calcite-alert";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-shell-panel";
import "@esri/calcite-components/components/calcite-list";
import "@esri/calcite-components/components/calcite-list-item";
import "@esri/calcite-components/components/calcite-list-item-group";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-progress";
import "@arcgis/map-components/components/arcgis-features";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-map";

import Graphic from "@arcgis/core/Graphic";

function App() {
  const abortController = useRef<AbortController>(undefined);
  const featuresElement = useRef<HTMLArcgisFeaturesElement>(null);
  const [mapElement, setMapElement] = useState<
    HTMLArcgisMapElement | null | undefined
  >();
  const [selectedFeature, setSelectedFeature] = useState<
    Graphic | null | undefined
  >();

  function onMapClick(event: HTMLArcgisMapElement["arcgisViewClick"]) {
    featuresElement.current?.open({
      location: event.detail.mapPoint,
      fetchFeatures: true,
    });
  }

  function onFeaturesChange(
    event: HTMLArcgisFeaturesElement["arcgisPropertyChange"],
  ) {
    if (event.detail.name === "selectedFeature") {
      setSelectedFeature(event.target.selectedFeature);
      abortController.current?.abort();
    }
  }

  return (
    <calcite-shell>
      <calcite-shell-panel slot="panel-start" resizable>
        <calcite-panel
          heading="NY Educational Attainment"
          description={
            selectedFeature
              ? `Census tract ${selectedFeature.attributes?.GEOID}`
              : undefined
          }
        >
          <div className="panel-content">
            <arcgis-features
              hideCloseButton
              hideHeading
              ref={featuresElement}
              referenceElement={mapElement}
              onarcgisPropertyChange={onFeaturesChange}
            ></arcgis-features>
          </div>
        </calcite-panel>
      </calcite-shell-panel>
      <arcgis-map
        popupDisabled
        itemId="05e015c5f0314db9a487a9b46cb37eca"
        ref={setMapElement}
        onarcgisViewClick={onMapClick}
      >
        <arcgis-legend
          position="bottom-right"
          legend-style="classic"
        ></arcgis-legend>
      </arcgis-map>
    </calcite-shell>
  );
}

export default App;
