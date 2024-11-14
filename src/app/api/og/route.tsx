import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lou Tigroudja - Développeur Full-Stack";
export const contentType = "image/png";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(45deg, #1a1a2e 0%, #16213e 100%)",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "80px",
          }}
        >
          <div style={{ color: "white", fontSize: 130 }}>LT</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_URL}/me.jpeg`}
              width="80"
              height="80"
              style={{ borderRadius: "50%" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <div style={{ fontSize: 48, fontWeight: "bold" }}>
                Lou TIGROUDJA
              </div>
              <div style={{ fontSize: 32, opacity: 0.8 }}>
                Développeur Full-Stack @ DataIPA / Freelance
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
