import { useState } from 'react';
import './HeroPanel.css'
import photoshopCropTool from '../images/Cover - Photoshop Crop Tool.png'
import failingFast from '../images/Cover - Failing Fast.png'
import figmaPrototypes from '../images/Cover - Figma Prototypes.png'

export default function HeroPanel() {

  const [leftImageSrc, setLeftImageSrc] = useState(figmaPrototypes);
  const [featureImageSrc, setFeatureImageSrc] = useState(failingFast);
  const [rightImageSrc, setRightImageSrc] = useState(photoshopCropTool);

  function moveCarouselImageLeft() {
    if (configurationOne) {
      setLeftImageSrc();
      setFeatureImageSrc();
      setRightImageSrc();
    } else if (configurationTwo) {
      setLeftImageSrc();
      setFeatureImageSrc();
      setRightImageSrc();
    } else if (configurationThree) {
      setLeftImageSrc();
      setFeatureImageSrc();
      setRightImageSrc();
    }
  };

  function moveCarouselImageRight() {
    if (configurationOne) {
      setLeftImageSrc();
      setFeatureImageSrc();
      setRightImageSrc();
    } else if (configurationTwo) {
      setLeftImageSrc();
      setFeatureImageSrc();
      setRightImageSrc();
    } else if (configurationThree) {
      setLeftImageSrc();
      setFeatureImageSrc();
      setRightImageSrc();
    }
  }

  //the dots under the carousel will also loop around when the arrows are clicked
  //the yellow dot will stay with the yellow cover image, same with red and blue
  //clicking the dots will also cause the matching image to display in the center



    return (
      <>
      <div id='heroContainer' className='consistentPadding'>
        <div id='intro' >
          <h1>Create with Confidence</h1>
          <div className='blueBar'></div>
          <p>
          Hey there, I’m Emily Mills. 👋 I create short-form videos that help designers conquer imposter syndrome and create with confidence.
          </p>
        </div>
        <div id='carouselOuterContainer'>
          <div id='carouselInnerContainer'>
            <div id='carouselArrowLeft' onClick={() => moveCarouselImageLeft()}></div>
            <img id='hiddenImage' src={figmaPrototypes} alt='A cover design for a TikTok tutorial relating to graphic design.'/>
            <div id='carouselImagesContainer'>
              <a href='https://www.tiktok.com/@millsdesign.co' target='_blank' rel='noopener noreferrer'>
                <img className='carouselImage leftImage' src={leftImageSrc} alt='A cover design for a TikTok tutorial relating to graphic design.'/>
              </a>
              <a href='https://www.tiktok.com/@millsdesign.co/video/7370897206695595282?lang=en' target='_blank' rel='noopener noreferrer'>
                <img className='carouselImage featuredImage' src={featureImageSrc} alt='A cover design for a TikTok tutorial relating to graphic design.'/>
              </a>
              <a href='https://www.tiktok.com/@millsdesign.co/video/7364749904431959314?lang=en' target='_blank' rel='noopener noreferrer'>
                <img className='carouselImage rightImage' src={rightImageSrc} alt='A cover design for a TikTok tutorial relating to graphic design.'/>
              </a>
            </div>
            <div id='carouselArrowRight' onClick={() => moveCarouselImageRight()}></div>
          </div>
          <div id='dotsContainer'>
            <div className='dots blueDot'></div>
            <div className='dots yellowDot'></div>
            <div className='dots redDot'></div>
          </div>
        </div>
      </div>
      </>
    );
  }