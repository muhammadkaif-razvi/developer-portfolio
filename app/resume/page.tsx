"use client";
import { motion } from "framer-motion";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  User,
  Mail,
  Phone,
  Flag,
  CheckCircle,
  Briefcase,
  Languages,
  Calendar,
  Code,
  Zap,
  Server,
  Cloud,
  Globe,
  Database,
  Layers3,
  Boxes,
  ShieldCheck,
  Move3D,
  CreditCard,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

const about = {
  title: "About Me",
  description:
    "I'm a full-stack developer with 1+ years of experience building scalable e-commerce and SaaS platforms using Next.js, NX, Express, Prisma, Kafka, and more.",
  info: [
    { fieldName: "Name", fieldValue: "Muhammad Kaif Razvi", icon: User },
    { fieldName: "Phone", fieldValue: "+91 1234567891", icon: Phone },
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

const experience = {
  title: "My Experience",
  description:
    "Hands-on experience delivering real-time systems, payments, and APIs.",
  items: [
    {
      company: "Freelance (Self-employed)",
      position: "Full-Stack Developer",
      duration: "2023 - Present",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "Practical knowledge built through real-world project development.",
  items: [
    {
      company: "Intermediate | Board of Education",
      position: "Mathematics & Science",
      duration: "2021 - 2023",
    },
    {
      company: "High School | Board of Education",
      position: "Science Stream",
      duration: "2019 - 2021",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Technologies and tools I work with regularly.",
  items: [
    { name: "Next.js", icon: Globe },
    { name: "React.js", icon: Zap },
    { name: "Express.js", icon: Server },
    { name: "Node.js", icon: Server },
    { name: "TypeScript", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "Tailwind CSS", icon: Code },
    { name: "ShadCN/UI", icon: Code },
    { name: "Prisma", icon: Cloud },
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Redis", icon: Database },
    { name: "Kafka", icon: Server },
    { name: "Git", icon: Code },
    { name: "GitHub", icon: Code },
    { name: "NX Monorepo", icon: Layers3 },
    { name: "Docker", icon: Boxes },
    { name: "Zod", icon: ShieldCheck },
    { name: "Framer Motion", icon: Move3D },
    { name: "Stripe / Razorpay", icon: CreditCard },
  ],
};

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 2.8, ease: "easeInOut" },
      }}
    >
      <section className=" px-2 md:px-4  mx-auto container ">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-8 w-full"
        >
          {/* Tabs Sidebar */}

          <TabsList className="w-full xl:mt-46 max-w-full xl:max-w-[200px] bg-primary rounded-xl sm:flex  xl:flex-col gap-2 xl:gap-3 items-center xl:items-start p-2 grid grid-cols-2 mb-18 sm:mb-2">
            <TabsTrigger
              className="bg-[#27272c] w-full py-5  xl:py-6  px-4  text-sm hover:bg-accent-hover rounded-md text-center"
              value="about"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#27272c] w-full py-5  xl:py-6 px-4  text-sm hover:bg-accent-hover rounded-md text-center"
              value="experience"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#27272c] w-full py-5  xl:py-6  px-4  text-sm hover:bg-accent-hover rounded-md text-center"
              value="education"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#27272c] w-full py-5 xl:py-6 px-4  text-sm hover:bg-accent-hover rounded-md text-center"
              value="skills"
            >
              Skills
            </TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-1 h-[calc(100vh-120px)] xl:h-auto">
            {/* Tab Content Area */}
            <div className="flex-1 ">
              {/* About Tab */}
              <TabsContent className="w-full" value="about">
                <h2 className="text-3xl font-bold mb-4 ">
                  {about.title}
                </h2>
                <p className="text-[#97979e] mb-6">{about.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
                  {about.info.map((item, index) => (
                    <Card
                      key={index}
                      className="border-0 flex items-center p-3 gap-4  shadow-sm border-muted"
                    >
                      <item.icon className="text-accent w-8 h-8" />
                      <div>
                        <p className="text-sm text-[#97979e]">
                          {item.fieldName}
                        </p>
                        <p className="font-medium text-white">
                          {item.fieldValue}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              {/* Experience Tab */}
              <TabsContent value="experience">
                <h2 className="text-3xl font-bold mb-4">{experience.title}</h2>
                <p className="text-[#97979e] mb-6">{experience.description}</p>
                <div className="space-y-4">
                  {experience.items.map((item, index) => (
                    <Card className="border-0" key={index}>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg font-semibold">
                              {item.position}
                            </h4>
                            <p className="text-[#97979e] text-sm">
                              {item.company}
                            </p>
                          </div>
                          <span className="text-sm  flex items-center gap-1 text-[#97979e]">
                            <Calendar className="w-4 h-4 text-[#97979e]" />{" "}
                            {item.duration}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-white">
                          Built modern applications using microservices, Redis,
                          Kafka, and Razorpay.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education">
                <h2 className="text-3xl font-bold mb-4">{education.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {education.description}
                </p>
                <div className="space-y-4">
                  {education.items.map((item, index) => (
                    <Card key={index} className="border-0">
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg font-semibold ">
                              {item.position}
                            </h4>
                            <p className="text-[#97979e] text-sm">
                              {item.company}
                            </p>
                          </div>
                          <span className="text-sm text-[#97979e] flex items-center gap-1">
                            <Calendar className="w-4 h-4" /> {item.duration}
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-white">
                          Completed formal education with a focus on
                          programming, mathematics, and practical projects.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills">
                <h2 className="text-3xl font-bold mb-4">{skills.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {skills.description}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.items.map((skill, index) => (
                    <Card
                      key={index}
                      className="flex items-center gap-4 p-4 shadow-sm border-0"
                    >
                      <skill.icon className="text-accent w-5 h-5" />
                      <span className="font-medium text-[#97979e] text-sm">
                        {skill.name}
                      </span>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </section>
    </motion.div>
  );
};

export default ResumePage;
