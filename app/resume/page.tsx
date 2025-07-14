import ResumeCard from "@/components/ui/uis/ResumeCard";
import type { Metadata } from "next";

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "Resume | Muhammad Kaif Razvi - Full Stack Developer",
  robots: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow search engines to follow links on this page
    nocache: false, // Allow caching of the page (true = disallow)
    noimageindex: false, // Allow image indexing (true = disallow)
    nosnippet: false, // Allow snippets in search results (true = disallow)
  },
  description:
    "View the professional resume of Muhammad Kaif Razvi, a full-stack web developer skilled in Next.js, Prisma, Tailwind CSS, Nx, Docker, Kafka, and scalable web architecture.",
  keywords: [
    "Muhammad Kaif Razvi Resume",
    "Full Stack Developer Resume",
    "Next.js Resume",
    "MERN Stack Developer CV",
    "React Developer Resume",
    "Prisma Developer CV",
    "Tailwind CSS Developer",
    "Nx Monorepo Developer",
    "Docker Developer",
    "Freelance Web Developer",
    "Portfolio Resume",
    "Full Stack Web Resume",
    "Developer Resume India",
    "Resume of Muhammad Kaif",
  ],
  authors: [
    {
      name: "Muhammad Kaif Razvi",
      url: "https://www.muhammadkaifrazvi.xyz",
    },
  ],
  metadataBase: new URL("https://www.muhammadkaifrazvi.xyz"),
  openGraph: {
    title: "Resume | Muhammad Kaif Razvi - Full Stack Developer",
    description:
      "View the developer resume of Muhammad Kaif Razvi showcasing skills in web development, backend APIs, frontend UI, and modern DevOps practices.",
    url: "https://www.muhammadkaifrazvi.xyz/resume",
    siteName: "Muhammad Kaif Razvi Portfolio",
    images: [
      {
        url: "/f2.png", // ensure this image exists in /public
        width: 1200,
        height: 630,
        alt: "Resume - Muhammad Kaif Razvi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Muhammad Kaif Razvi",
    description:
      "Developer resume of Muhammad Kaif Razvi showcasing skills in scalable full-stack applications using Next.js, Tailwind, Prisma, Docker, and more.",
    images: ["/f2.png"],
    creator: "@kaifrazavi_",
  },
};

// ✅ JSON-LD SCHEMA
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Kaif Razvi",
  url: "https://www.muhammadkaifrazvi.xyz",
  sameAs: [
    "https://github.com/muhammadkaif-razvi",
    "https://www.linkedin.com/in/muhammad-kaif-razvi-143-webdev",
    "https://x.com/kaifrazavi_",
  ],
  jobTitle: "Full Stack Web Developer",
  description:
    "Experienced full-stack developer building web applications using React, Next.js, Tailwind CSS, Prisma, Express, MongoDB, and Docker.",
  image: "https://www.muhammadkaifrazvi.xyz/f2.png",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Intermediate in Mathematics - Hyderabad",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "India",
  },
};

const ResumePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResumeCard />
    </>
  );
};

export default ResumePage;
