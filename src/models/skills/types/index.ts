export type SkillType = {
  id: number;
  name: string;
  variant: "FRONTEND" | "BACKEND" | "DEVOPS" | "TOOLS";
};

export enum SkillVariantEnum {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  DEVOPS = "DEVOPS",
  TOOLS = "TOOLS",
}
