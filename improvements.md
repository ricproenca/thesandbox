# Improvements

## Friction for new visitors

1. Hide the placeholder projects on `/showcase` (or drop the student names and the "YEAR 2025/26" label) so they don't contradict the home page's "First projects coming soon".
2. Point every "Join the club" button at `/join` and add the when, where and who details there, instead of sending visitors straight to an external Microsoft Form in a new tab.
3. Rename or explain "Project Spark" where it appears (e.g. "Browse 44 project ideas") so newcomers know what it is.
4. Rename the "Sandbox" menu item to "Home", add Brand to the menu, highlight the current page, and make the mobile menu links at least 44px tall.

## Mobile layout

5. Shrink or hide the logo card on mobile so the home heading and "Join the club" button appear on the first screen.
6. Make the `/spark` filters sticky or collapsible and add a back-to-top link, since the page is about 18,800px tall on a phone.
7. Reduce the emoji-only banner at the top of each Spark card, which takes about 140px of every card.
8. Turn the "How students get unstuck" table into stacked cards on mobile so its third column stops wrapping onto 4–5 lines.
9. Remove the stray divider lines at the start of wrapped rows in the `/showcase` filter bar.
10. Give Spark's topic, level and language filters one consistent chip style and active colour.

## Readability

11. Widen the "A note for students & parents" text column on mobile and cap its line length at about 70 characters on desktop.
12. Replace the forced `<br>` line breaks in headings with `text-wrap: balance` so single words aren't left stranded on phones.
13. Raise the 10–11px uppercase labels and tech tags to at least 12px.
14. Increase the contrast of the white-at-35% stat labels on the dark `/showcase` header.
15. Replace `&star;` in `src/components/ProjectCard.tsx:42` with `★` so the featured badge stops showing a literal "&STAR;".

## Visual hierarchy

16. Remove the duplicate category badge above each Games/Web/etc. heading in the home page's "What can you build?" cards.
17. Move the AI note above the final "Join the club" band so the page ends on its call to action.

## Technical

18. Add `priority` (or `loading="eager"`) to the home logo image to fix the LCP console warning.
19. Add `.playwright-mcp/` to `.gitignore`, which may also stop the `/showcase` reload loop seen under `npm run dev`.
