import { ImageResponse } from "next/og";
import { getProductBySlug } from "@/lib/catalog";

export const alt = "Chishti Publications product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProductOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const title = product?.name ?? "Chishti Publications";
  const category = product?.category ?? "Catalog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12315A",
          color: "#F3F6FB",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#D6E6F7" }}>
          CHISHTI PUBLICATIONS
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ display: "flex", fontSize: 24, color: "#D6E6F7", marginBottom: 18 }}>
            {category}
          </div>
          <div style={{ display: "flex", fontSize: 64, lineHeight: 1.05 }}>{title}</div>
        </div>
        <div style={{ display: "flex", fontSize: 24 }}>chishtipublications.com</div>
      </div>
    ),
    { ...size },
  );
}
