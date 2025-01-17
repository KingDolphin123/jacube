import HeroSection from "../components/HeroSection";
import DownArrow from "../components/DownArrow";
import HomeText from "../components/HomeText";

import { useEffect, useRef, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import "./Home.css";
import SpotSection from "../components/SpotSection";
import Navbar from "../components/Navbar";
import VideoSection from "../components/VideoSection";
import MoreMusicLink from "../components/MoreMusicLink";

import Footer from "../components/Footer";
import PageBuddies from "../components/PageBuddies";

import SectionTitle from "../components/SectionTitle";
import SectionTitle2 from "../components/SectionTitle2";

import About from "../components/About";
import Cursor from "../components/Cursor";
import SongPreview from "./../components/SongPreview";
import FooterScroller from './../components/FooterScroller';


const Home = () => {
  const boundingRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(
    document.documentElement.scrollTop
  );
  const [initHeight, setinitHeight] = useState(window.innerHeight);
  const [initWidth, setinitWidth] = useState(window.innerWidth);

  const spotSectionRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      // setBoundingWidth(boundingRef.current.offsetWidth);

      setinitHeight(window.innerHeight);
      setinitWidth(window.innerWidth);
    };
    const updateScrollY = () => {
      setViewportHeight(document.documentElement.scrollTop);
      updateDimensions();
    };

    updateDimensions();

    window.addEventListener("scroll", updateScrollY);

    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []);

  return (
    <div className="home">
      <Navbar />
      <VideoSection initHeight={initHeight} initWidth={initWidth} />
      <DownArrow initHeight={isTablet ? "800x" : isMobile ? "650px" : "85vh"} />
      <HomeText initHeight={initHeight} initWidth={initWidth} />

      <SectionTitle2 title={"MUSIC"} header={"joyful noises"} />
      <SpotSection />
      <MoreMusicLink />

      <SectionTitle2 title={"ABOUT"} header={"a little bit about me"} />
      <About />

      <SectionTitle2 title={"PREVIEW"} header={"a taste of the future"} />
      <SongPreview />

      <FooterScroller />
      <Footer />
      {!isMobile && <Cursor />}
    </div>
  );
};

export default Home;
