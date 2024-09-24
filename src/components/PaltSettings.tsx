"use client";

import Typesetter from "palt-typesetting";
import { css } from "../../styled-system/css";
import { useEffect, useState } from "react";

export const PaltSettings: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  useEffect(() => {
    const typesetter = new Typesetter({
      thinSpaceWidth: "0.15em",
      kerningRules: [
        {
          between: ["ク", "ノ"],
          value: "-75",
        },
        {
          between: ["ノ", "ロ"],
          value: "-10",
        },
        {
          between: ["ロ", "ジ"],
          value: "-25",
        },
        {
          between: ["物", "語"],
          value: "2",
        },
        {
          between: ["コ", "レ"],
          value: "-50",
        },
        {
          between: ["レ", "ク"],
          value: "-20",
        },
        {
          between: ["ラ", "テ"],
          value: "-30",
        },
        {
          between: ["テ", "ィ"],
          value: "-55",
        },
        {
          between: ["ィ", "ブ"],
          value: "-10",
        },
        {
          between: ["じ", "て"],
          value: "-15",
        },
        {
          between: ["を", "通"],
          value: "5",
        },
      ],
    });
    typesetter.renderToSelector('[aria-controls="typesetting"]');
  }, []);

  return (
    <div
      className={css({
        "& .typesetting-wrapper": {
          fontFeatureSettings: `"palt" on`,
          letterSpacing: "-0.001em",
          fontWeight: "500",
        },
        "& .typesetting-latin": {
          fontSize: "100.9%",
          verticalAlign: "-0.008em",
          lineHeight: "calc(1.35 / 1.008 - 0.002 * 2)",
          fontWeight: "740",
        },
      })}
    >
      {children}
    </div>
  );
};
