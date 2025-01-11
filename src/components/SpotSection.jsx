import "./SpotSection.css";

const SpotSection = ({ songWidth }) => {
  return (
    <div className="spot" >
      <div className="songDisplay"style={{ width: songWidth }}>
        <iframe
          style={{ borderRadius: "19px" }}
          src="https://open.spotify.com/embed/track/2igx5oDhXYUMP9KHPZC1BQ?utm_source=generator&theme=1"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotSection;
