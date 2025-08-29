import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/uis/Header";
import PageTransitionEvent from "@/components/ui/uis/PageTransition";
import StairTransition from "@/components/ui/uis/StairTransition";
import { Toaster } from "@/components/ui/sonner";
import { description, title } from "@/constants/seo";

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
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  authors: [
    {
      name: "Muhammad Kaif Razvi",
      url: "https://www.muhammadkaifrazvi.xyz",
    },
  ],
  other: {
    keywords:
      "Muhammad Kaif Razvi, Best Full Stack Developer in Hyderabad, Web Developer in Hyderabad, Next.js Developer India, React Developer Hyderabad, Tailwind CSS Developer, ShadCN UI Expert, Prisma Developer, Express.js Developer, NX Monorepo Developer, SaaS Developer Hyderabad, E-commerce Developer Hyderabad, MERN Stack Developer India, Freelance Web Developer Hyderabad, Hire Web Developer Hyderabad, Software Developer Portfolio",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.muhammadkaifrazvi.xyz"
  ),
  openGraph: {
    title,
    description,
    locale: "en_IN",
    url:
      process.env.NEXT_PUBLIC_BASE_URL || "https://www.muhammadkaifrazvi.xyz",
    siteName: "Muhammad Kaif Razvi Portfolio",
    images: [
      {
        url: "/f2.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    type: "website",
  },
  manifest: "/manifest.webmanifest",
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/f2.png"],
    creator: "@kaifrazavi_",
  },
  icons: {
    icon: "/favicon.ico",
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
