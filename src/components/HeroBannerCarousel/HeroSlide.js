import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import { IconContext } from "react-icons";
import "./HeroBannerCarousel.css"; 

import { Box, Image, Heading } from 'grommet';

export const HeroSlide = (props) => (
    <Box
      direction="row"
      pad="medium"
      background={props.background}
      height="80vh" width="100vw" overflow="hidden"
    >
      <Box width="50%">
        <div className="hero-slide-box">
          <Heading level="2" style={props.style}>
            {props.title}
          </Heading>
          <Heading level="3" style={props.style}>
            {props.description}
          </Heading>
          {props.button &&
            <button onClick={props.button.onClick} 
                    className="btn-typo4 primary rounded green hero-button">
                <span className="text text-inline">Read the press release</span>
                <IconContext.Provider value={{ size: "2em" }}>
                    <BiRightArrowAlt/>
                </IconContext.Provider>
            </button>
            }
          {props.a &&
            <a class="btn-typo4 primary rounded green btn-ref" data-analytics-region-id="smart_marquee_carousel_1|card_1_link_2" 
                href={props.a.href} role="button"> 
                <span className="text text-inline">{props.a.text}</span>
                <IconContext.Provider value={{ size: "2em" }}>
                    <BiRightArrowAlt/>
                </IconContext.Provider>
            </a>
            }
        </div>
      </Box>
      {props.image &&
        <Box width="50%">
            <Image className="hero-child-img" src={props.image} ></Image>
        </Box>
      }  
    </Box>
);

export default HeroSlide;