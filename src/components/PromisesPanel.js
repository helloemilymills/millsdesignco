import './PromisesPanel.css'

export default function PromisesPanel() {

    return (
      <>
        <div id='promisesPanelContainer' className='consistentPadding'>
          <h2>My Promises</h2>
          <div className='blueBar'></div>
          <div id='promisesBoxesContainer'>
            <div className='promisesBoxes yellowPromisesBox'>
              <h3>I won't hold back</h3>
              <p>I’ll share everything I know, even if it helps you get ahead of me.</p>
            </div>
            <div className='promisesBoxes redPromisesBox'>
              <h3>I'll respect you</h3>
              <p>I won’t make you feel silly for not knowing something.</p>
            </div>
            <div className='promisesBoxes bluePromisesBox'>
              <h3>I'll always be me</h3>
              <p>If we met, I hope you’d see that I’m the same person online & offline.</p>
            </div>
          </div>
        </div>
      </>
    );
  }