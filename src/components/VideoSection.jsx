import React, { useEffect, useRef } from "react";
import { isMobile, isTablet } from "react-device-detect";

import backgroundvideo from "../assets/backgroundvideo.webm";

const VideoSection = ({ initHeight, initWidth }) => {
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
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: isTablet ? "1024px" : isMobile ? "820px" : "100vh",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        controls={false}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: "0.9",
        }}
      >
        <source src={backgroundvideo} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoSection;
