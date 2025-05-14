"use client";

import { views } from "@/shared/config/views";
import { useLocalizedData } from "@/shared/hooks/utils/use-localized-data";
import { Link } from "@/shared/i18n/routing";
import { buttonVariants } from "@/shared/ui/button";
import { usePathname } from "next/navigation";

interface NavbarModuleProps {
  onClick?: () => void;
}
export function NavbarModule({ onClick = () => undefined }: NavbarModuleProps) {
  const pathname = usePathname();

  const localizedViews = useLocalizedData({ data: views });

  return (
    <div className="flex flex-row flex-wrap gap-3">
      {localizedViews.map((view) => (
        <Link
          title={view.name}
          key={view.id}
          href={view.href}
          className={buttonVariants({
            variant: pathname.includes(view.href) ? "purple" : "ghost",
          })}
          onClick={() => {
            onClick();
          }}
        >
          {view.name}
        </Link>
      ))}
    </div>
  );
}
