import { sva } from "styled-system/css";
import { PaltSettingsContainer } from "./PaltSettingContainer";
import { SectionContentCarousel } from "./SectionContentCarousel";
import { useTranslations } from "next-intl";

const sectioncontentStyles = sva({
  slots: ["wrapper", "container", "title"],
  base: {
    wrapper: {
      position: "relative",
      // zIndex: 2,
    },
    container: {
      px: "28px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "white",
      mb: "20px",
      mdDown: {
        fontSize: "20px",
      },
    },
  },
});

export const SectionContent: React.FC = () => {
  const styles = sectioncontentStyles();
  const t = useTranslations("section-content");
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <PaltSettingsContainer>{t("title")}</PaltSettingsContainer>
        </h2>
      </div>
      <SectionContentCarousel />
    </div>
  );
};
