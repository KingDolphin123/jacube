import HeroSection from "../components/HeroSection";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import "./Home.css";
import SpotSection from "../components/SpotSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageBuddies from "../components/PageBuddies";


import SectionTitle from "../components/SectionTitle";
import About from "../components/About";
import Cursor from "../components/Cursor";

const Home = () => {
  const boundingRef = useRef(null);
  const [boundingWidth, setBoundingWidth] = useState(0);
  const [spotSectionHeight, setSpotSectionHeight] = useState(0);
  const [isIframeHovered, setIsIframeHovered] = useState(false);

  const spotSectionRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (boundingRef.current) {
        setBoundingWidth(boundingRef.current.offsetWidth);
      }
      if (spotSectionRef.current) {
        setSpotSectionHeight(spotSectionRef.current.clientHeight);
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (boundingRef.current) resizeObserver.observe(boundingRef.current);

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      resizeObserver.disconnect();
    };
  }, []);

  const handleIframeEnter = () => setIsIframeHovered(true);
  const handleIframeLeave = () => setIsIframeHovered(false);

  return (
    <div className="home">
      <Navbar />
      <HeroSection boundingRef={boundingRef} />
      <SectionTitle
        title="MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC"
        direction="left"
        spotSectionHeight={0}
        songWidth={boundingWidth}
      />
      <SectionTitle
        title="MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC MUSIC"
        direction="right"
        spotSectionHeight={0}
        songWidth={boundingWidth}
      />

      <SpotSection
        spotSectionRef={spotSectionRef}
        songWidth={boundingWidth}
        onIframeEnter={handleIframeEnter}
        onIframeLeave={handleIframeLeave}
      />
      <SectionTitle
        title="ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT"
        direction="right"
        spotSectionHeight={spotSectionHeight + 300}
        songWidth={boundingWidth}
      />
      <SectionTitle
        title="ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT"
        direction="left"
        spotSectionHeight={spotSectionHeight + 300}
        songWidth={boundingWidth}
      />
      <About songWidth={boundingWidth} />
      {!isMobile && <Cursor isIframeHovered={isIframeHovered} />}
      <PageBuddies />
      <Footer />
    </div>
  );
};

export default Home;
