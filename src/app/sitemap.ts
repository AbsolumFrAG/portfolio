import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [""].map((route) => ({
    url: `${DATA.url}${route}`,
    lastModified: new Date(),
  }));

  return [...routes];
}
