"use client";

import { SkillList } from "@/models/skills";
import { Title } from "@/shared/ui/modules/title";
import { useTranslations } from "next-intl";

export function SkillModule() {
  const t = useTranslations("home.skills");

  return (
    <section>
      <div className="container">
        <div className="flex w-full flex-col gap-8">
          <Title title={t("title")} description={t("description")} />
          <SkillList />
        </div>
      </div>
    </section>
  );
}
