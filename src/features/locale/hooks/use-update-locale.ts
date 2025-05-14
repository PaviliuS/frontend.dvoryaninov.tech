"use client";

import { useTransition } from "react";

import { usePathname, useRouter } from "@/shared/i18n/routing";
import { LocaleEnum } from "@/shared/types";
import { useParams } from "next/navigation";

export const useUpdateLocale = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [, startTransition] = useTransition();

  const locale = String(params.locale ?? "");

  function setLocale() {
    const { RU, EN } = LocaleEnum;
    const nextLocale = locale === RU ? EN : RU;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return { locale, setLocale };
};
