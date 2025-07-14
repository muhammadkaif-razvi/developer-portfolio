import type { Metadata } from "next";
import WorkCard from "@/components/ui/uis/WorkCard";

// ✅ 1. SEO Metadata
export const metadata: Metadata = {
  title: "Projects | Muhammad Kaif Razvi - Full Stack Developer",
    robots: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow search engines to follow links on this page
    nocache: false, // Allow caching of the page (true = disallow)
    noimageindex: false, // Allow image indexing (true = disallow)
    nosnippet: false, // Allow snippets in search results (true = disallow)
  },
  description:
    "Explore real-world projects built by Muhammad Kaif Razvi using Next.js, Tailwind CSS, Prisma, MongoDB, Kafka, Docker, and more. Full stack portfolio featuring scalable apps and e-commerce systems.",
  keywords: [
    "Full Stack Projects",
    "Muhammad Kaif Razvi Projects",
    "Developer Portfolio Projects",
    "Next.js Projects",
    "Tailwind CSS Portfolio",
    "MongoDB Portfolio",
    "Kafka Developer Portfolio",
    "Docker Developer Projects",
    "E-commerce Project Next.js",
    "Microservices Projects",
    "Full Stack Portfolio India",
    "Open Source Developer",
    "Freelance Projects Web",
    "ShadCN UI Projects",
    "Nx Monorepo Portfolio",
  ],
  metadataBase: new URL("https://www.muhammadkaifrazvi.xyz"),
  openGraph: {
    title: "Projects | Muhammad Kaif Razvi - Full Stack Developer",
    description:
      "See the full stack projects and contributions by Muhammad Kaif Razvi, featuring modern stacks like Next.js, Tailwind, Prisma, Docker, Kafka, and more.",
    url: "https://www.muhammadkaifrazvi.xyz/work",
    siteName: "Muhammad Kaif Razvi Portfolio",
    images: [
      {
        url: "/f2.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Kaif Razvi Projects Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Muhammad Kaif Razvi",
    description:
      "Full stack project portfolio by developer Muhammad Kaif Razvi. Explore modern web apps built with real tech stacks.",
    images: ["/f2.png"],
    creator: "@kaifrazavi_",
  },
  authors: [
    {
      name: "Muhammad Kaif Razvi",
      url: "https://www.muhammadkaifrazvi.xyz",
    },
  ],
};

// ✅ 2. JSON-LD Schema for Portfolio Projects
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Full Stack Web Projects - Muhammad Kaif Razvi",
  creator: {
    "@type": "Person",
    name: "Muhammad Kaif Razvi",
    url: "https://www.muhammadkaifrazvi.xyz",
    sameAs: [
      "https://github.com/muhammadkaif-razvi",
      "https://linkedin.com/in/muhammad-kaif-razvi-143-webdev",
      "https://x.com/kaifrazavi_",
    ],
  },
  description:
    "A showcase of real-world web development projects created by Muhammad Kaif Razvi using technologies like Next.js, Tailwind CSS, Prisma, MongoDB, Kafka, Docker, Redis, and more.",
  url: "https://www.muhammadkaifrazvi.xyz/work",
  headline: "Project Portfolio | Muhammad Kaif Razvi",
  datePublished: "2024-01-01",
  inLanguage: "en",
};

// ✅ 3. Work Page Component
const WorkPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkCard />
    </>
  );
};

export default WorkPage;
