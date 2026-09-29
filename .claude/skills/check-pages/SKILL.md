---
name: check-pages
description: Visually check the site in a real browser by loading every route at mobile and desktop widths, taking screenshots and collecting console errors. Use after UI changes, before committing, or when the user asks to check, verify, screenshot or "see" the site. This project has no tests, so this is the regression check.
---

# Check pages in the browser

Routes: `/`, `/brand`, `/join`.

## 1. Dev server

Check `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000`. If it isn't returning 200, start `npm run dev` in the background, wait until it serves, and remember to stop it at the end. Don't stop a server the user started.

## 2. Each route (Playwright MCP)

For every route, or only the routes the change touched if the user said so:

1. `browser_resize` to **1440×900**, `browser_navigate` to `http://localhost:3000<route>`, then `browser_take_screenshot` (full page).
2. `browser_resize` to **390×844** (phone) and take another screenshot.
3. `browser_console_messages` and record errors and warnings. Ignore HMR/Fast Refresh noise.

Look at each screenshot. Look for horizontal overflow on mobile, overlapping or clipped text, broken or missing images, empty sections and unstyled content.

## 3. Interactions (only where the change touched them)

- `/`: click "See project ideas" and the "Project ideas" nav link, and confirm both land on the `#ideas` section below the sticky nav.
- `/brand`: open a wallpaper/poster preview, use the arrow keys to move to the next one, then press Escape.
- Mobile: open and close the Navbar menu, and check that the current page is highlighted.

## 4. Report

Keep the report short: one line per route (✅, or the problem with a screenshot reference), plus any console errors verbatim. Don't fix anything unless the user asked. Report and offer.
