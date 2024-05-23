import './BrandStoryPanel.css'
import profilePicture from '../images/Profile Square (Mills Design Co).png'

export default function BrandStoryPanel() {

    return (
      <>
        <div id='brandStoryBlueContainer'>
          <img id='profileImage' src={profilePicture} alt='Emily Mills sitting backwards on a chair and smiling at the camera. Behind her is a wall covered with fun & colourful shapes.'/>
          <div id='brandStoryWhiteContainer'>
            <h2>My Story</h2>
            <div className='blueBar'></div>
            <strong><p>I know how prone we all are to imposter syndrome, particularly as creatives. </p></strong>
            <p>I stumbled into the design industry by accident and doubted my abilities for over a year (despite holding a paid position). It wasn’t until I got connected with other designers that I finally felt confident enough to call myself one.</p>
            <p>In thanks to the many people who have helped me find my creative confidence, my goal is to set others up for success by sharing everything I know about graphic design.</p>
          </div>
        </div>
      </>
    );
  }