import "./About.css";
import { useState, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import jacubelogo from "../assets/about.jpg";

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacityY = useTransform(
    scrollYProgress,
    [0.05, isMobile ? 0.4 : 0.3],
    ["0", "1"]
  );
  return (
    <div className="custom-container">
      <motion.div
        className="sticky-section"
        style={{
          width: "65vw",
          flexDirection: isMobile ? "column" : "row",
          opacity: opacityY,
        }}
        ref={ref}
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
      </motion.div>
    </div>
  );
};

export default About;
