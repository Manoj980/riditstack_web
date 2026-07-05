import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server output for Node hosts (Azure App Service, containers).
  // Produces .next/standalone/server.js — deploy that + .next/static + public.
  output: "standalone",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
