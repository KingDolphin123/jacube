import { Link } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const { scrollY } = useScroll();

  const navbarY = useTransform(scrollY, [200, 350], [-100, 0]);
  return (
    <motion.nav
      style={{
        y: navbarY,
      }}
      className="navbar"
    >
      <h1>Artist Name</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
