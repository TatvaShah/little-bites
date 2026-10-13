import { ImageResponse } from "next/og";

// Build-time source for public/og.jpg. scripts/make-og.mjs reads the prerendered PNG
// from .next and saves a compressed 1200x630 JPEG. Not linked anywhere on the site.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#241614",
          color: "#f7f0e8",
          padding: "68px 76px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#e7b4bc",
          }}
        >
          <span>Little Bites</span>
          <span>Serving the GTA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 86, lineHeight: 0.95 }}>Little bites.</div>
          <div style={{ fontSize: 86, lineHeight: 0.95, color: "#e7b4bc" }}>
            Big celebrations.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#f3d7c8" }}>
            Bites, bowls, platters, pasta trays, desserts, and drinks.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
