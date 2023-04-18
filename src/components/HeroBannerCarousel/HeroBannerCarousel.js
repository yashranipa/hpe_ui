import React from 'react';

import { Grommet, Carousel } from 'grommet';
import HeroSlide from "./HeroSlide";

export const HeroBannerCarousel = () => (
  <Grommet >
    <Carousel fill>
      <HeroSlide title="HPE transforms data lifecycle management"
                  description=
                      "Announcing expanded HPE Alletra portfolio with new file, block and data protectoin services devilered through HPE GreenLake."
                  background="url('/images/bg_0.jpg')" 
                  button = {{ text: "Read the press release", 
                              onClick: () => {
                                window.open('https://www.hpe.com/us/en/newsroom/press-release/2023/04/hpe-transforms-data-lifecycle-management-with-expanded-hpe-alletra-portfolio-with-new-file-block-and-data-protection-services.html', '_blank', 'noreferrer');}
                              }}
                  a = {{ text: "Watch the full announcement", 
                          href: "https://www.hpe.com/us/en/home.html?media-id=%2Fus%2Fen%2Fresources%2Fhome%2Fhpe-greenlake-day-for-storage%2F_jcr_content.details.json"}}               
                />
      <HeroSlide title="HPE 2023 Cybersecurity Annual Report"
                description=
                    "The HPE 2023 Cybersecurity Annual Report showcases HPE’s commitment to security and highlights initiatives launched in the past year to secure our customers’ edge-to-cloud experience."
                background="url('/images/bg_1.jpg')" 
                a = {{ text: "Read more", 
                        href: "https://paths.ext.hpe.com/r/a00130859?cc=us&amp;utm_campaign=edg&amp;utm_medium=com-int&amp;lang=en&amp;jumpid=va_kndyexb61i&amp;utm_content=report&amp;utm_source=or&amp;lb-mode=overlay&amp;lb-height=100&amp;lb-width=100"}}               
               image="/images/child_1.jpg"/>
      <HeroSlide title="Save up to 33%"
                description=
                    "Take advantage of special savings now for your growing business. Don’t miss out on this limited time offer!"
                background="url('/images/bg_2.jpg')" 
                a = {{ text: "See offers", 
                        href: "https://www.hpe.com/us/en/solutions/smb/jrit-promotions.html?jumpid=in_smb_dm_cdeal#Offers"}}               
               image="/images/child_2.jpg"/>
      <HeroSlide title="HPE to acquire OpsRamp"
                description=
                    "Advancing HPE GreenLake hybrid cloud leadership, with edge-to-cloud platform enhancements."
                background="url('/images/bg_3.jpg')" 
                a = {{ text: "Read more", 
                        href: "https://www.hpe.com/us/en/newsroom/press-release/2023/03/hewlett-packard-enterprise-to-acquire-opsramp-advancing-hybrid-cloud-leadership-and-expanding-hpe-greenlake-into-it-operations-management.html"}}               
               image="/images/child_3.jpg"
               style={{color: "black"}}/>
      <HeroSlide title="Winning with speed and scale"
                description=
                    "Western Canada Lottery Corporation innovates to deliver gaming experiences when and where players want them."
                background="url('/images/bg_4.jpg')" 
                a = {{ text: "Learn more", 
                        href: "https://www.hpe.com/psnow/doc/a50005620enw.pdf?jumpid=in_pdfviewer-psnow"}}               
               image="/images/child_4.jpg"/>
    </Carousel>
  </Grommet>
);

export default HeroBannerCarousel;