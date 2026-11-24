---
name: add-science-questions
description: Write or edit bilingual (Vietnamese + English) Science questions for grade 2-3 in ScienceQuiz (living, physical, earth, inquiry topics). Use when adding, fixing or replacing items in src/data/questions/*.ts.
---

# Add Science questions

Files: `src/data/questions/{living,physical,earth,inquiry}.ts`. Each item is a `ScienceQuestionInput` object.

## Steps
1. **Read first.** Check `docs/question-ledger.md` for the subtopic to avoid repeating a concept, and look at 2–3 neighbouring items for tone.
2. **Capacity.** Every topic is exactly 120 (`PER_TOPIC` in `scripts/check-data.ts`; going over is an error). To add, either replace weak items or raise `PER_TOPIC` for all topics together and say so. Each subtopic needs ≥5.
3. **Id**: next free number for the topic prefix (`liv-`, `phy-`, `ear-`, `inq-`); check the tail of the file, ids are not contiguous by subtopic.
4. **Fields**: `topic`, `subtopic` (must belong to that topic in `src/data/topics.ts`), `difficulty` (`easy|medium|hard`), `question_vi/en`, `options_vi/en` (exactly 4 each, same order, 4 distinct), `correctIndex` 0–3, `explanation_vi/en` (≤ 320 chars), optional `illustrationId`.
5. **Rules**
   - Digits in question and options must be identical in vi and en.
   - One unambiguously correct answer that is scientifically accurate at grade 2–3 level; avoid trick wording and facts that depend on curriculum or country.
   - Explanation says *why*, in kid language, in 1–3 sentences.
   - Keep correct-answer positions varied (global and per-topic ≤40% per slot; run the check).
   - Need a picture? Use an existing id from `src/components/illustrations/registry.tsx` or create one with `/add-illustration`.
6. **Verify** with `/verify`, regenerate the ledger (`npm run ledger`), commit.
