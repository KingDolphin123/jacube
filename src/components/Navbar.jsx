import { useScroll, useTransform, motion } from "framer-motion";

import "./Navbar.css";

import jacubelogo from "../assets/jacubefull.svg";

const Navbar = () => {
  return (
    <div
      className="navbarroot"
      style={{
        opacity: 1,
      }}
    >
      <img src={jacubelogo} className="navbarmask" alt="Logo" />
    </div>
  );
};

export default Navbar;
