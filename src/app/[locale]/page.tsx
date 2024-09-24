import { Metadata } from "next";
import { sva } from "styled-system/css";
import { Header } from "@/components/Header";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionContent } from "@/components/SectionContent";
import { SectionDetial } from "@/components/SectionDetial";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "THE DAWN OF LIFE PROJECTS | 武蔵野美術大学 クリエイティブイノベーション学科 岩嵜ゼミ学部生展",
  description:
    "武蔵野美術大学 クリエイティブイノベーション学科 岩嵜ゼミ学部生展",
};

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
