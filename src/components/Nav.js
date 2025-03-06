import './Nav.css'
import logo from '../images/Primary Coloured Fill White Outline@2x.png';

export default function Nav() {

    return (
      <>
        <div id='navContainer'>
          <img id='navLogo' src={logo} alt='Mills Design Co Logo'/>
          {/* <p className='headerFooterCompanyName white'>Mills Design Co</p> */}
          <div id='burgerMenu'></div>
        </div>
      </>
    );
  }