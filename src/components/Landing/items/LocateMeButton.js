// CSS:
import './items.css'
// Icon:
import MyLocationIcon from 'images/icons/my-location.PNG';
// Custom Hook:
import useGeoLocation from 'hooks/useGeoLocation';

const LocateMeButton = function(props) {
    // Import Props:
    const { setCurrentPosition } = props;
    // Custom Hook:
    const location = useGeoLocation();
    // Show My Location Little Component:
    function showMyLocation() {
        // Custom Hook:
        if(location.loaded && !location.error) {
            // NOTA: http://localhost:3002/ Works Pero da Problemas con proyecto8.test por no ser HTTPS.
            console.log(location.coordinates);
            setCurrentPosition([location.coordinates.lat, location.coordinates.lng]);
        } else {
            // Trick Usando Google Maps:
            window.open('https://www.google.es/maps/@');
            console.error(location);
        } 
    }
    // JSX: 
    return (
        <figure id='my-location-icon'>
            <img className='icon-sizer' alt='my-location-icon' src={MyLocationIcon} onClick={showMyLocation}/>
        </figure>
    );
}
export default LocateMeButton;