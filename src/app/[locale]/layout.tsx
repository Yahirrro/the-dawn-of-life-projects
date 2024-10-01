import type { Metadata } from "next";

import "./../globals.css";
import "palt-typesetting/dist/typesetter.css";
import { PaltSettings } from "@/components/PaltSettings";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import TypekitLoader from "@/components/TypekitLoader";
import { css } from "styled-system/css";
import { AnimationProvider } from "~/components/AnimateUtils";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      siteName: t("title"),
      type: "website",
      url: "https://the-dawn-of-life-projects.vercel.app/" + locale,
      locale: locale,
      images: [
        {
          url: "https://the-dawn-of-life-projects.vercel.app/ogp.jpg",
          width: 1200,
          height: 675,
          alt: t("title"),
        },
      ],
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
            <AnimationProvider>
              {modal}
              {children}
            </AnimationProvider>
          </PaltSettings>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
