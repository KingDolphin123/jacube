import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";


import "./App.css";

function App() {
  // const [isVideoFinished, setIsVideoFinished] = useState(false);
  // const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  // const handleVideoEnd = () => {
  //   setIsVideoFinished(true);
  //   setTimeout(() => {
  //     setIsLoaderVisible(false);
  //   }, 1000);
  // };

  return (
    <div className="App">
      {/* {!isVideoFinished && (
        <div className="video-container">
          <video
            className="intro-video"
            src={video}
            autoPlay
            muted
            loop={false}
            onEnded={handleVideoEnd}
          />
        </div>
      )}
      {isLoaderVisible && (
        <div className="loader-container">
          <div className="loader">Loading...</div>
        </div>
      )}
      {isVideoFinished && !isLoaderVisible && ( */}
      <div className="main-content">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
      {/* )} */}
    </div>
  );
}

export default App;
