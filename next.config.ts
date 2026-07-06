import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server output for Node hosts (Azure App Service, containers).
  // Produces .next/standalone/server.js — deploy that + .next/static + public.
  output: "standalone",
  // Allow the dev server to serve /_next/* assets to other devices on the LAN
  // (e.g. testing on a phone). Silences the cross-origin dev warning.
  allowedDevOrigins: ["192.168.80.249"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
