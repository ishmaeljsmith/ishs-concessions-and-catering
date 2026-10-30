import { ArrowUpRight } from "lucide-react";
import { campaignProgress, MeterTrack } from "@/components/campaign-meter";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function DonateBar() {
  const { raised, goal, pct } = campaignProgress();
  const first = SITE.gofundmeRaised === 0;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4">
      <div className="pointer-events-auto mx-auto flex max-w-6xl flex-col gap-3 rounded-lg bg-bg-elevated px-4 py-3 shadow-[var(--shadow-border-hover)] sm:flex-row sm:items-center sm:gap-6 sm:px-5">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-sm font-medium">
              {first ? "Open the kitchen fund" : "Kitchen fund"}
            </p>
            <p className="shrink-0 text-xs tabular-nums text-muted">
              {raised} of {goal} · {pct}%
            </p>
          </div>
          <MeterTrack className="mt-2" />
        </div>
        <Button asChild className="w-full shrink-0 sm:w-auto" size="sm">
          <a href={SITE.gofundme} target="_blank" rel="noreferrer">
            {first ? "Give first" : "Donate"}
            <ArrowUpRight />
          </a>
        </Button>
      </div>
    </div>
  );
}
