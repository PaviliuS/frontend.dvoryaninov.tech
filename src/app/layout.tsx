import type { Metadata, Viewport } from "next";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "ru", namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      type: "website",
      title: t("title"),
      description: t("description"),
      siteName: t("title"),
      url: process.env.NEXT_PUBLIC_URL,
      // images: [
      //   {
      //     url: `${process.env.NEXT_PUBLIC_URL}/open-graph-image.jpg`,
      //     secureUrl: `${process.env.NEXT_PUBLIC_URL}/open-graph-image.jpg`,
      //     width: 1200,
      //     height: 630,
      //     alt: t("title"),
      //   },
      // ],
    },
    icons: {
      icon: [
        {
          type: "image/png",
          url: "/favicon-512x512.png",
          sizes: "512x512",
        },
        {
          type: "image/png",
          url: "/favicon-192x192.png",
          sizes: "192x192",
        },
        { type: "image/png", url: "/favicon-32x32.png", sizes: "32x32" },
        { type: "image/png", url: "/favicon-16x16.png", sizes: "16x16" },
        { type: "image/x-icon", url: "/favicon.ico", sizes: "48x48" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [{ color: "var(--background)" }],
  width: "device-width",
  initialScale: 1,
};

interface LayoutProps {
  children: ReactNode;
}
export default async function Layout({ children }: LayoutProps) {
  return children;
}
