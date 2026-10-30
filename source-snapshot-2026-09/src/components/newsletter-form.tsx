import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import { useSiteStore } from "@/lib/store";

export function NewsletterForm({ invert = false }: { invert?: boolean }) {
  const addSubscriber = useSiteStore((s) => s.addSubscriber);
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const result = addSubscriber(email);
    if (!result.ok) {
      toast.error(result.reason);
      return;
    }
    toast.success("You're on the list. We'll write when there is real news.");
    setEmail("");
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex flex-col gap-2 sm:flex-row", invert && "sm:flex-col")}
    >
      <label className="sr-only" htmlFor={invert ? "footer-email" : "news-email"}>
        Email address
      </label>
      <Input
        id={invert ? "footer-email" : "news-email"}
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={cn(
          invert &&
            "border-primary-fg/20 bg-primary-fg/8 text-primary-fg placeholder:text-primary-fg/45",
        )}
      />
      <Button type="submit" variant={invert ? "cream" : "primary"} className="sm:px-5">
        Sign up
      </Button>
    </form>
  );
}
