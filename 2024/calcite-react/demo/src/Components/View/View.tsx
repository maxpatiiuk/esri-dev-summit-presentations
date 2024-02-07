import { useEffect, useRef, useState } from "react"

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

import "./View.scss";

interface ViewProps {
    webmap: string;
}

export const View = (props: ViewProps) => {
    const viewRef = useRef<HTMLDivElement | null>(null);
    const [ view, setView ] = useState<__esri.MapView | null>(null);

    useEffect(() => {
        return () => {
            view?.destroy();
        }
    }, [])
    
    useEffect(() => {
        if (!viewRef?.current) return;

        const map = new WebMap({
            portalItem: {
                id: props.webmap
            }
        });

        const view = new MapView({
            container: viewRef?.current as HTMLDivElement,
            map
        });

        setView(view);

    }, [viewRef]);

    useEffect(() => {
        console.log("View: ", view);
    }, [view]);

    return (
        <div ref={viewRef} id="viewDiv" />
    )
}