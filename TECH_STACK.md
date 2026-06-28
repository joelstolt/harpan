# Tech Stack — Harpan

## Framework
- **Next.js 16** (App Router)

## Språk
- **TypeScript 5**

## UI
- **React 19**

## Styling
- **Tailwind CSS 4** (via PostCSS-plugin `@tailwindcss/postcss`)

## Linting
- **ESLint 9** med `eslint-config-next` (Core Web Vitals + TypeScript-regler)

## Projektstruktur
```
app/
├── layout.tsx              # Root-layout
├── page.tsx                # Startsida
├── globals.css             # Globala stilar
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ScrollReveal.tsx
├── kontakt/page.tsx
├── sok-plats/page.tsx
├── personal/page.tsx
├── vardegrund/page.tsx
└── verksamhet/page.tsx
```

## Path Aliases
- `@/*` → projektets rot

## Byggverktyg
- **SWC** (via Next.js inbyggd kompilator)
- **PostCSS** för Tailwind-hantering
