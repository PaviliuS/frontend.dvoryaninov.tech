"use client";

import { ContactList } from "@/models/contacts";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("metadata");

  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="flex w-full flex-col gap-4 border-primary/10 border-t py-8 md:gap-6 lg:gap-8">
          <ContactList size="sm" />
          <div className="flex w-full flex-col gap-4 md:w-4/5">
            <p className="text-balance text-primary/80 text-sm lg:text-base">
              {t("description")}
            </p>
            <p className="text-sm lg:text-base">{`© ${year} ${t("title")}`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
