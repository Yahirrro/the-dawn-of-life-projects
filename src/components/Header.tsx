import { sva } from "styled-system/css";
import { PaltSettingsContainer } from "./PaltSettingContainer";
import { useTranslations } from "next-intl";

const headerStyles = sva({
  slots: [
    "wrapper",
    "logoContainer",
    "logo",
    "titleJapanese",
    "description",
    "time",
    "hand1",
    "hand2",
  ],
  base: {
    wrapper: {
      position: "relative",
      height: "100svh",
      whiteSpace: "pre-wrap",
      zIndex: 1,
    },
    logoContainer: {
      position: "relative",
      height: "100%",
      padding: "28px",
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      mdDown: {
        padding: "8px",
      },
    },
    logo: {
      gridColumn: "1 / span 5",
      width: "100%",
      maxWidth: "78vh",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      height: "100%",
      "& > svg": {
        width: "100%",
        height: "auto",
      },
    },
    titleJapanese: {
      position: "absolute",
      top: "50%",
      left: "28px",
      transform: "translateY(-50%)",
      fontSize: "33.5px",
      color: "white",
      lineHeight: "1.1",
      mdDown: {
        left: "8px",
      },
    },
    description: {
      position: "absolute",
      top: "28px",
      right: "28px",
      fontSize: "19.68px",
      color: "white",
      textAlign: "right",
      lineHeight: "1.1",
      mdDown: {
        top: "24%",
        left: "8px",
        textAlign: "left",
        width: "calc(70% - 56px)",
        fontSize: "14.68px",
      },
    },
    time: {
      position: "absolute",
      bottom: "28px",
      right: "28px",
      mdDown: {
        bottom: "25%",
        left: "8px",
        "& > svg": { width: "calc(60% - 56px)" },
      },
    },

    hand1: {
      position: "fixed",
      top: "-30%",
      left: "-15%",
      transform: "scaleX(-1)",
      rotate: "45deg",
      width: "95vw",
      maxWidth: "1670px",
      zIndex: -2,
      pointerEvents: "none",
      mdDown: {
        top: "10%",
        left: "-15%",
      },
    },
    hand2: {
      position: "fixed",
      bottom: "-40%",
      right: "-40%",
      transform: "scaleX(-1)",
      rotate: "20deg",
      width: "95vw",
      zIndex: -2,
      pointerEvents: "none",
      mdDown: {
        bottom: "15%",
        right: "-30%",
      },
    },
  },
});

export const Header: React.FC = () => {
  const styles = headerStyles();
  const t = useTranslations("header");

  return (
    <header className={styles.wrapper}>
      <h1 className={styles.logoContainer}>
        <span className={styles.logo} role="img" aria-label={t("title")}>
          <LogoSvg1 />
          <LogoSvg2 />
        </span>
      </h1>
      <p className={styles.titleJapanese}>
        <PaltSettingsContainer>{`ライフプロジェクトの\n夜明け前`}</PaltSettingsContainer>
      </p>

      <p className={styles.description}>
        <PaltSettingsContainer>{t("description")}</PaltSettingsContainer>
      </p>

      <time
        className={styles.time}
        role="img"
        aria-label="2024/10/10 - 2024/10/16"
      >
        <TimeSvg />
      </time>

      <img src="/images/hand-1.webp" className={styles.hand1} />
      <img src="/images/hand-2.webp" className={styles.hand2} />
    </header>
  );
};

const LogoSvg1: React.FC = () => {
  return (
    <svg viewBox="0 0 830 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.01952 23.5793L3.01952 8.6704L98.5118 8.6704V23.5793L59.0694 23.5793L59.0694 137H42.462L42.462 23.5793L3.01952 23.5793ZM215.346 8.6704L215.346 137H198.738L198.738 77.9306L131.177 77.9306L131.177 137H114.569L114.569 8.6704L131.177 8.6704V63.0218L198.738 63.0218V8.6704L215.346 8.6704ZM323.366 122.091V137L233.913 137L233.913 8.6704L319.78 8.6704V23.5793L250.52 23.5793V63.5879L313.364 63.5879V78.4968L250.52 78.4968L250.52 122.091L323.366 122.091Z"
        fill="white"
      />
      <path
        d="M45.4815 297H14.9089L14.9089 168.67H46.2364C66.8069 168.67 80.3947 168.859 92.8502 177.918C106.627 188.109 116.629 207.924 116.629 232.269C116.629 253.594 109.646 271.712 97.757 283.601C83.9804 297 70.3926 297 45.4815 297ZM31.5162 183.579L31.5162 282.28H49.2559C64.731 282.28 75.488 282.28 84.924 274.354C93.6051 267.182 100.022 251.896 100.022 233.024C100.022 216.605 94.1713 200.375 84.3578 191.694C75.2993 184.145 65.4858 183.579 46.8026 183.579H31.5162ZM147.486 260.011L134.653 297H117.291L163.15 168.67H181.644L226.749 297H208.82L195.987 260.011H147.486ZM191.269 245.668L176.738 203.395C174.284 196.79 172.586 191.506 171.831 188.297H171.642C170.699 191.506 169.189 196.601 166.736 203.584L152.393 245.668H191.269ZM338.223 239.252L357.661 168.67H374.646L337.846 297H324.447L301.8 219.436C299.158 210.189 297.837 204.527 296.705 199.998C295.006 206.792 293.685 211.321 291.421 219.814L269.152 297L255.941 297L217.631 168.67H235.559L255.752 239.629C258.961 250.764 262.169 263.597 263.113 266.994C265.566 257.558 267.831 248.31 270.473 239.252L290.1 168.67H302.932L323.692 239.629C326.9 250.575 330.297 263.03 331.052 266.427C331.052 266.427 335.77 248.122 338.223 239.252ZM407.352 168.67L467.743 254.915C471.706 260.577 476.612 268.126 477.367 269.447H477.556C477.556 269.447 477.179 260.011 477.179 248.688V168.67H493.786V297H477.367L417.354 210.566C413.769 205.471 408.107 196.601 407.352 195.091H407.163C407.163 195.091 407.541 203.395 407.541 210.944V297H390.933V168.67H407.352ZM543.291 232.835C543.291 193.77 565.749 166.406 601.605 166.406C637.274 166.406 659.731 193.77 659.731 232.835C659.731 271.9 637.651 299.265 601.605 299.265C565.749 299.265 543.291 271.9 543.291 232.835ZM560.653 232.835C560.653 264.163 576.128 284.544 601.605 284.544C626.894 284.544 642.369 264.163 642.369 232.835C642.369 201.508 627.083 181.126 601.605 181.126C576.128 181.126 560.653 201.319 560.653 232.835ZM692.021 297H675.414V168.67H760.149V183.391H692.021V223.399H753.544V238.119H692.021V297Z"
        fill="white"
      />
    </svg>
  );
};

const LogoSvg2: React.FC = () => {
  return (
    <svg
      width="830"
      height="293"
      viewBox="0 0 830 293"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M95.1149 114.091L95.1149 129L14.9089 129L14.9089 0.670398L31.705 0.670398L31.705 114.091L95.1149 114.091ZM128.641 0.670398L128.641 129H112.033L112.033 0.670398L128.641 0.670398ZM165.648 129H149.04L149.04 0.670398L233.775 0.670398V15.3905L165.648 15.3905V55.3992L227.17 55.3992V70.1194L165.648 70.1194L165.648 129ZM340.734 114.091V129L251.281 129L251.281 0.670398L337.148 0.670398V15.5793L267.888 15.5793V55.5879L330.732 55.5879V70.4968L267.888 70.4968V114.091L340.734 114.091Z"
        fill="white"
      />
      <path
        d="M31.705 234.271L31.705 289H14.9089L14.9089 160.67H62.655C75.488 160.67 82.6594 161.991 88.6984 164.445C101.909 170.295 110.212 181.241 110.212 197.471C110.212 211.436 103.796 222.004 93.6051 228.043C84.3578 233.516 74.9218 234.271 60.5791 234.271H31.705ZM31.705 175.391L31.705 219.551H62.4663C71.7136 219.551 76.0542 218.796 80.5834 217.286C89.642 213.889 93.2277 207.284 93.2277 197.471C93.2277 187.657 89.642 181.052 80.5834 177.655C76.0542 176.145 71.7136 175.391 62.4663 175.391H31.705ZM142.19 234.082L142.19 289H125.583L125.583 160.67H173.895C186.728 160.67 194.277 162.18 200.316 164.445C213.338 169.729 221.264 181.241 221.264 197.471C221.264 218.041 207.487 230.308 188.804 233.328L225.038 289H204.279L169.177 234.082H142.19ZM142.19 219.362H171.064C182.954 219.362 188.238 218.23 193.145 216.154C200.316 212.757 204.09 206.341 204.09 197.282C204.09 188.412 199.939 181.618 192.767 178.41C188.049 176.523 182.954 175.391 170.876 175.391H142.19V219.362ZM230.664 224.835C230.664 185.77 253.122 158.406 288.979 158.406C324.647 158.406 347.105 185.77 347.105 224.835C347.105 263.9 325.024 291.265 288.979 291.265C253.122 291.265 230.664 263.9 230.664 224.835ZM248.027 224.835C248.027 256.163 263.502 276.544 288.979 276.544C314.267 276.544 329.742 256.163 329.742 224.835C329.742 193.508 314.456 173.126 288.979 173.126C263.502 173.126 248.027 193.319 248.027 224.835ZM384.408 160.67H401.015V258.239C401.015 268.241 399.506 273.714 396.486 278.432C390.258 288.434 377.991 291.265 365.725 291.265C357.798 291.265 353.08 290.321 350.061 289.566V274.469C353.647 275.601 358.553 276.733 364.026 276.733C368.933 276.733 374.972 275.79 379.124 272.393C384.408 268.052 384.408 260.692 384.408 248.425V160.67ZM510.162 274.091V289L420.709 289V160.67L506.576 160.67V175.579L437.316 175.579V215.588L500.16 215.588V230.497L437.316 230.497V274.091L510.162 274.091ZM609.865 252.2L624.963 259.748C615.715 279.375 597.976 291.265 574.386 291.265C540.416 291.265 515.882 266.731 515.882 224.835C515.882 185.77 538.34 158.406 574.386 158.406C597.032 158.406 614.205 169.54 623.83 187.657L609.676 197.282C603.071 181.618 590.804 172.937 574.386 172.937C548.908 172.937 533.245 193.319 533.245 224.835C533.245 256.163 548.908 276.733 574.386 276.733C590.993 276.733 603.26 267.675 609.865 252.2ZM627.911 175.579V160.67H723.404V175.579H683.961V289H667.354V175.579H627.911ZM822.142 179.92L809.876 190.299C801.761 178.788 790.249 173.126 775.34 173.126C759.865 173.126 748.353 180.297 748.353 193.13C748.353 204.642 755.147 208.983 770.999 212.946L788.362 217.286C809.498 222.759 825.728 230.308 825.728 253.143C825.728 277.299 804.78 291.265 777.416 291.265C753.26 291.265 735.331 280.13 726.273 265.033L739.861 255.408C745.9 266.731 759.299 276.356 778.359 276.356C795.533 276.356 808.555 268.996 808.555 254.087C808.555 241.443 798.741 236.536 782.323 232.384L766.659 228.421C747.975 223.514 731.557 217.475 731.557 194.64C731.557 171.239 751.939 158.406 775.529 158.406C799.496 158.406 814.405 169.54 822.142 179.92Z"
        fill="white"
      />
    </svg>
  );
};

const TimeSvg: React.FC = () => {
  return (
    <svg
      width="254"
      height="64"
      viewBox="0 0 254 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.1302 9.3432L0.500596 9.12176C0.362196 8.81728 0.0853956 7.71008 0.0853956 6.63056C0.0853956 3.5304 2.38284 0.845439 6.3134 0.845439C10.6592 0.845439 12.4584 3.64112 12.4584 6.96272C12.4584 11.1978 9.10908 14.2702 5.8982 16.4846C5.15084 16.9829 4.32044 17.5088 3.62844 17.924H12.5968V20H0.223796V18.0347C1.82924 17.0382 4.5142 14.9899 6.61788 13.163C8.44476 11.5576 10.0225 9.73072 10.0225 7.07344C10.0225 4.41616 8.41708 2.92144 6.175 2.92144C3.71148 2.92144 2.52124 4.55456 2.52124 6.60288C2.52124 7.51632 2.715 8.45744 3.1302 9.3432ZM21.8652 2.86608C18.6267 2.86608 17.215 6.21536 17.215 10.5611C17.215 14.6578 18.2392 18.2838 21.8652 18.2838C25.519 18.2838 26.5155 14.6578 26.5155 10.5611C26.5155 6.21536 25.1038 2.86608 21.8652 2.86608ZM21.8652 20.3322C16.4676 20.3322 14.6961 15.5712 14.6961 10.6165C14.6961 5.30192 16.8828 0.845439 21.8652 0.845439C26.8476 0.845439 29.0344 5.27424 29.0344 10.6165C29.0344 15.5435 27.2352 20.3322 21.8652 20.3322ZM34.1231 9.3432L31.4935 9.12176C31.3551 8.81728 31.0783 7.71008 31.0783 6.63056C31.0783 3.5304 33.3758 0.845439 37.3063 0.845439C41.6521 0.845439 43.4513 3.64112 43.4513 6.96272C43.4513 11.1978 40.102 14.2702 36.8911 16.4846C36.1438 16.9829 35.3134 17.5088 34.6214 17.924H43.5897V20H31.2167V18.0347C32.8222 17.0382 35.5071 14.9899 37.6108 13.163C39.4377 11.5576 41.0155 9.73072 41.0155 7.07344C41.0155 4.41616 39.41 2.92144 37.1679 2.92144C34.7044 2.92144 33.5142 4.55456 33.5142 6.60288C33.5142 7.51632 33.7079 8.45744 34.1231 9.3432ZM56.6503 15.3498V20H54.2975V15.3498H45.7444V13.5782L54.4913 1.1776H56.6503V13.2461H59.8059V15.3498H56.6503ZM48.374 13.2461H54.2975V7.23952C54.2975 5.77248 54.3529 5.24656 54.4083 4.4992C53.9654 5.24656 53.3841 6.27072 52.6644 7.2672L48.374 13.2461ZM70.7351 1.1776H72.9772L63.0678 20H60.798L70.7351 1.1776Z"
        fill="white"
      />
      <path
        d="M11.097 34.6576V63H7.55424V43.4938H0.0935194V40.7012H1.01048C3.2612 40.7012 4.76168 40.2844 5.84536 39.4925C7.26248 38.4505 7.92936 36.825 8.01272 34.6576H11.097ZM28.096 37.2001C23.2194 37.2001 21.0937 42.2434 21.0937 48.7871C21.0937 54.9558 22.6359 60.4158 28.096 60.4158C33.5977 60.4158 35.0982 54.9558 35.0982 48.7871C35.0982 42.2434 32.9725 37.2001 28.096 37.2001ZM28.096 63.5002C19.9684 63.5002 17.3008 56.3312 17.3008 48.8705C17.3008 40.8679 20.5936 34.1574 28.096 34.1574C35.5984 34.1574 38.8911 40.8262 38.8911 48.8705C38.8911 56.2895 36.1819 63.5002 28.096 63.5002ZM52.9307 34.6576H56.3068L41.3854 63H37.9676L52.9307 34.6576ZM70.452 34.6576V63H66.9092V43.4938H59.4484V40.7012H60.3654C62.6161 40.7012 64.1166 40.2844 65.2003 39.4925C66.6174 38.4505 67.2843 36.825 67.3676 34.6576H70.452ZM87.4509 37.2001C82.5743 37.2001 80.4487 42.2434 80.4487 48.7871C80.4487 54.9558 81.9908 60.4158 87.4509 60.4158C92.9527 60.4158 94.4531 54.9558 94.4531 48.7871C94.4531 42.2434 92.3275 37.2001 87.4509 37.2001ZM87.4509 63.5002C79.3233 63.5002 76.6558 56.3312 76.6558 48.8705C76.6558 40.8679 79.9485 34.1574 87.4509 34.1574C94.9533 34.1574 98.246 40.8262 98.246 48.8705C98.246 56.2895 95.5368 63.5002 87.4509 63.5002Z"
        fill="white"
      />
      <path
        d="M127.59 41.9216H130.947L138.455 49.4608L130.947 57H127.59L134.147 50.5695H115.584V48.3838H134.178L127.59 41.9216Z"
        fill="white"
      />
      <path
        d="M167.453 34.6576V63H163.91V43.4938H156.449V40.7012H157.366C159.617 40.7012 161.118 40.2844 162.201 39.4925C163.618 38.4505 164.285 36.825 164.369 34.6576H167.453ZM184.452 37.2001C179.575 37.2001 177.45 42.2434 177.45 48.7871C177.45 54.9558 178.992 60.4158 184.452 60.4158C189.954 60.4158 191.454 54.9558 191.454 48.7871C191.454 42.2434 189.328 37.2001 184.452 37.2001ZM184.452 63.5002C176.324 63.5002 173.657 56.3312 173.657 48.8705C173.657 40.8679 176.949 34.1574 184.452 34.1574C191.954 34.1574 195.247 40.8262 195.247 48.8705C195.247 56.2895 192.538 63.5002 184.452 63.5002ZM209.287 34.6576H212.663L197.741 63H194.324L209.287 34.6576ZM226.808 34.6576V63H223.265V43.4938H215.804V40.7012H216.721C218.972 40.7012 220.473 40.2844 221.556 39.4925C222.973 38.4505 223.64 36.825 223.724 34.6576H226.808ZM253.185 41.3681L249.892 42.2017C249.517 40.6595 248.35 37.2001 244.432 37.2001C240.222 37.2001 237.972 40.8679 237.722 47.1616C239.055 45.4944 241.556 44.119 244.807 44.119C250.392 44.119 253.852 48.1202 253.852 53.2886C253.852 58.6653 250.517 63.5002 244.265 63.5002C237.847 63.5002 233.97 59.0404 233.97 49.0372C233.97 39.7426 237.722 34.1574 244.557 34.1574C250.517 34.1574 252.768 38.4088 253.185 41.3681ZM250.226 53.497C250.226 49.454 247.683 47.245 244.265 47.245C241.723 47.245 239.055 48.6621 237.722 50.9128C237.847 56.5813 240.222 60.4158 244.265 60.4158C247.808 60.4158 250.226 57.7066 250.226 53.497Z"
        fill="white"
      />
    </svg>
  );
};
