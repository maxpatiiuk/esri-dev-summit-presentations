import  { useEffect, useRef, useState } from "react"

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

import "./View.css";

interface ViewProps {
    webmap: string;
}

export const View = ({ webmap }: ViewProps) => {
    const viewRef = useRef<HTMLDivElement | null>(null);
    const [ view, setView ] = useState<__esri.MapView | null>(null);

    const createView = async (map: __esri.WebMap, container: HTMLDivElement) => {
        try {
            const loadedMap = await map.load();
            const view = new MapView({
                container,
                map: loadedMap
            });
            return Promise.resolve(view);
        } catch(err) {
            console.error("ERROR: ", err);
            return Promise.reject(null);
        }
     
    }

    useEffect(() => {
        const container = viewRef?.current;
        if (!container) return;

        const map = new WebMap({
            portalItem: {
                id: webmap
            }
        });

        createView(map, container).then(res => setView(res)).catch();

        return () => view?.destroy();
    }, []);

    useEffect(() => {
        console.log("View: ", view);
    }, [view]);

    return (
        <div ref={viewRef} id="viewDiv" />
    )
}