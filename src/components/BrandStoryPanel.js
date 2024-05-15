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
            <p>I know how prone we all are to impostor syndrome, particularly as creatives. I stumbled into the design industry by accident and doubted my abilities for over a year (despite holding a paid position). It wasn’t until I got connected with other designers that I finally felt confident enough to call myself one.</p>
            <p>Community is the solution. I want to share everything I know about graphic design so that others learning the craft — and lifelong learners like me — can have an easier time picking up new skills. After all, helping other people succeed is a pretty nice feeling.</p>
          </div>
        </div>
      </>
    );
  }