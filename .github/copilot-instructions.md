# AI Coding Agent Instructions

## Project Overview
A responsive photography portfolio website built with semantic HTML, CSS Grid/Flexbox, and vanilla JavaScript. The site showcases featured photography, films, prints, and portfolio sections with a focus on accessibility and image-responsive design.

**Key Directories:**
- `index.html`, `featured.html`, `films.html`, etc. — Page templates sharing common header/nav structure
- `css/styles.css` — Single stylesheet with CSS custom properties for theming
- `js/main.js` — Minimal vanilla JS (search toggle interaction only)
- `img/` — Photography assets referenced in pages

## Architecture Patterns

### Shared Header/Navigation Pattern
Every page includes identical `<header class="site-header">` with:
- Logo link (`HOME` anchor to `index.html`)
- Navigation list (Portfolio, Prints, About, Contact, Search button)
- Hidden search container (toggled via JavaScript)

All HTML pages follow this pattern—when adding new pages, replicate the header block from `index.html`.

### CSS Organization
- **CSS Custom Properties** in `:root` define the color palette (`--bg-body`, `--text-main`, `--overlay`, `--overlay-hover`, `--focus-outline`)
- **Utility/Reset Styles** at the top (box-sizing, fonts, accessibility helpers)
- **Component-based naming**: `.hero-tile`, `.film-card`, `.masonry-item`
- **Responsive breakpoints**: `768px` (tablet), `600px` (mobile)
- **BEM-adjacent naming**: `.hero-tile__image`, `.hero-tile--featured` for variants

### Image Handling
- Images use `object-fit: cover` and `object-position` for consistent aspect ratios
- Hero tiles use variant classes (`.hero-tile--featured`, `.hero-tile--films`, `.hero-tile--stills`) with custom focal points
- Masonry gallery uses CSS `column-count` for responsive multi-column layout (3 cols desktop, 1 col mobile)
- All `<img>` tags include descriptive `alt` attributes for accessibility

## Key Implementation Details

### Hero Grid (Home Page)
- 2-column grid on desktop, 1 column on tablet/mobile (`grid-template-columns: repeat(2, 1fr)`)
- `.hero-tile--stills` spans full width (`grid-column: 1 / -1`)
- Uses `aspect-ratio: 1 / 1` for square tiles
- Overlay pseudo-element (`.hero-tile::before`) with semi-transparent background darkens images; darkens further on hover

### Search Functionality
- Search button (`nav-search-btn`) uses emoji (magnifying glass: `&#128269;`)
- Clicking toggles visibility of `.header-search` container via `hidden` attribute
- JavaScript in `main.js` handles toggle logic—no external dependencies

### Responsive Adjustments
- Header flexes column on `768px` breakpoint
- Hero grid becomes single column at `768px`
- Masonry gallery adjusts from 3→2→1 column at breakpoints
- Navigation wraps and gaps adjust for smaller screens

## Development Workflows

### Adding a New Page
1. Copy structure from existing page (e.g., `about.html`)
2. Include identical header markup
3. Create content section in `.content-wrapper` div
4. Link stylesheet and `main.js` script
5. Update navigation menu items across all pages to link to the new page

### Styling Changes
- Edit `css/styles.css` only (no per-page stylesheets)
- Reuse existing component classes or create new component blocks
- Update CSS variables in `:root` if changing global colors
- Use media queries at the end of component definitions (not in separate media query block)

### Image Optimization
- Place images in `img/` directory
- Use descriptive alt text describing subject and context
- For hero tiles, adjust `object-position` in page-specific CSS (see `.hero-tile--featured`, etc.)

## Project Conventions

### HTML Semantic Elements
- Use `<main>` for page content
- Use `<header>`, `<nav>`, `<article>`, `<figure>`, `<section>` appropriately
- Always include `aria-label` on navigation and major sections for screen reader clarity

### Accessibility
- `.visually-hidden` class hides labels visually but keeps them for screen readers (used on search input label)
- All interactive elements (links, buttons) have visible focus styles (2px outline with 3px offset)
- Images always have descriptive alt text

### CSS Class Naming
Follow BEM-inspired structure: `.block`, `.block__element`, `.block--modifier`
Example: `.hero-tile` (block), `.hero-tile__image` (element), `.hero-tile--featured` (modifier)

### No Build Tools or Dependencies
Project uses vanilla HTML/CSS/JS—no npm, webpack, or frameworks. Static file serving only.
