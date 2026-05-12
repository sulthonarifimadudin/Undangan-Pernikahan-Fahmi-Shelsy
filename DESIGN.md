---
name: Aethelgard Wedding Design
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4d4635'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#6f5b44'
  on-secondary: '#ffffff'
  secondary-container: '#fadec1'
  on-secondary-container: '#75614a'
  tertiary: '#5e5e5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#b4b3af'
  on-tertiary-container: '#454543'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#fadec1'
  secondary-fixed-dim: '#dcc2a7'
  on-secondary-fixed: '#271907'
  on-secondary-fixed-variant: '#56432f'
  tertiary-fixed: '#e4e2de'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#474744'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  accent-script:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.03em
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1140px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The design system is rooted in the "New Romanticism" movement—a blend of classic editorial elegance and modern digital etherealism. It targets high-end clientele who value heritage, intimacy, and understated luxury. The visual language should evoke a sense of timelessness, using generous negative space to allow the content to "breathe," much like a physical letterpress invitation.

The style combines **Minimalism** with **Glassmorphism**. Surfaces are treated as semi-transparent vellum or frosted crystal, creating a multi-layered depth that feels premium and cinematic. Minimalist floral ornaments (fine-line botanical illustrations) act as anchors for the eye, rather than distractions, reinforcing the romantic nature of the interface.

## Colors
The palette is monochromatic and warm, designed to feel organic and "paper-like."
- **Cream (#FDFBF7):** The foundation. Used for main backgrounds to reduce the harshness of pure white.
- **Off-white (#FFFFFF):** Reserved for glassmorphic cards and high-light areas to create a "glow."
- **Champagne Gold (#D4AF37):** Used sparingly for call-to-actions, decorative icons, and primary links.
- **Soft Brown (#8D775F):** The anchor color for primary text and subtle borders, offering a softer alternative to black or grey.

Backgrounds should utilize a very subtle noise texture or paper grain (1-2% opacity) to enhance the tactile, premium feel.

## Typography
The typographic hierarchy relies on contrast between high-waisted Serifs and utilitarian Sans-serifs.
- **Headings:** Use **Playfair Display**. It should be set with tight letter-spacing for large displays to evoke a high-fashion editorial look.
- **Accents:** While the request mentions handwriting, we utilize **Playfair Display Italic** or a delicate Serif for "Names" to maintain readability and structural integrity, though a custom SVG script is recommended for signature elements.
- **Body:** Use **Work Sans** in light weights (300/400). This keeps the interface feeling modern and ensures legibility for logistics (dates, maps, RSVP details).
- **Labels:** Small caps with generous letter-spacing are used for section headers or "SAVE THE DATE" labels to provide an architectural feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop and a fluid single-column on mobile.
- **Generous Whitespace:** Section gaps are intentionally large (120px+) to ensure the "Luxury" feel. Content should never feel crowded.
- **Asymmetry:** Utilize offset grids where text and images overlap slightly to create a cinematic, layered effect.
- **Breakpoints:**
  - **Mobile (<768px):** 4-column grid, 20px margins.
  - **Desktop (>1024px):** 12-column centered grid, 64px margins.

## Elevation & Depth
This design system uses **Glassmorphism** and **Ambient Shadows** instead of traditional elevation tiers.
- **Surfaces:** Use a `backdrop-filter: blur(12px)` on off-white surfaces with 65% opacity. This suggests a vellum paper layer.
- **Shadows:** Shadows are "Golden Shadows"—extremely diffused, with a slight tint of Soft Brown (#8D775F) instead of black, using a 15% opacity and 40px blur for a soft, lifted effect.
- **Ornaments:** Floral illustrations should be placed behind the glass layers and in front of the background to create a 3D "pressed flower" depth.

## Shapes
The shape language is "Softly Architectural." 
- **Cards:** Use a 1rem (16px) radius to suggest high-quality stationery cardstock.
- **Media:** Photography should use the same 1rem radius or, for specific "Signature" shots, a full arch (half-pill) top.
- **Buttons:** Subtle rounding (8px) rather than pills, to maintain a formal, structured appearance.

## Components
- **Buttons:** Primary buttons use a Champagne Gold background with Soft Brown text. Secondary buttons are "Ghost" style with a 1px Soft Brown border and high letter-spacing labels.
- **Cards (Vellum):** Glassmorphic containers with a 1px white inner border to simulate a "beveled glass" edge. Used for RSVP forms and Event Details.
- **Input Fields:** Minimalist design—bottom border only (1px Soft Brown), with labels that float or disappear. Focus state should highlight the border in Gold.
- **Floral Accents:** SVG-based botanical line art used as corner anchors or section dividers. These should animate (fade-in) slowly on scroll.
- **RSVP Chips:** Rounded-pill shapes with a soft cream background and gold text for "Selected" states.
- **Cinematic Hero:** A full-screen container with a background video or high-res photo, overlaid with a Playfair Display greeting and a glassmorphic "scroll down" indicator.