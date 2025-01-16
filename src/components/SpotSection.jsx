import { useState, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import "./SpotSection.css";
import CustomSongEmbed from "./CustomSongEmbed";
import JubileeCover from "../assets/JubileeCover.png";
import JubileeAcousticCover from "../assets/JubileeAcousticCover.png";

const SpotSection = () => {
 

  const jubileeSongData = {
    songUrl: "https://open.spotify.com/track/2igx5oDhXYUMP9KHPZC1BQ",
    coverArt: JubileeCover,
    songName: "Jubilee",
    artists: [
      {
        name: "jacube",
        url: "https://open.spotify.com/artist/7yYcc6vOJDwrRqXz4x7Mma",
      },
      {
        name: "Rachael Tang",
        url: "https://open.spotify.com/artist/7bvMVli2S2HlEZGVLBGeEB",
      },
      {
        name: "Josh Yu",
        url: "https://open.spotify.com/artist/2bgqAjI8yFxSWZpewAunSw",
      },
    ],
  };
  const jubileeAcousticSongData = {
    songUrl: "https://open.spotify.com/track/0lMJSIrFsTSLHKdU5ekU8S",
    coverArt: JubileeAcousticCover,
    songName: "Jubilee - Acoustic",
    artists: [
      {
        name: "jacube",
        url: "https://open.spotify.com/artist/7yYcc6vOJDwrRqXz4x7Mma",
      },
      {
        name: "Sam Pak",
        url: "https://open.spotify.com/artist/6r64RvBljrPiGgkA0q8Fc1",
      },
      {
        name: "Rachael Tang",
        url: "https://open.spotify.com/artist/7bvMVli2S2HlEZGVLBGeEB",
      },
      {
        name: "Josh Yu",
        url: "https://open.spotify.com/artist/2bgqAjI8yFxSWZpewAunSw",
      },
    ],
  };
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
    <div>
      {" "}
      <div className="spot">
        <motion.div
          ref={ref}
          className="songDisplay"
          style={{
            width: "65vw",
            position: "relative",
            border: "3px solid #E8E8E8",
            padding: "10px",
            opacity: opacityY,
            marginBottom: isMobile ? "10px" : "20px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "5px",
            x: smoothXMove,
            rotate: smoothRotate,
            backgroundColor: "#111416",
          }}
        >
          <CustomSongEmbed
            songUrl={jubileeSongData.songUrl}
            coverArt={jubileeSongData.coverArt}
            songName={jubileeSongData.songName}
            artists={jubileeSongData.artists}
          />
          <CustomSongEmbed
            songUrl={jubileeAcousticSongData.songUrl}
            coverArt={jubileeAcousticSongData.coverArt}
            songName={jubileeAcousticSongData.songName}
            artists={jubileeAcousticSongData.artists}
          />
        </motion.div>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "7",
        }}
      >
       
      </div>
      
    </div>
  );
};

export default SpotSection;
