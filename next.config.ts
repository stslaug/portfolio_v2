import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    distDir: "build",
    images: {
        // List of allowed image domains
        remotePatterns: [
            {
                protocol: 'https', // The protocol (http or https)
                hostname: 'cards.scryfall.io', // The hostname of the domain
                port: '', // Leave empty if default port (80 for http, 443 for https)
                pathname: '/normal/front/**', // Optional: restrict to specific paths if needed, otherwise use '/**'
            },
        ],
        // Alternatively, for older Next.js versions or simpler configurations:
        // domains: ['cards.scryfall.io'], // Deprecated but often still works for basic cases
    }
};

export default nextConfig;
