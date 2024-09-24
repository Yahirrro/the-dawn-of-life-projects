/* eslint-disable @next/next/no-img-element */
"use client";

import { useWindowHeight } from "@react-hook/window-size";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { sva } from "styled-system/css";

const headerHandsStyle = sva({
  slots: ["hand1", "hand2"],
  base: {
    hand1: {
      position: "fixed",
      top: "-30%",
      left: "-15%",
      width: "95vw",
      zIndex: -2,
      pointerEvents: "none",
      "2xl": {
        width: "120vh",
        left: "0%",
      },
      xlDown: {
        top: "-40%",
        left: "-10%",
      },
      lgDown: {
        top: "10%",
        left: "-15%",
      },
    },
    hand2: {
      position: "fixed",
      bottom: "-20%",
      right: "-40%",
      width: "95vw",
      zIndex: -2,
      pointerEvents: "none",
      "2xl": {
        width: "120vh",
        right: "-20%",
      },
      xlDown: {
        bottom: "-40vh",
        right: "-35%",
      },
      lgDown: {
        bottom: "15%",
        right: "-30%",
      },
    },
  },
});

export const HeaderHands: React.FC<{
  wrapperRef: React.RefObject<HTMLDivElement>;
}> = ({ wrapperRef }) => {
  const styles = headerHandsStyle();
  const { scrollY } = useScroll();

  const height = useWindowHeight();
  const isCompact = useMediaQuery({
    query: "screen and (max-width: 47.9975rem)",
  });
  const [isHeaderScrolled, setIsHeaderScrolled] = useState<
    "header" | "scrolling" | "content"
  >("header");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > height / 2) {
      setIsHeaderScrolled("scrolling");
    }
    if (latest > height) {
      setIsHeaderScrolled("content");
    }
    if (latest < height / 2) {
      setIsHeaderScrolled("header");
    }
  });

  const scrollingY_hand1 = useTransform(scrollY, (latest) => {
    const percent = latest / (height / 2);
    if (isCompact) {
      return percent * -170 + 170;
    }
    return percent * -50 + 50;
  });

  const hand1 = useSpring(
    useTransform(scrollingY_hand1, (latest) => {
      if (isHeaderScrolled === "header") {
        return 0;
      } else if (isHeaderScrolled === "scrolling") {
        return latest;
      } else {
        if (isCompact) {
          return -170;
        }
        return -50;
      }
    }),
    { bounce: 0 },
  );

  const hand2 = useTransform(hand1, (latest) => {
    return latest * -1;
  });

  return (
    <>
      <motion.div
        className={styles.hand1}
        style={{
          y: hand1,
        }}
      >
        <img
          alt="hand1"
          src="/images/hand-1.webp"
          style={{
            transform: "scaleX(-1) rotate(-45deg)",
          }}
        />
      </motion.div>
      <motion.div
        className={styles.hand2}
        style={{
          y: hand2,
        }}
      >
        <img
          alt="hand2"
          src="/images/hand-2.webp"
          style={{
            transform: "scaleX(-1)",
            rotate: "20deg",
          }}
        />
      </motion.div>
    </>
  );
};
