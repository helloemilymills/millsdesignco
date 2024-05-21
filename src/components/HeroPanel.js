import './HeroPanel.css'
import photoshopCropTool from '../images/Cover - Photoshop Crop Tool.png'
import failingFast from '../images/Cover - Failing Fast.png'
import figmaPrototypes from '../images/Cover - Figma Prototypes.png'

export default function HeroPanel() {

    return (
      <>
      <div id='heroContainer' className='consistentPadding'>
        <div id='intro' >
          <h1>Create with Confidence</h1>
          <div className='blueBar'></div>
          <p>
          Hey there, I’m Emily Mills. 👋 I created Mills Design Co because I want to see designers conquer imposter syndrome and create with confidence. I’m on a mission to cultivate a community that embraces creative play, shares their knowledge willingly, and supports emerging designers.
          </p>
        </div>
        {/* <div id='carouselContainer'>
            <a href='https://www.tiktok.com/@millsdesign.co' target='_blank' rel='noopener noreferrer'>
              <img className='carouselImage' src={figmaPrototypes} alt='A cover design for a TikTok tutorial relating to graphic design.'/>
            </a>
            <a href='https://www.tiktok.com/@millsdesign.co/video/7370897206695595282?lang=en' target='_blank' rel='noopener noreferrer'>
              <img className='carouselImage' src={failingFast} alt='A cover design for a TikTok tutorial relating to graphic design.'/>
            </a>
            <a href='https://www.tiktok.com/@millsdesign.co/video/7364749904431959314?lang=en' target='_blank' rel='noopener noreferrer'>
              <img className='carouselImage' src={photoshopCropTool} alt='A cover design for a TikTok tutorial relating to graphic design.'/>
            </a>
        </div> */}
      </div>
      </>
    );
  }