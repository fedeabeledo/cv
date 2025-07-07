import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.gravatar.com",
                port: "",
                pathname: "/avatar/**",
            },
            {
                protocol: "https",
                hostname: "gravatar.com",
                port: "",
                pathname: "/avatar/**",
            },
        ],
    },
};

export default nextConfig;
