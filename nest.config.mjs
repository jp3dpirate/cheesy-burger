/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // NOTE: images.unsplash.com is used ONLY for placeholder photography.
    // Replace every placeholder image URL in /data and /components with the
    // restaurant's own photography, then you can remove this remotePattern
    // (or add your own CDN/domain here instead).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
