import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import video from "./assets/intro.mp4";

import "./App.css";

function App() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
    setTimeout(() => {
      setIsLoaderVisible(false); // Hide loader after 1 second
    }, 1000); // 1-second delay
  };

  return (
    <div className="App">
      {/* Video Section */}
      {!isVideoFinished && (
        <div className="video-container">
          <video
            className="intro-video"
            src={video} // Add your video path here
            autoPlay
            muted
            loop={false} // Set loop to false to stop the video from looping
            onEnded={handleVideoEnd} // Set the state to true when video ends
          />
        </div>
      )}

      {/* Loader Section */}
      {isLoaderVisible && (
        <div className="loader-container">
          <div className="loader">Loading...</div>
        </div>
      )}
      {/* Main Content */}
      {isVideoFinished && !isLoaderVisible && (
        <div className="main-content">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
