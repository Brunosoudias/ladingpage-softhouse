import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // IPs da rede local usados para testar o site no celular (npm run dev).
  allowedDevOrigins: ["192.168.1.7", "192.168.1.29"],
};

export default nextConfig;
