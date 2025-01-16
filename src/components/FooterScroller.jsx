import React, { useEffect } from "react";
import "./FooterScroller.css";
import { isMobile } from "react-device-detect";

const FooterScroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      while (scrollerInner.scrollWidth < scroller.offsetWidth * 2) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      }

      const duration = isMobile ? "40s" : "80s";
      scroller.style.setProperty("--_animation-duration", duration);
    });
  }

  return (
    <div className="scroller">
      <ul className="tag-list scroller__inner">
        <li>More</li>
        <li>Than</li>
        <li>Birds</li>
      </ul>
    </div>
  );
};

export default FooterScroller;
