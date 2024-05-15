
export default function SocialsPanel() {

    return (
        <>
            <div className='consistentPadding' id='socialsContainer'>
                <h2>Say Hello</h2>
                <div className='blueBar'></div>
                <p>I’d love to connect! You can find me on these platforms.</p>
                <div id='socialIcons'>
                    <a>
                        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52.5 20.5703V40.5703C52.5 47.4738 46.9035 53.0703 40 53.0703H20C13.0964 53.0703 7.5 47.4738 7.5 40.5703V20.5703C7.5 13.6668 13.0964 8.07031 20 8.07031H40C46.9035 8.07031 52.5 13.6668 52.5 20.5703Z" stroke="#F83C4B" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25 30.5703C20.8579 30.5703 17.5 33.9281 17.5 38.0703C17.5 42.2126 20.8579 45.5703 25 45.5703C29.1423 45.5703 32.5 42.2126 32.5 38.0703V15.5703C33.3332 18.0703 36.5 23.0703 42.5 23.0703" stroke="#F83C4B" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}
