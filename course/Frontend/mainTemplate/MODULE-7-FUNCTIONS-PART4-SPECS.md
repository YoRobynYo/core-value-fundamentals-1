# MODULE 7 - FUNCTIONS PART 4 - EXERCISE SPECIFICATIONS
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Spec file for AI to generate all Module 7 Functions Part 4 exercises
**SETTING:** 🦺 Popcorn Factory — health and safety checks
**THEME:** Conditions inside functions — check inside, RETURN the answer

---

## TEACHING PHILOSOPHY — READ THIS FIRST

The goal of Part 4 is to make conditions feel completely natural inside a function.
Children already know conditions from Module 3 and RETURN from Part 2.
Now the condition does its check inside the function and RETURN hands the answer back.

- Exercises 1-2: Condition inside function, no parameters — just the check and RETURN
- Exercises 3-4: Condition with a parameter — value goes in, answer comes back
- Exercise 5: Outside variable + parameter + condition + RETURN — the full tree

Every exercise uses familiar health and safety variables from Module 3.
No new concepts other than conditions living inside functions.

---

## EXERCISE 1: Goggles Check 🥽

**SECTION NAME:** functions
**EXERCISE NUMBER:** 1
**EMOJI:** 🥽

**SCENARIO:** The factory needs to check if the goggles are ready. Write a function that checks and returns the result!

**VARIABLES TO USE:**
- Part A: "goggles ready" set inside the function to "yes"
- Part B: "goggles ready" set inside the function to "no"

**CONCEPT:** Condition inside a function with RETURN — no parameters yet.

**PART A FOCUS:** Write a function called "check goggles" that sets "goggles ready" to "yes", checks if it equals "yes" and returns "Goggles are ready!" or "Goggles are missing!". Catch in "my check" and print.
**PART B FOCUS:** Change "goggles ready" to "no" inside the function. Same structure, catch and print.

**EXPECTED OUTPUT PART A:**
```
Goggles check: Goggles are ready!
```
**EXPECTED OUTPUT PART B:**
```
Goggles check: Goggles are missing!
```

---

## EXERCISE 2: Gloves Check 🧤

**SECTION NAME:** functions
**EXERCISE NUMBER:** 2
**EMOJI:** 🧤

**SCENARIO:** Now check the gloves! Write a function that checks and returns the result!

**VARIABLES TO USE:**
- Part A: "gloves ready" set inside the function to "yes"
- Part B: "gloves ready" set inside the function to "no"

**CONCEPT:** Same condition shape — building confidence with conditions and RETURN.

**PART A FOCUS:** Write a function called "check gloves" that sets "gloves ready" to "yes", checks if it equals "yes" and returns "Gloves are ready!" or "Gloves are missing!". Catch in "my check" and print.
**PART B FOCUS:** Change "gloves ready" to "no" inside the function. Same structure, catch and print.

**EXPECTED OUTPUT PART A:**
```
Gloves check: Gloves are ready!
```
**EXPECTED OUTPUT PART B:**
```
Gloves check: Gloves are missing!
```

---

## EXERCISE 3: Bag Safety Check 📦

**SECTION NAME:** functions
**EXERCISE NUMBER:** 3
**EMOJI:** 📦

**SCENARIO:** The factory needs to check if enough bags are ready. Write a function that takes the bag count and returns whether it is safe to proceed!

**VARIABLES TO USE:**
- Part A: "bag count" as a parameter
- Part B: "bag count" as a parameter, different values

**CONCEPT:** Condition with one parameter — number goes in, safety message comes back out.

**PART A FOCUS:** Write a function called "check bag count" that takes "bag count" as a parameter, checks if it is greater than 5 and returns "Safe to proceed!" or "Not enough bags!". Call with 10, catch in "my check" and print. Call again with 3.
**PART B FOCUS:** Call the same function with 8 then 2. Catch and print each time.

**EXPECTED OUTPUT PART A:**
```
Bag check: Safe to proceed!
Bag check: Not enough bags!
```
**EXPECTED OUTPUT PART B:**
```
Bag check: Safe to proceed!
Bag check: Not enough bags!
```

---

## EXERCISE 4: Worker Safety Check 🦺

**SECTION NAME:** functions
**EXERCISE NUMBER:** 4
**EMOJI:** 🦺

**SCENARIO:** Each worker needs to be checked before entering the factory. Write a function that takes the worker status and returns whether they can enter!

**VARIABLES TO USE:**
- Part A: "worker status" as a parameter
- Part B: "worker status" as a parameter, different values

**CONCEPT:** Condition with a parameter — status goes in, entry decision comes back out.

**PART A FOCUS:** Write a function called "check worker" that takes "worker status" as a parameter, checks if it equals "ready" and returns "Worker can enter!" or "Worker is not ready!". Call with "ready", catch in "my check" and print. Call again with "not ready".
**PART B FOCUS:** Call the same function with "ready" then "not ready". Catch and print each time.

**EXPECTED OUTPUT PART A:**
```
Worker check: Worker can enter!
Worker check: Worker is not ready!
```
**EXPECTED OUTPUT PART B:**
```
Worker check: Worker can enter!
Worker check: Worker is not ready!
```

---

## EXERCISE 5: The Full Safety Report 🌟

**SECTION NAME:** functions
**EXERCISE NUMBER:** 5
**EMOJI:** 🌟

**SCENARIO:** The full factory safety report — factory name from outside, bag count as a parameter, condition inside, answer returned and printed!

**VARIABLES TO USE:**
- Part A: "factory name" outside the function. "bag count" as a parameter.
- Part B: "factory name" outside the function. "bag count" as a parameter, different values.

**CONCEPT:** Outside variable + parameter + condition + RETURN — the full tree.

**PART A FOCUS:** Set "factory name" to "Poppy's Factory" outside the function. Write a function called "safety report" that takes "bag count" as a parameter, checks if it is greater than 5 and returns "Safe to proceed!" or "Not enough bags!". Call with 10, catch in "my report" and print both "factory name" and "my report". Call again with 3.
**PART B FOCUS:** Keep "factory name" as "Poppy's Factory". Call the same function with 8 then 2.

**EXPECTED OUTPUT PART A:**
```
Factory: Poppy's Factory
Safety report: Safe to proceed!
Factory: Poppy's Factory
Safety report: Not enough bags!
```
**EXPECTED OUTPUT PART B:**
```
Factory: Poppy's Factory
Safety report: Safe to proceed!
Factory: Poppy's Factory
Safety report: Not enough bags!
```

---

## NARRATIVE CONTEXT

**Opening for Module 7 Part 4:**
"You know conditions and you know RETURN. Now we are going to put them together! Your conditions are going to live inside your functions — doing their checks in there and handing the answer back with RETURN. Let us head back to the popcorn factory and make sure everything is safe!"

**Exercise Flow:**
1. Condition inside function, no parameters — simple check and RETURN
2. Condition inside function, no parameters — building confidence
3. Condition with a parameter — value goes in, answer comes back
4. Condition with a parameter — status goes in, decision comes back
5. Outside variable + parameter + condition + RETURN — the full tree

**Closing:**
"Incredible work! Your functions are now making decisions AND returning answers. You have combined conditions and RETURN into something really powerful. The factory is safe and you are thinking like a real programmer! 🚀"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "functions"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Function names use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — FUNCTION, END FUNCTION, CALL, RETURN, IF, ELSE, END IF — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] IDs follow pattern: functions-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="functions"
- [ ] Exercise 1 Part A shows pseudocode in code-example div
- [ ] Exercise 1 Part B shows pseudocode in code-example div
- [ ] Exercises 2-5 Part B Step 4 references specific task — no pseudocode shown
- [ ] Nothing used that hasn't been taught in a helper box (Rule 6)
- [ ] British English throughout
- [ ] Names used: David, Samantha, Gabrielle
- [ ] Factory name: Poppy's Factory

---

END OF MODULE 7 FUNCTIONS PART 4 SPECIFICATIONS