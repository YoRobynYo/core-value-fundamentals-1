# MODULE 8 — ARRAYS PART 6 — HELPER BOXES
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Helper boxes for Module 8 Arrays Part 6 — teaches how to combine lists, conditions, and functions together
**Used by:** Any AI when generating Module 8 Arrays Part 6 helper box HTML

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

## RULE 6: LISTS + CONDITIONS + FUNCTIONS 🔧❓

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
- FOR EACH loops with lists — Module 8 Part 3
- Conditions with lists — Module 8 Part 4
- Lists + Loops + Functions — Module 8 Part 5

**What is NEW in this part:**
- Using conditions (IF/THEN) inside a function that processes a list
- Filtering a list based on a rule and returning a new list
- Combining conditions, loops, lists, and functions in one program

**What is NOT yet taught — do NOT use:**
- Nothing — this is the final part of Module 8!

---

## HELPER BOX PART 6: LISTS + CONDITIONS + FUNCTIONS TOGETHER 🔧❓

```html
<!-- Helper Box Part 6: Lists + Conditions + Functions -->
<div class="helper-box">
  <h3 class="box-title">🔧❓ Putting It All Together — Lists, Conditions and Functions 🔧❓</h3>

  <p>You have learned lists, conditions, loops, and functions. Now we put EVERYTHING
    together — a function that takes a list, checks each item with a condition,
    and returns a new list with only the items that match!</p>

  <h4 class="sub-title">A Function That Filters a List:</h4>

  <p>Imagine the teacher only wants to know which children have names starting with
    the letter "S". The function takes the list, checks each name, and builds a
    new list with only the matches:</p>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom", "Sam", "Aisha"]

    FUNCTION "filter names starting with S" TAKES "name list"
      SET "matches" = []
      FOR EACH "child" IN "name list"
        IF FIRST LETTER OF "child" = "S" THEN
          ADD "child" TO "matches"
        END IF
      END FOR
      RETURN "matches"
    END FUNCTION

    SET "s names" = CALL "filter names starting with S" WITH "class names"
    PRINT "Names starting with S:", "s names"
  </div>

  <p class="output">Output: Names starting with S: ["Sara", "Sam"]</p>

  <h4 class="sub-title">A Function That Checks a Rule and Returns Something Different:</h4>

  <p>What if the teacher wants to know how many children scored above 80 on a test?
    The function takes a list of scores, checks each one with a condition, and
    counts how many pass:</p>

  <div class="code-block">
    SET "test scores" = [65, 88, 72, 94, 81, 57]

    FUNCTION "count passing scores" TAKES "score list"
      SET "pass count" = 0
      FOR EACH "score" IN "score list"
        IF "score" > 80 THEN
          SET "pass count" = "pass count" + 1
        END IF
      END FOR
      RETURN "pass count"
    END FUNCTION

    SET "how many passed" = CALL "count passing scores" WITH "test scores"
    PRINT "Number of students who passed:", "how many passed"
  </div>

  <p class="output">Output: Number of students who passed: 3</p>

  <p class="note">💡 <strong>Remember:</strong> You can now combine EVERYTHING
    you have learned since Module 1 — variables, operators, conditions, loops,
    functions, and arrays — all working together in one program. That is what
    real coding looks like. You have built something amazing. Well done! 🎉</p>
</div>

<!-- End of Helper Box Part 6 -->
 
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