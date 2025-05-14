import type { ReactNode } from "react";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

type LocaleProviderProps = {
  children: ReactNode;
  locale: string;
};
export async function LocaleProvider({
  children,
  locale,
}: LocaleProviderProps) {
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
