export const getItems: () => Promise<
  {
    id: string;
    title: string;
    description: string;
    author: string;
    image: {
      name: string;
      url: string;
      rawUrl: string;
    }[];
  }[]
> = async () => {
  const url =
    "https://notion-api.splitbee.io/v1/table/2ea63ccd468842169da674c418a1c5e2";

  const data: {
    id: string;
    title: string;
    description: string;
    author: string;
    image: {
      name: string;
      url: string;
      rawUrl: string;
    }[];
  }[] = await fetch(url, {
    next: {
      revalidate: 1,
      tags: ["items"],
    },
  }).then((res) => res.json());

  // uuidのハイフンを無くし整形
  return data.map((d) => ({
    id: d.id.replace(/-/g, ""),
    title: d.title,
    description: d.description,
    author: d.author,
    image: d.image,
  }));
};
