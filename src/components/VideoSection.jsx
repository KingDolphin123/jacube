import React, { useState, useEffect, useRef } from "react";
import { isMobile, isTablet } from "react-device-detect";
import "./VideoSection.css";

import backgroundvideo from "../assets/backgroundvideo.webm";

const VideoSection = () => {
  const [yScroll, setyScroll] = useState(0);

  const videoRef = useRef(null);

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

  const getRandomPercentage = (min, max, offset = 1) => {
    return (Math.random() * (max - min) + min) * offset;
  };

  const generateRandomClipPath50 = (offset = 1) => {
    const points = [
      `${getRandomPercentage(30, 45, offset)}% ${getRandomPercentage(
        30,
        45,
        offset
      )}%`,
      `${getRandomPercentage(60, 70, offset)}% ${getRandomPercentage(
        30,
        45,
        offset
      )}%`,
      `${getRandomPercentage(60, 70, offset)}% ${getRandomPercentage(
        60,
        70,
        offset
      )}%`,
      `${getRandomPercentage(30, 45, offset)}% ${getRandomPercentage(
        60,
        70,
        offset
      )}%`,
    ];
    return `polygon(${points.join(", ")})`;
  };

  useEffect(() => {
    const randomClipPath = generateRandomClipPath50(
      Math.random() * (0.9 - 0.7) + 0.7
    );
    document.documentElement.style.setProperty(
      "--random-clip-path",
      randomClipPath
    );
    const randomClipPath2 = generateRandomClipPath50(
      Math.random() * (1.3 - 1.1) + 1.1
    );
    document.documentElement.style.setProperty(
      "--random-clip-path2",
      randomClipPath2
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setyScroll(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
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
      <div
        className="text-mask-layer"
        // style={{ top: isTablet ? "1024px" : isMobile ? "820px" : "100vh" }}
      ></div>
    </div>
  );
};

export default VideoSection;
