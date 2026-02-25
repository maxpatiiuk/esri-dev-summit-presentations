// Importing the styles from JavaScript rather than the HTML to keep them closer
// to the components they are styling.
import "./style.css";

// Individually import the components we need (more efficient than the CDN loader)
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-chip";
import "@esri/calcite-components/components/calcite-chip-group";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-elevation-profile";
import "@arcgis/map-components/components/arcgis-feature-table";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/map-components/components/arcgis-popup";
import "@arcgis/map-components/components/arcgis-legend";

import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";

async function load() {
  const mapElem = document.querySelector("arcgis-map");
  const tableElement = document.querySelector("arcgis-feature-table");
  const searchElement = document.querySelector("arcgis-search");
  const elevProf = document.querySelector("arcgis-elevation-profile");
  const distanceElem = document.getElementById("distance");
  const elevationElem = document.getElementById("elevation");
  const popupElement = document.querySelector("arcgis-popup");

  popupElement.dockOptions = {
    buttonEnabled: false,
    breakpoint: false,
    position: "top-right",
  };

  await mapElem.viewOnReady();
  const view = mapElem.view;
  await elevProf.componentOnReady();

  // set the highlight colors
  mapElem.highlights = [
    { name: "default", color: "#FF7500" },
    { name: "temporary", color: "#a2f2a4" },
  ];

  //////////////////////////////////////////////////////
  //  Table setup
  //////////////////////////////////////////////////////

  const trailsLayer = mapElem.map?.layers.find((layer) => {
    console.log(layer.title);
    return layer.title === "National Park Trails";
  });

  tableElement.layer = trailsLayer;
  tableElement.multipleSelectionDisabled = true;

  mapElem.addEventListener("arcgisViewChange", () => {
    tableElement.filterGeometry = mapElem.view.extent;
  });

  //////////////////////////////////////////////////////
  //  Handle selection
  //////////////////////////////////////////////////////

  searchElement.addEventListener("arcgisSearchComplete", (event) => {
    const result = event.detail.results[0].results[0];
    if (result?.feature) {
      const objectId = result.feature.getObjectId();
      view.selectionManager.replace(trailsLayer, [objectId]);
    }
  });

  mapElem.addEventListener("arcgisViewClick", async (event) => {
    const { results } = await view.hitTest(event.detail, {
      include: [trailsLayer],
    });
    if (results?.length > 0) {
      const objectId = results[0].graphic.getObjectId();
      view.selectionManager.replace(trailsLayer, [objectId]);
    }
  });

  view.selectionManager.on("selection-change", async (event) => {
    const results = await view.selectionManager.getSelectedFeatures(
      [trailsLayer],
      { returnGeometry: true },
    );

    if (results.length && results[0].data.features.length) {
      const graphic = results[0].data.features[0];
      elevProf.feature = graphic;
      mapElem.openPopup({
        features: [graphic],
      });
    }
  });

  //////////////////////////////////////////////////////
  //  Wire up the elevation profile
  //////////////////////////////////////////////////////

  await elevProf.componentOnReady();

  const analysisView = await view.whenAnalysisView(elevProf.analysis);
  reactiveUtils.watch(
    () => analysisView.progress,
    (progress) => {
      if (progress === 1) {
        console.log("Results are computed", analysisView.results);
        console.log("Statistics are computed", analysisView.statistics);

        const elevGain =
          Math.round(
            (analysisView.statistics.elevationGain + Number.EPSILON) * 100,
          ) / 100;
        const distance =
          Math.round(
            (analysisView.statistics.maxDistance + Number.EPSILON) * 100,
          ) / 100;
        elevationElem.innerText =
          elevGain + " " + elevProf.effectiveDisplayUnits.elevation;
        distanceElem.innerText =
          distance + " " + elevProf.effectiveDisplayUnits.distance;
      }
    },
  );
}

load();
