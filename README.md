# Jiahui Web — Personal Site

Personal portfolio at [jiahui9923.com](https://jiahui9923.com). Single-page React app for the `/jiahui` route, plus a minimal root landing.

---

## Quick start

```bash
npm install
npm run dev      # localhost:5173
npm run build    # → dist/
npm run preview  # preview the built site
```

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 18.3 + TypeScript 5.7 | Standard |
| Build | Vite 6 | Fast HMR, simple config |
| Styles | Tailwind CSS 4 (`@tailwindcss/vite`) | Utility-first + custom `@theme` tokens |
| Router | React Router DOM 7 | `BrowserRouter` + SPA fallback (`public/404.html`) |
| Smooth scroll | [Lenis](https://github.com/darkroomengineering/lenis) | Inertial scroll, hooked into anchor clicks |
| Physics text | matter-js | Powers `FallingText` |
| Animation | gsap, motion | Powers `Masonry` and `TiltedCard` |
| Icons | react-icons (si, fa6) | Brand logos for `LogoLoop` |
| WebGL helpers | ogl | Lightweight WebGL wrapper for `SideRays` shader |

---

## Project structure

```
src/
├── components/        ← drop-in JSX components (mostly React Bits, all `.jsx`)
│   ├── SideRays.jsx        ← WebGL light rays bg (only enabled on About section)
│   ├── ClickSpark.jsx      ← click-spark canvas overlay
│   ├── FallingText.jsx     ← matter.js physics-letters
│   ├── TiltedCard.jsx      ← motion.dev 3D tilt portrait card
│   ├── LogoLoop.jsx        ← infinite horizontal icon scroller
│   ├── Masonry.jsx         ← GSAP photo masonry grid
│   └── BorderGlow.jsx      ← interactive border glow card
├── pages/
│   ├── HomePage.tsx        ← root `/` (M.J. Archives landing)
│   └── JiahuiPage.tsx      ← `/jiahui` (the single-page portfolio)
├── index.css          ← Tailwind import + `@theme` tokens + Lenis CSS + glass utilities
└── main.tsx           ← app entry: Fontsource imports + Lenis init + Router
public/
├── CNAME              ← jiahui9923.com (for GitHub Pages)
├── 404.html           ← SPA fallback (redirects deep links → /)
├── img/, jiahui-img/  ← static photo assets
└── icon-jiahui.png    ← favicon
```

---

## Fonts (Fontsource, self-hosted — no Google CDN)

Imported in `src/main.tsx`, tokenized in `src/index.css`.

| Family | Package | Tailwind class | Used for |
|---|---|---|---|
| **Inter Variable** | `@fontsource-variable/inter` | `font-sans` | Body, nav, paragraph text |
| **Fraunces Variable** (incl. italic) | `@fontsource-variable/fraunces` + `/wght-italic.css` | `font-display` | Section titles ("Selected Work", "Frames"…) |
| **Caveat** | `@fontsource/caveat` | `font-hand` | Casual handwritten greeting ("Hi, I'm Jiahui.") |

The header brand mark `𝓜.𝓙. 𝓐𝓻𝓬𝓱𝓲𝓿𝓮𝓼` uses **literal Unicode Mathematical Bold Script chars** — no font dep, system renders.

### Add a new font

```bash
npm install @fontsource/<font-name>
# or for variable fonts:
npm install @fontsource-variable/<font-name>
```

Then:

```ts
// src/main.tsx
import '@fontsource/<font-name>'
```

```css
/* src/index.css */
@theme {
  --font-<role>: "<Font Name>", <fallbacks>;
}
```

Use as `font-<role>` Tailwind utility, or `style={{ fontFamily: 'var(--font-<role>)' }}`.

---

## Theme tokens (Tailwind v4)

Defined in `src/index.css` under `@theme { ... }`:

```css
@theme {
  --font-sans: "Inter Variable", system-ui, sans-serif;
  --font-display: "Fraunces Variable", "Georgia", serif;
  --font-hand: "Caveat", "Bradley Hand", cursive;
}
```

Custom utilities (also in `index.css`):

- `.glass` — soft `backdrop-blur(24px)` glass surface
- `.glass-strong` — stronger `backdrop-blur(36px)` for headline glass cards

Background base: `#0a0a0a` (defined on `body`).

---

## Component conventions

When integrating drop-in components (e.g., from [React Bits](https://reactbits.dev)):

1. Save the file as `src/components/<Name>.jsx` (not `.tsx`)
2. Add `// @ts-nocheck` at the top of the file
3. If the component is wrapped in `memo()` or exports loose JSX, **cast at the call site** in the `.tsx` page:

   ```tsx
   import MyCompRaw from '../components/MyComp'
   const MyComp = MyCompRaw as unknown as (props: any) => JSX.Element
   ```

4. If a prop has `= null` as default, change it to no default (or `= undefined`) — TS will otherwise infer the prop type as `null`, rejecting strings.
5. Component-specific CSS files are okay (`Name.jsx` + `Name.css`); import the CSS inside the `.jsx`.

---

## Which React Bits variant to install?

**Always pick "JavaScript + Tailwind"** when offered. Reasons:

| Variant | Verdict |
|---|---|
| ✅ **JavaScript + Tailwind** | First choice — matches our Tailwind v4 setup, fewer files |
| ⚠️ JavaScript + CSS | Acceptable fallback when Tailwind isn't offered (e.g., SideRays, TiltedCard, FallingText all needed `.css` files) |
| ❌ TypeScript variants | Avoid — fights our `// @ts-nocheck` pattern; gives us stricter prop types that complicate casting |

In practice, the React Bits "JavaScript + Tailwind" variants we've used so far: `BorderGlow`, `FallingText`, `LogoLoop`, `Masonry`. Smaller `.css`-only variants we've used: `SideRays`, `TiltedCard`, `ClickSpark`. Both styles drop in fine.

---

## Section layout (current `/jiahui` page)

```
[fixed pill nav: 𝓜.𝓙. 𝓐𝓻𝓬𝓱𝓲𝓿𝓮𝓼 │ About · Papers · Photos · Academic↗]

SECTION 01 · About              md:h-screen, SideRays bg + ClickSpark overlay
  ┌──────────────────────────┬──────────────────────┐
  │ "Hi, I'm Jiahui." Caveat  │   TiltedCard         │
  │ FallingText (click → fall) │   (jiahui.jpg)       │
  └──────────────────────────┴──────────────────────┘
  LogoLoop (mask-faded edges → SideRays shows through)

SECTION 02 · Papers             3 BorderGlow cards (amber / emerald / violet)

SECTION 03 · Photos             Masonry, 13 gallery photos
```

---

## Performance

- WebGL components (`SideRays`) use `IntersectionObserver` to skip render when scrolled out of view (saves GPU).
- Bundle size: ~575 KB JS (gzip ~191 KB) + ~225 KB woff2 fonts (cacheable per-asset). No `.glb` or three.js — removed when Aurora + Lanyard were dropped from the home page.

---

## Deployment

- GitHub Actions builds and publishes to GitHub Pages (`.github/workflows/deploy.yml`)
- Custom domain via `public/CNAME` → `jiahui9923.com`
- SPA deep-link support via `public/404.html`

---

## Adding photos to the Masonry gallery

1. Drop image into `public/img/gallery/` (or `public/jiahui-img/`)
2. Edit `PHOTO_ITEMS` in `src/pages/JiahuiPage.tsx`:

   ```ts
   { id: '14', img: '/img/gallery/14jiahui.jpg', url: '#', height: 720 },
   ```

`height` is the masonry layout size (display height ≈ height/2 from the component logic).

---

## Updating the social `LogoLoop` URLs

Edit `SOCIAL_LOGOS` array in `src/pages/JiahuiPage.tsx`. Real GitHub URL is already in place; LinkedIn / WeChat / Bilibili are `#` placeholders.
