import { useScroll, useTransform, motion } from "framer-motion";

import "./Footer.css";

import insta from "../assets/insta.png";
import linked from "../assets/linked.png";

const Footer = () => {
  return (
    <motion.nav
      style={{
        zIndex: 3,
      }}
      className="footer"
    >
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
