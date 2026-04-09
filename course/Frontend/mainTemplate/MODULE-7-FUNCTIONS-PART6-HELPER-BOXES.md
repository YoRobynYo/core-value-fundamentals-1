# MODULE 7 - FUNCTIONS PART 6 - HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper box content for Module 7 Functions Part 6
**Setting:** ☕ The Popcorn Press Café — the grand finale!

---

## HELPER BOX 1: Welcome to The Popcorn Press! ☕

```html
<!-- Helper Box 1: Welcome to The Popcorn Press -->
<div class="helper-box">
  <h3 class="box-title">☕ Welcome to The Popcorn Press! ☕</h3>

  <p>You have worked incredibly hard. You have learned variables, operators,
    conditions, loops, and functions. You have built things at the factory,
    checked safety equipment, tracked ingredients, and processed batches.</p>

  <p>Now it is time for something special. The factory has its very own café —
    <strong>The Popcorn Press</strong> — and today YOU are running it!</p>

  <h4 class="sub-title">The Popcorn Press Menu:</h4>

  <ul class="indented-list">
    <li>☕ <strong>The Butter Blast</strong> — warm buttery latte</li>
    <li>🧋 <strong>The Caramel Crunch</strong> — sweet caramel frappe</li>
    <li>🌀 <strong>The Salt & Swirl</strong> — salted caramel twist</li>
    <li>⚡ <strong>The Kernel Kicker</strong> — strong espresso shot</li>
    <li>🍬 <strong>The Toffee Pop</strong> — toffee steamer</li>
    <li>🧀 <strong>The Cheese Whip</strong> — savoury hot chocolate</li>
    <li>🌶️ <strong>The Chilli Fizz</strong> — spicy cold brew</li>
    <li>🍦 <strong>The Sweet Batch</strong> — vanilla cream soda</li>
    <li>🌑 <strong>The Midnight Kernel</strong> — dark chocolate mocha</li>
    <li>❄️ <strong>The Factory Frost</strong> — iced mint popcorn shake</li>
  </ul>

  <h4 class="sub-title">How the café works:</h4>

  <p>Every order goes through the same process — take the customer's name,
    check what they want, work out the price, and hand back the order. Sound
    familiar? That is exactly what a function does!</p>

  <div class="code-block">
    FUNCTION "take order" ("customer name", "drink")<br>
    &nbsp;&nbsp;PRINT "Thank you ", "customer name"<br>
    &nbsp;&nbsp;RETURN "drink"<br>
    END FUNCTION<br>
    <br>
    SET "order" = CALL "take order" ("Marivic", "The Butter Blast")<br>
    PRINT "Order ready: ", "order"
  </div>

  <p class="output">Output:<br>
    Thank you Marivic<br>
    Order ready: The Butter Blast</p>

  <p>You already know everything you need. Now let us open the café! 🎉</p>

  <p class="note">💡 <strong>Remember:</strong> The function takes the order,
    does the work, and hands the answer back with RETURN. The café runs one
    customer at a time — or with a loop, the whole queue at once!</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: Everything Working Together 🌳

```html
<!-- Helper Box 2: Everything Working Together -->
<div class="helper-box">
  <h3 class="box-title">🌳 Everything Working Together — The Full Café System 🌳</h3>

  <p>Here is the complete café ordering system. Every single thing you have
    learned since Module 1 is here — all working together in one place.
    Read it carefully — you already know every single part of this!</p>

  <h4 class="sub-title">The complete café ordering system:</h4>

  <div class="code-block">
    SET "cafe name" = "The Popcorn Press"<br>
    SET "small price" = 3<br>
    SET "large price" = 4<br>
    <br>
    FUNCTION "take order" ("customer name", "drink", "size")<br>
    &nbsp;&nbsp;IF "size" = "large"<br>
    &nbsp;&nbsp;&nbsp;&nbsp;SET "price" = "large price"<br>
    &nbsp;&nbsp;ELSE<br>
    &nbsp;&nbsp;&nbsp;&nbsp;SET "price" = "small price"<br>
    &nbsp;&nbsp;END IF<br>
    &nbsp;&nbsp;SET "total" = "price" * 1<br>
    &nbsp;&nbsp;RETURN "customer name", " — ", "drink", " (", "size", ") — £", "total"<br>
    END FUNCTION<br>
    <br>
    FOR EACH "customer" IN ("Marivic", "Gabrielle", "Alec", "Ellaine")<br>
    &nbsp;&nbsp;SET "order" = CALL "take order" ("customer", "The Butter Blast", "large")<br>
    &nbsp;&nbsp;PRINT "cafe name", ": ", "order"<br>
    END FOR
  </div>

  <p class="output">Output:<br>
    The Popcorn Press: Marivic — The Butter Blast (large) — £4<br>
    The Popcorn Press: Gabrielle — The Butter Blast (large) — £4<br>
    The Popcorn Press: Alec — The Butter Blast (large) — £4<br>
    The Popcorn Press: Ellaine — The Butter Blast (large) — £4</p>

  <h4 class="sub-title">Can you spot everything you have learned?</h4>

  <ul class="indented-list">
    <li>🟦 <strong>Variables outside</strong> — "cafe name", "small price", "large price" live outside the function</li>
    <li>🟩 <strong>Parameters</strong> — "customer name", "drink" and "size" are passed in each time</li>
    <li>🟧 <strong>Condition</strong> — IF checks the size and sets the right price</li>
    <li>🟥 <strong>Operator</strong> — "price" * 1 calculates the total</li>
    <li>⬜ <strong>Variables inside</strong> — "price" and "total" live inside the function</li>
    <li>🟪 <strong>RETURN</strong> — hands the complete order back out</li>
    <li>🔁 <strong>Loop</strong> — processes every customer automatically</li>
    <li>📞 <strong>CALL</strong> — the loop calls the function for each customer</li>
  </ul>

  <p>That is <strong>everything</strong> — from Module 1 all the way to Module 7.
    Variables. Operators. Conditions. Functions. Loops. Return. Parameters.
    All in one café ordering system.</p>

  <p>You built this. You understand every single part of it.
    <strong>You are a coder.</strong> Now let us run the café! ☕🍿</p>

  <p class="note">💡 <strong>The Popcorn Press is open for business —
    and you are in charge! Work through the exercises and by the end
    you will have built the complete café ordering system from scratch. 🎉</strong></p>
</div>
<!-- End of Helper Box 2 -->
```

---

## NOTES FOR PIPELINE

- Setting: The Popcorn Press Café ☕🍿
- This is the GRAND FINALE of Module 7 — all concepts together
- Helper Box 1: Welcome to the café, introduce the menu, show a simple order function
- Helper Box 2: The complete system — every concept labelled and working together
- All 10 drinks used across the exercises
- Names: Marivic, Gabrielle, Alec, Ellaine
- Café name: The Popcorn Press
- Pseudocode keywords: FUNCTION, END FUNCTION, CALL, RETURN, SET, PRINT, IF, ELSE, END IF, FOR EACH, END FOR
- Never use real language syntax
- British English throughout
- Prices in £ (pounds)
