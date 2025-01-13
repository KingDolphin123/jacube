import React from "react";
import "./CustomSongEmbed.css";

const CustomSongEmbed = ({ songUrl, coverArt, songName, artists }) => {
  return (
    <div className="song-embed">
      {/* Song Cover Art */}
      <a href={songUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={coverArt}
        //   alt={`${songName} cover`}
          className="cover-art"
        //   onClick={() => window.open(songUrl, "_blank")} // Inline function for image click
        />
      </a>
      <div className="song-info">
        {/* Song Name */}
        <a
          href={songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="song-title"
        >
          {songName}
        </a>
        {/* Artist(s) */}
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
        {/* Play Button */}
        <a
          href={songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="play-button"
        >
          ▶ Play on Spotify
        </a>
      </div>
    </div>
  );
};

export default CustomSongEmbed;
