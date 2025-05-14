import { partners } from "../config";
import { PartnerItem } from "./partner-item";

export function PartnerList() {
  return (
    <div className="grid w-full grid-cols-3 rounded-base bg-primary/5 lg:grid-cols-6">
      {partners.map((partner) => (
        <PartnerItem key={partner.id} partner={partner} />
      ))}
    </div>
  );
}
