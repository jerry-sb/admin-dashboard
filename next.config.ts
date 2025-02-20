export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        search: ""
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        search: ""
      }
    ]
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true,
  }
};
