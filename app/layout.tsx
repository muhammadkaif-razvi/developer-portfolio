import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/uis/Header";
import PageTransitionEvent from "@/components/ui/uis/PageTransition";
import StairTransition from "@/components/ui/uis/StairTransition";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Kaif Razvi | Full Stack Web Developer",
  description:
    "Portfolio of Muhammad Kaif Razvi, a full-stack web developer specializing in Next.js, Nx Monorepo, Tailwind CSS, ShadCN, Prisma, and MongoDB. Explore real-world projects with technologies like Kafka, Redis, Docker, Razorpay, Shiprocket, ImageKit, and AWS. Focused on building scalable, secure, and high-performance web applications with modern UI and clean architecture.",

  authors: [
    {
      name: "Muhammad Kaif Razvi",
      url: "https://www.muhammadkaifrazvi.xyz",
    },
  ],
  manifest: "/manifest.webmanifest",
  themeColor: "black",
  metadataBase: new URL("https://www.muhammadkaifrazvi.xyz"),
  openGraph: {
    title: "Muhammad Kaif Razvi | Full Stack Developer",
    description:
      "Explore the modern portfolio of Muhammad Kaif Razvi — expert in Next.js, Prisma, Tailwind CSS, MongoDB, and more. Discover real-world web projects and clean UI/UX implementations.",
    url: "https://www.muhammadkaifrazvi.xyz",
    siteName: "Muhammad Kaif Razvi Portfolio",
    images: [
      {
        url: "/f2.png",
        width: 1200,
        height: 630,
        alt: "Portfolio of Muhammad Kaif Razvi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Kaif Razvi | Full Stack Developer",
    description:
      "Check out the portfolio of Muhammad Kaif Razvi — skilled in building full-stack apps with Next.js, Prisma, ShadCN, and more.",
    images: ["/f2.png"],
    creator: "@kaifrazavi_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
      <body
        className={`leading-loose px-2 font-jetbrains-mono ${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransitionEvent>{children}</PageTransitionEvent>
        <Toaster />
      </body>
    </html>
  );
}
