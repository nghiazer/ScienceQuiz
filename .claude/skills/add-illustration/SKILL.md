---
name: add-illustration
description: Create, redraw, rename or delete SVG illustration components for ScienceQuiz questions and keep them registered (Frame wrapper, IllustrationId, registry, validator sets). Use when a question needs a picture, or when asked to add, change, rename or remove a figure.
---

# Add / update / delete an illustration

Update, rename and delete notes are at the end; the numbered steps are for creating.

Reference implementations: `src/components/illustrations/Compass.tsx` (simple), `FoodChain.tsx`, `TenseTimeline.tsx` (English).

## Steps
1. **Component** `src/components/illustrations/<Name>.tsx`, default export, no props, wrapping everything in `<Frame label="…">`:
   - `label` is bilingual: `"Vietnamese description / English description"` (it is the accessible name).
   - Default `viewBox` is `0 0 400 240`; keep content inside it and legible when scaled to a phone width: min font-size ~16–18, stroke width ≥2, flat friendly colours, high contrast. No external images or fonts, no `<script>`.
   - Any number or label drawn in the figure must match the question text that uses it (e.g. "number 2" must be visibly 2).
2. **Id**: add a kebab-case literal to `IllustrationId` in `src/types/quiz.ts` (English-only figures use the `en-` prefix).
3. **Register** in `src/components/illustrations/registry.tsx`: import + entry in `ILLUSTRATIONS` (TypeScript fails the build if an id lacks a component).
4. **English-only figure?** also add the id to the `ENGLISH_ILLUS` set in `scripts/check-data.ts`, otherwise it is reported as an unused Science figure.
5. **Attach** to a question: `illustrationId: '<id>'` (Science object) or `{ ill: '<id>' }` as last argument of a `section()` item (English).
6. **Check visually**: `npm run dev`, open a quiz containing the question at desktop width and at ~375px wide. Then run `/verify`.

## Update, rename, delete
- **Redraw**: edit the component only; keep the same visual facts the questions rely on (numbers, letters A–D, arrow directions, labels). Find the questions that use it with grep: `illustrationId: '<id>'` (Science) and `ill: '<id>'` (English), then re-read each against the new picture.
- **Rename the id**: change the `IllustrationId` literal, the `registry.tsx` key, `ENGLISH_ILLUS` in `scripts/check-data.ts` (if listed) and every `illustrationId`/`ill` reference (grep for the old id). `tsc` and `check:data` flag leftovers.
- **Delete**: first detach it from all questions (`/edit-question`), then remove the file, the import + registry entry, the union member and any `ENGLISH_ILLUS` entry. Never leave a registered-but-unused figure: `check:data` lists unused Science figures under "chưa dùng".
- Parallel or heavy drawing work → the `illustrator` agent.
