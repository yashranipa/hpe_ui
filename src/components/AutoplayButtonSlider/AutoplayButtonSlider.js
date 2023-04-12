import React from 'react'
// JSX
import HeroSlider, {
  Slide,
  Nav,
  AutoplayButton
} from 'hero-slider'
import Wrapper from '../UI/Wrapper/Wrapper'
import "./AutoplayButtonSlider.css"; 

// Images
const bg_0 = '/images/bg_0.jpg';


const app = () => {
  return (
    <HeroSlider
      slidingAnimation='left_to_right'
      orientation='horizontal'
      set
      initialSlide={1}
      style={{
        backgroundColor: '#000'
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 2000,
        height: '100vh'
      }}>
      <AutoplayButton />

      <Slide
        // shouldRenderMask
        background={{
          backgroundColor: "#000000",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: bg_0,
          // backgroundAnimation: "fade",
        }}
      >
      <Wrapper>
      <div className="hero-container">
          <h1 className="hero-title">
            HPE transforms data lifecycle management
          </h1>
          <p className="hero-description">
            Announcing expanded HPE Alletra portfolio with new file, block and
            data protectoin services devilered through HPE GreenLake.
          </p>
          <button className="btn-typo4 primary rounded green">Read the press release</button>
          {/* <a class="btn-typo4 primary rounded green" data-analytics-region-id="smart_marquee_carousel_1|card_1_link_2" data-analytics-assetname="HPE GreenLake Day for storage" hpe-video-overlay="/us/en/resources/home/hpe-greenlake-day-for-storage/_jcr_content.details.json" data-attribute-video-title="HPE GreenLake Day for storage" data-analytics-assettype="Video" href="javascript:void(0)" role="button" aria-label="HPE GreenLake Day for storage"> <span class="text">Watch the full announcement</span> <span class="icon arrow-icon"></span> </a> */}
          <button className="btn-typo4 primary rounded green">Watch the full announcement</button>
        </div>
      </Wrapper>
        <div className="hero-container">
          <h1 className="hero-title">
            HPE transforms data lifecycle management
          </h1>
          <p className="hero-description">
            Announcing expanded HPE Alletra portfolio with new file, block and
            data protectoin services devilered through HPE GreenLake.
          </p>
          <button className="hero-button">Read the press release</button>
          <button className="hero-button">Watch the full announcement</button>
        </div>
      </Slide>

      {/* <Slide
        // shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: tenryuJiTemple,
          backgroundAnimation: 'fade'
        }} /> */}

      {/* <Slide
        // shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: hakone,
          backgroundAnimation: 'fade'
        }} />

      <Slide
        // shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: byodoInTemple,
          backgroundAnimation: 'fade'
        }} /> */}

      <Nav />
    </HeroSlider>
  )
}

export default app
