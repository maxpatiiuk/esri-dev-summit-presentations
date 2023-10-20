require([
  "esri/widgets/Sketch",
  "esri/Map",
  "esri/layers/GraphicsLayer",
  "esri/views/MapView",
  "esri/widgets/Sketch/SketchViewModel"
], (Sketch, Map, GraphicsLayer, MapView, SketchViewModel) => {
  const graphicsLayer = new GraphicsLayer();

  const map = new Map({
    basemap: "topo-vector",
    layers: [graphicsLayer]
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 5,
    center: [90, 45]
  });

  view.when(() => {
    const sketch = new Sketch({
      layer: graphicsLayer,
      view: view,
      // graphic will be selected as soon as it is created
      creationMode: "update",
      // viewModel: new SketchViewModel({
      //   polylineSymbol: {
      //     type: "simple-line",
      //     width: 5,
      //     color: [0, 150, 150],
      //     style: "dash"
      //   }
      // })
    });

    view.ui.add(sketch, "top-right");
  });
});