import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { projectRequests } from "@/models/projects/api";
import type { LocaleType } from "@/shared/types";
import { HomeView } from "@/views/home";

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
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  try {
    const projects = await projectRequests.getProjects.fn({
      locale,
      limit: 2,
    });
    return <HomeView projects={projects.results} />;
  } catch {
    return <HomeView projects={[]} />;
  }
}
