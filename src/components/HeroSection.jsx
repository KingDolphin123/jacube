import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import "./HeroSection.css";

import j from "../assets/j.png";
import a from "../assets/a.png";
import c from "../assets/c.png";
import u from "../assets/u.png";
import b from "../assets/b.png";
import e from "../assets/e.png";
import downarrow from "../assets/downarrow.png";

const HeroSection = ({ boundingRef }) => {
  const [isAtTop, setIsAtTop] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { scrollYProgress } = useScroll({});
  const scrollY = useSpring(scrollYProgress, { stiffness: 50, damping: 15 });

  const scrollDown = () => {
    const scrollDistance = 700;
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtTop(scrollPosition);
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    setHasLoaded(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="hero"
      style={{
        height: "50rem",
        marginTop: "-3rem",
      }}
    >
      <div
        className="jacube-letters-bounding"
        ref={boundingRef}
        style={{ height: "40rem" }}
      >
        <div className="letter-container">
          <Letter
            src={j}
            alt="J"
            letterTitle={"letter letter-j"}
            scrollProgress={scrollY}
            xSpeed={-6}
            ySpeed={6}
            scale={10}
            opacity={30}
            rotateX={90}
            rotateY={90}
            isAtTop={isAtTop}
            index={0}
          />
          <Letter
            src={a}
            alt="A"
            letterTitle={"letter letter-a"}
            scrollProgress={scrollY}
            xSpeed={-3}
            ySpeed={9.5}
            scale={30}
            opacity={10}
            rotateX={60}
            rotateY={-90}
            isAtTop={isAtTop}
            index={1}
          />
          <Letter
            src={c}
            alt="C"
            letterTitle={"letter letter-c"}
            scrollProgress={scrollY}
            xSpeed={-1}
            ySpeed={10}
            scale={25}
            opacity={0}
            rotateX={20}
            rotateY={-60}
            isAtTop={isAtTop}
            index={2}
          />
          <Letter
            src={u}
            alt="U"
            letterTitle={"letter letter-u"}
            scrollProgress={scrollY}
            xSpeed={2}
            ySpeed={8}
            scale={15}
            opacity={40}
            rotateX={90}
            rotateY={40}
            isAtTop={isAtTop}
            index={3}
          />
          <Letter
            src={b}
            alt="B"
            letterTitle={"letter letter-b"}
            scrollProgress={scrollY}
            xSpeed={2}
            ySpeed={11}
            scale={20}
            opacity={0}
            rotateX={70}
            rotateY={50}
            isAtTop={isAtTop}
            index={4}
          />
          <Letter
            src={e}
            alt="E"
            letterTitle={"letter letter-e"}
            scrollProgress={scrollY}
            xSpeed={5}
            ySpeed={5}
            scale={20}
            opacity={10}
            rotateX={90}
            rotateY={90}
            isAtTop={isAtTop}
            index={5}
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
          transition: {
            type: "spring",
            stiffness: 190,
            damping: 10,
            duration: 0.4,
          },
        }}
        onClick={scrollDown}
        style={{
          opacity: hasLoaded ? 1 - isAtTop / 250 : 0,
          top: "25rem",
        }}
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
  index,
}) => {
  const translateX = useTransform(scrollProgress, [0, 1], [0, xSpeed * 300]);
  const translateY = useTransform(scrollProgress, [0, 1], [0, ySpeed * 200]);
  // const translateScale = useTransform(
  //   scrollProgress,
  //   [0, 0.25],
  //   [1, scale / 100]
  // );
  const translateOpacity = useTransform(
    scrollProgress,
    [0, 0.3],
    [1, opacity / 100]
  );
  const translateRotateX = useTransform(
    scrollProgress,
    [0, 0.15],
    [0, rotateX]
  );
  const translateRotateY = useTransform(
    scrollProgress,
    [0, 0.15],
    [0, rotateY]
  );

  const staggerDelay = index * 0.3;

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
      animate={{
        ...(isAtTop === 0 && {
          opacity: 1,
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
        }),
        scale: [1, 0.9, 1],
        filter: [
          "drop-shadow(0px 0px 70px rgba(255, 255, 255, 0.6))",
          "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.8))",
          "drop-shadow(0px 0px 70px rgba(255, 255, 255, 0.6))",
        ],
      }}
      transition={{
        ...(isAtTop === 0 ? { duration: 0.8, ease: [0.5, 0, 0.2, 1] } : {}),

        ...(isAtTop === 0
          ? {
              scale: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                delay: staggerDelay,
              },
              filter: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                delay: staggerDelay + 0.15,
              },
            }
          : {}),
      }}
      style={{
        x: translateX,
        y: translateY,
        // scale: translateScale,
        opacity: translateOpacity,
        rotateX: translateRotateX,
        rotateY: translateRotateY,
        height: isMobile ? "150px" : "200px",
        filter: "drop-shadow(0px 0px 40px rgba(255, 255, 255, 0.5))",
        // filter: "box-shadow: 0px 0px 40px rgba(255, 255, 255, 0.5)"
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
