import { css, sva } from "styled-system/css";
import { PaltSettingsContainer } from "./PaltSettingContainer";
import Link from "next/link";
import { useTranslations } from "next-intl";

const sectiondetialStyles = sva({
  slots: ["wrapper", "title"],
  base: {
    wrapper: {
      p: "28px",
      pt: "96px",
      pb: "196px",
      mdDown: {
        pt: "16px",
        pb: "128px",
      },
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "white",
      mb: "64px",
      mdDown: {
        mb: "48px",
      },
    },
  },
});

export const SectionDetial: React.FC = () => {
  const styles = sectiondetialStyles();
  const t = useTranslations("section-detial");
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        <PaltSettingsContainer>{t("title")}</PaltSettingsContainer>
      </h2>

      <Calendar />
      <Map />
    </div>
  );
};

const Calendar = () => {
  const t = useTranslations("section-detial");
  return (
    <div
      className={css({
        mb: "96px",
        mdDown: {
          mb: "64px",
        },
      })}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={css({
          mb: "20px",
        })}
      >
        <path
          d="M32.5 6.25H7.5C5.42893 6.25 3.75 7.92893 3.75 10V32.5C3.75 34.5711 5.42893 36.25 7.5 36.25H32.5C34.5711 36.25 36.25 34.5711 36.25 32.5V10C36.25 7.92893 34.5711 6.25 32.5 6.25Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M10 3.75V6.25M30 3.75V6.25M36.25 12.5H3.75"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h2
        className={css({
          color: "white",
          fontSize: "24px",
          marginBottom: "16px",
          whiteSpace: "pre-wrap",
        })}
      >
        {t("calendar-title")}
      </h2>

      <p
        className={css({
          color: "white",
          fontSize: "14px",
          lineHeight: "24px",
          whiteSpace: "pre-wrap",
          mb: "48px",
        })}
      >
        <PaltSettingsContainer>{t("calendar-detail")}</PaltSettingsContainer>
      </p>

      <p
        className={css({
          color: "white",
          fontSize: "14px",
          lineHeight: "24px",
          whiteSpace: "pre-wrap",
        })}
      >
        <PaltSettingsContainer>{t("calendar-event")}</PaltSettingsContainer>
      </p>
    </div>
  );
};

const Map = () => {
  const t = useTranslations("section-detial");
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={css({
          mb: "20px",
        })}
      >
        <path
          d="M35 20C35 11.7188 28.2812 5 20 5C11.7188 5 5 11.7188 5 20C5 28.2812 11.7188 35 20 35C28.2812 35 35 28.2812 35 20Z"
          stroke="white"
          strokeWidth="2.5"
          strokeMiterlimit="10"
        />
        <path
          d="M27.3961 11.7916L18.2398 15.4541C17.611 15.7056 17.0398 16.0822 16.5609 16.5611C16.082 17.04 15.7054 17.6112 15.4539 18.24L11.7914 27.3963C11.7459 27.5099 11.7348 27.6343 11.7594 27.7541C11.784 27.874 11.8432 27.984 11.9297 28.0705C12.0162 28.157 12.1262 28.2162 12.2461 28.2408C12.3659 28.2654 12.4903 28.2542 12.6039 28.2088L21.7602 24.5463C22.389 24.2948 22.9602 23.9182 23.4391 23.4393C23.918 22.9604 24.2946 22.3892 24.5461 21.7603L28.2086 12.6041C28.2541 12.4905 28.2652 12.3661 28.2406 12.2462C28.216 12.1264 28.1568 12.0164 28.0703 11.9299C27.9838 11.8434 27.8738 11.7842 27.7539 11.7596C27.6341 11.735 27.5097 11.7461 27.3961 11.7916ZM20 21.8752C19.6292 21.8752 19.2666 21.7652 18.9583 21.5592C18.65 21.3532 18.4096 21.0603 18.2677 20.7177C18.1258 20.3751 18.0887 19.9981 18.161 19.6344C18.2334 19.2707 18.4119 18.9366 18.6742 18.6744C18.9364 18.4121 19.2705 18.2336 19.6342 18.1612C19.9979 18.0889 20.3749 18.126 20.7175 18.2679C21.0601 18.4098 21.353 18.6501 21.559 18.9585C21.765 19.2668 21.875 19.6293 21.875 20.0002C21.875 20.4975 21.6775 20.9744 21.3258 21.326C20.9742 21.6776 20.4973 21.8752 20 21.8752Z"
          fill="white"
        />
      </svg>

      <h2
        className={css({
          color: "white",
          fontSize: "24px",
          marginBottom: "16px",
          whiteSpace: "pre-wrap",
        })}
      >
        <PaltSettingsContainer>{t("location-title")}</PaltSettingsContainer>
      </h2>

      <p
        className={css({
          color: "white",
          fontSize: "14px",
          lineHeight: "24px",
          whiteSpace: "pre-wrap",
          mb: "38px",
        })}
      >
        <PaltSettingsContainer>{t("location-detail")}</PaltSettingsContainer>
      </p>

      <p
        className={css({
          color: "white",
          fontSize: "14px",
          lineHeight: "24px",
          whiteSpace: "pre-wrap",
          mb: "20px",
        })}
      >
        <PaltSettingsContainer>{t("location-notice")}</PaltSettingsContainer>
      </p>

      <Link
        href="https://maps.app.goo.gl/BFELjGemv6NjXZKA9"
        className={css({
          color: "white",
          fontSize: "14px",
          lineHeight: "24px",
          py: "10px",
          mt: "20px",
          display: "inline-flex",
          gap: "8px",
          borderBottom: "1px solid white",
          _after: {
            content: "'→'",
            display: "block",
          },
        })}
      >
        <PaltSettingsContainer>{t("location-access")}</PaltSettingsContainer>
      </Link>
    </div>
  );
};
