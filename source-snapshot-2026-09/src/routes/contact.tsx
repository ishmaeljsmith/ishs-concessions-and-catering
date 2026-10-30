import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: `Contact · ${SITE.legalName}` }],
  }),
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        compact
        eyebrow="Contact"
        title="Tell us the date, the headcount, and what you want on the table."
        lede="Call, email, or send the form. We take catering interest, office delivery, partnerships, and kitchen support now."
        image="/images/catering.jpg"
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Reach the kitchen
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Home base is Old Town. We cook for Dixie County and the counties
            that touch it. Farther out is a conversation, not a no.
          </p>
          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-start gap-3 rounded-lg p-1 -m-1 hover:opacity-80"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm font-medium">
                    {SITE.phoneLabel}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 rounded-lg p-1 -m-1 hover:opacity-80"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    Email
                  </span>
                  <span className="mt-1 block text-sm font-medium break-all">
                    {SITE.emailLabel}
                  </span>
                </span>
              </a>
            </li>
          </ul>
          <ul className="mt-8 space-y-3">
            {SITE.serviceArea.map((county) => (
              <li key={county} className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary" />
                {county}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-lg bg-paper p-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Also accepted
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              Florida Goldbacks, for the same reason we buy local: value should
              be able to stay in the towns it was earned in.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="secondary">
              <a href={SITE.facebook} target="_blank" rel="noreferrer">
                Facebook
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={SITE.gofundme} target="_blank" rel="noreferrer">
                GoFundMe
                <ArrowUpRight />
              </a>
            </Button>
          </div>
          <img
            src="/images/delivery.jpg"
            alt="Breakfast boxes, coffee, and donuts ready for office delivery"
            className="mt-8 aspect-[4/3] w-full rounded-xl object-cover"
          />
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
