---
name: manage-dresses
description: Add, edit, reorder, retune or remove princess ball gowns and wardrobe rules in ScienceQuiz (src/data/dresses/, DressSvg, wardrobe unlock and play-time rules). Use for any change to dresses, silhouettes/patterns, unlock thresholds or wardrobe time rewards.
---

# Manage dresses and the wardrobe

Files: `src/data/dresses/` — `types.ts` (types, `DRESSES_PER_SUBJECT`, `tierOf`, `sci`/`eng`/`mth` helpers), `science.ts`, `english.ts`, `math.ts` (the dress lists), `index.ts` (`DRESSES`, unlock maths);, `src/components/wardrobe/DressSvg.tsx` (renderer for `DressLook`; props `still` turns off animations, used by `DressCard`), `DressCard.tsx`, `WardrobeScreen.tsx`, `Princess.tsx`, `src/utils/wardrobe.ts` (play-time bank, worn dress; localStorage key `princess-wardrobe-v1`).

## Edit an existing dress (Update)
Change fields of its `look` (colours as hex, `skirt` 1–3 colours, `pattern`, `sleeves`, `trim`, `layers` 0–3, `cape`, `wings`, `aura`, `tiara`, …) or its `name_vi/name_en`. Keep names unique, themed to the subject (Science: nature → ocean/sky/space; English: stories, letters, travel). Preview with `npm run dev` → Wardrobe. Prefer `npm run gallery` for looks; to see a dress in the app set `topicStats` in the browser's localStorage key `asmo-quiz-progress-v1` (≥ 10 × index correct answers for that subject) instead of editing code. When rendering several SVGs outside one React root (e.g. `renderToStaticMarkup` in a loop) pass a distinct `identifierPrefix`, or their gradient ids collide.

## Add / remove / reorder (Create / Delete)
Rules enforced by `check:data`:
- exactly `DRESSES_PER_SUBJECT` (100) per subject; `index` 1…100 in order; `id` = `sci-dress-NN` / `eng-dress-NN` / `math-dress-NN` (built by the `sci`/`eng`/`mth` helper from the index; id 100 has three digits);
- `tier` derives from index via `tierOf` (1–10 → 1, 11–20 → 2, 21–40 → 3, 41–70 → 4, 71–100 → 5) and must never decrease — so **later dresses must look at least as grand**: 1 cute, 2 gorgeous, 3 royal, 4 starlight, 5 queen;
- tier 4–5 dresses need at least one royal feature (`tiara`/`cape`/`wings`/`train`/`aura`);
- names unique and present in both languages; no two dresses with an identical `look`; every colour a 6-digit hex;
- **maths dresses are the premium line**: each uses at least one premium-only feature (silhouette `petal`/`bustle`/`crystal`, pattern `diamonds`/`hexagons`/`numbers`/`filigree`/`crystals`, tiara `crown`, `veil`, `scepter`, `corset`, `hemJewels`, `petticoat`) and has `trim`/`necklace`/`gems`; tier ≥3 has a royal feature and tier 5 at least three.
Themes: Science 31–100 = garden/insects, weather & seasons, ocean, earth & gems, sky, planets, cosmic queens; English 31–100 = fairy tales, world travel, music & dance, cakes & tea, festivals, palaces & jewels, story queens (generic motifs only — no copyrighted characters); Maths = numbers, shapes, crystals, origami, geometry queens and goddesses.
To change the count, update `DRESSES_PER_SUBJECT` and `tierOf`, and discuss with the user first. Reordering changes which dress each milestone unlocks (users keep their count, so they just see different dresses); ids 1–30 of each subject must keep their position because kids may have worn them.
Preview all dresses with `npm run gallery` (optionally `-- --sub=science --from=31 --to=60 --big`) → open `gallery/dresses.html` (git-ignored).

## New visual feature in DressSvg
Add the union member (`Silhouette`, `DressPattern`, `Sleeves`, `Trim`, `Tiara`, `Neckline`, `Hair`) in `types.ts`, then render it in `DressSvg.tsx` (the `HEM`/`SKIRT_PATH`/`FOLDS` tables per silhouette, `NECK_TOP`, `PatternDef` for patterns, `HemTrim` for trims). Use only gradients and paths — no SVG filters, up to 100 cards render at once. SVG stays self-contained, ids via `useId()` (several dresses render at once), viewBox width centered at `CX = 120`. Use it in at least one dress, otherwise it is dead code.

## Rules/economy
- **Shared wardrobe**: `WARDROBE` in `src/data/dresses/index.ts` holds all 300 dresses sorted by tier, then `index`, then subject (science, english, maths interleaved); `orderOf(d)` is its 1…300 position shown on cards.
- Unlock: every `CORRECT_PER_DRESS` (10) correct answers **in a row within one subject** unlock the next dress in `WARDROBE` order. Each subject keeps its own run in `Progress.correctRun` (kept across quizzes; a wrong or unanswered question resets that subject's run to 0; reaching 10 unlocks one dress and the run restarts at 0). `recordQuizResult` applies this per answer and appends to `Progress.unlockedDresses`, the stored list of unlocked ids. Nothing is derived from `topicStats` any more, so changing the rule is NOT retroactive.
- Old saves: `loadProgress` fills `unlockedDresses` once from the earlier rules — `keptDresses` (per-subject wardrobes, `legacyUnlockedIds`) topped up by the pooled 10-correct rule (`pooledUnlockedIds`) — so kids keep every dress they had.
- The quiz screen shows the live run (`QuizConfig.dressRunStart` + answers so far); home and wardrobe show "đúng liên tiếp N câu nữa" for the current subject (`nextDressIn(p, subject)`).
- One worn dress for all subjects: `WardrobeState.wornId` (old saves with per-subject `worn` are read once as a fallback).
- Play time: every `STUDY_BLOCK_SECONDS` (15 min) of study earns `REWARD_SECONDS` (5 min) in `src/utils/wardrobe.ts`; timer logic in `src/utils/useStudyTimer.ts` (idle limit 3 min).
- Saved `worn` ids that no longer exist or are still locked fall back gracefully (`dressById` + unlocked check in `WardrobeScreen`), so removing/renaming ids is safe for saves; changing the **localStorage key** is not.

Finish with `/verify`.
