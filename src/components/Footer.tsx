import { sva } from "styled-system/css";
import { PaltSettingsContainer } from "./PaltSettingContainer";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import { FooterLanguageSelect } from "./FooterLanguageSelect";

const credit = [
  {
    role: "Project Manager",
    name: ["Yuki Yasui"],
  },
  {
    role: "Communication Designer",
    name: ["Yahiro Nakamoto", "Nina Saijo"],
  },
  {
    role: "Web Development",
    name: ["Yahiro Nakamoto"],
  },
  {
    role: "Director",
    name: ["Kanaho Suzuki", "Nao Hashimoto", "Kotomi Ogata"],
  },
];

const footerStyle = sva({
  slots: [
    "wrapper",
    "container",
    "title",
    "logo",
    "languageSelect",
    "credit",
    "links",
  ],
  base: {
    wrapper: {
      px: "28px",
      py: "40px",
      borderTop: "2px solid white",
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      mdDown: {
        gridTemplateColumns: "1fr 1fr",
        px: "8px",
        py: "0px",
        pt: "40px",
        pb: "12px",
      },
    },
    container: {
      gridColumn: "1 / 3",
      mdDown: {
        gridColumn: "1 / 2",
      },
    },
    title: {
      fontSize: "14px",
      color: "white",
      whiteSpace: "pre-wrap",
      mb: "24px",
    },
    credit: {
      fontSize: "14px",
      color: "white",
      whiteSpace: "pre-wrap",
      mb: "52px",
      opacity: 0.5,
    },
    logo: {
      width: "100%",
    },
    languageSelect: {
      fontSize: "14px",
      display: "flex",
      color: "white",
      gap: "24px",
      mb: "48px",
    },
    links: {
      fontSize: "14px",
      mt: "24px",
      color: "white",
      display: "flex",
      gap: "24px",
      opacity: 0.5,
    },
  },
  variants: {
    isPage: {
      true: {
        wrapper: {
          maxWidth: "640px",
          mx: "auto",
        },
      },
    },
  },
});

export const Footer: React.FC<{
  isPage?: boolean;
}> = ({ isPage }) => {
  const styles = footerStyle({
    isPage,
  });
  const t = useTranslations("header");
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <FooterLanguageSelect />

        <h1 className={styles.title}>
          <PaltSettingsContainer>{t("description-wrap")}</PaltSettingsContainer>
        </h1>

        <p className={styles.credit}>
          {credit.map((c) => (
            <span key={c.role}>
              {c.role}: {c.name.join(", ")}
              <br />
            </span>
          ))}
        </p>

        <svg
          viewBox="0 0 553 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.logo}
        >
          <path
            d="M0 6.86241V0.0090332H43.8963V6.86241H25.7652V59.0001H18.1311V6.86241H0Z"
            fill="white"
          />
          <path
            d="M97.603 0.0090332V59.0001H89.9689V31.8469H58.9118V59.0001H51.2776V0.0090332H58.9118V24.9935H89.9689V0.0090332H97.603Z"
            fill="white"
          />
          <path
            d="M147.258 52.1467V59.0001H106.138V0.0090332H145.61V6.86241H113.772V25.2537H142.66V32.1071H113.772V52.1467H147.258Z"
            fill="white"
          />
          <path
            d="M14.0538 132.55H0V73.5586H14.4008C23.8567 73.5586 30.1028 73.6453 35.8284 77.8094C42.1613 82.494 46.7591 91.6029 46.7591 102.794C46.7591 112.597 43.5493 120.925 38.0839 126.39C31.7511 132.55 25.505 132.55 14.0538 132.55ZM7.63414 80.412V125.783H15.7888C22.9024 125.783 27.8473 125.783 32.1848 122.139C36.1754 118.843 39.125 111.816 39.125 103.141C39.125 95.5935 36.4357 88.1329 31.9246 84.1423C27.7605 80.6722 23.2494 80.412 14.661 80.412H7.63414Z"
            fill="white"
          />
          <path
            d="M60.9437 115.546L55.0446 132.55H47.0634L68.1441 73.5586H76.6457L97.3793 132.55H89.1379L83.2388 115.546H60.9437ZM81.07 108.953L74.3902 89.5209C73.2624 86.4846 72.4816 84.0555 72.1346 82.5808H72.0479C71.6141 84.0555 70.9201 86.3978 69.7923 89.6076L63.1992 108.953H81.07Z"
            fill="white"
          />
          <path
            d="M148.622 106.004L157.558 73.5586H165.365L148.449 132.55H142.29L131.879 96.8948C130.665 92.6439 130.058 90.0414 129.537 87.9594C128.756 91.0824 128.149 93.1645 127.108 97.0683L116.871 132.55H110.799L93.1881 73.5586H101.43L110.712 106.177C112.187 111.296 113.662 117.195 114.095 118.756C115.223 114.419 116.264 110.168 117.479 106.004L126.501 73.5586H132.4L141.943 106.177C143.417 111.209 144.979 116.934 145.326 118.496C145.326 118.496 147.495 110.081 148.622 106.004Z"
            fill="white"
          />
          <path
            d="M180.4 73.5586L208.16 113.204C209.982 115.807 212.238 119.277 212.585 119.884H212.672C212.672 119.884 212.498 115.546 212.498 110.341V73.5586H220.132V132.55H212.585L184.998 92.8174C183.349 90.4752 180.747 86.3978 180.4 85.7038H180.313C180.313 85.7038 180.487 89.5209 180.487 92.991V132.55H172.853V73.5586H180.4Z"
            fill="white"
          />
          <path
            d="M242.889 103.054C242.889 85.0966 253.212 72.5176 269.695 72.5176C286.091 72.5176 296.415 85.0966 296.415 103.054C296.415 121.012 286.265 133.591 269.695 133.591C253.212 133.591 242.889 121.012 242.889 103.054ZM250.87 103.054C250.87 117.455 257.984 126.824 269.695 126.824C281.32 126.824 288.433 117.455 288.433 103.054C288.433 88.6534 281.407 79.2842 269.695 79.2842C257.984 79.2842 250.87 88.5666 250.87 103.054Z"
            fill="white"
          />
          <path
            d="M311.258 132.55H303.624V73.5586H342.575V80.3252H311.258V98.7166H339.539V105.483H311.258V132.55Z"
            fill="white"
          />
          <path
            d="M36.8694 202.383V209.236H0V150.245H7.72089V202.383H36.8694Z"
            fill="white"
          />
          <path
            d="M52.2807 150.245V209.236H44.6466V150.245H52.2807Z"
            fill="white"
          />
          <path
            d="M69.2922 209.236H61.658V150.245H100.609V157.012H69.2922V175.403H97.5732V182.17H69.2922V209.236Z"
            fill="white"
          />
          <path
            d="M149.777 202.383V209.236H108.656V150.245H148.128V157.099H116.291V175.49H145.179V182.343H116.291V202.383H149.777Z"
            fill="white"
          />
          <path
            d="M177.804 184.078V209.236H170.083V150.245H192.031C197.93 150.245 201.227 150.852 204.003 151.98C210.076 154.669 213.893 159.701 213.893 167.162C213.893 173.581 210.943 178.439 206.259 181.215C202.008 183.731 197.67 184.078 191.077 184.078H177.804ZM177.804 157.012V177.312H191.945C196.195 177.312 198.191 176.965 200.273 176.271C204.437 174.709 206.085 171.673 206.085 167.162C206.085 162.651 204.437 159.614 200.273 158.053C198.191 157.359 196.195 157.012 191.945 157.012H177.804Z"
            fill="white"
          />
          <path
            d="M228.592 183.991V209.236H220.958V150.245H243.167C249.066 150.245 252.536 150.939 255.312 151.98C261.298 154.409 264.941 159.701 264.941 167.162C264.941 176.618 258.608 182.256 250.02 183.644L266.676 209.236H257.134L240.998 183.991H228.592ZM228.592 177.225H241.865C247.331 177.225 249.76 176.704 252.015 175.75C255.312 174.189 257.047 171.239 257.047 167.075C257.047 162.998 255.138 159.875 251.842 158.4C249.673 157.532 247.331 157.012 241.779 157.012H228.592V177.225Z"
            fill="white"
          />
          <path
            d="M269.263 179.741C269.263 161.783 279.586 149.204 296.069 149.204C312.465 149.204 322.788 161.783 322.788 179.741C322.788 197.698 312.638 210.277 296.069 210.277C279.586 210.277 269.263 197.698 269.263 179.741ZM277.244 179.741C277.244 194.141 284.357 203.511 296.069 203.511C307.693 203.511 314.807 194.141 314.807 179.741C314.807 165.34 307.78 155.971 296.069 155.971C284.357 155.971 277.244 165.253 277.244 179.741Z"
            fill="white"
          />
          <path
            d="M339.936 150.245H347.57V195.096C347.57 199.694 346.876 202.209 345.488 204.378C342.625 208.976 336.986 210.277 331.348 210.277C327.704 210.277 325.535 209.843 324.147 209.496V202.556C325.795 203.077 328.051 203.597 330.567 203.597C332.822 203.597 335.598 203.164 337.507 201.602C339.936 199.607 339.936 196.223 339.936 190.585V150.245Z"
            fill="white"
          />
          <path
            d="M397.743 202.383V209.236H356.623V150.245H396.095V157.098H364.257V175.49H393.145V182.343H364.257V202.383H397.743Z"
            fill="white"
          />
          <path
            d="M443.575 192.32L450.515 195.79C446.264 204.812 438.11 210.277 427.266 210.277C411.65 210.277 400.373 199 400.373 179.741C400.373 161.783 410.696 149.204 427.266 149.204C437.676 149.204 445.57 154.322 449.995 162.651L443.488 167.075C440.452 159.875 434.813 155.884 427.266 155.884C415.554 155.884 408.354 165.253 408.354 179.741C408.354 194.141 415.554 203.597 427.266 203.597C434.9 203.597 440.539 199.433 443.575 192.32Z"
            fill="white"
          />
          <path
            d="M451.871 157.098V150.245H495.767V157.098H477.636V209.236H470.002V157.098H451.871Z"
            fill="white"
          />
          <path
            d="M541.156 159.094L535.517 163.865C531.786 158.573 526.495 155.971 519.641 155.971C512.528 155.971 507.236 159.267 507.236 165.166C507.236 170.458 510.359 172.454 517.646 174.275L525.627 176.271C535.343 178.786 542.804 182.256 542.804 192.753C542.804 203.858 533.174 210.277 520.595 210.277C509.491 210.277 501.25 205.159 497.086 198.219L503.332 193.794C506.108 199 512.267 203.424 521.029 203.424C528.924 203.424 534.909 200.041 534.909 193.187C534.909 187.375 530.398 185.119 522.851 183.211L515.651 181.389C507.062 179.133 499.515 176.357 499.515 165.86C499.515 155.103 508.884 149.204 519.728 149.204C530.745 149.204 537.599 154.322 541.156 159.094Z"
            fill="white"
          />
        </svg>
      </div>
    </footer>
  );
};
