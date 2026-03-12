import { cleanup, render } from "@testing-library/react";
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { setupWorker } from "msw/browser";
import { http, HttpResponse, passthrough } from "msw";
import { beforeEach, afterEach, it as itBase, expect, assert } from "vitest";
import { page } from "vitest/browser";
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
  http.get(placesServiceInfo.endpoint, () =>
    HttpResponse.json(nearbySchoolsStub),
  ),
  http.get("*", () => {
    passthrough();
  }),
);

const it = itBase.extend({
  worker: [
    async ({}, use) => {
      // Start the worker before the test.
      await worker.start({ onUnhandledRequest: "bypass", quiet: true });
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
  await expect.poll(() => map.updating, { timeout: 150000 }).toBeFalsy();
});

afterEach(() => {
  // Prevent state leakage across tests from both DOM and MSW handlers.
  cleanup();
  worker.resetHandlers();
});

it("renders", () => {
  const { container } = results;
  expect(container.querySelector("calcite-shell")).toBeInTheDocument();
  expect(container.querySelector("calcite-shell-panel")).toBeInTheDocument();
  expect(container.querySelector("arcgis-map")).toBeInTheDocument();
});

it("shows a popup details when a feature is clicked", async () => {
  const { container } = results;

  await clickMapAt({ x: 500, y: 100 });

  await expect
    .poll(() => container.querySelector("arcgis-features")?.features)
    .toHaveLength(2);

  await expect
    .poll(() => container.querySelector("calcite-panel")?.description)
    .toContain("Census tract");
});

it("loads nearby schools for the selected feature", async () => {
  const { container } = results;

  await clickMapAt({ x: 500, y: 100 });

  await expect
    .poll(() => container.querySelector("arcgis-features")?.features)
    .toHaveLength(2);

  await page.getByTitle("Load nearby schools").click();

  await expect
    .poll(() => container.querySelectorAll("calcite-list-item"))
    .toHaveLength(1);
});

it("shows an error when loading schools fails", async () => {
  const { container } = results;

  worker.use(
    http.get(placesServiceInfo.endpoint, () =>
      HttpResponse.json({ error: "error" }, { status: 500 }),
    ),
  );

  await clickMapAt({ x: 500, y: 100 });

  await expect
    .poll(() => container.querySelector("arcgis-features")?.features)
    .toHaveLength(2);

  await page.getByTitle("Load nearby schools").click();

  await expect
    .poll(() => container.querySelector("calcite-alert"))
    .not.toBeNull();
});

async function clickMapAt({ x, y }: { x: number; y: number }): Promise<void> {
  const target = document.elementFromPoint(x, y);
  assert(target);
  await page.elementLocator(target).click({
    position: {
      x: x - target.getBoundingClientRect().left,
      y: y - target.getBoundingClientRect().top,
    },
  });
}
