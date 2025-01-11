import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import "./HeroSection.css";

import j from "../assets/j.png";
import a from "../assets/a.png";
import c from "../assets/c.png";
import u from "../assets/u.png";
import b from "../assets/b.png";
import e from "../assets/e.png";
import downarrow from "../assets/downarrow.png";

const HeroSection = ({ boundingRef }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [isAtTop, setIsAtTop] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 500);
  }, []);

  const scrollDown = () => {
    const scrollDistance = window.innerHeight / 2.3;
    const scrollDuration = 1300;

    const start = window.scrollY;
    const end = start + scrollDistance;
    const startTime = performance.now();

    let animationFrameId;

    const easeOut = (t) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const scrollStep = (timestamp) => {
      const progress = (timestamp - startTime) / scrollDuration;
      const easedProgress = easeOut(progress);
      const newPosition = start + (end - start) * Math.min(easedProgress, 1);

      window.scrollTo(0, newPosition);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(scrollStep);
      }
    };

    const stopAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("wheel", stopAnimation);
      window.removeEventListener("touchmove", stopAnimation);
    };

    window.addEventListener("wheel", stopAnimation, { passive: true });
    window.addEventListener("touchmove", stopAnimation, { passive: true });

    animationFrameId = requestAnimationFrame(scrollStep);
  };
  const { scrollYProgress } = useScroll({});
  return (
    <section className="hero">
      <div className="jacube-letters-bounding" ref={boundingRef}>
        <div className="letter-container">
          <Letter
            src={j}
            alt="J"
            letterTitle={"letter letter-j"}
            scrollProgress={scrollYProgress}
            xSpeed={-6}
            ySpeed={1}
            scale={10}
            opacity={30}
            rotateX={90}
            rotateY={90}
            isAtTop={isAtTop}
          />
          <Letter
            src={a}
            alt="A"
            letterTitle={"letter letter-a"}
            scrollProgress={scrollYProgress}
            xSpeed={-3}
            ySpeed={6}
            scale={30}
            opacity={10}
            rotateX={60}
            rotateY={-90}
            isAtTop={isAtTop}
          />
          <Letter
            src={c}
            alt="C"
            letterTitle={"letter letter-c"}
            scrollProgress={scrollYProgress}
            xSpeed={-1}
            ySpeed={-3}
            scale={25}
            opacity={0}
            rotateX={20}
            rotateY={-60}
            isAtTop={isAtTop}
          />
          <Letter
            src={u}
            alt="U"
            letterTitle={"letter letter-u"}
            scrollProgress={scrollYProgress}
            xSpeed={3}
            ySpeed={1}
            scale={15}
            opacity={40}
            rotateX={90}
            rotateY={40}
            isAtTop={isAtTop}
          />
          <Letter
            src={b}
            alt="B"
            letterTitle={"letter letter-b"}
            scrollProgress={scrollYProgress}
            xSpeed={2}
            ySpeed={-4}
            scale={20}
            opacity={20}
            rotateX={70}
            rotateY={50}
            isAtTop={isAtTop}
          />
          <Letter
            src={e}
            alt="E"
            letterTitle={"letter letter-e"}
            scrollProgress={scrollYProgress}
            xSpeed={5}
            ySpeed={5}
            scale={20}
            opacity={10}
            rotateX={90}
            rotateY={90}
            isAtTop={isAtTop}
          />
        </div>
      </div>
      <motion.img
        src={downarrow}
        className="arrow"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: { duration: 2, ease: "easeInOut", repeat: Infinity },
        }}
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        onClick={scrollDown}
        style={{ opacity: hasLoaded ? 1 - isAtTop / 100 : 0 }}
      />
    </section>
  );
};

const Letter = ({
  src,
  scrollProgress,
  xSpeed,
  ySpeed,
  scale,
  opacity,
  rotateX,
  rotateY,
  letterTitle,
  isAtTop,
}) => {
  const translateX = useTransform(scrollProgress, [0, 1], [0, xSpeed * 300]);
  const translateY = useTransform(scrollProgress, [0, 1], [0, ySpeed * 200]);
  const translateScale = useTransform(
    scrollProgress,
    [0, 0.5],
    [1, scale / 100]
  );
  const translateOpacity = useTransform(
    scrollProgress,
    [0, 0.75],
    [1, opacity / 100]
  );
  const translateRotateX = useTransform(
    scrollProgress,
    [0, 0.25],
    [0, rotateX]
  );
  const translateRotateY = useTransform(
    scrollProgress,
    [0, 0.25],
    [0, rotateY]
  );
  return (
    <motion.div
      className={letterTitle}
      initial={
        isAtTop == 0
          ? {
              opacity: 0,
              x: xSpeed * 100 * 0.1,
              y: ySpeed * 100 * 0.1,
              rotateX: rotateX * 0.7,
              rotateY: rotateY * 0.7,
            }
          : false
      }
      animate={
        isAtTop == 0 ? { opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 } : {}
      }
      transition={isAtTop == 0 ? { duration: 0.8, ease: [0.5, 0, 0.2, 1] } : {}}
      style={{
        x: translateX,
        y: translateY,
        scale: translateScale,
        opacity: translateOpacity,
        rotateX: translateRotateX,
        rotateY: translateRotateY,
      }}
      draggable={false}
    >
      <img
        draggable={false}
        src={src}
        alt="letter"
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
};
export default HeroSection;
