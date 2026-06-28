import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Förskolan Harpan",
    short_name: "Harpan",
    description: "Kristen förskola med musikprofil i Hässleholm.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDF7",
    theme_color: "#F7C948",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
