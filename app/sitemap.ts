import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BaseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.muhammadkaifrazvi.xyz";

  const paths = ["/", "/resume", "/work", "/services", "/contact"];

  const Entries: MetadataRoute.Sitemap = paths.map((path) => ({
    url: `${BaseUrl}${path}`,
    lastModified: new Date(),
  }));
  return [
    {
      url: "https://www.muhammadkaifrazvi.xyz",
      lastModified: new Date(),
    },
    ...Entries,
  ];
}
