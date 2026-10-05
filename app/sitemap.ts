import type { MetadataRoute } from "next";
import { pagine, sitoUrl } from "../lib/sito";
export default function sitemap(): MetadataRoute.Sitemap {
  // Revision dates should reflect actual editorial updates, not each build.
  return pagine.map(({ percorso }) => ({ url: `${sitoUrl}${percorso === "/" ? "" : percorso}` }));
}
