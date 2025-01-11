import { useScroll, useTransform, motion } from "framer-motion";

import "./Navbar.css";

import jacubelogo from "../assets/jacubefull.png";

const Navbar = () => {
  const { scrollY } = useScroll();

  const navbarY = useTransform(scrollY, [200, 350], [-100, 0]);
  const opacity = useTransform(scrollY, [200, 350], [0, 1]);

  return (
    <motion.nav
      style={{
        y: navbarY,
        opacity: opacity,
        zIndex: 99999,
      }}
      className="navbar"
    >
      <img src={jacubelogo} className="logo" />
    </motion.nav>
  );
};

export default Navbar;
