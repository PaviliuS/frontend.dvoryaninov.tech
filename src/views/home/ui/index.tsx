"use client";

import type { ProjectType } from "@/models/projects";
import { ProjectGallery } from "@/widgets/project-gallery";
import { AboutModule } from "./modules/about";
import { ContactModule } from "./modules/contacts";
import { JumbotronModule } from "./modules/jumbotron";
import { PartnerModule } from "./modules/partners";
import { ReviewModule } from "./modules/reviews";
import { SkillModule } from "./modules/skills";

interface HomeViewProps {
  projects?: ProjectType[];
}
export function HomeView({ projects }: HomeViewProps) {
  return (
    <div className="fade-in flex w-full animate-in flex-col gap-[80px] pt-[180px] pb-[100px] lg:gap-[140px] lg:pt-[220px]">
      <JumbotronModule />
      <ProjectGallery projects={projects} />
      <AboutModule />
      <PartnerModule />
      <SkillModule />
      <ContactModule />
      <ReviewModule />
    </div>
  );
}
