import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";

import "./SpotSection.css";

const SpotSection = ({ songWidth, onIframeEnter, onIframeLeave }) => {
  const [songDisplayWidth, setSongDisplayWidth] = useState(
    isMobile ? songWidth : "70vw"
  );

  useEffect(() => {
    setSongDisplayWidth(isMobile ? songWidth : "60vw");
    console.log(isMobile);
  }, [songWidth]);

  const [yScroll, setyScroll] = useState(0);
  const [cursorDiv, setCursorDiv] = useState("cursor-overlay");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setyScroll(currentScrollY);
      if ((currentScrollY - 100) / 100 > 0) {
        setCursorDiv("destroydivhaha");
      } else {
        setCursorDiv("cursor-overlay");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="spot">
      <div
        className="songDisplay"
        style={{ width: songDisplayWidth, position: "relative" }}
      >
        <iframe
          style={{
            borderRadius: "19px",
            opacity: (yScroll - 100) / 100,
            marginBottom: "7px",
            zIndex: 1,
            position: "relative",
          }}
          src="https://open.spotify.com/embed/track/2igx5oDhXYUMP9KHPZC1BQ?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          onMouseEnter={onIframeEnter}
          onMouseLeave={onIframeLeave}
        ></iframe>
        <iframe
          style={{
            borderRadius: "19px",
            opacity: (yScroll - 100) / 100,
            marginBottom: "1300",
          }}
          src="https://open.spotify.com/embed/track/0lMJSIrFsTSLHKdU5ekU8S?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          onMouseEnter={onIframeEnter}
          onMouseLeave={onIframeLeave}
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
