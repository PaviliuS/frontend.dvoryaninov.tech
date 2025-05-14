import { axiosInstance } from "@/shared/lib/axios";
import { ProjectListSchema, ProjectSchema } from "../types";

export const projectRequests = {
  getProjects: {
    key: ["GET_PROJECTS"],
    fn: async ({
      locale,
      limit,
      offset,
      search,
    }: {
      locale?: string;
      limit?: number;
      offset?: number;
      search?: string;
    }) => {
      const response = await axiosInstance.get("/project", {
        params: { locale, limit, offset, search, published: true },
      });

      return ProjectListSchema.parse(response.data);
    },
  },
  getProject: {
    key: ["GET_PROJECT"],
    fn: async ({ slug }: { slug?: string }) => {
      const response = await axiosInstance.get(`/project/slug/${slug}`);
      return ProjectSchema.parse(response.data);
    },
  },
};
