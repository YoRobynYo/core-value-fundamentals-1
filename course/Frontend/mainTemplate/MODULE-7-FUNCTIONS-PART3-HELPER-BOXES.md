# MODULE 7 - FUNCTIONS PART 3 - HELPER BOXES
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Helper box content for Module 7 Functions Part 3
**Setting:** 🍬 Popcorn Factory — flavours and ingredients

---

## HELPER BOX 1: Operators Inside Functions

**Title:** ⚙️ Operators Inside Functions

You already know operators. You have been using them since Module 2!
```
SET "bags" = 10
SET "flavours" = 3
SET "total" = "bags" * "flavours"
PRINT "Total packets needed ", "total"
```

Output:
```
Total packets needed 30
```

Simple! You know this already.

Now here is the interesting part — what if we put that calculation INSIDE a function?
```
FUNCTION "count packets"
  SET "bags" = 10
  SET "flavours" = 3
  SET "total" = "bags" * "flavours"
  PRINT "Total packets needed ", "total"
END FUNCTION

CALL "count packets"
```

Output:
```
Total packets needed 30
```

The operator works exactly the same way inside a function!

But wait — we learned RETURN in Part 2. So instead of printing inside the function, let us hand the answer back:
```
FUNCTION "count packets"
  SET "bags" = 10
  SET "flavours" = 3
  SET "total" = "bags" * "flavours"
  RETURN "total"
END FUNCTION

SET "my total" = CALL "count packets"
PRINT "Total packets needed ", "my total"
```

Output:
```
Total packets needed 30
```

The operator does its work inside the function. RETURN hands the answer back. We decide what to do with it! 


## HELPER BOX 2: The Flavour Tree 🌳


**Title:** 🌳 The Flavour Tree — Operators Growing the Tree

Operators can work with parameters too — something goes in, the calculation happens inside, the answer comes back out!

**Operator with a parameter** — number goes in, calculation comes back:
```
FUNCTION "count flavour packets" ("bags")
  SET "total" = "bags" * 3
  RETURN "total"
END FUNCTION

SET "my total" = CALL "count flavour packets" (10)
PRINT "Total flavour packets ", "my total"
```

Output:
```
Total flavour packets 30
```

**Two parameters** — both numbers go in, calculation happens inside:
```
FUNCTION "count flavour packets" ("bags", "flavours")
  SET "total" = "bags" * "flavours"
  RETURN "total"
END FUNCTION

SET "my total" = CALL "count flavour packets" (10, 3)
PRINT "Total flavour packets ", "my total"
```

Output:
```
Total flavour packets 30
```

**Now here is everything working together:**
```
SET "factory name" = "Poppy's Factory"

FUNCTION "count flavour packets" ("bags", "flavours")
  SET "total" = "bags" * "flavours"
  RETURN "total"
END FUNCTION

SET "my total" = CALL "count flavour packets" (10, 3)
PRINT "Factory: ", "factory name"
PRINT "Total flavour packets needed ", "my total"

SET "my total" = CALL "count flavour packets" (20, 5)
PRINT "Factory: ", "factory name"
PRINT "Total flavour packets needed ", "my total"
```

Output:
```
Factory: Poppy's Factory
Total flavour packets needed 30
Factory: Poppy's Factory
Total flavour packets needed 100
```

- `"factory name"` lives OUTSIDE — available everywhere
- `"bags"` and `"flavours"` are PARAMETERS — passed in each time
- The operator does its work INSIDE the function
- RETURN hands the answer back out 🎁

Your operators have a new home now — inside functions! 🚀

---

## NOTES FOR PIPELINE

- Setting: Popcorn Factory 🍬
- Uses familiar Module 2 operators: +, -, *, /
- Pseudocode keywords used: FUNCTION, END FUNCTION, CALL, RETURN
- Helper Box 1: operators outside → inside → with RETURN
- Helper Box 2: operator + parameter → two parameters → full tree with outside variable
- Never use real language syntax
- British English throughout
- Names used: David, Samantha, Gabrielle
- Factory name: Poppy's Factory

