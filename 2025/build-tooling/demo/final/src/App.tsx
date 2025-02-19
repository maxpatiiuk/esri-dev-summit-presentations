import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-panel";
import "@arcgis/map-components/components/arcgis-map";

export function App() {
  return (
    <calcite-shell>
      <calcite-panel slot="header" heading="Stats"></calcite-panel>
      <arcgis-map item-id="05e015c5f0314db9a487a9b46cb37eca"> </arcgis-map>
    </calcite-shell>
  );
}
