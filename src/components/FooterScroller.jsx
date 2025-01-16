import React, { useEffect } from "react";
import "./FooterScroller.css";

const FooterScroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // Add animation if reduced motion is not preferred
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // Duplicate content until width is at least twice the viewport width
      while (scrollerInner.scrollWidth < scroller.offsetWidth * 2) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      }

      // Apply custom animation duration
      const duration = "80s";
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