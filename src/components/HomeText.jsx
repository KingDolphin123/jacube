import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { isMobile, isTablet } from "react-device-detect";
import { useRef } from "react";

const HomeText = ({ initHeight, initWidth }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(
    scrollYProgress,
    [0.24, isMobile ? 0.75 : 0.6],
    ["0%", "100%"]
  );

  return (
    <motion.div
      style={{
        y: titleY,
        top: "0",
        right: isMobile ? "0" : "10vw",
        mixBlendMode: "difference",
        display: "flex",
        justifyContent: isMobile ? "flex-start" : "flex-end",
        alignItems: "center",
        position: "absolute",
        textAlign: isMobile ? "left" : "right",
        height: initHeight,
        width: initWidth,
        zIndex: "1", 

      }}
    >
      <div
        style={{
          fontFamily: "'Marcovaldo Regular Trial', sans-serif",
          position: "absolute",
          top: isMobile ? "33vmin" : "11vmin",
          left: isMobile ? "10vw" : "",
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
          fontSize: "35vmin",
          lineHeight: "40vmin",
          filter: "drop-shadow(0px 0px 7px rgba(255, 255, 255, 1))",
        }}
      >
        Birds
      </div>
    </motion.div>
  );
};

export default HomeText;
