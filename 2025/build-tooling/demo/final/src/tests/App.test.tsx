import { render } from "@testing-library/react";
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { it, expect } from "vitest";
import App from "../App";

const serviceInfo = {
  authentication: ApiKeyManager.fromKey("stub-api-key"),
  endpoint: "/arcgis/rest/services/places-service/v1/places/near-point",
};

it("renders", () => {
  render(<App serviceInfo={serviceInfo} />);
  const map = document.querySelector("arcgis-map");
  expect(map).toBeTruthy();
});
