import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import Lenis from "@studio-freight/lenis";

import Home from "./pages/Home";
import jacubelogo from "./assets/jacubefull.svg";

import "./App.css";

function App() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [500, 650], [0, 1]);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  function Preview() {
    window.location.replace("https://imgur.com/a/P6vt0V5");
    return null;
  }

  return (
    <div className="App">
      <div className="main-content">
        {/* <motion.nav

        > */}
        <motion.nav
          className="navbarroot"
          style={{
            opacity: opacity,
          }}
        >
          <img src={jacubelogo} className="navbarmask" alt="Logo" />
        </motion.nav>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/preview" element={<Preview />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
