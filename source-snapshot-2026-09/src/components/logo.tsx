import { cn } from "@/lib/cn";

export function LogoMark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const box =
    size === "lg" ? "size-16" : size === "sm" ? "size-10" : "size-11";
  return (
    <span
      className={cn(
        "inline-flex shrink-0 overflow-hidden rounded-full bg-bg-elevated shadow-[var(--shadow-border)]",
        box,
        className,
      )}
    >
      <img
        src="/images/logo-mark.png"
        alt=""
        className="size-full object-cover object-[center_8%]"
      />
    </span>
  );
}

export function Logo({
  className,
  stacked = false,
  light = false,
}: {
  className?: string;
  stacked?: boolean;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={stacked ? "lg" : "md"} />
      <span className={cn("flex flex-col", stacked ? "gap-1" : "gap-0.5")}>
        <span
          className={cn(
            "font-display font-semibold leading-none tracking-tight",
            stacked ? "text-[1.65rem]" : "text-[1.15rem]",
            light ? "text-primary-fg" : "text-fg",
          )}
        >
          Ish&rsquo;s
        </span>
        <span
          className={cn(
            "font-display italic font-medium leading-none",
            stacked ? "text-[0.95rem]" : "text-[0.72rem]",
            light ? "text-primary-fg/85" : "text-primary",
          )}
        >
          Concessions
        </span>
      </span>
    </span>
  );
}

export function LogoPoster({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo-full.png"
      alt="Ish's Concessions and Catering LLC logo: a smiling cook holding a platter of fried shrimp, hush puppies, crab cakes, fried fish, coleslaw, and sweet tea."
      className={cn("mx-auto w-full max-w-sm bg-bg-elevated", className)}
    />
  );
}
