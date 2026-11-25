# TeddyPups U.A.E. — Design Audit

> **Source**: https://puppy.instabizweb.com/  
> **Audited & Cross-Checked**: 2026-11-25 (Desktop 1440×900 + Mobile 390×844, all 7 routes)

---

## 1. Complete Route & Page Map

All routes discovered across the top navbar, hero CTAs, puppy cards, and footer:

| Route Path | Page Title (`document.title`) | Next.js App Router File | Purpose |
|---|---|---|---|
| `/` | `TeddyPups U.A.E. — Premium teacup puppies in Dubai` | `src/app/page.tsx` | 10-section dawn-to-night story homepage |
| `/puppies` | `Available puppies \| TeddyPups U.A.E.` | `src/app/puppies/page.tsx` | Filterable catalog of 15 available puppies + 5 "Already gone home" preview |
| `/puppies/[slug]` | `<Name> \| TeddyPups U.A.E.` | `src/app/puppies/[slug]/page.tsx` | Individual puppy detail page (media viewer, summary, checklist, enquiry form, prev/next) |
| `/gone-home` | `Gone home \| TeddyPups U.A.E.` | `src/app/gone-home/page.tsx` | Archive of 27 adopted puppies styled as "one ticket home" boarding passes |
| `/happy-families` | `Happy families \| TeddyPups U.A.E.` | `src/app/happy-families/page.tsx` | Testimonial + 64-photo Polaroid wall with full-screen lightbox viewer |
| `/how-it-works` | `How it works \| TeddyPups U.A.E.` | `src/app/how-it-works/page.tsx` | 2-tab adoption journey (`#two-ways`), promise (`#promise`), delivery (`#delivery`), why us (`#why`) |
| `/faq` | `Questions & answers \| TeddyPups U.A.E.` | `src/app/faq/page.tsx` | Sticky live-search sidebar + 9-item single-open corkboard accordion |
| `/contact` | `Visit & contact \| TeddyPups U.A.E.` | `src/app/contact/page.tsx` | Contact details, fill-in-the-blank postcard form, Downtown Dubai showroom |

> **Note on Legal / Policy Routes**: No privacy policy, terms of service, or cookie policy links exist anywhere on the site (bottom bar contains only `© 2026 TeddyPups U.A.E.` and `every puppy is family`).

### Navigation & Footer Link Inventory

- **Top Navbar (`<nav aria-label="Main">`)**: `Home` (`/`), `Puppies` (`/puppies`), `Happy families` (`/happy-families`), `How it works` (`/how-it-works`), `FAQ` (`/faq`), `Visit & contact` (`/contact`), plus header CTA `WhatsApp us`.
- **Footer Explore (`<h2>Explore</h2>`, 7 links)**:
  1. `Available puppies` → `/puppies`
  2. `Gone home` → `/gone-home`
  3. `Happy families` → `/happy-families`
  4. `How it works` → `/how-it-works`
  5. `Delivery & collection` → `/how-it-works#delivery`
  6. `FAQ` → `/faq`
  7. `Visit & contact` → `/contact`
- **Footer Say Hello (`<h2>Say hello</h2>`)**:
  - `WhatsApp +971 50 000 0000` → WhatsApp URL
  - `info@instabizweb.com` → `mailto:info@instabizweb.com`
  - `Downtown Dubai, United Arab Emirates` (plain text)
  - Social pills (`<ul aria-label="Social media">`): `Instagram`, `TikTok`, `Facebook` (all currently link to `https://www.instabizweb.com/`).

### Pre-filled WhatsApp Inquiry URL
Every WhatsApp button/link across all routes (Header, Hero, Puppy Journey mockup, Home CTA, Footer, Mobile Sticky Bar, `/puppies` empty state, `/puppies/[slug]`, `/how-it-works`, `/faq`, `/contact`) uses:
```
https://wa.me/919898124987?text=Hi%20Insta%20Biz%20Web%2C%20I%27d%20like%20to%20discuss%20a%20project.
```

---

## 2. Exact Copy & Micro-Text (Verbatim)

### Home (`/`)

1. **Hero**:
   - Eyebrow (`.tp-hero__note`): `every puppy is family`
   - `<h1>`: `Premium teacup puppies in Dubai`
   - Lede: `Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.`
   - Primary CTA: `View available puppies` (`/puppies`)
   - Secondary CTA: `Enquire on WhatsApp`
   - Floating breed pill (rotates/varies): `Korean Teacup Pomeranian` (desktop) / `Maltipoo` (mobile)
2. **Meet the pups**:
   - `<h2>`: `Meet the pups`
   - Subtitle: `Real puppies, real photos, looking for their families right now.`
   - Top-right CTA: `See all available puppies` (`/puppies`)
   - Bottom track CTA: `Meet them all` (`/puppies`)
3. **Two ways to meet your puppy**:
   - `<h2>`: `Two ways to meet your puppy`
   - Left (`<h3>`): `Puppies in Dubai` | Subtitle: `In our showroom` | Copy: `See them, love them, take them home. Come meet our locally available puppies before you decide.` | CTA: `Meet local puppies` (`/puppies?origin=local`)
   - Right (`<h3>`): `Imported for you` | Map labels: `Korea` → `Dubai` | Mascot speech: `coming?` | Copy: `Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.` | CTA: `See imported puppies` (`/puppies?origin=imported`)
4. **Your puppy journey**:
   - `<h2>`: `Your puppy journey`
   - Intro: `A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.`
   - Step 1 (`<h3>`): `Choose your breed` — `Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.`
   - Step 2 (`<h3>`): `Get photos & details` — `Our team will share real photos, health details, and all necessary information directly on WhatsApp.`
   - Step 3 (`<h3>`): `Secure & safe delivery` — `Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.`
   - CTA: `How it works` (`/how-it-works`)
   - Phone Mockup: Header `TeddyPups U.A.E.` / `online`; Chat bubble: `Hi TeddyPups! I'd love to know more about your puppies.` (updates on scroll to Step 2 text); Input bar CTA: `Say hello on WhatsApp`
5. **Why families trust TeddyPups**:
   - Eyebrow: `puppy passport` | `<h2>`: `Why families trust TeddyPups`
   - Stamp 1: `Vet-checked & healthy` — `Every puppy comes vaccinated, dewormed, and with a verified health certificate.`
   - Stamp 2: `Korea to Dubai, safely` — `Trusted breeders, safe travel, and premium care from start to finish.`
   - Stamp 3: `Support 24/7` — `Always here to help, from choosing your puppy to post-delivery support.`
   - Stamp 4: `Trusted by families worldwide` — `Puppies delivered to loving homes all around the world.`
6. **Happy families & puppies**:
   - `<h2>`: `Happy families & puppies`
   - Intro: `We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.`
   - Quote: `“TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.”` — `Sarah M., Dubai, UAE`
   - CTA: `See every happy family` (`/happy-families`)
7. **Questions, answered**:
   - `<h2>`: `Questions, answered` | CTA: `Read all questions` (`/faq`)
   - Displays first 3 FAQ Q&As (see `/faq` items 1–3 below).
8. **Ready to meet your new best friend?**:
   - `<h2>`: `Ready to meet your new best friend?`
   - Copy: `Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.`
   - CTAs: `Enquire on WhatsApp`, `Visit & contact` (`/contact`)
9. **Footer**:
   - Left heading: `Home, at last.`
   - Left copy: `TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.`
   - Bottom: `© 2026 TeddyPups U.A.E.` | `every puppy is family`

### `/puppies` & `/puppies/[slug]`

- **Hero**: Eyebrow `from Teddy's sketchbook`, `<h1>Available puppies</h1>`, mascot badge `self-portrait`
- **Filter Board**:
  - `where`: `Everywhere` (default pressed), `Imported`, `Korean Teacup`
  - `breed`: `Maltipoo`, `Pomeranian`, `Poodle`, `Cavapoo`, `Shih Tzu`
  - `boy or girl`: `Boys`, `Girls`
- **Live Count**: `15 puppies looking for a home` (`aria-live="polite"`)
- **Empty State** (e.g. `?origin=local`): `No puppies match just now. Tell us what you're hoping for and we'll let you know what's in our showroom or what we can bring in for you.` + `Ask on WhatsApp` + `Show all puppies`
- **Bottom Section**: `<h2>Already gone home</h2>` + link `See the puppies who've gone home` (`/gone-home`)
- **Detail Page (`/puppies/[slug]`)**:
  - Breadcrumb: `Available puppies / <Name>`
  - Media Viewer: `Open full screen`, `Previous`, `Next`, `1 / 2` counter
  - Summary Card: Status pill (`Available`), `<h1>` Name, `Breed`, `Boy or girl`, `Age`, `Where` (`Imported for you`), `Ask about <Name> on WhatsApp`, `Send an enquiry`
  - Sections: `Every Teddy Pup comes` (4-item checklist), `Coming home from abroad` (4 steps), `Ask about <Name>` form (`Your name *`, `Phone or WhatsApp *`, `Email`, `Your area`, `Message`, `Send enquiry`), `Previous pup` / `Next pup`

### `/gone-home`

- `<h1>`: `Gone home` (with outline heart SVG)
- Copy: `Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match.`
- CTA: `See available puppies` (`/puppies`)
- Mascot sign: `tickets home`
- Ticket card micro-text: `one ticket home`, `TEDDYPUPS` / `DUBAI SHOWROOM` → `HOME ♥`, vertical stub `admit one`

### `/happy-families`

- Eyebrow: `our wall of happy endings` | `<h1>Happy families</h1>`
- Copy: `Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.`
- Counter: `64 moments and counting`
- Testimonial: Sarah M. quote (same as Home)
- Bottom note: `every one of them was a Teddy Pup once`

### `/how-it-works`

- `<h1>How it works</h1>`: `Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.`
- Anchor pills: `1 Two ways home` (`#two-ways`), `2 Our premium puppy promise` (`#promise`), `3 Delivery & collection` (`#delivery`), `4 Why choose us` (`#why`)
- **Tab 1 (`In Dubai — meet in person`)**: `<h3>Meet your puppy in person</h3>` — `Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.`
  - `Step 1`: `Explore our puppies` — `Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.`
  - `Step 2`: `Choose your puppy` — `Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions.`
  - `Step 3`: `Meet before you choose` — `Spend time bonding before making your decision.`
  - `Step 4`: `Pick-up or delivery` — `Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably.`
- **Tab 2 (`Imported — order upon request`)**: `<h3>Order upon request</h3>` — `Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond.` / `From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world's finest puppies to Dubai, just for you.`
  - `Step 1`: `Reserve your puppy` — `Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences.`
  - `Step 2`: `Personalized consultation` — `Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey.`
  - `Step 3`: `Import and arrival` — `We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family.`
  - `Step 4`: `Welcome home` — `Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home.`
- **Promise (`#promise`)**: `Hand-selected breeders` (`We work only with breeders who uphold the highest ethical and health standards.`), `Full transparency` (`Photos, videos, and health certificates are shared before your puppy travels.`), `Safe, stress-free delivery` (`We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you.`)
- **Delivery (`#delivery`)**: `Take your puppy home the same day`, `Delivery within Dubai`, `Safe international cargo`, `Worldwide delivery`
- **Why choose us (`#why`)**: `International cargo`, `Support 24/7`, `Health guarantee`
- **Bottom CTA**: `<h2>Unique and high quality puppies</h2>` + `Ask us on WhatsApp` + `See available puppies`

### `/faq` (All 9 Q&As)

- Header: `<h1>Questions & answers</h1>` — `Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.`
- Sidebar (`<aside aria-label="Find a question">`): `sniff out a question`, search placeholder `delivery, Korea, vaccinated...`, live count `9 notes on the board`, button `Ask your own question`
1. **Q**: `Are your puppies vaccinated and health-checked?`
   **A**: `Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.`
2. **Q**: `Can I meet a puppy before I decide?`
   **A**: `Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.`
3. **Q**: `Can I take my puppy home the same day?`
   **A**: `Local puppies are available immediately, so you can take your puppy home the same day.`
4. **Q**: `Do you import puppies from abroad?`
   **A**: `Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.`
5. **Q**: `How does an imported puppy travel to Dubai?`
   **A**: `We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.`
6. **Q**: `Will I see photos and health details first?`
   **A**: `Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.`
7. **Q**: `Do you deliver?`
   **A**: `Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.`
8. **Q**: `Which breeds do you usually have?`
   **A**: `Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.`
9. **Q**: `Is there help after my puppy comes home?`
   **A**: `Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.`

### `/contact`

- `<h1>Get in touch with us</h1>` — `Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we'd love to hear from you!`
- Left contacts: `WhatsApp +971 50 000 0000`, `call us` (`+971 50 000 0000`), `email` (`info@instabizweb.com`)
- Postcard form (`form.tp-letterform`):
  - `Dear TeddyPups, my name is [input], and you can reach me on [input] or by email at [input]. I live in [input], and I'm curious about [select]. [textarea] with love, a future puppy parent`
  - Fields: `Your name` (required), `Phone or WhatsApp number with country code` (required, placeholder `+971 50 123 4567`), `Email` (optional, placeholder `optional`), `Your area` (optional, placeholder `e.g. Dubai Marina`), `Puppy you're interested in` (select: `any puppy (not sure yet)` + all 15 puppies), `Your message` (textarea), Submit: `Post my letter`
- Showroom: `<h2>Visit us in Downtown Dubai</h2>` — `Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.` — `Downtown Dubai, United Arab Emirates` — `Open in Google Maps`

---

## 3. Full CSS & Design System Tokens

### Brand Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-milk` | `#fffdf8` | Page background, light text on dark |
| `--color-cocoa` | `#2a170e` | Primary ink, borders, hard shadows |
| `--color-cocoa-soft` | `#5a3a28` | Secondary body/meta text |
| `--color-toffee` | `#c2622b` | Mid-range accent |
| `--color-toffee-deep` | `#a24a1a` | Primary CTA fill, active nav link |
| `--color-toffee-ink` | `#8e3f15` | Eyebrow script notes, ink links |
| `--color-honey` | `#f2be6b` | Selection highlight, mobile menu overlay, golden accents |
| `--color-honey-soft` | `#fbe3b4` | Chips, warm sky gradient |
| `--color-sky` | `#bfddf5` | Sky tone, card halo |
| `--color-sky-deep` | `#2f6e9e` | Deep sky accent |
| `--color-blush` | `#f9cdbf` | Blush accent |
| `--night` | `#24130b` | Footer background |
| WhatsApp Green | `#1f7a4d` | `.btn-whatsapp` fill (`#ffffff` text) |

### Dawn-to-Night Section Gradients (Home `/`)

- **Hero**: `linear-gradient(to bottom, #fffdf8, #fff1d8)`
- **Meet the pups**: `linear-gradient(to bottom, #fff1d8, #fbe3b4)`
- **Two ways**: `linear-gradient(to bottom, #fbe3b4, #f7d18d)`
- **Your puppy journey**: `linear-gradient(to bottom, #f7d18d, #f0b866)`
- **Why families trust**: `linear-gradient(to bottom, #f0b866, #a65a30)`
- **Happy families**: `linear-gradient(to bottom, #a65a30, #4d2b19)` (`data-tone="dark"`)
- **Questions, answered**: `linear-gradient(to bottom, #4d2b19, #2f1a10)` (`data-tone="dark"`)
- **Home CTA / Doorway**: `linear-gradient(to bottom, #2f1a10, #24130b)` (`data-tone="dark"`)
- **Footer**: `#24130b`

### Typography (Self-Hosted Google Fonts via `next/font/google`)

- **Display**: `Fraunces` (weights 100–900, `.font-plush` `font-variation-settings: "SOFT" 100, "WONK" 1, "opsz" 144`, `.font-plush-text` `"SOFT" 100, "WONK" 0, "opsz" 36`)
- **Body / UI**: `Figtree` (weights 300–900)
- **Handwritten**: `Shantell Sans` (weights 300–800, `.font-scrawl` `font-variation-settings: "INFM" 60, "BNCE" 30`)

| Element | Family | Desktop (1440px) | Mobile (390px) | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| `body` | Figtree | `17px` | `17px` | 400 | `27.2px` (`1.6`) | normal |
| Hero eyebrow | Shantell Sans | `24px` | `20px` | 500 | `1.6` | normal |
| `h1#hero-title` | Fraunces | `80.52px` | `41.6px` (`2.6rem`) | 800 | `0.92` | `-0.025em` |
| `h2.text-huge` | Fraunces | `91.30px` | `41.6px` (`2.6rem`) | 800 | `0.92` | `-0.025em` |
| `.tp-sign` | Fraunces | `34.24px` | `24px` | 800 | `1.0` | `-0.025em` |
| `.tp-door__name` | Fraunces | `28.53px` | `23.2px` (`1.45rem`) | 800 | `1.0` | `-0.025em` |
| `.tp-qa__q` | Fraunces | `28.53px` | `22.4px` | 800 | `1.12` | `-0.025em` |
| `.tp-nav-link` | Figtree | `16px` | — | 620 | `1.6` | normal |
| `.btn` | Figtree | `17px` | `17px` | 650 | `1.1` | normal |

### Layout, Shadows, Borders & Z-Index

- **Gutter**: `clamp(1rem, 4vw, 3.5rem)` (`56px` at 1440px; `~1314px` content width)
- **Header Height**: `76px` (`4.75rem`) desktop / `64px` (`4rem`) mobile
- **Grid Breakpoints**:
  - `/puppies`: 4 columns desktop → 2 columns tablet/mobile
  - `/gone-home`: 3 columns desktop → 1–2 columns mobile
  - `/happy-families`: 4 columns desktop → 2 columns mobile
  - Home "Meet the pups": horizontal scroll-pinned boardwalk desktop → 2-column grid mobile
- **Border Radii**: `999px` (`.btn`, `.chip`, `.tp-door__tag`), `1rem`/`16px` (`.tp-door__link` + arch mask), `1.6rem`/`25.6px` (`.tp-board`, `.tp-letterform`)
- **Box Shadows & Hover States**:
  - `.btn-primary` / `.btn-whatsapp`: `0 .5rem 0 -.15rem #2a170e` (hover `.btn-primary`: `0 .7rem 0 -.15rem #2a170e`, slight lift)
  - `.btn-ghost`: `border: 2px solid #2a170e` (hover: `background: #2a170e; color: #fffdf8`)
  - `.tp-sign`: `0 7px 0 -3px #2a170e40`, `border: 3px solid #2a170e`
  - `.tp-letterform`: `8px 10px #2a170e29`, `border: 3px solid #2a170e`
  - `.tp-sticker-chip`: default `2px 3px #2a170e24`; pressed (`aria-pressed="true"`): `bg #2a170e`, `color #fffdf8`, `1px 2px #2a170e40`
  - `.tp-door__tag`: `2px 3px #2a170e33`, `border: 2px solid #2a170e`
- **Z-Index Layering**:
  - `header#site-header`: `position: fixed; top: 0; inset-x: 0; z-index: 50`
  - `dialog.tp-menu` (Mobile Menu) & Lightbox `<dialog>`: Native `<dialog>.showModal()` Top Layer (`#f2be6b` / `#2a170ef2` with `rgba(42,23,14,0.4)` / `0.7` backdrop)
  - Mobile Sticky Bottom Bar: `position: fixed; bottom: 0; inset-x: 0; z-index: 40; height: calc(4rem + env(safe-area-inset-bottom))`
- **Custom Cursors**: `url(/images/paw.svg) 9 6, auto` and `url(/images/paw-press.svg) 9 6, pointer` on interactive elements.

---

## 4. Component Inventory (`src/components/`)

| Component | File Path | Role & Interactive Behavior |
|---|---|---|
| `Navbar` | `src/components/Navbar.tsx` | Fixed 76px/64px header, brand badge + logo, 6 desktop links with `#a24a1a` active state, green WhatsApp CTA, mobile `"Menu"` pill trigger |
| `MobileMenuDialog` | `src/components/MobileMenuDialog.tsx` | Full-screen `#f2be6b` `<dialog>` modal (`showModal()`), stacked Fraunces nav links, WhatsApp CTA, phone number |
| `MobileStickyBar` | `src/components/MobileStickyBar.tsx` | Mobile-only (`<768px`) fixed bottom bar with full-width green `"WhatsApp us"` + outlined `"Call"` pill |
| `HeroSection` | `src/components/HeroSection.tsx` | Dawn sky gradient, eyebrow w/ underline SVG, `h1`, lede, 2 CTAs, 6-photo arched puppy peek strip, Teddy mascot, floating breed pill |
| `MeetThePupsBoardwalk` | `src/components/MeetThePupsBoardwalk.tsx` | Scroll-pinned horizontal boardwalk (desktop) / 2-col grid (mobile) of 15 `PuppyDoorCard`s with animated Teddy walker |
| `PuppyDoorCard` | `src/components/PuppyDoorCard.tsx` | Arched door frame card (`--door` color), status badge, puppy photo, Fraunces name, meta line, links to `/puppies/[slug]` |
| `TwoWaysSection` | `src/components/TwoWaysSection.tsx` | Wooden signpost split into Dubai showroom vs Korea-to-Dubai airplane route with Teddy mascot |
| `PuppyJourneySection` | `src/components/PuppyJourneySection.tsx` | 3 scroll-highlighted steps + tilted WhatsApp phone mockup with dynamic chat bubble + Teddy mascot |
| `PassportTrustSection` | `src/components/PassportTrustSection.tsx` | Open 2-page tilted passport booklet with 2×2 illustrated stamps + sunset Dubai skyline |
| `PolaroidWall` | `src/components/PolaroidWall.tsx` | Wood-plank wall of taped Polaroid photo buttons + Sarah M. ruled-paper quote card |
| `PhotoLightbox` | `src/components/PhotoLightbox.tsx` | Native `<dialog>` full-screen photo viewer with Previous / Next / Close controls and `1 / 64` counter |
| `FaqAccordion` | `src/components/FaqAccordion.tsx` | Corkboard note cards with pushpins; single-open expand/collapse; optional live search filter on `/faq` |
| `DoorwayCtaSection` | `src/components/DoorwayCtaSection.tsx` | Night sky glowing doorway illustration + 2 CTA pills |
| `Footer` | `src/components/Footer.tsx` | `#24130b` night sky w/ moon & stars, 3-col grid (brand + Teddy-in-basket, 7 Explore links, contact + 3 social pills), copyright bar |
| `PuppyCatalogFilter` | `src/components/PuppyCatalogFilter.tsx` | `.tp-board` with `where`, `breed`, `boy or girl` sticker chips, live count (`aria-live="polite"`), 4-col organic frame grid, empty state |
| `PuppyMediaViewer` | `src/components/PuppyMediaViewer.tsx` | `/puppies/[slug]` photo/video carousel with fullscreen toggle, prev/next, and `1 / 2` counter |
| `PuppyEnquiryForm` | `src/components/PuppyEnquiryForm.tsx` | Inline enquiry form on `/puppies/[slug]` (Name, Phone/WhatsApp, Email, Area, Message) |
| `HowItWorksTabs` | `src/components/HowItWorksTabs.tsx` | Interactive 2-tab switcher (`In Dubai` vs `Imported`) updating illustrated card and 4 numbered steps |
| `ContactPostcardForm` | `src/components/ContactPostcardForm.tsx` | Fill-in-the-blank `.tp-letterform` postcard with 15-puppy dropdown and validation |
| `GoneHomeTicket` | `src/components/GoneHomeTicket.tsx` | Boarding-pass ticket card with circular photo, `one ticket home`, `admit one` perforated stub |

---

## 5. Media & Assets Completeness

### Local Downloaded Assets (`public/images/`)
- **Brand & UI**: `public/images/logo.png`, `public/images/icon.png` (512×512 favicon), `public/images/apple-icon.png` (180×180), `public/images/paw.svg`, `public/images/paw-press.svg`, `public/images/showroom.jpg`
- **Available Puppies (15)** in `public/images/puppies/`:
  `max-maltipoo.webp`, `korean-teacup-maltipoo.jpg`, `korean-teacup-poodle.jpg`, `maltipoo-cavapoo.jpg`, `toy-poodle.jpg`, `maltipoo-girl.jpg`, `pomeranian-girl.jpg`, `copper-cavapoo.jpg`, `shitzu-girl.jpeg`, `shitzu-boy.jpg`, `maltipoo-girl-3m.jpg`, `maltipoo-girl-2m.jpg`, `pomeranian-teacup-1.jpg`, `pomeranian-teacup-2.jpg`, `pomeranian-teacup-3.jpg`
- **Gone Home Preview (5)** in `public/images/puppies/`:
  `ace-gone.avif`, `leo-gone.avif`, `mia-gone.avif`, `sadie-gone.avif`, `pomeranian-gone.avif`
- **Video URL (Max detail page)**: `https://puppy.instabizweb.com/media/jNYYlZcF2IuE/61af7a5e09/b942a5_a1fa75c7bf2f4d688ec0ce0344baef67.mp4`
- **Happy Families Polaroids**: 64 photos served via `/media/<id>/<hash>/<filename>` (first 10 + 8 captioned URLs documented; can use local/remote URLs cleanly).

---

## 6. Data Layer Mapping (`src/data/`)

| File | Contents |
|---|---|
| `src/data/puppies.ts` | `AVAILABLE_PUPPIES` (all 15 puppies with exact `slug`, `name`, `breed`, `gender`, `age`, `origin`, `collections`, `hasVideo`, `videoUrl`, `image`, `doorColor`) + `GONE_HOME_PUPPIES` (27 boarding-pass entries) |
| `src/data/faqs.ts` | `FAQS` (all 9 verbatim Q&As; first 3 rendered on Home, all 9 on `/faq`) |
| `src/data/families.ts` | `TESTIMONIALS` (Sarah M., Dubai, UAE) + `FAMILY_PHOTOS` (64 Polaroid entries with `id`, `image`, `alt`, optional `caption`) |
| `src/data/howItWorks.ts` | `DUBAI_STEPS`, `IMPORTED_STEPS`, `PROMISE_ITEMS`, `DELIVERY_CARDS`, `WHY_CHOOSE_ITEMS` |
| `src/data/navigation.ts` | `NAV_LINKS` (6), `FOOTER_EXPLORE_LINKS` (7), `SOCIAL_LINKS` (3), `CONTACT_INFO` (WhatsApp URL, phone, email, address) |
