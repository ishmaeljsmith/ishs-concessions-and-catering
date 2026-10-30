# Ish's Concessions and Catering LLC — website backup

Backup of **https://ishs-concessions-and-catering.com**, made **October 29, 2026**.

The site is the public website for **Ish's Concessions and Catering LLC** (Florida LLC L26000201812): a startup kitchen, catering and concessions business building a kitchen in Old Town, Dixie County, Florida. It is based in Taylor County, FL for now. Phone (352) 768-8768, email Contact@Ishs-concessions-and-catering.com.

It was built in **Grok Build Mode** and is published through Grok. It is also live at https://ishs-concessions-and-catering.grok.me.

Pages: Home `/`, About `/about`, Support / donate `/support`, Updates `/updates`, Contact `/contact`, and Privacy `/privacy`.

---

## What's in this folder

| Path | What it is |
|---|---|
| `docs/` | **The current live site, ready to host.** It is a static snapshot of every page plus all JS, CSS, images, logos, favicon, og.jpg and manifest, downloaded from the live domain on 2026-10-29. Deploy this folder. |
| `docs/CNAME` | Custom domain file for GitHub Pages. It contains `ishs-concessions-and-catering.com`. |
| `docs/.nojekyll` | Tells GitHub Pages to serve the `__grok/` folder. Without it, Jekyll would ignore folders that start with `_`. |
| `source-snapshot-2026-09/` | The **editable source code** (React/TanStack Start) from the September 2026 Grok export. **It is older than the live site.** See "Source vs. live" below. |
| `brand/` | The September 2026 logo PNGs (`logo-full`, `logo-mark`). The current, newer logos are in `docs/images/`. |

### Source vs. live (read this)
- `docs/` matches the live site as of 2026-10-29. For example, it shows "16 of 48 payments as of October 2026 (33%)" and uses the logos updated on 2026-10-25 (`?v=20261025`).
- `source-snapshot-2026-09/` is the last full source export, dated about September 14, 2026. It says "15 of 48 = 31%" and has the older logos. Its README (`START-HERE-2026-09.txt`) describes that state.
- To get **editable source for the current version**, open the project in Grok Build Mode and download or export it again. Then replace `source-snapshot-2026-09/` with the new export.
- The private logo filing guide PDF is **deliberately left out** of this backup. Keep it private and do not put it in a public repo.

## Tech stack
- **Live site:** React 19 + TanStack Start (SSR), Tailwind CSS v4, built with Vite. It is served by Grok's hosting, which responds with `server: Vercel` headers.
- **Fonts:** Figtree and Fraunces, loaded from Google Fonts.
- **Static snapshot (`docs/`):** plain HTML/CSS/JS. It was pre-rendered by the live server and needs no build step. React hydrates in the browser, and navigation works.
- **Source (`source-snapshot-2026-09/`):** Node 22, `npm install`, `npm run dev`, and `npm run build`. It includes Grok-specific scripts (`scripts/`, `server/middleware/grok-pwa.ts`) and optional auth/DB code (better-auth, PGlite), which are off according to the September notes.

### What does NOT work on static hosting (GitHub Pages)
- **The contact form.** On the live site it sends through a server function (`/_serverFn/...`) to Contact@Ishs-concessions-and-catering.com. Static hosting has no server, so it won't send. Options: replace it with a free form service (Formspree, Web3Forms, Google Form), or use a plain `mailto:` link.
- **The live GoFundMe total** on /support is also fetched by a server function. On static hosting it falls back to the "Checking GoFundMe…" text, but the Donate button and link still work.
- **Email signup** is stored only in the visitor's browser (localStorage), the same as on the live site.
- Each page still loads `https://grok.com/grok-app-builder/extensions.js` and points its og:image at `ishs-concessions-and-catering.grok.me/og.jpg`. These Grok references can be removed from the HTML `<head>` once you leave Grok. A copy of the og image is at `docs/og.jpg`.

## Preview locally
```bash
cd docs
python3 -m http.server 8000
# open http://localhost:8000
```
For the source version (needs Node 22):
```bash
cd source-snapshot-2026-09
npm install
npm run dev     # http://localhost:8080
```

## Deploy on GitHub Pages
1. Push this folder to a GitHub repo, e.g. `ishs-concessions-and-catering`.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: `main`**, and **Folder: `/docs`**. Click Save.
4. After about a minute the site is up at `https://<your-username>.github.io/ishs-concessions-and-catering/`. Pages, links, and images use absolute paths like `/about` and `/images/...`, so they **only display correctly on the custom domain** (or at a user-site root). Set up the custom domain (below) before judging the result.
5. Under **Custom domain**, enter `ishs-concessions-and-catering.com` and save. The `docs/CNAME` file already contains it. Tick **Enforce HTTPS** once it's available.

## Domain & hosting notes
Checked 2026-10-29:
- **Registrar:** DomainRegistry.com LLC (RDAP). Registered 2026-04-14. **Expires 2027-04-14.** Renew it on time.
- **Nameservers:** `NS1/NS2.HOSTING.BUSINESSIDENTITY.LLC`.
- **Current records:** `ishs-concessions-and-catering.com` and `www` → A `64.239.109.1`, which is the current Grok/Vercel hosting.
- **Email:** MX `10 mailserver.businessidentity.llc`. **Don't change the MX records or nameservers** when you move the website, or company email will stop working. Only edit the A/CNAME web records.

To point the domain at GitHub Pages, go to the DNS panel at your DNS host (businessidentity / DomainRegistry):
- Replace the apex `@` A record (`64.239.109.1`) with GitHub's four A records:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  (optional AAAA: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`)
- Change `www` to a **CNAME** → `<your-username>.github.io`
- Wait for DNS to update (minutes to a few hours). Then in GitHub Settings → Pages, confirm the custom domain and enable HTTPS.
- Only switch DNS once you're happy with the GitHub Pages version, because the switch moves the live site off Grok.
- Check GitHub's current docs before changing DNS: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

Other hosts work too. Netlify, Cloudflare Pages, and Vercel can all serve the `docs/` folder as-is. Vercel and Netlify can also build `source-snapshot-2026-09/` and run the server functions.

## Links used on the site
- GoFundMe: https://gofund.me/9710471c5
- Facebook: https://www.facebook.com/profile.php?id=61594149606490
