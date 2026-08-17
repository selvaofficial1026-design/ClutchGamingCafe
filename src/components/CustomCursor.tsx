"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Default true to avoid flash on mobile
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Check if device is a touchscreen / mobile device
    const isTouch = window.matchMedia("(hover: none) or (pointer: coarse)").matches;
    if (isTouch) {
      setIsTouchDevice(true);
      return; // Do NOT attach mouse listeners on mobile/touch screens
    }

    setIsTouchDevice(false);

    let rafId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
          rafId = null;
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const hovering = Boolean(
        target.tagName?.toLowerCase() === "a" ||
        target.tagName?.toLowerCase() === "button" ||
        target.closest?.("a, button, [role='button']")
      );
      setIsHovering(hovering);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Zero render & zero overhead on mobile touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] hidden [@media(hover:hover)]:block">
      <motion.div
        className="w-4 h-4 bg-[#00D2FF] rounded-full flex items-center justify-center mix-blend-difference shadow-[0_0_10px_#00D2FF]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{
          scale: isHovering ? 4 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        {isHovering && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-1 h-1 bg-coffee-dark rounded-full"
          />
        )}
      </motion.div>
    </div>
  );
}
