"use client";

import { useActionState, useEffect, useState } from "react";
import { sendContactEmail } from "@/actions/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const initialState = { success: false };

export function ContactForm({ userEmail }: { userEmail: string }) {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
  const [isDisabled, setIsDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (isPending) {
      // Start 30s timer as soon as user clicks the button
      setIsDisabled(true);
      setTimeLeft(30);

      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isPending]);

  useEffect(() => {
    if (state?.success) {
      toast.success("✅ Message sent successfully!");
      // Optional: Extend cooldown to 1 hour if needed
      // setTimeLeft(3600);
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-4">
      <Input disabled name="email" value={userEmail} />
      <Input name="name" placeholder="Your Name" required />
      <select name="subject" required className="w-full p-2 rounded-md">
        <option value="">Select Subject</option>
        <option value="general">General</option>
        <option value="project">Project</option>
        <option value="collab">Collaboration</option>
      </select>
      <Textarea name="message" placeholder="Your Message" required />

      <Button type="submit" className="w-full" disabled={isDisabled}>
        {isDisabled ? `Wait ${timeLeft}s...` : "Send Message"}
      </Button>
    </form>
  );
}
