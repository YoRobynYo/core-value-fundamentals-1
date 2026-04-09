# MODULE 8 — ARRAYS PART 2 — HELPER BOXES
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Helper boxes for Module 8 Arrays Part 2 — teaches how to use arrays with functions — passing a list into a function and getting something back
**Used by:** Any AI when generating Module 8 Arrays Part 2 helper box HTML

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

## RULE 6: ARRAYS AND FUNCTIONS 

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

**What is NEW in this part:**
- Passing a list into a function
- Using RETURN with a list
- LENGTH OF a list

**What is NOT yet taught — do NOT use:**
- FOR EACH loops with lists (Part 3)
- Conditions with lists (Part 4)
- Lists + Loops + Functions (Part 5)
- Lists + Conditions + Functions (Part 6)

---

## HELPER BOX PART 2: ARRAYS AND FUNCTIONS 🔧 

```html
<!-- Helper Box Part 2: Arrays + Functions -->
<div class="helper-box">
  <h3 class="box-title">🔧 Using a List With a Function 🔧</h3>

  <p>You already know how to create a function and how to create a list. Now we are
    going to put them together — passing a list INTO a function so it can do something
    useful with it!</p>

  <h4 class="sub-title">Passing a List Into a Function:</h4>

  <p>Imagine the teacher hands their clipboard to an assistant and says "read me the
    first name on this list." The clipboard is the list — the assistant is the function!</p>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom", "Aisha"]<br>
    <br>
    FUNCTION "read first name" TAKES "class names"<br>
    &nbsp;&nbsp;PRINT "First on the list:", "class names"[0]<br>
    END FUNCTION<br>
    <br>
    CALL "read first name" WITH "class names"
  </div>

  <p class="output">Output: First on the list: Ben</p>

  <h4 class="sub-title">A Function That Gives Something Back:</h4>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom", "Aisha"]<br>
    <br>
    FUNCTION "count names" TAKES "class names"<br>
    &nbsp;&nbsp;RETURN LENGTH OF "class names"<br>
    END FUNCTION<br>
    <br>
    SET "total" = CALL "count names" WITH "class names"<br>
    PRINT "Total children:", "total"
  </div>

  <p class="output">Output: Total children: 4</p>

  <p class="note">💡 <strong>Remember:</strong> A function can take a list as its
    input, work with it, and give something back — just like handing a clipboard
    to an assistant and asking them to report back!</p>
</div>

<!-- End of Helper Box Part 2 -->

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