/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
            pathname: "/**",
          },
        ],
        domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
      },
};

export default nextConfig;
