---
name: add-content
description: Add, edit or remove a starter project idea (the "What can you build?" section on the home page) or change other hard-coded site copy such as the session timeline, pillars or practical info. Use whenever the user wants a new project idea, a new theme, or to fix text in an entry.
---

# Add or edit site content

All content is hard-coded TypeScript in `src/lib/`. Never put content in components.

## Which file

| User says | File | Export |
|---|---|---|
| project idea, "something students could build", theme | `src/lib/ideas.ts` | `THEMES` |
| session plan, timeline, "what happens in a session" | `src/lib/timeline.ts` | `TIMELINE_STEPS` |
| what the club is about, pillars | `src/lib/pillars.ts` | `PILLARS` |
| when / where / who / what to bring, registration link | `src/lib/practical.ts` | `PRACTICAL_ITEMS`, `REGISTER_URL` |

Read the file and 2–3 neighbouring entries before writing. Copy their shape and tone.

## Project ideas (`ideas.ts`)

- Ideas are grouped into `THEMES`, and each theme holds 2 ideas. Keep themes even: the home page lays them out as equal cards, so one theme with 4 ideas looks lopsided.
- `title`: a hook written for a 12–17 year old, e.g. "A plant that asks for water", not "Soil moisture monitor".
- `hook`: one sentence that says what they would make and why it's fun. Avoid jargon and library names.
- `level`: one of the `Level` union (`"First project"`, `"Some experience"`, `"Stretch goal"`). Aim for a mix across the list.
- `accent`: the theme's colour (`orange`, `teal`, `green`, `violet`, `rose`, `sky`). Give a new theme a colour no other theme uses.
- `tools`: one short tag (`Python`, `JavaScript`, `Web`, `Hardware`, `No code to start`).
- Only suggest things that need no purchase, or hardware the school has. The parents' note promises students never have to buy anything.
- The hero stats count ideas and themes automatically (`IDEA_COUNT`, `THEMES.length`), so there is no copy to update by hand.

## Session timeline (`timeline.ts`)

A session is 90 minutes (Mondays 11:30–13:00). Step times must add up to 0–90 min. "90 min" also appears in `HeroSection.tsx` stats and "Ninety minutes" in `HowItWorksSection.tsx`. Update those if the length changes. The session times are also drawn into the Brand page infographic and the posters; re-render them from `design/` (see the READMEs there) and tell the user.

## Verify

1. `npx tsc --noEmit`
2. Use the `check-pages` skill on `/` at phone width and look at the changed section.
