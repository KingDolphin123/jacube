import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

import "./SpotSection.css";
import CustomSongEmbed from "./CustomSongEmbed";
import JubileeCover from "../assets/JubileeCover.png";
import JubileeAcousticCover from "../assets/JubileeAcousticCover.png";

const SpotSection = ({ songWidth, spotSectionRef }) => {
  const [songDisplayWidth, setSongDisplayWidth] = useState(
    isMobile ? songWidth : "70vw"
  );

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

  useEffect(() => {
    setSongDisplayWidth(isMobile ? songWidth : "70vw");
  }, [songWidth]);

  const [yScroll, setyScroll] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setyScroll(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="spot" ref={spotSectionRef}>
      <div
        className="songDisplay"
        style={{
          width: songDisplayWidth,
          position: "relative",
          opacity: (yScroll - 350) / 250 ,
          border: "3px solid white",
          padding: "10px",
          // borderRadius: "19px",
          marginBottom: "50px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: "5px",
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
      </div>
    </div>
  );
};

export default SpotSection;
