// CSS:
import './main-pay-section.css';
// JSX:
const MainPaySection = () => (
    <section className='main-pay-section'>
        {/* Stipe Form Payments ¿Integrar View? */}
        <article className='article-container'>
            <header className='article-container-header'>
                <h4>Cashier Payment</h4>
            </header>
            <section id="insert-form-pay-view">

            </section>
        </article>
        {/* Send Mail To */}
        <article className='article-container'>
            <header className='article-container-header'>
                <h4>Send Mail To</h4>
            </header>
            <form className='form-article-container horizontal-form' action='#' method='POST'>
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
                <button className='submit-button' type='submit'>Send</button>
            </form>
        </article>
        {/* Send Notification To */}
        <article className='article-container'>
            <header className='article-container-header'>
                <h4>Send Notification To</h4>
            </header>
            <form className='form-article-container' action='#' method='POST'>
                <input id='input-mail-value-nt' placeholder='email' type='email' />
                <input id='input-subject-value-nt' placeholder='subject' type='text' />
                <button className='submit-button' type='submit'>Send</button>
            </form>
        </article>
    </section>
);
export default MainPaySection;