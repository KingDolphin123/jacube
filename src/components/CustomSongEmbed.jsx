import React from "react";
import "./CustomSongEmbed.css";
import play from "../assets/play.png";
import { useState, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const CustomSongEmbed = ({ songUrl, coverArt, songName, artists }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacityY = useTransform(
    scrollYProgress,
    [0.05, isMobile ? 0.4 : 0.3],
    ["0", "1"]
  );
  return (
    <motion.div className="song-embed" ref={ref} style={{ opacity: opacityY }}>
      <a href={songUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={coverArt}
          alt={`${songName} cover`}
          className="cover-art"
          loading="lazy"
          onClick={() => window.open(songUrl, "_blank")}
        />
      </a>
      <div className="song-info">
        <a
          href={songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="song-title"
        >
          {songName}
        </a>
        <p className="artist">
          {artists.map((artist, index) => (
            <React.Fragment key={artist.name}>
              <a
                href={artist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="artist-link"
              >
                {artist.name}
              </a>
              {index < artists.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </p>
        <a
          href={songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="play-button"
        >
          <img src={play} style={{ height: "1.6rem", paddingRight: "8px" }} />{" "}
          Play on Spotify
        </a>
      </div>
    </motion.div>
  );
};

export default CustomSongEmbed;
