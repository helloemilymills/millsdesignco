import './ValuesPanel.css'

export default function ValuesPanel() {

    return (
      <>
        <div id='valuesPanelContainer' className='consistentPadding'>
          <h2>My Values</h2>
          <div className='blueBar'></div>
          <div id='valuesBoxesContainer'>
            <div className='valuesBoxes yellowValuesBox'>
              <h3>Authenticity</h3>
              <p>I am the same person online as I am offline.</p>
            </div>
            <div className='valuesBoxes redValuesBox'>
              <h3>Respect</h3>
              <p>I treat every person I interact with as an equal.</p>
            </div>
            <div className='valuesBoxes blueValuesBox'>
              <h3>Edification</h3>
              <p>My focus is on providing value to my audience.</p>
            </div>
          </div>
        </div>
      </>
    );
  }