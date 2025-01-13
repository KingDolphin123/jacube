import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

import "./SectionTitle.css";

const SectionTitle = ({
  title,
  direction,
  spotSectionHeight,
  songWidth,
  viewportHeight,
}) => {
  const [yScroll, setyScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setyScroll(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [songDisplayWidth, setSongDisplayWidth] = useState(
    isMobile ? songWidth : "70vw"
  );

  useEffect(() => {
    setSongDisplayWidth(isMobile ? songWidth : "70vw");
  }, [songWidth]);

  return (
    <div className="flexwrap">
      <div
        className="wrapper"
        style={{
          width: songDisplayWidth,
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <div
          className="text"
          style={{
            opacity: (yScroll - spotSectionHeight - 25) / 100,
            transform: `translateX(${
              direction == "left"
                ? (-yScroll - spotSectionHeight) * 1.4 + 500
                : (yScroll - spotSectionHeight) * 1.4 - 500
            }px)`,
          }}
        >
          {viewportHeight}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
