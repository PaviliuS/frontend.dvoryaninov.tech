import type { ElementType } from "react";

export type PartnerType = {
  id: number;
  name: string;
  icon: ElementType<{ className?: string }>;
};
