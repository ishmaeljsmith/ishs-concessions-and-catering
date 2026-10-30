import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_TOPICS, SITE } from "@/lib/site";
import { useSiteStore } from "@/lib/store";

const schema = z.object({
  name: z.string().min(2, "Please tell us your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().optional(),
  topic: z.string().min(1, "Choose a topic."),
  eventDate: z.string().optional(),
  message: z.string().min(12, "A few more details help us reply well."),
});

type Values = z.infer<typeof schema>;

export function ContactForm({ defaultTopic }: { defaultTopic?: string }) {
  const addInquiry = useSiteStore((s) => s.addInquiry);
  const [ref, setRef] = useState<string | null>(null);

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: defaultTopic ?? "",
      eventDate: "",
      message: "",
    },
  });

  function onSubmit(values: Values) {
    const inquiry = addInquiry({
      name: values.name,
      email: values.email,
      phone: values.phone ?? "",
      topic: values.topic,
      message: values.message,
      eventDate: values.eventDate ?? "",
    });
    setRef(inquiry.id);
    toast.success("Message saved. We'll follow up at the email you gave.");
    form.reset({ ...values, message: "" });
  }

  if (ref) {
    return (
      <div className="rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Received
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
          Thank you. We have it.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your note is stored on this device for now so nothing is lost while
          we stand up the kitchen. Reference{" "}
          <span className="font-medium text-fg tabular-nums">{ref}</span>. You
          can also call {SITE.phoneLabel} or write {SITE.emailLabel}.
        </p>
        <Button className="mt-6" variant="secondary" onClick={() => setRef(null)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid gap-5 rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={form.formState.errors.name?.message}>
          <Input autoComplete="name" {...form.register("name")} />
        </Field>
        <Field label="Email" error={form.formState.errors.email?.message}>
          <Input type="email" autoComplete="email" {...form.register("email")} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" error={form.formState.errors.phone?.message}>
          <Input type="tel" autoComplete="tel" {...form.register("phone")} />
        </Field>
        <Field label="Event date" error={form.formState.errors.eventDate?.message}>
          <Input type="date" {...form.register("eventDate")} />
        </Field>
      </div>
      <Field label="How can we help" error={form.formState.errors.topic?.message}>
        <select
          className="flex h-11 w-full rounded-md border border-border bg-bg-elevated px-3.5 text-sm text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          {...form.register("topic")}
        >
          <option value="">Select a topic</option>
          {CONTACT_TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" error={form.formState.errors.message?.message}>
        <Textarea rows={5} {...form.register("message")} />
      </Field>
      <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
        Send message
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-sm text-accent">{error}</p> : null}
    </div>
  );
}
