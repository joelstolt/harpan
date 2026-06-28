import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://www.forskolanharpan.se";
const LAST_MODIFIED = "2026-06-28";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/sok-plats", priority: 0.9 },
    { path: "/verksamhet", priority: 0.8 },
    { path: "/vardegrund", priority: 0.8 },
    { path: "/personal", priority: 0.7 },
    { path: "/kontakt", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority,
  }));
}
