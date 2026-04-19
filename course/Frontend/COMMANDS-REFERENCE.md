# COMMANDS REFERENCE
## core-value-fundamentals — Quick Lookup for AI and Human Use
## Updated April 2026

---

## BEFORE YOU RUN ANYTHING

1. Check `pipeline-config.json` — confirms current AI provider order
2. Check `.env` — confirms API keys are present and valid
3. Check `locked-modules.json` — confirms which modules are locked

---

## AUDIT & VERIFY

```bash
# Run the full audit — always safe, never modifies module files
node audit-html.js

# Generate the full content map (exercises, Part A, Part B titles)
node map.js
# Output saved to: ~/Desktop/module-content-map.txt
```

---

## FINDING ISSUES

```bash
# Search for a specific banned word in a specific module
grep -n "program" ~/core-value-fundamentals/course/Frontend/modules/MODULE-NAME/index.html

# Search for multiple banned words at once
grep -n "program\|color\|students\|practice\|periods" ~/core-value-fundamentals/course/Frontend/modules/MODULE-NAME/index.html

# Check exercise titles in a module
grep "exercise-title" ~/core-value-fundamentals/course/Frontend/modules/MODULE-NAME/index.html

# Check exercise titles AND Part A / Part B titles
grep -E "exercise-title|sub-title" ~/core-value-fundamentals/course/Frontend/modules/MODULE-NAME/index.html
```

---

## FIXING ISSUES

```bash
# Fix all banned words across ALL modules at once — recommended first step
cd ~/core-value-fundamentals/course/Frontend
bash fix-banned-words.sh

# Fix banned words in mainTemplate files
node fix-template.js

# Fix a specific word in a specific module manually
sed -i '' 's/program/code/g' ~/core-value-fundamentals/course/Frontend/modules/MODULE-NAME/index.html

# Fix multiple words in one command
sed -i '' 's/program/code/g; s/color/colour/g; s/students/children/g' ~/core-value-fundamentals/course/Frontend/modules/MODULE-NAME/index.html
```

> ⚠️ Always run `node audit-html.js` after fixing to confirm clean.

---

## BUILDING MODULES

```bash
# Rebuild all UNLOCKED modules — safe, skips locked modules
node rebuild-all.js

# Build a specific new module
node rebuild-new.js MODULE-NAME

# Fix and rebuild specific failed modules (edit the hardcoded list inside first)
node rebuild-fix-errors.js
```

> ⚠️ Never run `build-html.js` directly — it does NOT check locks.

---

## CHECKING THE WATERFALL

During any build run, watch the API STATUS readout:

```
📊 API STATUS:
Groq:     ░░░░░░░░░░░░░░░░░░░░  0/1000 (0%)
Cerebras: ░░░░░░░░░░░░░░░░░░░░  7/14400 (0%)
Gemini:   ░░░░░░░░░░░░░░░░░░░░  0/1500 (0%)
Ollama:   always available ✅
```

> 🚨 If all providers are at 0% and only Ollama is available — STOP the build. Ollama output quality is not suitable for this course. Wait for credits to reset.

---

## RESTORING FROM BACKUP

If modules are corrupted or scrambled by a low-quality AI run:

```bash
# Check what is in the backup
ls ~/Downloads/BACKUP-FOLDER-NAME/course/Frontend/modules/

# Copy mainTemplate (specs and helper boxes) from backup
cp -r ~/Downloads/BACKUP-FOLDER-NAME/course/Frontend/mainTemplate/ ~/core-value-fundamentals/course/Frontend/mainTemplate/

# Copy a specific module HTML from backup
cp ~/Downloads/BACKUP-FOLDER-NAME/course/Frontend/modules/MODULE-NAME/index.html ~/core-value-fundamentals/course/Frontend/modules/MODULE-NAME/index.html
```

> ✅ Always verify after restoring: run `node audit-html.js` and check exercise titles with `grep`.

---

## VERIFYING A MODULE MATCHES ITS SPEC

```bash
# Check HTML exercise titles
grep "exercise-title" ~/core-value-fundamentals/course/Frontend/modules/MODULE-NAME/index.html

# Check spec exercise titles
grep "## EXERCISE" ~/core-value-fundamentals/course/Frontend/mainTemplate/MODULE-NAME-SPECS.md

# Check both at once for quick comparison
grep "exercise-title" ~/core-value-fundamentals/course/Frontend/modules/MODULE-NAME/index.html && grep "## EXERCISE" ~/core-value-fundamentals/course/Frontend/mainTemplate/MODULE-NAME-SPECS.md
```

---

*For full project context see PROJECT-BRIEFING.md*
