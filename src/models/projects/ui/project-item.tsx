import { useTranslations } from "next-intl";
import Image from "next/image";

import { Link } from "@/shared/i18n/routing";
import type { ProjectType } from "../types";

interface ProjectItemProps {
  project: ProjectType;
  titleVariant?: "h2" | "h3";
}
export function ProjectItem({
  project,
  titleVariant = "h3",
}: ProjectItemProps) {
  const { name, description, stack, image, slug } = project;

  const t = useTranslations("config");

  return (
    <Link
      title={name}
      className="group flex w-full flex-col overflow-hidden rounded-base bg-primary/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
      href={`/projects/${slug}`}
    >
      <div className="relative flex aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={250}
          blurDataURL={image}
          placeholder="blur"
          priority
          className="z-10 size-full object-cover transition group-hover:scale-110 group-focus-visible:scale-110"
        />
        <div className="absolute top-0 left-0 z-10 flex size-full flex-col items-center justify-center bg-black/50 p-4 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          <p className="w-full truncate text-center font-medium text-lg text-white lg:text-xl">
            {name}
          </p>
          <p className="truncate text-center text-sm text-white/80 lg:text-base">
            {t("openProject")}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        {titleVariant === "h2" ? (
          <h2 className="truncate font-medium text-lg lg:text-xl">{name}</h2>
        ) : null}
        {titleVariant === "h3" ? (
          <h3 className="truncate font-medium text-lg lg:text-xl">{name}</h3>
        ) : null}
        <p className="line-clamp-2 text-base text-primary/80 lg:text-lg">
          {description}
        </p>
        <p className="mt-auto truncate font-medium text-primary/60 text-sm lg:text-base">
          {stack}
        </p>
      </div>
    </Link>
  );
}
