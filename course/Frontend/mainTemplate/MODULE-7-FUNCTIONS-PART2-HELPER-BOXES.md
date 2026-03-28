# MODULE 7 - FUNCTIONS PART 2 - HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper box content for Module 7 Functions Part 2
**Setting:** 🍿 Popcorn Factory — using familiar popcorn variables

---

## HELPER BOX 1: Functions Can Give Something Back

**Title:** 🎁 Functions Can Give Something Back

You already know how to write a function and call it!
```
FUNCTION "show flavour"
  SET "flavour" = "butter"
  PRINT "The flavour is ", "flavour"
END FUNCTION

CALL "show flavour"
```

Output:
```
The flavour is butter
```

That function sets a variable and prints it. Simple!

But what if you want to use that answer somewhere else in your code?
What if you do not want to print it straight away?

Here is the problem:
```
FUNCTION "show flavour"
  SET "flavour" = "butter"
  PRINT "The flavour is ", "flavour"
END FUNCTION

CALL "show flavour"
PRINT "Packing bag with ", "flavour"
```

Output:
```
The flavour is butter
```

The second PRINT did not work! The variable "flavour" only lives INSIDE the function. Once the function finishes — it is gone. 😮

That is where **RETURN** comes in!

RETURN sends the answer back OUT of the function so you can catch it:
```
FUNCTION "get flavour"
  RETURN "butter"
END FUNCTION

SET "my flavour" = CALL "get flavour"
PRINT "The flavour is ", "my flavour"
PRINT "Packing bag with ", "my flavour"
```

Output:
```
The flavour is butter
Packing bag with butter
```

The function handed the answer back. We caught it in "my flavour". Then we used it TWICE! 

RETURN does not print — it passes the answer back to whoever called the function.
That is what makes it so powerful! 


## HELPER BOX 2: The Return Tree 🌳

**Title:** 🌳 The Return Tree — Seeing How It All Fits

RETURN can work in different ways — and each way adds a new branch to the tree!

**RETURN on its own** — the simplest form:
```
FUNCTION "get flavour"
  RETURN "butter"
END FUNCTION

SET "my flavour" = CALL "get flavour"
PRINT "Today's flavour is ", "my flavour"
```

Output:
```
Today's flavour is butter
```

**RETURN with a parameter** — something goes in, something comes back out:
```
FUNCTION "get flavour" ("flavour")
  RETURN "flavour"
END FUNCTION

SET "my flavour" = CALL "get flavour" ("cheese")
PRINT "Today's flavour is ", "my flavour"
```

Output:
```
Today's flavour is cheese
```

**Without RETURN** — the answer stays trapped inside:
```
SET "factory name" = "Poppy's Factory"

FUNCTION "get flavour" ("flavour")
  SET "result" = "factory name", " makes ", "flavour"
END FUNCTION

CALL "get flavour" ("butter")
PRINT "result"
```

Output:
```
Nothing! "result" is trapped inside the function 😮
```

**With RETURN** — the answer comes back out:
```
SET "factory name" = "Poppy's Factory"

FUNCTION "get flavour" ("flavour")
  RETURN "factory name", " makes ", "flavour"
END FUNCTION

SET "result" = CALL "get flavour" ("butter")
PRINT "result"
```

Output:
```
Poppy's Factory makes butter 🎉
```

- `"factory name"` lives OUTSIDE — available everywhere
- `"flavour"` is a PARAMETER — passed in each time
- RETURN sends the answer back OUT to whoever called the function

Write once. Return anything. That is the power of RETURN! 🚀

---

## NOTES FOR PIPELINE

- Setting: Popcorn Factory 🍿
- Pseudocode keywords introduced: RETURN
- Helper Box 1: PRINT vs RETURN — why RETURN is needed
- Helper Box 2: RETURN alone → RETURN with parameter → without RETURN vs with RETURN
- Never use real language syntax
- British English throughout
- Names used: David, Samantha, Gabrielle
- Factory name: Poppy's Factory


## HELPER BOX 3: 

