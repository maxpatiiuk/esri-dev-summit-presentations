require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/FeatureTable",
  "esri/widgets/Legend"
], (Map, MapView, FeatureLayer, FeatureTable, Legend) => {
  const map = new Map({
    basemap: "gray-vector"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-87.63, 41.86],
    zoom: 11,
    popup: {
      autoOpenEnabled: false
    }
  });

  const featureLayer = new FeatureLayer({
    portalItem: {
      id: "3807c58dd48c4d32810042d8edf4a2fe"
    },
    outFields: ["*"],
    title: "Chicago crime incidents"
  });
  map.add(featureLayer);

  // Create the feature table
  const featureTable = new FeatureTable({
    view: view,
    layer: featureLayer,
    multiSortEnabled: true, // set this to true to enable sorting on multiple columns
    editingEnabled: true,
    tableTemplate: {
      // autocast to TableTemplate
      columnTemplates: [
        // takes an array of GroupColumnTemplate and FieldColumnTemplate
        {
          // autocast to GroupColumnTemplate
          type: "group",
          label: "Crime details",
          columnTemplates: [
            {
              type: "field",
              fieldName: "Primary_Type",
              label: "Crime type"
            },
            {
              type: "field",
              fieldName: "Description",
              label: "Description"
            },
            {
              type: "field",
              fieldName: "Location_Description",
              label: "Location description"
            }
          ]
        },
        {
          type: "group",
          label: "Arrest information",
          columnTemplates: [
            {
              type: "field",
              fieldName: "Arrest",
              label: "Arrest"
            },
            {
              type: "field",
              fieldName: "incident_date",
              label: "Date of incident"
            },
            {
              type: "field",
              fieldName: "Case_Number",
              label: "Case No.",
              editable: false
            }
          ]
        }
      ]
    },
    container: document.getElementById("tableDiv")
  });

  const legend = new Legend({ view });
  view.ui.add(legend, "top-right");

  view.on("click", async (event) => {
    const response = await view.hitTest(event);
    if(!!response) {
      /** What comes next? */
    }
  });
});