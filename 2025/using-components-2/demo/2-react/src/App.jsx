import { useState } from "react";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-chip";
import "@esri/calcite-components/components/calcite-chip-group";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-elevation-profile";

function round(value) {
  return Math.round(((value ?? 0) + Number.EPSILON) * 100) / 100;
}

function App() {
  const [distance, setDistance] = useState(undefined);
  const [elevation, setElevation] = useState(undefined);

  const handleElevationProfileChange = (event) => {
    if (event.detail.name !== "progress" || event.target.progress !== 1) {
      return;
    }
    const profiles = event.target.profiles;
    const statistics = profiles.at(0)?.statistics;
    const elevationGain = round(statistics?.elevationGain);
    const distance = round(statistics?.maxDistance);
    setElevation(`${elevationGain} ${event.target.effectiveUnits.elevation}`);
    setDistance(`${distance} ${event.target.effectiveUnits.distance}`);
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
              <calcite-chip-group slot="header-actions-end">
                {distance && (
                  <calcite-chip icon="walking-distance" id="distance">
                    {distance}
                  </calcite-chip>
                )}
                {elevation && (
                <calcite-chip icon="altitude" id="elevation">
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
