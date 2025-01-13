import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";

import "./SpotSection.css";
import CustomSongEmbed from "./CustomSongEmbed";
import JubileeCover from "../assets/JubileeCover.png";

const SpotSection = ({
  songWidth,
  onIframeEnter,
  onIframeLeave,
  spotSectionRef,
}) => {
  const [songDisplayWidth, setSongDisplayWidth] = useState(
    isMobile ? songWidth : "70vw"
  );

  const songData = {
    songUrl: "https://open.spotify.com/track/2igx5oDhXYUMP9KHPZC1BQ",
    coverArt: JubileeCover,
    songName: "Jubilee",
    artists: [
      {
        name: "jacube",
        url: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
      },
      {
        name: "Rachael Tang",
        url: "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V",
      },
      {
        name: "Josh Yu",
        url: "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V",
      },
    ],
  };

  useEffect(() => {
    setSongDisplayWidth(isMobile ? songWidth : "70vw");
  }, [songWidth]);

  const [yScroll, setyScroll] = useState(0);
  const [cursorDiv, setCursorDiv] = useState("cursor-overlay");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setyScroll(currentScrollY);
      if ((currentScrollY - 350) / 100 > 0) {
        setCursorDiv("destroydivhaha");
      } else {
        setCursorDiv("cursor-overlay");
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
          opacity: (yScroll - 350) / 100,
          border: "3px solid white",
          padding: "10px",
          // borderRadius: "19px",
          marginBottom: "50px",
        }}
        // onMouseEnter={onIframeEnter}
        // onMouseLeave={onIframeLeave}
      >
        <CustomSongEmbed
          songUrl={songData.songUrl}
          coverArt={songData.coverArt}
          songName={songData.songName}
          artists={songData.artists}
        />
        {/* <iframe
          style={{
            borderRadius: "19px",
            marginBottom: "7px",
            position: "relative",
          }}
          src="https://open.spotify.com/embed/track/2igx5oDhXYUMP9KHPZC1BQ?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe> */}
        <iframe
          style={{
            borderRadius: "19px",
            position: "relative",
          }}
          src="https://open.spotify.com/embed/track/0lMJSIrFsTSLHKdU5ekU8S?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        {!isMobile && (
          <div
            className={cursorDiv}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 99999,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default SpotSection;
