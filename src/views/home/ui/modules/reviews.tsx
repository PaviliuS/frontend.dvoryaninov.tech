"use client";

import { ReviewList } from "@/models/reviews";
import { Title } from "@/shared/ui/modules/title";
import { useTranslations } from "next-intl";

export function ReviewModule() {
  const t = useTranslations("home.reviews");

  return (
    <section>
      <div className="container">
        <div className="flex w-full flex-col gap-8">
          <Title title={t("title")} description={t("description")} />
          <ReviewList />
        </div>
      </div>
    </section>
  );
}
