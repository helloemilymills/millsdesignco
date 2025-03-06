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
          
          <a href='https://www.instagram.com/millsdesign.co/' target='_blank' rel='noopener noreferrer'>
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
          {/* <a href='https://www.behance.net/helloemilymills' target='_blank' rel='noopener noreferrer'>
              <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52.5 20.5703V40.5703C52.5 47.4738 46.9035 53.0703 40 53.0703H20C13.0964 53.0703 7.5 47.4738 7.5 40.5703V20.5703C7.5 13.6668 13.0964 8.07031 20 8.07031H40C46.9035 8.07031 52.5 13.6668 52.5 20.5703Z" stroke="#F83C4B" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.7465 30.1356C29.0845 30.1356 29.0845 40.5703 22.7465 40.5703C19.1712 40.5703 15 40.5703 15 40.5703V30.1356M22.7465 30.1356C19.1712 30.1356 15 30.1356 15 30.1356M22.7465 30.1356C29.0845 30.1356 29.0845 20.5703 22.7465 20.5703C19.9296 20.5703 15 20.5703 15 20.5703V30.1356" stroke="#F83C4B" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M38.75 28.0703C35.2983 28.0703 32.5 30.8686 32.5 34.3203H45C45 30.8686 42.2017 28.0703 38.75 28.0703Z" stroke="#F83C4B" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32.5 34.3203C32.5 37.7721 35.2983 40.5703 38.75 40.5703C41.069 40.5703 42.4762 39.7643 43.2815 39.0208" stroke="#F83C4B" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M42.5 21.8203H35" stroke="#F83C4B" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a> */}
        </div>
      </div>
    </>
  );
}