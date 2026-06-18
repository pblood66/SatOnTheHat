import { degreesLat, degreesLong, eciToGeodetic, gstime, propagate, type SatRec } from "satellite.js"

export interface SatelitePosition {
    lat: number,
    lng: number,
    alt: number
}

export const getPostion = (satRec: SatRec, date: Date = new Date()): SatelitePosition | null => {
    const state = propagate(satRec, date);

    if (!state || !state.position || typeof state.position === 'boolean') return null;

    const gmst = gstime(date);
    const geo = eciToGeodetic(state.position, gmst);

    return {
        lat: degreesLat(geo.latitude),
        lng: degreesLong(geo.longitude),
        alt: geo.height
    }
}