# ScienceQuiz

A bilingual (Vietnamese / English) quiz app for children in grades 2–3.

- **Science** — 4 topics (living things, physical science, earth & space, scientific inquiry), 120 questions each, with SVG illustrations.
- **English (Cambridge KET/PET style)** — Present Simple, Present Continuous and Past Simple, 10 subtopics per tense, 100 questions per subtopic, plus mock tests with tense-contrast "trap" questions.
- Stars, daily streaks, a countdown timer, text-to-speech, and a wardrobe of princess ball gowns unlocked by progress.

Stack: Vite, React 19, TypeScript, Tailwind CSS 4, framer-motion, oxlint.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Typecheck and build to `dist/` |
| `npm run lint` | Run oxlint |
| `npm run check:data` | Validate the question banks (structure, counts, balance, duplicates) |
| `npm run check:dupes` | Duplicate detection only |
| `npm run ledger` | Regenerate `docs/question-ledger.md` |
| `npm run verify` | lint + check:data + tsc |

## Data layout

- Science questions: `src/data/questions/*.ts`
- English questions: `src/data/english/<tense>/<subtopic>.ts`, written with the `section()` helper
- Topics and subtopics: `src/data/topics.ts`; types: `src/types/quiz.ts`
- Illustrations: `src/components/illustrations/`
- Question ledger (generated): `docs/question-ledger.md`

See `CLAUDE.md` for the content rules and contributor workflow (also used by Claude Code skills and agents in `.claude/`).
