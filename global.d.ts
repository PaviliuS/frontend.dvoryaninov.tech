import type en from "@/shared/i18n/locales/en.json";
import type ru from "@/shared/i18n/locales/ru.json";

type Messages = typeof en & typeof ru;

declare global {
  // Use type safe message keys with `next-intl`
  type IntlMessages = Messages;
}
