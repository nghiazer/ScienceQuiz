---
name: add-illustration
description: Create a new SVG illustration component for ScienceQuiz questions and register it (Frame wrapper, IllustrationId, registry, validator sets). Use when a question needs a picture, or when asked to add or redraw a figure.
---

# Add an illustration

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
