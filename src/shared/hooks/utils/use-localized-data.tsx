"use client";

import { useLocale } from "next-intl";

interface UseLocalizedDataProps<T extends { locale?: string }[]> {
  data: T;
}
export function useLocalizedData<T extends { locale?: string }[]>({
  data,
}: UseLocalizedDataProps<T>): T {
  const locale = useLocale();
  return data.filter((item) => item.locale === locale) as T;
}
