import './App.css';
import Nav from './components/Nav.js';
import HeroPanel from './components/HeroPanel.js';
import BrandStoryPanel from './components/BrandStoryPanel.js';
import PromisesPanel from './components/PromisesPanel.js';
import CreatorRecsPanel from './components/CreatorRecsPanel.js';
import SocialsPanel from './components/SocialsPanel.1.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Nav/>
      <HeroPanel/>
      <BrandStoryPanel/>
      <PromisesPanel/>
      <CreatorRecsPanel/>
      <SocialsPanel/>
      <Footer/>
    </div>
  );
}
export default App;
