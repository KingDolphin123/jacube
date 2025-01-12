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

  const [yScroll, setyScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setyScroll(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="custom-container">
      <div
        className="sticky-section"
        style={{
          width: songDisplayWidth,
          flexDirection: isMobile ? "column" : "row",
          opacity: (yScroll - (isMobile ? 1000 : 1400)) / 100,
        }}
      >
        <img src={jacubelogo} className="logoAbout" />
        <div className="textblob">
          <div className="header">Hi!</div>
          <div className="subheader">i'm jacob</div>
          <div className="textbody">
            I've been involved with music for as long as I can remember. Started
            with piano for a few years (I forgot it all) and now guitar for over
            a decade. I started producing and writing in 2021 and released my
            first single 'Falling' in May of 2023. My first album 'More than
            Birds' will be releasing in late April 2025, with the first single,
            'Jubilee' having been released in November of 2024.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
