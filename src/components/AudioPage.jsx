import React, { useState, useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "./AudioPage.css";
import e from "../assets/1.mp3";
import f from "../assets/2.mp3";

const audioFiles = [
  { id: 1, src: "../assets/1.mp3", label: "Sound 1" },
  { id: 2, src: "../assets/2.mp3", label: "Sound 2" },
];

const AudioButton = ({ src, label }) => {
    const audioRef = useRef(new Audio(src));
  
    const playAudio = () => {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    };
  
    return (
      <button className="audio-button" onClick={playAudio}>
        {label}
      </button>
    );
  };
  
  const AudioPage = () => {
    return (
      <div className="audio-page">
        <h1>Play Audio Sample</h1>
        <AudioButton src={e} label="Play Sound 1" />
        <AudioButton src={f} label="Play Sound 2" />
      </div>
    );
  };
  
  export default AudioPage;
