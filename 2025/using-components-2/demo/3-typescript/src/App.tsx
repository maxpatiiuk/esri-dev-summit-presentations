import React from "react";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-chip";
import "@esri/calcite-components/components/calcite-chip-group";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-elevation-profile";

const round = (value: number) =>
  Math.round(((value ?? 0) + Number.EPSILON) * 100) / 100;

function App() {
  const [distance, setDistance] = React.useState<undefined | string>(undefined);
  const [elevation, setElevation] = React.useState<undefined | string>(
    undefined,
  );

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
  };

  return (
    <calcite-shell className="custom-theme">
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
              itemId="5fe7222cfd4e41cab4321cc1fde66cc2"
              id="map"
            ></arcgis-map>
            <calcite-panel id="elevation-panel" heading="Elevation profile">
              <calcite-chip-group slot="header-actions-end" label="Statistics">
                {distance && (
                  <calcite-chip
                    icon="walking-distance"
                    id="distance"
                    label="Walking Distance"
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
                unit="imperial"
                hideClearButton
                hideLegend
                hideSettingsButton
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
