import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  image: string;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-primary text-primary-fg",
        compact ? "min-h-[22rem]" : "min-h-[28rem] sm:min-h-[32rem]",
      )}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover outline-none"
      />
      <div className="absolute inset-0 page-veil" />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-36">
        {eyebrow ? (
          <Badge className="w-fit border-primary-fg/20 bg-primary-fg/8 text-primary-fg/85">
            {eyebrow}
          </Badge>
        ) : null}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-fg/80 sm:text-lg">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
