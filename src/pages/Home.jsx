import HeroSection from "../components/HeroSection";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

import "./Home.css";
import SpotSection from "../components/SpotSection";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Cursor from "../components/Cursor";

const Home = () => {
  const boundingRef = useRef(null);
  const [boundingWidth, setBoundingWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (boundingRef.current) {
        setBoundingWidth(boundingRef.current.offsetWidth);
      }
    };

    const observer = new ResizeObserver(updateWidth);
    if (boundingRef.current) observer.observe(boundingRef.current);

    window.addEventListener("resize", updateWidth);
    updateWidth();

    return () => {
      window.removeEventListener("resize", updateWidth);
      observer.disconnect();
    };
  }, []);

  const [isIframeHovered, setIsIframeHovered] = useState(false);

  const handleIframeEnter = () => {
    setIsIframeHovered(true);
  };

  const handleIframeLeave = () => {
    setIsIframeHovered(false);
  };
  return (
    <div className="home">
      <Navbar />
      <HeroSection boundingRef={boundingRef} />
      <SpotSection
        songWidth={boundingWidth}
        onIframeEnter={handleIframeEnter}
        onIframeLeave={handleIframeLeave}
      />
      {/* <About /> */}

      {!isMobile && <Cursor isIframeHovered={isIframeHovered} />}
    </div>
  );
};

export default Home;
