"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

const SendMessageButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="link"
      className="bg-accent-hover w-full"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
};

export default SendMessageButton;
