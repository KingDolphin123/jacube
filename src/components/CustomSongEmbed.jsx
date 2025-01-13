import React from "react";
import "./CustomSongEmbed.css";
import play from "../assets/play.png";

const CustomSongEmbed = ({ songUrl, coverArt, songName, artists }) => {
  return (
    <div className="song-embed">
      <a href={songUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={coverArt}
          alt={`${songName} cover`}
          className="cover-art"
          onClick={() => window.open(songUrl, "_blank")}
        />
      </a>
      <div className="song-info">
        <a
          href={songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="song-title"
        >
          {songName}
        </a>
        <p className="artist">
          {artists.map((artist, index) => (
            <React.Fragment key={artist.name}>
              <a
                href={artist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="artist-link"
              >
                {artist.name}
              </a>
              {index < artists.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </p>
        <a
          href={songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="play-button"
        >
          <img src={play} style={{ height: "1.6rem", paddingRight: "8px" }} />{" "}
          Play on Spotify
        </a>
      </div>
    </div>
  );
};

export default CustomSongEmbed;
