import React from "react";
import "./AutoplayButtonSlider.css";
// JSX
import HeroSlider, { Slide, Nav } from "hero-slider";
// import Wrapper from "../UI/Wrapper/Wrapper";
// import Title from "../UI/Title/Title";

const bg_0 = "/images/bg_0.jpg";

const app = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      set
      initialSlide={1}
      style={{
        backgroundColor: "#000",
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 2000,
        height: "100vh",
      }}
    >
      {/* <Wrapper>
        <Title></Title>
      </Wrapper>
      <AutoplayButton /> */}

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#000000",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: "bg_0",
          // backgroundAnimation: "fade",
        }}
      >
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

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#000000",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: bg_0,
          // backgroundAnimation: "fade",
        }}
      >
        <div className="hero-container">
          <h1>Slide 2</h1>
          <p className="hero-description">Lorem Ipsum</p>
          <button>Read more</button>
        </div>
      </Slide>

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#000000",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: bg_0,
          // backgroundAnimation: "fade",
        }}
      >
        <div className="hero-container">
          <h1>Slide 3</h1>
          <p className="hero-description">Lorem Ipsum</p>
          <button>Read more</button>
        </div>
      </Slide>

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#000000",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: bg_0,
          // backgroundAnimation: "fade",
        }}
      >
        <div className="hero-container">
          <h1>Slide 4</h1>
          <p className="hero-description">Lorem Ipsum</p>
          <button>Read more</button>
        </div>
      </Slide>

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#000000",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: bg_0,
          // backgroundAnimation: "fade",
        }}
      >
        <div className="hero-container">
          <h1>Slide 5</h1>
          <p className="hero-description">Lorem Ipsum</p>
          <button className="hero-button">Read more</button>
        </div>
      </Slide>

      <Nav />
    </HeroSlider>
  );
};

export default app;
