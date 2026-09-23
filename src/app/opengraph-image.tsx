import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = "Maya Suites — Conciergerie Airbnb à Casablanca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1b1560",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 150,
            height: 150,
            transform: "rotate(45deg)",
            background: "#dfa600",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              transform: "rotate(-45deg)",
              fontSize: 76,
              fontWeight: 700,
              color: "#1b1560",
            }}
          >
            M
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -1,
            color: "#fbf7ee",
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 32,
            color: "#dfa600",
          }}
        >
          Conciergerie Airbnb à Casablanca
        </div>
      </div>
    ),
    { ...size }
  );
}
