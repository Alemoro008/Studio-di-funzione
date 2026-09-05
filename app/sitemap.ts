import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://studio-di-funzione.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/studio-di-funzione-online`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/studio-di-funzione`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dominio-di-una-funzione`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/derivata-prima`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/segno-di-una-funzione`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/chi-siamo`,
      lastModified: new Date(),
    },
    {
  url: `${baseUrl}/contatti`,
  lastModified: new Date(),
},
  ];
}
