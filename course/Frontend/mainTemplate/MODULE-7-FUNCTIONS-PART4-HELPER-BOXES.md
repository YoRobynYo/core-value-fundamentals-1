# MODULE 7 - FUNCTIONS PART 4 - HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper box content for Module 7 Functions Part 4
**Setting:** 🦺 Popcorn Factory — health and safety checks

---

## HELPER BOX 1: Conditions Inside Functions

**Title:** 🦺 Conditions Inside Functions

You already know conditions. You have been using them since Module 3!
```
SET "bags ready" = 10

IF "bags ready" > 5
  PRINT "Ready to go!"
ELSE
  PRINT "Not enough bags"
END IF
```

Output:
```
Ready to go!
```

Simple! You know this already.

Now here is the interesting part — what if we put that condition INSIDE a function?
```
FUNCTION "check bags"
  SET "bags ready" = 10
  IF "bags ready" > 5
    PRINT "Ready to go!"
  ELSE
    PRINT "Not enough bags"
  END IF
END FUNCTION

CALL "check bags"
```

Output:
```
Ready to go!
```

The condition works exactly the same way inside a function!

But we know RETURN from Part 2. So instead of printing inside the function, let us hand the answer back:
```
FUNCTION "check bags"
  SET "bags ready" = 10
  IF "bags ready" > 5
    RETURN "Ready to go!"
  ELSE
    RETURN "Not enough bags"
  END IF
END FUNCTION

SET "my check" = CALL "check bags"
PRINT "Bag check: ", "my check"
```

Output:
```
Bag check: Ready to go!
```

The condition checked inside the function. RETURN handed the answer back. We decided what to do with it! 


## HELPER BOX 2: The Safety Check Tree 🌳

**Title:** 🌳 The Safety Check Tree — Conditions Growing the Tree

Conditions can work with parameters too — something goes in, the check happens inside, the answer comes back out!

**Condition with a parameter** — value goes in, check happens inside:
```
FUNCTION "check bags" ("bags ready")
  IF "bags ready" > 5
    RETURN "Ready to go!"
  ELSE
    RETURN "Not enough bags"
  END IF
END FUNCTION

SET "my check" = CALL "check bags" (10)
PRINT "Bag check: ", "my check"

SET "my check" = CALL "check bags" (3)
PRINT "Bag check: ", "my check"
```

Output:
```
Bag check: Ready to go!
Bag check: Not enough bags
```

**Without RETURN** — the answer stays trapped inside:
```
SET "factory name" = "Poppy's Factory"

FUNCTION "check bags" ("bags ready")
  IF "bags ready" > 5
    SET "result" = "Ready to go!"
  ELSE
    SET "result" = "Not enough bags"
  END IF
END FUNCTION

CALL "check bags" (10)
PRINT "result"
```

Output:
```
Nothing! "result" is trapped inside the function 😮
```

**With RETURN** — the answer comes back out:
```
SET "factory name" = "Poppy's Factory"

FUNCTION "check bags" ("bags ready")
  IF "bags ready" > 5
    RETURN "Ready to go!"
  ELSE
    RETURN "Not enough bags"
  END IF
END FUNCTION

SET "result" = CALL "check bags" (10)
PRINT "Factory: ", "factory name"
PRINT "Bag check: ", "result"

SET "result" = CALL "check bags" (3)
PRINT "Factory: ", "factory name"
PRINT "Bag check: ", "result"
```

Output:
```
Factory: Poppy's Factory
Bag check: Ready to go!
Factory: Poppy's Factory
Bag check: Not enough bags
```

- `"factory name"` lives OUTSIDE — available everywhere
- `"bags ready"` is a PARAMETER — passed in each time
- The condition does its check INSIDE the function
- RETURN hands the answer back out 🎁

Your conditions have a new home now — inside functions! 🚀

---

## NOTES FOR PIPELINE

- Setting: Popcorn Factory 🦺
- Uses familiar Module 3 conditions: IF, ELSE, END IF
- Pseudocode keywords used: FUNCTION, END FUNCTION, CALL, RETURN, IF, ELSE, END IF
- Helper Box 1: condition outside → inside → with RETURN
- Helper Box 2: condition + parameter → without RETURN vs with RETURN → full tree
- Never use real language syntax
- British English throughout
- Names used: David, Samantha, Gabrielle
- Factory name: Poppy's Factory
