"use client";

import { useTranslations } from "next-intl";

import { PartnerList } from "@/models/partners";
import { Title } from "@/shared/ui/modules/title";

export function PartnerModule() {
  const t = useTranslations("home.partners");

  return (
    <section>
      <div className="container">
        <div className="flex size-full flex-col gap-8">
          <Title title={t("title")} description={t("description")} />
          <PartnerList />
        </div>
      </div>
    </section>
  );
}
