import './App.css';
import Nav from './components/Nav.js';
import VideoPanel from './components/VideoPanel.js';
import BrandStoryPanel from './components/BrandStoryPanel.js';
import ValuesPanel from './components/ValuesPanel.js';
import CreatorRecsPanel from './components/CreatorRecsPanel.js';
import SocialsPanel from './components/SocialsPanel.1.js';
// import Footer from './components/Footer.js';


function App() {
  return (
    <div>
      <Nav />
      <VideoPanel />
      <BrandStoryPanel />
      <ValuesPanel />
      <CreatorRecsPanel />
      <SocialsPanel />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
