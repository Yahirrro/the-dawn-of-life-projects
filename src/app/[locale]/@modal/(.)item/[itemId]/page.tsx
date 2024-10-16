import { Dialog } from "@ark-ui/react";
import { Icon, Share, XIcon } from "lucide-react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
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
  slots: ["wrapper", "title", "footer", "images", "header"],
  base: {
    wrapper: {
      position: "relative",
      overflow: "scroll",
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
    images: {
      display: "grid",
      gap: "16px",
      mt: "72px",
    },
    footer: {
      mt: "72px",
      // position: "absolute",
      // bottom: "64px",
      // left: "64px",
      mdDown: {
        // bottom: "48px",
        // left: "28px",
      },
    },
  },
  variants: {
    isPage: {
      true: {
        wrapper: {
          overflow: "initial",
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

// {
//   "id": "60906ae3-df0b-49c7-ace7-b44a7db3d373",
//   "description": "本の背表紙が並ぶ光景は、未知なる世界への扉が開かれているようでワクワクする。本をきっかけに「聞く、そして語ること」がはじまる場をつくり、本人さえも気がつくことがなかった語りや創造力を記録していく。",
//   "author": "今井 咲希",
//   "image": [
//   {
//   "name": "20241015-Untitled Session 20182.jpg",
//   "url": "https://www.notion.so/image/https:%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1180f784-7de0-4fa9-b2da-64a6fc32c16c%2Fd1b40ec0-50bd-423c-8f11-1a4d4bdc2161%2F20241015-Untitled_Session_20182.jpg?table=block&id=60906ae3-df0b-49c7-ace7-b44a7db3d373&cache=v2",
//   "rawUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/1180f784-7de0-4fa9-b2da-64a6fc32c16c/d1b40ec0-50bd-423c-8f11-1a4d4bdc2161/20241015-Untitled_Session_20182.jpg"
//   },
//   {
//   "name": "20241015-Untitled Session 20192.jpg",
//   "url": "https://www.notion.so/image/https:%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1180f784-7de0-4fa9-b2da-64a6fc32c16c%2F78ce0842-6e1d-43e9-81d2-e612b14923ff%2F20241015-Untitled_Session_20192.jpg?table=block&id=60906ae3-df0b-49c7-ace7-b44a7db3d373&cache=v2",
//   "rawUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/1180f784-7de0-4fa9-b2da-64a6fc32c16c/78ce0842-6e1d-43e9-81d2-e612b14923ff/20241015-Untitled_Session_20192.jpg"
//   },
//   {
//   "name": "20241015-Untitled Session 20197.jpg",
//   "url": "https://www.notion.so/image/https:%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1180f784-7de0-4fa9-b2da-64a6fc32c16c%2F0edb578a-d3a0-4da8-ae2f-b01fa8c3b343%2F20241015-Untitled_Session_20197.jpg?table=block&id=60906ae3-df0b-49c7-ace7-b44a7db3d373&cache=v2",
//   "rawUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/1180f784-7de0-4fa9-b2da-64a6fc32c16c/0edb578a-d3a0-4da8-ae2f-b01fa8c3b343/20241015-Untitled_Session_20197.jpg"
//   }
//   ],
//   "title": "個人の内なる声を引き出す、本がある環境の可能性"
//   },

export const ItemContent: React.FC<{
  isPage?: boolean;
  title?: string;
  author?: string;
  description?: string;
  image?: {
    name: string;
    url: string;
    rawUrl: string;
  }[];
}> = ({ isPage, title, author, description, image }) => {
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

      <div className={styles.images}>
        {image?.map((img) => (
          <div key={img.name}>
            <Image
              src={img.url}
              alt={img.name}
              width={1920}
              height={1280}
              className={css({
                backgroundColor: "lightgray",
              })}
            />
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <ItemContentShare />
      </footer>
    </div>
  );
};
