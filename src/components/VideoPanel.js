import './VideoPanel.css'

export default function VideoPanel() {

    return (
      <>
        <div id='intro' className='consistentPadding'>
          <h1>Create with Confidence</h1>
          <div className='blueBar'></div>
          <p>
          Hey there, I’m Emily Mills. 👋 I created Mills Design Co because I wanted to see designers conquer imposter syndrome and create with confidence. I’m on a mission to cultivate a community that embraces creative play, shares their knowledge willingly, and supports emerging designers.
          </p>
        </div>
        <div id='videoCarousel' className='consistentPadding'>
          <div id='videoCarouselPlaceholder'>
            <p className='white'>
              Video carousel placeholder
            </p>
          </div>
        </div>
      </>
    );
  }