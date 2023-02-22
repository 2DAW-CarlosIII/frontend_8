// CSS:
import './items.css'
// Hooks:
import { useEffect } from 'react';
// Mock Data: Par Nombre, Impar Link.
import maps_links_data from 'Mocks/Maps-data';

const AsideMoreMaps = () => {
    // UseEffect Hook:
    useEffect(() => {
        // Get Element From DOM:
        const insert_div = document.getElementById('insert-maps-links');
        // Create Element: <li><a href='#' target='_blank'>1 ~ Google Maps</a></li> 
        const fragment = document.createDocumentFragment();
        let contador = 1;
        for(let i = 0, tope = maps_links_data.length; i < tope; i += 2) {
            const li = document.createElement('li');
            const link = document.createElement('a');
            li.appendChild(link);
            link.innerText = `${contador} ~ ${maps_links_data[i]}`;
            link.setAttribute('href', maps_links_data[(i + 1)]);
            link.setAttribute('target', '_blank');
            fragment.appendChild(li);
            contador++;
        }
        insert_div.append(fragment);
    }, []);
    // JSX: 
    return (
        <aside id="aside-more-maps" className='hide_w show_lg'>
            <header>
                <h5>Maps</h5>
            </header>
            <ul id='insert-maps-links'></ul>
        </aside>
    );
}
export default AsideMoreMaps;