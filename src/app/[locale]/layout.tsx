import type { Metadata } from "next";

import "./../globals.css";
import "palt-typesetting/dist/typesetter.css";
import { PaltSettings } from "@/components/PaltSettings";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import TypekitLoader from "@/components/TypekitLoader";
import { css } from "styled-system/css";

export const metadata: Metadata = {
  title: "plane*",
  description:
    "plane* is a collective exploring digital product expression through technology, culture, and narrative.",
  openGraph: {
    siteName: "plane*",
    type: "website",
    url: "https://planeverything.co",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={css({
          bgColor: "#5982AD",
        })}
      >
        <NextIntlClientProvider messages={messages}>
          <TypekitLoader />
          <PaltSettings>{children}</PaltSettings>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
