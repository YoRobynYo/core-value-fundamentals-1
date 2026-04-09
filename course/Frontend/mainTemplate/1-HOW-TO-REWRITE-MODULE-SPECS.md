# HOW TO REWRITE MODULE SPECS
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Step by step guide for rewriting all module spec files to be language-agnostic
**Reference:** MODULE-0-EXERCISE-TEMPLATE-MASTER.md is the gold standard — all specs must follow the rules in that document

---

## BEFORE YOU START

Every spec file you rewrite must be checked against these three files:

1. **MODULE-0-EXERCISE-TEMPLATE-MASTER.md** — the rules every exercise must follow (THIS IS THE GOLD STANDARD)
2. **MODULE-0-SPEC-FILE-TEMPLATE.md** — the structure every spec file must follow
3. **MODULE-1-VARIABLES-SPECS.md** — example of a correctly written spec (must follow the rules above)

If anything in the rewritten spec conflicts with these three files — the three files win every time.

---

## THE PROBLEM WITH THE EXISTING SPECS

Every existing spec file was written for JavaScript. They contain:

- Variable names in camelCase — studentName, deskNumber, teacherName
- References to template literals, console.log, backticks
- References to programming, coding tools, and JS syntax
- Quality checklists that check for JS-specific things
- Concepts that reference JS-only features
- The word "student" instead of "child"
- The word "period" instead of "lesson"
- American spellings (color, organize, recognize, center, math)

**None of this should appear in the rewritten specs.**

---

## STEP BY STEP — HOW TO REWRITE A SPEC FILE

### Step 1 — Open the existing spec file
Read it fully before changing anything. Understand what each exercise is trying to teach.

### Step 2 — Update the header
- Remove any JS references from the title or subtitle
- Update the purpose line — remove "test if AI can" — this is the real thing now
- Add "Language-Agnostic Edition" to the subtitle
- Add "Updated: April 2026"

### Step 3 — Update HOW TO USE THIS WITH AI

Replace with this exact instruction every time:

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and ALL rules — this is critical)
3. MODULE-[X]-[TOPIC]-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for Exercise [NUMBER] following these specifications exactly. Follow ALL rules in MODULE-0-EXERCISE-TEMPLATE-MASTER.md — especially Rules 1, 2, 3, 5, and 7."

### Step 4 — Rewrite VARIABLES TO USE for every exercise

**CRITICAL — This is the most common mistake**

| Before (WRONG) | After (CORRECT) |
|----------------|-----------------|
| studentName | "child name" |
| deskNumber | "desk number" |
| teacherName | "teacher name" |
| period1Subject | "first lesson subject" |
| totalBags | "total bags" |
| bagsAtStation | "bags at station" |
| minimumNeeded | "minimum needed" |

**The rule:** Always use natural language in quotes. Never use camelCase or snake_case.

### Step 5 — Update the CONCEPT field

| Before (WRONG) | After (CORRECT) |
|----------------|-----------------|
| "Creating variables and using template literals" | "Creating variables to store and display information" |
| "Using console.log to output values" | "Using PRINT to output values" |
| "String concatenation with +" | "Using PRINT with commas to display text and variables" |

### Step 6 — Update ALT TEXT fields

| Before (WRONG) | After (CORRECT) |
|----------------|-----------------|
| "First steps using the console and template literals" | "First steps storing and displaying information" |
| "Using comparison operators in JavaScript" | "Using comparison operators in pseudocode" |

### Step 7 — Check EXPECTED OUTPUT fields

Outputs should show plain readable text — no JS syntax, no ${}, no + concatenation.

| Before (WRONG) | After (CORRECT) |
|----------------|-----------------|
| "My name is ${name}" | "My name is Ben" |
| console.log("Hello " + childName) | PRINT "Hello ", "child name" |

### Step 8 — Update NARRATIVE CONTEXT

- Remove the word "programming" — replace with "coding" or remove entirely
- Remove any JS-specific references
- Replace "student" with "child"
- Replace "period" with "lesson"
- Fix American spellings: color→colour, organize→organise, recognize→recognise, center→centre, math→maths
- Keep all the themes, stories, and classroom/factory narrative exactly as they are

### Step 9 — Replace the QUALITY CHECKLIST

Replace the entire checklist with this standard checklist every time:

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:

**Language-Agnostic (MOST IMPORTANT)**
- [ ] NO real language syntax anywhere (no let, const, var, console.log, ${})
- [ ] Variables use natural language in quotes — NOT camelCase — e.g., "child name"
- [ ] Uses pseudocode only — SET, PRINT, IF, FOR
- [ ] Uses PRINT with commas — NO + concatenation
- [ ] NO banned words (student, period, program, color, organize, recognize, center, math)

**Structure**
- [ ] Section name matches exactly
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Uses <code> tags (not <highlight>)
- [ ] IDs follow pattern: [section]-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="[section]"
- [ ] Empty hint/output/answer containers present

**Pseudocode Rules**
- [ ] Exercise 1 ONLY → Part A AND Part B both show full pseudocode in code-example div
- [ ] Exercises 2, 3, 4, 5 → NO pseudocode shown at all (neither Part A nor Part B)
- [ ] That means for Exercises 2-5: Parts A and B Step 4 → NO code-example div (children write everything from scratch)

**Content**
- [ ] Image filename and alt text match spec
- [ ] Expected outputs match the spec
- [ ] Nothing used that hasn't been taught in a helper box (Rule 6 — confer with user)

### Step 10 — Replace TEST RESULTS section

Replace with this standard section every time:

## GENERATION RESULTS

**When you generate with AI, document here:**
- Which AI was used: ___________
- Exercise generated: ___________
- Did it generate correctly? YES / NO
- What needed fixing: ___________
- Number of attempts needed: ___________

---

## WHAT TO KEEP — DO NOT CHANGE THESE

- The exercise titles and emojis — these are perfect as they are
- The scenarios — the classroom and factory themes stay exactly as they are
- The exercise flow and narrative — this is the heart of the course
- The section names — variables, operations, conditions, loops etc
- The exercise numbers
- The overall structure of the file

---

## WHAT EVERY REWRITTEN SPEC MUST HAVE

- [ ] No camelCase variable names anywhere — use natural language in quotes
- [ ] No JS syntax anywhere — no let, const, var, console.log, ${}, backticks
- [ ] No mention of template literals, console.log, or backticks
- [ ] No mention of "programming" — use "coding" or remove
- [ ] No "student" — use "child"
- [ ] No "period" — use "lesson"
- [ ] No American spellings — use British English (colour, organise, recognise, centre, maths)
- [ ] Natural language variable descriptions in quotes throughout
- [ ] Standard HOW TO USE THIS WITH AI section
- [ ] Standard QUALITY CHECKLIST
- [ ] Standard GENERATION RESULTS section
- [ ] References MODULE-0-EXERCISE-TEMPLATE-MASTER.md as the gold standard
- [ ] References the correct helper boxes file for that module

---

## SPEC FILE STATUS TRACKING

Before rewriting any spec file, check its current status in your pipeline monitor.

| Spec File | Status | Last Updated |
|-----------|--------|--------------|
| [filename] | [status] | [date] |

**Status Key:**
- ⬜ PENDING — needs rewriting
- 🔄 IN PROGRESS — being worked on
- ✅ COMPLETE — finished and locked
- ⚠️ REVIEW — needs checking

**Pipeline Rule:** 
- Check the status table BEFORE rewriting any spec file
- If status is ✅ COMPLETE — STOP — the file is locked
- If status is ⬜ PENDING — proceed with rewrite
- Update the status table after completing a rewrite

> This document does not maintain the status table. Your pipeline monitor is the single source of truth. Refer to it for current status of any module spec file.

---

## QUICK REFERENCE — BEFORE AND AFTER EXAMPLES

**Variable Names**

| Before | After |
|--------|-------|
| studentName | "child name" |
| deskNumber | "desk number" |
| period1Subject | "first lesson subject" |
| totalBags | "total bags" |

**Output Statements**

| Before | After |
|--------|-------|
| console.log("Hello " + name) | PRINT "Hello ", "child name" |
| console.log(`Name: ${name}`) | PRINT "Name: ", "child name" |

**Banned Word Replacements**

| Before | After |
|--------|-------|
| student | child |
| period (school) | lesson |
| program/programming | code/coding |
| color | colour |
| organize | organise |
| recognize | recognise |
| center | centre |
| math | maths |

---

## REMEMBER

> The specs are the instructions the AI reads first. If the spec is clean and correct, the AI generates clean and correct exercises. If the spec has JS in it, the AI will put JS in the exercises. The specs are the foundation of everything — get them right and the rest follows automatically.

**The gold standard is now MODULE-0-EXERCISE-TEMPLATE-MASTER.md — not any old spec file. Always check there first.**

---

END OF SPEC REWRITE GUIDE



<!-- ORIGINAL VERSION DO NOT REMOVE 
# HOW TO REWRITE MODULE SPECS
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Step by step guide for rewriting all module spec files to be language-agnostic
**Reference:** MODULE-1-VARIABLES-SPECS.md is the gold standard example — all specs must match this standard

---

## BEFORE YOU START

Every spec file you rewrite must be checked against these three files:

1. **MODULE-0-EXERCISE-TEMPLATE-MASTER.md** — the rules every exercise must follow
2. **MODULE-0-SPEC-FILE-TEMPLATE.md** — the structure every spec file must follow
3. **MODULE-1-VARIABLES-SPECS.md** — the gold standard example of a correctly written spec

If anything in the rewritten spec conflicts with these three files — the three files win every time.

---

## THE PROBLEM WITH THE EXISTING SPECS

Every existing spec file was written for JavaScript. They contain:

- Variable names in camelCase — `studentName`, `deskNumber`, `teacherName`
- References to template literals, console.log, backticks
- References to programming, coding tools, and JS syntax
- Quality checklists that check for JS-specific things
- Concepts that reference JS-only features
- The word "student" instead of "child"

**None of this should appear in the rewritten specs.**

---

## STEP BY STEP — HOW TO REWRITE A SPEC FILE

### Step 1 — Open the existing spec file
Read it fully before changing anything. Understand what each exercise is trying to teach.

### Step 2 — Update the header
- Remove any JS references from the title or subtitle
- Update the purpose line — remove "test if AI can" — this is the real thing now
- Add "Language-Agnostic Edition" to the subtitle
- Add "Updated: March 2026"

### Step 3 — Update HOW TO USE THIS WITH AI
Replace with this exact instruction every time:

```
## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-[X]-[TOPIC]-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."
```

### Step 4 — Rewrite VARIABLES TO USE for every exercise
- Remove ALL camelCase variable names
- Replace with natural language descriptions in quotes
- Example: `studentName` → `"child name"`
- Example: `deskNumber` → `"desk number"`
- Example: `teacherName` → `"teacher name"`
- Example: `period1Subject` → `"first period subject"`

### Step 5 — Update the CONCEPT field
- Remove any mention of template literals, console.log, or JS syntax
- Describe what the child is learning in plain English
- Example: "Creating variables and using template literals" → "Creating variables to store and display information"

### Step 6 — Update ALT TEXT fields
- Remove any mention of console, terminal, or language tools
- Example: "First steps using the console and template literals" → "First steps storing and displaying information"

### Step 7 — Check EXPECTED OUTPUT fields
- These should show plain readable output — no JS syntax
- Example: `"My name is ${name}"` → `"My name is Ben"`
- All outputs should read as natural English sentences

### Step 8 — Update NARRATIVE CONTEXT
- Remove the word "programming" — replace with "coding" or remove entirely
- Remove any JS-specific references
- Keep all the themes, stories, and classroom/factory narrative exactly as they are

### Step 9 — Replace the QUALITY CHECKLIST
Replace the entire checklist with this standard checklist every time:

```
## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name matches exactly
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET and PRINT — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Uses <code> tags (not <highlight>)
- [ ] IDs follow pattern: [section]-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="[section]"
- [ ] Image filename and alt text match spec
- [ ] Empty hint/output/answer containers present

- [ ] Exercise 1 ONLY → Part A AND Part B both show full pseudocode 
- [ ] Exercises 2, 3, 4, 5 → NO pseudocode shown at all (neither Part A nor Part B)
- [ ] That means for Exercises 2-5: Parts A and B Step 4 → No pseudocode 
      (children writes everything from scratch)

- [ ] Expected outputs match the spec
- [ ] Nothing used that hasn't been taught in a helper box (Rule 6 — confer with user)
```

### Step 10 — Replace TEST RESULTS section
Replace with this standard section every time:

```
## GENERATION RESULTS

**When you generate with AI, document here:**
- Which AI was used: ___________
- Exercise generated: ___________
- Did it generate correctly? YES / NO
- What needed fixing: ___________
- Number of attempts needed: ___________
```

---

## WHAT TO KEEP — DO NOT CHANGE THESE

- The exercise titles and emojis — these are perfect as they are
- The scenarios — the classroom and factory themes stay exactly as they are
- The exercise flow and narrative — this is the heart of the course
- The section names — variables, operations, conditions, loops etc
- The exercise numbers
- The overall structure of the file

---

## WHAT EVERY REWRITTEN SPEC MUST HAVE

- [ ] No camelCase variable names anywhere
- [ ] No JS syntax anywhere
- [ ] No mention of template literals, console.log, or backticks
- [ ] No mention of "programming" — use "coding" or remove
- [ ] No mention of "student" — use "child"
- [ ] Natural language variable descriptions in quotes throughout
- [ ] Standard HOW TO USE THIS WITH AI section
- [ ] Standard QUALITY CHECKLIST
- [ ] Standard GENERATION RESULTS section
- [ ] References MODULE-0-EXERCISE-TEMPLATE-MASTER.md
- [ ] References the correct helper boxes file for that module

---

## THE SPEC FILES THAT NEED REWRITING

Work through them in this order:

- [ ] MODULE-2-OPERATORS-SPECS.md
- [ ] MODULE-3-CONDITIONS-PART1-SPECS.md
- [ ] MODULE-3-CONDITIONS-PART2-SPECS.md
- [ ] MODULE-3-CONDITIONS-PART3-SPECS.md
- [ ] MODULE-3-CONDITIONS-PART4-SPECS.md
- [ ] MODULE-3-CONDITIONS-PART5-SPECS.md
- [ ] MODULE-4-LOGICAL-OPERATORS-PART1-SPECS.md
- [ ] MODULE-4-LOGICAL-OPERATORS-PART2-SPECS.md
- [ ] MODULE-5-LOOPS-PART-1-SPEC.md
- [ ] MODULE-5-LOOPS-PART-2-SPEC.md
- [ ] MODULE-5-LOOPS-PART-3-SPEC.md
- [ ] MODULE-5-LOOPS-PART-4-SPEC.md

---

## REMEMBER

> The specs are the instructions the AI reads first. If the spec is clean and correct, the AI generates clean and correct exercises. If the spec has JS in it, the AI will put JS in the exercises. The specs are the foundation of everything — get them right and the rest follows automatically.

---

END OF SPEC REWRITE GUIDE -->
