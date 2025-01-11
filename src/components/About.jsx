import "./About.css";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

import jacubelogo from "../assets/about.jpg";

const About = ({ songWidth }) => {
  const [songDisplayWidth, setSongDisplayWidth] = useState(
    isMobile ? songWidth : "70vw"
  );

  useEffect(() => {
    setSongDisplayWidth(isMobile ? songWidth : "70vw");
  }, [songWidth]);
  return (
    <div className="custom-container">
      <div
        className="sticky-section"
        style={{
          width: songDisplayWidth,
          flexDirection: isMobile ? "columnn" : "row"
        }}
      >
        <img src={jacubelogo} className="logoAbout" />
        <div className="textblob">
          <div className="header">Hi!</div>
          <div className="subheader">i'm kingdolpin</div>
          <div className="textbody">
            i like dolphins and sour gummy worms. "Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
