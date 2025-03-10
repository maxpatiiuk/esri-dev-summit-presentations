import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';

function createMap(
  basemap: string,
  center: [number, number],
  zoom: number,
  container: string,
) {
  const map = new Map({ basemap });
  return new MapView({ map, center, zoom, container });
}

const mapView = createMap(
  'arcgis/topographic',
  [-118.805, 34.027],
  13,
  'viewDiv',
);

mapView.when(() => {
  console.log('loaded');
});
