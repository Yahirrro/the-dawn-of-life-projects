import type { Metadata } from "next";
import { IBM_Plex_Sans_JP } from "next/font/google";

import "./../globals.css";
import "palt-typesetting/dist/typesetter.css";
import { PaltSettings } from "@/components/PaltSettings";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const runtime = "edge";

const ibm_plex_sans_jp = IBM_Plex_Sans_JP({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans-jp",
});

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
    <html lang={locale} className={`${ibm_plex_sans_jp.variable}`}>
      <NextIntlClientProvider messages={messages}>
        <body>
          <PaltSettings>{children}</PaltSettings>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
