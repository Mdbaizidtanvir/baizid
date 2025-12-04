"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CURSOR_COLORS = {
  h1: "#22c55e",       // green-400
  button: "#f97316",   // orange-500
  img: "#0ea5e9",      // sky-500
  default: "#22c55e",  // green-400
};

const CustomCursor = () => {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  const [cursorColor, setCursorColor] = useState(CURSOR_COLORS.default);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dynamic cursor color based on hovered element
      const tagName = e.target.tagName.toLowerCase();
      if (tagName === "h1") setCursorColor(CURSOR_COLORS.h1);
      else if (tagName === "button" || e.target.closest("button")) setCursorColor(CURSOR_COLORS.button);
      else if (tagName === "img") setCursorColor(CURSOR_COLORS.img);
      else setCursorColor(CURSOR_COLORS.default);
    };

    const handleMouseDown = () => {
      setClicked(true);
      gsap.to(cursorDot.current, { scale: 1.5, duration: 0.15, ease: "power2.out" });
      gsap.to(cursorRing.current, { scale: 1.5, opacity: 0.4, duration: 0.15, ease: "power2.out" });
      setTimeout(() => {
        setClicked(false);
        gsap.to(cursorDot.current, { scale: 1, duration: 0.2 });
        gsap.to(cursorRing.current, { scale: 1, opacity: 1, duration: 0.2 });
      }, 150);
    };

    // Hover effects on text, buttons, and images
    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === "h1" || target.tagName.toLowerCase() === "p") {
        gsap.to(target, {
          scale: 1.05,
          textShadow: "0 0 15px #22c55e, 0 0 25px #22c55e70",
          duration: 0.3,
        });
        gsap.to(cursorDot.current, { scale: 2, duration: 0.2 });
      } else if (target.tagName.toLowerCase() === "button") {
        gsap.to(target, {
          scale: 1.05,
          boxShadow: "0 0 15px #f97316, 0 0 25px #f9731670",
          duration: 0.3,
        });
        gsap.to(cursorDot.current, { scale: 2.2, duration: 0.2 });
      } else if (target.tagName.toLowerCase() === "img") {
        gsap.to(target, { scale: 1.05, filter: "drop-shadow(0 0 10px #0ea5e9)", duration: 0.3 });
        gsap.to(cursorDot.current, { scale: 2, duration: 0.2 });
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      gsap.to(target, { scale: 1, textShadow: "none", boxShadow: "none", filter: "none", duration: 0.3 });
      gsap.to(cursorDot.current, { scale: 1, duration: 0.2 });
    };

    // GSAP smooth trailing
    gsap.ticker.add(() => {
      if (cursorDot.current && cursorRing.current) {
        gsap.to(cursorDot.current, { x: mouseX, y: mouseY, duration: 0.1, ease: "power3.out" });
        gsap.to(cursorRing.current, { x: mouseX, y: mouseY, duration: 0.15, ease: "power3.out" });
      }
    });

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    document.querySelectorAll("h1, p, button, img").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      document.querySelectorAll("h1, p, button, img").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      gsap.ticker.removeAll();
    };
  }, []);

  return (
    <>
      {/* Small Inner Dot */}
      <div
        ref={cursorDot}
        className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full w-3 h-3"
        style={{ zIndex: 9999, backgroundColor: cursorColor }}
      />

      {/* Outer Ring */}
      <div
        ref={cursorRing}
        className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full w-8 h-8 border-2"
        style={{
          zIndex: 9999,
          borderColor: cursorColor,
          boxShadow: `0 0 10px ${cursorColor}, 0 0 20px ${cursorColor}50`,
        }}
      />
    </>
  );
};

export default CustomCursor;
