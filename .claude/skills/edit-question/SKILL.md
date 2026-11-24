---
name: edit-question
description: Safely update or delete existing ScienceQuiz questions (fix a wrong answer, reword, change difficulty, add/remove an illustration, replace or remove an item) without breaking ids, caps, answer balance or the dupes allowlist. Use whenever existing questions are modified, replaced or removed, including applying a question-reviewer fix list.
---

# Edit or delete a question (Update / Delete)

1. **Locate** it with `/find-questions` (gives file + current text). Read the surrounding items for tone.
2. **Know the id rules before touching anything**
   - **English ids are positional.** `section()` numbers items by call order (`pa-negative-07` = 7th call in that file). **Editing in place is safe. Inserting or deleting in the middle renumbers every later item**, which shifts ids referenced by `scripts/dupes-allowlist.json`, the ledger and kids' saved `seenIds` (only affects "unseen first" ordering, not scores). So: to *replace* an item, rewrite the same call in the same position; to *add*, append at the end; avoid pure deletes.
   - **Counts are capped, not just minimum.** English subtopic = 100, tense = 1000, each Science topic = 120 (`check:data` errors when over). Deleting leaves a gap that shows as `tiến độ`; the usual right move is delete + write a better replacement in the same slot.
   - **Science ids are literal** (`liv-37`). Deleting leaves a gap in numbering, which is fine; never reuse a deleted id for a different concept if it can be avoided (replace the content under the same id only when the new question tests the same subtopic).
3. **Make the change**
   - Answer fixes: for `section()` items the correct answer must stay first in the options array; helper re-rotates it. For Science set both `options_vi/en` order and `correctIndex` consistently.
   - Keep vi/en meaning and digits identical (Science); keep explanations ≤ 320 chars with `🔎/📘` (English) labels.
   - Changing `difficulty` shifts the 40/40/20 mix used by mock tests; keep batch proportions roughly intact.
   - Changing `trap` — the tense needs ≥12% trap items (`check:data`).
   - Changing a subtopic: it must belong to the question's `topic` in `src/data/topics.ts`.
   - Dropping `illustrationId`/`ill` is fine; if it was the last use of a figure, `check:data` lists it under "chưa dùng" (decide: reuse or `/add-illustration` delete).
4. **Allowlist**: if a deleted/changed question appears in `scripts/dupes-allowlist.json`, update or remove that entry.
5. Run `/verify`, then `npm run ledger`. Commit message style: `Fix <subtopic> questions (<what>)` or `Replace weak <subtopic> questions`.

Bulk fixes (≥10 items, e.g. from `question-reviewer`) → hand them to the `question-editor` agent.
