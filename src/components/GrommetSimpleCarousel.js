import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { IconContext } from "react-icons";

import { Grommet, Box, Carousel } from "grommet";
import "./GrommetSimpleCarousel.css";

// Images
const bg_0 = "/images/bg_0.jpg";
const bg_1 = "/images/bg_1.jpg";
const bg_2 = "/images/bg_2.jpg";
const bg_3 = "/images/bg_3.jpg";
const bg_4 = "/images/bg_4.jpg";
const child_1 = "/images/child_1.jpg";
const child_2 = "/images/child_2.jpg";
const child_3 = "/images/child_3.jpg";
const child_4 = "/images/child_4.jpg";

export const Simple = () => (
  <Grommet>
    <Box align="center" pad="xlarge">
      <Carousel>
        <Box>
          <div
            className="flex-container"
            style={{
              backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.8) 0,rgba(0,0,0,.6) 25%,rgba(0,0,0,0)), url(${bg_0})`,
            }}
          >
            <div className="flex-item-left">
              <h1 className="hero-title text" style={{ color: "white" }}>
                HPE transforms data lifecycle management
              </h1>
              <p className="hero-description text" style={{ color: "white" }}>
                Announcing expanded HPE Alletra portfolio with new file, block
                and data protectoin services devilered through HPE GreenLake.
              </p>
              <a
                className="btn-typo4 primary rounded green btn-ref hero-button"
                data-analytics-region-id="smart_marquee_carousel_1|card_1_link_1"
                href="https://www.hpe.com/us/en/newsroom/press-release/2023/04/hpe-transforms-data-lifecycle-management-with-expanded-hpe-alletra-portfolio-with-new-file-block-and-data-protection-services.html"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text text-inline">Read the press release</span>
                <IconContext.Provider value={{ size: "2em" }}>
                  <BiRightArrowAlt />
                </IconContext.Provider>
              </a>
              <a
                className="btn-typo4 primary rounded green btn-ref hero-button"
                data-analytics-region-id="smart_marquee_carousel_1|card_1_link_2"
                data-analytics-assetname="HPE GreenLake Day for storage"
                hpe-video-overlay="/us/en/resources/home/hpe-greenlake-day-for-storage/_jcr_content.details.json"
                data-attribute-video-title="HPE GreenLake Day for storage"
                data-analytics-assettype="Video"
                href="https://www.hpe.com/us/en/home.html?media-id=%2Fus%2Fen%2Fresources%2Fhome%2Fhpe-greenlake-day-for-storage%2F_jcr_content.details.json"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <span className="text text-inline">
                  Watch the full announcement
                </span>
                <IconContext.Provider value={{ size: "2em" }}>
                  <BiRightArrowAlt />
                </IconContext.Provider>
              </a>
            </div>
            <div className="flex-item-right">
              <img className="hero-child-img-opaque" src={child_1} alt="" />
            </div>
          </div>
        </Box>
        <Box>
          <div
            className="flex-container"
            style={{
              backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.8) 0,rgba(0,0,0,.6) 25%,rgba(0,0,0,0)), url(${bg_1})`,
            }}
          >
            <div className="flex-item-left">
              <h1 className="hero-title text" style={{ color: "white" }}>
                HPE 2023 Cybersecurity Annual Report
              </h1>
              <p className="hero-description text" style={{ color: "white" }}>
                The HPE 2023 Cybersecurity Annual Report showcases HPE’s
                commitment to security and highlights initiatives launched in
                the past year to secure our customers’ edge-to-cloud experience.
              </p>
              <a
                className="btn-typo4 primary rounded green btn-ref hero-button"
                data-analytics-region-id="smart_marquee_carousel_1|card_2_link_1"
                hpe-iframe-modal-trigger="https://paths.ext.hpe.com/r/a00130859?cc=us&amp;utm_campaign=edg&amp;utm_medium=com-int&amp;lang=en&amp;jumpid=va_kndyexb61i&amp;utm_content=report&amp;utm_source=or&amp;lb-mode=overlay&amp;lb-height=100&amp;lb-width=100"
                target="_blank"
                rel="noreferrer"
                href="https://paths.ext.hpe.com/r/a00130859?cc=us&amp;utm_campaign=edg&amp;utm_medium=com-int&amp;lang=en&amp;jumpid=va_kndyexb61i&amp;utm_content=report&amp;utm_source=or&amp;lb-mode=overlay&amp;lb-height=100&amp;lb-width=100"
              >
                <span className="text">Read more </span>
                <IconContext.Provider value={{ size: "2em" }}>
                  <BiRightArrowAlt />
                </IconContext.Provider>
              </a>
            </div>
            <div className="flex-item-right">
              <img className="hero-child-img" src={child_1} alt="" />
            </div>
          </div>
        </Box>

        <Box>
          <div
            className="flex-container"
            style={{
              backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.8) 0,rgba(0,0,0,.6) 25%,rgba(0,0,0,0)), url(${bg_2})`,
            }}
          >
            <div className="flex-item-left">
              <h1 className="hero-title text" style={{ color: "white" }}>
                Save up to 33%
              </h1>
              <p className="hero-description text" style={{ color: "white" }}>
                Take advantage of special savings now for your growing business.
                Don’t miss out on this limited time offer!
              </p>
              <a
                className="btn-typo4 primary rounded green btn-ref hero-button"
                data-analytics-region-id="smart_marquee_carousel_1|card_3_link_1"
                href="https://www.hpe.com/us/en/solutions/smb/jrit-promotions.html?jumpid=in_smb_dm_cdeal#Offers"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text">See offers</span>
                <IconContext.Provider value={{ size: "2em" }}>
                  <BiRightArrowAlt />
                </IconContext.Provider>
              </a>
            </div>
            <div className="flex-item-right">
              <img className="hero-child-img" src={child_2} alt="" />
            </div>
          </div>
        </Box>

        <Box>
          <div
            className="flex-container"
            style={{
              backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.8) 0,rgba(0,0,0,.6) 25%,rgba(0,0,0,0)), url(${bg_3})`,
            }}
          >
            <div className="flex-item-left">
              <h1 className="hero-title text" style={{ color: "white" }}>
                HPE to acquire OpsRamp
              </h1>
              <p className="hero-description text" style={{ color: "white" }}>
                Advancing HPE GreenLake hybrid cloud leadership, with
                edge-to-cloud platform enhancements.
              </p>
              <a
                className="btn-typo4 primary rounded green btn-ref hero-button"
                data-analytics-region-id="smart_marquee_carousel_1|card_4_link_1"
                href="https://www.hpe.com/us/en/newsroom/press-release/2023/03/hewlett-packard-enterprise-to-acquire-opsramp-advancing-hybrid-cloud-leadership-and-expanding-hpe-greenlake-into-it-operations-management.html"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text">Read more</span>
                <IconContext.Provider value={{ size: "2em" }}>
                  <BiRightArrowAlt />
                </IconContext.Provider>
              </a>
            </div>
            <div className="flex-item-right">
              <img className="hero-child-img" src={child_3} alt="" />
            </div>
          </div>
        </Box>

        <Box>
          <div
            className="flex-container"
            style={{
              backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.8) 0,rgba(0,0,0,.6) 25%,rgba(0,0,0,0)) ,url(${bg_4})`,
            }}
          >
            <div className="flex-item-left">
              <h1 className="hero-title text" style={{ color: "white" }}>
                Winning with speed and scale
              </h1>
              <p className="hero-description text" style={{ color: "white" }}>
                Western Canada Lottery Corporation innovates to deliver gaming
                experiences when and where players want them.
              </p>
              <a
                className="btn-typo4 primary rounded grey btn-ref hero-button"
                data-analytics-region-id="smart_marquee_carousel_1|card_5_link_1"
                data-analytics-uaid="3709e5a6-70b6-4557-ab18-79d4ed12a099"
                data-analytics-assettype="success story"
                data-analytics-assetid="a50005620enw"
                href="https://www.hpe.com/psnow/doc/a50005620enw.pdf?jumpid=in_pdfviewer-psnow"
                data-analytics-assetname="Insights for enhanced gaming, stronger communities – Western Canada Lottery Corporation"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text">Learn more</span>
                <IconContext.Provider value={{ size: "2em" }}>
                  <BiRightArrowAlt />
                </IconContext.Provider>
              </a>
            </div>
            <div className="flex-item-right">
              <img className="hero-child-img" src={child_4} alt="" />
            </div>
          </div>
        </Box>
      </Carousel>
    </Box>
  </Grommet>
);

Simple.parameters = {
  chromatic: { disable: true },
};

export default Simple;
