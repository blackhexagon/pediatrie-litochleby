# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static website for a Czech pediatric clinic** (Pediatrie Litochleby) located in Prague-Chodov. Built with **Astro 4.0**, **TypeScript**, and **Tailwind CSS**, the site provides information about clinic services, team, opening hours, vaccination schedules, and patient registration.

**Production URL:** https://pediatrielitochleby.cz

## Development Commands

```bash
# Start development server (localhost:4321)
npm run dev

# Build for production (includes type checking)
npm run build

# Quick build without type checking
npm run build:temp

# Preview production build locally
npm run preview

# Generate new component using Plop
npm run gen
```

## Architecture and Key Patterns

### Centralized Configuration (`config.ts`)

**All content and business logic lives in `config.ts`** - this is the single source of truth for:
- Clinic contact information (phone, email, WhatsApp, Instagram)
- Reservation links (Reservio integration for eye screening)
- Opening hours (patient hours + control/preventive hours)
- News/announcements (holiday schedules, vaccination updates, new services)
- Navigation structure and page descriptions
- Team information

When adding or modifying content, **always update `config.ts` first**. Pages import from this config rather than hardcoding data.

### File-Based Routing

Pages in `src/pages/` automatically become routes:
- `index.astro` → `/`
- `kontakt.astro` → `/kontakt`
- `nas-tym.astro` → `/nas-tym`

Each page imports content from `config.ts` and uses shared components.

### Layout System

**Single layout:** `src/layouts/Layout.astro` wraps all pages and provides:
- Persistent header with navigation (generated from `config.links`)
- Footer with contact details
- WhatsApp floating button
- Scroll-based header shadow effect
- SEO meta tags

### Component Architecture

Components are small, focused, and reusable:

**Heading.astro** - Responsive headings with size variants:
```astro
<Heading size="XL">Main Title</Heading>
```

**Button.astro** - Primary/secondary CTA buttons:
```astro
<Button href="/kontakt" variant="primary">Kontaktujte nás</Button>
```

**Intro.astro** - Page introduction sections that pull content from `config.ts`:
```astro
<Intro configKey="services" />
```

**Feature.astro** - Service/feature showcase blocks

**Label.astro** - Small badge/label component

### Image Handling

- **Optimized images:** Place in `src/images/` and import them - Astro will optimize automatically
- **Static images:** Place in `public/images/` for images that don't need optimization (logos, icons)
- Always use Astro's `<Image>` component for better performance

### TypeScript Types

Type definitions live in `src/types.ts`. Currently minimal (just a `Size` enum) but extend here when adding typed props.

## Styling with Tailwind

**Custom Tailwind configuration** (`tailwind.config.mjs`):
- **Font:** Josefin Sans (loaded from `public/fonts/`)
- **Container:** Centered with 1rem padding
- **Custom variants:** `first-child:`, `last-child:`, `penultimate-child:`, `child:`, `child-hover:` for advanced styling

The project uses utility-first Tailwind classes. Avoid adding custom CSS unless absolutely necessary.

## Code Generation

Use Plop to scaffold new components:

```bash
npm run gen
```

Prompts for component name, HTML tag, and props. Generates component file based on `plop-templates/component.hbs`.

## Deployment

**Automated CI/CD via GitHub Actions** (`.github/workflows/astro.yml`):
- Triggered on push to `master` or manual dispatch
- Builds with Node 20.x
- Deploys to GitHub Pages automatically

**Manual deployment:** Just push to `master` branch - GitHub Actions handles the rest.

## Working with Content

### Adding News/Announcements

Edit `config.ts` → `news` array. Each entry supports HTML:

```typescript
{
  text: `Nová služba od 1. ledna. Více informací <a href="/sluzby" class="underline">zde</a>.`
}
```

### Updating Opening Hours

Edit `config.ts` → `openingHours` or `controlHours`:

```typescript
openingHours: [
  ["Pondělí", "7:30 - 11:00"],
  ["Úterý", "11:00 - 15:00 (MUDr. Machynková)"],
]
```

### Adding/Removing Pages

1. Create new `.astro` file in `src/pages/`
2. Add entry to `config.ts` → `links` object
3. Navigation updates automatically

### Modifying Team Information

Team data is stored in `config.ts`. Update there and the team page (`nas-tym.astro`) will reflect changes.

## Important Notes

- **Language:** All content is in Czech
- **No tests:** This project doesn't have a test suite
- **No linting:** Relies on TypeScript checking and Prettier formatting
- **GitHub Pages deployment:** Site configured for `pediatrielitochleby.cz` domain
- **Third-party integrations:** Reservio (booking), Medevio (doctor profile), WhatsApp chat

## Common Modifications

### Adding a new service
1. Update `config.links.services` description in `config.ts`
2. Modify `src/pages/sluzby.astro` to add service details

### Updating contact information
1. Edit `config.ts` → phone, gsm, email, whatsapp, instagram
2. Changes propagate automatically to all pages

### Changing colors/branding
1. Edit `tailwind.config.mjs` for theme changes
2. Most colors use Tailwind's default palette

### Adding insurance provider
1. Add logo to `public/images/insurances/`
2. Update `src/pages/pojistovny.astro` to display new logo
