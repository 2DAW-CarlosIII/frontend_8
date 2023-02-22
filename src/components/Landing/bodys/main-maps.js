// CSS:
import './main-maps.css';
import 'leaflet/dist/leaflet.css';
//  Leaflet:
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// Hook:
import { useState, useEffect } from 'react';
// My Components:
import LocateMeButton from 'components/Landing/items/LocateMeButton';
import NavigationForm from 'components/Landing/items/NavigationForm';
import AsideMoreMaps from 'components/Landing/items/aside-more-maps';
import MainDownNavBar from 'components/Landing/Navs/main-down-navbar';
// PlaceHolder:
import L from 'leaflet';
import placeholdIconRaw from 'images/icons/placeholder.png';
import chinchetaIconRaw from 'images/icons/chincheta.png';

const placeHoldIcon = L.icon({
    iconUrl: placeholdIconRaw,
    iconSize: [38, 38]
});
const chinchetaIcon = L.icon({
    iconUrl: chinchetaIconRaw,
    iconSize: [38, 38]
});
// Maps Type Style:
const mapstype = {
    basic: 'https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=2CaCEVSniZvG9oIfnFHD',
    bright: 'https://api.maptiler.com/maps/bright-v2/{z}/{x}/{y}.png?key=2CaCEVSniZvG9oIfnFHD',
    satelit: 'https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=2CaCEVSniZvG9oIfnFHD',
    topo: 'https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=2CaCEVSniZvG9oIfnFHD',
    street: 'https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=2CaCEVSniZvG9oIfnFHD',
    ocean: 'https://api.maptiler.com/maps/ocean/{z}/{x}/{y}.png?key=2CaCEVSniZvG9oIfnFHD'
}
// Position: (latitud, longitud)
const position = [37.6019353, -0.9841152]
// Set My Position:
function SetMyLocation(props) {
    // Props Import:
    const { currentPosition } = props;
    // Mapa Layer:
    const mapa = useMap();
    // Disable Double Click Zoom:
    mapa.doubleClickZoom.disable();
    // useEffect Hook:  Se Ejecuta cuando se Renderiza cambiando el valor de selectedPosition.
    useEffect(() => {
        if(currentPosition) {
            mapa.setView(
                L.latLng(currentPosition[0], currentPosition[1]),
                mapa.getZoom(),
                { animate: true }
            );
        }
    }, [currentPosition]);
    // JSX: 
    return null;
}
// Reset Center view Little Component:
function ResetCenterView(props) {
    // Props Import:
    const { selectedPosition } = props;
    // Crear un Map:
    const mapa = useMap();
    // Disable Double Click Zoom:
    mapa.doubleClickZoom.disable();
    // Add Markers When Double Click:
    const markers = [];
    mapa.on('dblclick', evento => {
        let latlng = mapa.mouseEventToLatLng(evento.originalEvent);
        markers.push(L.marker([latlng.lat, latlng.lng], {icon: chinchetaIcon}));
        // Clean Marker When Click:
        markers.forEach(marker => {
            marker.addTo(mapa);
            marker.addEventListener('click', () => {
                mapa.removeLayer(marker);
                markers.splice(markers.indexOf(marker), 1);
            });
        });
    });
    // useEffect Hook:  Se Ejecuta cuando se Renderiza cambiando el valor de selectedPosition.
    useEffect(() => {
        if(selectedPosition) {
            mapa.setView(
                L.latLng(selectedPosition?.lat, selectedPosition?.lon),
                mapa.getZoom(),
                { animate: true }
            );
        }
    }, [selectedPosition]);
    // JSX:
    return null;
}
// Map Section:
const MainMaps = (props) => {
    // Importing Props:
    const { selectedPosition } = props;
    const location_selection_position = [selectedPosition?.lat, selectedPosition?.lon];
    // useState Hook: Render When Value Change and Conserv the value.
    const [currentMapType, setCurrentMapType] = useState(mapstype.basic);
    const [currentPosition, setCurrentPosition] = useState(position);
    // Funcionalidad Change Map Type:
    function removeActiveLis(lis, li) {
        lis.forEach(li => { li.setAttribute('class', ''); });
        li.setAttribute('class', 'map-type-active');
    }
    window.addEventListener('load', () => {
        const lis = document.querySelectorAll('#map-type-inputs > li');
        lis.forEach(li => {
            li.addEventListener('click', () => {
                removeActiveLis(lis, li);
                setCurrentMapType(mapstype[li.innerText.toLowerCase()]);
            });
        });
    });
    // JSX:
    return (
        <section className='main-section'>
            <MapContainer  center={position} zoom={14} scrollWheelZoom={true} style={{width: '100%', height: '100%'}}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={currentMapType} />
                {selectedPosition && (
                    <Marker position={location_selection_position} icon={placeHoldIcon}>
                        <Popup>
                            {`Village: ${selectedPosition?.address.village}`}<br/>
                            {`Town: ${selectedPosition?.address.town}`}<br/>
                            {`County: ${selectedPosition?.address.county}`}<br/>
                            {`State: ${selectedPosition?.address.state}`}<br/>
                            {`Country: ${selectedPosition?.address.country} 
                            ${selectedPosition.address.country_code}`}<br/>
                            {`ZipCode: ${selectedPosition?.address.postcode}`}<br/>
                            {`Type: ${selectedPosition?.type}`}
                        </Popup>
                    </Marker>
                )}
                <ResetCenterView selectedPosition={selectedPosition}/>
                <SetMyLocation currentPosition={currentPosition}/>
            </MapContainer>
            <LocateMeButton  setCurrentPosition={setCurrentPosition}/>
            <NavigationForm/>
            <MainDownNavBar/>
            <AsideMoreMaps/>
        </section>
    );
};
export default MainMaps;