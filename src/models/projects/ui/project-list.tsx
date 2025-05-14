import type { ProjectType } from "../types";
import { ProjectItem } from "./project-item";

interface ProjectListProps {
  projects?: ProjectType[];
  titleVariant?: "h2" | "h3";
}
export function ProjectList({ projects, titleVariant }: ProjectListProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      {projects?.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          titleVariant={titleVariant}
        />
      ))}
    </div>
  );
}
