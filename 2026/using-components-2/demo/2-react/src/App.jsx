import { useState } from "react";

import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-chip";
import "@esri/calcite-components/components/calcite-chip-group";

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-popup";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-feature-table";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/map-components/components/arcgis-elevation-profile";

import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";

function App() {
  const [mapView, setMapView] = useState(null);
  const [trailsLayer, setTrailsLayer] = useState(null);
  const [selectionHandle, setSelectionHandle] = useState(null);
  const [filterGeometry, setFilterGeometry] = useState(null);
  const [selectedGraphic, setSelectedGraphic] = useState(null);
  const [distance, setDistance] = useState("");
  const [elevation, setElevation] = useState("");

  const round = (value) =>
    Math.round(((value ?? 0) + Number.EPSILON) * 100) / 100;

  const handleMapReadyChange = async (event) => {
    const mapElement = event.target;
    const map = mapElement.map;
    setMapView(mapElement.view);

    const layer = map.layers.find(
      (candidateLayer) => candidateLayer.title === "National Park Trails",
    );
    if (!layer) {
      return;
    }

    setTrailsLayer(layer);

    selectionHandle?.remove?.();
    const nextSelectionHandle = mapElement.view.selectionManager.on(
      "selection-change",
      async () => {
        const results =
          await mapElement.view.selectionManager.getSelectedFeatures([layer], {
            returnGeometry: true,
          });

        if (!results.length || !results[0].data.features.length) {
          return;
        }

        const graphic = results[0].data.features[0];
        setSelectedGraphic(graphic);
        mapElement.openPopup({
          features: [graphic],
        });
      },
    );
    setSelectionHandle(nextSelectionHandle);
  };

  const handleMapViewChange = (event) => {
    if (event.target.view.stationary) {
      const nextExtent = event.target.view.extent;
      setFilterGeometry((oldExtent) => {
        if (!oldExtent) {
          return nextExtent;
        }
        if (oldExtent.equals(nextExtent)) {
          console.log("Extent is the same, not updating filter geometry");
          return oldExtent;
        }
        console.log("updating-extent");
        return nextExtent;
      });
    }
  };

  const handleSearchComplete = (event) => {
    if (!mapView || !trailsLayer) {
      return;
    }

    const result = event.detail.results?.[0]?.results?.[0];
    if (result?.feature) {
      const objectId = result.feature.getObjectId();
      mapView.selectionManager.replace(trailsLayer, [objectId]);
    }
  };

  const handleMapClick = async (event) => {
    if (!mapView || !trailsLayer) {
      return;
    }

    const { results } = await mapView.hitTest(event.detail, {
      include: [trailsLayer],
    });
    if (results?.length > 0) {
      const objectId = results[0].graphic.getObjectId();
      mapView.selectionManager.replace(trailsLayer, [objectId]);
    }
  };

  const handleElevationProfileChange = async (event) => {
    if (event.detail.name !== "progress" || event.target.progress !== 1) {
      return;
    }
    const elevProf = event.target;
    const view = elevProf.view;
    await view.when();
    const analysisView = await view.whenAnalysisView(elevProf.analysis);
    console.log("Results are computed", analysisView.results);
    console.log("Statistics are computed", analysisView.statistics);

    const elevGain =
      Math.round(
        (analysisView.statistics.elevationGain + Number.EPSILON) * 100,
      ) / 100;
    const distance =
      Math.round((analysisView.statistics.maxDistance + Number.EPSILON) * 100) /
      100;
    setDistance(
      `${round(distance)} ${elevProf.effectiveDisplayUnits.distance}`,
    );
    setElevation(
      `${round(elevGain)} ${elevProf.effectiveDisplayUnits.elevation}`,
    );
  };

  return (
    <calcite-shell className="burnt-orange-theme">
      <calcite-navigation slot="header" id="nav">
        <calcite-navigation-logo
          href="#"
          thumbnail="./hiker-48.svg"
          alt="Application logo"
          slot="logo"
          heading="Zion Trail Explorer"
        ></calcite-navigation-logo>
        <arcgis-search
          slot="content-end"
          referenceElement="map"
          onarcgisSearchComplete={handleSearchComplete}
        ></arcgis-search>
      </calcite-navigation>

      <div className="content-container">
        <div className="content-start" id="map-div">
          <calcite-panel id="map-container">
            <arcgis-map
              onarcgisViewReadyChange={handleMapReadyChange}
              onarcgisViewChange={handleMapViewChange}
              onarcgisViewClick={handleMapClick}
              item-id="a2a490fe264c4363b4fa2981d03f43f5"
              id="map"
              padding={{ bottom: 500 }}
              ground="world-elevation"
              highlights={[
                { name: "default", color: "#ff7500" },
                { name: "temporary", color: "#a2f2a4" },
              ]}
            >
              <arcgis-expand slot="bottom-left">
                <arcgis-legend></arcgis-legend>
              </arcgis-expand>
              <arcgis-popup
                slot="popup"
                dockOptions={{
                  buttonEnabled: false,
                  breakpoint: false,
                  position: "top-right",
                }}
                hide-action-bar
                hide-collapse-button
                hide-feature-navigation
                dock-enabled
              ></arcgis-popup>
              <arcgis-zoom slot="top-left"></arcgis-zoom>
            </arcgis-map>

            <calcite-panel id="elevation-panel" heading="Elevation profile">
              <calcite-chip-group slot="header-actions-end">
                {!!distance && (
                  <calcite-chip icon="walking-distance" id="distance">
                    {distance}
                  </calcite-chip>
                )}
                {!!elevation && (
                  <calcite-chip icon="altitude" id="elevation">
                    {elevation}
                  </calcite-chip>
                )}
              </calcite-chip-group>
              <arcgis-elevation-profile
                referenceElement="map"
                feature={selectedGraphic}
                elevationUnit="imperial"
                distanceUnit="imperial"
                hide-clear-button
                hide-legend
                hide-settings-button
				onarcgisPropertyChange={handleElevationProfileChange}
              ></arcgis-elevation-profile>
            </calcite-panel>
          </calcite-panel>
        </div>

        <div className="content-end" id="table-div">
          <calcite-panel>
            <calcite-shell className="panel-shell">
              <arcgis-feature-table
                referenceElement="map"
                layer={trailsLayer}
                filterGeometry={filterGeometry}
                attachments-enabled
                multipleSelectionDisabled
                sync-view-selection
              ></arcgis-feature-table>
            </calcite-shell>
          </calcite-panel>
        </div>
      </div>
    </calcite-shell>
  );
}

export default App;
