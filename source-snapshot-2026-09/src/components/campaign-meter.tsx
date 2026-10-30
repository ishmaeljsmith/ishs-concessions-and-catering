import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function campaignProgress() {
  const pct = SITE.gofundmeGoal
    ? Math.min(100, Math.round((SITE.gofundmeRaised / SITE.gofundmeGoal) * 100))
    : 0;
  return {
    pct,
    raised: usd.format(SITE.gofundmeRaised),
    goal: usd.format(SITE.gofundmeGoal),
    full: usd.format(SITE.gofundmeFullGoal),
  };
}

export function MeterTrack({ className }: { className?: string }) {
  const { pct } = campaignProgress();
  return (
    <div
      className={cn("h-2 overflow-hidden rounded-full bg-paper", className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      aria-label={`${pct} percent of the current kitchen milestone`}
    >
      <div
        className="h-full rounded-full bg-primary transition-[width] duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function CampaignCard() {
  const { pct, raised, goal, full } = campaignProgress();
  const first = SITE.gofundmeRaised === 0;

  return (
    <div className="rounded-xl bg-bg-elevated p-6 shadow-[var(--shadow-border)] sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
        GoFundMe · Kitchen fund
      </p>
      <p className="mt-3 font-display text-4xl font-semibold tabular-nums tracking-tight">
        {raised}
      </p>
      <p className="mt-1 text-sm text-muted">
        of {goal} this milestone · {pct}%
      </p>
      <MeterTrack className="mt-4 h-2.5" />
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {first
          ? "No gifts yet. The first donation opens the bar — equipment, health-department build-out, and the inventory that lets us cook."
          : "Every gift goes to the commissary kitchen, NSF equipment, and first inventory."}{" "}
        Longer-range kitchen goal: {full}.
      </p>
      <Button asChild className="mt-6 w-full" size="lg">
        <a href={SITE.gofundme} target="_blank" rel="noreferrer">
          {first ? "Be the first to give" : "Donate on GoFundMe"}
          <ArrowUpRight />
        </a>
      </Button>
      <p className="mt-3 text-xs text-muted">
        Totals as of {SITE.gofundmeAsOf}. Donations process on GoFundMe, not this
        site.
      </p>
    </div>
  );
}
