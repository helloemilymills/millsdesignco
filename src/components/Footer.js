import './Footer.css'
import submark from '../images/Submark.png'

export default function Footer() {

    return (
      <>
        <div id='footer'>
          <p className='headerFooterCompanyName white'> © Emily Mills, 2025</p>
          <img id='footerLogo' src={submark} alt='Mills Design Co Logo'/>
        </div>
      </>
    );
  }