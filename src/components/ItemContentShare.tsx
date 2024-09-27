"use client";

import { Share } from "lucide-react";
import { Button } from "./ui/button";
import { css } from "styled-system/css";
import { useTranslations } from "next-intl";

export const ItemContentShare: React.FC = () => {
  const t = useTranslations("exibition-modal");
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
      {t("share")}
      <Share />
    </Button>
  );
};
