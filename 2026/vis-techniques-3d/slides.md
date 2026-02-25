---
titleTemplate: '%s'
author: Hugo Campos, Thorben Westerhuys
mdc: true
colorSchema: light
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: view-transition
fonts:
  mono: Consolas
---

## ArcGIS Maps SDK for JavaScript and 3D GIS Visualization:<br />A Developer's Guide Beyond 2D Cartography

Hugo Campos, Thorben Westerhuys

<!--
Speaker notes
-->

---
is: feedback
---

---

# Agenda

- 3D visualization showcases
- Core Concepts: Getting started with 3D
- Data: Types and Sources of Data
- Layer Symbology
- Scene Layers
- Other Layers
- Questions

<!--
Alright, let's take a look at what we'll be covering today

We'll start with some 3D visualization showcases to give you a taste of what's possible with our Maps SDK for Javascript. 

Then, we'll get into the core concepts of working with 3D. This includes understanding the types and sources of data that fuel 3D visualizations.

Next, we'll explore layer symbology, which is how we visually represent data in 3D. We’ll cover both scene layers, which are specifically designed for 3D, and other types of layers you might encounter.

Finally, we'll open it up for questions.
-->

---
layout: intro
---

# 3D visualization<br />showcases

Thorben Westerhuys

<!--
Alright, let's kick off this session with some really cool 3D visualization showcases. Again, the goal here is to show you what's possible with our SDK.

You'll see a variety of examples as inspiration and I am not going to talk the code for this section but you'll notice that each slide contains links to the corresponding code repository. So, if you're interested in diving deeper into the technical details, feel free to take a look to the github repositories or just discuss about it with us at the JS booth later today
-->

---
layout: iframe
url: 'https://ralucanicola.github.io/JSAPI_demos/earthquakes-depth/'
codeBase: 'https://github.com/RalucaNicola/JSAPI_demos/tree/main/earthquakes-depth'
---

# Earthquakes depth

<!--
This 3D visualization reveals the depth and magnitude of major earthquakes across the globe in 2019. Each sphere represents an earthquake.  Both size and color help to identify stronger earthquakes.

But the real story here is depth. Each earthquake's vertical position shows how far below the surface it occurred.

Then we have the orange lines that are the boundaries of tectonic plates because earthquakes often happen along these boundaries, and this visualization helps us see that relationship.
-->

---
layout: iframe
url: 'https://ralucanicola.github.io/JSAPI_demos/zurich-festival/'
codeBase: 'https://github.com/RalucaNicola/JSAPI_demos/tree/main/zurich-festival'
---

# Zurich festival pedestrian counters

<!--
This other 3D visualization uses pedestrian data to show crowd dynamics during Zurich festival.

We're using proportional symbology, where the height of each cylinder is directly related to the number of people passing by. The color also changes from green to orange, using a color ramp, to visually represent the increasing density. 

The time slider on the right allows us to explore how these counts change throughout the day.  

Regarding the tech: The visualization is built on a detailed 3D city model of Zurich which is an IntegratedMeshLayer, providing a realistic context.  We've added a parade route layer using a bright orange line for visual clarity, and a 3D object symbol for the snowman, highlighting key elements of the festival within the 3D scene.

Cylinders with Mesh
-->

---
layout: iframe
url: 'https://ralucanicola.github.io/JSAPI_demos/zurich-hb-update/index.html'
codeBase: 'https://github.com/RalucaNicola/JSAPI_demos/tree/main/zurich-hb-update'
---

# Zurich HB exploration

<!--
This is a 3D web scene of Zurich Main Station, built with the ArcGIS API for JavaScript. We're showcasing detailed indoor visualization

We use Building Scene Layers for accurate 3D building representation, enabling sublayer control to toggle elements like the ground floor or Level -1. 

Key features include dynamic floor level filtering using feature layer definition expressions
-->

---
layout: iframe
url: 'https://ralucanicola.github.io/JSAPI_demos/carbon-dioxide/'
codeBase: 'https://github.com/RalucaNicola/JSAPI_demos/tree/main/carbon-dioxide'
---

# World carbon dioxide monitoring

<!--
Let's dive into how we're visualizing this complex data. What you're seeing is a 3D representation of global carbon dioxide concentrations (tilting camera) not just a flat map.

We're using voxels. Just think of it like building a 3D image out of tiny cubes. Each voxel represents a measurement of CO2 concentration within a specific location and altitude.

Now, how do we make sense of these voxels? We're coloring them based on the CO2 value where pink signifies higher levels, specifically those exceeding 400 parts per million.

To further enhance the 3D aspect, we're using vertical exaggeration. Notice how the terrain seems heightened? This is intentional – we've exaggerated the elevation by 300 times. This allows us to more clearly see the distribution of CO2 at different altitudes.

And it's interactive! You can see the histogram here, which shows the distribution of CO2 values. By using the slider, we can filter the voxels displayed, allowing us to focus on specific concentration ranges and observe them within the 3D space.

This combination of voxels, color coding, vertical exaggeration, and interactivity provides a powerful way to understand the complex 3D distribution of carbon dioxide in our atmosphere. We're not just looking at numbers; we're seeing the data in a way that reveals patterns and insights that a traditional map couldn't.
-->

---
layout: iframe
url: 'https://geoxc-apps4.bd.esri.com/experiments/animations/'
codeBase: 'https://www.esri.com/arcgis-blog/products/js-api-arcgis/3d-gis/mesh-animations-javascript/'
---

# Animations

---
layout: iframe
url: 'https://ralucanicola.github.io/JSAPI_demos/rock-the-house/'
codeBase: 'https://ralucanicola.github.io/JSAPI_demos/rock-the-house/'
---

# Rock the house

---
layout: intro
---

# Core Concepts

Getting started with 3D

---
layout: two-cols
---

# Core Concepts

Global View vs Local View

<img src="/scene-view.avif">

::right::

# &nbsp;

&nbsp;

<img src="/local-scene.avif">

<!--
The SceneView supports two different viewing modes, global and the, specified by the viewingMode property. Global scenes render the earth as a globe, while local scenes render the surface on a flat plane.
-->

---
layout: media-right
image: /scene-view.avif
---

# Core Concepts

Global View

```ts
const view = new SceneView({
  viewingMode: 'global',
});
```

---
layout: media-right
image: /local-scene.avif
---

# Core Concepts

Local View

```ts
const view = new SceneView({
  viewingMode: 'local',
  spatialReference: { wkid: 54099 },
});
```

<!--
Local mode allows for navigation and feature display in a localized or clipped area.

The viewing mode (if not explicitly set by the user) is determined based on the spatial reference of the view. If the spatial reference is either Web Mercator, WGS84, CGCS2000, Mars_2000_(Sphere), GCS_Mars_2000 or GCS_Moon_2000 then the viewingMode will default to global. For any other spatial reference the viewingMode will default to local.
-->

---
layout: media-right
image: /local-scene-clipped.avif
---

# Core Concepts

Local View - Clipping

```ts {0|1-8|1-8,11}
const kansasExtent = new Extent({
  xmax: -10834217,
  xmin: -10932882,
  ymax: 4493918,
  ymin: 4432667,
  spatialReference: { wkid: 54099 },
});

const view = new SceneView({
  viewingMode: 'local',
  clippingArea: kansasExtent,
  spatialReference: { wkid: 54099 },
});
```

<!--
I'd like to mention the clippingArea property because it only applies to local scenes. 

It represents an optional clipping area used to define the visible extent of a local scene. The clipping area cannot have z-values.

If defined, only features that intersect the area will be displayed. The clipping area applies to all layers types, including the ground and the basemap.
-->

---
layout: media-right
image: /basemap-topo-vector.avif
---

# Core Concepts

Basemap

```ts
const map = new WebScene({
  basemap: 'topo-vector',
});

const view = new SceneView({ map });
```

<!--
basemap property of the WebScene is Inherited from Map

The basemap is a set of layers that give geographic context to the MapView or SceneView and the other operational layers in the map.
-->

---
layout: media-right
image: /basemap-topo-3d.avif
---

# Core Concepts

Basemap

```ts {2}
const map = new WebScene({
  basemap: 'topo-3d',
});

const view = new SceneView({ map });
```

<img v-click="1" src="/basemaps-list.avif">

<!--
Use of these basemaps requires either an ArcGIS Location Platform account, ArcGIS Online organizational subscription, or an ArcGIS Enterprise license.

To authenticate basemap requests, you may need an access token. You can use an API key or OAuth 2.0. When using an API key, the key must have privileges to access the appropriate location service.

List of basemaps
-->

---
layout: media-right
image: /elevation-topo.avif
---

# Core Concepts

Elevation

```ts {3}
const map = new WebScene({
  basemap: 'topo-vector',
  ground: 'world-elevation',
});
```

---
layout: media-right
image: /elevation-satellite.avif
---

# Core Concepts

Elevation

```ts
const map = new WebScene({
  basemap: 'satellite',
  ground: 'world-elevation',
});
```

---
layout: media-right
image: /elevation-bathymetry.avif
---

# Core Concepts

Elevation

```ts {3}
const map = new Map({
  basemap: 'satellite',
  ground: 'world-topobathymetry',
});
```

---
layout: intro
---

# Data

Types and Sources of Data

---
layout: media-right
image: '/scene-layer.avif'
---

# Types of Data

- Features: points, lines, polygons
- Tiles: raster, vector
- Elevation
- Maps, Imagery
- Scene Layer:
  - Integrated Mesh
  - 3D Object
  - Building
  - Point Cloud
- 3D Tiles
- Voxel Layer
- Media Layer

---
layout: media-right
image: '/data-living-atlas.avif'
fit: contain
---

# Sources of Data

ArcGIS Online

- Living Atlas
  - Worldwide data
  - Curated content
  - From Esri, Esri partners, and the community
- Own/Organization data

ArcGIS Enterprise

- Like ArcGIS Online
- On-premises

---
layout: media-right
image: '/arcgis-developers-create-hosted-layer.avif'
fit: contain
---

# Data Sources

Your Own Data

- Upload
- Publish
- Import
- Create hosted layer (e.g. Feature Service)

---
layout: media-right
image: '/data-open.avif'
fit: contain
---

# Data Sources

Other Sources

- GeoJSON
- WFS
- CSV
- OGC features

---
layout: media-right
image: /world-countries.avif
---

# Loading Data

::code-group

```ts [URL] {0|0-3|}
const layer = new FeatureLayer({
  url: 'https://services.arcgis.com/.../FeatureServer',
});

const map = new Map({
  layers: [layer],
});
```

```ts [Portal item]
const layer = new FeatureLayer({
  portalItem: {
    id: 'ac80670eb213440ea5899bbf92a04998',
  },
});

const map = new Map({
  layers: [layer],
});
```

```ts [CSV]
const csvLayer = new CSVLayer({
  url: 'https://.../earthquakes.csv',
});

const map = new Map({
  layers: [csvLayer],
});
```

---
layout: intro
---

# Layer Symbology

---
layout: media-right
image: /symbology-applying.avif
fit: contain
---

# Layer Symbology

Applying Symbology

```ts {0|1|3|4|5-10|*}{maxHeight:'160px'}
const layer = new FeatureLayer({
  url: 'https://services/../FeatureServer',
  renderer: new SimpleRenderer({
    symbol: new PointSymbol3D({
      symbolLayers: [
        new IconSymbol3DLayer({
          size: '10px',
          href: 'icon.avif',
        }),
      ],
    }),
  }),
});
```

<img v-click="2" src="/renderers.avif">

---
layout: media-right
image: /symbology-3d.avif
---

# Layer Symbology

Flat vs Volumetric

- Screen-space vs real world dimensions
- Cast shadows or not
- Draped on surface or not
- Extruded or not

---
layout: image
mdc: true
---

# Layer Symbology

3D Symbology for 2D Features

![](/symbology-overview-vectorized.avif){width=70%}

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/symbols-points-3d/live/'
extendedIframe: true
---

# PointSymbol3D

Flat and Volumetric

```ts {0|1-12|13-25}{maxHeight:'320px'}
const renderer = new SimpleRenderer({
  symbol: new PointSymbol3D({
    symbolLayers: [
      new IconSymbol3DLayer({
        size: 12,
        resource: { primitive: 'circle' },
        material: { color: 'purple' },
        outline: { color: 'white', size: 1 },
      }),
    ],
  }),
});
const renderer = new SimpleRenderer({
  symbol: new PointSymbol3D({
    symbolLayers: [
      new ObjectSymbol3DLayer({
        width: 70000,
        height: 100000,
        resource: { primitive: 'cone' },
        material: { color: '#FFD700' },
        heading: 20,
      }),
    ],
  }),
});
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/visualization-icon-rotation-3d/live'
---

# PointSymbol3D

Icon Rotation

```ts {0|3-10|16-21}{maxHeight:'320px'}
const arrowSymbol = new PointSymbol3D({
  symbolLayers: [
    new IconSymbol3DLayer({
      size: '30', // in pt
      resource: { href: arrowSourcePNG },
      material: { color: 'white' },
      angle: 90, // point upwards
    }),
  ],
});

const renderer = new SimpleRenderer({
  defaultSymbol: arrowSymbol,
  visualVariables: [
    new RotationVariable({
      field: 'Property_Value_Diff_Percent',
      rotationType: 'arithmetic',
    }),
  ],
  /* ... */
});
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/visualization-path-3d/live/'
---

# LineSymbol3D

PathSymbol3DLayer

```ts
const symbol = new LineSymbol3D({
  symbolLayers: [
    new PathSymbol3DLayer({
      profile: 'quad',
      material: {
        color: 'blue',
      },
      width: 5, // in meters
      height: 30, // in meters
      join: 'miter',
      cap: 'round',
      anchor: 'bottom',
      profileRotation: 'all',
    }),
  ],
});
```

---
layout: media-right
image: /polygon-symbol-flat.avif
---

# PolygonSymbol3D

Flat

```ts
const symbol = new PolygonSymbol3D({
  symbolLayers: [new FillSymbol3DLayer()],
});
```

---
layout: media-right
image: /polygon-symbol-volumetric.avif
---

# PolygonSymbol3D

Volumetric

```ts
const symbol = new PolygonSymbol3D({
  symbolLayers: [new ExtrudeSymbol3DLayer()],
});
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/visualization-buildings-3d/live'
---

# Extruding building footprints

ExtrudeSymbol3DLayer, UniqueValueRenderer and Visual Variables

```ts {0|2|3-9|13-20|22-25}{maxHeight:'260px'}
getSymbol(color){
  const symbol = new PolygonSymbol3D({
    symbolLayers: [
      new ExtrudeSymbol3DLayer({
        material: { color },
        edges: { type: "solid", color: "#999", size: 0.5 },
      }),
    ],
  });
  return symbol
}

const renderer = new UniqueValueRenderer({
  defaultSymbol: symbol,
  uniqueValueInfos: [{
      value: "Residential",
      symbol: getSymbol("#A7C636"),
      label: "Residential"
    }
    ... // same for all categories
    ]
  visualVariables: [{
      type: "size",
      field: "HEIGHT",
    }],
});
```

---
layout: intro
---

# Scene Layer

Hugo Campos

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/layers-scenelayer-points/live/'
---

# Scene Layer

Load a SceneLayer

```ts
const layer = new SceneLayer({
  url: 'https://tiles.arcgis.com/.../SceneServer',
  renderer: renderer, // Set the renderer to sceneLayer
  copyright: `Data from <a href="http://www.geonames.org/">GeoNames</a>`,
});

map.add(layer);
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/highlight-scenelayer/live'
---

# Scene Layer

Scene Layer and Multiple Highlights

```ts {0-22}{maxHeight:'300px'}
const campusSceneLayer = arcgisScene.map.allLayers.find((layer) => {
  return layer.title === 'Buildings';
});

// Add a "multiselect" highlight option for buildings selected in the list
// Add a "default" highlight option for when a building is hovered over in the list
arcgisScene.highlights = [
  {
    name: 'multiselect',
    color: 'blue',
  },
  { name: 'default', color: 'gold' },
];

arcgisScene.view.whenLayerView(campusSceneLayer).then((layerView) => {
  // When the list item is hovered over, highlight the corresponding building in gold
  li.addEventListener('mouseenter', () => {
    // Since no highlight name is provided, the default will be used
    hoverHighlight = layerView.highlight(feature);
  });

  selectionHighlight = layerView.highlight(objectId, { name: 'multiselect' });
});
```

---
layout: media-right
image: /sl-color.avif
---

# Scene Layer

Colored by attribute

```ts {0-25}{maxHeight:'300px'}
const thematicRenderer = new SimpleRenderer({
  symbol: new MeshSymbol3D({
    symbolLayers: [
      new FillSymbol3DLayer({
        material: {
          color: '#ffffff',
          colorMixMode: 'replace',
        },
      }),
    ],
    visualVariables: [
      {
        type: 'color',
        field: 'solarAreaSuitableM2',
        stops: [
          { value: 1, color: '#FFFCD4' },
          { value: 1000, color: [153, 83, 41] },
        ],
      },
    ],
  }),
});
layer.renderer = thematicRenderer;
```

---
layout: media-right
image: /sl-edges.avif
---

# Scene Layer

Edges

```ts
symbolLayer.edges = new SolidEdges3D({
  color: [0, 0, 0, 0.6],
  size: 1,
});
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/building-scene-layer-slice/live'
---

# Building Scene Layer

BSL and Slice Widget

```ts
const buildingLayer = new BuildingSceneLayer({
  url: 'https://tiles.arcgis.com/.../SceneServer',
});
map.add(layer);

const sliceWidget = new Slice({
  view: view,
  container: document.createElement('div'),
});
```

---
layout: media-right
image: /bsl-colored-columns.avif
---

# Building Scene Layer

Color Sublayer

```ts
const columnsLayer = buildingLayer.allSublayers.find(
  (l) => l.modelName === 'StructuralColumns',
);

columnsLayer.renderer = new SimpleRenderer({
  symbol: new MeshSymbol3D({
    symbolLayers: [
      new FillSymbol3DLayer({
        material: { color: 'red' },
      }),
    ],
  }),
});
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/layers-pointcloud-portal/live'
---

# Point Cloud Scene Layer

Create PCL from Scene Service

```ts
const pcLayer = new PointCloudLayer({
  url: 'https://tiles.arcgis.com/../SceneServer',
});
map.add(pcLayer);
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/layers-pointcloud/live'
---

# Point Cloud Scene Layer

Color by LAS classification

```ts {0-29}{maxHeight:'280px'}
// Store the generated renderer in a predefined object in
// case it is requested in the future and return the renderer
function responseCallback(response) {
  renderersByField[fieldName] = response.renderer;
  return response.renderer;
}

if (fieldName === 'RGB') {
  return colorRendererCreator
    .createPCTrueColorRenderer({
      layer: pcLayer,
    })
    .then(responseCallback);
}
if (fieldName === 'CLASS_CODE') {
  return typeRendererCreator
    .createPCClassRenderer({
      layer: pcLayer,
      field: fieldName,
    })
    .then(responseCallback);
}
if (fieldName === 'ELEVATION' || 'INTENSITY') {
  return colorRendererCreator
    .createPCContinuousRenderer({
      layer: pcLayer,
      field: fieldName,
    })
    .then(responseCallback);
}
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/layers-integratedmeshlayer/live'
---

# Integrated Mesh

Another type of Scene Layer

```ts
const layer = new IntegratedMeshLayer({
  url: 'https://tiles.arcgis.com/.../SceneServer',
});
map.add(layer);
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/layers-integratedmeshlayer-modification/live'
---

# Integrated Mesh

IML Modification

```ts
// create the modification collection with the geometry and attribute from the graphicsLayer
let modifications = new SceneModifications(
  graphicsLayer.graphics.toArray().map((graphic) => {
    return new SceneModification({
      geometry: graphic.geometry,
      type: graphic.attributes.modificationType,
    });
  }),
);
```

---
layout: intro
---

# Other Layers

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/elevation-analysis/live'
---

# Terrain 3D Layer

Applying RasterFunction

```ts {0|1-7|9-14|16-19}{maxHeight:'340px'}
// Setup layer with initial raster function
const analysisLayer = new ImageryTileLayer({
  url: 'https://elevation3d.arcgis.com/.../ImageServer',
  title: 'Custom Analysis',
  rasterFunction: createCustomAnalysis(customColor),
  opacity: 0.8,
});

// Mask out elevation outside of parameter range
const elevationMask = rasterFunctionUtils.mask({
  includedRanges: [
    [customAnalysisParams.elevation.min, customAnalysisParams.elevation.max],
  ],
  noDataValues: [[-9999]],
  noDataInterpretation: 'match-any',
});

// Compute aspect on masked elevation
const aspectFunction = rasterFunctionUtils.aspect({
  raster: elevationMask,
});
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/layers-voxel/live'
---

# Voxel Layer

Intro

```ts
const layer = new VoxelLayer({
  url: 'https://tiles.arcgis.com/.../SceneServer',
});
map.add(layer);
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/layers-voxel-slices/live'
---

# Voxel Layer

Create area of interest

```ts
//A vertical slice from West to East
xSlice = new VoxelSlice({
  orientation: 270,
  tilt: 90,
  point: [volSize[0] / 2, 0, 0],
});

vxlLayer.getVolumeStyle(null).slices = [xSlice];
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/layers-voxel-time/live'
---

# Voxel Layer

Time enabled

```ts
const vxlVolume = vxlLayer.getVolume(null);
const vxlVolumeType = vxlVolume.volumeType;
// Check that the volume type is xyzt
if (vxlVolumeType === 'xyzt') {
  // Configure the timeSlider to use the layer's timeInfo.stops
  timeSlider.fullTimeExtent = vxlLayer.timeInfo.fullTimeExtent;
  timeSlider.stops = {
    dates: vxlLayer.timeInfo.stops,
  };
  timeSlider.mode = 'instant';
  // The slider will show temporal data that falls on a single instance in time.
}
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/layers-medialayer-video/live'
---

# Media Layer

Video element

```ts {0|1-14|16-21}{maxHeight:'320px'}
const element = new VideoElement({
  video: 'https://.../video.mp4',
  georeference: new ExtentAndRotationGeoreference({
    extent: new Extent({
      xmin: -150,
      ymin: 1,
      xmax: 20,
      ymax: 80,
      spatialReference: {
        wkid: 4326,
      },
    }),
  }),
});

// Add the video element to the media layer
const layer = new MediaLayer({
  source: [element],
  title: '2017 Hurricanes and Aerosols Simulation',
  copyright: "NASA's Goddard Space Flight Center",
});
```

---
layout: media-right
url: 'https://developers.arcgis.com/javascript/latest/sample-code/layers-medialayer-interactive/live'
---

# Media Layer

Interactive georeferencing

```ts {0|1|3-5|7}
const mediaLayerView = await view.whenLayerView(mediaLayer);

// Enable interactivity and select the image
mediaLayerView.interactive = true;
mediaLayerView.selectedElement = mediaLayer.source;

mediaLayerView.interactionOptions.tool = 'reshape';
```

---
src: ../.meta/footer.md
---
