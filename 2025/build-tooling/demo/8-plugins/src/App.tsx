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

import type Polygon from "@arcgis/core/geometry/Polygon";
import Graphic from "@arcgis/core/Graphic";
import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol";
import Point from "@arcgis/core/geometry/Point";
import Collection from "@arcgis/core/core/Collection";
import { webMercatorToGeographic } from "@arcgis/core/geometry/support/webMercatorUtils";
import { findPlacesNearPoint } from "@esri/arcgis-rest-places";

import { Result, ServiceInfo } from "./interfaces";

const featureActions = new Collection([
  {
    title: "Load nearby schools",
    id: "load-schools",
    icon: "education",
  },
]);

const schoolSymbol = new WebStyleSymbol({
  name: "school",
  styleName: "Esri2DPointSymbolsStyle",
});

function App({ placesServiceInfo }: { placesServiceInfo: ServiceInfo }) {
  // const abortController = useRef<AbortController>(undefined);
  const featuresElement = useRef<HTMLArcgisFeaturesElement>(null);
  const [mapElement, setMapElement] = useState<
    HTMLArcgisMapElement | null | undefined
  >();
  const [selectedFeature, setSelectedFeature] = useState<
    Graphic | null | undefined
  >();
  const [schoolResults, setSchoolResults] =
    useState<Result<Collection<Graphic>>>();

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
      setSchoolResults(undefined);
      // abortController.current?.abort();
    }
  }

  async function onFeatureActionClicked(
    event: HTMLArcgisFeaturesElement["arcgisTriggerAction"],
  ) {
    const { action } = event.detail;
    if (action.id !== "load-schools" || !selectedFeature?.geometry) return;

    // Abort any existing requests
    // abortController.current?.abort();
    // abortController.current = new AbortController();

    // Convert the selected feature's geometry to lat/long
    const latLngGeometry = webMercatorToGeographic(selectedFeature.geometry);
    const latLngCenter = (latLngGeometry as Polygon).centroid!;

    // Find schools near the selected feature
    let response;
    try {
      setSchoolResults({ loading: true });
      response = await findPlacesNearPoint({
        x: latLngCenter.x,
        y: latLngCenter.y,
        radius: 1600 * 5, // 5 miles in meters
        categoryIds: ["4d4b7105d754a06372d81259"], // Schools
        authentication: placesServiceInfo.authentication,
        endpoint: placesServiceInfo.endpoint,
        // signal: abortController.current.signal,
      });
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        setSchoolResults({ error });
      }
      return;
    }

    // Create graphics for each school and set the result
    const graphics = response.results.map((result) => {
      const { location, ...attributes } = result;
      return new Graphic({
        attributes,
        geometry: new Point(location),
        symbol: schoolSymbol,
      });
    });
    setSchoolResults({ result: new Collection(graphics) });
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
          {schoolResults?.loading && (
            <calcite-progress
              type="indeterminate"
              className="sticky-top"
            ></calcite-progress>
          )}
          <div className="panel-content">
            <arcgis-features
              hideCloseButton
              hideHeading
              ref={featuresElement}
              referenceElement={mapElement}
              actions={featureActions}
              onarcgisPropertyChange={onFeaturesChange}
              onarcgisTriggerAction={onFeatureActionClicked}
            ></arcgis-features>
            {schoolResults?.result && (
              <calcite-list label="Nearby schools">
                <calcite-list-item-group heading="Nearby schools">
                  {schoolResults.result.map((school) => (
                    <calcite-list-item
                      key={school.attributes.placeId}
                      label={school.attributes.name}
                      iconStart="education"
                      scale="s"
                    />
                  ))}
                </calcite-list-item-group>
              </calcite-list>
            )}
          </div>
        </calcite-panel>
      </calcite-shell-panel>
      <arcgis-map
        popupDisabled
        itemId="05e015c5f0314db9a487a9b46cb37eca"
        graphics={schoolResults?.result}
        ref={setMapElement}
        onarcgisViewClick={onMapClick}
      >
        <arcgis-legend
          position="bottom-right"
          legend-style="classic"
        ></arcgis-legend>
      </arcgis-map>
      {schoolResults?.error && (
        <calcite-alert
          open
          slot="alerts"
          color="red"
          scale="s"
          label="Alert"
          kind="danger"
        >
          <div slot="title">Failed to load nearby schools.</div>
        </calcite-alert>
      )}
    </calcite-shell>
  );
}

export default App;
