import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { LocaleEnum } from "../types";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [LocaleEnum.RU, LocaleEnum.EN],

  // Used when no locale matches
  defaultLocale: LocaleEnum.RU,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
