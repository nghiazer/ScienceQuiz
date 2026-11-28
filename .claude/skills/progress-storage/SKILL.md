---
name: progress-storage
description: Change what ScienceQuiz saves in localStorage (Progress fields, topicStats, seenIds, wardrobe state, preference keys) without wiping children's saved progress. Use whenever a type in Progress/WardrobeState changes, a topic is added/removed, or a storage key is touched.
---

# Progress and storage changes (data migration)

Saved data lives on kids' devices; losing it loses stars, streaks and unlocked dresses.

Keys: `asmo-quiz-progress-v1` (`Progress`, `src/utils/storage.ts`), `princess-wardrobe-v1` (`WardrobeState`, `src/utils/wardrobe.ts`), `asmo-quiz-subject` (`science|english|math`), `asmo-quiz-lang`, `asmo-quiz-lang-english`, `asmo-quiz-lang-math`.

## Existing migration fields
- `Progress.keptDresses`: dresses unlocked under the old per-subject wardrobe; `loadProgress` fills it from `legacyUnlockedIds` when an old save lacks it. Keep it forever.
- `WardrobeState.wornId`: replaced the per-subject `worn` record; `load()` falls back to the first id in an old `worn`.
- `Progress.unlockedDresses` (stored list of unlocked dress ids) and `Progress.correctRun` (per-subject run of consecutive correct answers): `loadProgress` fills `unlockedDresses` from `pooledUnlockedIds` when an old save lacks it, and validates each run as a non-negative integer. Keep both forever.
- Parent-dashboard data, written by `recordQuizResult` on every finished quiz and validated field by field in `loadProgress` (old saves get empty values): `Progress.history` (`SessionRecord[]`, newest last, cap `HISTORY_CAP` = 300; duration capped at `MAX_SESSION_SEC` = 3600, measured from `QuizConfig.startedAt`), `Progress.subtopicStats` (cumulative per subtopic id), `Progress.difficultyStats` (cumulative per subject and difficulty) and `Progress.recentMistakes` (newest first, cap `MISTAKES_CAP` = 30, no duplicate ids). `recentMistakes[].selectedIndex` is stored in the ORIGINAL option order of the bank question (`originalIndex` in `src/utils/quiz.ts` maps it back from the shuffled order shown in the quiz), so the dashboard can show the child's answer. Keep all four forever; the parent screen (`src/components/parent/`) reads them.
- Accessory shop: `Progress.coinsSpent` (non-negative integer, default 0; anything else loads as 0) and `Progress.ownedAccessories` (bought item ids; `loadProgress` keeps only known ids from `itemById`, without duplicates). Coins earned are NOT stored — the balance is `totalCorrect − coinsSpent`, so old saves start with every correct answer they ever made. `WardrobeState.equipped` (`Partial<Record<AccessorySlot, string>>`, default `{}`) keeps only known ids in their own slot; the UI ignores equipped ids that are not owned. Keep all three forever.

## Add a field
1. Add it to the type (`src/types/quiz.ts` for `Progress`, `WardrobeState` in `wardrobe.ts`).
2. Give it a default in `defaultProgress()` / `initial()`.
3. Make loading tolerant: `loadProgress` spreads `...base, ...parsed`, so a missing field gets the default — but nested objects need an explicit merge (see `topicStats`), and arrays/numbers from old data must be validated (`Array.isArray`, `Number.isFinite`).
4. Update writers (`recordQuizResult`) and readers. Derived values (`unlockedCount`, `currentStreak`) must tolerate old data.

## Add/remove a topic key
Add `'<topic>': emptyStats()` to `defaultProgress().topicStats` (the `Record<Topic, …>` type forces it). Never delete a key from saved data in code; stale keys are harmless. Removing a topic from `SUBJECT_TOPICS` changes derived dress counts — see `/manage-topics`.

## Rename/remove a field or change meaning
Do not just change it. Either keep reading the old field as a fallback in `loadProgress`, or write an explicit migration (read old → write new once). Only bump the key (`…-v2`) as a last resort and with the user's explicit approval, and then migrate v1 → v2 on first load rather than starting empty.

## Test (required)
Run with `npx tsx -e` against a fake store — no browser needed:
- old payload (copy a real JSON from before your change, e.g. without the new field) → `loadProgress()` returns defaults for the new field and keeps stars/streak/topicStats;
- empty storage, corrupted JSON (`"{"`), and `localStorage` throwing → `defaultProgress()` without crashing;
- `recordQuizResult` on the migrated object (pure function: pass `today` explicitly).
Then `/verify`.
