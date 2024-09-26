import { notFound } from "next/navigation";
import { getItems } from "./util/getItems";
import { ItemContent } from "~/app/[locale]/@modal/(.)item/[itemId]/page";

export const ItemCotentWrapper: React.FC<{
  itemId: string;
}> = async ({ itemId }) => {
  const data = await getItems();
  const item = data.find((d) => d.id === itemId);
  if (!item) {
    return notFound();
  }
  return (
    <ItemContent
      title={item.title}
      author={item.author}
      description={item.description}
    />
  );
};
