# MODULE 7 - FUNCTIONS PART 5 - HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper box content for Module 7 Functions Part 5
**Setting:** 🍿 Popcorn Factory — production batch tracking

---

## HELPER BOX 1: Loops and Functions Together

```html
<!-- Helper Box 1: Loops and Functions Together -->
<div class="helper-box">
  <h3 class="box-title">🔁 Loops and Functions Together 🔁</h3>

  <p>You already know how to write a function and call it. You already know how to
    write a loop. But what happens when you put them together?</p>

  <p>Think about the popcorn factory. Every batch needs to be checked. Every batch
    needs to be counted. If you had to write the same instructions for every single
    batch — that would take forever! This is exactly where loops and functions
    become an unstoppable team.</p>

  <h4 class="sub-title">A loop on its own — runs the same instructions again and again:</h4>

  <div class="code-block">
    FOR "batch number" FROM 1 TO 3<br>
    &nbsp;&nbsp;PRINT "Processing batch ", "batch number"<br>
    END FOR
  </div>

  <p class="output">Output:<br>
    Processing batch 1<br>
    Processing batch 2<br>
    Processing batch 3</p>

  <h4 class="sub-title">A function on its own — runs when you call it:</h4>

  <div class="code-block">
    FUNCTION "count bags"<br>
    &nbsp;&nbsp;RETURN 10<br>
    END FUNCTION<br>
    <br>
    SET "result" = CALL "count bags"<br>
    PRINT "Bags ready: ", "result"
  </div>

  <p class="output">Output: Bags ready: 10</p>

  <h4 class="sub-title">Now put them together — a loop calling a function:</h4>

  <div class="code-block">
    FUNCTION "count bags"<br>
    &nbsp;&nbsp;RETURN 10<br>
    END FUNCTION<br>
    <br>
    FOR "batch number" FROM 1 TO 3<br>
    &nbsp;&nbsp;SET "bag count" = CALL "count bags"<br>
    &nbsp;&nbsp;PRINT "Batch ", "batch number", " — bags ready: ", "bag count"<br>
    END FOR
  </div>

  <p class="output">Output:<br>
    Batch 1 — bags ready: 10<br>
    Batch 2 — bags ready: 10<br>
    Batch 3 — bags ready: 10</p>

  <p>The function runs THREE times — once for each loop. You wrote the function
    once and the loop does all the work of calling it!</p>

  <p class="note">💡 <strong>Remember:</strong> Always write the function FIRST,
    then write the loop. The loop calls the function — not the other way round!</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: The Production Report Tree 🌳

```html
<!-- Helper Box 2: The Production Report Tree -->
<div class="helper-box">
  <h3 class="box-title">🌳 The Production Report Tree — Everything Working Together 🌳</h3>

  <p>Now let us see what happens when we add parameters and conditions into the mix.
    The loop passes different information to the function each time — and the function
    decides what to do with it!</p>

  <h4 class="sub-title">Loop + Function + Parameter — something different goes in each time:</h4>

  <div class="code-block">
    FUNCTION "check flavour" ("flavour")<br>
    &nbsp;&nbsp;RETURN "flavour"<br>
    END FUNCTION<br>
    <br>
    FOR "flavour" IN "butter", "cheese", "salt"<br>
    &nbsp;&nbsp;SET "result" = CALL "check flavour" ("flavour")<br>
    &nbsp;&nbsp;PRINT "Flavour ready: ", "result"<br>
    END FOR
  </div>

  <p class="output">Output:<br>
    Flavour ready: butter<br>
    Flavour ready: cheese<br>
    Flavour ready: salt</p>

  <p>The same function runs three times — but with a different flavour each time!
    The loop is doing the hard work of passing each flavour in.</p>

  <h4 class="sub-title">Now here is everything working together — the full production report:</h4>

  <div class="code-block">
    SET "factory name" = "Poppy's Factory"<br>
    <br>
    FUNCTION "production report" ("flavour", "bag count")<br>
    &nbsp;&nbsp;IF "bag count" > 5<br>
    &nbsp;&nbsp;&nbsp;&nbsp;RETURN "flavour", " — Ready!"<br>
    &nbsp;&nbsp;ELSE<br>
    &nbsp;&nbsp;&nbsp;&nbsp;RETURN "flavour", " — Not enough bags!"<br>
    &nbsp;&nbsp;END IF<br>
    END FUNCTION<br>
    <br>
    FOR EACH batch IN ("butter", 12), ("cheese", 3), ("salt", 8)<br>
    &nbsp;&nbsp;SET "report" = CALL "production report" ("flavour", "bag count")<br>
    &nbsp;&nbsp;PRINT "Factory: ", "factory name"<br>
    &nbsp;&nbsp;PRINT "Batch report: ", "report"<br>
    END FOR
  </div>

  <p class="output">Output:<br>
    Factory: Poppy's Factory<br>
    Batch report: butter — Ready!<br>
    Factory: Poppy's Factory<br>
    Batch report: cheese — Not enough bags!<br>
    Factory: Poppy's Factory<br>
    Batch report: salt — Ready!</p>

  <ul class="indented-list">
    <li><strong>"factory name"</strong> lives OUTSIDE — available everywhere</li>
    <li><strong>"flavour"</strong> and <strong>"bag count"</strong> are PARAMETERS — different each loop</li>
    <li>The condition checks INSIDE the function — decides the result</li>
    <li>RETURN hands the answer back — the loop catches it and prints it</li>
    <li>The loop runs the whole thing THREE times automatically!</li>
  </ul>

  <p>Variables. Parameters. Operators. Conditions. Functions. Loops. Return.
    You are using everything — all at once. That is what real coding looks like! 🚀</p>

  <p class="note">💡 <strong>Remember:</strong> The function is always written first.
    The loop calls it — passing different information each time. Together they can
    process an entire factory's worth of batches in just a few lines of code!</p>
</div>
<!-- End of Helper Box 2 -->
```

---

## NOTES FOR PIPELINE

- Setting: Popcorn Factory 🍿
- Pseudocode keywords used: FUNCTION, END FUNCTION, CALL, RETURN, FOR, END FOR, IF, ELSE, END IF
- Helper Box 1: loop alone → function alone → loop calling function
- Helper Box 2: loop + parameter → full production report with everything together
- Never use real language syntax
- British English throughout
- Names used: Marivic, Gabrielle, Alec
- Factory name: Poppy's Factory
