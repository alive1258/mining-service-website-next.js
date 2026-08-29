# Minvip — Frontend

Marketing website for **Minvip**, a mining and industrial engineering
services company. Built with Next.js (App Router), TypeScript, Tailwind
CSS v4, and Redux Toolkit.

> **Note on project history:** this codebase was originally built for a
> yacht-charter business ("Eco Yachts") and is being repurposed for
> Minvip. The public marketing pages (Home, About, Projects, Contact)
> have been rebuilt for the new brand. The backend API, the admin
> dashboard (`/dashboard`), and the auth/booking/chat systems are still
> running on the original yacht-domain data model — see
> [Known gaps](#known-gaps-from-the-yacht--mining-migration) below
> before doing further work here.

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS v4, [lucide-react](https://lucide.dev/) icons
- **State/data:** Redux Toolkit + RTK Query
- **Forms:** react-hook-form
- **Fonts:** Space Grotesk / Work Sans (marketing pages), Geist (app-wide default)

## Getting started

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env.local` in this directory:

```bash
NEXT_PUBLIC_API_URL=<backend API base URL>
```

Required by the app's Redux API layer (`src/redux/api/*`) and by
server-fetched sections such as testimonials. Currently points at the
legacy yacht-charter backend — see [Known gaps](#known-gaps-from-the-yacht--mining-migration).

### Scripts

| Command         | Description                              |
| ---------------- | ----------------------------------------- |
| `npm run dev`     | Start the dev server (Turbopack)          |
| `npm run build`   | Production build                          |
| `npm run start`   | Serve the production build                |
| `npm run lint`    | Run ESLint                                |

## Project structure

```
src/
  app/
    (withCommonLayout)/   # public marketing site — shares Navbar/Footer
      page.tsx             # Home
      about/                # About
      projects/             # Projects
      contact/               # Contact
      privacy-policy/, refund-policy/, terms-conditions/
    (dashboardLayout)/     # admin CMS (legacy yacht content model)
    login/, signup/, otp/   # auth flows
  components/
    Shared/                 # cross-page building blocks (Navbar, Footer,
                             # Logo, PageHero/SectionHero, StatsBar,
                             # ProjectCard, FeatureCard, ImageFeature,
                             # ImageBanner, ArrowChip, Badge, HeroArt, ...)
    Ui/HomePage/, Ui/AboutPage/, Ui/ProjectsPage/, Ui/ContactPage/
                             # page-specific sections
    Ui/Dashboard/            # admin CMS screens
    Common/                  # toasts, modals, form primitives, etc.
  redux/                    # RTK Query API slices + store
  hooks/, helpers/, lib/     # utilities, axios instance, providers
```

## Design system (marketing pages)

Dark theme, defined as Tailwind `@theme` tokens in `src/app/globals.css`:

- `ink-950`…`ink-500` — background / panel shades
- `lime-400` / `lime-300` / `lime-950` — accent color + ink text-on-accent
- `font-display` (Space Grotesk) for headings, `font-body` (Work Sans) for copy

Reusable section patterns live in `src/components/Shared/` — prefer
composing those (`ImageFeature`, `ImageBanner`, `StatsBar`, `FeatureCard`,
`ProjectCard`) over hand-rolling new section markup.

## Known gaps (from the yacht → mining migration)

These are pre-existing, not introduced by the marketing-page rebuild —
flagging them so they aren't mistaken for new bugs:

- **Backend/API** (`NEXT_PUBLIC_API_URL`) still points at the original
  yacht-charter service; testimonials, auth, chat, and the dashboard CMS
  all read/write yacht-domain data.
- **Admin dashboard** (`(dashboardLayout)`) still manages yacht content
  (yachts, destinations, experiences, sustainability, etc.) — not yet
  adapted to mining/project content.
- **Auth, live chat, and booking** UI is still wired into the public
  Navbar (`My Account` link, chat widget) from the yacht-era flow.
- Several legacy `/about/*` subpages (`news/events`, `portfolio`,
  `sustainability`) reference components that were never created and
  will fail to compile if routed to.
- The `framer-motion` package is imported by a few unused animation
  helpers (`components/Common/Animaation/`) but isn't installed.

## Images

Marketing-page photography is sourced from Unsplash (standard, free
license — `images.unsplash.com`, not the paid Unsplash+ tier) as
placeholders. Swap in the client's real site photography when
available.
