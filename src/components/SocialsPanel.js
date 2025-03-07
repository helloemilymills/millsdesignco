import './SocialsPanel.css'

export default function SocialsPanel() {

  // let svgIcon = document.getElementById('tiktokIcon');
  // let originalViewBox = svgIcon.getAttribute('viewBox');
  // let mediaQuery800 = matchMedia('min-width: 800px');

  // let updateViewBox = function () {
  //   if (mediaQuery800.matches) {
  //     //viewBox value set to a new one
  //     svgIcon.setAttribute('viewBox', '0 0 100 100');
  //   }
  //   else {
  //     svgIcon.setAttribute('viewBox', originalViewBox);
  //   }
  //   //fire document on load
  //   svgIcon.onload = updateViewBox;
  //   //fire if media condition changes
  //   mediaQuery800.addListener(updateViewBox);
  // }

  return (
    <>
      <div className='consistentPadding' id='socialsContainer'>
        <div id='socialTextContainer'>
          <h2>Say Hello</h2>
          <div className='blueBar'></div>
          <p>
            I’m on a mission to cultivate a community that embraces creative play, shares their knowledge willingly, and supports emerging designers. If that resonates with you, let’s connect!
          </p>
        </div>
        <div id='socialIcons'>
          

          <a href='https://www.youtube.com/@helloemilymills' target='_blank' rel='noopener noreferrer'>
            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M52.5 20.8799V40.8799C52.5 47.7834 46.9035 53.3799 40 53.3799H20C13.0964 53.3799 7.5 47.7834 7.5 40.8799V20.8799C7.5 13.9763 13.0964 8.37988 20 8.37988H40C46.9035 8.37988 52.5 13.9763 52.5 20.8799Z" stroke="#F83C4B" stroke-width="3.92799" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M37.1999 30.6797L25.1499 37.5654V23.7939L37.1999 30.6797Z" fill="#F83C4B" stroke="#F83C4B" stroke-width="5.16429" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href='https://www.instagram.com/helloemilymills' target='_blank' rel='noopener noreferrer'>
            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 40.5703C35.5228 40.5703 40 36.0931 40 30.5703C40 25.0475 35.5228 20.5703 30 20.5703C24.4771 20.5703 20 25.0475 20 30.5703C20 36.0931 24.4771 40.5703 30 40.5703Z" stroke="#F4B826" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.5 40.5703V20.5703C7.5 13.6668 13.0964 8.07031 20 8.07031H40C46.9035 8.07031 52.5 13.6668 52.5 20.5703V40.5703C52.5 47.4738 46.9035 53.0703 40 53.0703H20C13.0964 53.0703 7.5 47.4738 7.5 40.5703Z" stroke="#F4B826" stroke-width="3.75" />
              <path d="M43.75 16.8456L43.775 16.8179" stroke="#F4B826" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a href='https://www.linkedin.com/in/helloemilymills' target='_blank' rel='noopener noreferrer'>
            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M52.5 20.5703V40.5703C52.5 47.4738 46.9035 53.0703 40 53.0703H20C13.0964 53.0703 7.5 47.4738 7.5 40.5703V20.5703C7.5 13.6668 13.0964 8.07031 20 8.07031H40C46.9035 8.07031 52.5 13.6668 52.5 20.5703Z" stroke="#2E82B1" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.5 43.0703V34.3203V25.5703" stroke="#2E82B1" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.5 43.0703V34.9453M27.5 34.9453V25.5703M27.5 34.9453C27.5 25.5703 42.5 25.5703 42.5 34.9453V43.0703" stroke="#2E82B1" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.5 18.0961L17.5254 18.0679" stroke="#2E82B1" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}