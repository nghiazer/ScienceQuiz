---
name: ui-feature
description: Add, change or remove UI and gameplay features in ScienceQuiz (screens, components, quiz modes, scoring, timer, sounds, language/subject switching, animations). Use for any React/Tailwind change in src/components, src/App.tsx, src/context or src/utils that is not just question data.
---

# UI and gameplay features

## Architecture (read before editing)
- `src/App.tsx` is a tiny state machine: `Screen = home | wardrobe | parent | quiz | result`; `progress` state is loaded once (`loadProgress`) and updated via `recordQuizResult` in `finish`. New screen → extend the `Screen` union, add a render branch, a `go…` handler with `window.scrollTo({ top: 0 })`, and an entry point (Header/Home/Result). Screens that are not on the home page are lazy chunks: register them in `src/screens.ts` (`lazyScreen(() => import(…))`, add to `preloadScreens`) and import them from there, not directly.
- Question banks are loaded per subject on demand (`src/data/questionBank.ts`: `loadBank`, `useBank`, `useBanksReady`, `bankOf`, `questionById`) — never import `src/data/questions` (index), `englishQuestions` or `mathQuestions` from app code: that pulls ~1.9 MB of JS into the first load. Topic/subject metadata comes from `src/data/topics.ts`. If a bank is not loaded yet, wait for it behind `LoadingOverlay` (see `withBank` in `App.tsx`).
- Quiz construction: `src/utils/quiz.ts` (`buildTopicQuiz(bank, topic, seen)`, `buildMockFor(subject, bank, seen)`, `shuffleOptions`, `findMissed`; sizes `TOPIC_SESSION_SIZE`, `MOCK_SIZE`…). Test with `npx tsx -e` after `await loadBank('science')`. Scoring and unlocking: `src/utils/storage.ts` (`computeStars`, `recordQuizResult`). Both are pure functions — keep them pure and testable with `npx tsx -e`.
- Language: `LanguageContext` (`vi|en|bi`; English subject only uses `vi|bi`, English text itself is never translated; Science and Maths are fully bilingual) and `SubjectContext`; render bilingual strings with `<BilingualText vi en />`. Every new user-visible string needs **both** `vi` and `en`.
- Persistence keys: `asmo-quiz-progress-v1`, `asmo-quiz-subject`, `asmo-quiz-lang[-english|-math]`, `princess-wardrobe-v1`. Always wrap `localStorage` in try/catch (private mode). Changing saved shape → `/progress-storage`.

## Conventions
- Audience is children aged 7–9: big tap targets (≥44px), large readable text, friendly colours, instant feedback; no dark patterns or timers that punish by default (mock timer is opt-in).
- Tailwind 4 utility classes as literal strings; icons from `lucide-react`; motion via `framer-motion` (app is wrapped in `MotionConfig reducedMotion="user"` — don't bypass it); sounds via `src/utils/sound.ts`, speech via `src/utils/speech.ts`.
- Reuse existing components (`Header`, `OptionCard`, `ExplanationBox`, `RocketProgress`, `Timer`, `SpeakButton`, `SubjectSwitcher`, `LanguageSwitcher`) before creating new ones; keep components small and typed (no `any`).
- Oxlint rules: hooks rules are errors; `react/only-export-components` warns (export non-components from utils).
- Performance (tablets are slow): long lists of heavy cards (wardrobe dresses, accessory sets) wrap each item in `LazyMount` (`src/components/LazyMount.tsx` — same-size placeholder until ~800px from the viewport, one shared `IntersectionObserver`, stays mounted; the `id` sits on the placeholder so `scrollIntoView` still works). Memoize such cards with `React.memo` and give them primitive/stable props (module-level or `useCallback` handlers, `useMemo` sets). In big components read the wardrobe store with `useWardrobeSelector(s => …)` instead of `useWardrobe()` — `bankSeconds` changes every second; put anything that shows the clock in its own small component.

## Workflow
1. Describe the behaviour change and the files it touches in 3–5 lines before coding.
2. Implement; for removal, delete dead code, exports and imports instead of commenting out.
3. `npm run verify` and `npm run build`.
4. Check it in the real app: `npm run dev`, play a topic quiz, a mock test, finish → result → wardrobe, in all three subjects, vi and bilingual modes, at ~375px width. Say plainly what you could not check.
5. Commit with a message that describes the feature.

Large or multi-file features → the `feature-developer` agent.
