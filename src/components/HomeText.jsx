import { useScroll, useTransform, motion } from "framer-motion";
import { isMobile, isTablet } from "react-device-detect";

const HomeText = ({ initHeight, initWidth }) => {
  return (
    <div
      style={{
        top: "0",
        right: isMobile ? "0" : "10vw",
        mixBlendMode: "difference",
        display: "flex",
        justifyContent: isMobile ? "flex-start" : "flex-end",
        alignItems: "center",
        position: "absolute",
        textAlign: isMobile ? "left" : "right",
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
          left: isMobile ? "10vw" : "",

          //   right: "10vw",
          //   top: "50%", // Center vertically
          //   left: "50%",
          fontSize: "35vmin",
          lineHeight: isMobile ? ".9" : "1.2",
          whiteSpace: isMobile ? "normal" : "nowrap",
          filter: "drop-shadow(0px 0px 7px rgba(255, 255, 255, 1))",

        }}
      >
        More Than
      </div>
      <div
        style={{
          fontFamily: "'Vivaldi Italic', sans-serif",
          position: "absolute",
          top: isMobile ? "95vmin" : "41vmin",
          left: isMobile ? "8vw" : "",

          //   right: "10vw",
          fontSize: "35vmin",
          lineHeight: "40vmin",
          filter: "drop-shadow(0px 0px 7px rgba(255, 255, 255, 1))",

        }}
      >
        Birds
      </div>
    </div>
  );
};

export default HomeText;
