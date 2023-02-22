import MainHeader from './headers/main-header';
import MainNavbar from './Navs/main-navbar';
import MainMaps from './bodys/main-maps';
import MainFooter from './footers/main-footer';
// Hook:
import { useState } from 'react';

const Landing = function() {
    // useState Hook: Renderiza con Cambios del Valor.
    const [selectedPosition, setSelectedPosition] = useState(null);
    // JSX:
    return (
        <main>
            <MainHeader></MainHeader>
            <MainNavbar selectedPosition={selectedPosition} setSelectedPosition={setSelectedPosition}></MainNavbar>
            <MainMaps  selectedPosition={selectedPosition}></MainMaps>
            <MainFooter></MainFooter>
        </main>
    );
};
export default Landing;