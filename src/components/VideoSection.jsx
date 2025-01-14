import React, { useEffect, useRef } from "react";
import { isMobile, isTablet } from "react-device-detect";
import "./VideoSection.css";

import backgroundvideo from "../assets/backgroundvideo.webm";

const VideoSection = () => {
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

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: isTablet ? "1024px" : isMobile ? "820px" : "100vh",
        overflow: "hidden",
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
