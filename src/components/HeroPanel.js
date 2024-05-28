import { useState } from 'react';
import './HeroPanel.css'
import photoshopCropTool from '../images/Cover - Photoshop Crop Tool.webp'
import failingFast from '../images/Cover - Failing Fast.webp'
import figmaPrototypes from '../images/Cover - Figma Prototypes.webp'

export default function HeroPanel() {

  const [configuration, setConfiguration] = useState(1);
  const [leftImageSrc, setLeftImageSrc] = useState(figmaPrototypes);
  const [featureImageSrc, setFeatureImageSrc] = useState(failingFast);
  const [rightImageSrc, setRightImageSrc] = useState(photoshopCropTool);

  const [leftImageLink, setLeftImageLink] = useState('https://www.tiktok.com/@millsdesign.co');
  const [featureImageLink, setFeatureImageLink] = useState('https://www.tiktok.com/@millsdesign.co/video/7370897206695595282?lang=en');
  const [rightImageLink, setRightImageLink] = useState('https://www.tiktok.com/@millsdesign.co/video/7364749904431959314?lang=en');

//clicking the arrows changes the img src:
// config 1 = prototypes, failing fast, crop tool
// config 2 = failing fast, crop tool, prototypes
// config 3 = crop tool, prototypes, failing fast


  function moveCarouselImageLeft() {
    if (configuration === 1) {
      setLeftImageSrc(photoshopCropTool);
      setLeftImageLink('https://www.tiktok.com/@millsdesign.co/video/7364749904431959314?lang=en');
      setFeatureImageSrc(figmaPrototypes);
      setFeatureImageLink('https://www.tiktok.com/@millsdesign.co');
      setRightImageSrc(failingFast);
      setRightImageLink('https://www.tiktok.com/@millsdesign.co/video/7370897206695595282?lang=e');
      setConfiguration(3);
    } else if (configuration === 2) {
      setLeftImageSrc(figmaPrototypes);
      setLeftImageLink('https://www.tiktok.com/@millsdesign.co');
      setFeatureImageSrc(failingFast);
      setFeatureImageLink('https://www.tiktok.com/@millsdesign.co/video/7370897206695595282?lang=e');
      setRightImageSrc(photoshopCropTool);
      setRightImageLink('https://www.tiktok.com/@millsdesign.co/video/7364749904431959314?lang=en');
      setConfiguration(1);
    } else if (configuration === 3) {
      setLeftImageSrc(failingFast);
      setLeftImageLink('https://www.tiktok.com/@millsdesign.co/video/7370897206695595282?lang=e');
      setFeatureImageSrc(photoshopCropTool);
      setFeatureImageLink('https://www.tiktok.com/@millsdesign.co/video/7364749904431959314?lang=en');
      setRightImageSrc(figmaPrototypes);
      setRightImageLink('https://www.tiktok.com/@millsdesign.co');
      setConfiguration(2);
    }
  };

  function moveCarouselImageRight() {
    if (configuration === 1) {
      setLeftImageSrc(failingFast);
      setLeftImageLink('https://www.tiktok.com/@millsdesign.co/video/7370897206695595282?lang=e');
      setFeatureImageSrc(photoshopCropTool);
      setFeatureImageLink('https://www.tiktok.com/@millsdesign.co/video/7364749904431959314?lang=en');
      setRightImageSrc(figmaPrototypes);
      setRightImageLink('https://www.tiktok.com/@millsdesign.co');
      setConfiguration(2);
    } else if (configuration === 2) {
      setLeftImageSrc(photoshopCropTool);
      setLeftImageLink('https://www.tiktok.com/@millsdesign.co/video/7364749904431959314?lang=en');
      setFeatureImageSrc(figmaPrototypes);
      setFeatureImageLink('https://www.tiktok.com/@millsdesign.co');
      setRightImageSrc(failingFast);
      setRightImageLink('https://www.tiktok.com/@millsdesign.co/video/7370897206695595282?lang=e');
      setConfiguration(3);
    } else if (configuration === 3) {
      setLeftImageSrc(figmaPrototypes);
      setLeftImageLink('https://www.tiktok.com/@millsdesign.co');
      setFeatureImageSrc(failingFast);
      setFeatureImageLink('https://www.tiktok.com/@millsdesign.co/video/7370897206695595282?lang=e');
      setRightImageSrc(photoshopCropTool);
      setRightImageLink('https://www.tiktok.com/@millsdesign.co/video/7364749904431959314?lang=en');
      setConfiguration(1);
    }
  }

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
              <a href={leftImageLink} target='_blank' rel='noopener noreferrer'>
                <img className='carouselImage leftImage' src={leftImageSrc} alt='A cover design for a TikTok tutorial relating to graphic design.'/>
              </a>
              <a href={featureImageLink} target='_blank' rel='noopener noreferrer'>
                <img className='carouselImage featuredImage' src={featureImageSrc} alt='A cover design for a TikTok tutorial relating to graphic design.'/>
              </a>
              <a href={rightImageLink} target='_blank' rel='noopener noreferrer'>
                <img className='carouselImage rightImage' src={rightImageSrc} alt='A cover design for a TikTok tutorial relating to graphic design.'/>
              </a>
            </div>
            <div id='carouselArrowRight' onClick={() => moveCarouselImageRight()}></div>
          </div>
          <div id='dotsContainer'>
            <div className='dots dot1'></div>
            <div className='dots dot2'></div>
            <div className='dots dot3'></div>
          </div>
        </div>
      </div>
      </>
    );
  }