import type { Metadata } from "next";
import {
  Server,
  ShoppingCart,
  CreditCard,
  ShieldCheck,
  BarChart3,
  Code2,
  Network,
  CloudCog,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PMotionDiv from "@/components/project-motion.div";

export const metadata: Metadata = {
  title: "Services | Muhammad Kaif Razvi - Full Stack Developer",
  robots: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow search engines to follow links on this page
    nocache: false, // Allow caching of the page (true = disallow)
    noimageindex: false, // Allow image indexing (true = disallow)
    nosnippet: false, // Allow snippets in search results (true = disallow)
  },
  description:
    "Full-stack services by Muhammad Kaif Razvi, including scalable microservices, multi-vendor e-commerce, Razorpay integration, Kafka events, secure authentication, and CI/CD deployment with Docker and GitHub Actions.",

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
const services = [
  {
    title: "Microservices Architecture",
    description:
      "Scalable NX-based microservices with Docker and modular service management.",
    icon: CloudCog,
  },
  {
    title: "Full-Stack E-commerce",
    description:
      "Build multi-vendor e-commerce using Next.js, Tailwind, React, and Prisma.",
    icon: ShoppingCart,
  },
  {
    title: "Express + TypeScript Backend",
    description:
      "Type-safe APIs using Express.js and Prisma with PostgreSQL or MongoDB.",
    icon: Server,
  },
  {
    title: "Razorpay Payment Integration",
    description:
      "Advanced Razorpay setup with split payments, commissions, and linked accounts.",
    icon: CreditCard,
  },
  {
    title: "Real-Time Kafka Events",
    description:
      "Kafka for order events, analytics, and cross-service communication.",
    icon: Network,
  },
  {
    title: "Secure Auth & Sessions",
    description:
      "Auth.js, Clerk, and Redis for secure auth flows and token/session storage.",
    icon: ShieldCheck,
  },
  {
    title: "CMS Dashboards",
    description:
      "Admin CMS using ShadCN, Prisma, and Framer Motion for interactive UIs.",
    icon: BarChart3,
  },
  {
    title: "DevOps & Deployment",
    description:
      "CI/CD pipelines with GitHub Actions, Docker, and deployment on Vercel or Railway.",
    icon: Code2,
  },
];


const ServicesPage = () => {
  return (
    <>
      {/* ✅ JSON-LD SCRIPT TAG */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pb-2 px-4 md:px-8 bg-background text-foreground">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <h2 className="text-4xl font-bold mb-4">What I Offer</h2>
          <p className="text-muted-foreground">
            Full-stack services for scalable SaaS, e-commerce, and API
            development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <PMotionDiv key={index} index={index}>
                <Card className="hover:shadow-xl border-0 transition-shadow duration-300 h-full bg-[#27272c] ">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 rounded-full bg-accent/10 text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#97979e]">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </PMotionDiv>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
