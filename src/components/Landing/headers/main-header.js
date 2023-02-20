// CSS:
import './main-header.css';
import logoImage from 'images/logo/logo.png';

const MainHeader = () => (
    <header className='main-header'>
        <figure>
            <img draggable="false" className='logo-sizer' alt='ecomaps-logo' src={logoImage} />
        </figure>
        <h1>Ecomaps</h1>
        <div className='session-controls'>
            <a href='/login'>Login</a>
            <a href='/register'>Register</a>
        </div>
    </header>
);
export default MainHeader;