import { cn } from "@/shared/utils/cn";

import { Link } from "@/shared/i18n/routing";
import type { ContactType } from "../types";

interface ContactItemProps {
  size?: "sm" | "base";
  className?: string;
}
export function ContactItem({
  label,
  value,
  href,
  icon: Icon,
  size = "base",
  className = "",
}: ContactType & ContactItemProps) {
  return (
    <Link
      title={value}
      className={cn(
        "group flex w-full flex-1 flex-row items-center gap-2 rounded-base bg-primary/5 p-2 px-4 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple md:px-6 lg:px-8",
        className
      )}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full [&>*]:fill-purple",
          size === "base" && "size-12",
          size === "sm" && "size-8"
        )}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <p
          className={cn(
            "truncate font-medium text-primary/80",
            size === "base" && "text-sm",
            size === "sm" && "hidden text-xs lg:text-sm"
          )}
        >
          {label}
        </p>
        <p
          className={cn(
            "truncate transition group-hover:text-purple",
            size === "base" && "text-base",
            size === "sm" && "text-sm lg:text-base"
          )}
        >
          {value}
        </p>
      </div>
    </Link>
  );
}
