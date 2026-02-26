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

import type FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import type { ResourceHandle } from "@arcgis/core/core/Handles";
import type Extent from "@arcgis/core/geometry/Extent.js";
import type Graphic from "@arcgis/core/Graphic.js";
import type ElevationProfileAnalysisView2D from "@arcgis/core/views/2d/analysis/ElevationProfileAnalysisView2D.js";
import type { DockOptions } from "@arcgis/core/popup/types.js";
import type { SelectableLayerWithObjectIds } from "@arcgis/core/views/selection/types";
import type { FeatureTableSupportedLayer } from "@arcgis/core/widgets/FeatureTable/support/types";
import Collection from "@arcgis/core/core/Collection.js";
import HighlightOptions from "@arcgis/core/views/support/HighlightOptions.js";

const mapHighlights = new Collection([
  new HighlightOptions({ name: "default", color: "#ff7500" }),
  new HighlightOptions({ name: "temporary", color: "#a2f2a4" }),
]);

const popupDockOptions: DockOptions = {
  buttonEnabled: false,
  breakpoint: false,
  position: "top-right",
};

const round = (value?: number) =>
  Math.round(((value ?? 0) + Number.EPSILON) * 100) / 100;

function App() {
  const [trailsLayer, setTrailsLayer] = useState<FeatureLayer | undefined>(
    undefined,
  );
  const [selectionHandle, setSelectionHandle] = useState<
    ResourceHandle | undefined
  >(undefined);
  const [filterGeometry, setFilterGeometry] = useState<Extent | undefined>(
    undefined,
  );
  const [selectedGraphic, setSelectedGraphic] = useState<Graphic | undefined>(
    undefined,
  );
  const [distance, setDistance] = useState("");
  const [elevation, setElevation] = useState("");

  const handleMapReadyChange = async (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"],
  ) => {
    const mapElement = event.target;
    const map = mapElement.map;
    if (!map) {
      return;
    }
    const layer = map.layers.find(
      (candidateLayer) => candidateLayer.title === "National Park Trails",
    ) as FeatureLayer | undefined;
    if (!layer) {
      return;
    }

    setTrailsLayer(layer);
    selectionHandle?.remove();
    const nextSelectionHandle = mapElement.view.selectionManager.on(
      "selection-change",
      () => {
        mapElement.view.selectionManager
          .getSelectedFeatures([layer], {
            returnGeometry: true,
          })
          .then((results) => {
            if (!results.length || !results[0].data.features.length) {
              return;
            }

            const graphic = results[0].data.features[0];
            setSelectedGraphic(graphic);
            mapElement.openPopup({
              features: [graphic],
            });
          });
      },
    );
    setSelectionHandle(nextSelectionHandle);
  };

  const handleMapViewChange = (
    event: HTMLArcgisMapElement["arcgisViewChange"],
  ) => {
    if (event.target.view.stationary) {
      const nextExtent = event.target.view.extent;
      setFilterGeometry((oldExtent) => {
        if (!oldExtent) {
          return nextExtent;
        }
        if (oldExtent.equals(nextExtent)) {
          return oldExtent;
        }
        return nextExtent;
      });
    }
  };

  const handleSearchComplete = (
    event: HTMLArcgisSearchElement["arcgisSearchComplete"],
  ) => {
    const mapView = event.target.view;
    const result = event.detail.results[0]?.results?.[0];
    if (result?.feature) {
      const objectId = result.feature.getObjectId();
      if (!mapView || objectId == null) {
        return;
      }
      mapView.selectionManager.replace(
        result.feature.layer as unknown as SelectableLayerWithObjectIds,
        [objectId],
      );
    }
  };

  const handleMapClick = async (
    event: HTMLArcgisMapElement["arcgisViewClick"],
  ) => {
    const mapView = event.target.view;
    if (!trailsLayer) {
      return;
    }

    const { results } = await mapView.hitTest(event.detail, {
      include: [trailsLayer],
    });
    if (results.length > 0) {
      const firstResult = results[0];
      if (!("graphic" in firstResult)) {
        return;
      }
      const objectId = firstResult.graphic.getObjectId();
      if (objectId == null) {
        return;
      }
      mapView.selectionManager.replace(
        trailsLayer as unknown as SelectableLayerWithObjectIds,
        [objectId],
      );
    }
  };

  const handleElevationProfileChange = async (
    event: HTMLArcgisElevationProfileElement["arcgisPropertyChange"],
  ) => {
    if (event.detail.name !== "progress" || event.target.progress !== 1) {
      return;
    }
    const elevProf = event.target;
    const view = elevProf.view;
    if (!view) {
      return;
    }
    await view.when();
    const analysisView = (await view.whenAnalysisView(
      elevProf.analysis,
    )) as ElevationProfileAnalysisView2D;
    if (!analysisView.statistics || !elevProf.effectiveDisplayUnits) {
      return;
    }
    console.log("Results are computed", analysisView.results);
    console.log("Statistics are computed", analysisView.statistics);
    setDistance(
      `${round(analysisView.statistics.maxDistance ?? undefined)} ${elevProf.effectiveDisplayUnits.distance}`,
    );
    setElevation(
      `${round(analysisView.statistics.elevationGain ?? undefined)} ${elevProf.effectiveDisplayUnits.elevation}`,
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
              ground="world-elevation"
              id="map"
              highlights={mapHighlights}
            >
              <arcgis-expand slot="bottom-left">
                <arcgis-legend></arcgis-legend>
              </arcgis-expand>
              <arcgis-popup
                slot="popup"
                dockOptions={popupDockOptions}
                hideActionBar
                hideCollapseButton
                hideFeatureNavigation
                dockEnabled
              ></arcgis-popup>
              <arcgis-zoom slot="top-left"></arcgis-zoom>
            </arcgis-map>
            <calcite-panel id="elevation-panel" heading="Elevation profile">
              <calcite-chip-group slot="header-actions-end" label="Statistics">
                {distance && (
                  <calcite-chip
                    icon="walking-distance"
                    id="distance"
                    label="Distance"
                  >
                    {distance}
                  </calcite-chip>
                )}
                {elevation && (
                  <calcite-chip
                    icon="altitude"
                    id="elevation"
                    label="Elevation"
                  >
                    {elevation}
                  </calcite-chip>
                )}
              </calcite-chip-group>
              <arcgis-elevation-profile
                referenceElement="map"
                feature={selectedGraphic}
                elevationUnit="imperial"
                distanceUnit="imperial"
                hideClearButton
                hideLegend
                hideSettingsButton
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
                layer={trailsLayer as FeatureTableSupportedLayer}
                filterGeometry={filterGeometry}
                attachmentsEnabled
                syncViewSelection
                multipleSelectionDisabled
              ></arcgis-feature-table>
            </calcite-shell>
          </calcite-panel>
        </div>
      </div>
    </calcite-shell>
  );
}

export default App;
