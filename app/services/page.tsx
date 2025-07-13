import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Muhammad Kaif Razvi - Full Stack Developer",
  description:
    "Full-stack services by Muhammad Kaif Razvi, including scalable microservices, multi-vendor e-commerce, Razorpay integration, Kafka events, secure authentication, and CI/CD deployment with Docker and GitHub Actions.",
  keywords: [
    "Full Stack Developer Services",
    "Next.js Developer",
    "Express Backend Developer",
    "E-commerce Developer",
    "Microservices Developer",
    "Tailwind CSS Developer",
    "NX Monorepo Developer",
    "ShadCN UI Developer",
    "Prisma Developer",
    "MongoDB Developer",
    "Razorpay Integration",
    "Shiprocket API Developer",
    "Kafka Developer",
    "Redis Session Management",
    "Clerk Auth Integration",
    "Secure Auth Developer",
    "PostgreSQL Developer",
    "Docker CI/CD Pipelines",
    "Vercel Deployment",
    "GitHub Actions",
    "Framer Motion UI Developer",
    "API Developer India",
    "Muhammad Kaif Razvi Services",
  ],
  authors: [
    {
      name: "Muhammad Kaif Razvi",
      url: "https://www.muhammadkaifrazvi.xyz",
    },
  ],
  metadataBase: new URL("https://www.muhammadkaifrazvi.xyz"),
  openGraph: {
    title: "Services | Muhammad Kaif Razvi - Full Stack Developer",
    description:
      "Explore full-stack services including NX microservices, e-commerce, Prisma APIs, Kafka, Redis, Razorpay, and Docker CI/CD by Muhammad Kaif Razvi.",
    url: "https://www.muhammadkaifrazvi.xyz/services",
    siteName: "Muhammad Kaif Razvi Portfolio",
    images: [
      {
        url: "/f2.png", // ✅ Should be in your public folder
        width: 1200,
        height: 630,
        alt: "Services offered by Muhammad Kaif Razvi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services by Muhammad Kaif Razvi",
    description:
      "Scalable full-stack services with Next.js, Prisma, Tailwind, Razorpay, Kafka, Docker, and more. Offered by developer Muhammad Kaif Razvi.",
    images: ["/f2.png"],
    creator: "@kaifrazavi_",
  },
};

import ServiceCard from "@/components/ui/uis/servicescard";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full Stack Web Development Services",
  provider: {
    "@type": "Person",
    name: "Muhammad Kaif Razvi",
    url: "https://www.muhammadkaifrazvi.xyz",
    sameAs: [
      "https://github.com/muhammadkaif-razvi",
      "https://www.linkedin.com/in/muhammad-kaif-razvi-143-webdev",
      "https://x.com/kaifrazavi_",
    ],
  },
  areaServed: "Worldwide",
  description:
    "Full-stack services by Muhammad Kaif Razvi including e-commerce, microservices, APIs, Razorpay, Kafka, Docker, Redis, and more.",
  serviceType: "Full Stack Web Development",
  url: "https://www.muhammadkaifrazvi.xyz/services",
};

const ServicesPage = () => {
  return (
    <>
      {/* ✅ JSON-LD SCRIPT TAG */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceCard />
    </>
  );
};

export default ServicesPage;
