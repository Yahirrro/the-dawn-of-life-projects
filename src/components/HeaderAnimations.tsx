"use client";

import { motion } from "framer-motion";
import { css } from "styled-system/css";

export const HeaderAnimationIntro: React.FC = () => {
  return (
    <>
      <motion.div
        className={css({
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 100,
          backgroundColor: "color(display-p3 0.0502 0.1585 0.2721)",
          pointerEvents: "none",
        })}
        animate={{
          backgroundColor: [
            "color(display-p3 0.0502 0.1585 0.2721)",
            "color(display-p3 0.3725 0.2667 0.2902)",
            // "color(display-p3 0.8952 0.6752 0.3451)",
            // "color(display-p3 0.349 0.5087 0.6775)",
            "color(display-p3 0.349 0.5087 0.6775)",
          ],
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 3,
          ease: "linear",
          opacity: { duration: 3, delay: 1, ease: "easeInOut" },
        }}
      ></motion.div>
      <motion.div
        className={css({
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 100,
          opacity: 0,
          pointerEvents: "none",
          bg: "linear-gradient(180deg, color(display-p3 1 1 1) 0%, color(display-p3 1 1 1 / 0.75) 7.5%, color(display-p3 1 1 1 / 0.54) 18.5%, color(display-p3 1 1 1 / 0.22) 43.5%, color(display-p3 1 1 1 / 0.12) 51.5%, color(display-p3 1 1 1 / 0.00) 71%)",
        })}
        animate={{
          opacity: [0, 0.45, 0],
        }}
        transition={{
          duration: 3,
          ease: "linear",
          opacity: { duration: 5, delay: 1, ease: "easeInOut" },
        }}
      ></motion.div>
    </>
  );
};
