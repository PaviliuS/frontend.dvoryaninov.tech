import { cn } from "@/shared/utils/cn";
import { contacts } from "../config";
import { ContactItem } from "./contact-item";

interface ContactListProps {
  size?: "sm" | "base";
  className?: string;
}
export function ContactList({
  size = "base",
  className = "",
}: ContactListProps) {
  return (
    <div className={cn("flex w-full flex-row flex-wrap gap-2", className)}>
      {contacts.map((item) => (
        <ContactItem key={item.id} size={size} {...item} />
      ))}
    </div>
  );
}
