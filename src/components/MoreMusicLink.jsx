import React from "react";
import { useState, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const MoreMusicLink = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacityY = useTransform(scrollYProgress, [0.05, 0.4], ["0", "1"]);

  const titleY = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.5 : 0.4],
    ["90%", "0%"]
  );

  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityY,
        zIndex: "3",
        position: "relative",
        y: titleY,
      }}
      animate={
        isInView
          ? {
              scale: [0.8, 1.2, 0.9, 1.05, 1],
            }
          : { scale: 1 }
      }
      transition={{ duration: .8, ease: "easeInOut" }}
    >
      <a
        href="https://open.spotify.com/artist/7yYcc6vOJDwrRqXz4x7Mma?si=a6E6_hW4QiWtQ1PbZVl4cw"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#E8E8E8",
          textDecoration: "none",
          fontSize: "16px",
          padding: "10px",
          display: "inline-block",
          // backgroundColor: "#E8E8E8",
          zIndex: "20",
          position: "relative",
          fontFamily: "'Circular-Std', sans-serif",
          transition: "opacity 0.2s ease-out",
          opacity: "1",
          border: "3px solid #E8E8E8",
        }}
        onMouseEnter={(e) => {
          e.target.style.opacity = "0.8";
          e.target.style.textDecoration = "underline";
        }}
        onMouseLeave={(e) => {
          e.target.style.opacity = "1";
          e.target.style.textDecoration = "none";
        }}
      >
        See more on Spotify
      </a>
    </motion.div>
  );
};

export default MoreMusicLink;
