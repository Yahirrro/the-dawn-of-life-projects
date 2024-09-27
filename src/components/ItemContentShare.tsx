"use client";

import { Share } from "lucide-react";
import { Button } from "./ui/button";
import { css } from "styled-system/css";

export const ItemContentShare: React.FC = () => {
  return (
    <Button
      variant={"ghost"}
      aria-label="share"
      onClick={() => {
        navigator.share({
          url: window.location.href,
        });
      }}
      color="white"
      size={"xl"}
      className={css({
        transform: "translateX(-20px)",
      })}
    >
      共有する
      <Share />
    </Button>
  );
};
