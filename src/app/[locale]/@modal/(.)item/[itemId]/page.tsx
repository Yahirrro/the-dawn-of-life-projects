import { Dialog } from "@ark-ui/react";
import { Icon, Share, XIcon } from "lucide-react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { css, sva } from "styled-system/css";
import { ItemContentShare } from "~/components/ItemContentShare";
import { ItemCotentWrapper } from "~/components/ItemContentWrapper";
import { ItemModal } from "~/components/ItemModal";
import { PaltSettingsContainer } from "~/components/PaltSettingContainer";
import { getItems } from "~/components/util/getItems";

export async function generateMetadata({
  params: { locale, itemId },
}: {
  params: { locale: string; itemId: string };
}): Promise<Metadata> {
  const data = await getItems();
  const item = data.find((d) => d.id === itemId);

  if (!item) {
    return notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: item.title + " | " + item.author + " | " + t("title"),
    description: item.description,
    openGraph: {
      siteName: t("title"),
      title: item.title + " | " + item.author,
      description: item.description,
      type: "article",
      url:
        "https://the-dawn-of-life-projects.vercel.app/" +
        locale +
        "/item/" +
        item.id,
      locale: locale,
      images: [
        {
          url: "https://the-dawn-of-life-projects.vercel.app/ogp-1.jpg",
          width: 1200,
          height: 675,
          alt: t("title"),
        },
      ],
    },
  };
}

export default function Page({ params }: { params: { itemId: string } }) {
  return (
    <ItemModal>
      <ItemCotentWrapper itemId={params.itemId} />
    </ItemModal>
  );
}

const itemContentStyles = sva({
  slots: ["wrapper", "title", "footer", "header"],
  base: {
    wrapper: {
      position: "relative",
      backgroundColor: "#5982AD",
      color: "white",
      px: "64px",
      py: "72px",
      zIndex: 100,
      width: "80vw",
      maxWidth: "800px",
      height: "calc(100vh - 96px)",
      mdDown: {
        height: "100svh",
        width: "100vw",
        mt: "48px",
        px: "28px",
        py: "56px",
      },
    },
    title: {
      fontSize: "32px",
      letterSpacing: "-0.1em",
    },
    footer: {
      position: "absolute",
      bottom: "64px",
      left: "64px",
      mdDown: {
        bottom: "48px",
        left: "28px",
      },
    },
  },
  variants: {
    isPage: {
      true: {
        wrapper: {
          maxWidth: "640px",
          mx: "auto",
          height: "auto",
          width: "auto",
          px: "28px",
          py: "56px",
          pb: "192px",
          mdDown: {
            px: "28px",
            py: "24px",
            pb: "128px",
            height: "auto",
            width: "auto",
          },
        },
        footer: {
          position: "static",
          mt: "48px",
        },
        header: {
          mb: "48px",
        },
      },
    },
  },
});

export const ItemContent: React.FC<{
  isPage?: boolean;
  title?: string;
  author?: string;
  description?: string;
}> = ({ isPage, title, author, description }) => {
  const t = useTranslations("exibition-modal");
  const styles = itemContentStyles({
    isPage,
  });
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <p
            className={css({
              fontSize: "14px",
              mb: "8px",
            })}
          >
            <PaltSettingsContainer>{t("exhibition")}</PaltSettingsContainer>
          </p>

          <h1 className={styles.title}>
            <PaltSettingsContainer>{title}</PaltSettingsContainer>
          </h1>

          <p
            className={css({
              fontSize: "16px",
              mt: "14px",
            })}
          >
            <PaltSettingsContainer>{author}</PaltSettingsContainer>
          </p>
        </div>
      </header>

      <p
        className={css({
          fontSize: "16px",
          mt: "40px",
        })}
      >
        <PaltSettingsContainer>{description}</PaltSettingsContainer>
      </p>

      <footer className={styles.footer}>
        <ItemContentShare />
      </footer>
    </div>
  );
};
