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
      top: "-5%",
      left: "-5%",
      width: "80vw",
      zIndex: -2,
      pointerEvents: "none",
      "2xl": {
        width: "120vh",
        top: "-10%",
        left: "-2%",
      },
      xlDown: {
        top: "-0%",
        left: "-5%",
      },
      lgDown: {
        top: "18%",
        left: "-10%",
        width: "90vw",
      },
    },
    hand2: {
      position: "fixed",
      bottom: "-15%",
      right: "-20%",
      width: "65vw",
      zIndex: -2,
      pointerEvents: "none",
      "2xl": {
        width: "95vh",
        right: "-10%",
      },
      xlDown: {
        bottom: "-5%",
        right: "-15%",
      },
      lgDown: {
        bottom: "25%",
        right: "-10%",
        width: "70vw",
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
    return percent * -100 + 100;
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
        return -100;
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
            transform: "rotate(10deg)",
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
            // transform: "scaleX(-1)",
            rotate: "0deg",
          }}
        />
      </motion.div>
    </>
  );
};
