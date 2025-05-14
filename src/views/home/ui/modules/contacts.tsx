"use client";

import { ContactList } from "@/models/contacts";
import { Title } from "@/shared/ui/modules/title";
import { useTranslations } from "next-intl";

export function ContactModule() {
  const t = useTranslations("home.contacts");
  return (
    <section className="translate-y-[-80px] pt-[160px]" id="contacts">
      <div className="container">
        <div className="flex w-full flex-col gap-8">
          <Title title={t("title")} description={t("description")} />
          <ContactList />
        </div>
      </div>
    </section>
  );
}
