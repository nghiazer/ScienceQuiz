---
name: add-english-questions
description: Write or extend English (Cambridge KET/PET) grammar questions for a tense subtopic in ScienceQuiz using the section() helper. Use when adding, replacing or rewriting questions in src/data/english/<tense>/<subtopic>.ts, or when asked to improve English question quality.
---

# Add English questions

Target: `src/data/english/<tense>/<subtopic>.ts`. Argument: tense + subtopic (e.g. `past-simple negative`), and how many questions.

## Steps
1. **Read first.** Open the target file and the matching section of `docs/question-ledger.md` so you don't repeat sentences, verbs or names. Read `src/data/english/helpers.ts` for the `section()` signature.
2. **Check capacity.** Each subtopic is capped at 100 (`ENGLISH_PER_SUBTOPIC` in `scripts/lib/english-checks.ts`). If it is full, either replace weak items or raise the cap deliberately (and the tense cap) — say so in the summary.
3. **Write items** with `const q = section('<topic>', '<subtopic-id>')`:
   `q(difficulty, fmt, question, [correct, wrong1, wrong2, wrong3], [vi clue, vi rule], [en clue, en rule], { p?, trap?, ill? })`
   - Correct answer goes **first**; the helper rotates it across A–D and builds the id (`pa-negative-07`).
   - `fmt`: `s` sentence (one `___`), `d` dialogue (`A: "..."\nB: "... ___ ..."`), `n` notice/message (`p:` passage with one `___`, question text like `Complete the message.`).
   - Mix roughly 40% easy / 40% medium / 20% hard and all three formats where the subtopic allows it.
   - Mark tense-contrast items `trap: true` (aim for ≥12–15% of the batch).
4. **Quality rules** (the validator can't catch these):
   - Exactly one defensible answer; distractors are plausible learner errors from the same family (wrong tense/auxiliary/form), not nonsense and not also correct.
   - A2–B1 vocabulary, kid-friendly contexts, varied names, places, verbs. No Vietnamese in question/passage/options.
   - **Each clue must point at something in that very sentence** (a time word, an auxiliary, a context phrase). Never reuse a generic clue like "The sentence is about the past." across many items.
   - Rule line states the grammar rule in one short sentence (vi and en say the same thing). Each explanation ≤ 320 chars, keeping the `🔎 Dấu hiệu / 📘 Quy tắc` and `Clue / Rule` labels (the helper adds them).
   - Use the curly apostrophe `’` as the existing data does (`didn’t`).
5. **Verify**: run the `/verify` skill (`npm run verify`). Fix dupes by rewriting the sentence; only allowlist a pair with a real `reason`.
6. **Ledger**: `npm run ledger`, then commit data + ledger: `Add <Tense> <subtopic> questions (reaching 100)`.

## Optional review
For batches of 20+ items, launch the `question-reviewer` agent on the file before committing.
