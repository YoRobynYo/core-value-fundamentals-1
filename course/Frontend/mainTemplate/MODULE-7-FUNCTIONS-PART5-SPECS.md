# MODULE 7 - FUNCTIONS PART 5 - EXERCISE SPECIFICATIONS
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Spec file for AI to generate all Module 7 Functions Part 5 exercises
**SETTING:** 🍿 Popcorn Factory — production batch tracking
**THEME:** Loops inside functions — process multiple batches, RETURN the results

---

## TEACHING PHILOSOPHY — READ THIS FIRST

The goal of Part 5 is to show children the real power of combining loops and functions.
Children already know loops from Module 5 and functions from Parts 1-4.
Now a loop drives the work — calling a function for each batch and collecting the results.

- Exercises 1-2: Loop calls a function — simple, no parameters yet
- Exercises 3-4: Loop calls a function with parameters — something goes in, answer comes back
- Exercise 5: Outside variable + parameters + loop + function + RETURN — the full production report

Every exercise uses the Popcorn Factory setting.
No new concepts — just loops and functions working together for the first time.

⚠️ CRITICAL — FUNCTION FIRST RULE:
Every exercise MUST lead with the function. The loop calls the function — not the other way round.
The correct order is ALWAYS:
1. Write the FUNCTION with RETURN
2. Write the loop
3. Inside the loop, CALL the function
4. PRINT the result

---

## EXERCISE 1: Counting Bags Per Batch 🍿

**SECTION NAME:** functions
**EXERCISE NUMBER:** 1
**EMOJI:** 🍿

**SCENARIO:** The factory needs to count how many bags are produced in each batch. Write a function that returns the bag count, then use a loop to run it three times.

**VARIABLES TO USE:**
- Part A: no parameters — function returns a fixed bag count. Loop runs 3 times.
- Part B: no parameters — function returns a different bag count. Loop runs 3 times.

**CONCEPT:** A loop calling a function — the simplest combination. Same function, called multiple times by the loop.

**PART A FOCUS:** Write a function called "count bags" that returns 10. Write a loop that runs 3 times. Inside the loop, call "count bags", catch the result in "bag count" and print it.
**PART B FOCUS:** Change the function "count bags" to return 15. Write the same loop that runs 3 times, catch and print each time.

**EXPECTED OUTPUT PART A:**
```
Bags in this batch: 10
Bags in this batch: 10
Bags in this batch: 10
```
**EXPECTED OUTPUT PART B:**
```
Bags in this batch: 15
Bags in this batch: 15
Bags in this batch: 15
```

---

## EXERCISE 2: Ingredient Usage Per Batch 🧂

**SECTION NAME:** functions
**EXERCISE NUMBER:** 2
**EMOJI:** 🧂

**SCENARIO:** Each batch uses a fixed amount of butter. Write a function that calculates and returns the total butter used, then loop through 4 batches.

**VARIABLES TO USE:**
- Part A: "butter used" set inside the function. Loop runs 4 times.
- Part B: "butter used" set to a different value inside the function. Loop runs 4 times.

**CONCEPT:** Function with calculation and RETURN — loop collects results from each batch.

**PART A FOCUS:** Write a function called "butter per batch" that sets "butter used" to 5, calculates "butter used" * 2, stores in "total" and returns it. Write a loop that runs 4 times. Inside the loop, call "butter per batch", catch in "batch total" and print it.
**PART B FOCUS:** Change "butter used" to 8 inside the function. Same loop, catch and print each time.

**EXPECTED OUTPUT PART A:**
```
Butter used this batch: 10
Butter used this batch: 10
Butter used this batch: 10
Butter used this batch: 10
```
**EXPECTED OUTPUT PART B:**
```
Butter used this batch: 16
Butter used this batch: 16
Butter used this batch: 16
Butter used this batch: 16
```

---

## EXERCISE 3: Flavour Check Per Batch 🍬

**SECTION NAME:** functions
**EXERCISE NUMBER:** 3
**EMOJI:** 🍬

**SCENARIO:** Each batch produces a different flavour. Write a function that takes the flavour as a parameter and returns it with a message. Loop through three flavours.

**VARIABLES TO USE:**
- Part A: "flavour" as a parameter. Loop calls function with "butter", "cheese", "salt".
- Part B: "flavour" as a parameter. Loop calls function with "caramel", "chilli", "toffee".

**CONCEPT:** Function with parameter and RETURN — loop passes different values each time.

**PART A FOCUS:** Write a function called "check flavour" that takes "flavour" as a parameter and returns it. Write a loop that calls "check flavour" three times — once with "butter", once with "cheese", once with "salt". Catch in "result" and print each time.
**PART B FOCUS:** Call the same function "check flavour" three times in a loop — with "caramel", "chilli" and "toffee". Catch and print each time.

**EXPECTED OUTPUT PART A:**
```
Flavour ready: butter
Flavour ready: cheese
Flavour ready: salt
```
**EXPECTED OUTPUT PART B:**
```
Flavour ready: caramel
Flavour ready: chilli
Flavour ready: toffee
```

---

## EXERCISE 4: Batch Safety Check 🦺

**SECTION NAME:** functions
**EXERCISE NUMBER:** 4
**EMOJI:** 🦺

**SCENARIO:** Before each batch runs, the factory checks if enough bags are ready. Write a function that takes the bag count and returns whether it is safe to proceed. Loop through three batches with different bag counts.

**VARIABLES TO USE:**
- Part A: "bag count" as a parameter. Loop calls function with 12, 3, 8.
- Part B: "bag count" as a parameter. Loop calls function with 15, 2, 10.

**CONCEPT:** Function with condition + parameter + RETURN — loop passes different values, function decides each time.

**PART A FOCUS:** Write a function called "batch safety check" that takes "bag count" as a parameter. Inside, if "bag count" is greater than 5, RETURN "Safe to proceed!" otherwise RETURN "Not enough bags!". Write a loop that calls the function three times — with 12, then 3, then 8. Catch in "safety result" and print each time.
**PART B FOCUS:** Call the same function in a loop with 15, then 2, then 10. Catch and print each time.

**EXPECTED OUTPUT PART A:**
```
Batch check: Safe to proceed!
Batch check: Not enough bags!
Batch check: Safe to proceed!
```
**EXPECTED OUTPUT PART B:**
```
Batch check: Safe to proceed!
Batch check: Not enough bags!
Batch check: Safe to proceed!
```

---

## EXERCISE 5: The Full Production Report 🌟

**SECTION NAME:** functions
**EXERCISE NUMBER:** 5
**EMOJI:** 🌟

**SCENARIO:** The complete factory production report — factory name from outside, flavour and bag count as parameters, safety check inside the function, loop runs through all batches and prints the full report.

**VARIABLES TO USE:**
- Part A: "factory name" outside the function. "flavour" and "bag count" as parameters. Loop runs 3 times with different values.
- Part B: "factory name" outside the function. Same function. Loop runs 3 times with different values.

**CONCEPT:** Outside variable + two parameters + condition + RETURN + loop — the complete production report.

**PART A FOCUS:** SET "factory name" to "Poppy's Factory" outside the function. Write a function called "production report" that takes "flavour" and "bag count" as parameters. Inside, if "bag count" is greater than 5, RETURN "flavour" + " — Ready!" otherwise RETURN "flavour" + " — Not enough bags!". Write a loop that calls the function three times:
- Call 1: "butter", 12
- Call 2: "cheese", 3
- Call 3: "salt", 8
Catch in "report" and print "factory name" and "report" each time.

**PART B FOCUS:** Keep "factory name" as "Poppy's Factory". Call the same function in a loop three times:
- Call 1: "caramel", 15
- Call 2: "chilli", 2
- Call 3: "toffee", 10
Catch and print each time.

**EXPECTED OUTPUT PART A:**
```
Factory: Poppy's Factory
Batch report: butter — Ready!
Factory: Poppy's Factory
Batch report: cheese — Not enough bags!
Factory: Poppy's Factory
Batch report: salt — Ready!
```
**EXPECTED OUTPUT PART B:**
```
Factory: Poppy's Factory
Batch report: caramel — Ready!
Factory: Poppy's Factory
Batch report: chilli — Not enough bags!
Factory: Poppy's Factory
Batch report: toffee — Ready!
```

---

## NARRATIVE CONTEXT

**Opening for Module 7 Part 5:**
"You have learned how to write functions, return values, use operators and make decisions inside functions. Now it is time to put loops and functions together! A loop can call a function over and over — processing every batch, checking every item, reporting every result. Let us head back to Poppy's Factory and put it all together!"

**Exercise Flow:**
1. Loop calls a simple function — same result every time
2. Loop calls a function with calculation — same result, different numbers
3. Loop calls a function with a parameter — different flavour each time
4. Loop calls a function with condition + parameter — safety check for each batch
5. Full production report — factory name, two parameters, condition, loop, complete report

**Closing:**
"Outstanding work! You have just combined two of the most powerful tools in coding — loops and functions — and used them together to build a complete factory production report. You have used variables, operators, conditions, loops, functions and RETURN all in one place. You are thinking like a real coder now! 🚀"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "functions"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] FUNCTION is written FIRST — loop comes after
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Function names use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — FUNCTION, END FUNCTION, CALL, RETURN, FOR/END FOR — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] IDs follow pattern: functions-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="functions"
- [ ] Exercise 1 Part A shows pseudocode in code-example div
- [ ] Exercise 1 Part B shows pseudocode in code-example div
- [ ] Exercises 2-5 Part B Step 4 references specific task — no pseudocode shown
- [ ] Nothing used that hasn't been taught in a helper box (Rule 6)
- [ ] British English throughout
- [ ] Names used: Marivic, Gabrielle, Alec
- [ ] Factory name: Poppy's Factory

---

END OF MODULE 7 FUNCTIONS PART 5 SPECIFICATIONS
