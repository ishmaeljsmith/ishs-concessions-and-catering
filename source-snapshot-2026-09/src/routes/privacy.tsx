import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [{ title: `Privacy · ${SITE.legalName}` }],
  }),
});

function PrivacyPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-2xl px-4 pb-20 pt-28 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Privacy
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
          How this site treats your notes
        </h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Contact forms and the email signup on this preview store your
            message on the device you are using. We do not sell lists. You can
            also reach us directly at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-fg underline decoration-border underline-offset-4"
            >
              {SITE.emailLabel}
            </a>{" "}
            or {SITE.phoneLabel}.
          </p>
          <p>
            The cook-and-platter drawing, wordmark, photographs, and copy on this site
            belong to {SITE.legalName} unless noted otherwise.
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
