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
import { Github } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
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
    title: "Personal Portfolio Website",
    description:
      "Built with React, Tailwind, Express. Smooth transitions, contact form, and responsive layout.",
    images: ["/f1.png", "/f2.png", "/f3.png"],
    tech: ["Nextjs", "Tailwind CSS", "React", "Shadcn UI", "Framer Motion"],
    github: "https://github.com/muhammadkaif-razvi/developer-portfolio",
  },
  {
    title: "Multi-Vendor E-commerce (WIP)",
    description:
      "Ongoing platform using NX, Kafka, Redis, Prisma, and Next.js. Multi-seller payments, analytics, etc.",
    images: ["/projects/ecom-1.png", "/projects/ecom-2.png"],
    tech: ["NX", "Kafka", "Redis", "MongoDB", "Next.js", "Prisma"],
    github: "https://github.com/muhammadkaif-razvi/ecommerce",
  },
];
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
      <MotionDiv>
        <section className="px-4 md:px-8 mx-auto container py-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-accent mb-2">
              Projects Ive Built
            </h2>
            <p className="text-[#97979e] max-w-2xl mx-auto">
              From frontend elegance to backend power — real projects, real
              stack.
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

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              className="text-sm text-white"
                            >
                              Project Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-background border border-border max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>{project.title}</DialogTitle>
                            </DialogHeader>
                            <p className="text-muted-foreground text-sm">
                              {project.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                              {project.images.map((img, i) => (
                                <Image
                                  key={i}
                                  src={img}
                                  alt={project.title}
                                  width={400}
                                  height={250}
                                  className="rounded-md w-full h-auto"
                                />
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </PMotionDiv>
            ))}
          </div>
        </section>
      </MotionDiv>
    </>
  );
};

export default WorkPage;
