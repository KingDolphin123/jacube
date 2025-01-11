import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";

import "./SpotSection.css";

const SpotSection = ({ songWidth }) => {
  const [songDisplayWidth, setSongDisplayWidth] = useState(
    isMobile ? songWidth : "70vw"
  );

  useEffect(() => {
    setSongDisplayWidth(isMobile ? songWidth : "60vw");
    console.log(isMobile);
  }, [songWidth]);

  const [yScroll, setyScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setyScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="spot">
      <div className="songDisplay" style={{ width: songDisplayWidth }}>
        <iframe
          style={{ borderRadius: "19px", opacity: (yScroll - 100) / 100, marginBottom: "2vh"}}
          src="https://open.spotify.com/embed/track/2igx5oDhXYUMP9KHPZC1BQ?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          style={{ borderRadius: "19px", opacity: (yScroll - 100) / 100 }}
          src="https://open.spotify.com/embed/track/0lMJSIrFsTSLHKdU5ekU8S?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotSection;
