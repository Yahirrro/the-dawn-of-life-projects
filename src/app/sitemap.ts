import { MetadataRoute } from "next";
import { getItems } from "~/components/util/getItems";

// Adapt this as necessary
const host = "https://the-dawn-of-life-projects.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Adapt this as necessary
  return [
    {
      url: host + "/ja",
      lastModified: new Date(),
      alternates: {
        languages: {
          ja: host + "/ja",
          en: host + "/en",
        },
      },
    },
    ...(await itemsGenerator()),
  ];
}

const itemsGenerator = async () => {
  const items = await getItems();
  return items.map((item) => ({
    url: `${host}/ja/item/${item.id}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        ja: `${host}/ja/item/${item.id}`,
        en: `${host}/en/item/${item.id}`,
      },
    },
  }));
};
