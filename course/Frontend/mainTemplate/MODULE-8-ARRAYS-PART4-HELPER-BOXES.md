# MODULE 8 — ARRAYS PART 4 — HELPER BOXES
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Helper boxes for Module 8 Arrays Part 4 — teaches how to use conditions with lists
**Used by:** Any AI when generating Module 8 Arrays Part 4 helper box HTML

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

**What is NEW in this part:**
- Using IF/THEN with a list
- Checking a specific item in a list by position
- Using a condition inside a FOR EACH loop to filter items

**What is NOT yet taught — do NOT use:**
- Lists + Loops + Functions (Part 5)
- Lists + Conditions + Functions (Part 6)

---

## HELPER BOX PART 4: CONDITIONS WITH LISTS 

```html

<!-- Helper Box Part 4: Conditions with Lists -->
<div class="helper-box">
  <h3 class="box-title">❓ Using Conditions With a List ❓</h3>

  <p>You learned about conditions back in Module 3. Here is a quick reminder — and
    then we will see how they work with lists to make much smarter decisions!</p>

  <h4 class="sub-title">Quick Reminder — What a Condition Does:</h4>

  <p>A condition checks if something is true or false and then decides what to do.</p>

  <div class="code-block">
    SET "score" = 8<br>
    <br>
    IF "score" > 5 THEN<br>
    &nbsp;&nbsp;PRINT "Well done!"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Keep practising!"<br>
    END IF
  </div>

  <p class="output">Output: Well done!</p>

  <h4 class="sub-title">Now — Checking a Specific Item in a List:</h4>

  <p>We can use a condition to check something about a specific item on a list.
    For example — checking if the first name on the classroom list is the one
    we are looking for:</p>

  <div class="code-block">
    SET "class names" = ["Ben", "Sara", "Tom", "Aisha"]<br>
    <br>
    IF "class names"[0] = "Ben" THEN<br>
    &nbsp;&nbsp;PRINT "Ben is first on the list!"<br>
    ELSE<br>
    &nbsp;&nbsp;PRINT "Ben is not first on the list."<br>
    END IF
  </div>

  <p class="output">Output: Ben is first on the list!</p>

  <h4 class="sub-title">Conditions Inside a Loop:</h4>

  <p>We can combine a loop AND a condition to check every item on the list and
    only do something for the ones that match our rule:</p>

  <div class="code-block">
    SET "classroom numbers" = [101, 102, 103, 104, 105]<br>
    <br>
    FOR EACH "number" IN "classroom numbers"<br>
    &nbsp;&nbsp;IF "number" > 102 THEN<br>
    &nbsp;&nbsp;&nbsp;&nbsp;PRINT "Visit classroom:", "number"<br>
    &nbsp;&nbsp;END IF<br>
    END FOR
  </div>

  <p class="output">Output:<br>
    Visit classroom: 103<br>
    Visit classroom: 104<br>
    Visit classroom: 105</p>

  <p>The loop checks every classroom number on the list. The condition only prints
    the ones above 102 — so classrooms 103, 104 and 105 are printed and the others
    are skipped!</p>

  <p class="note">💡 <strong>Remember:</strong> A condition inside a loop checks
    every single item automatically. You do not have to check them one by one
    yourself. That is the power of combining the two!</p>
</div>

<!-- End of Helper Box Part 4 -->

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