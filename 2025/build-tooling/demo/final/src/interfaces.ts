import type { ApiKeyManager } from "@esri/arcgis-rest-request";

export interface Result<T> {
  result?: T;
  error?: Error;
  loading?: true;
}

export interface ServiceInfo {
  authentication: ApiKeyManager;
  endpoint?: string;
}
