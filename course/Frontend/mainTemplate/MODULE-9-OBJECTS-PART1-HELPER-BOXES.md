# MODULE 9 — OBJECTS PART 1 — HELPER BOXES
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Helper boxes for Module 9 Objects Part 1 — teaches what an object is, what properties are, and how to build and read a simple object
**Used by:** Any AI when generating Module 9 Objects Part 1 helper box HTML

---

## IMPORTANT RULES FOR AI GENERATION

- Every code example uses PSEUDOCODE only — no JavaScript, Python, or any real language
- PRINT replaces console.log() / print()
- SET replaces let / var / const / =
- OBJECT replaces {} syntax explanation — always use plain English first
- No camelCase or snake_case rules — naming conventions are taught in the language-specific course
- NEVER write camelCase variable names in any code example — ALWAYS use natural language descriptions in quotes
- Variable names in ALL code examples must use natural language in quotes — e.g. "my bead" NOT myBead
- Object properties are accessed using a dot — e.g. "my bead"."colour"
- To display text AND a variable together, use a comma to separate them inside PRINT
- NEVER use + to join text and variables — concatenation has not been taught in this context
- Keep ALL the warmth, stories, and café theme in helper boxes — exercises use the same café theme
- HTML structure stays exactly the same — only the content inside changes
- COLOUR not color — the bead has a colour property — this must always be spelled correctly

---

## RULE 6: NEVER USE WHAT HASN'T BEEN TAUGHT

> If a concept, symbol, or syntax has not appeared in a helper box earlier in the course — it must NOT appear in any exercise or example.
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
- Arrays: creating, reading, ADD, REMOVE, UPDATE — Module 8

**What is NEW in this part:**
- Curly braces { } — introduced here for the first time
- Creating an object with properties
- Accessing a property using a dot
- The concept of a property — a label with a value

**What is NOT yet taught — do NOT use:**
- Loops with objects
- Functions with objects
- Nested objects (objects inside objects)
- Arrays of objects

---

## HELPER BOX 1: WHAT IS AN OBJECT? 🧸

```html
<!-- Helper Box 1: What is an Object? -->
<div class="helper-box">
  <h3 class="box-title">🧸 What is an Object? 🧸</h3>

  <p>You already know how to store information in variables. But what if you need
    to store lots of information about ONE thing? Let's say you want to describe
    a bead. You might try this:</p>

  <div class="code-block">
    SET "bead colour" = "blue"<br>
    SET "bead shape" = "star"<br>
    SET "bead rarity" = "rare"
  </div>

  <p>That works — but it's messy. Three separate variables, all about the same bead.
    If you had ten beads, that would be thirty variables! There has to be a better way.</p>

  <h4 class="sub-title">A Better Way — The Bead Bag</h4>

  <p>Imagine a small bead bag. Instead of keeping the colour, shape, and rarity in
    separate places, you put them ALL inside one bag — labelled and organised. That
    bag is what we call an <strong>object</strong>.</p>

  <p>In coding, we create an object using curly braces <strong>{ }</strong>. Everything
    inside the curly braces belongs to that one object — all in one place, neat and tidy:</p>

  <div class="code-block">
    SET "my bead" = {<br>
    &nbsp;&nbsp;"colour": "blue",<br>
    &nbsp;&nbsp;"shape": "star",<br>
    &nbsp;&nbsp;"rarity": "rare"<br>
    }
  </div>

  <p><strong>Breaking it down:</strong></p>
  <ul class="indented-list">
    <li><strong>SET "my bead"</strong> — we are creating a variable to hold the object</li>
    <li><strong>{ }</strong> — the curly braces hold everything inside the object</li>
    <li><strong>"colour": "blue"</strong> — a label (colour) and its value (blue)</li>
    <li><strong>Each line ends with a comma</strong> — except the last one</li>
  </ul>

  <p class="note">💡 <strong>Remember:</strong> An object is like a bead bag — one
    container that holds all the details about one thing, all in one place!</p>
</div>
<!-- End of Helper Box 1 -->
```

---

## HELPER BOX 2: WHAT ARE PROPERTIES? 🏷️

```html
<!-- Helper Box 2: What are Properties? -->
<div class="helper-box">
  <h3 class="box-title">🏷️ What are Properties? 🏷️</h3>

  <p>Every piece of information stored inside an object is called a
    <strong>property</strong>. Think of a property like a tag attached to the bead
    — it has a label that says what it describes, and a value that says what it is.</p>

  <h4 class="sub-title">A Bead Has Three Properties:</h4>

  <div class="code-block">
    SET "my bead" = {<br>
    &nbsp;&nbsp;"colour": "gold",<br>
    &nbsp;&nbsp;"shape": "round",<br>
    &nbsp;&nbsp;"rarity": "common"<br>
    }
  </div>

  <ul class="indented-list">
    <li><strong>"colour"</strong> — the label. <strong>"gold"</strong> — the value</li>
    <li><strong>"shape"</strong> — the label. <strong>"round"</strong> — the value</li>
    <li><strong>"rarity"</strong> — the label. <strong>"common"</strong> — the value</li>
  </ul>

  <h4 class="sub-title">Reading a Property:</h4>

  <p>To read one property from an object, we write the object name, then a dot,
    then the property name:</p>

  <div class="code-block">
    PRINT "my bead"."colour"
  </div>
  <p class="output">Output: gold</p>

  <div class="code-block">
    PRINT "my bead"."rarity"
  </div>
  <p class="output">Output: common</p>

  <p class="note">💡 <strong>Remember:</strong> The dot connects the object to its
    property — like pointing to a specific tag on the bead bag and reading what
    it says!</p>
</div>
<!-- End of Helper Box 2 -->
```

---

## HELPER BOX 3: BUILDING YOUR FIRST OBJECT 🔨

```html
<!-- Helper Box 3: Building Your First Object -->
<div class="helper-box">
  <h3 class="box-title">🔨 Building Your First Object 🔨</h3>

  <p>Now let's put it all together and build a complete bead object from scratch.
    We will create the object, then read back its properties to check everything
    is correct.</p>

  <h4 class="sub-title">Step by Step:</h4>

  <p><strong>Step 1</strong> — Create the object with all three properties:</p>

  <div class="code-block">
    SET "my bead" = {<br>
    &nbsp;&nbsp;"colour": "purple",<br>
    &nbsp;&nbsp;"shape": "hexagon",<br>
    &nbsp;&nbsp;"rarity": "legendary"<br>
    }
  </div>

  <p><strong>Step 2</strong> — Read back each property to check it:</p>

  <div class="code-block">
    PRINT "Colour:", "my bead"."colour"<br>
    PRINT "Shape:", "my bead"."shape"<br>
    PRINT "Rarity:", "my bead"."rarity"
  </div>

  <p class="output">Output:<br>
    Colour: purple<br>
    Shape: hexagon<br>
    Rarity: legendary</p>

  <p>That's it — you just built your first object! One bead, three properties,
    all stored neatly inside one bead bag.</p>

  <p class="note">💡 <strong>Remember:</strong> Create the object with { }, then
    use the dot to read each property back. That is the full pattern — and you
    will use it every time!</p>
</div>
<!-- End of Helper Box 3 -->
```

---

## NOTES FOR AI WHEN GENERATING THESE HELPER BOXES

- Use the exact HTML structure above — class names do not change
- NEVER replace PRINT with console.log() or print()
- NEVER replace SET with let, var, const, or any real syntax
- NEVER write camelCase or snake_case variable names in any code example — ALWAYS use natural language descriptions in quotes e.g. "my bead" NOT myBead
- NEVER add camelCase or snake_case naming convention rules — those come in the language course
- NEVER use + to join text and variables — use a comma inside PRINT instead
- NEVER introduce loops with objects — not taught yet
- NEVER introduce functions with objects — not taught yet
- NEVER introduce nested objects — not taught yet
- NEVER introduce arrays of objects — not taught yet
- ALWAYS spell colour as colour — NEVER color — the bead has a colour property
- The café theme runs throughout — the child is in The Popping Café
- Keep the warm, friendly, encouraging tone throughout
- Target age is 10-12 years old — keep it simple, clear and fun
- Output examples should always show realistic, readable results
- Every concept should be explained with a real-world analogy first, then the pseudocode
- Rule 6 always applies — never use what hasn't been taught in a helper box yet
- { } curly braces are introduced here for the first time — always explain them clearly

---

## END OF MODULE 9 OBJECTS PART 1 HELPER BOXES
