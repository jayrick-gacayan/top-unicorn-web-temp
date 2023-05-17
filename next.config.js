/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w0.peakpx.com",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "c4.wallpaperflare.com",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
