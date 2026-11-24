---
name: add-english-tense
description: Register a brand-new English tense (e.g. Future Simple, Present Perfect, Past Continuous) in ScienceQuiz end to end — types, topic metadata, subtopics, progress storage, data folder and validators. Use before writing any questions for a tense that does not exist yet.
---

# Add an English tense

Existing tenses: `present-simple` (prefix `ps-`), `present-continuous` (`pc-`), `past-simple` (`pa-`). Choose a unique 2-letter prefix for the new one.

## Checklist (do all, in this order)
1. `src/types/quiz.ts`
   - Add the tense to `EnglishTopic`.
   - Add its 10 subtopic ids (`xx-…`) to `EnglishSubtopicId`.
   - Add timeline illustration ids to `IllustrationId` only if you create figures (see `/add-illustration`).
2. `src/data/topics.ts`
   - Add an entry to `TOPICS` (name_vi/en, desc_vi/en, emoji, and a **new** Tailwind colour set: gradient/soft/text/ring/hex — pick a hue not used by the other tenses).
   - Add 10 entries to `SUBTOPICS` (`{ topic, vi, en }`).
   - Append the tense to `SUBJECT_TOPICS.english`.
3. `src/utils/storage.ts` — add `'<tense>': emptyStats()` to `defaultProgress().topicStats`. Keep `loadProgress` merging so existing saved progress still loads; do not change `KEY`.
4. Data folder `src/data/english/<tense>/`: one file per subtopic exporting an array (start as `[]` or a first batch), plus `index.ts` that spreads them into `<TENSE>_QUESTIONS` (copy the shape of `src/data/english/past-simple/index.ts`).
5. `src/data/englishQuestions.ts` — spread `<TENSE>_QUESTIONS` and update the doc comment (tense count).
6. Validators: `scripts/lib/english-checks.ts` sums are per tense and adapt automatically; `scripts/check-data.ts` prints per-tense lines automatically. Confirm nothing else hard-codes "3 tenses" (`grep -rn "past-simple\|3000\|3 thì" src scripts vite.config.ts`, update the vite.config.ts chunk comment if it mentions counts). Mock tests: `buildEnglishMockTest` in `src/utils/quiz.ts` is written for exactly 3 tenses — trap questions are taken from `topics[0..2]` (`TRAPS = 5`) and each tense gets `ENGLISH_MOCK_SIZE / topics.length` questions, which is 3.75 with 4 tenses (it would produce 16 questions and give the 4th tense no guaranteed trap). Decide the new mock shape with the user (e.g. size 16 with 4 each, or 20), then update `ENGLISH_MOCK_SIZE`, the trap-slot logic and the doc comment, and fix the hard-coded copy "cả 3 thì" / "all 3 tenses" at `src/components/HomeScreen.tsx` (~line 183, mock-test description). Also check `src/data/dresses.ts`: English dress progress sums `topicStats` of every tense, so more tenses mean dresses unlock sooner — acceptable, but tell the user.
7. UI: confirm `HomeScreen`/topic cards render the new topic (they iterate `SUBJECT_TOPICS`), and run `npm run dev` to eyeball it.
8. Fill the subtopics in batches with `/add-english-questions` (or the `question-writer` agent, one per subtopic, in parallel). The check reports `tiến độ` lines until each subtopic reaches 100.
9. `/verify`, `npm run ledger`, commit in small steps (scaffold first, then one commit per subtopic).

## Typical 10-subtopic template
forms/time words → regular → irregular (2 files if large) → negatives → questions → contrast with a neighbouring tense (mark all `trap`) → dialogues → notices/messages. Adjust to the grammar of the new tense.
