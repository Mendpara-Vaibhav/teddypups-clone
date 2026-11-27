# TeddyPups U.A.E. — Animation, CSS & Visual Extraction Audit

> **Live Source**: https://puppy.instabizweb.com/ and https://puppy.instabizweb.com/puppies  
> **Comparison Target**: http://localhost:3000/ and http://localhost:3000/puppies  
> **Audited**: 2026-11-26 (Chrome DevTools CSS/DOM extraction, live chunk inspection, 0%–100% scroll sweep)

---

## 1. Animation Libraries & Runtime Engines

| Mechanism | Live Implementation | Notes |
|---|---|---|
| **Smooth Scrolling** | `lenis` (`html.lenis`, `data-lenis-prevent` on `<dialog>` modals) | Smooth wheel scrolling on desktop |
| **React Motion** | `framer-motion` (`motion`, `AnimatePresence mode="popLayout"`, `useScroll`, `MotionConfig`) | Hardware-accelerated `ScrollTimeline`/`ViewTimeline` where supported |
| **Articulated Mascot Rig** | `PupBuddy` (`PupController`) via `requestAnimationFrame` | Exponential damping (`1 - Math.exp(-dt / tau)`) + spring physics (`earV`, `bounceV`), random blinks (`2.2–6s`, 18% double-blink), yawn (`0.9s`), woof (`0.34s`), pointer gaze/petting, global `cuePup({ look, secs, say })` |
| **Scroll Reveal System** | `RevealScope` (`IntersectionObserver` `rootMargin: "0px 0px -6% 0px"`, `threshold: 0.08`) + `MutationObserver` | Arms off-screen `[data-reveal]` elements (`data-armed="true"`) and reveals on entry (`data-revealed="true"`) |
| **Header Scroll Behavior** | Passive `rAF` scroll handler | `data-scrolled="true"` (`scrollY > 8`), `data-hidden="true"` (scrolling down past `220px`, delta `> 6px`), `focusin` un-hides |
| **Hero Lineup Cycle** | `IntersectionObserver` (`threshold: 0.35`) + random timer (`1700–2800ms`) | Ducks a seat (`translate: 0 100%`), swaps photo, pops back up with `--ease-pounce`, and reveals `.tp-lineup__name` pill for `1800ms` |
| **Journey Chat Step Sync** | `IntersectionObserver` (`rootMargin: "-28% 0px -62% 0px"`) on `ol.tp-chat__steps > li` | Triggers typing dots (`.tp-typing[data-show="true"]` for `750ms`), reveals `.tp-msg-group[data-show="true"]`, and cues Teddy (`cuePup`) |
| **Korea → Dubai Flight** | `framer-motion` `useScroll({ target, offset: ["start 95%", "end 25%"] })` | Samples `SVGGeometryElement.getPointAtLength()` & `Math.atan2` tangent along `M40 250 C 170 40, 470 20, 620 168` |
| **No GSAP / AOS / Lottie** | Verified absent | Pure Framer Motion + Lenis + custom SVG/CSS physics |

---

## 2. Extracted CSS Custom Properties, `@keyframes`, Cursors & Component Rules

### `:root` & `@theme` Easing / Design Tokens
```css
:root {
  color-scheme: light;
  --gutter: clamp(1rem, 4vw, 3.5rem);
  --header-h: 4.75rem;
  --bar-h: 0px;
  accent-color: var(--color-toffee-deep);

  /* Easing & motion curves */
  --ease-pounce: cubic-bezier(.34, 1.56, .64, 1);
  --ease-silk: cubic-bezier(.22, 1, .36, 1);
  --ease-snap: cubic-bezier(.7, 0, .2, 1);

  /* Palette */
  --color-toffee: #c2622b;
  --color-toffee-deep: #a24a1a;
  --color-toffee-ink: #8e3f15;
  --color-honey: #f2be6b;
  --color-honey-soft: #fbe3b4;
  --color-cocoa: #2a170e;
  --color-cocoa-soft: #5a3a28;
  --color-milk: #fffdf8;
  --color-sky: #bfddf5;
  --color-sky-deep: #2f6e9e;
  --color-blush: #f9cdbf;
}
@media (max-width: 767px) {
  :root {
    --header-h: 4rem;
    --bar-h: calc(4rem + env(safe-area-inset-bottom));
  }
}
```

### Keyframes
```css
@keyframes tp-peek {
  0% { translate: 0 100%; }
}

@keyframes tp-twinkle {
  0%, 100% { opacity: 0.35; transform: scale(0.85) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.15) rotate(12deg); }
}

@keyframes tp-typing-dot {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.45; }
  40% { transform: translateY(-4px); opacity: 1; }
}
```

### Custom Paw Cursors (`/cursor/paw.svg` & `/cursor/paw-press.svg`)
```css
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  html, body { cursor: url(/cursor/paw.svg) 9 6, auto; }
  :is(a, button, summary, label[for], [role="button"], [role="tab"], select, input[type="checkbox"], input[type="radio"], input[type="submit"]) {
    cursor: url(/cursor/paw-press.svg) 9 6, pointer;
  }
  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),
  textarea {
    cursor: text;
  }
  :is(p, h1, h2, h3, h4, li, blockquote, figcaption, dd, dt) {
    cursor: inherit;
  }
}
```

### Interactive Buttons, Hero Lineup & Mascot Bubble Rules
```css
.btn {
  min-height: 3.25rem;
  transition: transform .35s var(--ease-pounce), background-color .25s ease, box-shadow .35s var(--ease-silk), color .25s ease;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  gap: .6rem;
  padding: .85rem 1.6rem;
  font-size: 1.0625rem;
  font-weight: 650;
  line-height: 1.1;
  text-decoration: none;
  display: inline-flex;
}
.btn:active { transform: scale(.96); }
.btn-primary:hover { box-shadow: 0 .7rem 0 -.15rem var(--color-cocoa); transform: translateY(-2px) rotate(-1deg); }
.btn-whatsapp:hover { box-shadow: 0 .7rem 0 -.15rem var(--color-cocoa); transform: translateY(-2px) rotate(1deg); }

.tp-lineup__seat {
  --h0: calc(var(--w) * var(--seat-k, 1) * 1.25);
  --h: calc(var(--h0) + var(--rise, 0px));
}
.tp-lineup__seat:first-child { --tag-x: -22%; }

.tp-lineup__pup {
  transition: translate .6s var(--ease-pounce);
  transition-delay: calc(var(--i) * 50ms);
  animation: tp-peek .75s var(--ease-pounce) backwards;
  animation-delay: calc(.62s + var(--i) * 90ms);
  border-radius: 999px 999px 0 0;
  display: block;
  position: relative;
}
.tp-lineup__pup[data-duck="true"] {
  translate: 0 100%;
}

.tp-lineup__photo {
  height: var(--h);
  border: 3px solid var(--color-cocoa);
  background: var(--color-honey-soft);
  box-shadow: inset 0 0 0 4px var(--color-milk);
  transition: translate .45s var(--ease-pounce);
  border-bottom: 0;
  border-radius: 999px 999px 0 0;
  display: block;
  position: relative;
  overflow: hidden;
}

.tp-lineup__name {
  translate: var(--tag-x, -50%) .4rem;
  border: 2px solid var(--color-cocoa);
  background: var(--color-milk);
  white-space: nowrap;
  opacity: 0;
  transition: opacity .2s, translate .35s var(--ease-pounce);
  border-radius: 999px;
  padding: .1rem .7rem;
  font-size: .95rem;
  position: absolute;
  bottom: calc(100% + .4rem);
  left: 50%;
}
.tp-lineup__seat[data-pop="true"] .tp-lineup__name,
.tp-lineup__seat:hover .tp-lineup__name {
  opacity: 1;
  translate: var(--tag-x, -50%) 0;
}

.pup-bubble {
  border: 2.5px solid var(--color-cocoa);
  background: var(--color-milk);
  color: var(--color-cocoa);
  font-family: var(--font-hand);
  white-space: nowrap;
  opacity: 0;
  transform-origin: 30% 100%;
  transition: scale .4s var(--ease-pounce), opacity .18s ease-out;
  border-radius: 1.1rem 1.1rem 1.1rem .25rem;
  padding: .3rem .85rem .35rem;
  font-size: 1.05rem;
  line-height: 1.2;
  position: absolute;
  bottom: 0;
  left: 0;
  translate: -50%;
  scale: .4;
  box-shadow: 2px 3px #2a170e2e;
}
.pup-bubble[data-show="true"] {
  opacity: 1;
  scale: 1;
}
```

### `/puppies` Sketchbook & Sticker Filter Rules
```css
.tp-sketchbook {
  background: radial-gradient(circle at 1px 1px, #2a170e17 1px, transparent 1.6px) 0 0 / 26px 26px,
    linear-gradient(180deg, #fff8ec, var(--color-milk) 60%);
}
.tp-sticker-chip {
  border: 2px solid var(--color-cocoa);
  border-radius: 999px;
  rotate: -2deg;
  padding: .45rem 1rem;
  font-size: .95rem;
  font-weight: 650;
  box-shadow: 1px 2px #2a170e40;
  transition: background-color .25s, color .25s, rotate .35s var(--ease-pounce), translate .35s var(--ease-pounce), box-shadow .25s;
}
.tp-sticker-chip:hover {
  rotate: 0deg;
  translate: 0 -2px;
}
.tp-sticker-chip[aria-pressed="true"] {
  background: var(--color-cocoa);
  color: var(--color-milk);
  rotate: 0deg;
}
.tp-sketch {
  text-align: center;
  border-radius: 1rem;
  outline: none;
  text-decoration: none;
  display: block;
  position: relative;
}
.tp-sketch[data-armed]:not([data-revealed]) :is(.tp-sketch__doodle, .tp-sketch__sticker) {
  opacity: 0;
  scale: 0;
}
.tp-sketch__sticker {
  z-index: 2;
  border: 2px solid var(--color-cocoa);
  background: var(--color-milk);
  color: var(--color-cocoa);
  transition: scale .45s var(--ease-pounce) calc(var(--d, 0s) + .64s), opacity .3s calc(var(--d, 0s) + .64s);
  border-radius: 999px;
  padding: .05rem .7rem .15rem;
  font-size: .9rem;
  position: absolute;
  top: 8%;
  right: -.2rem;
  rotate: 8deg;
  box-shadow: 2px 3px #2a170e33;
}
```

---

## 3. Scroll-Driven Progression (0% → 100%)

1. **0% (Hero Stage)**: Scalloped top header transparent (`data-scrolled="false"`), active `Home` nav link shows paw indicator beneath it. Six staggered arched `.tp-lineup__seat` cards rise with `@keyframes tp-peek` (`--ease-pounce`) flanking the articulated `PupBuddy` peeking over a diamond-stitched scalloped quilted blanket. Periodically a random puppy ducks (`translate: 0 100%`), swaps puppy, and pops up with `.tp-lineup__name` (`opacity: 1`) and `PupBuddy` reacts with `.pup-bubble`.
2. **15%–35% (Meet the Pups Boardwalk)**: Sticky horizontal boardwalk (`--floor-x` scrubs across scroll) on a wood-plank floor (`--floor-h`). Arched doors start closed (paneled wood + brass knob + paw crest + rotated `Available` tag) and swing open sequentially in 3D as the boardwalk scrolls into view; `PupBuddy` walks along the boardwalk floor.
3. **40%–55% (Two Ways)**: Center wooden signpost (`Puppies in Dubai` pointing left, `Imported for you` pointing right) with `PupBuddy` at its base. Left: striped awning + showroom photo + Burj Khalifa Dubai skyline. Right: `Flight` SVG curve (`M40 250 C 170 40, 470 20, 620 168`) with airplane + puppy porthole driven smoothly along the tangent via Framer Motion `useScroll`.
4. **55%–70% (Your Puppy Journey)**: Pinned WhatsApp phone mockup with paw-print wallpaper, typing indicator (`750ms` bouncing 3-dot pill), progressive message groups, and dashed `tp-route` SVG with pawprints & home heart. Active step triggers phone updates + `PupBuddy` speech bubbles (`"ooh, photos!"`, `"home soon!"`).
5. **70%–85% (Passport + Happy Families)**: Open 2-page Passport booklet with scalloped passport crest, tilted ink stamps, glowing sun & sunset Dubai skyline silhouette; wood clapboard Polaroid wall with varied masking tape styles (`.tp-tape--center/corners`) + `PupBuddy` sitting + dusk streetlamp, double wooden doors, and brick pavement.
6. **85%–100% (FAQ + Doorway + Footer)**: Night sky with twinkling 4-point gold stars; 4-point star FAQ bullets; illuminated clapboard Doorway facade with open arch door, `"welcome home"` doormat, wall sconce, potted plants, and `PupBuddy` running up; Footer with crescent moon + stars and `PupBuddy` resting inside a woven basket.
7. **`/puppies` (Sketchbook)**: Dotted sketchbook paper texture, curved orange title underline, `"self-portrait"` circular medallion with articulated `PupBuddy`, masking-taped filter sketchpad with tilted `-2deg` sticker chips, deterministic Catmull-Rom hand-drawn organic circular SVG masks + pastel washes + ink rings + animated doodles (`sparkle`, `heart`, `dashes`, `swirl`, `dots`, `paw`), Framer Motion `AnimatePresence mode="popLayout"` filtering, and honey-tinted `"Already gone home"` section.

---

## 4. Live vs. Local Missing Items Table

| Area | Live Website (`puppy.instabizweb.com`) | Local Build (`localhost:3000`) | Status / Action |
|---|---|---|---|
| **CSS Easing & Keyframes** | `--ease-pounce`, `--ease-silk`, `--ease-snap`, `tp-peek`, `tp-twinkle`, `.btn:active scale(.96)`, hover `-1deg`/`+1deg` tilt | Basic `ease`, missing `--ease-pounce`, missing `tp-peek`, missing tilt & active press | **IMPLEMENTING** |
| **Motion Libraries** | `lenis` smooth scroll + `framer-motion` (`useScroll`, `AnimatePresence`) | Not installed / not used | **INSTALL & IMPLEMENT** |
| **Articulated `PupBuddy` + `.pup-bubble`** | Multi-part SVG rig (`earL/R`, `eyes`, `blink`, `happy`, `tail`, `legs`, pointer gaze, spring physics, speech bubble) across sections + `cuePup` | Static simple bear SVG in Hero/Boardwalk/Doorway/Footer | **IMPLEMENTING** |
| **Hero Lineup & Quilted Blanket** | `tp-lineup__seat` / `__pup` / `__photo` / `__name`, staggered heights/tilts, duck/swap/pop cycle, scalloped diamond-stitched blanket | Static 6 arches, flat border bar bottom, breed label over mascot instead of popped pup | **IMPLEMENTING** |
| **Navbar Active Indicator & Inner Hem** | Active nav link paw icon under link; `.tp-header__hem` visible at top on inner pages (not only scrolled on Home) | Missing active paw SVG; hem only shows on scroll | **IMPLEMENTING** |
| **Meet the Pups Boardwalk** | Closed doors with brass knob + paw emblem opening sequentially in 3D on scroll + wood plank floor + walking `PupBuddy` | Doors open immediately on viewport enter; no knob/paw emblem/plank floor | **IMPLEMENTING** |
| **Two Ways (`tp-paths`)** | Center wooden signpost, showroom striped awning + Dubai skyline SVG, `useScroll` airplane w/ puppy porthole sliding along curved Korea→Dubai SVG path | Two separate tilted boards; static SVG arrow; no Dubai skyline silhouette | **IMPLEMENTING** |
| **Your Puppy Journey (`tp-chat`)** | Paw wallpaper chat background, `tp-typing` 3-dot indicator (`750ms`), progressive `tp-msg-group`, `tp-route` SVG w/ pawprints & heart home, `cuePup` bubbles | Single static bubble text swap, no typing indicator, no `tp-route` SVG | **IMPLEMENTING** |
| **Passport & Dusk Polaroid Wall** | Scalloped passport spine/crest, glowing sun + detailed Dubai skyline, wood-plank siding, dusk streetlamp + double door + brick pavement | Simple dashed border box, simple flat skyline bar, no streetlamp/double-door facade | **IMPLEMENTING** |
| **FAQ, Doorway & Footer** | Twinkling 4-point stars, star bullets, warm-lit doorway clapboard w/ sconce, plants & `"welcome home"` mat, Teddy in woven basket in Footer | Static small dots, simple circle basket SVG, minimal doorway box | **IMPLEMENTING** |
| **`/puppies` Sketchbook** | Dotted paper bg, curved orange underline, `"self-portrait"` `PupBuddy` medallion, tilted chips, FNV-1a Catmull-Rom hand-drawn masks + pastel washes + ink rings + 6 doodles + `AnimatePresence` | Plain gradient bg, simple border-radius blobs, no doodles/ink rings/`AnimatePresence` | **IMPLEMENTING** |
