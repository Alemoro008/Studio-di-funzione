import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://studio-di-funzione.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://studio-di-funzione.vercel.app/studio-di-funzione-online",
      lastModified: new Date(),
    },
  ];
}

