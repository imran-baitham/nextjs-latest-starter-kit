import { MetadataRoute } from "next";

const WEBSITE_HOST_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://kit.vercel.app";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

const routePages = ["/"]; // more page route

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const changeFrequency = "daily" as ChangeFrequency;
  const routes = routePages.map((route: string) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority: 1,
  }));

  return [...routes];
}
