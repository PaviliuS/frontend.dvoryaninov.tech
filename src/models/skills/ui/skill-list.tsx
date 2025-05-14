import { useTranslations } from "next-intl";

import { skills } from "../config";
import type { SkillType } from "../types";
import { SkillItem } from "./skill-item";

interface SkillStackProps {
  title: string;
  skills: SkillType[];
}
function SkillStack({ title, skills }: SkillStackProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3 className="font-medium text-lg lg:text-xl">{title}</h3>
      <div className="flex flex-1 flex-row flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillItem key={skill.id} {...skill} className="flex-1 text-center" />
        ))}
      </div>
    </div>
  );
}

export function SkillList() {
  const t = useTranslations("home.skills");

  const frontendSkills = skills.filter((skill) => skill.variant === "FRONTEND");
  const backendSkills = skills.filter((skill) => skill.variant === "BACKEND");
  const devopsSkills = skills.filter((skill) => skill.variant === "DEVOPS");
  const toolSkills = skills.filter((skill) => skill.variant === "TOOLS");

  return (
    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
      <SkillStack title={t("frontend")} skills={frontendSkills} />
      <div className="grid grid-cols-1 gap-8">
        <SkillStack title={t("backend")} skills={backendSkills} />
        <SkillStack title={t("devops")} skills={devopsSkills} />
        <SkillStack title={t("tools")} skills={toolSkills} />
      </div>
    </div>
  );
}
