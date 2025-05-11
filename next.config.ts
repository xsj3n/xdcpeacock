import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants"

const nextDevConfig: NextConfig = {
  reactStrictMode: true,
};

const nextProdConfig: NextConfig = {
  basePath: "/xdcpeacock",
  output: "export",
  reactStrictMode: true,
};

export default function nextConfig(phase: string) {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextDevConfig;
  }
  return nextProdConfig;
}
