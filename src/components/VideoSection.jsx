import React, { useEffect, useRef } from "react";
import backgroundvideo from "../assets/backgroundvideo.webm";


const VideoSection = ({ initHeight, initWidth }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && videoRef.current) {
        videoRef.current.play().catch(() => {
          console.log("Video playback failed on refocus.");
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
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
          width: "100vw",
          height: "100vh",
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
