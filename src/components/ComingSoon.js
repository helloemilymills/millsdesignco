import './ComingSoon.css'
import logo from '../images/Primary Coloured Fill White Outline@2x.png';

export default function ComingSoon() {

    return (
      <>
        <div id='comingSoonContainer'>
            <img id='comingSoonLogo' src={logo} alt='Mills Design Co Logo'/>
            <h1>Mills Design Co</h1>
            <h4>(coming soon)</h4>
        </div>
      </>
    );
  }