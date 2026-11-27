# ScienceQuiz

Bilingual (vi / en / bilingual) quiz app for grade 2–3 children, built with Vite + React 19 + TypeScript + Tailwind 4 + framer-motion.
Three subjects: **Science** (ASMO-style, 4 topics × 120 questions, Vietnamese + English), **English** (Cambridge KET/PET style, 3 tenses × 10 subtopics × 100 questions) and **Maths** (TIMO olympiad style, 5 areas × 5 subtopics × 40 questions = 1000, Vietnamese + English). Kids earn stars, streaks and princess ball gowns (`src/data/dresses/`, 100 designed per subject in 5 tiers; all 300 live in **one shared wardrobe** — `WARDROBE`, ordered by tier with the three subjects interleaved — and every 10 correct answers in any subject unlock the next one; the maths line is the premium one).

## Commands
- `npm run dev` / `npm run build` (`tsc -b && vite build`) / `npm run lint` (oxlint)
- `npm run check:data` — structure, counts, answer-position balance, trap share, dupes, dresses. **Must pass before every commit.**
- `npm run check:dupes` — duplicate detection only (allowlist: `scripts/dupes-allowlist.json`, every entry needs a `reason`)
- `npm run gallery` — renders every dress to `gallery/dresses.html` (git-ignored) for visual review
- `npm run ledger` — regenerates `docs/question-ledger.md` (generated; never hand-edit)
- `npm run verify` — lint + check:data + tsc in one go
- `npm run q -- --sub=pa-negative --diff=hard --full` — look up questions (filters: `--id --topic --sub --diff --trap --text --limit --full`); prints the source file

## Layout
- `src/types/quiz.ts` — all types (`EnglishTopic`, `EnglishSubtopicId`, `IllustrationId`, `Progress`, …)
- `src/data/topics.ts` — `TOPICS`, `SUBTOPICS`, `SUBJECTS`, `SUBJECT_TOPICS`
- `src/data/questions/{living,physical,earth,inquiry}.ts` — Science (id `liv-/phy-/ear-/inq-NN`), bilingual objects
- `src/data/english/<tense>/<subtopic>.ts` → `<tense>/index.ts` → `src/data/englishQuestions.ts` → `src/data/questions/index.ts`; written with the `section()` helper in `src/data/english/helpers.ts`
- `src/data/math/<area>/<subtopic>.ts` → `<area>/index.ts` → `src/data/mathQuestions.ts` → `src/data/questions/index.ts`; written with `mathSection()` in `src/data/math/helpers.ts` (ids `<subtopic>-NN`, positional)
- `src/components/illustrations/*` + `registry.tsx` — SVG figures; `Record<IllustrationId, …>` forces every id to be registered
- `src/utils/storage.ts` — progress in localStorage key `asmo-quiz-progress-v1`. New fields/topics must stay backward-compatible (`loadProgress` merges onto defaults) — do not bump the key casually, it wipes kids' progress.
- `scripts/` — validators (`check-data.ts`, `lib/english-checks.ts`, `lib/math-checks.ts`, `lib/dupes.ts`) and ledger generator
- `vite.config.ts` splits question data into its own chunks by path (`src/data/english`, `src/data/questions`, `src/data/math`).

## Content rules (enforced by `check:data`)
- Science: `question/options/explanation` in both vi and en; exactly 4 distinct options per language; digits identical vi↔en; `subtopic` must belong to `topic`; exactly 120 per topic and ≥5 per subtopic.
- English: question, passage and options are English only (no Vietnamese characters); explanations carry Vietnamese too. Format `s` (sentence) and `d` (dialogue, `A:`/`B:` lines) need exactly one `___`; `n` (notice) needs `passage_en` and exactly one `___` in passage or question.
- Explanations: `🔎 Dấu hiệu: … \n📘 Quy tắc: …` (vi) and `🔎 Clue: … \n📘 Rule: …` (en), ≤ 320 chars each.
- Maths: vi + en everywhere; digits identical vi↔en in the same order (weekdays/months as words in both); explanations `🧠 Ý tưởng / ✏️ Lời giải` and `🧠 Idea / ✏️ Solution`, ≤ 360 chars, solution must contain the answer number; caps 40 per subtopic / 200 per area; per full area ≥15% hard and ≥25% easy. All-number options are sorted ascending at play time.
- Caps: 100 per English subtopic, 1000 per tense (all currently full — adding more means raising `ENGLISH_PER_SUBTOPIC/ENGLISH_PER_TOPIC` in `scripts/lib/english-checks.ts`, or replacing weak items instead). ≥12% of a tense's questions should be `trap: true` (tense-contrast items used in mock tests).
- Correct answer position must stay balanced (≤40% per slot); `section()` rotates A–D automatically, and the quiz shuffles again at play time.
- Quality bar beyond the checks: exactly one defensible answer, level-appropriate vocabulary (A2–B1), varied names/contexts, a *specific* clue in each explanation (never copy-pasted generic clues), distractors that are real tense errors rather than nonsense.

## Conventions
- Code comments and script output are in Vietnamese (match the existing style). Instruction files (this file, skills, agents) are in English.
- Commit style: one commit per subtopic batch, e.g. `Add Past Simple negative questions (reaching 100)`. Regenerate the ledger in the same or a follow-up commit.
- Don't commit `dist/`, `node_modules/` or `.claude/settings.local.json`.

## Skills (`.claude/skills`) and agents (`.claude/agents`)
CRUD map — pick the skill by what you are doing:

| Area | Create | Read | Update / Delete |
| --- | --- | --- | --- |
| Questions | `/add-english-questions`, `/add-science-questions`, `/add-math-questions` | `/find-questions` | `/edit-question` |
| Topics, subtopics, tenses | `/add-english-tense`, `/manage-topics` | `src/data/topics.ts` | `/manage-topics` |
| Illustrations | `/add-illustration` | `registry.tsx`, `check:data` summary | `/add-illustration` (update/rename/delete section) |
| Dresses & wardrobe | `/manage-dresses` | `src/data/dresses/`, `npm run gallery` | `/manage-dresses` |
| Screens, gameplay, UI | `/ui-feature` | — | `/ui-feature` |
| Saved data (localStorage) | `/progress-storage` | — | `/progress-storage` |
| Quality gates | `/verify` (run after every change) | | |

Agents: `question-writer` (new batch, one subtopic), `question-editor` (apply fixes to existing items, one file each), `question-reviewer` (read-only audit → fix list; run after any large batch, then hand the list to the editor), `illustrator` (SVG figures), `feature-developer` (multi-file UI/gameplay/wardrobe/storage work).

Gotchas worth remembering: English and Maths question ids are positional (inserting/deleting mid-file renumbers the rest — edit in place or append); removing a topic lowers derived dress unlocks; the mock-test builders and `HomeScreen` copy assume 3 tenses / 4 science topics / 5 maths areas (maths mock = 25 questions, 5 per area, 90 min — `MOCK_SIZE_BY_SUBJECT`, `MOCK_MINUTES_BY_SUBJECT` in `src/utils/quiz.ts`); never change `asmo-quiz-progress-v1` without a migration; `Progress.keptDresses` holds the dresses unlocked under the old per-subject rule (filled once by `loadProgress` for old saves) — never drop it, or kids lose dresses.
