# ReturnQueen — responsive landing page

A responsive, single-page recreation based on the supplied reference screenshot.

## Run locally

Open `index.html` in a modern browser. For a local development server, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Included
- Responsive desktop, tablet and mobile layouts
- Mobile navigation overlay with animated hamburger-to-close icon
- Responsive hero with a separate van image asset
- Recreated retailer marks, benefit icons, process illustrations, app mockups and store badges using HTML/CSS
- GSAP + ScrollTrigger entrance animations (loaded from CDN)
- Reduced-motion accessibility support
- Demo ZIP/postcode form interaction

## Notes
The supplied reference is a low-resolution screenshot, not the original design source file. The page structure, color palette, spacing and visual language are recreated from it. Brand marks, retailer logos, reviews, and app screens are illustrative approximations, not official assets or verified endorsements. Replace them with approved production assets and real copy before publishing. Google Fonts and GSAP are loaded from CDNs, so those features need an internet connection.


Navigation: the header is sticky and remains visible at the top while scrolling. Anchor navigation includes scroll offset so section headings are not hidden beneath it.
