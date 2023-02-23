// CSS:
import './main-navbar.css';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import placeholderImage from 'images/icons/placeholder.png';
// Hook:
import { useState } from 'react';
// API URL: q=135+pilkington+avenue,+birmingham&format=xml&polygon_geojson=1&addressdetails=1
const NOMINATIM_RAW_URL = 'https://nominatim.openstreetmap.org/search?';

const MainNavbar = function(props) {
    // Importar Props / Defragmentando en objeto un useState:
    const { selectedPosition, setSelectedPosition } = props;
    // UseState Hook: Renderiza Cuando Cambia el Valor.
    const [searchText, setSearchText] = useState('');
    const [listPlaces, setListPlaces] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    // DOM:
    window.addEventListener('load', () => {
        const lis = document.querySelectorAll('#up-menu-lis > li')
        lis.forEach(li => {
            li.addEventListener('click', () => {
                if(li.innerText.toUpperCase() === 'BLABLACARS') window.location = '/payments';
                else window.open(`https://www.google.es/maps/search/${li.innerText}/@`);
            });
        });
    });
    function goHome() {
        window.location = '/';
    }
    // JSX:
    return (
        <nav className='main-navbar'>
            <ul>
                <li onClick={goHome}>Maps</li>
            </ul>
            <ul id='up-menu-lis'>
                <li>Trenes</li>
                <li>Buses</li>
                <li>Blablacars</li>
            </ul>
            <ul id="map-type-inputs">
                <li className='map-type-active'>Basic</li>
                <li>Bright</li>
                <li>Topo</li>
                <li>Satelit</li>
                <li>Street</li>
                <li>Ocean</li>
            </ul>
            <div className='search-nav'>
                <input id="search-bar-nav" type='text' value={searchText} onChange={(event) => {
                    setSearchText(event.target.value)
                }}/>
                <Button 
                    id="search-button"
                    variant='contained' 
                    color='primary' 
                    style={{flexGrow: '1'}}
                    onClick={() => {
                        const parms_search_url = {
                            q: searchText,
                            format: 'json',
                            addressdetails: 1,
                            polygon_geojson: 0
                        };
                        const query_str = new URLSearchParams(parms_search_url).toString();
                        const request_options = { method: 'GET', redirect: 'follow' };
                        fetch(NOMINATIM_RAW_URL + query_str, request_options).then(
                            (response) => response.text()
                        ).then((result) => {
                            setListPlaces(JSON.parse(result));
                            setShowSearch(true);
                        }).catch((error) => console.log('error: ', error));
                    }}
                >Search</Button>
                <div id="search-show-info" className={(showSearch && searchText.length > 0) ? '' : 'hide_w'}>
                    <List>{listPlaces.map((item) => (
                        <div key={item?.place_id}>
                            <ListItem button onClick={() => { setSelectedPosition(item) }}>
                                <ListItemIcon>
                                    <img alt="placeholder-image" src={placeholderImage} className='search-image-sizer'/>
                                </ListItemIcon>
                                <ListItemText primary={item?.display_name}/>
                            </ListItem>
                            <Divider />
                        </div>
                    ))}</List> 
                </div>
            </div>
        </nav>
    );
};
export default MainNavbar;