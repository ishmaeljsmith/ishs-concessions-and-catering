import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { NAV } from "@/lib/site";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-200 ease-out",
        inverted
          ? "bg-transparent text-primary-fg"
          : "bg-bg/92 text-fg shadow-[var(--shadow-border)] backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <Link to="/" aria-label="Ish's Concessions and Catering home">
          <Logo light={inverted} />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm font-medium tracking-wide transition-opacity duration-150",
                  active ? "opacity-100" : "opacity-70 hover:opacity-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" variant={inverted ? "cream" : "primary"}>
            <Link to="/contact">Contact</Link>
          </Button>
        </div>

        <button
          type="button"
          className="relative flex size-11 items-center justify-center rounded-md lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t transition-[max-height,opacity] duration-200 ease-out",
          inverted ? "border-primary-fg/15" : "border-border",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav
          className={cn(
            "flex flex-col gap-1 px-4 py-4",
            inverted ? "bg-primary text-primary-fg" : "bg-bg",
          )}
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-11 items-center rounded-md px-3 text-base font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2" variant={inverted ? "cream" : "primary"}>
            <Link to="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
