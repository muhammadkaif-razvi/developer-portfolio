import type { Metadata } from "next";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ContactForm } from "@/components/ui/uis/contactpageform";

// ✅ 1. METADATA for SEO
export const metadata: Metadata = {
  title: "Contact | Muhammad Kaif Razvi - Full Stack Developer",
  robots: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow search engines to follow links on this page
    nocache: false, // Allow caching of the page (true = disallow)
    noimageindex: false, // Allow image indexing (true = disallow)
    nosnippet: false, // Allow snippets in search results (true = disallow)
  },

  description:
    "Get in touch with Muhammad Kaif Razvi, a full-stack web developer. Reach out for web development, freelancing, or collaboration.",
  keywords: [
    "Contact Muhammad Kaif Razvi",
    "Full Stack Developer Contact",
    "Hire Full Stack Developer",
    "Next.js Developer Contact",
    "Freelance Web Developer India",
    "React Tailwind Prisma Developer",
    "Portfolio Contact Page",
    "Developer Email Contact",
  ],
  metadataBase: new URL("https://www.muhammadkaifrazvi.xyz"),
  openGraph: {
    title: "Contact | Muhammad Kaif Razvi - Full Stack Developer",
    description:
      "Reach out to Full Stack Developer Muhammad Kaif Razvi for freelance or full-time projects in modern web development.",
    url: "https://www.muhammadkaifrazvi.xyz/contact",
    images: [
      {
        url: "/f2.png",
        width: 1200,
        height: 630,
        alt: "Contact Muhammad Kaif Razvi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Muhammad Kaif Razvi",
    description:
      "Let's build something great! Contact Muhammad Kaif Razvi for web development, e-commerce, or full-stack projects.",
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

// ✅ 2. Server Page + JSON-LD Injection
const ContactPage = async () => {
  const session = await auth();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Muhammad Kaif Razvi",
    url: "https://www.muhammadkaifrazvi.xyz/contact",
    mainEntity: {
      "@type": "Person",
      name: "Muhammad Kaif Razvi",
      jobTitle: "Full Stack Developer",
      url: "https://www.muhammadkaifrazvi.xyz",
      sameAs: [
        "https://github.com/muhammadkaif-razvi",
        "https://linkedin.com/in/muhammad-kaif-razvi-143-webdev",
        "https://x.com/kaifrazavi_",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressCountry: "India",
      },
    },
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 ">
      {/* ✅ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {session?.user ? (
        <Card className="bg-[#27272c] shadow-lg border-0 text-accent">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription className="text-[#97979e]">
              Reach out and I&apos;ll get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm userEmail={session.user.email!} />
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button variant="outline" className="mt-4 w-full">
                Sign Out
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-mono text-accent hover:text-accent-hover hover:underline">
            Sign in to contact me
          </h1>
          <Button
            onClick={async () => {
              "use server";
              await signIn("google");
            }}
            variant="outline"
          >
            Sign In with Google
          </Button>
          <Button
            onClick={async () => {
              "use server";
              await signIn("github");
            }}
            variant="outline"
          >
            Sign In with Github
          </Button>
        </div>
      )}
      <div className="relative w-full pt-[100%] shadow-md mt-6 mb-4 rounded-lg overflow-hidden will-change-transform">
        <iframe
          loading="lazy"
          className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
          src="https://www.canva.com/design/DAGtCeMXCRY/zaamMULvHux9_CB7bIRr6A/view?embed"
          allowFullScreen
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAGtCeMXCRY/zaamMULvHux9_CB7bIRr6A/view?utm_content=DAGtCeMXCRY&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener"
        className="text-blue-600 hover:underline"
      >
        Design
      </a>{" "}
      <span className="text-gray-700">by Muhammad Kaif Razvi</span>
    </div>
  );
};

export default ContactPage;
