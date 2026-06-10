import { twoline2satrec, type SatRec } from "satellite.js";

export const parseTLE = (raw: string): SatRec[] => {
    const sats: SatRec[] = [];

    const data = raw.split('\n');

    for ( let i = 0; i < data.length; i += 3 ) {
        const line1 = data[i + 1];
        const line2 = data[i + 2];

        // TLE lines are 69 columns
        if ( line1.length != 69 || line2.length != 69 ) continue;

        sats.push(twoline2satrec(line1, line2));
    }

    return sats;
} 
