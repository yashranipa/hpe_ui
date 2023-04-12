import React from "react";
// JSX
import HeroSlider, { Slide, Nav, AutoplayButton } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";

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
      <Wrapper>
        <Title></Title>
      </Wrapper>
      <AutoplayButton />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#8A8A8A",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: bg_0,
          // backgroundAnimation: "fade",
        }}
      >
        <div>
          <h1>Slide 1</h1>
          <p>Lorem Ipsum</p>
          <button>Read more</button>
        </div>
      </Slide>

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#8A8A8A",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: bg_0,
          // backgroundAnimation: "fade",
        }}
      >
        <div>
          <h1>Slide 2</h1>
          <p>Lorem Ipsum</p>
          <button>Read more</button>
        </div>
      </Slide>

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#8A8A8A",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: bg_0,
          // backgroundAnimation: "fade",
        }}
      >
        <div>
          <h1>Slide 3</h1>
          <p>Lorem Ipsum</p>
          <button>Read more</button>
        </div>
      </Slide>

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#8A8A8A",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: bg_0,
          // backgroundAnimation: "fade",
        }}
      >
        <div>
          <h1>Slide 4</h1>
          <p>Lorem Ipsum</p>
          <button>Read more</button>
        </div>
      </Slide>

      <Nav />
    </HeroSlider>
  );
};

export default app;
