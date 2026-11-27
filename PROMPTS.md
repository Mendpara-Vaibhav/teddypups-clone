## Prompt: 1

/browser Visit https://puppy.instabizweb.com/ on both desktop (1440px) and mobile (390px) viewports.

Perform a complete visual and technical audit:

1. Scroll slowly from top to bottom on the home page so all lazy-loaded images, sections, and animations render.
2. Inspect the DOM and computed styles to extract:
   - Exact color palette (hex values for backgrounds, primary/accent colors, text, and borders)
   - Font families, sizes, weights, and line heights
   - Container max-widths, section spacing, and border radii
3. Document every section on the home page in exact visual order (Navbar, Hero showcase/tabs, Puppy catalog grid, How It Works, Testimonials, FAQ accordion, Footer, and floating WhatsApp/Call buttons).
4. Navigate to every route linked in the navbar and footer and document their layouts, interactive controls (filters, modals, WhatsApp inquiry widget), and media asset URLs.
5. Note the exact Google Fonts or custom font names loaded in <head>, and extract the image/video URLs (or download sample media assets into public/images/) so our local clone renders every puppy card cleanly.

Write all findings into a file named DESIGN_AUDIT.md in the project root. Stop once DESIGN_AUDIT.md is complete.

## Prompt: 2

/browser Cross-check our newly generated DESIGN_AUDIT.md against the live website https://puppy.instabizweb.com/ (on both 1440px desktop and 390px mobile viewports) to verify that NOTHING was missed.

Audit every category below against the live DOM and update DESIGN_AUDIT.md directly with any missing details:

1. Complete Route & Page Map:
   - Click and verify EVERY link in the navbar, hero CTAs, puppy cards, and footer (including /, /puppies, /happy-families, /faq, /contact, any puppy detail/profile pages, "gone home" or "how it works" / "delivery" pages, and any legal/policy links).
   - Confirm every route is listed with its exact URL path, page title, and corresponding Next.js App Router file path (e.g., src/app/puppies/page.tsx).

2. Exact Copy & Micro-Text:
   - Verify all headings, subheadings, body copy, badge labels, button text, filter labels, form field labels/placeholders, FAQ questions & answers, testimonials, footer text, and pre-filled WhatsApp inquiry messages are captured verbatim.

3. Full CSS & Design System Tokens:
   - Verify exact hex/RGBA colors for page backgrounds, card surfaces, primary/secondary buttons, hover states, borders, badges, and gradients.
   - Verify exact font families (from <head> / computed styles), font weights, font sizes (desktop vs. mobile), line heights, and letter spacing.
   - Verify container max-widths, grid column counts across breakpoints, section padding, card border-radius, box-shadows, and z-index layering (sticky navbar, modals, floating buttons).

4. Component Inventory (Large to Micro-UI):
   - Verify every section and small UI element is documented with a proposed React component name (under src/components/) and its interactive behavior:
     - Top Navbar & mobile hamburger menu/drawer (open/close states, active link styling)
     - Hero section (tabs/selectors, carousels, badges, CTAs)
     - Puppy Catalog (all filter tabs/dropdowns, puppy card anatomy, availability badges, photo/video galleries, and individual puppy profile modal or detail page)
     - Contact / Inquiry forms (fields, validation, submit behavior) & WhatsApp quick-message widget
     - FAQ accordion (expand/collapse animation & icons)
     - Happy Families / testimonial gallery & lightboxes
     - Footer layout & floating/sticky WhatsApp/Call action buttons
     - Animations, scroll reveals, hover transitions, and icons (Lucide/SVG).

5. Media & Assets Completeness:
   - Verify every logo, favicon, hero image/video, puppy card photo/video, and testimonial image URL is documented (or saved under public/images/) with zero missing or placeholder assets.

6. Data Layer Mapping:
   - Confirm all repeating content (puppies list, breeds/filters, FAQs, testimonials, nav links) is mapped to structured TypeScript files under src/data/.

After updating DESIGN_AUDIT.md with any gaps you find, output a short Verification Summary table showing PASS / UPDATED for each of the 6 categories above. Do NOT start writing application code yet.

## Prompt: 3

/plan Read DESIGN_AUDIT.md and create a detailed implementation plan to clone https://puppy.instabizweb.com/ 1:1 in this Next.js (App Router) + TypeScript + Tailwind CSS project.

Requirements:

- Configure exact fonts and color tokens in globals.css / Tailwind config.
- Configure next.config.ts (remotePatterns) for any external media URLs or map all local assets under public/images/ so zero images break.
- Put all structured data (puppy listings, breeds, availability, FAQs, testimonials, navigation links) into modular files under src/data/.
- Break the UI into reusable components under src/components/ (Navbar, Footer, HeroShowcase, PuppyCard, PuppyGridWithFilters, PuppyDetailModal, WhatsAppWidget, FAQAccordion, etc.).
- Implement all routes from DESIGN_AUDIT.md under src/app/.
- Ensure full desktop and mobile responsiveness matching the reference site.
- Organize the plan into clear build phases (Phase 1: Design System + Layout + Home Page, Phase 2: Puppies Catalog + Filters + Modals/Detail Views, Phase 3: Remaining Routes + Final Polish).

Wait for my approval before writing code.

## Prompt: 4

/browser Open https://puppy.instabizweb.com/ alongside http://localhost:3000 and inspect the LIVE computed styles, stylesheets, DOM mutations on scroll, and hover states to fix 5 specific visual and animation mismatches on our Home page:

1. Scrolled Navbar (Curved Edges + White Background):
   - Scroll down 200px+ on the live site and inspect how the <header>/<nav> changes state (classes, border-radius/pill shape, white background color, backdrop blur, box-shadow, padding, top offset, and transition).
   - Replicate this exact scroll-triggered transition in src/components/Navbar.tsx.

2. Custom Paw Cursors:
   - Inspect the live CSS rules on html, body, links, and buttons for custom `cursor: url(...)` values.
   - Extract the exact paw SVG/image or data-URI used for default and pointer/hover states, ensure the asset path/data-URI is valid (and within browser cursor size limits, e.g., 32x32), and fix it in src/app/globals.css so the paw cursor visibly works everywhere on localhost:3000.

3. Scrolling / Floating Puppy Element:
   - Scroll slowly from top to bottom on the live site and inspect the DOM for the puppy element that moves/follows up and down across the page.
   - Extract its exact image/SVG asset, positioning (fixed/sticky/absolute), z-index, and scroll-linked animation or keyframe motion, and implement it in our Home page/layout.

4. "Meet the Pups" Door Animations:
   - Scroll into the Meet the Pups section on the live site and inspect the door cards both during scroll-in and on hover.
   - Extract the exact CSS transforms, 3D perspective/rotateY or swing/open door mechanics, transitions, and keyframes, and replicate them accurately in src/components/MeetThePupsBoardwalk.tsx and src/components/PuppyDoorCard.tsx.

5. "Two Ways to Meet Your Puppies" Animations ("Puppies in Dubai" & "Imported for You"):
   - Scroll to this section on the live site and inspect the DOM/styles for all entrance, scroll, hover, or continuous animations on both cards ("Puppies in Dubai" and "Imported for You") and their illustrations/icons.
   - Replicate these exact animations in src/components/TwoWaysSection.tsx.

6. General Animation Sweep:
   - While scrolling through the rest of the live Home page, check for any other missed scroll reveals, floating elements, or hover micro-interactions and bring them to parity.

After implementing all fixes:

- Run `npm run lint` and `npm run build` to confirm zero errors.
- Use /browser on http://localhost:3000 (1440px and 390px) to scroll down and verify the white curved navbar, paw cursors, scrolling puppy, door animations, and Two Ways animations all render and animate smoothly.
- Summarize the exact CSS/JS changes made for each of the 5 items.

## Prompt: 5

Phase 1 looks good. Proceed with Phase 2: build /puppies, /puppies/[slug], and /gone-home matching DESIGN_AUDIT.md 1:1.

Requirements:

- /puppies: Implement all filter tabs/controls (breed, availability, Dubai vs. Imported, gender, etc.) using src/data/puppies.ts with smooth state updates and accurate empty states.
- /puppies/[slug]: Implement generateStaticParams (or dynamic routing) for every puppy in src/data/puppies.ts, including the full photo/video gallery, puppy details/passport info, and pre-filled WhatsApp inquiry CTA.
- /gone-home: Implement the adopted puppies showcase matching the reference layout and card styling.
- Ensure all links between Home, /puppies, /puppies/[slug], and /gone-home work with zero 404s.

After building:

1. Run npm run lint and npm run build to confirm zero errors.
2. Use /browser to inspect /puppies, one /puppies/[slug] detail page, and /gone-home on desktop (1440px) and mobile (390px), testing the filters and media gallery.
3. Fix any issues and stop for my approval before Phase 3.

## Prompt: 6

/browser Open https://puppy.instabizweb.com/ and run a deep CSS + Animation extraction using DevTools/DOM inspection (do not just guess from screenshots).

Extract the following directly from the live page's stylesheets, inline styles, and loaded scripts:

1. Animation Libraries: Check window globals, script tags, and DOM attributes (e.g., data-aos, data-framer-appear-id, gsap/ScrollTrigger, lottie, IntersectionObserver) to identify what powers the animations.
2. All CSS @keyframes & Cursors: Inspect document.styleSheets and extract EVERY @keyframes rule, every custom cursor: url(...) rule (including paw cursors and SVG data URIs), and every hover/transition transform rule.
3. Scroll-Driven & Floating Elements: Scroll from 0% to 100% of the page in increments and log every element whose classList, opacity, or inline transform changes on scroll (including any floating/scrolling puppy, paw trail/animations, sticky curved white navbar, door cards, and "Two Ways" cards).
4. Missing Asset Check: Compare all SVGs, icons, cursors, and background graphics on the live site against our local project at http://localhost:3000 and list anything missing.

Save the complete extraction and a "Live vs. Local Missing Items" table into ANIMATION_AUDIT.md.

Then immediately implement EVERY missing animation, paw cursor/motion, scroll-triggered class, and visual detail in our Next.js codebase, verify on http://localhost:3000 (1440px and 390px), and run npm run lint and npm run build to confirm zero errors.

## Prompt: 7

Phase 2 is complete. Proceed with Phase 3: inspect and build all remaining pages from https://puppy.instabizweb.com/ 1:1.

First, use /browser to visit each of these live routes on both desktop (1440px) and mobile (390px) viewports, scroll from top to bottom, and inspect their DOM, copy, images, interactive states, and animations:

1. Happy Families (/happy-families) — exact hero copy, testimonial cards/polaroid wall, photo/video lightbox behavior, and layout grid.
2. How It Works (exact slug from DESIGN_AUDIT.md / navbar) — step-by-step journey layout, illustrations/badges, timeline or card animations, and CTAs.
3. Delivery & Collection (exact slug from footer) — full layout, process breakdown, and links.
4. FAQ (/faq) — all FAQ categories, exact questions & answers, accordion open/close transitions, and CTA block.
5. Visit & Contact (exact slug from navbar/footer) — Dubai location details, WhatsApp/email/phone links, interactive contact/inquiry form or WhatsApp message builder, and any embedded map or booking UI.
6. Check the footer for any remaining secondary/legal links so no link on the site returns a 404.

Implementation requirements:

- Store all structured copy, testimonials, steps, and FAQs in modular files under src/data/.
- Reuse existing shared components (Navbar, Footer, PhotoLightbox, FaqAccordion, MobileStickyBar, paw cursors, and scroll animations) so the entire site feels unified.
- Match every route's exact URL path, spacing, dawn-to-night or page-specific gradients, and mobile responsiveness.

After building:

1. Run `npm run lint` and `npm run build` to confirm zero TypeScript, ESLint, or build errors.
2. Use /browser to visit EVERY route on http://localhost:3000 (1440px and 390px), verify zero broken images or console errors, test every accordion/lightbox/form/filter, and confirm all navbar and footer links resolve cleanly.
3. Fix any visual or functional discrepancies and report back.

## Prompt: 8

/browser Perform a full pre-deployment QA audit comparing our local Next.js clone at http://localhost:3000 side-by-side against the live reference site https://puppy.instabizweb.com/.

Start the dev server (or production preview) and systematically test EVERY route on both desktop (1440px) and mobile (390px) viewports:

- / (Home)
- /puppies
- At least 2 different /puppies/[slug] detail pages
- /gone-home
- /happy-families
- How It Works route
- Delivery & Collection route
- /faq
- Visit & Contact route
- Any additional links present in the navbar or footer

Verify the following 6 audit categories:

1. Routing & Link Integrity:
   - Click every navbar link, mobile menu link, hero CTA, puppy card link, and footer link.
   - Confirm ZERO 404 pages, ZERO dead `#` links, and exact active-link states matching the live site.
   - Verify all WhatsApp, phone (tel:), and email (mailto:) links contain the exact pre-filled messages and contact details from the live site.

2. Visual, Layout & Animation Parity:
   - Compare typography (Fraunces, Figtree, Shantell Sans), color tokens, dawn-to-night gradients, spacing, and card styling against the live site.
   - Verify the scrolled navbar transition (curved white pill appearance on scroll), custom paw cursors, scrolling/floating puppy element, Meet the Pups door card animations, and Two Ways section animations.

3. Interactive Components & Edge Cases:
   - Test all filters on /puppies (breed, availability, Dubai vs. Imported, gender, etc.) including combining filters and clearing/resetting them.
   - Test photo/video galleries and PhotoLightbox (open, next/prev navigation, close via button and Escape key).
   - Test FAQ accordions (expand/collapse states) on both Home and /faq.
   - Test any contact/inquiry form or WhatsApp message builder (validation, inputs, submission/redirect behavior).
   - Test MobileMenuDialog and MobileStickyBar on 390px viewport.

4. Media, Console & Network Health:
   - Inspect DevTools Console and Network across every route.
   - Confirm ZERO broken images (naturalWidth === 0), ZERO broken videos, ZERO React hydration warnings, ZERO 404/500 network requests, and ZERO runtime console errors.

5. Responsive & Overflow Check:
   - On 390px mobile and 1440px desktop, verify there is ZERO unintended horizontal scrolling (document.documentElement.scrollWidth <= window.innerWidth) on every page.
   - Confirm text readability, button tap targets, and image aspect ratios do not clip or overlap.

6. Production & Vercel Readiness:
   - Verify <title>, meta description, and favicon are properly set in src/app/layout.tsx (no default "Create Next App" metadata left behind).
   - Verify next.config.ts image configuration works cleanly in a production build.
   - Stop the dev server, run `npm run lint` and `npm run build`, and confirm both exit with code 0 and zero TypeScript or ESLint errors.

Execution instructions:

- If you find ANY discrepancy, bug, broken image, console error, or build issue, fix it immediately in the codebase and re-verify that specific item.
- Once everything passes, output a clear "Pre-Deployment QA Report" table showing PASS/FIXED status for each route and each of the 6 categories above.
