"use client";

import { AnimatePresence } from "framer-motion";

export const AnimationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};
