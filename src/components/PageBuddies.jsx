import dolphin from "../assets/dolphin.png";
import dolphin2 from "../assets/dolphin2.png";
import note from "../assets/note.png";

import "./PageBuddies.css";

const PageBuddies = () => {
  return (
    <div>
      <img
        src={dolphin}
        className="logo"
        style={{
          zIndex: 15,
          position: "absolute",
          top: "53rem",
          left: "3vw",
          height: "2vmax",
        }}
      />
      <img
        src={note}
        className="logo"
        style={{
          zIndex: 15,
          position: "absolute",
          top: "55.2rem",
          right: "6vw",
          height: "3vmax",
        }}
      />
      <img
        src={dolphin2}
        className="logo"
        style={{
          zIndex: 15,
          position: "absolute",
          top: "80.7rem",
          right: "2vw",
          height: "1.5vmax",
        }}
      />
      <img
        src={note}
        className="logo"
        style={{
          zIndex: 15,
          position: "absolute",
          top: "89.5rem",
          left: "4vw",
          height: "2vmax",
        }}
      />
      <img
        src={dolphin}
        className="logo"
        style={{
          zIndex: 15,
          position: "absolute",
          top: "111.6rem",
          right: "4vw",
          height: "2.5vmax",
        }}
      />
      <img
        src={dolphin2}
        className="logo"
        style={{
          zIndex: 15,
          position: "absolute",
          top: "117.2rem",
          left: "5vw",
          height: "3.5vmax",
        }}
      />
      <img
        src={dolphin}
        className="logo"
        style={{
          zIndex: 15,
          position: "absolute",
          top: "147.1rem",
          left: "5vw",
          height: "2.25vmax",
        }}
      />
      <img
        src={note}
        className="logo"
        style={{
          zIndex: 15,
          position: "absolute",
          top: "139.3rem",
          right: "7vw",
          height: "2vmax",
        }}
      />
    </div>
  );
};

export default PageBuddies;
