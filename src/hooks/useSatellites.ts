import { useEffect, useState } from "react"
import { parseTLE, type TLERecord } from "../lib/parseTLE"

export interface SatelliteState {
    satellites: TLERecord[],
    error: string | null,
    loading: boolean
}
export const useSatellites = (source: string) => {
    const [state, setState] = useState<SatelliteState>({
        satellites: [],
        error: null,
        loading: true
    })

    console.log(`Fetching Satellite Data from ${source}`);

    useEffect(() => {
        setState(s => ({ ...s, loading: true }));

        fetch(source)
            .then(res => {
                if (!res.ok) throw new Error(`Failed to fetch TLE data ${res.status}`);
                return res.text();
            })
            .then(raw => {
                console.log('Raw length:', raw.length);
                console.log('First 300 chars:', raw.slice(0, 300));
                const satellites = parseTLE(raw);
                console.log('Parsed count:', satellites.length);
                setState({ satellites, error: null, loading: false });
            })
            .catch(err => {
                setState({ satellites: [], error: err.message, loading: false });
            });
    }, [source]);

    return state;
}
