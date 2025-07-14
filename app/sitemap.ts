import { type MetadataRoute } from "next";

export async function GET(): Promise<Response> {
  const urls = [
    {
      loc: "https://www.muhammadkaifrazvi.xyz",
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: "1.0",
    },
    {
      loc: "https://www.muhammadkaifrazvi.xyz/resume",
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: "0.9",
    },
    {
      loc: "https://www.muhammadkaifrazvi.xyz/services",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      loc: "https://www.muhammadkaifrazvi.xyz/work",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      loc: "https://www.muhammadkaifrazvi.xyz/contact",
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: "0.6",
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${url.loc}</loc>
  <lastmod>${url.lastmod}</lastmod>
  <changefreq>${url.changefreq}</changefreq>
  <priority>${url.priority}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
