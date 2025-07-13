// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.muhammadkaifrazvi.xyz',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.muhammadkaifrazvi.xyz/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.muhammadkaifrazvi.xyz/resume',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.muhammadkaifrazvi.xyz/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.muhammadkaifrazvi.xyz/work',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add more routes here dynamically if needed
    // For dynamic routes (e.g., blog posts), you'd fetch them here:
    /*
    {
      url: 'https://www.muhammadkaifrazvi.xyz/blog/my-first-post',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    */
  ];
}