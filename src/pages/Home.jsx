import HeroSection from "../components/HeroSection";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

import "./Home.css";
import SpotSection from "../components/SpotSection";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
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

  const spotSectionRef = useRef(null); // Reference for SpotSection
  const [spotSectionHeight, setSpotSectionHeight] = useState(0); // Store height

  useEffect(() => {
    // Update height when component mounts
    if (spotSectionRef.current) {
      setSpotSectionHeight(spotSectionRef.current.clientHeight);
    }

    // Update height on window resize (optional)
    const handleResize = () => {
      if (spotSectionRef.current) {
        setSpotSectionHeight(spotSectionRef.current.clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="home">
      <Navbar />
      <HeroSection boundingRef={boundingRef} />
      <SectionTitle title={"MUSIC"} direction={"left"} spotSectionHeight={0} />
      <SpotSection
        spotSectionRef={spotSectionRef}
        songWidth={boundingWidth}
        onIframeEnter={handleIframeEnter}
        onIframeLeave={handleIframeLeave}
      />
      <SectionTitle
        title={"ABOUT"}
        direction={"right"}
        spotSectionHeight={spotSectionHeight}
      />
      <About />


      {!isMobile && <Cursor isIframeHovered={isIframeHovered} />}
    </div>
  );
};

export default Home;
