import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nguyen Kim Thi - Portfolio",
    short_name: "KimThi",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#3abff8",
    icons: [
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
