export type LocaleType = "ru" | "en";

export enum LocaleEnum {
  RU = "ru",
  EN = "en",
}

export type ViewType = {
  id: number;
  name: string;
  href: string;
  locale?: LocaleType;
};
