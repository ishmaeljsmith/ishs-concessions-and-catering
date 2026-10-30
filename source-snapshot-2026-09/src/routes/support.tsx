import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  HeartHandshake,
  Share2,
  Sprout,
  UtensilsCrossed,
} from "lucide-react";
import { CampaignCard } from "@/components/campaign-meter";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { SITE, loanPaidExact, loanPaidPct } from "@/lib/site";

export const Route = createFileRoute("/support")({
  component: SupportPage,
  head: () => ({
    meta: [{ title: `Support · ${SITE.legalName}` }],
  }),
});

function SupportPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Support / donate"
        title="Help us finish the kitchen that feeds the county."
        lede="The property in Old Town is real, and 15 of 48 loan payments are in. The next dollars go into a health-department-approved commissary — the room every trailer, catering job, and lunch box depends on."
        image="/images/property.jpg"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Where the money goes
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              The official fundraiser is on GoFundMe. Gifts pay for kitchen
              build-out, NSF-certified equipment, and the first inventory.
              Donations process there — not through a form on this site.
            </p>
            <ul className="mt-6 space-y-2 text-sm leading-relaxed text-muted">
              <li>Health-department-approved commercial kitchen</li>
              <li>NSF-certified equipment</li>
              <li>Opening inventory and packaging</li>
            </ul>
            <div className="mt-8 rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]">
              <p className="text-sm font-medium">Old Town property loan</p>
              <p className="mt-1 font-display text-3xl font-semibold tabular-nums">
                {loanPaidPct()}%
              </p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-paper">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${loanPaidExact()}%` }}
                />
              </div>
              <p className="mt-3 text-xs text-muted">
                {SITE.loanPaidCount} of {SITE.loanPaidTotal} payments as of{" "}
                {SITE.loanPaidDate}. Separate from the GoFundMe — already on
                the books.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <CampaignCard />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            {
              icon: UtensilsCrossed,
              title: "Hire us",
              body: "Book a future catering date or join the office-delivery list. Paying for food is the cleanest way to fund the kitchen.",
            },
            {
              icon: HeartHandshake,
              title: "Partner",
              body: "Churches, nonprofits, farms, and civic groups — if you already feed people, we want to cook beside you.",
            },
            {
              icon: Share2,
              title: "Share the work",
              body: "Send the site, the GoFundMe, or the Facebook page to someone in Dixie, Taylor, or the Big Bend who cares about local food and local jobs.",
            },
            {
              icon: Sprout,
              title: "Give on GoFundMe",
              body: "Help Launch Ish’s Concessions and Catering is the official campaign for the commissary kitchen and first equipment.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-lg bg-bg-elevated p-6 shadow-[var(--shadow-border)]"
            >
              <item.icon className="size-5 text-primary" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="secondary">
            <a href={SITE.facebook} target="_blank" rel="noreferrer">
              Follow on Facebook
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Supporters
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
              Named partners will live on this wall.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              We do not invent testimonials. When a farm, church, family, or
              neighbor is willing to be named, they will appear here with their
              permission. If that is you, tell us below.
            </p>
            <Button asChild variant="secondary" className="mt-6">
              <Link to="/updates">Read the latest progress</Link>
            </Button>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultTopic="Support the kitchen build" />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
