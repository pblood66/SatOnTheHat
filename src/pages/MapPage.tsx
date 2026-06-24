import { SkyMap, type SkyMapProps } from "../components/SkyMap";

export const MapPage = (props: SkyMapProps) => {
    return (
        <>
            <SkyMap passes={props.passes} showNames={props.showNames} />
        </>
    )
}