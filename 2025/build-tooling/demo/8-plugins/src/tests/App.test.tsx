import { render, fireEvent } from "@testing-library/react";
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { setupWorker } from "msw/browser";
import { http, HttpResponse, passthrough } from "msw";
import { beforeEach, it as itBase, expect, vi } from "vitest";
import Point from "@arcgis/core/geometry/Point";
import nearbySchoolsStub from "../__mock_data__/nearby-schools.json";
import App from "../App";

/**********************************
 * Mock service setup.
 **********************************/
const placesServiceInfo = {
  authentication: ApiKeyManager.fromKey("stub-api-key"),
  endpoint: "/arcgis/rest/services/places-service/v1/places/near-point",
};

const worker = setupWorker(
  http.get(placesServiceInfo.endpoint, () => {
    return HttpResponse.json(nearbySchoolsStub);
  }),
  http.get("*", () => {
    passthrough();
  }),
);

const it = itBase.extend({
  worker: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use) => {
      // Start the worker before the test.
      await worker.start({ quiet: true });
      // Expose the worker object on the test's context.
      await use(worker);
      // Stop the worker after the test is done.
      worker.stop();
    },
    {
      auto: true,
    },
  ],
});

/**********************************
 * Tests.
 **********************************/

let map: HTMLArcgisMapElement;
let results: ReturnType<typeof render>;

beforeEach(async () => {
  results = render(<App placesServiceInfo={placesServiceInfo} />);
  map = results.container.querySelector("arcgis-map")!;
  await vi.waitFor(() => expect(map.updating).toEqual(false), {
    timeout: 15000,
  });
});

it("renders", () => {
  const { container } = results;
  expect(container.querySelector("calcite-shell")).toBeInTheDocument();
  expect(container.querySelector("calcite-shell-panel")).toBeInTheDocument();
  expect(container.querySelector("arcgis-map")).toBeInTheDocument();
});

it("shows a popup details when a feature is clicked", async () => {
  const { container } = results;
  const mapPoint = new Point({ latitude: 40.9384275, longitude: -73.735152 });
  const event = new CustomEvent("arcgisViewClick", { detail: { mapPoint } });

  fireEvent(map, event);

  const popup = container.querySelector("arcgis-features")!;
  const panel = container.querySelector("calcite-panel")!;
  await vi.waitFor(() => {
    expect(popup.features).toHaveLength(1);
    expect(panel.description).toContain("Census tract");
  });
});

it("loads nearby schools for the selected feature", async () => {
  const { container } = results;
  const mapPoint = new Point({ latitude: 40.9384275, longitude: -73.735152 });
  const event = new CustomEvent("arcgisViewClick", { detail: { mapPoint } });

  fireEvent(map, event);
  const popup = container.querySelector("arcgis-features")!;
  await vi.waitFor(() => expect(popup.features).toHaveLength(1));
  const action = container.querySelector<HTMLCalciteActionElement>(
    "calcite-action[data-action-id=load-schools]",
  );
  action!.click();

  await vi.waitFor(() =>
    expect(container.querySelectorAll("calcite-list-item")).toHaveLength(1),
  );
});

it("shows an error when loading schools fails", async () => {
  const { container } = results;
  worker.use(
    http.get(placesServiceInfo.endpoint, () => {
      return HttpResponse.json({ error: "error" }, { status: 500 });
    }),
  );
  const mapPoint = new Point({ latitude: 40.9384275, longitude: -73.735152 });
  const event = new CustomEvent("arcgisViewClick", { detail: { mapPoint } });

  fireEvent(map, event);
  const popup = container.querySelector("arcgis-features")!;
  await vi.waitFor(() => expect(popup.features).toHaveLength(1));
  const action = container.querySelector<HTMLCalciteActionElement>(
    "calcite-action[data-action-id=load-schools]",
  );
  action!.click();

  await vi.waitFor(() =>
    expect(container.querySelector("calcite-alert")).toBeInTheDocument(),
  );
});
