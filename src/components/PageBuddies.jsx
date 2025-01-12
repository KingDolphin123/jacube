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
          top: "120vh",
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
          top: "125vh",
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
          top: "160vh",
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
          top: "180vh",
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
          top: "230vh",
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
          top: "220vh",
          left: "7vw",
          height: "3.5vmax",
        }}
      />
      <img
        src={dolphin}
        className="logo"
        style={{
          zIndex: 15,
          position: "absolute",
          top: "290vh",
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
          top: "270vh",
          right: "7vw",
          height: "2vmax",
        }}
      />
    </div>
  );
};

export default PageBuddies;
