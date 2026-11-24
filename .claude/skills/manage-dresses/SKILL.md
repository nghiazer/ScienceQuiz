---
name: manage-dresses
description: Add, edit, reorder, retune or remove princess ball gowns and wardrobe rules in ScienceQuiz (src/data/dresses.ts, DressSvg, wardrobe unlock and play-time rules). Use for any change to dresses, silhouettes/patterns, unlock thresholds or wardrobe time rewards.
---

# Manage dresses and the wardrobe

Files: `src/data/dresses.ts` (definitions + unlock maths), `src/components/wardrobe/DressSvg.tsx` (renderer for `DressLook`), `DressCard.tsx`, `WardrobeScreen.tsx`, `Princess.tsx`, `src/utils/wardrobe.ts` (play-time bank, worn dress; localStorage key `princess-wardrobe-v1`).

## Edit an existing dress (Update)
Change fields of its `look` (colours as hex, `skirt` 1–3 colours, `pattern`, `sleeves`, `trim`, `layers` 0–3, `cape`, `wings`, `aura`, `tiara`, …) or its `name_vi/name_en`. Keep names unique, themed to the subject (Science: nature → ocean/sky/space; English: stories, letters, travel). Preview with `npm run dev` → Wardrobe. Locked dresses are not shown, so to see a high-index dress set `topicStats` in the browser's localStorage key `asmo-quiz-progress-v1` (≥ 10 × index correct answers for that subject) instead of editing code.

## Add / remove / reorder (Create / Delete)
Rules enforced by `check:data`:
- exactly `DRESSES_PER_SUBJECT` (30) per subject; `index` 1…30 in order; `id` = `sci-dress-NN` / `eng-dress-NN` (built by the `make` helper from the index);
- `tier` derives from index (1–10 → 1, 11–20 → 2, 21–30 → 3) and must never decrease — so **later dresses must look at least as grand**: tier 1 cute, 2 gorgeous, 3 royal ball gowns;
- names present in both languages.
To change the count, update `DRESSES_PER_SUBJECT` and the tier thresholds in `make` (the UI reads the constant, nothing is hard-coded), and discuss with the user first. Reordering changes which dress each milestone unlocks (users keep their count, so they just see different dresses).

## New visual feature in DressSvg
Add the union member (`Silhouette`, `DressPattern`, `Sleeves`, `Trim`, `Tiara`), then render it in `DressSvg.tsx` (the `HEM`/`SKIRT_PATH` tables per silhouette, `PatternDef` for patterns). SVG stays self-contained, ids via `useId()` (several dresses render at once), viewBox width centered at `CX = 120`. Use it in at least one dress, otherwise it is dead code.

## Rules/economy
- Unlock: every `CORRECT_PER_DRESS` (10) correct answers per subject (`unlockedCount`, derived from saved `topicStats`, so changes apply retroactively).
- Play time: every `STUDY_BLOCK_SECONDS` (15 min) of study earns `REWARD_SECONDS` (5 min) in `src/utils/wardrobe.ts`; timer logic in `src/utils/useStudyTimer.ts` (idle limit 3 min).
- Saved `worn` ids that no longer exist or are still locked fall back gracefully (`dressById` + unlocked check in `WardrobeScreen`), so removing/renaming ids is safe for saves; changing the **localStorage key** is not.

Finish with `/verify`.
