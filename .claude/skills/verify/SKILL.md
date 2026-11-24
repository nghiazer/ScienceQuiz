---
name: verify
description: Run all ScienceQuiz quality gates (oxlint, check:data, tsc/build, ledger) and fix failures. Use after any change to question data, types, topics or components, and before every commit.
---

# Verify

1. Run `npm run verify` (oxlint → `scripts/check-data.ts` → `tsc -b`). For a release-level check also run `npm run build`.
2. Read failures grouped by question id. Typical fixes:
   - `giải thích quá dài` → shorten the explanation to ≤ 320 chars.
   - `nội dung … có chữ tiếng Việt` → English fields must be pure English.
   - `cần đúng 1 chỗ trống ___` → exactly one blank (in question, or in passage for notices).
   - `đáp án ở vị trí X chiếm …%` → positions drifted; with `section()` this only happens when items were added by hand.
   - `vượt mục tiêu` → over the cap; remove/replace items or consciously raise the constants (see `CLAUDE.md`).
   - Duplicate/near-duplicate pair → rewrite one sentence (different verb/context). Add to `scripts/dupes-allowlist.json` only when the two items genuinely test different things, with a specific `reason`.
   - `illustrationId không tồn tại` → register it (see `/add-illustration`).
3. `check:data` prints `tiến độ` lines and `cảnh báo` warnings; they are not failures but report them in your summary.
4. When data changed, run `npm run ledger` so `docs/question-ledger.md` is in sync (never edit it by hand).
5. Re-run until `✓ Dữ liệu hợp lệ`, lint and tsc are clean. Report what you ran and the final result honestly; if something stays red, say which check and why.
