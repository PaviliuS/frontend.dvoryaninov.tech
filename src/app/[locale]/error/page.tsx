import type { LocaleType } from "@/shared/types";
import { NotFoundView } from "@/views/error/ui";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const revalidate = 600;
export const dynamic = "force-static";

interface Props {
  params: Promise<{ locale: LocaleType }>;
}

export async function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "notFound",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "notFound",
  });

  return (
    <NotFoundView
      title={t("title")}
      description={t("description")}
      button={t("button")}
    />
  );
}
