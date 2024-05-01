import './Nav.css'
import logo from '../images/Primary Coloured Fill White Outline@2x.png';

export default function Nav() {

    return (
      <>
        <div id='navContainer'>
          <img id='navLogo' src={logo} alt='Mills Design Co Logo'/>
          <div id='navButtonsContainer'>
            <h5 className='navButton'>About</h5>
            <h5 className='navButton'>Contact</h5>
          </div>
        </div>
      </>
    );
  }