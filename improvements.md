# Improvements

## Open

- Add real photos of students building (with consent) once sessions start.

## Done

- Made the home hero navy with poster-style art (glowing ring, floating isometric cubes, circuit traces) in place of the logo box.
- Replaced the structural emoji with one outlined icon set (`Icon.tsx`), keeping emoji only in the project ideas.
- Added a `teal-ink` token (5.8:1 on white) for small teal text on light backgrounds.
- Kept the orange italic word only in page heroes and the final call to action.
- Alternated section backgrounds, with How it works now on navy.
- Gave each idea theme its own accent colour (orange, teal, green, violet, rose, sky).
- Turned the parents' note into four collapsible questions under "Good to know".
- Moved the AI note onto the `surface2` token with a line icon.
- Filled `/join` with the practical details and a poster.
- Added scroll fade-in for sections, hover lift for idea cards and a gentle float for the hero cubes, all off when the device asks to reduce motion.
- Put the QR code in the same row as the logos on the Brand page.
- Changed the About quote's signature to "Academic Year 2026/27".
- Replaced the large emoji Brand and Contact icons in the footer with text links and small outlined icons.
- Replaced the mid-session Spark slot with a Spark table during build time and added 10 minutes of pair feedback (build 10–70, pair feedback 70–80, commit 80–85, show and tell 85–90).
- Removed the `/showcase` page and its placeholder projects, and the home page's "Real projects" section.
- Replaced the `/spark` gallery with 12 starter ideas in 6 themes on the home page (`#ideas`), written as invitations rather than spec sheets.
- Renamed the menu to "Home" and "Project ideas" and redirected the old `/spark` and `/showcase` links home.
- Removed the duplicate category badges and the `&STAR;` bug along with the old components.
- Added Brand to the menu, highlighted the current page, and made the mobile menu links and toggle at least 44px tall.
- Set the session length to 90 minutes everywhere (hero stat, "Ninety minutes" copy, and a 0–90 min timeline).
- Added an end-of-year Showcase line to Practical info.
- Shrank the hero logo on phones so the heading and "Join the club" button fit on the first screen, and put the hero stats in a 2×2 grid there.
- Turned the "How students get unstuck" table into stacked cards on phones.
- Gave the parents' note the full width on phones and capped its line length at 68 characters on desktop.
- Replaced the forced line breaks in the About, How it works, Practical info and Brand headings with balanced wrapping.
- Raised every 10–11px label to 12px.
- Moved the AI note above the final "Join the club" band so the page ends on its call to action.
- Loaded the hero logo eagerly, which cleared the LCP console warning.
- Added `.playwright-mcp/` to `.gitignore`.
- Rewrote the `add-content` skill for `ideas.ts` and updated `port-section` and `check-pages` for the removed pages.
