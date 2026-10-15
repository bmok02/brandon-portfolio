---
name: Brandon Mok — clean & classic
description: "A quiet Inter page with colour fields: hand-drawn objects as a still life on a blue field, work as soft colour tiles, and the page closing on the same blue."
colors:
  accent: "#2348c4"
  paper: "#f6f6f4"
  surface: "#ffffff"
  text: "#1b1b1a"
  muted: "#6a6a66"
  faint: "#64645f"
  line: "#e4e4e0"
  accent-dark: "#8fa8ff"
  paper-dark: "#141414"
  surface-dark: "#1c1c1c"
  text-dark: "#ececea"
  muted-dark: "#a3a39e"
  faint-dark: "#8a8a84"
  line-dark: "#2a2a28"
  on-accent: "#ffffff"
  field-working: "#dfe7fb"
  mark-working: "#2348c4"
  field-building: "#fbe5d6"
  mark-building: "#c8602f"
  field-community: "#dceee2"
  mark-community: "#2f7f53"
  field-working-dark: "#1c2338"
  mark-working-dark: "#8fa8ff"
  field-building-dark: "#31231a"
  mark-building-dark: "#f0a173"
  field-community-dark: "#1a2b21"
  mark-community-dark: "#7fd0a1"
  ink: "#3a2418"
  porcelain: "#eef2ea"
  porcelain-lid: "#e3ebf3"
  cobalt-brush: "#2853ad"
  liquor: "#c98a2c"
  broth: "#e2973c"
  noodle: "#f7dfa0"
  leaf: "#5c9440"
  wood: "#b77e45"
  wood-light: "#d6a66b"
  jade: "#3c9876"
  jade-dark: "#2b7258"
  jade-light: "#8cc7a6"
  coin: "#e8b93c"
  kraft: "#c49a64"
  pencil: "#4a4440"
  pencil-yellow: "#f2c230"
  note-blue: "#2b4f9e"
  teal: "#127c84"
  napkin: "#fbf8f0"
  kopi-stain: "#8a5a33"
  krama: "#2f5db0"
  riel: "#8d6aa6"
  navy: "#24375f"
  stamp-ochre: "#b8660f"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.6
  quote:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  closer:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 3vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  group:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.65
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "\"cv11\", \"ss01\""
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.5
  tile-line:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.93rem"
    fontWeight: 400
    lineHeight: 1.5
  tag:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    fontFeature: "\"tnum\""
  hand:
    fontFamily: "Nanum Pen Script, cursive"
    fontWeight: 400
rounded:
  mark: "4px"
  skip: "6px"
  object: "12px"
  tile: "20px"
  study: "24px"
  field: "28px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  gutter: "24px"
  tile-row: "36px"
  hero-gap: "64px"
  block: "56px"
  section: "64px"
  foot: "72px"
  page: "1120px"
  reading: "680px"
components:
  nav:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "28px 0"
  nav-name:
    textColor: "{colors.text}"
    typography: "{typography.title}"
  still-life:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.field}"
  still-tag:
    backgroundColor: "{colors.on-accent}"
    textColor: "{colors.text}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  group-heading:
    textColor: "{colors.text}"
    typography: "{typography.group}"
  tile-field-working:
    backgroundColor: "{colors.field-working}"
    rounded: "{rounded.tile}"
  tile-field-building:
    backgroundColor: "{colors.field-building}"
    rounded: "{rounded.tile}"
  tile-field-community:
    backgroundColor: "{colors.field-community}"
    rounded: "{rounded.tile}"
  tile-title:
    textColor: "{colors.text}"
    typography: "{typography.title}"
  tile-title-hover:
    textColor: "{colors.accent}"
  study-field:
    backgroundColor: "{colors.field-working}"
    rounded: "{rounded.study}"
  contact:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.field}"
    padding: "clamp(32px, 6vw, 64px)"
  contact-email:
    backgroundColor: "{colors.on-accent}"
    textColor: "{colors.accent}"
    typography: "{typography.lead}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  text-link:
    textColor: "{colors.text}"
  text-link-hover:
    textColor: "{colors.accent}"
  fill-mark:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.mark}"
    padding: "0 0.3em"
  skip-link:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.skip}"
    padding: "8px 12px"
---

# Design System: Brandon Mok — clean & classic

## Overview

**Creative North Star: "The Quiet Page with Small Things on It"**

A designer-PM personal site at the craft level of Brian Lovin or Rauno Freiberg: well-set Inter on warm-grey paper, chrome reduced to type, hairlines and one deep blue. The writing still carries the reading parts of the page.

The small things are a set of hand-drawn objects, one per story (a gaiwan, a noodle bowl, a lanyard, a napkin sketch), drawn from above in flat gouache fills with one warm-brown ink line and a shared roughening filter. They now sit on colour fields. The page opens on a still life: all of them laid by hand on a square of accent blue. The work follows as tiles, each object large on a soft field in its section's colour. The page closes on the same blue field it opened with. Each object morphs into the head of its case study, which opens on the same section colour.

Light and dark follow the operating system. Dark mode is soft charcoal, not black, with deep tinted fields.

**Key Characteristics:**
- 1120px page; reading blocks (quote, places, case study) held to 680px.
- One sans family (Inter) for every page string.
- Warm greys, one deep blue, and three soft section fields.
- Colour fields are the only filled shapes; everything else is separated by hairlines.
- Hand-drawn SVG objects as the sole illustration.
- One authored moment (the still life settles on load) plus one interaction family (object lift on hover, morph into the case study).

## Colors

Warm-grey paper with one deep blue. Colour now has three homes: the drawn objects, the blue bookends (hero and contact), and the section fields.

### Primary
- **Ink-Blue Accent** (`accent`; `accent-dark` in dark mode): link hover, focus ring, selection, case-study outbound links, a hovered tile title. It also fills the two bookend fields (the still life and the contact block) with a faint white dot pattern (1px white dots at 14% on a 22px grid).
- **On Accent** (`on-accent`): white text, name tags, the email pill and focus outlines on the blue fields.

### Section Fields
Each work group has a soft field and a saturated mark, with dark-mode pairs:
- **Working**: `field-working` with the `mark-working` blue.
- **Building**: `field-building` (apricot) with the `mark-building` orange.
- **Community**: `field-community` (mint) with the `mark-community` green.

The field fills a tile and that story's case-study head. The mark is used for the 12px square beside the group heading and tints the tile field on hover (18% toward the mark).

### Neutral
- **Warm Paper** (`paper` / `paper-dark`): the page ground and `theme-color`.
- **Plain Surface** (`surface` / `surface-dark`): only the skip link's chip.
- **Ink Text** (`text` / `text-dark`): primary copy, headings, tile titles.
- **Muted Grey** (`muted` / `muted-dark`): role line, nav links, tile one-liners, facts, captions, place lines, case-study lead.
- **Faint Grey** (`faint` / `faint-dark`): years, group counts, dates, meta labels, list markers, footer, the Fill mark's dashed border. Held at ≥4.5:1 on paper.
- **Hairline** (`line` / `line-dark`): 1px rules and resting underline colour.

### Object Palette
The drawings own their tokens (`ink`, `porcelain`, `cobalt-brush`, `liquor`, `broth`, `jade`, `teal`, `krama`, `riel`, and the rest in the frontmatter). They are never used for page UI.

### Named Rules
**The Blue Bookends Rule.** The accent marks interactivity and focus, and fills exactly two fields: the hero still life and the closing contact block. Both use the same blue with the same white dot pattern. No third blue band.

**The Section Colour Rule.** Field colour is assigned by work group (Working, Building, Community) and follows the story into its case study. A field never carries text; titles and lines sit on paper below it. Object palette tokens never style page UI.

## Typography

**Body Font:** Inter (via `--font-sans`, with system-ui, sans-serif), stylistic features `cv11` and `ss01` on.
**Hand Font:** Nanum Pen Script (via `--font-hand`), used only as handwriting inside drawn SVG objects.

**Character:** One neutral, well-tuned sans. Hierarchy comes from weight 600 against 400 and ink against muted, with a few size steps for the display name, group headings and the contact line.

### Hierarchy
- **Display** (600, clamp(2rem, 5vw, 2.6rem), 1.1, -0.03em): home name and case-study title. One per page.
- **Closer** (600, clamp(1.4rem, 3vw, 2rem), 1.25, -0.02em): the contact lead on the blue field, max 26ch.
- **Group** (600, 1.35rem, -0.02em): work group headings (Working, Building, Community), with a count beside them at 0.9rem / 500 in faint grey.
- **Lead** (400, 1.12rem, 1.6): intro paragraphs (max 58ch). Case-study lead runs 1.15rem / 1.55 in muted grey (54ch). The email pill is 1.05rem / 600.
- **Quote** (400, 1.2rem, 1.5, -0.01em): the single pull quote, max 52ch.
- **Title** (600, 1rem to 1.05rem): block titles, tile titles, case-study section heads, place names. Sentence case.
- **Body** (400, 1rem, 1.65): case-study prose; `text-wrap: pretty` on paragraphs, `balance` on headings.
- **Tile Line** (400, 0.93rem, 1.5): the tile one-liner, muted.
- **Label** (400, 0.92rem): nav, facts, link rows, meta strip.
- **Tag** (600, 0.78rem): the white name tag on a still-life object.
- **Caption** (400, 0.85rem, tabular numerals): years, dates, footer, in faint grey.

### Named Rules
**The One Family Rule.** Every page string is Inter. Nanum Pen Script appears only as handwriting drawn inside an SVG object.

**The Plain Heading Rule.** Headings are plain sentence-case Inter 600. The only additions allowed are the group's colour square and its item count. No small-caps labels, kickers, eyebrows or index numbers.

## Layout

The page container is 1120px wide with 24px side padding (20px under 560px). Reading blocks stay narrow: the quote and places list are capped at 680px and left-aligned; the case study is a centred 680px column.

- **Hero:** two columns (1fr / 0.95fr, 64px gap), intro left, still life right, vertically centred. Opens at clamp(32px, 6vw, 64px).
- **Work:** per group, a 3-column tile grid (36px row gap, 24px column gap). Groups are 56px apart.
- **Rhythm:** nav 28px top and bottom; blocks 56px apart; quote 64px below work; contact 72px below places; footer 72px top, 48px bottom; case-study field 36px above the title; sections 44px apart; pager 64px below.
- **≤900px:** hero stacks to one column, still life capped at 520px; tiles drop to 2 columns.
- **≤560px:** still-life tags hide, tile gaps tighten to 28px / 14px, field radii shrink, case-study meta strip collapses to two columns with Role spanning both.

### Named Rules
**The Wide Page, Narrow Reading Rule.** Grids and fields can use the full 1120px; any running prose or list stays at 680px or narrower.

## Elevation & Depth

Flat chrome. No `box-shadow` anywhere. Separation is whitespace first, then 1px `line` hairlines (quote top, places list, meta strip, collaborator list, pager top). Colour fields are flat fills, never lifted.

The drawn objects alone cast soft drop shadows so they read as set down on a field: a blue-tinted shadow on the still life (0 8px 10px, deepening to 0 16px 16px on hover) and a warm low shadow on tiles and the case-study head.

### Named Rules
**The Hairline Rule.** If two things need separating, use space first and a 1px `line` rule second. Never a bordered box or shadow on chrome.

## Shapes

Generously rounded fields, quiet everything else. Fields: 28px for the still life and contact (22px on phones), 24px for the case-study head, 20px for tiles (16px on phones). Pills (999px) for the still-life name tag and the email button. 12px on still-life link focus, 6px on the skip link, 4px on focus outlines and Fill marks, 3px on the group colour square. All organic form belongs to the drawn objects, wobbled by a shared `feTurbulence` filter. Arrows are hand-drawn SVG strokes in `currentColor`, never font glyphs.

## Components

### Navigation
Name at left in Inter 600 ink; on the home page Work / Places / Contact at right in 0.92rem muted grey, ink on hover, 20px apart (14px on phones). Case studies show a hand-drawn left arrow plus "Brandon Mok" back to `/#work`.

### Text Links
Ink with a 1px `line` underline at 0.25em offset; on hover the text turns accent and the underline takes `currentColor` (0.15s). Focus everywhere is a 2px accent outline at 3px offset; white on the blue fields.

### Still Life (signature)
A square accent field with the white dot pattern holding all 11 objects, each placed by hand (position, width and rotation per story) and each a link to its case study.
- **Load:** objects drop onto the field and settle (`settle`: from -36px, -14deg, 0.92 scale and transparent, 0.7s ease-out, 65ms stagger after 120ms). This is the page's one authored moment.
- **Hover / Focus:** the object lifts (-8%, -7deg, 1.08 scale, 0.4s) and a white pill name tag fades in below it. Cup objects release steam.

### Work Tile (signature)
Grouped under a group heading with a colour square and count. Each tile: a 4:3 field in the section colour with the object centred at about 44% width, then title (600) with year at right (faint, tabular), then one muted line.
- **Hover / Focus:** field tints toward the mark (0.3s), title turns accent, object lifts (-6px, -6deg, 1.08 scale, 0.45s); cups steam.
- **Transition:** the object is a shared view-transition element that morphs into the case-study head (420ms, same ease-out).

### Case-Study Head
A 16:9 field in the story's section colour holding the object (min(220px, 40%)), then display title, muted lead, a Role / When / Where meta strip between hairlines, accent outbound links with drawn arrows, an optional note. Sections follow with plain 1.05rem headings; a hairline-topped pager links previous and next.

### Contact
Closes the page on the blue dotted field: block title at 78% white, the closer line in white, a white pill email button in accent text with a drawn arrow (lifts 2px on hover), and white underlined links.

### Lists
Places and collaborators are hairline-separated rows: name in 600, detail muted, date faint at right. "What I did" is a plain bulleted list with faint markers.

### Fill Mark
The only way to show unconfirmed content: a `<mark>` with transparent background, 1px dashed `faint` border, 4px radius, 0 0.3em padding, titled "Placeholder — to be filled in", rendered only through the Fill component.

### Named Rules
**The One Moment Rule.** Motion has one authored moment (the still life settling) and one interaction family (object lift with field tint or name tag, cup steam, and the morph into the case study). New surfaces reuse these and add nothing else. All of it stops under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** keep running text and lists at 680px or narrower inside the 1120px page.
- **Do** give each new story its own hand-drawn object (flat fills, `ink` line at 2.6 / 1.6 stroke, the shared rough filter, its own palette tokens), a hand-placed spot on the still life, and a tile in its group's colour.
- **Do** separate non-field content with whitespace and 1px `line` hairlines.
- **Do** give every new field colour a dark-mode pair and keep `faint` at or above 4.5:1 on paper.
- **Do** source every factual line from INTERVIEW-NOTES.md and show anything unknown through the Fill mark.
- **Do** honour `prefers-color-scheme` and `prefers-reduced-motion` for every new token and animation.

### Don't:
- **Don't** add a third blue field or use the accent for decoration beyond the two bookends.
- **Don't** put text on a tile field, border a field, or add shadows to chrome; only the objects cast shadows.
- **Don't** invent a fourth section colour without a new work group.
- **Don't** introduce a second page typeface or set page text in Nanum Pen Script.
- **Don't** add photos, stock illustration, icon-font glyphs or decorative graphics; the drawn objects are the only illustration.
- **Don't** put kickers, eyebrows or index numbers on headings or tiles.
- **Don't** invent placeholder copy in plain text; unconfirmed content goes through Fill only.
- **Don't** add new motion beside the settle, the lift and the morph.

## Background texture (Oct 2026)

- Scenery: a fixed, bright landscape filling the bottom ~62% of the viewport (fading at the top), in one of three flat scenes with their own full palettes and night versions: Singapore (blue bay, Marina Bay Sands, magenta Supertrees, the Flyer), Phnom Penh (Angkor Wat at golden hour, sugar palms, orange moat) and Boulder (red Flatirons, Front Range, pines, meadow). Each scene moves: clouds drift, the Flyer turns, a boat sails, palms sway, birds fly, a hot-air balloon floats; switching makes the new scene rise into place. Only the visible scene animates; reduced motion stops it all. Text over the scenery carries a soft background-coloured halo for legibility.
- A pill toggle (Singapore · Phnom Penh · Boulder), fixed bottom-right (bottom-centre on phones), crossfades scenes over 0.9s; the choice persists in localStorage and `?scene=` preselects one.
- The hero still-life and contact fields use a muted ink blue (`--field-blue`: #3f5a8c light, #2c3d5f dark).
- Section tile fields are desaturated: Working #e3e8f1, Building #f1e6dd, Community #e0ebe3 (marks #3f5a8c, #b0673f, #4a7a5c).
- Copy follows Brandon's own phrasing from INTERVIEW-NOTES.md: no contractions, no em dashes, plain Straits Times register.
- Place switcher: three postage stamps (Singapore, Phnom Penh, Boulder) under a handwritten "places that shaped me" label, fixed bottom-right (bottom-centre on phones). Each stamp has a tiny landmark icon (Marina Bay Sands, Angkor towers, Flatirons), a dashed perforation edge and a slight tilt; hover lifts and straightens it; the active stamp fills with its scene colour (#2f8fc0, #d9773a, #d65a32) and its icon presses in.
- Long reading (case studies, places, the quote) sits on a paper sheet (bg at 94% with a light blur, 22px radius) so it stays readable over the scenery.
