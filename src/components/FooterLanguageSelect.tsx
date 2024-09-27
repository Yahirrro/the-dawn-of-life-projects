"use client";

import { css } from "styled-system/css";
import { Link, usePathname, useRouter } from "~/i18n/routing";

export const FooterLanguageSelect: React.FC = () => {
  const pathname = usePathname();
  return (
    <div
      className={css({
        fontSize: "14px",
        display: "flex",
        color: "white",
        gap: "24px",
        mb: "48px",
      })}
    >
      <a href={"/ja" + pathname}>日本語</a>
      <a href={"/en" + pathname}>English</a>
    </div>
  );
};
