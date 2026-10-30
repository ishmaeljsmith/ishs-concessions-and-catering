import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Coffee,
  Leaf,
  MapPin,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import { CampaignCard } from "@/components/campaign-meter";
import { LogoPoster } from "@/components/logo";
import { SiteShell } from "@/components/layout/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/newsletter-form";
import { SERVICES, SITE, loanPaidExact, loanPaidPct } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-primary text-primary-fg">
        <img
          src="/images/hero-table.jpg"
          alt="A farm table of donuts, coffee, and Florida produce under live oaks"
          className="absolute inset-0 size-full object-cover outline-none"
        />
        <div className="absolute inset-0 hero-veil" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24">
          <Badge className="w-fit border-primary-fg/20 bg-primary-fg/10 text-primary-fg">
            {SITE.locationFuture} · Building now
          </Badge>
          <h1 className="mt-5 max-w-3xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Fresh meals for Dixie County, made close to home.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-fg/80 sm:text-lg">
            Affordable, delicious, healthy food from local Florida farms.
            Non-GMO when we can. Florida Goldbacks welcome. Kitchen, trucks, and
            catering — coming out of Old Town.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="cream">
              <Link to="/contact">
                Request catering
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-fg/25 text-primary-fg hover:bg-primary-fg/10"
            >
              <Link to="/support">Support the kitchen</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-elevated">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            { icon: Leaf, label: "Local Florida produce" },
            { icon: BadgeCheck, label: "Non-GMO when possible" },
            { icon: MapPin, label: "Dixie & surrounding counties" },
            { icon: Coffee, label: "Florida Goldbacks accepted" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="size-5 text-primary" strokeWidth={1.75} />
              <p className="text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-xl bg-bg-elevated p-4 shadow-[var(--shadow-border)] sm:p-5">
            <LogoPoster className="max-w-xs" />
          </div>
        </div>
        <div className="prose-ish lg:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Our mission
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A kitchen that belongs to this place.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {SITE.legalName} is a newly established Florida business (LLC{" "}
            {SITE.llcNumber}). We are based in {SITE.locationNow} while we
            finish securing our property in {SITE.locationFuture} — our future
            home base.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            We cook affordable, healthy meals with produce from small businesses
            in the communities we serve. The long game is jobs, a commissary
            kitchen the health department can stand behind, and food that
            actually tastes like someone nearby grew it.
          </p>
          <Button asChild variant="secondary" className="mt-6">
            <Link to="/about">
              Read the story
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                What we&rsquo;re building
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">
                Delivery, catering, trailers, trucks.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Phase one starts with a licensed kitchen. Everything else rolls
              out from that room.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                className="overflow-hidden rounded-xl bg-bg-elevated shadow-[var(--shadow-border)]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-6 sm:p-7">
                  <Badge>{service.phase}</Badge>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/property.jpg"
            alt="Live oaks and palmettos on a wooded rural property in Old Town, Florida"
            className="aspect-[16/11] w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Current progress
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">
            {loanPaidPct()}% of the land loan is paid.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            As of {SITE.loanPaidDate} we have made {SITE.loanPaidCount} of{" "}
            {SITE.loanPaidTotal} payments — {loanPaidPct()}% of the loan on
            the Old Town property. That is the ground under the kitchen. Plans
            for Dixie County Health Department review are underway.
          </p>
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">
                {SITE.loanPaidCount} of {SITE.loanPaidTotal} payments
              </span>
              <span className="tabular-nums text-muted">{loanPaidPct()}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${loanPaidExact()}%` }}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={SITE.gofundme} target="_blank" rel="noreferrer">
                Donate on GoFundMe
              </a>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/support">Other ways to help</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-primary text-primary-fg">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <img
            src="/images/kitchen.jpg"
            alt="A clean commissary kitchen with donuts cooling and local produce ready for prep"
            className="aspect-[4/3] w-full object-cover outline-none lg:aspect-auto lg:min-h-[28rem]"
          />
          <div className="flex flex-col justify-center px-6 py-14 sm:px-12">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-fg/60">
              Coming soon
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">
              Donuts at dawn. Lunch by noon.
            </h2>
            <p className="mt-4 leading-relaxed text-primary-fg/75">
              The commissary kitchen will bake, pack, and send food to offices,
              trailers, and private tables. Until the health department signs
              off, we are taking interest lists — not orders.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-primary-fg/85">
              <li className="flex gap-2">
                <UtensilsCrossed className="mt-0.5 size-4 shrink-0" />
                Private catering and groups of up to 30
              </li>
              <li className="flex gap-2">
                <Truck className="mt-0.5 size-4 shrink-0" />
                Concession trailers for community events
              </li>
              <li className="flex gap-2">
                <Coffee className="mt-0.5 size-4 shrink-0" />
                Coffee, breakfast, and bakery delivery
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Kitchen notes
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">
          Get word when we open the window.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          No daily blasts. Just openings, menus, and the days we can take a
          catering date.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <NewsletterForm />
        </div>
      </section>
    </SiteShell>
  );
}
