import "./View.css";

interface ViewProps {
    viewRef: React.RefObject<HTMLDivElement>;
}

export const View = ({ viewRef }: ViewProps) => {
    return (
         <div ref={viewRef} id="viewDiv" />
    )
}