/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "baybee.co.in",
      },
      {
        protocol: "https",
        hostname: "blog.ipleaders.in",
      },
      {
        protocol: "https",
        hostname: "www.skillstork.org",
      },
      {
        protocol: "https",
        hostname: "photoai.com", // Add this line
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com", // Add this line
      },
      {
        protocol: "https",
        hostname: "mailrelay.com", // Add this line
      },
      {
        protocol: "https",
        hostname: "miro.medium.com", // Add this line
      },
      {
        protocol: "https",
        hostname: "www.webnode.com", // Add this line
      },
      {
        protocol: "https",
        hostname: "navi.com", // Add this line
      },
      {
        protocol: "https",
        hostname: "media.licdn.com", // Add this line
      },
    ],
  },
  webpack(config, { isServer }) {
    // Adding rule for handling video files
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "static/videos", // Output videos to the static/videos folder
        },
      },
    });

    // Optionally handle asset prefix for static files (CDN)
    if (!isServer) {
      config.output.publicPath = "/_next/";
    }

    return config;
  },
};

export default nextConfig;
