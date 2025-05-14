"use client";

import { ChevronDownCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { useLocalizedData } from "@/shared/hooks/utils/use-localized-data";

import { Link } from "@/shared/i18n/routing";
import { buttonVariants } from "@/shared/ui/button";
import { Jumbotron } from "@/shared/ui/modules/jumbotron";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { cn } from "@/shared/utils/cn";
import { jumbotronData } from "../../config";

interface JumbotronPopoverProps {
  title: string;
  subTitle: string;
  description: string | JSX.Element;
}
function JumbotronPopover({
  title,
  subTitle,
  description,
}: JumbotronPopoverProps) {
  return title && subTitle && description ? (
    <Popover>
      <PopoverTrigger
        title={title}
        className="group flex w-full flex-1 flex-col items-start rounded-base bg-primary/5 px-4 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
      >
        <div className="flex w-full flex-row items-center gap-3">
          <p className="truncate text-base transition group-hover:text-purple lg:text-lg">
            {title}
          </p>
          <ChevronDownCircle className="ml-auto flex size-4 shrink-0 transition group-data-[state=open]:rotate-180 lg:size-5" />
        </div>
        <p className="truncate font-medium text-primary/80 text-sm lg:text-base">
          {subTitle}
        </p>
      </PopoverTrigger>
      <PopoverContent
        className="max-w-[340px] p-4"
        sideOffset={8}
        side="bottom"
        align="center"
      >
        <p className="overflow-hidden text-pretty break-words text-base lg:text-lg">
          {description}
        </p>
      </PopoverContent>
    </Popover>
  ) : null;
}

export function JumbotronModule() {
  const t = useTranslations("home.jumbotron");

  const localizedJumbotronData = useLocalizedData({ data: jumbotronData });

  return (
    <section>
      <div className="container">
        <div className="flex w-full flex-col gap-8">
          <Jumbotron
            title={t("title")}
            subTitle={t("subTitle")}
            description={t("description")}
          />
          <div className="flex w-full flex-row flex-wrap items-center gap-2">
            {localizedJumbotronData.map((jumbotron) => (
              <JumbotronPopover key={jumbotron.id} {...jumbotron} />
            ))}
          </div>
          <Link
            title={t("button")}
            href={"#contacts"}
            className={cn(
              buttonVariants({ variant: "purple" }),
              "ml-auto w-[180px]"
            )}
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
