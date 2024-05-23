import './CreatorRecsPanel.css'
import JamesBarnard from '../images/James Barnard.jpg'
import AbiConnick from '../images/Abi Connick.jpeg'
import AllanPeters from '../images/Allan Peters.jpg'
import CJCawley from '../images/CJ Cawley.jpeg'

export default function CreatorRecsPanel() {

    return (
      <>
        <div id='creatorSpotlightContainer' className='consistentPadding'>
          <div id='creatorTextContainer'>
            <h2>Creator Spotlight</h2>
            <div className='whiteBar'></div>
            <p>There is always more to learn, and everyone who shares their knowledge does so with a unique perspective. Here are a few creators who inspire me and share valuable design tips. Give them a follow if you like.</p>
          </div>
          <div id='creatorsContainer'>
            <a href='https://www.instagram.com/barnardco' target='_blank' rel='noopener noreferrer'>
              <div className='creator'>
                <img className='creatorProfilePicture' src={JamesBarnard} alt='James Barnard'/>
                <p>James Barnard</p>
              </div>
            </a>
            <a href='https://www.instagram.com/itsabiconnick' target='_blank' rel='noopener noreferrer'>
              <div className='creator'>
                <img className='creatorProfilePicture' src={AbiConnick} alt='Abi Connick'/>
                <p>Abi Connick</p>
              </div>
            </a>
            <a href='https://www.instagram.com/allanpeters' target='_blank' rel='noopener noreferrer'>
              <div className='creator'>
                <img className='creatorProfilePicture' src={AllanPeters} alt='Allan Peters'/>
                <p>Allan Peters</p>
              </div>
            </a>
            <a href='https://www.instagram.com/cj.cawley.design' target='_blank' rel='noopener noreferrer'>
              <div className='creator'>
                <img className='creatorProfilePicture' src={CJCawley} alt='CJ Cawley'/>
                <p>CJ Cawley</p>
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }