import type { Metadata } from "next";

import "./../globals.css";
import "palt-typesetting/dist/typesetter.css";
import { PaltSettings } from "@/components/PaltSettings";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import TypekitLoader from "@/components/TypekitLoader";
import { css } from "styled-system/css";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
    locale: locale,
    openGraph: {
      siteName: t("title"),
      type: "website",
      url: "https://the-dawn-of-life-projects.vercel.app/" + locale,
      locale: locale,
    },
  };
}

export default async function RootLayout({
  modal,
  children,
  params: { locale },
}: Readonly<{
  modal: React.ReactNode;
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
          <PaltSettings>
            {modal}
            {children}
          </PaltSettings>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
