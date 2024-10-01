import { sva } from "styled-system/css";
import { IconRose } from "./icon/IconRose";
import { PaltSettingsContainer } from "./PaltSettingContainer";
import { Link } from "~/i18n/routing";
import { getItems } from "./util/getItems";

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

export const SectionContentCarousel: React.FC = async () => {
  const styles = sectioncontentcarouselStyles();
  const data = await getItems();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {data.map((d, i) => (
          <CarouselBook
            key={i}
            title={d.title}
            id={d.id}
            description={d.description}
            author={d.author}
          />
        ))}
      </div>
    </div>
  );
};

const carouselStyles = sva({
  slots: ["container", "title", "description", "icon", "iconWrapper"],
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
      lineHeight: "1.1",
      height: "100%",
      alignContent: "center",
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
      alignContent: "center",
    },
    iconWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

const CarouselBook: React.FC<{
  id: string;
  title: string;
  description: string;
  author: string;
}> = ({ id, title, description, author }) => {
  const styles = carouselStyles();
  return (
    <Link
      href={"/item/" + id}
      passHref
      className={styles.container}
      scroll={false}
    >
      <h2 className={styles.title}>
        <PaltSettingsContainer>{title}</PaltSettingsContainer>
      </h2>
      <p className={styles.description}>
        <PaltSettingsContainer>{author}</PaltSettingsContainer>
      </p>
      <div className={styles.iconWrapper}>
        <IconRose className={styles.icon} />
      </div>
    </Link>
  );
};
