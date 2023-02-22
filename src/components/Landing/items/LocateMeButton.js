// CSS:
import './items.css'
// Custom Hook:
import useGeoLocation from 'hooks/useGeoLocation';
// Icon:
import MyLocationIcon from 'images/icons/my-location.PNG';
import L from 'leaflet';

const LocateMeButton = function() {
    // Custom Hook:
    const location = useGeoLocation();
    // Little Componente Funcionalidad:
    const showMyLocation = () => {
        if (location.loaded && !location.error) {
            // NOTA: http://localhost:3002/ Works Pero da Problemas con proyecto8.test por no ser HTTPS.
            console.log(location.coordinates)
        } else {
            // Trick Usando Google Maps:
            window.open('https://www.google.es/maps/@');
            console.error(location);
        } 
    };
    // JSX: 
    return (
        <figure id='my-location-icon' onClick={showMyLocation}>
            <img className='icon-sizer' alt='my-location-icon' src={MyLocationIcon}/>
        </figure>
    );
}
export default LocateMeButton;