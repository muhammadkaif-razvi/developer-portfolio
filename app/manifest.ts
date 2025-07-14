import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muhammad Kaif Razvi Portfolio',
    short_name: 'Kaif Razvi',
    description:
      'Official portfolio of Muhammad Kaif Razvi, full-stack web developer with expertise in Next.js, Tailwind CSS, Prisma, MongoDB, and scalable web architecture.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f0f', // Match your site's dark mode background
    theme_color: '#f9b449',     // Accent color (e.g. your brand color)
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/k.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/k.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
  };
}
