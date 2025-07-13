"use client";

import React from "react";
import { motion } from "framer-motion";
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const ServiceCard = () => {
  return (
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
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              transition={{
                delay: index * 0.4,
                duration: 3.5,
                type: "spring",
              }}
            >
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceCard;
