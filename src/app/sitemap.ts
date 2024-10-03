// related: https://github.com/vercel/next.js/issues/67005

import { MetadataRoute } from "next";
import { getItems } from "~/components/util/getItems";

const host = "https://the-dawn-of-life-projects.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: host + "/ja",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...((await itemsGenerator()) as any),
  ];
}

const itemsGenerator = async () => {
  const items = await getItems();
  return items.map((item) => ({
    url: `${host}/ja/item/${item.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));
};
