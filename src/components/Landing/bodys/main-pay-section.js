// CSS:
import './main-pay-section.css';
// Hooks:
import { useEffect, useState } from 'react';

// JSX:
const MainPaySection = () => {
    // useState Hook: Renderiza con el Cambio del Valor y Conserva Dicho Valor
    const [tokenApi, setTokenApi] = useState('');
    // useEffect Hook: Ejecuta con un Unico Renderizado
    useEffect(() => {
        // FUNCIONALIDAD TEMPORAL, HALLAR COMO ACCEDER AL LOGIN API.
        fetch('http://proyecto8.test/api/tokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'devengvengg@gmail.com',
                password: 'Alumno17'
            })
        }).then(resolve => resolve.json()).then(function(data) {
            setTokenApi(`${data.token_type} ${data.access_token}`);
        });
        console.log('remember Change this Token, Only For Mail Test Prupose.');
    }, []);
    // General Options:
    const options_post = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization':  tokenApi,
            'accept' : 'application/json'
        }
    };
    function handleSendMailTo(event) {
        event.preventDefault();
        // Get Dom Form Elements:
        const email = document.getElementById('input-mail-value-msg').value;
        const subject = document.getElementById('input-subject-value-msg').value;
        const message = document.getElementById('input-message-value-msg').value;
        // Set up Fetch:
        const server_api_url = `http://proyecto8.test/api/send/message/${email}/${subject}/${message}`
        // Peticion Servidor:
        fetch(server_api_url, options_post).then(async response => {
            if(response.ok) alert('Email Enviado con Exito!');
            else alert('Error al Enviar el Email!');
        });
    }
    function handleSendNotifyTo(event) {
        event.preventDefault();
        // Get Dom Form Elements:
        const email = document.getElementById('input-mail-value-nt').value;
        const subject = document.getElementById('input-subject-value-nt').value;
        // Set up Fetch:
        const server_api_url = `http://proyecto8.test/api/send/notificacion/to/${email}/${subject}`
        // Peticion Servidor:
        fetch(server_api_url, options_post).then(async response => {
            if(response.ok) alert('Notificacion Enviada con Exito!');
            else alert('Error al Enviar la Notificacion!');
        });
    }
    // JSX:
    return (
        <section className='main-pay-section'>
            {/* Stipe Form Payments ¿Integrar View? */}
            <article className='article-container'>
                <header className='article-container-header'>
                    <h4>Cashier Payment</h4>
                </header>
                <section id="insert-form-pay-view"></section>
            </article>
            {/* Send Mail To */}
            <article className='article-container'>
                <header className='article-container-header'>
                    <h4>Send Mail To</h4>
                </header>
                <form className='form-article-container horizontal-form' onSubmit={handleSendMailTo} method='POST'>
                    <div>
                        <input id='input-mail-value-msg' placeholder='email' type='email' />
                        <input id='input-subject-value-msg' placeholder='subject' type='text' />
                    </div>
                    <div>
                        <textarea 
                            style={{resize: 'none'}} 
                            id='input-message-value-msg' 
                            placeholder='message' 
                            type='text-area' 
                        />
                    </div>
                    <div className='botonera'>
                        <button className='form-button submit-button' type='submit'>Send</button>
                        <button className='form-button reset-button' type='reset'>Reset</button>
                    </div>
                </form>
            </article>
            {/* Send Notification To */}
            <article className='article-container'>
                <header className='article-container-header'>
                    <h4>Send Notification To</h4>
                </header>
                <form onSubmit={handleSendNotifyTo} className='form-article-container horizontal-form' method='POST'>
                    <div>
                        <input id='input-mail-value-nt' placeholder='email' type='email' />
                        <input id='input-subject-value-nt' placeholder='subject' type='text' />
                    </div>
                    <div className='botonera'>
                        <button className='form-button submit-button' type='submit'>Send</button>
                        <button className='form-button reset-button' type='reset'>Reset</button>
                    </div>
                </form>
            </article>
        </section>
    );
};
export default MainPaySection;