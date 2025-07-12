import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import SendMessageButton from "@/components/ui/uis/sendmsg";
import { ContactForm } from "@/components/ui/uis/contactpageform";

async function sendContactEmail(formData: any) {
  "use server";
  const { name, subject, message, email } = Object.fromEntries(formData);

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: "muhammadkaifrazwi@gmail.com",
    subject: `Portfolio Message: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });
}

const ContactPage = async () => {
  const session = await auth();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      {session?.user ? (
        <Card className="bg-[#27272c] shadow-lg border-0 text-accent">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription className="text-[#97979e]">
              Reach out and I'll get back to you soon.
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
    </div>
  );
};

export default ContactPage;
