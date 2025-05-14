import type { ReactNode } from "react";

import { AppLayout } from "@/config/layouts/app-layout";
import { RootProvider } from "@/config/providers/root-provider";
import type { LocaleType } from "@/shared/types";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: LocaleType }>;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

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

interface Props {
  children: ReactNode;
  params: Promise<{ locale: LocaleType }>;
}

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <RootProvider locale={locale}>
      <AppLayout>{children}</AppLayout>
    </RootProvider>
  );
}
