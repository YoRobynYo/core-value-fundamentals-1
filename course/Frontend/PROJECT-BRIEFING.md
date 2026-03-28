# CORE VALUE FUNDAMENTALS — PROJECT BRIEFING
## For AI Handoff — March 2026

---

## THE PROJECT

A children's coding course (ages 10-12, UK based) called **Core Value Fundamentals**.
- Language-agnostic — uses pseudocode (SET, PRINT, IF, FUNCTION etc) not real syntax
- British English throughout
- Classroom + Popcorn Factory themes
- 19 modules built so far (Module 1-7)

---

## THE PIPELINE

Located at: `/Users/robynmai/core-value-fundamentals/course/Frontend/`

### Key Files:
- `build-html.js` — main AI exercise generator
- `rebuild-new.js` — rebuilds specific new modules
- `rebuild-all.js` — rebuilds all modules (skips locked ones)
- `rebuild-fix-errors.js` — rebuilds only audit-failed modules (FAST mode)
- `audit-html.js` — checks for banned words, auto-locks clean modules
- `locked-modules.json` — modules that passed audit and are locked from rebuild
- `mainTemplate/` — folder containing all spec and helper box .md files
- `modules/` — output folder containing built index.html files

### How it works:
1. Each module has a SPEC file (exercise definitions) and HELPER BOXES file (teaching content)
2. `build-html.js` reads these files and uses AI to generate HTML exercises
3. Each exercise has Part A and Part B generated separately
4. Validation catches errors before saving
5. Audit runs after build to check for banned words
6. Clean modules get auto-locked

---

## AI PROVIDERS (Three-tier waterfall)

```
Groq → Gemini → Ollama (qwen2.5-coder:7b)
```

### Groq:
- Model: `llama-3.3-70b-versatile`
- API key: `GROQ_API_KEY` in `~/.zshrc`
- **Only works 6am-8am UK time** (daily limit resets at midnight US time)
- Limit: 40 calls/day, 90% cutoff = stops at 36

### Gemini:
- Model: `gemini-2.5-flash-preview-04-17`
- API key: `GEMINI_API_KEY` in `~/.zshrc`
- Limit: 30 calls/day, 90% cutoff = stops at 27
- `thinkingBudget: 0` — thinking mode disabled for faster HTML generation

### Ollama (local):
- Model: `qwen2.5-coder:7b`
- Always available, no limits
- Quality is lower than Groq/Gemini — exercises may need review
- Known issue: sometimes hangs — restart with `pkill ollama` then reopen app
- DO NOT use `deepseek-r1:7b` — generates placeholder text not real HTML

### API Status Bar (shows after every exercise):
```
📊 API STATUS:
Groq:   ████░░░░░░░░░░░░░░░░  8/40 (20%)
Gemini: ██░░░░░░░░░░░░░░░░░░  3/30 (10%)
Ollama: always available ✅
```

---

## FAST MODE

`rebuild-fix-errors.js` passes `FAST_MODE=true` to `build-html.js`
- Removes all 60s gaps between exercises
- Use when Groq is already dead and Ollama/Gemini are handling everything
- DO NOT use with Groq — gaps exist to prevent rate limiting

---

## SCSS / STYLING

- Source: `styles/scss/webpage.scss`
- Compiled to: `styles/css/style.css`
- To recompile: `cd course/Frontend && sass styles/scss/webpage.scss styles/css/style.css`
- Key classes: `.helper-box`, `.exercise-box`, `.code-block`, `p.output`, `p.note`
- `.code-block` uses Space Grotesk font (NOT monospace) — friendly for 10-12 year olds

---

## HELPER BOX FORMAT

Helper boxes must be in proper HTML inside ```html fences in the .md file:

```html
<!-- Helper Box 1: Title Here -->
<div class="helper-box">
  <h3 class="box-title">🧠 Title Here 🧠</h3>
  <p>Explanation paragraph...</p>
  <h4 class="sub-title">Section heading:</h4>
  <div class="code-block">
    SET "child name" = "David"<br>
    PRINT "My name is ", "child name"
  </div>
  <p class="output">Output: My name is David</p>
  <p class="note">💡 <strong>Remember:</strong> Tip text here</p>
</div>
<!-- End of Helper Box 1 -->
```

### If helper box is plain markdown (not HTML):
`extractHelperHTML()` in `build-html.js` auto-converts it.
The converter strips:
- Everything before `## HELPER BOX` heading (metadata)
- `## NOTES FOR PIPELINE` section at bottom
- `---` horizontal rules between boxes

---

## GOLD STANDARD SEPARATOR COMMENTS

Every generated HTML file uses these separators:

```html
<!-- ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ -->
<!-- █  // Start::: Exercise 1                       █ -->
<!-- █  // Exercise Title Here                       █ -->
<!-- ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ -->
```

---

## BANNED WORDS (caught by validator AND audit)

These cause validation failure and force a retry:
- `students` / `student` → use `children` / `child`
- `program` / `programming` → use `code` / `coding`
- `color` → use `colour` (CSS exceptions: background-color, border-color etc are fine)
- `center` → use `centre` (CSS exception: text-align: center is fine)
- `organize` → use `organise`
- `recognize` → use `recognise`
- `practice` (verb) → use `practise`
- `period` → use `lesson`, `week`, `time`
- `console.log`, `let `, `const `, `var ` → JS syntax not allowed

---

## MODULE STATUS (as of March 28 2026)

### ✅ LOCKED (clean, do not rebuild):
- MODULE-2-OPERATORS
- MODULE-3-CONDITIONS-PART4
- MODULE-4-LOGICAL-OPERATORS-PART1
- MODULE-4-LOGICAL-OPERATORS-PART2
- MODULE-5-LOOPS-PART2
- MODULE-5-LOOPS-PART4
- MODULE-6-PIRATE-ADVENTURE-PART1
- MODULE-6-PIRATE-ADVENTURE-PART2
- MODULE-7-FUNCTIONS-PART1
- MODULE-7-FUNCTIONS-PART2
- MODULE-7-FUNCTIONS-PART3
- MODULE-7-FUNCTIONS-PART4

### ❌ NEEDS REBUILD (audit errors):
- MODULE-1-VARIABLES (5 issues — program, students)
- MODULE-3-CONDITIONS-PART1 (1 issue — program, not in spec, AI generates it)
- MODULE-3-CONDITIONS-PART2 (was 19 issues — color/colour — SPEC FILE FIXED)
- MODULE-3-CONDITIONS-PART3 (1 issue — practise)
- MODULE-3-CONDITIONS-PART5 (1 issue — practise)
- MODULE-5-LOOPS-PART1 (1 issue — organize)
- MODULE-5-LOOPS-PART3 (3 issues — recognize, practice, period)

---

## PSEUDOCODE RULES

- `SET` replaces let/var/const
- `PRINT` replaces console.log/print
- `IF` / `ELSE` / `END IF` for conditions
- `FUNCTION` / `END FUNCTION` / `CALL` for functions
- `RETURN` for return values
- Variable names always in natural language quotes: `"child name"` NOT `childName`
- NEVER use + for concatenation — use comma inside PRINT
- NEVER use real language syntax

---

## KNOWN ISSUES

1. **Ollama hangs** — if Ollama stops responding, quit the app from menu bar and reopen
2. **Groq daily limit** — resets midnight US time (~5-6am UK). Best window: 6-8am UK
3. **Gemini quota** — burns fast when Groq is dead. 30 calls/day free tier
4. **DeepSeek** — DO NOT use as Ollama model, generates placeholder text
5. **Module locking** — locks are based on banned word audit only, not quality review

---

## TOMORROW MORNING PLAN

1. 6am: Fresh Groq limits — run `node rebuild-fix-errors.js`
2. Watch for banned word failures — they now force retries automatically
3. After fix-errors completes — run `node audit-html.js` to confirm clean
4. If all clean — consider full `rebuild-all.js` for quality improvement

---

## FILE VERSIONS

`build-html.js` has gone through 36+ versions over 4 days.
Always replace with the latest downloaded version.
Check version by looking for `GEMINI_API_KEY` and `printAPIStatus()` — if present it's the latest.

---

END OF BRIEFING
