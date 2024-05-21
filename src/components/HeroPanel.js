import './HeroPanel.css'

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
        <div id='videoCarousel' className='consistentPadding'>
          <div id='videoCarouselPlaceholder'>
            <p className='white'>
              Video carousel placeholder
            </p>
          </div>
        </div>
      </div>
      </>
    );
  }