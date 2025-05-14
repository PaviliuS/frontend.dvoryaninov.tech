"use client";

import { useTranslations } from "next-intl";

export function LogoModule() {
  const t = useTranslations("metadata");

  return <p className="font-medium text-base text-primary">{t("title")}</p>;
}
