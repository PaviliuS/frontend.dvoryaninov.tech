"use client";

import { ProjectList, type ProjectType } from "@/models/projects";
import { Link } from "@/shared/i18n/routing";
import { buttonVariants } from "@/shared/ui/button";
import { Title } from "@/shared/ui/modules/title";
import { cn } from "@/shared/utils/cn";
import { useTranslations } from "next-intl";

interface ProjectGalleryProps {
  projects?: ProjectType[];
}
export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const t = useTranslations("config");

  return projects?.length ? (
    <section>
      <div className="container">
        <div className="flex w-full flex-col gap-8">
          <Title title={t("recentProjects")} />
          <ProjectList projects={projects} />
          <Link
            title={t("allProjects")}
            href={"/projects"}
            className={cn(
              buttonVariants({ variant: "purple" }),
              "ml-auto w-[180px]"
            )}
          >
            {t("allProjects")}
          </Link>
        </div>
      </div>
    </section>
  ) : null;
}
