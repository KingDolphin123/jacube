import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Home from "./pages/Home";

import "./App.css";

function App() {
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
