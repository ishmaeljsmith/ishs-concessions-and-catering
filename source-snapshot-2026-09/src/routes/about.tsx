import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { LogoPoster } from "@/components/logo";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { SITE, VALUES } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: `About · ${SITE.legalName}` }],
  }),
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About the company"
        title="A Florida kitchen with a Dixie County address."
        lede="We are in the startup phase: papers filed, land under contract, kitchen drawings on the table. The work is to feed people well and leave the county stronger than we found it."
        image="/images/produce.jpg"
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Why we started
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              {SITE.legalName} exists to put affordable, delicious, healthy meals
              on tables in Dixie County and the towns around it. We buy from
              local Florida small businesses whenever we can, with a standing
              preference for non-GMO and non-bioengineered ingredients.
            </p>
            <p>
              We are currently based in {SITE.locationNow} while we finish
              securing the property in {SITE.locationFuture}. That land is the
              future commissary kitchen — the room that lets concession
              trailers, catering, bakery, and office delivery all operate
              legally and well.
            </p>
            <p>
              The long-term picture is a community-oriented business: mobile
              food trucks for local events, private catering for groups of up
              to thirty, a tiki-hut dining room with a bar for catered nights,
              and family services like bounce-house rentals for birthday
              parties. Phase one is simpler. Get the kitchen approved. Start
              cooking.
            </p>
            <p>
              We also want the work itself to stay here — hiring from the
              counties we serve and partnering with local nonprofits that
              already know who needs a meal, a job, or a Saturday event.
            </p>
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              On the books
            </p>
            <dl className="mt-5 space-y-4 text-sm">
              <Row k="Legal name" v={SITE.legalName} />
              <Row k="Florida LLC" v={SITE.llcNumber} />
              <Row k="Now based" v={SITE.locationNow} />
              <Row k="Home base" v={SITE.locationFuture} />
              <Row
                k="Phone"
                v={
                  <a href={`tel:${SITE.phone}`} className="hover:opacity-80">
                    {SITE.phoneLabel}
                  </a>
                }
              />
              <Row
                k="Email"
                v={
                  <a href={`mailto:${SITE.email}`} className="hover:opacity-80">
                    {SITE.emailLabel}
                  </a>
                }
              />
              <Row k="Currency" v="USD and Florida Goldbacks" />
            </dl>
          </div>
        </aside>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            How we cook
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="rounded-lg bg-bg-elevated p-6 shadow-[var(--shadow-border)]"
              >
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <img
          src="/images/tiki.jpg"
          alt="A small tiki-hut dining room set for a private gathering"
          className="aspect-[16/11] w-full rounded-xl object-cover"
        />
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Looking ahead
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
            A table for thirty, and a window that travels.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Private dining will live in a planned tiki hut on the Old Town
            property — seated catering, a stocked bar, nights that feel like
            they belong to the Suwannee country rather than a hotel ballroom.
            The trucks and trailers take that same food to fairs, ball fields,
            and church grounds.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-bg-elevated">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl bg-bg p-4 shadow-[var(--shadow-border)] sm:p-6">
              <LogoPoster />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              The company
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
              This drawing is the face of the kitchen.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The cook, the platter, and the Ish&rsquo;s lettering belong to{" "}
              {SITE.legalName}. You will see them on the trailers, the menus,
              and the tables we set.
            </p>
            <Button asChild className="mt-8" variant="secondary">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Row({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-border pb-4 last:border-0 last:pb-0 sm:flex-row sm:justify-between sm:gap-6">
      <dt className="text-muted">{k}</dt>
      <dd className="font-medium sm:text-right">{v}</dd>
    </div>
  );
}
