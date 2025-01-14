import HeroSection from "../components/HeroSection";
import DownArrow from "../components/DownArrow";
import HomeText from "../components/HomeText";

import { useEffect, useRef, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import "./Home.css";
import SpotSection from "../components/SpotSection";
import Navbar from "../components/Navbar";
import VideoSection from "../components/VideoSection";

import Footer from "../components/Footer";
import PageBuddies from "../components/PageBuddies";

import SectionTitle from "../components/SectionTitle";
import About from "../components/About";
import Cursor from "../components/Cursor";

const Home = () => {
  const boundingRef = useRef(null);
  const [boundingWidth, setBoundingWidth] = useState(0);
  const [spotSectionHeight, setSpotSectionHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(
    document.documentElement.scrollTop
  );
  const [initHeight, setinitHeight] = useState(window.innerHeight);
  const [initWidth, setinitWidth] = useState(window.innerWidth);

  const spotSectionRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (boundingRef.current) {
        setBoundingWidth(boundingRef.current.offsetWidth);
      }
      if (spotSectionRef.current) {
        setSpotSectionHeight(spotSectionRef.current.clientHeight);
      }
      setinitHeight(window.innerHeight);
      setinitWidth(window.innerWidth);
    };
    const updateScrollY = () => {
      setViewportHeight(document.documentElement.scrollTop);
      updateDimensions();
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (boundingRef.current) resizeObserver.observe(boundingRef.current);

    window.addEventListener("scroll", updateScrollY);

    return () => {
      window.removeEventListener("scroll", updateScrollY);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="home">
      <Navbar />
      <VideoSection initHeight={initHeight} initWidth={initWidth} />
      <DownArrow
        initHeight={isTablet ? "800x" : isMobile ? "650px" : "800px"}
      />
      <HomeText initHeight={initHeight} initWidth={initWidth} />
      <SectionTitle
        title="DONALD TRUMP AMONG US IMPOSTER SUSSY BAKA"
        direction="left"
        spotSectionHeight={-50}
        songWidth={boundingWidth}
        viewportHeight={viewportHeight}
      />
      <SectionTitle
        title="DONALD TRUMP AMONG US IMPOSTER SUSSY BAKA"
        direction="right"
        spotSectionHeight={-50}
        songWidth={boundingWidth}
        viewportHeight={viewportHeight}
      />

      <SpotSection spotSectionRef={spotSectionRef} songWidth={boundingWidth} />
      {/* <SectionTitle
        title="ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT"
        direction="right"
        spotSectionHeight={spotSectionHeight + 250}
        songWidth={boundingWidth}
        viewportHeight={viewportHeight}
      />
      <SectionTitle
        title="ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT"
        direction="left"
        spotSectionHeight={spotSectionHeight + 250}
        songWidth={boundingWidth}
        viewportHeight={viewportHeight}
      /> */}
      <About songWidth={boundingWidth} />
      {!isMobile && <Cursor />}
      <PageBuddies />
      <Footer />
    </div>
  );
};

export default Home;
