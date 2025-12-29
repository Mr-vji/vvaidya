"use client";
import { sendEmail } from "@/app/actions/sendEmail"; // adjust path if needed
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormStatus } from "react-dom"; // optional: to show submitting state

export default function Email() {
  // useFormStatus works with Server Actions to read submitting state
  const status = useFormStatus?.();

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <form
        action={sendEmail}
        className="w-full max-w-md space-y-4 border p-6 rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-bold text-center">Contact Us</h1>

        {/* note: these are uncontrolled inputs; Form sends FormData automatically */}
        <Input name="name" placeholder="Your Name" required />

        <Input type="email" name="email" placeholder="Your Email" required />

        <Textarea
          name="message"
          placeholder="Your Message..."
          rows={4}
          required
        />

        <Button type="submit" className="w-full">
          {status?.pending ? "Sending..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
