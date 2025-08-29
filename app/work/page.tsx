import type { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import MotionDiv from "@/components/motion.div";
import PMotionDiv from "@/components/project-motion.div";

const projects = [
  {
    title: "Multi-Store Admin CMS",
    description:
      "I built a complete Admin Dashboard where business owners can manage their online store with ease. From adding products, categories, colors, and sizes to tracking orders — everything is handled in one place. The dashboard also includes authentication, a responsive design, and modern UI for smooth management.",
    images: ["/admin-2.png", "/admin-1.png", "/admin-3.png", "/admin-4.png"],
    tech: [
      "Nextjs",
      "Tailwind CSS",
      "React",
      "Shadcn UI",
      "Nextjs Api Route",
      "Prisma",
      "Authjs",
      "PostgreSQL",
      "Stripe",
    ],
    demo: "https://cms-ecommerce-three.vercel.app/",
    github: "https://github.com/muhammadkaif-razvi/ecom-admin",
  },
  {
    title: "Customer E-Commerce Store",
    description:
      "This is a modern e-commerce store built for customers. Shoppers can browse products by category, view details, add items to their cart, and make secure payments through Stripe Checkout. The website is fast, mobile-friendly, and gives a smooth shopping experience.",
    images: ["/store-1.png", "/store-2.png", "/store-3.png"],
    tech: ["Nextjs", "Tailwind CSS", "React", "Shadcn UI", "Stripe", "Authjs"],
    demo: "https://ecommarce-store-mamaearth.vercel.app/",
    github: "https://github.com/muhammadkaif-razvi/ecommarce-store-mama",
  },
  // {
  //   title: "Multi-Vendor E-commerce (WIP)",
  //   description:
  //     "Built with React, Tailwind, Express. Smooth transitions, contact form, and responsive layout.",
  //   images: ["/f1.png", "/f2.png", "/f3.png"],
  //   tech: ["Nextjs", "Tailwind CSS", "React", "Shadcn UI", "Framer Motion"],
  //   demo: "https://admin.ecom-saas-micro.com",

  //   github: "https://github.com/muhammadkaif-razvi/developer-portfolio",
  // },
  // {
  //   title: "Multi-Vendor E-commerce (WIP)",
  //   description:
  //     "Built with React, Tailwind, Express. Smooth transitions, contact form, and responsive layout.",
  //   images: ["/pd4.png", "/pd1.png", "/pd2.png"],
  //   tech: ["Nextjs", "Tailwind CSS", "React", "Shadcn UI", "Framer Motion"],
  //   demo: "https://admin.ecom-saas-micro.com",

  //   github: "https://github.com/muhammadkaif-razvi/developer-portfolio",
  // },
  {
    title: "Personal Portfolio Website",
    description:
      "Built with React, Tailwind, Express. Smooth transitions, contact form, and responsive layout.",
    images: ["/f1.png", "/f2.png", "/f3.png"],
    tech: ["Nextjs", "Tailwind CSS", "React", "Shadcn UI", "Framer Motion"],
    github: "https://github.com/muhammadkaif-razvi/developer-portfolio",
  },
  {
    title: "Muhammad Kaif Razvi | Full-Stack Developer Portfolio",
    description:
      "Interactive Features: Sound mute/unmute, Dark/Light mode toggle Pages: Home, About/Work, Services, Resume,Design: Modern clean typography, responsive layout, smooth animations, minimal yet professional look",
    images: ["/p4.png", "/p1.png", "/p2.png"],
    tech: ["Expressjs", "Tailwind CSS", "React.js"],
    demo: "https://muhammad-kaif-razvi.vercel.app/",
    github: "https://github.com/muhammadkaif-razvi/port-fron",
  },
];
// ✅ 1. SEO Metadata
export const metadata: Metadata = {
  title: "Projects",

  description:
    "Explore real-world projects built by Muhammad Kaif Razvi using Next.js, Tailwind CSS, Prisma, MongoDB, Kafka, Docker, and more. Full stack portfolio featuring scalable apps and e-commerce systems.",

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

// ✅ 3. Work Page Component
const WorkPage = () => {
  return (
    <MotionDiv>
      <section className="px-4 md:px-8 mx-auto container py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-accent mb-2">
            Projects Ive Built
          </h2>
          <p className="text-[#97979e] max-w-2xl mx-auto">
            From frontend elegance to backend power — real projects, real stack.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <PMotionDiv key={index} index={index}>
              {/* Image/Carousel */}
              <div className="w-full lg:w-1/2 border">
                <Carousel>
                  <CarouselContent>
                    {project.images.map((img, i) => (
                      <CarouselItem key={i}>
                        <Image
                          src={img}
                          alt={project.title}
                          width={800}
                          height={500}
                          className="rounded-xl w-full h-auto object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="ml-14" />
                  <CarouselNext className="mr-14" />
                </Carousel>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <Card className="bg-[#27272c] text-white  border-0">
                  <CardHeader>
                    <CardTitle className="text-xl text-accent">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-[#97979e] text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="default"
                          className="text-xs pt-1 "
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.demo && (
                        <Button
                          asChild
                          variant="default"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                      <Button
                        asChild
                        variant="outline"
                        className="text-white border-accent hover:bg-accent/10"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" /> GitHub
                        </a>
                      </Button>

                    
                    </div>
                  </CardContent>
                </Card>
              </div>
            </PMotionDiv>
          ))}
        </div>
      </section>
    </MotionDiv>
  );
};

export default WorkPage;
