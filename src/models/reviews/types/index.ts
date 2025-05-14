import type { LocaleType } from "@/shared/types";

export type ReviewType = {
  id: number;
  author: string;
  position: string;
  review: JSX.Element;
  locale: LocaleType;
};
