import { ImageResponse } from "next/og";
import { getItems } from "~/components/util/getItems";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "THE DAWN OF LIFE PROJECTS";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params: { itemId },
}: {
  params: { itemId: string };
}) {
  const data = await getItems();
  const item = data.find((d) => d.id === itemId);

  const image = item?.image[0];

  console.log(image?.url);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#5982AD",
        }}
      >
        {image && (
          <img
            src={image.url}
            alt={alt}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
        <img
          src="https://dawnlifepj.musabi.ac.jp/images/ogp-template.png"
          alt="THE DAWN OF LIFE PROJECTS"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
