"use client";

import { useParams } from "next/navigation";

import { Button } from "@/shared/ui/button";
import { useTranslations } from "next-intl";
import { useUpdateLocale } from "../hooks/use-update-locale";

interface LocaleButtonProps {
  className?: string;
}
export function LocaleButton({ className = "" }: LocaleButtonProps) {
  const t = useTranslations("config");

  const { locale, setLocale } = useUpdateLocale();

  const { slug } = useParams<{ slug: string }>();
  const isProjectPage = Boolean(slug);

  return locale ? (
    <Button
      title={t("changeLocale")}
      size="icon-base"
      rounded={"sm"}
      variant="link"
      onClick={() => {
        setLocale();
      }}
      className={className}
      disabled={isProjectPage}
    >
      <p className="truncate font-normal uppercase">{locale}</p>
    </Button>
  ) : null;
}
