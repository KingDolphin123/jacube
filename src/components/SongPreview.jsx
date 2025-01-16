import React from "react";
import { useState, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "./SongPreview.css";
import audio from "../assets/In His Hand.mp3";

const SongPreview = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacityY = useTransform(scrollYProgress, [0.05, 0.4], ["0", "1"]);
  const xMove = useTransform(scrollYProgress, [0.1, 0.4], ["-150vw", "0vw"]);
  const smoothXMove = useSpring(xMove, { stiffness: 150, damping: 30 });

  const rotate = useTransform(scrollYProgress, [0.1, 0.4], ["-8deg", "0deg"]);
  const smoothRotate = useSpring(rotate, { stiffness: 150, damping: 30 });
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityY,
        x: smoothXMove,
        rotate: smoothRotate,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "180px",
      }}
    >
      <div
        style={{
          height: "15vh",
          width: "65vw",
          padding: "10px",
          border: "3px solid white",
        }}
      >
        <AudioPlayer
          src={audio}
          showJumpControls={false}
          customVolumeControls={[]}
          customProgressBarSection={["PROGRESS_BAR"]}
          customAdditionalControls={[]} // Removes loop and other additional buttons
          style={{
            height: "15vh",
            color: "blue", // Icon color
            backgroundColor: "#E8E8E8", // Player background color
          }}
        />
      </div>
    </motion.div>
  );
};

export default SongPreview;
