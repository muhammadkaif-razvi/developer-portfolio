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

const ContactPage = async () => {
  const session = await auth();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 ">
      {session?.user ? (
        <Card className="bg-[#27272c] shadow-lg border-0 text-accent">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription className="text-[#97979e]">
              Reach out and Ill get back to you soon.
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
          <h1 className="text-4xl font-mono text-accent hover:text-accent-hover hover:underline ">
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
          </Button>{" "}
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
