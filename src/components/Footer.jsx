import { motion } from "framer-motion";

import "./Footer.css";

import insta from "../assets/insta.png";
import linked from "../assets/linked.png";
import github from "../assets/github.png";
import FooterScroller from "./FooterScroller";
import { isMobile } from "react-device-detect";

const Footer = () => {
  return (
    <motion.nav
      style={{
        zIndex: 3,
      }}
      className="footer"
    >
      <div style={{
        display:"flex",
        alignItems:"center"
      }}>
        <h1
          style={{
            paddingRight: "10px",
            fontSize: "1rem",
            display: "inline-block",
          }}
        >
          Check out the source code! {"-> "}{" "}
        </h1>
        <a
          href="https://github.com/KingDolphin123/jacube"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github" className="socials" src={github}></img>
        </a>
        <a
          href="https://www.instagram.com/miamidolpzzzzzzhins/"
          target="_blank"
          rel="noreferrer"
          style={{
            marginRight: ".2vw",
          }}
        >
          <img alt="instagram" className="socials" src={insta}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/jacob-lee-230984218/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin" className="socials" src={linked}></img>
        </a>
      </div>
    </motion.nav>
  );
};

export default Footer;
