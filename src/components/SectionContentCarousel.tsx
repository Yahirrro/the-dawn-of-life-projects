import { sva } from "styled-system/css";
import { IconRose } from "./icon/IconRose";
import { PaltSettingsContainer } from "./PaltSettingContainer";

const sectioncontentcarouselStyles = sva({
  slots: ["wrapper", "container"],
  base: {
    wrapper: {
      pt: "48px",
      pb: "8px",
      mb: "82px",
      bg: "linear-gradient(180deg, color(display-p3 0.349 0.5098 0.6784 / 0.00) 41.19%, color(display-p3 0.349 0.5087 0.6775 / 0.20) 100%), linear-gradient(0deg, color(display-p3 0.349 0.5098 0.6784 / 0.20) 0%, color(display-p3 0.349 0.5098 0.6784 / 0.20) 100%), color(display-p3 1 1 1)",
      overflowX: "scroll",
    },
    container: {
      display: "flex",
      px: "28px",
      gap: "1px",
    },
  },
});

export const SectionContentCarousel: React.FC = () => {
  const styles = sectioncontentcarouselStyles();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {Array.from({ length: 15 }).map((_, i) => (
          <CarouselBook key={i} />
        ))}
      </div>
    </div>
  );
};

const carouselStyles = sva({
  slots: ["container", "title", "description", "icon"],
  base: {
    container: {
      height: "70vh",
      width: "76px",
      minWidth: "76px",
      py: "26px",
      display: "grid",
      gridTemplateRows: "1fr auto auto",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid rgba(0, 0, 0, 0.10)",
      bg: "#4C83B1",
      gap: "24px",
      transition: "transform 0.2s",
      cursor: "pointer",
      "&:last-child": {
        transform: "translateX(70px) rotate(-10deg)",
      },
      "&:nth-child(2n)": {
        bg: "#D26344",
      },
      "&:nth-child(3n)": {
        bg: "#C9AB35",
      },
      "&:nth-child(4n)": {
        bg: "#528C63",
      },
      _hover: {
        transform: "translateY(-10px)",
        "&:last-child": {
          transform: "translateX(70px) rotate(-10deg) translateY(-10px)",
        },
      },
      mdDown: {
        height: "60vh",
        width: "64px",
        minWidth: "64px",
      },
    },
    title: {
      writingMode: "vertical-rl",
      textOrientation: "sideways",
      fontSize: "24px",
      alignSelf: "center",
      height: "100%",
      mdDown: {
        fontSize: "20px",
      },
    },
    description: {
      writingMode: "vertical-rl",
      textOrientation: "sideways",
      fontSize: "16px",
      alignContent: "center",
      mdDown: {
        fontSize: "14px",
      },
    },
    icon: {
      writingMode: "vertical-rl",
      textOrientation: "sideways",
      width: "36px",
      height: "36px",
    },
  },
});

const CarouselBook: React.FC<{}> = () => {
  const styles = carouselStyles();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <PaltSettingsContainer>これがタイトルだ！</PaltSettingsContainer>
      </h2>
      <p className={styles.description}>
        <PaltSettingsContainer>参加者だ！</PaltSettingsContainer>
      </p>
      <IconRose className={styles.icon} />
    </div>
  );
};
