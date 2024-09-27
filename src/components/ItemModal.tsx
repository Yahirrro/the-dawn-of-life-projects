"use client";

import { XIcon } from "lucide-react";
import { ItemCotentWrapper } from "./ItemContentWrapper";
import { IconButton } from "./ui/icon-button";
import { useRouter } from "next/navigation";
import { css } from "styled-system/css";

export const ItemModal: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const router = useRouter();
  return (
    <article
      onClick={(e) => {
        router.back();
      }}
      className={css({
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 100,
        _after: {
          content: "''",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      })}
    >
      <div
        className={css({
          position: "relative",
          zIndex: 100,
        })}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <IconButton
          variant={"ghost"}
          aria-label="Next Page"
          onClick={() => {
            router.back();
          }}
          size={"xl"}
          className={css({
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 1000,
          })}
        >
          <XIcon color="white" size={32} />
        </IconButton>

        {children}
      </div>
    </article>
  );
};
