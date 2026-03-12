import type Har from "har-format";
import { HttpHandler, cleanUrl, http, HttpResponse } from "msw";
import mapViewTrafficText from "../__mock_data__/map-view-test.har?raw";
import nearbySchoolsStub from "../__mock_data__/nearby-schools.json";

export const placesEndpointPath =
  "/arcgis/rest/services/places-service/v1/places/near-point";
const localHosts = new Set(["127.0.0.1", "::1", "localhost"]);
const esriDomains = ["arcgis.com", "arcgisonline.com", "esri.com"];
const esriHosts = new Set(["arcg.is"]);
const hopByHopHeaders = new Set([
  "content-encoding",
  "content-length",
  "transfer-encoding",
]);
const mapViewTraffic = stripHarTiming(JSON.parse(mapViewTrafficText));

export const harHandlers = [
  ...fromTrafficFast(mapViewTraffic, mapTrafficEntry),
  http.get(placesEndpointPath, () => HttpResponse.json(nearbySchoolsStub)),
];

function mapTrafficEntry(entry: Har.Entry) {
  const requestUrl = entry.request.url;
  if (!requestUrl) {
    return;
  }

  let url: URL;
  try {
    url = new URL(requestUrl);
  } catch {
    return;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return;
  }

  const hostname = normalizeHostname(url.hostname);

  if (localHosts.has(hostname)) {
    return;
  }

  if (!isEsriHost(hostname)) {
    return;
  }

  if (!isEsriServiceRequest(url)) {
    return;
  }

  return entry;
}

function fromTrafficFast(
  archive: Har.Har,
  mapEntry?: (entry: Har.Entry) => Har.Entry | undefined,
): HttpHandler[] {
  const requestIds = new Set<string>();
  const handlers: HttpHandler[] = [];

  for (let index = archive.log.entries.length - 1; index >= 0; index -= 1) {
    const rawEntry = archive.log.entries[index];
    const entry = mapEntry ? mapEntry(rawEntry) : rawEntry;
    if (!entry) {
      continue;
    }

    const requestId = `${entry.request.method}+${entry.request.url}`;
    const isUniqueHandler = !requestIds.has(requestId);
    const response = toResponse(entry.response);

    handlers.unshift(
      new HttpHandler(
        entry.request.method.toLowerCase(),
        cleanUrl(entry.request.url),
        ({ request }) => {
          if (
            !matchesQueryParameters(
              new URL(request.url).searchParams,
              entry.request.queryString,
            )
          ) {
            return;
          }

          return isUniqueHandler ? response.clone() : response;
        },
        {
          once: !isUniqueHandler,
        },
      ),
    );

    requestIds.add(requestId);
  }

  return handlers;
}

function isEsriHost(hostname: string): boolean {
  return (
    esriHosts.has(hostname) ||
    esriDomains.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`),
    )
  );
}

function normalizeHostname(hostname: string): string {
  return hostname.toLowerCase().replace(/\.$/u, "");
}

function isEsriServiceRequest({ pathname }: URL): boolean {
  return (
    pathname.includes("/sharing/rest/") ||
    pathname.includes("/arcgis/rest/") ||
    pathname.includes("/rest/services/")
  );
}

function toResponse(responseEntry: Har.Response): Response {
  if (responseEntry.status === 0) {
    return Response.error();
  }

  return new Response(toResponseBody(responseEntry.content), {
    status: responseEntry.status,
    statusText: responseEntry.statusText,
    headers: toHeaders(responseEntry.headers),
  });
}

function toResponseBody(
  content: Har.Content,
): ArrayBuffer | string | undefined {
  const { encoding, text } = content;

  if (!text) {
    return;
  }

  if (encoding === "base64") {
    return decodeBase64(text);
  }

  return text;
}

function toHeaders(harHeaders: Har.Header[]): Headers {
  const headers = new Headers();

  for (const header of harHeaders) {
    const name = header.name.toLowerCase();
    if (hopByHopHeaders.has(name)) {
      continue;
    }

    headers.append(header.name, header.value);
  }

  return headers;
}

function matchesQueryParameters(
  searchParams: URLSearchParams,
  queryString: Har.QueryString[],
): boolean {
  for (const { name, value } of queryString) {
    if (!searchParams.has(name)) {
      return false;
    }

    if (!searchParams.getAll(name).includes(value)) {
      return false;
    }

    searchParams.delete(name, value);
  }

  return searchParams.size === 0;
}

function decodeBase64(value: string): ArrayBuffer {
  const binary = atob(value);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0)).buffer;
}

function stripHarTiming(archive: Har.Har): Har.Har {
  return {
    ...archive,
    log: {
      ...archive.log,
      entries: archive.log.entries.map((entry) => ({
        ...entry,
        time: 0,
        timings: stripEntryTiming(entry.timings),
      })),
    },
  };
}

function stripEntryTiming(timings: Har.Timings): Har.Timings {
  return {
    ...timings,
    blocked: normalizeOptionalTimingValue(timings.blocked),
    dns: normalizeOptionalTimingValue(timings.dns),
    connect: normalizeOptionalTimingValue(timings.connect),
    send: normalizeOptionalTimingValue(timings.send),
    wait: normalizeTimingValue(timings.wait),
    receive: normalizeTimingValue(timings.receive),
    ssl: normalizeOptionalTimingValue(timings.ssl),
  };
}

function normalizeOptionalTimingValue(value?: number): number | undefined {
  if (value == null) {
    return value;
  }

  return normalizeTimingValue(value);
}

function normalizeTimingValue(value: number): number {
  return value < 0 ? value : 0;
}
