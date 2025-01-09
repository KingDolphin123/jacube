import { motion, useScroll, useTransform } from "framer-motion"; // Add useScroll and useTransform
import { useEffect, useRef, useState } from "react"; // Add useState
import Lenis from "@studio-freight/lenis";

import "./HeroSection.css";

import j from "../assets/j.png";
import a from "../assets/a.png";
import c from "../assets/c.png";
import u from "../assets/u.png";
import b from "../assets/b.png";
import e from "../assets/e.png";

const HeroSection = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef();
  const { scrollYProgress } = useScroll({});

  return (
    <section className="hero" ref={container}>
      {/* <div className="scroll-progress-display">
        <p>Scroll Progress: {scrollProgressValue.toFixed(3)}</p>
      </div> */}
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
        />
      </div>
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
  ); // Rotate from 0 to 45 degrees on X axis
  const translateRotateY = useTransform(
    scrollProgress,
    [0, 0.25],
    [0, rotateY]
  ); // Rotate from 0 to 45 degrees on Y axis

  return (
    <motion.div
      className={letterTitle}
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
