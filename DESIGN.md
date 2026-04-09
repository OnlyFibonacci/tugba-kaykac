# Design System Document: Precision Industrial Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Blueprint"**

This design system is engineered to move beyond the generic "corporate engineering" aesthetic. It is a high-end, editorial-inspired framework that treats the digital screen as a precision instrument. By blending the rigid accuracy of industrial drafting with the fluid sophistication of modern UI, we create an experience that feels both technically unassailable and aesthetically premium.

The system breaks away from "template" layouts through **intentional asymmetry** and **tonal depth**. We use generous white space not just for breathing room, but as a structural element that mirrors the vastness of global engineering projects. Overlapping technical motifs and high-contrast typography scales transform data into a narrative of expertise.

## 2. Colors: Tonal Architecture
Our palette is rooted in the depth of heavy machinery and the clarity of technical schematics.

*   **Primary (`#001736`) & Secondary (`#00696f`):** These represent the core of the brand—Deep Navy and Technical Teal. They provide the "weight" in the UI.
*   **Surface Strategy:** We rely on a light-mode hierarchy using `surface` (`#f7f9fc`) and its variants.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or containment. Boundaries must be defined solely through:
1.  **Background Color Shifts:** A `surface-container-low` section sitting against a `surface` background.
2.  **Subtle Tonal Transitions:** Using the hierarchy of `surface-container-lowest` to `highest` to delineate content areas.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of technical drawings.
*   **Base:** `surface` (`#f7f9fc`) for global backgrounds.
*   **The Content Layer:** Use `surface-container-lowest` (`#ffffff`) for primary cards or whitepapers to make them feel "elevated" by brightness rather than shadows.
*   **The Inset Layer:** Use `surface-container-high` (`#e6e8eb`) for sidebars or technical spec sheets to ground them.

### Signature Textures
To add "soul" to the precision, employ **Glassmorphism** and **Technical Gradients**. Use `backdrop-blur` on floating navigation or modals using semi-transparent variations of `primary_container`. Main CTAs should utilize a subtle linear gradient from `primary` (`#001736`) to `primary_container` (`#0d2c54`) at a 135-degree angle to mimic the sheen of polished steel.

## 3. Typography: The Editorial Voice
We utilize a pairing of **Manrope** for impact and **Inter** for technical clarity.

*   **Display & Headline (Manrope):** Large-scale, high-contrast. `display-lg` (3.5rem) should be used for hero statements, often typeset with tight letter-spacing (-0.02em) to convey institutional authority.
*   **Body & Title (Inter):** The workhorse. `body-lg` (1rem) provides maximum readability for technical descriptions.
*   **Labels (Inter):** Used for bilingual indicators (EN/TR) and technical specs. These should often be in ALL CAPS with increased letter-spacing (0.05em) to mimic blueprint annotations.

**Bilingual Balance:** Always ensure the Turkish (secondary) text maintains a slightly lower visual weight (using `on_surface_variant` or `label-md`) to ensure the primary English messaging remains the focal point without cluttering the layout.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are replaced by "Atmospheric Depth."

*   **The Layering Principle:** Avoid shadows for static elements. A `surface-container-lowest` card placed on a `surface-container-low` background creates a natural, soft lift.
*   **Ambient Shadows:** For floating elements (Modals/Dropdowns), use a shadow with a blur radius of 40px and 4% opacity, tinted with `primary` (`#001736`). This mimics natural light reflecting off technical surfaces.
*   **The "Ghost Border":** If a boundary is required for accessibility, use `outline_variant` at **15% opacity**. A 100% opaque border is considered a failure of the design system's elegance.

## 5. Components: The Industrial Suite

### Buttons
*   **Primary:** Solid `primary` background. Sharp `sm` (0.125rem) or `md` (0.375rem) corners only—avoid rounded "pill" shapes as they contradict the engineering motif.
*   **Secondary (Teal):** `secondary_container` background with `on_secondary_container` text. High legibility, lower visual weight.
*   **Ghost CTA:** No background, `primary` text, and a `ghost border` that appears only on hover.

### Technical Input Fields
*   **Style:** Minimalist. A bottom-weighted `surface-variant` background.
*   **Interactions:** On focus, the bottom border transitions from `outline_variant` to a 2px `secondary` (Teal) line.

### Cards & Industrial Lists
*   **Rule:** Forbid divider lines.
*   **Structure:** Separate list items using the spacing scale (e.g., 16px or 24px vertical gaps). Use a background shift (e.g., `surface-container-low` on hover) to indicate interactivity.
*   **Imagery:** Industrial imagery must be desaturated or tinted using a `primary` multiply layer to ensure text overlay readability.

### Specialty Components: The "Blueprint Overlay"
Create a custom component for displaying engineering specs. A semi-transparent `surface` panel that uses a 5% opacity "grid" background pattern, housing `label-sm` technical data points.

## 6. Do's and Don'ts

| Do | Don't |
| :--- | :--- |
| **Do** use intentional asymmetry (e.g., 2/3 width hero images with offset text). | **Don't** use standard 12-column centered "bootstrap-style" grids. |
| **Do** use gear motifs and technical illustrations as "watermarks" in the background at 2-3% opacity. | **Don't** use generic stock photos of people in hard hats shaking hands. Focus on the machinery and the precision. |
| **Do** use background color shifts to define "zones" of information. | **Don't** use solid black or high-contrast grey lines to separate sections. |
| **Do** treat the EN/TR language toggle as a premium UI element, using `label-md` with `surface-container-high` active states. | **Don't** use flags or clunky dropdowns for language selection. |
| **Do** prioritize Manrope for all large-scale numbers and data visualizations. | **Don't** use serif fonts or overly "friendly" rounded sans-serifs. |

---
*This system is designed to evolve. When in doubt, lean into the "Architectural Blueprint" philosophy: if a design element doesn't serve a structural or informational purpose, remove it.*