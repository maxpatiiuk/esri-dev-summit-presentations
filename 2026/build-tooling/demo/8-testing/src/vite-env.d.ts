/// <reference types="vite/client" />
/// <reference types="@vitest/browser/matchers" />
/// <reference types="@esri/calcite-components/types/react" />
/// <reference types="@arcgis/map-components/types/react" />

declare module "*.har?raw" {
  const traffic: string;
  export default traffic;
}
