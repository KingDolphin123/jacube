import { motion } from "framer-motion";

import "./Footer.css";

import insta from "../assets/insta.png";
import linked from "../assets/linked.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <motion.nav
      style={{
        zIndex: 3,
      }}
      className="footer"
    >
      <h1
        style={{
          paddingRight: "3px",
          fontSize: "1rem",
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
        href="https://www.instagram.com/miamidolphins/"
        target="_blank"
        rel="noreferrer"
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
    </motion.nav>
  );
};

export default Footer;
