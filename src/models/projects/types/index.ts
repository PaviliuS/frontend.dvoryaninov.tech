import { z } from "zod";

export const ProjectTitleSchema = z.object({
  id: z.number(),
  name: z.string(),
  variant: z.string(),
  order: z.number(),
  published: z.boolean(),
  projectId: z.number(),
});
export type ProjectTitleType = z.infer<typeof ProjectTitleSchema>;

export const ProjectImageSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  preview: z.string(),
  order: z.number(),
  published: z.boolean(),
  projectId: z.number(),
});
export type ProjectImageType = z.infer<typeof ProjectImageSchema>;

export const ProjectSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  stack: z.string(),
  image: z.string(),
  preview: z.string(),
  webHref: z.string(),
  codeHref: z.string(),
  titles: ProjectTitleSchema.array(),
  images: ProjectImageSchema.array(),
  order: z.number(),
  published: z.boolean(),
  locale: z.string(),
});
export type ProjectType = z.infer<typeof ProjectSchema>;

export const ProjectListSchema = z.object({
  count: z.number(),
  results: ProjectSchema.array(),
});
export type ProjectListType = z.infer<typeof ProjectListSchema>;

export enum ProjectTitleVariantEnum {
  TITLE = "TITLE",
  TEXT = "TEXT",
}
