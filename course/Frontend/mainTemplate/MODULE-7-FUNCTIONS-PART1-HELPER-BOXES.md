# MODULE 7 - FUNCTIONS PART 1 - HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper box content for Module 7 Functions Part 1
**Setting:** 🏫 Classroom — using familiar variables from Module 1

---

## HELPER BOX 1: From Variables to Functions

```html
<!-- Helper Box 1: From Variables to Functions -->
<div class="helper-box">
  <h3 class="box-title">🧠 From Variables to Functions 🧠</h3>

  <p>You have already learned how to store information in variables. You have been doing
    it since Module 1! But what happens when you need to do the same job over and over
    again? Writing the same instructions ten times would be exhausting — and if you ever
    needed to change something, you would have to find and fix every single copy!</p>

  <p>That is exactly the problem that <strong>functions</strong> solve.</p>

  <h4 class="sub-title">What is a Function?</h4>

  <p>Think of a function like a recipe card. You write the instructions down once, give
    the card a name, and then anyone can follow it whenever they need to. You do not
    rewrite the recipe every time — you just say the name and the instructions run!</p>

  <p>In coding, a function is a named container for instructions. You write the
    instructions once, give them a name, and use that name whenever you need them to run.</p>

  <h4 class="sub-title">The Three Parts of a Function:</h4>

  <ul class="indented-list">
    <li><strong>FUNCTION</strong> — tells the computer "here come the instructions, and here is their name"</li>
    <li><strong>The instructions inside</strong> — everything the function will do when called</li>
    <li><strong>END FUNCTION</strong> — tells the computer "that is the end of the instructions"</li>
  </ul>

  <h4 class="sub-title">Here is your first function:</h4>

  <div class="code-block">
    SET "child name" = "David"<br>
    <br>
    FUNCTION "introduce me"<br>
    &nbsp;&nbsp;PRINT "My name is ", "child name"<br>
    END FUNCTION
  </div>

  <h4 class="sub-title">But wait — nothing happened yet!</h4>

  <p>Writing a function is like writing a recipe card — it does not cook the meal by
    itself! To make the instructions actually run, you need to <strong>call</strong> it.
    Calling a function is as simple as using its name:</p>

  <div class="code-block">
    CALL "introduce me"
  </div>

  <p class="output">Output: My name is David</p>

  <h4 class="sub-title">Now let's see the real power — write once, use anywhere:</h4>

  <div class="code-block">
    SET "child name" = "David"<br>
    <br>
    FUNCTION "introduce me"<br>
    &nbsp;&nbsp;PRINT "My name is ", "child name"<br>
    END FUNCTION<br>
    <br>
    CALL "introduce me"<br>
    CALL "introduce me"<br>
    CALL "introduce me"
  </div>

  <p class="output">Output:<br>
    My name is David<br>
    My name is David<br>
    My name is David</p>

  <p>The same instructions ran three times — and you only wrote them once! Change the
    instructions in one place and every single call updates automatically. That is the
    superpower of functions.</p>

  <p class="note">💡 <strong>Remember:</strong> Writing a function does nothing on its own.
    You must CALL it to make it run — just like a recipe card does nothing until
    someone actually follows it!</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: The Function Tree 🌳

```html
<!-- Helper Box 2: The Function Tree -->
<div class="helper-box">
  <h3 class="box-title">🌳 The Function Tree — Seeing How It All Fits 🌳</h3>

  <p>Now you know what a function is and how to call it. But where does the information
    come from? Variables can live in different places — and that changes what they can do
    inside a function!</p>

  <h4 class="sub-title">A variable OUTSIDE a function — available everywhere:</h4>

  <div class="code-block">
    SET "classroom" = "Room 3"<br>
    <br>
    FUNCTION "show class"<br>
    &nbsp;&nbsp;PRINT "Welcome to ", "classroom"<br>
    END FUNCTION<br>
    <br>
    CALL "show class"
  </div>

  <p class="output">Output: Welcome to Room 3</p>

  <p>Because "classroom" was set outside the function, the function can see it and use it!</p>

  <h4 class="sub-title">A variable INSIDE a function — only lives while the function runs:</h4>

  <div class="code-block">
    FUNCTION "show class"<br>
    &nbsp;&nbsp;SET "classroom" = "Room 3"<br>
    &nbsp;&nbsp;PRINT "Welcome to ", "classroom"<br>
    END FUNCTION<br>
    <br>
    CALL "show class"
  </div>

  <p class="output">Output: Welcome to Room 3</p>

  <p>This works too — but "classroom" only exists while the function is running.
    Once it finishes, the variable is gone!</p>

  <h4 class="sub-title">Now here is everything working together:</h4>

  <div class="code-block">
    SET "school name" = "Greenfield Primary"<br>
    <br>
    FUNCTION "introduce child"<br>
    &nbsp;&nbsp;SET "child name" = "David"<br>
    &nbsp;&nbsp;SET "desk number" = 5<br>
    &nbsp;&nbsp;PRINT "School: ", "school name"<br>
    &nbsp;&nbsp;PRINT "My name is ", "child name"<br>
    &nbsp;&nbsp;PRINT "I sit at desk ", "desk number"<br>
    END FUNCTION<br>
    <br>
    CALL "introduce child"
  </div>

  <p class="output">Output:<br>
    School: Greenfield Primary<br>
    My name is David<br>
    I sit at desk 5</p>

  <ul class="indented-list">
    <li><strong>"school name"</strong> lives OUTSIDE — available everywhere</li>
    <li><strong>"child name"</strong> and <strong>"desk number"</strong> live INSIDE — only while the function runs</li>
    <li>The function uses both — inside and outside variables working together!</li>
  </ul>

  <p class="note">💡 <strong>Remember:</strong> Variables set outside a function are available
    everywhere. Variables set inside a function only exist while that function is running.
    In the next modules you will learn how to pass information INTO a function — making
    them even more powerful! 🚀</p>
</div>
<!-- End of Helper Box 2 -->
```

---

## NOTES FOR PIPELINE

- Setting: Classroom 🏫
- Uses familiar Module 1 variables: "child name", "desk number", "classroom"
- Pseudocode keywords introduced: FUNCTION, END FUNCTION, CALL
- Helper Box 1: variables → function → call → parameter — complete journey in one box
- Helper Box 2: where variables live — outside, inside, parameter — the full tree
- Exercises 1-3: no parameters — just FUNCTION, END FUNCTION, CALL
- Exercises 4-5: introduce parameters
- Never use real language syntax (no def, function(), arrow functions etc)
- British English throughout
- Names used: David, Samantha, Gabrielle
- School name: Greenfield Primary
