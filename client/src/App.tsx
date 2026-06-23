import { Route, Routes } from 'react-router-dom';
import './App.css'
import { DebugPage } from './pages/DebugPage';
import { usePosition, type PositionState } from './hooks/usePosition';
import { useOverheadPass } from './hooks/useOverheadPass';
import { useSatellites, type SatelliteState } from './hooks/useSatellites';
import type { OverheadPass } from './types/satellite';
import { MapPage } from './pages/MapPage';

function App() {
    const position: PositionState = usePosition();
    const satellites: SatelliteState = useSatellites("/data/sat-data.txt");
    const passes: OverheadPass[] = useOverheadPass(satellites.satellites, position.location);

    return (
        <>
            <Routes>
                <Route path="/" element={ <MapPage passes={passes} showNames={false}/> }/>
                <Route path="/debug" element={ <DebugPage position={position} satellites={satellites} overheadPasses={passes}  /> }/>
            </Routes>
        </>
    );
}

export default App