# MODULE 8 — ARRAYS PART 3 — HELPER BOXES
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Helper boxes for Module 8 Arrays Part 3 — teaches how to use FOR EACH loops with lists
**Used by:** Any AI when generating Module 8 Arrays Part 3 helper box HTML

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

> If a concept, symbol, or syntax has not appeared in a helper box earlier in the course — it must NOT appear in any exercise or example.
>
> If you need to use it — teach it in a helper box first. If you are not teaching it yet — do not use it at all.

**What has been taught before this part:**
- SET, PRINT — Module 1
- Operators and calculations — Module 2
- IF / THEN / ELSE / END IF — Module 3
- AND / OR / NOT — Module 4
- FOR EACH / IN / END FOR — Module 5
- Functions — Module 7
- Arrays: creating, reading by position, ADD, REMOVE, UPDATE — Module 8 Part 1
- Arrays + Functions — Module 8 Part 2

**What is NEW in this part:**
- Using FOR EACH with a list
- Looping through every item in a list automatically

**What is NOT yet taught — do NOT use:**
- Conditions with lists (Part 4)
- Lists + Loops + Functions (Part 5)
- Lists + Conditions + Functions (Part 6)

---

## HELPER BOX PART 3: FOR EACH LOOPS WITH LISTS 🔁

```html
<!-- Helper Box Part 3: FOR EACH Loops with Lists -->

<div class="helper-box">
  <h3 class="box-title">🔁 FOR EACH Loops With a List 🔁</h3>

  <p>You learned about loops back in Module 5. Here is a quick reminder — and then
    we will see how they work with lists, which is where they become really powerful!</p>

  <h4 class="sub-title">Quick Reminder — What a Loop Does:</h4>

  <p>A loop repeats a set of instructions automatically — so you do not have to
    write the same thing over and over again.</p>

  <div class="code-block">
    FOR EACH "number" IN [0, 1, 2]<br>
    &nbsp;&nbsp;PRINT "number"<br>
    END FOR
  </div>

  <p class="output">Output:<br>
    0<br>
    1<br>
    2</p>

  <h4 class="sub-title">Now — Loops With a List:</h4>

  <p>Instead of writing a list of numbers, we can use a loop to go through every
    item on a list automatically. The loop visits each item in order and does
    something with it:</p>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom", "Aisha"]<br>
    <br>
    FOR EACH "name" IN "class names"<br>
    &nbsp;&nbsp;PRINT "name"<br>
    END FOR
  </div>

  <p class="output">Output:<br>
    Ben<br>
    Sara<br>
    Tom<br>
    Aisha</p>

  <p>The loop creates a temporary variable called <strong>"name"</strong>. On the
    first go, it holds "Ben", then "Sara", then "Tom", then "Aisha". Every name on
    the clipboard — printed automatically!</p>

  <h4 class="sub-title">Adding a Message:</h4>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom", "Aisha"]<br>
    <br>
    FOR EACH "name" IN "class names"<br>
    &nbsp;&nbsp;PRINT "Name on list:", "name"<br>
    END FOR
  </div>

  <p class="output">Output:<br>
    Name on list: Ben<br>
    Name on list: Sara<br>
    Name on list: Tom<br>
    Name on list: Aisha</p>

  <p class="note">💡 <strong>Remember:</strong> FOR EACH goes through every item
    in the list from first to last. You don't need to know how many items there are
    — the loop handles it for you!</p>
</div>

<!-- End of Helper Box Part 3 -->

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