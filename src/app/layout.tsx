import "./globals.css";
import { css } from "styled-system/css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
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
