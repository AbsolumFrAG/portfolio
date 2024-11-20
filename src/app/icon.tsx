import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 24,
            background: "linear-gradient(45deg, #1a1a2e 0%, #16213e 100%)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold"
          }}
        >
          LT
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
