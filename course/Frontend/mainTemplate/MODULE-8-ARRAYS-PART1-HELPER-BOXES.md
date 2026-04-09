# MODULE 8 — ARRAYS PART 1 — HELPER BOXES
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Helper boxes for Module 8 Arrays Part 1 — teaches what an array is, how to create one, how to read from it by position, and how to ADD, REMOVE and UPDATE items
**Used by:** Any AI when generating Module 8 Arrays Part 1 helper box HTML

---

## IMPORTANT RULES FOR AI GENERATION

- Every code example uses PSEUDOCODE only — no JavaScript, Python, or any real language
- PRINT replaces console.log() / print()
- SET replaces let / var / const / =
- ADD replaces .push() or append()
- REMOVE replaces .pop() / .splice() / .remove()
- UPDATE replaces direct index assignment
- No camelCase or snake_case rules — naming conventions are taught in the language-specific course
- NEVER write camelCase variable names in any code example — ALWAYS use natural language descriptions in quotes
- Variable names in ALL code examples must use natural language in quotes — e.g. "class names" NOT classNames
- Array items are accessed using position numbers in square brackets — e.g. "class names"[0]
- Positions always start at 0 — NEVER start at 1
- To display text AND a variable together, use a comma to separate them inside PRINT
- NEVER use + to join text and variables — concatenation has not been taught in this context
- Keep ALL the warmth, stories, and classroom theme in helper boxes — exercises use the popcorn factory
- HTML structure stays exactly the same — only the content inside changes

---

## RULE 6: NEVER USE WHAT HASN'T BEEN TAUGHT

> If a concept, symbol, or syntax has not appeared in a helper box earlier in the course — it must NOT appear in any
exercise or example.
>
> If you need to use it — teach it in a helper box first. If you are not teaching it yet — do not use it at all.
>
> This rule protects children from being confused by things they have never seen before. It applies to every module,
every exercise, and every helper box across the entire course.

**What has been taught before this module:**
- SET, PRINT — Module 1
- Operators and calculations — Module 2
- IF / THEN / ELSE / END IF — Module 3
- AND / OR / NOT — Module 4
- FOR EACH / IN / END FOR — Module 5
- Functions — Module 7

**What is NEW in this part:**
- Square brackets [ ] — introduced here for the first time
- Array creation, reading by position, ADD, REMOVE, UPDATE

**What is NOT yet taught — do NOT use:**
- FOR EACH loops with lists — Part 3
- Functions with lists — Part 2
- Conditions with lists — Part 4
- Nested arrays (lists inside lists) — later part
- Searching or sorting arrays

---

## HELPER BOX PART 1: WHAT IS A LIST? + POSITIONS + ADD, REMOVE, UPDATE 📋

```html
<!-- Helper Box Part 1: What is a List? + Positions + ADD, REMOVE, UPDATE -->
<div class="helper-box">
  <h3 class="box-title">📋 What is a List? (Arrays) 📋</h3>

  <p>Imagine the teacher has a clipboard on their desk. On that clipboard is a list of
    names — every child who is helping in class today. Instead of writing each name in a
    separate variable, the teacher writes them all together in one neat list.</p>

  <p>In coding, we call this kind of list an <strong>array</strong>. An array lets you
    store multiple items together in one place — just like a clipboard holds a full list
    instead of lots of separate pieces of paper.</p>

  <h4 class="sub-title">Here is How We Create a List:</h4>

  <p>We use square brackets <strong>[ ]</strong> to hold the list. Each item inside is
    separated by a comma:</p>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom", "Aisha", "Jake"]
  </div>

  <p><strong>Breaking it down:</strong></p>
  <ul class="indented-list">
    <li><strong>SET</strong> — we are creating a variable, just like before</li>
    <li><strong>"class names"</strong> — the name of our list, written in plain English</li>
    <li><strong>[ ]</strong> — the square brackets hold everything in the list</li>
    <li><strong>"Ben", "Sara", "Tom"...</strong> — each item in the list, separated by commas</li>
  </ul>

  <p>A list can hold words or numbers — or both!</p>

  <div class="code-block">
    SET "classroom numbers" = [101, 102, 103, 104, 105]
  </div>

  <h4 class="sub-title">How Do You Read From a List? (Positions)</h4>

  <p>Every item on the list has a <strong>position</strong>. But here is the important
    part — <strong>lists always start counting from 0, not 1.</strong></p>

  <p>Think of it like this — the teacher's clipboard has five names. Their positions
    are:</p>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom", "Aisha", "Jake"]<br>
    <br>
    Position 0 → "Ben"<br>
    Position 1 → "Sara"<br>
    Position 2 → "Tom"<br>
    Position 3 → "Aisha"<br>
    Position 4 → "Jake"
  </div>

  <h4 class="sub-title">Reading a Specific Item:</h4>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom"]<br>
    PRINT "class names"[0]<br>
    PRINT "The third name is:", "class names"[2]
  </div>
  <p class="output">Output:<br>
    Ben<br>
    The third name is: Tom</p>

  <h4 class="sub-title">Changing a List — ADD, REMOVE and UPDATE</h4>

  <p>The teacher's clipboard might need a new name added, a name crossed off, or a
    name corrected. In coding we can do exactly the same thing!</p>

  <h4 class="sub-title">ADD — Putting a New Item on the List</h4>

  <p>To add a new name to the end of your list, we use the <strong>ADD</strong> command:</p>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom"]<br>
    ADD "Aisha" TO "class names"<br>
    PRINT "class names"
  </div>
  <p class="output">Output: ["Ben", "Sara", "Tom", "Aisha"]</p>

  <h4 class="sub-title">REMOVE — Taking an Item Off the List</h4>

  <p>To remove a name, we tell the computer which <strong>position</strong> to take away:</p>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom", "Aisha"]<br>
    REMOVE "class names"[1]<br>
    PRINT "class names"
  </div>
  <p class="output">Output: ["Ben", "Tom", "Aisha"]</p>

  <h4 class="sub-title">UPDATE — Changing an Item on the List</h4>

  <p>If a name was spelled wrong, we can <strong>UPDATE</strong> it at its position:</p>

  <div class="code-block">
    SET "class names" = ["Ben", "Tom", "Aisha"]<br>
    UPDATE "class names"[0] = "Benjamin"<br>
    PRINT "class names"
  </div>
  <p class="output">Output: ["Benjamin", "Tom", "Aisha"]</p>

  <p class="note">💡 <strong>Remember:</strong> ADD always goes to the very end of the
    list. REMOVE and UPDATE need a position number so the computer knows exactly which
    item to change. And positions always start at 0 — never 1!</p>
</div>

<!-- End of Helper Box Part 1 -->
 
```

---

## NOTES FOR AI WHEN GENERATING THESE HELPER BOXES

- Use the exact HTML structure above — class names do not change
- NEVER replace PRINT with console.log() or print()
- NEVER replace SET with let, var, const, or any real syntax
- NEVER replace ADD with .push() — use ADD TO
- NEVER replace REMOVE with .splice() or .pop() — use REMOVE
- NEVER replace UPDATE with direct index assignment syntax — use UPDATE
- NEVER write camelCase or snake_case variable names in any code example — ALWAYS use natural language descriptions in quotes e.g. "class names" NOT classNames
- NEVER add camelCase or snake_case naming convention rules — those come in the language course
- NEVER use + to join text and variables — use a comma inside PRINT instead
- NEVER introduce nested arrays — lists inside lists are not taught in Part 1
- NEVER introduce searching or sorting — not taught yet
- Helper boxes use the CLASSROOM world — exercises use the POPCORN FACTORY — do not mix them
- Keep the warm, friendly, encouraging tone throughout
- Target age is 10-12 years old — keep it simple, clear and fun
- Output examples should always show realistic, readable results
- Every concept should be explained with a real-world analogy first, then the pseudocode
- Positions ALWAYS start at 0 — never suggest otherwise
- Rule 6 always applies — never use what hasn't been taught in a helper box yet

---