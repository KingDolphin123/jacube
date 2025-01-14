import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { isMobile, isTablet } from "react-device-detect";
import "./VideoSection.css";

import backgroundvideo from "../assets/backgroundvideo.webm";

const VideoSection = () => {
  const [yScroll, setyScroll] = useState(0);

  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({});

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && videoRef.current) {
        videoRef.current.load();
        videoRef.current
          .play()
          .catch(() => setTimeout(() => videoRef.current.play(), 500));
      }
    };

    const handleFocus = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => console.log("Focus retry failed."));
      }
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const getRandomPercentage = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const generateRandomClipPath50 = () => {
    const points = [
      `${getRandomPercentage(30, 45)}% ${getRandomPercentage(30, 45)}%`,
      `${getRandomPercentage(60, 70)}% ${getRandomPercentage(30, 45)}%`,
      `${getRandomPercentage(60, 70)}% ${getRandomPercentage(60, 70)}%`,
      `${getRandomPercentage(30, 45)}% ${getRandomPercentage(60, 70)}%`,
    ];
    return `polygon(${points.join(", ")})`;
  };

  useEffect(() => {
    const randomClipPath = generateRandomClipPath50();
    document.documentElement.style.setProperty(
      "--random-clip-path",
      randomClipPath
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setyScroll(currentScrollY);
      // console.log((currentScrollY - (isMobile ? 1000 : 750)) / 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: isTablet ? "1024px" : isMobile ? "820px" : "100vh",
        overflow: "hidden",
        opacity: -(yScroll - (isMobile ? 700 : 700)) / 100,
      }}
    >
      <div className="mask-animation">
        <video
          ref={videoRef}
          controls={false}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="video-reveal"
        >
          <source src={backgroundvideo} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
