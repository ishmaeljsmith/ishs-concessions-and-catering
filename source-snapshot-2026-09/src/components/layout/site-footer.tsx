import { Link } from "@tanstack/react-router";
import { LogoPoster } from "@/components/logo";
import { NewsletterForm } from "@/components/newsletter-form";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-fg text-bg pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <div className="max-w-[13.5rem] overflow-hidden rounded-lg bg-bg p-3">
            <LogoPoster className="max-w-none" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-bg/75">
            {SITE.description}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-bg/55">
            Florida LLC {SITE.llcNumber}
          </p>
          <ul className="mt-4 space-y-1.5 text-sm text-bg/85">
            <li>
              <a href={`tel:${SITE.phone}`} className="hover:text-bg">
                {SITE.phoneLabel}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-bg break-all">
                {SITE.emailLabel}
              </a>
            </li>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-bg/85">
            <li>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-bg"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={SITE.gofundme}
                target="_blank"
                rel="noreferrer"
                className="hover:text-bg"
              >
                GoFundMe
              </a>
            </li>
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4">
          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bg/55">
              Visit
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-bg/85">
              <li>
                <Link to="/" className="hover:text-bg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-bg">
                  About
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-bg">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/updates" className="hover:text-bg">
                  Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-bg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bg/55">
              Serving
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-bg/85">
              {SITE.serviceArea.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bg/55">
            Kitchen notes
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-bg/75">
            Occasional updates on the Old Town kitchen, menus, and days we are
            booking.
          </p>
          <div className="mt-4">
            <NewsletterForm invert />
          </div>
        </div>
      </div>
      <div className="border-t border-bg/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-bg/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <Link to="/privacy" className="hover:text-bg">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
