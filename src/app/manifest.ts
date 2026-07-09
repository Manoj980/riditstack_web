import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RiditStack",
    short_name: "RiditStack",
    description:
      "Enterprise AI company building intelligent software for procurement, automation, cloud, and data.",
    start_url: "/",
    display: "standalone",
    background_color: "#15161f",
    theme_color: "#15161f",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
