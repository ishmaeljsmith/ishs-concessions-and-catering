import { createFileRoute } from "@tanstack/react-router";
import { Check, Circle } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { NewsletterForm } from "@/components/newsletter-form";
import { PageHero } from "@/components/page-hero";
import { PROGRESS, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/updates")({
  component: UpdatesPage,
  head: () => ({
    meta: [{ title: `Updates · ${SITE.legalName}` }],
  }),
});

function UpdatesPage() {
  return (
    <SiteShell>
      <PageHero
        compact
        eyebrow="Updates"
        title="What is done, and what is still on the table."
        lede="A public record of the startup — papers, banking, land, and the kitchen that has to pass Dixie County Health Department."
        image="/images/kitchen.jpg"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <ol className="relative border-l border-border pl-8">
          {PROGRESS.map((item) => (
            <li key={item.title} className="relative pb-12 last:pb-0">
              <span
                className={cn(
                  "absolute -left-8 top-0 flex size-6 -translate-x-1/2 items-center justify-center rounded-full border",
                  item.done
                    ? "border-primary bg-primary text-primary-fg"
                    : "border-border bg-bg text-muted",
                )}
              >
                {item.done ? (
                  <Check className="size-3.5" strokeWidth={2.5} />
                ) : (
                  <Circle className="size-2 fill-current" />
                )}
              </span>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {item.date}
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
              {"highlight" in item && item.highlight ? (
                <p className="mt-3 text-sm font-medium text-accent">
                  Huge accomplishment.
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <img
            src="/images/community.jpg"
            alt="A North Florida community hall table of homestyle food"
            className="aspect-[16/11] w-full rounded-xl object-cover"
          />
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Next on the list
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Finish the kitchen drawings. Present them to Dixie County Health
              Department. Build a commissary that can legally support trailers
              and catering. Then open the delivery window for breakfast, lunch,
              donuts, and coffee.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Want the short version when something actually moves? Leave an
              email. We will not write for the sake of writing.
            </p>
            <div className="mt-6 max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
