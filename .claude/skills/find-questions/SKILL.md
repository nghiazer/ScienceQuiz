---
name: find-questions
description: Look up questions in the ScienceQuiz banks by id, topic, subtopic, difficulty, trap flag or keyword, and see the full text, correct answer and source file. Use for any "show me / find / which file has / how many" question about existing questions, and before editing or deleting one.
---

# Find questions (Read)

Run `npm run q -- <filters>` (script: `scripts/query.ts`). Filters can be combined:

| Filter | Example |
| --- | --- |
| `--id=` | `--id=pa-negative-07`, `--id=liv-01` |
| `--topic=` | `--topic=past-simple`, `--topic=earth` |
| `--sub=` | `--sub=pa-negative`, `--sub=plant-parts` |
| `--diff=` | `easy`, `medium`, `hard` |
| `--trap` | English tense-contrast items only |
| `--text=` | case-insensitive keyword in question/options (vi or en) |
| `--limit=N` / `--full` | more rows (default 20) / also print the explanation |

Output shows id, difficulty, trap/illustration flags, **source file**, question, options with `✓` on the correct one.

Tips
- For English, the number in the id (`pa-negative-07`) is the 7th `negative(...)` call in the file named in the output. Maths ids work the same way (`geo-perimeter-07` = 7th `q(...)` call in `src/data/math/geometry/perimeter.ts`). Science ids are literal `id: 'liv-01'` fields — grep them directly.
- Counts and balance: `npm run check:data`. Browsing a whole subtopic: `docs/question-ledger.md` (truncated text, generated).
- To find unused illustrations or tenses with missing questions read the `check:data` summary lines, not the ledger.
- Reading is free; to change what you found use `/edit-question`.
