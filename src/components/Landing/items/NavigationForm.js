// CSS:
import './items.css';
// Utils:
import Button from '@material-ui/core/Button';

const NavigationForm = () => {
    // DOM:
    let directions_search_button = null;
    window.addEventListener('load', () => {
        directions_search_button = document.getElementById('directions-search-button');
        directions_search_button.addEventListener('click', () => {
            const input_origen_value = document.getElementById('origen-directions').value; 
            const input_destino_value = document.getElementById('destino-directions').value; 
            const base_url = 'https://www.google.es/maps/dir';
            // Redirect Query:
            window.open(`${base_url}/${input_origen_value}/${input_destino_value}`);
        });
    });
    // JSX:
    return (
        <aside className='navigation-form-aside'>
            <header>
                <h3>Directions</h3>
            </header>
            <div>
                <input id="origen-directions" placeholder='Origen' type='text'/>
                <input id="destino-directions" placeholder='Destino' type='text'/>
            </div>
            <Button id="directions-search-button" variant='contained' color='primary'>Find Route</Button>
        </aside>
    );
}
export default NavigationForm;