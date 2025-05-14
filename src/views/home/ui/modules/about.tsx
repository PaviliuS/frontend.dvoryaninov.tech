"use client";

import { useTranslations } from "next-intl";

import { useLocalizedData } from "@/shared/hooks/utils/use-localized-data";
import { Title } from "@/shared/ui/modules/title";
import { aboutData } from "../../config";

export function AboutModule() {
  const t = useTranslations();

  const localizedAboutList = useLocalizedData({ data: aboutData });

  return (
    <section>
      <div className="container">
        <div className="flex w-full flex-col gap-8">
          <Title title={t("home.about.title")} />
          <div className="flex w-full flex-col gap-4 rounded-base border border-primary/10 p-4 md:flex-row md:gap-6 md:p-6 lg:gap-8 lg:p-8">
            <div className="flex size-[160px] shrink-0 rounded-base bg-primary/5 object-cover object-top md:size-[220px]" />
            <div className="flex flex-1 flex-col gap-4">
              {localizedAboutList.map((p) => (
                <p
                  key={p.id}
                  className="overflow-hidden text-pretty break-words text-base text-primary/80 lg:text-lg"
                >
                  {p.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
