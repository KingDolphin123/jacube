import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import downarrow from "../assets/downarrow.png";
import { isMobile } from "react-device-detect";

const DownArrow = ({ initHeight }) => {
  const [isAtTop, setIsAtTop] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  const scrollDown = ({ initHeight }) => {
    const scrollDistance = 800;
    const scrollDuration = 1300;

    const start = window.scrollY;
    const end = start + scrollDistance;
    const startTime = performance.now();

    let animationFrameId;

    const easeOut = (t) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const scrollStep = (timestamp) => {
      const progress = (timestamp - startTime) / scrollDuration;
      const easedProgress = easeOut(progress);
      const newPosition = start + (end - start) * Math.min(easedProgress, 1);

      window.scrollTo(0, newPosition);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(scrollStep);
      }
    };

    const stopAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("wheel", stopAnimation);
      window.removeEventListener("touchmove", stopAnimation);
    };

    window.addEventListener("wheel", stopAnimation, { passive: true });
    window.addEventListener("touchmove", stopAnimation, { passive: true });

    animationFrameId = requestAnimationFrame(scrollStep);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtTop(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    setHasLoaded(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <motion.img
        src={downarrow}
        className="arrow"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          y: { duration: 2, ease: "easeInOut", repeat: Infinity },
        }}
        whileHover={{
          scale: 1.5,
          transition: {
            type: "spring",
            stiffness: 190,
            damping: 10,
            duration: 0.4,
          },
        }}
        onClick={scrollDown}
        style={{
          opacity: hasLoaded ? 1 - isAtTop / 250 : 0,
          top: initHeight,
          height: "2rem",
          width: "auto",
          position: "absolute",
          left: isMobile ? "43.5vw" : "48.5vw",
          zIndex: "9999",
          mixBlendMode: "difference",
          filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 1))",
        }}
      />
    </section>
  );
};
export default DownArrow;
