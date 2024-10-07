import "./globals.css";
import { css } from "styled-system/css";
import { Analytics } from "@vercel/analytics/react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Analytics />
      <body
        className={css({
          bgColor: "#5982AD",
        })}
      >
        {children}
      </body>
    </html>
  );
}
