import "./styles.css";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-chip";
import "@esri/calcite-components/components/calcite-chip-group";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-elevation-profile";

const elevationProfile = document.querySelector("arcgis-elevation-profile");
const distanceElement = document.getElementById("distance");
const elevationElement = document.getElementById("elevation");

if (!elevationProfile || !distanceElement || !elevationElement) {
  throw Error("Error: Unable to find DOM elements");
}

elevationProfile.addEventListener("arcgisPropertyChange", (event) => {
  if (event.detail.name !== "progress" || elevationProfile.progress !== 1) {
    return;
  }
  const profiles = elevationProfile.profiles;
  const statistics = profiles.at(0)?.statistics;
  const elevationGain = round(statistics?.elevationGain);
  const distance = round(statistics?.maxDistance);
  elevationElement.textContent = `${elevationGain} ${elevationProfile.effectiveUnits.elevation}`;
  distanceElement.textContent = `${distance} ${elevationProfile.effectiveUnits.distance}`;
});

const round = (value) =>
  Math.round(((value ?? 0) + Number.EPSILON) * 100) / 100;
