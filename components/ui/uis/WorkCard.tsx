"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Built with React, Tailwind, Express. Smooth transitions, contact form, and responsive layout.",
    images: ["/f1.png", "/f2.png", "/f3.png"],
    tech: ["Nextjs", "Tailwind CSS", "React", "Shadcn UI", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Multi-Vendor E-commerce (WIP)",
    description:
      "Ongoing platform using NX, Kafka, Redis, Prisma, and Next.js. Multi-seller payments, analytics, etc.",
    images: ["/projects/ecom-1.png", "/projects/ecom-2.png"],
    tech: ["NX", "Kafka", "Redis", "MongoDB", "Next.js", "Prisma"],
    github: "https://github.com/yourusername/ecommerce",
  },
];

const WorkCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 1.4, ease: "easeInOut" },
      }}
    >
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
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image/Carousel */}
              <div className="w-full lg:w-1/2 border">
                <Carousel>
                  <CarouselContent>
                    {project.images.map((img, i) => (
                      <CarouselItem key={i}>
                        <Image
                          src={img}
                          alt="project"
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
                                alt="project modal"
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
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default WorkCard;
