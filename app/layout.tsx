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
  title: "Muhammad kaif Razvi | Portfolio",


  description:
    "Explore a curated collection of my web development projects and technical skills.",
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
