import { useState, useEffect } from "react";
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

  return (
    <div className="wrapper">
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
        {title}
      </div>
    </div>
  );
};

export default SectionTitle;
