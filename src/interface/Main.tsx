import { Route, Routes } from 'react-router-dom';
import GeoPlace from '../pages/GeoPlace';
import Circumference from '../pages/Circumference';
import Home from '../pages/Home';
import UnOrgTypes from '../pages/UnOrgTypes/UnOrgTypes';
import Solutions from '../pages/Solutions/Solutions';

export const ROUTES = Object.freeze({
    HOME: '/*',
    MATH: {
        GEO: '/math1',
        CIRCUM: '/math2',
    },
    QUIM: {
        TYPES: '/quim1',
        SOL: '/quim2',
    },
    FIS: {
        MRU: '/fis1',
        NEWTON_LAWS: '/fis2',
    },
});

function Main() {
    return (
        <main className='flex-grow flex flex-col py-5 px-48'>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.MATH.GEO} element={<GeoPlace />} />
                <Route path={ROUTES.MATH.CIRCUM} element={<Circumference />} />
                <Route path={ROUTES.QUIM.TYPES} element={<UnOrgTypes />} />
                <Route path={ROUTES.QUIM.SOL} element={<Solutions />} />
            </Routes>
        </main>
    );
}

export default Main;
