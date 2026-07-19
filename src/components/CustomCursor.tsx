import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring animations for lag-free motion follower
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const innerXSpring = useSpring(cursorX, { damping: 45, stiffness: 450 });
  const innerYSpring = useSpring(cursorY, { damping: 45, stiffness: 450 });

  useEffect(() => {
    // Only display on devices that support a fine pointer (desktops)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the cursor (w-8/h-8)
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Determine if the hovered element is interactive
      const isInteractive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("[role='button']") || 
        target.closest(".interactive-hover");

      if (isInteractive) {
        setHovered(true);
        const text = (target.closest("[data-cursor-text]") as HTMLElement)?.dataset.cursorText;
        if (text) {
          setCursorText(text);
        }
      } else {
        setHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary z-[9999] pointer-events-none flex items-center justify-center font-mono text-[9px] font-bold text-accent1 tracking-wider overflow-hidden bg-transparent"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          boxShadow: hovered ? "0 0 20px rgba(0, 229, 255, 0.4)" : "0 0 10px rgba(124, 58, 237, 0.15)",
          borderColor: hovered ? "#00E5FF" : "#7C3AED",
        }}
        animate={{
          scale: hovered ? 1.8 : 1,
          backgroundColor: hovered ? "rgba(124, 58, 237, 0.1)" : "rgba(124, 58, 237, 0.0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      >
        {cursorText && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-glow-accent1 text-center"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Pinpoint Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent1 rounded-full z-[9999] pointer-events-none"
        style={{
          x: innerXSpring,
          y: innerYSpring,
          transform: "translate(12px, 12px)" // Center inside the 32x32 outer ring
        }}
        animate={{
          scale: hovered ? 0.3 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
