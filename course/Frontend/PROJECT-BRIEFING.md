# CORE VALUE FUNDAMENTALS — PROJECT BRIEFING
## For AI Handoff — Updated April 11, 2026

---

## THE PROJECT

A children's coding course (ages 10-12, UK based) called **Core Value Fundamentals**.
- Language-agnostic — uses pseudocode (SET, PRINT, IF, FUNCTION etc) not real syntax
- British English throughout
- Classroom + Popcorn Factory themes
- **27 modules complete and locked** (Modules 1-8)

---

## THE PIPELINE

Located at: `course/Frontend/` (within the project root)

### Key Files:
- `build-html.js` — main AI exercise generator (⚠️ NO lock check — use rebuild-all.js instead)
- `rebuild-all.js` — rebuilds all modules ✅ **respects locked-modules.json**
- `rebuild-fix-errors.js` — rebuilds hardcoded list of failed modules
- `rebuild-new.js` — rebuilds specific new modules
- `audit-html.js` — checks banned words, auto-locks clean modules
- `update-template.js` — maintains master template (3-step process)
- `locked-modules.json` — **27 modules marked `true`** (all clean)
- `pipeline-config.json` — AI provider configs
- `mainTemplate/` — spec and helper box .md files
- `modules/` — output folder with built index.html files

### How it works:
1. Each module has a SPEC file and HELPER BOXES file
2. `build-html.js` uses AI to generate HTML exercises
3. Each exercise has Part A and Part B generated separately
4. Validation catches errors before saving
5. `audit-html.js` checks for banned words
6. Clean modules get auto-locked in `locked-modules.json`

---

## ✅ CURRENT STATUS (April 11, 2026)

### All 27 Modules — CLEAN & LOCKED

| Module | Status |
|--------|--------|
| MODULE-1-VARIABLES | ✅ CLEAN 🔒 |
| MODULE-2-OPERATORS | ✅ CLEAN 🔒 |
| MODULE-3-CONDITIONS-PART1 | ✅ CLEAN 🔒 |
| MODULE-3-CONDITIONS-PART2 | ✅ CLEAN 🔒 |
| MODULE-3-CONDITIONS-PART3 | ✅ CLEAN 🔒 |
| MODULE-3-CONDITIONS-PART4 | ✅ CLEAN 🔒 |
| MODULE-3-CONDITIONS-PART5 | ✅ CLEAN 🔒 |
| MODULE-4-LOGICAL-OPERATORS-PART1 | ✅ CLEAN 🔒 |
| MODULE-4-LOGICAL-OPERATORS-PART2 | ✅ CLEAN 🔒 |
| MODULE-5-LOOPS-PART1 | ✅ CLEAN 🔒 |
| MODULE-5-LOOPS-PART2 | ✅ CLEAN 🔒 |
| MODULE-5-LOOPS-PART3 | ✅ CLEAN 🔒 |
| MODULE-5-LOOPS-PART4 | ✅ CLEAN 🔒 |
| MODULE-6-PIRATE-ADVENTURE-PART1 | ✅ CLEAN 🔒 |
| MODULE-6-PIRATE-ADVENTURE-PART2 | ✅ CLEAN 🔒 |
| MODULE-7-FUNCTIONS-PART1 | ✅ CLEAN 🔒 |
| MODULE-7-FUNCTIONS-PART2 | ✅ CLEAN 🔒 |
| MODULE-7-FUNCTIONS-PART3 | ✅ CLEAN 🔒 |
| MODULE-7-FUNCTIONS-PART4 | ✅ CLEAN 🔒 |
| MODULE-7-FUNCTIONS-PART5 | ✅ CLEAN 🔒 |
| MODULE-7-FUNCTIONS-PART6 | ✅ CLEAN 🔒 |
| MODULE-8-ARRAYS-PART1 | ✅ CLEAN 🔒 |
| MODULE-8-ARRAYS-PART2 | ✅ CLEAN 🔒 |
| MODULE-8-ARRAYS-PART3 | ✅ CLEAN 🔒 |
| MODULE-8-ARRAYS-PART4 | ✅ CLEAN 🔒 |
| MODULE-8-ARRAYS-PART5 | ✅ CLEAN 🔒 |
| MODULE-8-ARRAYS-PART6 | ✅ CLEAN 🔒 |

**Audit runs in 2 seconds. Zero issues. All locked.**

---

## 🔒 LOCKING SYSTEM

- `locked-modules.json` contains all 27 modules marked `true`
- `audit-html.js` creates/updates this file automatically
- `rebuild-all.js` **reads this file and skips locked modules**
- `build-html.js` (direct) does NOT check locks — use `rebuild-all.js` instead

### Safe commands:
```bash
node audit-html.js              # ✅ Always safe — reads only
node rebuild-all.js             # ✅ Safe — skips all 27 locked modules