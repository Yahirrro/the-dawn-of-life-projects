import { css, sva } from "styled-system/css";
import { PaltSettingsContainer } from "./PaltSettingContainer";
import { IconRose } from "./icon/IconRose";
import { useTranslations } from "next-intl";

const aboutStyles = sva({
  slots: ["container", "content", "backquote", "backquoteBack", "aboutMessage"],
  base: {
    container: {
      p: "28px",
      pt: "30vh",
      pb: "30vh",
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      zIndex: 1,
      position: "relative",
      mdDown: {
        gridTemplateColumns: "1fr",
        pt: "220px",
        pb: "180px",
      },
      lgDown: {
        zIndex: "initial",
      },
    },
    content: {
      gridColumn: "1 / 3",
      mdDown: {
        gridColumn: "initial",
      },
    },

    backquote: {
      whiteSpace: "pre-wrap",
      fontSize: "24px",
      color: "white",
      mdDown: {
        fontSize: "20px",
      },
    },
    backquoteBack: {
      position: "relative",
      fontSize: "14px",
      mt: "48px",
      "& > svg": {
        position: "absolute",
        right: "0",
        top: "-40px",
      },
    },

    aboutMessage: {
      fontSize: "24px",
      color: "white",
      mt: "96px",
      mb: "72px",
      mdDown: {
        fontSize: "20px",
      },
    },
  },
});

export const SectionAbout: React.FC = () => {
  const styles = aboutStyles();
  const t = useTranslations("section-about");
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <figure className={styles.backquote}>
          <p>
            <PaltSettingsContainer>{t("backquote")}</PaltSettingsContainer>
          </p>

          <p className={styles.backquoteBack}>
            <PaltSettingsContainer>{t("quotefrom")}</PaltSettingsContainer>

            <svg
              width="80"
              height="63"
              viewBox="0 0 80 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.1">
                <path
                  d="M0 38.9605C1.76341e-06 18.7895 13.9424 2.48684 33.3525 0V11.6053C22.6907 13.5395 15.036 20.7237 15.036 29.5658C16.9496 28.4605 19.1367 27.9079 22.4173 27.9079C30.8921 27.9079 38 33.9868 38 44.7631C38 55.2632 30.6187 63 19.9568 63C8.7482 63 -1.30444e-06 53.8816 0 38.9605Z"
                  fill="white"
                />
                <path
                  d="M75.3188 1.09713e-06C56.0435 2.48684 42 18.7895 42 38.9605C42 53.8816 50.8116 63 61.8261 63C72.8406 63 80 55.2632 80 44.7631C80 33.9868 72.8406 27.9079 64.5797 27.9079C61.2754 27.9079 58.7971 28.4605 56.8696 29.5658C56.8696 20.7237 64.5797 13.5395 75.3188 11.6053V1.09713e-06Z"
                  fill="white"
                />
              </g>
            </svg>
          </p>
        </figure>

        <p className={styles.aboutMessage}>
          <PaltSettingsContainer>{t("aboutmessage")}</PaltSettingsContainer>
        </p>

        <IconRose
          className={css({
            mdDown: {
              width: "42px",
              height: "42px",
            },
          })}
        />
      </div>
    </div>
  );
};
