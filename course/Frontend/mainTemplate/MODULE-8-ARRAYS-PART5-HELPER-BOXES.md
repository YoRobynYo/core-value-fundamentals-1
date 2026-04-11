# MODULE 8 — ARRAYS PART 5 — HELPER BOXES
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Helper boxes for Module 8 Arrays Part 5 — teaches how to combine lists, loops, and functions together
**Used by:** Any AI when generating Module 8 Arrays Part 5 helper box HTML

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
- FOR EACH loops with lists — Module 8 Part 3
- Conditions with lists — Module 8 Part 4

**What is NEW in this part:**
- Passing a list into a function
- Using a loop inside a function to process every item in the list
- Returning a new list from a function

**What is NOT yet taught — do NOT use:**
- Lists + Conditions + Functions (Part 6)

---

## HELPER BOX PART 5: LISTS + LOOPS + FUNCTIONS TOGETHER 🔧🔁

```html

<!-- Helper Box Part 5: Lists + Loops + Functions -->
<div class="helper-box">
  <h3 class="box-title">🔧🔁 Putting It All Together — Lists, Loops and Functions 🔧🔁</h3>

  <p>You already know how to create a list, how to loop through it, and how to write
    a function. Now we put ALL of them together — a function that takes a list,
    loops through every item, and does something with each one!</p>

  <h4 class="sub-title">A Function That Processes Every Item in a List:</h4>

  <p>Imagine the teacher wants to greet every child on the clipboard.
    The function takes the list, loops through each name, and prints a
    welcome message for every single child:</p>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom", "Aisha"]<br>
    <br>
    FUNCTION "greet all children" TAKES "name list"<br>
    &nbsp;&nbsp;FOR EACH "child" IN "name list"<br>
    &nbsp;&nbsp;&nbsp;&nbsp;PRINT "Welcome to class:", "child"<br>
    &nbsp;&nbsp;END FOR<br>
    END FUNCTION<br>
    <br>
    CALL "greet all children" WITH "class names"
  </div>

  <p class="output">Output:<br>
    Welcome to class: Ben<br>
    Welcome to class: Sara<br>
    Welcome to class: Tom<br>
    Welcome to class: Aisha</p>

  <h4 class="sub-title">A Function That Returns Something Back:</h4>

  <p>Sometimes you want the function to give something back — like counting
    how many children are on the list. The function loops through the list
    and RETURNS the total count:</p>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom", "Aisha"]<br>
    <br>
    FUNCTION "count children" TAKES "name list"<br>
    &nbsp;&nbsp;RETURN LENGTH OF "name list"<br>
    END FUNCTION<br>
    <br>
    SET "total" = CALL "count children" WITH "class names"<br>
    PRINT "Total children in class:", "total"
  </div>

  <p class="output">Output: Total children in class: 4</p>

  <p class="note">💡 <strong>Remember:</strong> A function can take a list,
    loop through every item, do something with each one, and even RETURN
    a result. That is the power of combining everything you have learned!</p>
</div>

<!-- End of Helper Box Part 5 -->
 
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