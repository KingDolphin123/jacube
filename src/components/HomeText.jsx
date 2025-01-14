import { useScroll, useTransform, motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const HomeText = ({ initHeight, initWidth }) => {
  return (
    <div
      style={{
        top: "0",
        right: isMobile ? "0" : "10vw",
        mixBlendMode: "difference",
        display: "flex",
        justifyContent: isMobile ? "center" : "flex-end",
        alignItems: "center",
        position: "absolute",
        textAlign: isMobile ? "center" : "right",
        height: initHeight, // Full screen height for centering
        width: initWidth, // Full screen width for centering
      }}
    >
      {" "}
      <div
        style={{
          fontFamily: "'Marcovaldo Regular Trial', sans-serif",
          position: "absolute",
          top: isMobile ? "33vmin" : "11vmin",
          //   right: "10vw",
          //   top: "50%", // Center vertically
          //   left: "50%",
          fontSize: "35vmin",
          lineHeight: isMobile ? "1" : "1.2",
          whiteSpace: isMobile ? "normal" : "nowrap",
        }}
      >
        More Than
      </div>
      <div
        style={{
          fontFamily: "'Vivaldi Italic', sans-serif",
          position: "absolute",
          top: isMobile ? "100vmin" : "41vmin",
          //   right: "10vw",
          fontSize: "35vmin",
          lineHeight: "40vmin",
        }}
      >
        Birds
      </div>
    </div>
  );
};

export default HomeText;
