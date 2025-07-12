"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  User,
  Languages,
  Flag,
  Briefcase,
  Calendar,
  CheckCircle,
} from "lucide-react";

// --- About Data ---
const about = {
  title: "About Me",
  description:
    "I'm a full-stack developer with 1+ years of experience building scalable e-commerce and SaaS platforms using technologies like Next.js, NX, Express, Prisma, and Kafka.",
  info: [
    { fieldName: "Name", fieldValue: "Kaif Razvi", icon: User },
    { fieldName: "Phone", fieldValue: "+91 8919027121", icon: Phone },
    {
      fieldName: "Email",
      fieldValue: "muhammadkaifrazwi@gmail.com",
      icon: Mail,
    },
    { fieldName: "Experience", fieldValue: "1+ years", icon: Briefcase },
    { fieldName: "Nationality", fieldValue: "Indian", icon: Flag },
    { fieldName: "Freelance", fieldValue: "Available", icon: CheckCircle },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Urdu",
      icon: Languages,
    },
  ],
};

// --- Experience Data ---
const experience = {
  title: "My Experience",
  description:
    "Hands-on experience delivering projects in microservices, payments, and scalable APIs.",
  items: [
    {
      company: "Freelance (Self-employed)",
      position: "Full-Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Freelance (Self-employed)",
      position: "Full-Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Freelance (Self-employed)",
      position: "Full-Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Freelance (Self-employed)",
      position: "Full-Stack Developer",
      duration: "2023 - Present",
    },
       {
      company: "Freelance (Self-employed)",
      position: "Full-Stack Developer",
      duration: "2023 - Present",
    },
  ],
};

const ResumePage = () => {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 max-w-5xl mx-auto">
      {/* About Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * 0.1,
              duration: 0.6,
              ease: ["easeOut"],
            },
          }),
        }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">{about.title}</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          {about.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {about.info.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: ["easeOut"],
                    },
                  }),
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="flex items-center gap-4 p-4">
                  <Icon className="text-accent w-5 h-5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.fieldName}
                    </p>
                    <p className="font-semibold">{item.fieldValue}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={10}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * 0.1,
              duration: 0.6,
              ease: ["easeOut"],
            },
          }),
        }}
      >
        <h2 className="text-3xl font-bold mb-4">{experience.title}</h2>
        <p className="text-muted-foreground mb-6">{experience.description}</p>

        <div className="space-y-4">
          {experience.items.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: (i: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: ["easeOut"],
                  },
                }),
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-semibold">{item.position}</h4>
                      <p className="text-muted-foreground text-sm">
                        {item.company}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="w-4 h-4 mr-1 inline-block" />
                      {item.duration}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Built and deployed full-stack applications with scalable
                    backend services and modern frontend experiences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ResumePage;
