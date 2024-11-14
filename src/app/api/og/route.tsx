import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "40px",
        }}
      >
        <div style={{ display: "flex", fontSize: 40 }}>
          <span style={{ marginRight: 8 }}>{DATA.name}</span>
        </div>
        <div style={{ fontSize: 25, marginTop: 16 }}>{DATA.description}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
