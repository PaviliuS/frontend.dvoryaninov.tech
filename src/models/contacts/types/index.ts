import type { ElementType } from "react";

export type ContactType = {
  id: number;
  label: string;
  value: string;
  href: string;
  icon: ElementType<{ className?: string }>;
};
