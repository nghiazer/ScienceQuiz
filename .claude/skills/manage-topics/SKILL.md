---
name: manage-topics
description: Add, rename, restyle, reorder or remove topics and subtopics in ScienceQuiz (Science subtopics/topics, English subtopics/tenses, subject metadata). Use when the topic structure changes, not when only adding questions or when adding a brand-new tense (that is /add-english-tense).
---

# Manage topics and subtopics

Source of truth: `src/data/topics.ts` (`TOPICS`, `SUBTOPICS`, `SUBJECTS`, `SUBJECT_TOPICS`, `TOPIC_ORDER`) and the id unions in `src/types/quiz.ts`.

## Subtopic
- **Add (Science)**: add the literal to `ScienceSubtopicId`, an entry in `SUBTOPICS` (`{ topic, vi, en }`), then ≥5 questions (`/add-science-questions`). Topic totals stay at 120, so net-new subtopics usually mean moving questions from another subtopic (edit their `subtopic` field) — do that with `/edit-question`.
- **Add (English)**: literal in `EnglishSubtopicId` (prefix of its tense), entry in `SUBTOPICS`, new file in `src/data/english/<tense>/`, export spread into that tense's `index.ts`. It becomes the 11th subtopic: the 100/subtopic and 1000/tense caps in `scripts/lib/english-checks.ts` must be revisited.
- **Rename**: only `vi`/`en` labels in `SUBTOPICS` — free. Renaming the **id** touches the type union, every question's `subtopic`, and for English the `section('<tense>','<id>')` call (ids of questions derive from it, so saved `seenIds` for them are lost — acceptable but mention it).
- **Remove**: move/delete its questions first, then remove from `SUBTOPICS` and the union. Build (`tsc`) points at leftovers.

## Topic (Science) / tense (English)
- **Restyle/rename**: edit the `TOPICS[...]` entry (name, desc, emoji, Tailwind classes, `hex`). Tailwind classes must be literal strings in source (no string building) or they are purged. Keep colour hues distinct across topics.
- **Reorder**: `TOPIC_ORDER` (Science) / `SUBJECT_TOPICS.english` (English) / `SUBJECT_TOPICS.math` (Maths).
- **Maths subtopics**: literal in `MathSubtopicId` (prefix of its area: `log-`, `ari-`, `num-`, `geo-`, `com-`), entry in `SUBTOPICS`, new file in `src/data/math/<area>/` spread into `<area>/index.ts`, 40 questions via `/add-math-questions`. Adding a 6th subtopic to an area pushes it over the 200 cap — raise `MATH_PER_TOPIC` in `scripts/lib/math-checks.ts` deliberately.
- **Remove a topic or tense** — read the consequences first:
  - Dress progress is derived from `topicStats` of topics listed in `SUBJECT_TOPICS[subject]` (`correctFor` in `src/data/dresses.ts`). Dropping a topic lowers `correctFor`, so **kids can lose unlocked dresses**. Prefer hiding over deleting, or warn the user.
  - Leave the key in `defaultProgress().topicStats` (`src/utils/storage.ts`) so saved data still loads; remove only after deciding data loss is OK.
  - Mock tests hard-code structure: Science `buildMockTest` uses a 3+4+4+4 slot plan for exactly 4 topics; `buildEnglishMockTest` uses `topics[0..2]` and `ENGLISH_MOCK_SIZE / topics.length` (15 questions over 3 tenses); `buildMathMockTest` takes 2 easy + 2 medium + 1 hard from every area in `SUBJECT_TOPICS.math` (25 for 5 areas). Update `src/utils/quiz.ts` when the number of topics/tenses changes, and the hard-coded copy "cả 3 thì" / "cả 4 chủ đề" in `src/components/HomeScreen.tsx` (~line 183).
- **Subjects** (adding e.g. a new school subject) are a big change: `Subject` type, `SUBJECTS`, `SUBJECT_TOPICS`, `DRESSES` (100 per subject), `SubjectSwitcher`/`WardrobeScreen` tab lists, `MOCK_SIZE_BY_SUBJECT`/`MOCK_MINUTES_BY_SUBJECT`, `Progress`, `LanguageContext` keys, `defaultProgress`, `check-data`, ledger. Plan it with the user before coding.

Always finish with `/verify` and `npm run ledger`.
