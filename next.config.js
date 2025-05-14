import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/shared/i18n/request.ts");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ["."],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  reactStrictMode: true,
  transpilePackages: ["lucide-react"],
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: process.env.NEXT_AWS_HOSTNAME,
  //       pathname: "/**",
  //     },
  //   ],
  // },
};

export default withNextIntl(nextConfig);
