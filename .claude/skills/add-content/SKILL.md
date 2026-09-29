---
name: add-content
description: Add, edit or remove a showcase project (student work on /showcase) or a Spark gallery idea (/spark). Use whenever the user wants to change site content such as a new student project, a new project idea, a new category or level, or fixing text in an entry.
---

# Add or edit site content

All content is hard-coded TypeScript in `src/lib/`. Never put content in components.

## Which file

| User says | File | Array | Type |
|---|---|---|---|
| student project, showcase, "X built Y" | `src/lib/projects.ts` | `PROJECTS` | `Project` |
| project idea, spark, gallery | `src/lib/spark.ts` | `SPARK_PROJECTS` | `SparkProject` |

Read the interface at the top of the file and 2–3 existing entries of the same category before writing. Copy their shape and tone exactly.

## Showcase entry (`Project`)

- `id`: next integer after the current max.
- `featured`: `false` unless the user asks.
- `cat` / `level`: must be one of the `Category` / `Level` union members.
- `bg`: reuse the `bg` of an existing entry in the same category.
- `student`: `"First L. · Year N"` (first name + initial only, never a full surname).
- `term` / `year`: e.g. `"Term 1"`, `"2025/26"`.
- `tech.primary` is languages/frameworks, `tech.secondary` is APIs/libraries. `techLabel` is a short `" · "`-joined summary.
- `desc`: 2–4 sentences in past tense, concrete, and naming one real struggle. `highlights`: exactly 3 items.
- Ask the user for anything you would otherwise have to invent (student name, year group, term). Don't make up student details.

## Spark entry (`SparkProject`)

- Entries are one object per line. Keep that format.
- `id`: must be unique. Newer ids are grouped by level: `1xx` newcomer, `2xx` beginner, `3xx` intermediate, `4xx` advanced, `5xx` academic (older single-digit ids are legacy). Grep the block and take the next free number.
- `color` + `bg`: reuse the pair from a sibling entry (same level for newcomer, same category otherwise).
- `short`: one punchy line. `hooks`: bullet ideas. `questions`: open prompts to get the student thinking.
- `tech.primary` drives the language filter (`projectMatchesLang`). To show up under Python/JavaScript/HTML, the language name must appear in `primary` or `alts[].primary`. If `primary` has no Python/JS/HTML/CSS, the entry counts as "no-code".

## Adding a new category or level (the sync trap)

`projects.ts` and `spark.ts` each define their own `Category`/`Level`, `CAT_COLORS` and `LEVEL_COLORS`. When one changes, update everything below:

1. The union type in the file.
2. `CAT_COLORS` / `LEVEL_COLORS` in **both** files (use the same `text` colour in both files; for `tag`, use the same rgba as `text` at 0.1–0.12 alpha, like the neighbouring entries).
3. Showcase only: `SVG_PATTERNS` (it's a `Record<Category,…>`, so tsc will flag a missing key) and `FILTERS` in `projects.ts`.
4. Spark only: the filter arrays in `src/components/SparkFilters.tsx`.
5. `src/lib/categories.ts` if it's a user-facing category on the home page.

## Counts in copy

The "44+ project ideas across 6 categories" text is hard-coded in `src/app/spark/page.tsx` (metadata, 3 places) and `src/components/CategoriesSection.tsx`. If the change pushes the Spark count or category count past what's claimed, update those too and tell the user.

## Verify

1. `npx tsc --noEmit`
2. Use the `check-pages` skill (or at least load `/showcase` or `/spark`) and open the new entry's modal.
