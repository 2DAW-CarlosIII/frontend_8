// CSS:
import './main-navbar.css';

const MainDownNavBar = () => {
    // Funcionalidad:
    window.addEventListener('load', () => {
        const lis = document.querySelectorAll('#down-menu-lis > li')
        lis.forEach(li => {
            li.addEventListener('click', () => {
                window.open(`https://www.google.es/maps/search/${li.innerText}/@`);
            });
        });
    });
    return (
        <aside className='main-down-navbar'>
            <ul id="down-menu-lis">
                <li>Gasolineras</li>
                <li>Hoteles</li>
                <li>Restaurantes</li>
                <li>Gimnasios</li>
                <li>Rocodromos</li>
            </ul>
        </aside>
    );
}
export default MainDownNavBar;