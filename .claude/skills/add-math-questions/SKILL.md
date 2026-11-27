---
name: add-math-questions
description: Write or extend bilingual (Vietnamese + English) TIMO-style maths olympiad questions for grade 2-3 in ScienceQuiz using the mathSection() helper. Use when adding, replacing or rewriting items in src/data/math/<area>/<subtopic>.ts, or when asked to improve maths question quality.
---

# Add TIMO maths questions

Subject `math` follows the TIMO (Thailand International Mathematical Olympiad) Primary 2–3 heat round: 5 areas × 5 subtopics, **40 questions per subtopic, 200 per area, 1000 total** (`MATH_PER_SUBTOPIC` / `MATH_PER_TOPIC` in `scripts/lib/math-checks.ts`; going over is an error).

| Area (`topic`) | Subtopics (file in `src/data/math/<area>/`) |
| --- | --- |
| `logic` | `log-number-patterns` (number-patterns.ts), `log-shape-patterns`, `log-ordering-truth`, `log-calendar-age`, `log-work-backwards` |
| `arithmetic` | `ari-quick-calc`, `ari-missing-number`, `ari-word-problems`, `ari-money-time-units`, `ari-balance-unknown` |
| `number-theory` | `num-odd-even`, `num-place-value`, `num-multiples`, `num-digit-count`, `num-remainder-cycles` |
| `geometry` | `geo-count-shapes`, `geo-perimeter`, `geo-area-grid`, `geo-cubes-nets`, `geo-symmetry-clock` |
| `combinatorics` | `com-choices`, `com-grid-paths`, `com-handshakes`, `com-pigeonhole`, `com-systematic-list` |

The file name is the subtopic id without its prefix (`geo-cubes-nets` → `geometry/cubes-nets.ts`). Ids are generated `<subtopic>-NN` and are **positional**: append, or edit in place; never insert or delete mid-file.

## Writing an item
```ts
import type { MathQuestionInput } from '../../../types/quiz'
import { mathSection } from '../helpers'

const q = mathSection('arithmetic', 'ari-quick-calc')

export const QUICK_CALC: MathQuestionInput[] = [
  q('easy',
    ['Tính nhanh: 25 + 37 + 75 = ?', 'Work out quickly: 25 + 37 + 75 = ?'],
    ['137', '127', '147', '237'],               // correct answer FIRST; a string is shared by vi and en
    ['Ghép hai số tròn trăm trước.', '25 + 75 = 100, rồi 100 + 37 = 137.'],
    ['Pair numbers that make 100 first.', '25 + 75 = 100, then 100 + 37 = 137.']),
  q('medium',
    ['…', '…'],
    [['3 quả táo', '3 apples'], ['4 quả táo', '4 apples'], ['5 quả táo', '5 apples'], ['6 quả táo', '6 apples']],  // [vi, en] pairs when words differ
    ['…', '…'], ['…', '…'], { ill: 'ma-clock' }),
]
```
- `mathSection` rotates the correct answer through A–D (40 items → 10 per slot). At play time, all-number options are **sorted ascending** and other options are shuffled, so never write "A and B" style options or "all of the above".
- Explanation is built as `🧠 Ý tưởng: … \n✏️ Lời giải: …` / `🧠 Idea: … \n✏️ Solution: …`; each language ≤ 360 chars total. The solution must state the final answer; when the correct option contains exactly one number, `check:data` requires that number to appear in `explanation_en` (catches a wrong `correctIndex`).

## Rules (enforced by `check:data`)
- vi and en question text, options and explanation all present; 4 distinct options per language.
- **Digits identical vi↔en, in the same order**, in the question and in each option. Always write numbers as digits (12, not "mười hai"/"twelve"). Write things that are numbers in one language but words in the other as words in both: weekdays (`thứ Hai` / `Monday`, never `thứ 2`), months (`tháng Ba` / `March`). Times `8:30` and dates written the same way in both are fine.
- Distribution per subtopic: ~16 easy / 16 medium / 8 hard. Per area at 200: ≥15% hard, ≥25% easy.
- Answer-position balance ≤40% per slot (automatic if you only append with the helper).
- No near-duplicate stems in the same subtopic (similarity ≥0.8 is an error).

## Quality bar (reviewer checks this)
- **Solve every item yourself, independently, after writing it.** Exactly one option is correct; recount figures and enumerations; check that no distractor is also correct.
- Grade 2–3 level: numbers mostly ≤ 1000, ×/÷ within the times tables to 10, no fractions/decimals/negative numbers, no algebra notation beyond a box or symbol for the unknown (□, ★, 🍎).
- TIMO flavour: reasoning over computation — tricks (grouping, pairing, counting systematically, working backwards, cycles). Easy = one step; medium = two steps or one trick; hard = TIMO "tough" items (3+ steps, careful counting, a classic trap).
- Distractors are real mistakes: off-by-one (fence-post), forgetting the overlap, adding instead of subtracting, counting only small shapes, stopping one step early. Never random numbers.
- Vary names (An, Bình, Mai, Lan, Minh, Khoa, Hà, Tuấn, Linh, Nam … same names in both languages), objects and settings; avoid repeating the same template more than ~3 times per file.
- Kid-friendly wording, short sentences. Multi-line stems are allowed with `\n` (rendered as line breaks).
- Figures: only attach `ill` when an existing figure in `src/components/illustrations/registry.tsx` (math ids start with `ma-`) shows **exactly** what the stem says — read the component and check every number. Otherwise describe the figure in words (e.g. "a 3 × 4 grid of squares"). Need a new figure → `/add-illustration`.

## Steps
1. Read the target file, `src/data/math/helpers.ts`, and the subtopic section in `docs/question-ledger.md` (after the first batch) to avoid repeating ideas.
2. Write the batch (append). Solve each item again from scratch.
3. `npm run check:data` — fix every error that mentions your ids.
4. `npm run q -- --sub=<subtopic> --full` to eyeball the result.
5. `/verify`, `npm run ledger`, commit one subtopic or area per commit (e.g. `Add TIMO Geometry questions (reaching 200)`).

## Maths figures (`ill`) — exact facts
Each figure is one fixed picture; write several different questions against it, and only state facts it really shows.
| id | shows | facts |
| --- | --- | --- |
| `ma-count-triangles` | big triangle, 1 line from apex to base, 1 horizontal line across the middle | 6 triangles; 3 trapezoids (4-sided); 4 separate regions (2 triangles on top, 2 trapezoids below) |
| `ma-count-squares` | 3×3 grid of equal squares | 14 squares (9 small, 4 of 2×2, 1 of 3×3) |
| `ma-grid-area` | 8×5 grid (40 cells) with shapes A, B, C | A red L: area 5, perimeter 12; B blue 3×2 rectangle: area 6, perimeter 10; C green T: area 4, perimeter 10; 15 cells shaded, 25 empty |
| `ma-perimeter-shape` | L-shape: 8 cm × 5 cm rectangle with a 3 cm × 2 cm corner cut from the top-right; sides labelled 5, 2, 3, 3, 8, 5 cm | perimeter 26 cm; area 34 cm² (no grid drawn) |
| `ma-cube-stack` | staircase of cubes, one deep, all visible | 6 cubes (rows 3, 2, 1) |
| `ma-cube-net` | cross net: column 1, 3, 5, 6; 2 left of 3, 4 right of 3 | opposite faces 1–5, 2–4, 3–6 |
| `ma-clock` | analog clock | 3:00, hands at a right angle |
| `ma-symmetry-fold` | square paper folded in half, half-heart cut at the fold, "?" | unfolded: one whole heart-shaped hole in the middle |
| `ma-grid-paths` | street grid 3 blocks wide × 2 tall, A bottom-left, B top-right, only right/up | 10 shortest paths, each 5 blocks (3 right, 2 up) |
| `ma-matchsticks` | matchsticks "6 + 4 = 4", 18 sticks | two one-move fixes: 0 + 4 = 4 and 8 − 4 = 4 — a question must allow only one (e.g. "move one stick within the first number") |
| `ma-number-pyramid` | 4 rows, brick = sum of the two below; bottom 2, 5, 3, 4; then 7, 8, 7; then 15, 15; top "?" | top = 30 |
| `ma-magic-square` | 8 1 6 / 3 5 ? / 4 9 2 | magic sum 15; ? = 7 |
| `ma-balance-math` | scale 1: 2 apples = 1 banana; scale 2: banana + apple = 9 cubes | apple = 3 cubes, banana = 6 cubes |
| `ma-shape-pattern` | 12 spots, cycle ▲ ● ● ■ (triangle, circle, circle, square), spot 12 is "?" | ? = ■ square; in spots 1–11: 3 triangles, 6 circles, 2 squares; position n: remainder by 4 → 1 ▲, 2 ●, 3 ●, 0 ■ |
