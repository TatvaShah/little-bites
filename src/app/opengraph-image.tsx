import { ImageResponse } from "next/og";

export const alt =
  "Little Bites. Big celebrations. Party catering across the GTA.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          <div style={{ fontSize: 86, lineHeight: 0.95, fontStyle: "italic" }}>
            Big celebrations.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#f3d7c8" }}>
            Platters, slider trays, grazing tables, and kids munch cups.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
