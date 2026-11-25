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
