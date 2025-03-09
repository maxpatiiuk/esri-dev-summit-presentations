import React, { useMemo } from "react";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-chip";
import "@esri/calcite-components/components/calcite-chip-group";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-elevation-profile";
import "@arcgis/map-components/components/arcgis-scene";
import Collection from "@arcgis/core/core/Collection";

const round = (value: number) =>
  Math.round(((value ?? 0) + Number.EPSILON) * 100) / 100;

function MiniMap({ selectedGraphic }: { selectedGraphic: __esri.Graphic }){
  const graphics = useMemo(() => {
    const graphic = selectedGraphic.clone();
    graphic.symbol = {
      type: "simple-line",
      color: [255, 0, 0],
      width: 2,
    };
    const graphics = new Collection([graphic]);

    return graphics;
  }, [selectedGraphic])

  return (
    <div id="minimap" style={{ position: "absolute", top: "2rem", right: "2rem", width: "300px", height: "200px", zIndex: 1000, boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
      <arcgis-scene
        ground="world-elevation"
        id="map"
        center={selectedGraphic.geometry?.extent?.center}
        basemap="topo-vector"
        graphics={graphics}
        spatialReference={selectedGraphic.geometry?.spatialReference}
        onarcgisViewReadyChange={async (event) => {
          await event.target.view?.goTo({ target: selectedGraphic.geometry, zoom: 13, tilt: 10 });
        }}
      ></arcgis-scene>
    </div>
  );
};

function App() {
  const [distance, setDistance] = React.useState<undefined | string>(undefined);
  const [elevation, setElevation] = React.useState<undefined | string>(
    undefined,
  );
  const [selectedGraphic, setSelectedGraphic] = React.useState<
    undefined | null | __esri.Graphic
  >(undefined);

  const handleElevationProfileChange = (
    event: HTMLArcgisElevationProfileElement["arcgisPropertyChange"],
  ) => {
    if (event.detail.name !== "progress" || event.target.progress !== 1) {
      return;
    }
    const profiles = event.target.profiles;
    const statistics = profiles.at(0)?.statistics;
    if (!statistics) {
      return;
    }
    if (statistics.elevationGain) {
      const elevationGain = round(statistics.elevationGain);
      setElevation(`${elevationGain} ${event.target.effectiveUnits.elevation}`);
    }
    if (statistics.maxDistance) {
      const distance = round(statistics.maxDistance);
      setDistance(`${distance} ${event.target.effectiveUnits.distance}`);
    }

    const inputFeature = event.target.input;

    setSelectedGraphic(inputFeature);
  };

  return (
    <calcite-shell className="custom-theme">
      {selectedGraphic && <MiniMap selectedGraphic={selectedGraphic} />}
      <calcite-navigation slot="header">
        <calcite-navigation-logo
          slot="logo"
          icon="map"
          heading="US National Parks"
          description="Trail Explorer"
        ></calcite-navigation-logo>
      </calcite-navigation>

      <div className="content-container">
        <div className="content-start">
          <calcite-panel id="map-container">
            <arcgis-map
              ground="world-elevation"
              item-id="5fe7222cfd4e41cab4321cc1fde66cc2"
              id="map"
            ></arcgis-map>
            <calcite-panel id="elevation-panel" heading="Elevation profile">
              <calcite-chip-group slot="header-actions-end" label="Statistics">
                { distance && (<calcite-chip
                  icon="walking-distance"
                  id="distance"
                  label="Walking Distance"
                >
                  {distance}
                </calcite-chip>
                )}
                { elevation && (
                <calcite-chip icon="altitude" id="elevation" label="Elevation">
                  {elevation}
                </calcite-chip>
                )}
              </calcite-chip-group>
              <arcgis-elevation-profile
                reference-element="map"
                unit="imperial"
                hide-clear-button
                hide-legend
                hide-settings-button
                onarcgisPropertyChange={handleElevationProfileChange}
              ></arcgis-elevation-profile>
            </calcite-panel>
          </calcite-panel>
        </div>
      </div>
    </calcite-shell>
  );
};

export default App;
