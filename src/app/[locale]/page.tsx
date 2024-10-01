import { Metadata } from "next";
import { sva } from "styled-system/css";
import { Header } from "@/components/Header";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionContent } from "@/components/SectionContent";
import { SectionDetial } from "@/components/SectionDetial";
import { Footer } from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
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

const homeStyles = sva({
  slots: ["wrapper"],
  base: {
    wrapper: {
      bgColor: "#5982AD",
      backgroundColor: "color(display-p3 0.349 0.5087 0.6775)",
    },
  },
});

export default function Home() {
  const styles = homeStyles();
  return (
    <div className={styles.wrapper}>
      <Header />

      <SectionAbout />
      <SectionContent />
      <SectionDetial />

      <Footer />
    </div>
  );
}
