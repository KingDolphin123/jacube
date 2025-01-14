import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

import "./SectionTitle.css";

const SectionTitle = ({ title, direction, spotSectionHeight }) => {
  const [yScroll, setyScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setyScroll(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const maxTranslateX = window.innerWidth * 0.1;

  return (
    <div
      className="flexwrap"
      style={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <div
        className="wrapper"
        style={{
          width: "100vw",
          paddingLeft: "10px",
          paddingRight: "10px",
          display: "flex",
          alignItems: "flex-end",
          textAlign: "center"
        }}
      >
        <div
          className="text"
          style={{
            opacity: (yScroll - spotSectionHeight - 25) / 250,
            transform: `translateX(${
              direction == "left"
                ? Math.max(
                    (-yScroll - spotSectionHeight) * 1.4 + 500,
                    -maxTranslateX
                  )
                : Math.min(
                    (yScroll - spotSectionHeight) * 1.4 - 500,
                    maxTranslateX
                  )
            }px)`,
          }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
