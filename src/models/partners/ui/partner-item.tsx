import type { PartnerType } from "../types";

interface PartnerItemProps {
  partner: PartnerType;
}
export function PartnerItem({ partner }: PartnerItemProps) {
  const { icon: Icon } = partner;
  return (
    <div className="mx-auto flex h-[60px] w-full max-w-[160px] items-center justify-center px-5 py-4">
      <Icon className="h-[28px] w-full [&>*>*]:fill-primary [&>*]:fill-primary" />
    </div>
  );
}
