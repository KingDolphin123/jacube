import "./About.css";
import { useState, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import SplitType from "split-type";

import jacubelogo from "../assets/about.jpg";

const About = () => {
  const ref = useRef(null);
  const textRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacityY = useTransform(scrollYProgress, [0.05, 0.4], ["0", "1"]);

  const xMove = useTransform(scrollYProgress, [0.1, 0.4], ["150vw", "0vw"]);
  const smoothXMove = useSpring(xMove, { stiffness: 150, damping: 30 });

  const rotate = useTransform(scrollYProgress, [0.1, 0.4], ["8deg", "0deg"]);
  const smoothRotate = useSpring(rotate, { stiffness: 150, damping: 30 });

  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false, amount: 0.9 });

  useEffect(() => {
    const splitText = () => {
      const split = new SplitType(textRef.current, { types: "lines" });

      gsap.killTweensOf(split.lines);

      split.lines.forEach((line) => {
        gsap.fromTo(
          line,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              end: "top 10%",
              onEnter: () => {
                gsap.to(line, {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                });
              },
              onLeaveBack: () => {
                gsap.to(line, {
                  opacity: 0,
                  y: 50,
                  duration: 1,
                  ease: "power3.out",
                });
              },
              scrub: false,
            },
          }
        );
      });
    };

    splitText();

    const handleResize = () => {
      splitText();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      const split = new SplitType(textRef.current, { types: "lines" });
      split.revert();
    };
  }, []); 

  return (
    <div className="custom-container">
      <motion.div
        className="sticky-section"
        style={{
          width: "65vw",
          flexDirection: isMobile ? "column" : "row",
          opacity: opacityY,
          x: smoothXMove,
          rotate: smoothRotate,
        }}
        ref={ref}
      >
        <img
          src={jacubelogo}
          className="logoAbout"
          style={{
            paddingTop: isMobile ? "2vw" : "",
            width: isMobile ? "96%" : "40vw",
          }}
        />
        <div className="textblob">
          <div
            style={{
              display: "inline-block",
              textAlign: "left",
              marginLeft: "-.2vw",
            }}
          >
            <motion.div
              className="header"
              ref={headerRef}
              animate={
                isInView
                  ? {
                      rotate: [0, 15, -15, 10, -10, 5, -5, 0],
                    }
                  : { rotate: 0 }
              }
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                display: "inline-block",
                position: "relative",
                textAlign: "left",
              }}
            >
              Hi!
            </motion.div>
          </div>
          <div >
            <div className="subheader" ref={textRef}>i'm jacob</div>
            <div className="textbody" ref={textRef}>
              I've been involved with music for as long as I can remember.
              Started with piano for a few years (I forgot it all) and now
              guitar for over a decade. I started producing and writing in 2021
              and released my first single 'Falling' in May of 2023. My first
              album 'More than Birds' will be releasing in late April 2025, with
              the first single, 'Jubilee' having been released in November of
              2024.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
