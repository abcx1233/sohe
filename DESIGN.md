---
name: Omiko
description: Digital design and development studio — confident, minimal, monochrome marketing site
colors:
  paper-white: "#f0f6f8"
  ink-black: "#0c1016"
  panel-dark-grey: "#1e232c"
  surface-soft-grey: "#d9e0e3"
  label-grey: "#767c7e"
  label-grey-on-light: "#6b7072"
  panel-sublabel: "#c8c8c8"
  panel-step-1: "#23272d"
  panel-step-2: "#3a3e44"
  panel-step-3: "#50555a"
  tag-step-1: "#10141c"
  tag-step-2: "#20242a"
  tag-step-3: "#363a40"
  tag-step-4: "#4c5157"
  error-red: "#b3261e"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(6rem, 10vw, 12rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 6vw, 7rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.075em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 8rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 2vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "normal"
    fontFeature: "uppercase"
rounded:
  pill: "999px"
  lg: "1.5rem"
  md: "1rem"
  sm: "0.75rem"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "4rem"
  xl: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.pill}"
    padding: "0.3rem"
  button-primary-hover:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.paper-white}"
  button-light:
    backgroundColor: "{colors.surface-soft-grey}"
    textColor: "#000000"
    rounded: "{rounded.pill}"
    padding: "0.3rem"
  card-service:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "3rem 1.5rem"
  tag-chip:
    backgroundColor: "{colors.tag-step-1}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  input-field:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1rem"
---

# Design System: Omiko

## 1. Overview

**Creative North Star: "The Quiet Confidence"**

Omiko's visitors are local service-business owners, on their phone, comparing this agency against several others in open tabs. They are not impressed by noise — they are impressed by a site that visibly has its act together. The system is built on a strict near-monochrome palette (off-white paper, near-black ink, a tight band of greys) that refuses to reach for color as a crutch. Confidence is expressed through precision: tight negative letter-spacing on display type, exact optical alignment of the wordmark, deliberate scroll-reveal choreography, and tonal stepping in place of drop shadows. Nothing here is decorative; everything that appears is load-bearing.

This system explicitly rejects the generic template-agency look: stock photography, interchangeable icon-grid service cards, and vague "we build beautiful websites" filler copy. Every section instead leads with a direct, specific claim ("Simple packages. No surprises.", "Ideas, given real shape.") and lets restrained type and motion carry the credibility.

**Key Characteristics:**
- Two-color spine (paper-white / ink-black) with a narrow grey ramp; color is the exception, not the rule.
- Display type is heavy weight (900) with aggressively negative letter-spacing (-0.05em to -0.075em) — confident, not loud.
- Depth comes from flat tonal stepping between panels, never from box-shadow.
- Pill shapes (999px radius) for every interactive control — buttons, nav, tags, social icons — used consistently as the one shape language.
- Motion is subtle and physical: scroll-reveals, magnetic hover scales, never bounce or elastic.

## 2. Colors

The palette is built from two anchors — paper-white and ink-black — with a short grey ramp between them used for tonal layering, not for color variety.

### Primary
- **Ink Black** (#0c1016): the dominant surface for dark panels (header menu-toggle, service/pricing cards, footer panel, services-cloud background) and the default text color on light surfaces.
- **Paper White** (#f0f6f8): the page background and the default text/icon color on dark surfaces. Functions as both bg and ink depending on context — there is no separate "white" role.

### Neutral
- **Panel Dark Grey** (#1e232c): the pill-dark icon well and the darkest stepped service-card tone.
- **Surface Soft Grey** (#d9e0e3): light secondary surfaces — the open site-menu panel, the contact panel, the pill-light background.
- **Label Grey** (#767c7e): supporting text on dark surfaces only (footer tagline, footer privacy link), where it clears 4.5:1 against ink-black.
- **Label Grey On Light** (#6b7072): the light-background counterpart — eyebrows, scroll indicator, section subheads, CTA reassurance lines, team roles, case-study back links and meta labels. Darkened from the original #767c7e specifically because that value only hit 3.88:1 against paper-white, failing WCAG AA body-text contrast; this token exists so light-surface supporting text never repeats that failure.
- **Panel Sublabel** (#c8c8c8): the secondary line inside stepped service/pricing cards (e.g. "Identity" under "Brand", or a price line). A flat #767c7e failed badly on the two lightest panel steps (as low as 1.78:1); this lighter, panel-only token clears 4.5:1+ on every step of the ramp.
- **Panel Step 1 / 2 / 3** (#23272d / #3a3e44 / #50555a): the tonal stepping ramp used across the service and pricing card grids, each card one step lighter than the last, communicating sequence (most-featured to least, or simplest to most custom) without changing hue.
- **Tag Step 1–4** (#10141c / #20242a / #363a40 / #4c5157): a matching one-step-darker companion ramp used for the chip/tag background inside each stepped card, keeping the chip distinguishable from its parent card at every step.
- **Error Red** (#b3261e): form validation errors only.

### Named Rules
**The Two-Tone Spine Rule.** Every screen is built from paper-white and ink-black first; greys exist only to step between them. If a new component needs a third hue, that's a sign it belongs in the services-cloud exception (below), not the core system.

**Resolved: the former services-cloud exception.** The studio page's services-cloud tags previously broke the two-tone spine with six saturated colors (pink, green, yellow, orange, blue, magenta). This has been brought back into the system: all six tags now share a single neutral background (Panel Step 1, #23272d) with paper-white text, differentiated only by label — consistent with the Two-Tone Spine Rule. There is no remaining color exception on this page.

## 3. Typography

**Display Font:** Inter (with system-ui, sans-serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)

**Character:** A single variable family carrying the entire range, from 900-weight display headlines down to 400-weight body copy. The pairing has no contrast axis by design — consistency itself is the statement, with weight and negative tracking doing the work that a second typeface would otherwise do.

### Hierarchy
- **Display** (900, clamp(6rem, 10vw, 12rem), line-height 0.9, tracking -0.05em): the closing CTA heading ("Let's talk shop") and footer wordmark — the largest, heaviest moment on the page, reserved for once per page.
- **Headline** (600, clamp(1.875rem, 6vw, 7rem), line-height 1, tracking -0.075em): section headlines ("Simple packages. No surprises."), hero taglines, work-card titles.
- **Title** (600, clamp(3rem, 6vw, 8rem), line-height 1, tracking -0.05em): service/pricing card titles (e.g. "Web / Development").
- **Body** (400, clamp(1.125rem, 2vw, 1.875rem), line-height 1.4): service descriptions and paragraph copy; cap at ~65–75ch on wider viewports even though most reading happens on mobile at near-full width.
- **Label** (600, 0.875rem, uppercase): eyebrows ("Work", "Services", "Pricing"), pill labels, form field labels.

### Named Rules
**The Negative Tracking Rule.** Anything above body size pulls letter-spacing tight (-0.02em at minimum, -0.075em at the tightest on headlines) — never set wide or default tracking on a heading; it's the single biggest contributor to the "considered, not templated" feel. Stay above the -0.04em hero ceiling floor so letters never visually touch.

## 4. Elevation

The system is flat by design — there is no box-shadow vocabulary anywhere in the codebase. Depth and hierarchy between stacked surfaces (service cards, pricing cards, the footer panel sitting over the page background) are conveyed entirely through tonal stepping: each card or panel sits one shade lighter or darker than its neighbor in the grey ramp (Panel Step 1 → 2 → 3), not through elevation shadows. The one place a shadow-like effect appears is the scrim gradient under work-card titles (`linear-gradient(to top, rgba(0,0,0,0.4), transparent)`), which exists purely for text legibility over a photo, not as a depth cue.

### Named Rules
**The Flat-By-Default Rule.** Surfaces never cast a shadow. If a new component needs to read as "above" another, step it to a lighter or darker tone in the existing grey ramp instead of reaching for box-shadow.

## 5. Components

### Buttons
- **Shape:** pill (999px radius) on every button-like control, with no exceptions in the current system.
- **Primary (pill-dark):** ink-black background, paper-white label, a small embedded icon well in panel-dark-grey; used for the menu toggle and the main "Chat with Omiko" CTA in dark contexts.
- **Light (pill-light):** surface-soft-grey background with a black label, used where the button sits on a dark hero or panel and needs to read as the lighter, secondary action.
- **Hover / Focus:** the whole pill scales to 1.1 on hover (`cubic-bezier(0.22, 0.68, 0, 1)`, 0.5s) — a soft, slightly overshooting ease, never a color change alone.

### Chips (tag-chip)
- **Style:** pill-radius background one tonal step darker than its parent card, paper-white text, no border.
- **State:** static by default (`cursor: default`); decorative rather than interactive except where used as filter/view toggles on the work page, which add a soft-grey active background instead of a color shift.

### Cards / Containers (service-card)
- **Corner Style:** 1rem radius (2rem on the larger service-card variant).
- **Background:** assigned per-card from the Panel Step ramp (black → #23272d → #3a3e44 → #50555a), communicating a sequence across the grid rather than a single repeated tone.
- **Shadow Strategy:** none — see Elevation. Depth is the tonal step itself.
- **Internal Padding:** 3rem 1.5rem on mobile, up to 4rem on desktop.

### Inputs / Fields
- **Style:** paper-white background, no border, 0.75rem radius, ink-black text.
- **Focus:** a 2px solid ink-black outline with 2px offset — a hard, visible ring rather than a soft glow, consistent with the system's flat-elevation stance.
- **Error:** error-red (#b3261e) text below the field, 600 weight, no red border on the input itself.

### Navigation
- **Style:** the off-canvas site-menu is a soft-grey rounded panel (1.5rem radius) of stacked pill-shaped links; active/hover state is a paper-white background fill behind the link, link text stays ink-black throughout. On desktop, a leading icon slides in from zero width on hover. Mobile collapses the menu to a single dark pill trigger in the header; the header logo itself fades out on scroll on mobile to avoid competing with the menu trigger.

## 6. Do's and Don'ts

### Do:
- **Do** keep the palette to paper-white, ink-black, and the grey ramp; let restraint and precision (tracking, spacing, motion timing) carry differentiation instead of color.
- **Do** use pill shape (999px) for every new interactive control to stay consistent with the existing button/chip/nav language.
- **Do** convey card hierarchy through tonal stepping in the existing grey ramp, not through box-shadow.
- **Do** keep headline tracking tight (-0.02em to -0.075em) and never let a display heading exceed the 12rem ceiling at the largest breakpoint.
- **Do** write short, direct, jargon-free copy — the existing voice ("Simple packages. No surprises.") is the bar for every new section.
- **Do** design mobile-first and verify on a phone viewport before checking desktop, since the primary visitor is comparing agencies on their phone.

### Don't:
- **Don't** introduce stock photography, generic icon-grid service cards, or vague "we build beautiful websites" copy — the explicit anti-reference from PRODUCT.md.
- **Don't** add box-shadows for depth; this system is flat-by-default and conveys depth through tone alone.
- **Don't** extend the services-cloud's saturated six-color tag palette (pink/green/yellow/orange/blue/magenta) to any new component. It's a flagged inconsistency, not a sanctioned accent system — don't treat it as precedent.
- **Don't** use border-left or border-right colored stripes as accents anywhere in this system.
- **Don't** apply gradient text (`background-clip: text` with a gradient) for emphasis; the one existing gradient-text use (`.highlight-word`) is a narrow, intentional animated sweep on a single word per section, not a general pattern to repeat elsewhere.
- **Don't** use bounce or elastic easing; motion stays in the ease-out-quart/quint family already established (`cubic-bezier(0.22, 0.68, 0, 1)` and similar).
