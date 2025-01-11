import HeroSection from "../components/HeroSection";
import { useEffect, useRef, useState } from "react";

import "./Home.css";
import SpotSection from "../components/SpotSection";
import About from "../components/About";

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
    updateWidth(); // Set initial width

    return () => {
      window.removeEventListener("resize", updateWidth);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home">
      <HeroSection boundingRef={boundingRef} />
      <SpotSection songWidth={boundingWidth} />
      <About />
    </div>
  );
};

export default Home;
