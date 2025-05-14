import type { LocaleType } from "@/shared/types";

export type JumbotronType = {
  id: number;
  title: string;
  subTitle: string;
  description: JSX.Element;
  locale: LocaleType;
};

export type AboutType = {
  id: number;
  text: string | JSX.Element;
  locale: LocaleType;
};
