import { useScroll, useTransform, motion } from "framer-motion";
import backgroundvideo from "../assets/backgroundvideo.webm";

const VideoSection = ({ initHeight, initWidth }) => {
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
        controls={false}
        autoPlay="autoPlay"
        loop="loop"
        muted
        defaultMuted
        playsinline
        oncontextmenu="return false;"
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
