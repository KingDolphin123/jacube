import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { isMobile } from "react-device-detect";

const SectionTitle2 = ({ title, header }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.9 : 0.75],
    ["90%", "0%"]
  );
  const headerY = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.8 : 0.65],
    ["500%", "0%"]
  );
  const opacityY = useTransform(
    scrollYProgress,
    [0.2, isMobile ? 0.6 : 0.4],
    ["0", "1"]
  );
  const maskPosition = useTransform(
    scrollYProgress,
    [0.3, isMobile ? 0.65 : 0.55],
    ["-100%", "0%"]
  );

  return (
    <div
      ref={ref}
      style={{
        padding: "70px",
        paddingBottom: "30px",
        overflow: "hidden",
      }}
    >
      <motion.div style={{ position: "relative" }}>
        <motion.div
          style={{
            fontSize: "20vmin",
            lineHeight: "1",
            y: titleY,
            opacity: opacityY,
            position: "relative",
            color: "#252525",
            zIndex: "10",
          }}
        >
          <motion.span
            style={{
              position: "relative",
              display: "inline-block",
              background: "linear-gradient(to right, #E8E8E8 50%, #252525 50%)",
              backgroundSize: "200% 100%",
              backgroundPosition: maskPosition,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </motion.span>
        </motion.div>

        <motion.h1
          style={{
            fontSize: "4vmin",
            y: headerY,
            opacity: opacityY,
            position: "relative",
            color: "#252525",
            zIndex: "10",
          }}
        >
          <motion.span
            style={{
              position: "relative",
              display: "inline-block",
              background: "linear-gradient(to right, #E8E8E8 50%, #252525 50%)",
              backgroundSize: "200% 100%",
              backgroundPosition: maskPosition,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {header}
          </motion.span>
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default SectionTitle2;
