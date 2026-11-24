# ScienceQuiz

Bilingual (vi / en / bilingual) quiz app for grade 2–3 children, built with Vite + React 19 + TypeScript + Tailwind 4 + framer-motion.
Two subjects: **Science** (ASMO-style, 4 topics × 120 questions, Vietnamese + English) and **English** (Cambridge KET/PET style, 3 tenses × 10 subtopics × 100 questions). Kids earn stars, streaks and princess ball gowns (`src/data/dresses.ts`).

## Commands
- `npm run dev` / `npm run build` (`tsc -b && vite build`) / `npm run lint` (oxlint)
- `npm run check:data` — structure, counts, answer-position balance, trap share, dupes, dresses. **Must pass before every commit.**
- `npm run check:dupes` — duplicate detection only (allowlist: `scripts/dupes-allowlist.json`, every entry needs a `reason`)
- `npm run ledger` — regenerates `docs/question-ledger.md` (generated; never hand-edit)
- `npm run verify` — lint + check:data + tsc in one go

## Layout
- `src/types/quiz.ts` — all types (`EnglishTopic`, `EnglishSubtopicId`, `IllustrationId`, `Progress`, …)
- `src/data/topics.ts` — `TOPICS`, `SUBTOPICS`, `SUBJECTS`, `SUBJECT_TOPICS`
- `src/data/questions/{living,physical,earth,inquiry}.ts` — Science (id `liv-/phy-/ear-/inq-NN`), bilingual objects
- `src/data/english/<tense>/<subtopic>.ts` → `<tense>/index.ts` → `src/data/englishQuestions.ts` → `src/data/questions/index.ts`; written with the `section()` helper in `src/data/english/helpers.ts`
- `src/components/illustrations/*` + `registry.tsx` — SVG figures; `Record<IllustrationId, …>` forces every id to be registered
- `src/utils/storage.ts` — progress in localStorage key `asmo-quiz-progress-v1`. New fields/topics must stay backward-compatible (`loadProgress` merges onto defaults) — do not bump the key casually, it wipes kids' progress.
- `scripts/` — validators (`check-data.ts`, `lib/english-checks.ts`, `lib/dupes.ts`) and ledger generator
- `vite.config.ts` splits question data into its own chunks by path (`src/data/english`, `src/data/questions`).

## Content rules (enforced by `check:data`)
- Science: `question/options/explanation` in both vi and en; exactly 4 distinct options per language; digits identical vi↔en; `subtopic` must belong to `topic`; exactly 120 per topic and ≥5 per subtopic.
- English: question, passage and options are English only (no Vietnamese characters); explanations carry Vietnamese too. Format `s` (sentence) and `d` (dialogue, `A:`/`B:` lines) need exactly one `___`; `n` (notice) needs `passage_en` and exactly one `___` in passage or question.
- Explanations: `🔎 Dấu hiệu: … \n📘 Quy tắc: …` (vi) and `🔎 Clue: … \n📘 Rule: …` (en), ≤ 320 chars each.
- Caps: 100 per English subtopic, 1000 per tense (all currently full — adding more means raising `ENGLISH_PER_SUBTOPIC/ENGLISH_PER_TOPIC` in `scripts/lib/english-checks.ts`, or replacing weak items instead). ≥12% of a tense's questions should be `trap: true` (tense-contrast items used in mock tests).
- Correct answer position must stay balanced (≤40% per slot); `section()` rotates A–D automatically, and the quiz shuffles again at play time.
- Quality bar beyond the checks: exactly one defensible answer, level-appropriate vocabulary (A2–B1), varied names/contexts, a *specific* clue in each explanation (never copy-pasted generic clues), distractors that are real tense errors rather than nonsense.

## Conventions
- Code comments and script output are in Vietnamese (match the existing style). Instruction files (this file, skills, agents) are in English.
- Commit style: one commit per subtopic batch, e.g. `Add Past Simple negative questions (reaching 100)`. Regenerate the ledger in the same or a follow-up commit.
- Don't commit `dist/`, `node_modules/` or `.claude/settings.local.json`.

## Skills (`.claude/skills`) and agents (`.claude/agents`)
- `/add-english-questions`, `/add-science-questions` — write question batches the right way
- `/add-english-tense` — checklist for registering a new tense end to end
- `/add-illustration` — new SVG figure + registration
- `/verify` — run all gates and fix failures
- Agent `question-writer` writes one subtopic batch (parallelizable); agent `question-reviewer` audits questions read-only and returns a fix list. Prefer running the reviewer after any large batch.
