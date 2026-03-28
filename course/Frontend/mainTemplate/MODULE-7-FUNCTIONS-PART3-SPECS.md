# MODULE 7 - FUNCTIONS PART 3 - EXERCISE SPECIFICATIONS
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Spec file for AI to generate all Module 7 Functions Part 3 exercises
**SETTING:** 🍬 Popcorn Factory — flavours and ingredients
**THEME:** Operators inside functions — calculate inside, RETURN the answer

---

## TEACHING PHILOSOPHY — READ THIS FIRST

The goal of Part 3 is to make operators feel completely natural inside a function.
Children already know operators from Module 2 and RETURN from Part 2.
Now the operator does its work inside the function and RETURN hands the answer back.

- Exercises 1-2: Operator inside function, no parameters — just the calculation and RETURN
- Exercises 3-4: Operator with parameters — numbers go in, answer comes back
- Exercise 5: Outside variable + two parameters + operator + RETURN — the full tree

Every exercise uses familiar flavour and ingredient variables from Module 3.
No new concepts other than operators living inside functions.

---

## EXERCISE 1: Counting Flavour Bags 🍬

**SECTION NAME:** functions
**EXERCISE NUMBER:** 1
**EMOJI:** 🍬

**SCENARIO:** The factory needs to count how many flavour bags are needed. Write a function that calculates and returns the answer!

**VARIABLES TO USE:**
- Part A: "bags" and "flavours" set inside the function
- Part B: "bags" and "flavours" set inside the function, different values

**CONCEPT:** Operator inside a function with RETURN — no parameters yet.

**PART A FOCUS:** Write a function called "count flavour bags" that sets "bags" to 10 and "flavours" to 3, multiplies them, stores in "total" and returns it. Catch in "my total" and print.
**PART B FOCUS:** Change "bags" to 20 and "flavours" to 4 inside the function. Same structure, catch and print.

**EXPECTED OUTPUT PART A:**
```
Flavour bags needed 30
```
**EXPECTED OUTPUT PART B:**
```
Flavour bags needed 80
```

---

## EXERCISE 2: Sugar Packets Remaining 🍚

**SECTION NAME:** functions
**EXERCISE NUMBER:** 2
**EMOJI:** 🍚

**SCENARIO:** The factory started with some sugar packets and used some. Write a function that works out how many are left!

**VARIABLES TO USE:**
- Part A: "started with" and "used" set inside the function
- Part B: "started with" and "used" set inside the function, different values

**CONCEPT:** Subtraction operator inside a function with RETURN — same shape, different operator.

**PART A FOCUS:** Write a function called "sugar remaining" that sets "started with" to 50 and "used" to 15, subtracts them, stores in "remaining" and returns it. Catch in "my remaining" and print.
**PART B FOCUS:** Change "started with" to 100 and "used" to 35. Same structure, catch and print.

**EXPECTED OUTPUT PART A:**
```
Sugar packets remaining 35
```
**EXPECTED OUTPUT PART B:**
```
Sugar packets remaining 65
```

---

## EXERCISE 3: Ingredient Portions 🧂

**SECTION NAME:** functions
**EXERCISE NUMBER:** 3
**EMOJI:** 🧂

**SCENARIO:** Each batch needs a certain number of ingredient portions. Write a function that takes the batch size and portions per batch and returns the total!

**VARIABLES TO USE:**
- Part A: "batch size" and "portions" as parameters
- Part B: "batch size" and "portions" as parameters, different values

**CONCEPT:** Operator with two parameters — both numbers go in, answer comes back out.

**PART A FOCUS:** Write a function called "get portions" that takes "batch size" and "portions" as parameters, multiplies them, stores in "total" and returns it. Call with 5 and 4, catch in "my total" and print. Call again with 8 and 3.
**PART B FOCUS:** Call the same function with 10 and 6, then 12 and 2. Catch and print each time.

**EXPECTED OUTPUT PART A:**
```
Total portions needed 20
Total portions needed 24
```
**EXPECTED OUTPUT PART B:**
```
Total portions needed 60
Total portions needed 24
```

---

## EXERCISE 4: Oil Container Check 🛢️

**SECTION NAME:** functions
**EXERCISE NUMBER:** 4
**EMOJI:** 🛢️

**SCENARIO:** The factory needs to know how many oil containers are left after production. Write a function that takes the starting amount and amount used and returns what is left!

**VARIABLES TO USE:**
- Part A: "starting amount" and "amount used" as parameters
- Part B: "starting amount" and "amount used" as parameters, different values

**CONCEPT:** Subtraction with two parameters — building confidence with operators and parameters together.

**PART A FOCUS:** Write a function called "oil remaining" that takes "starting amount" and "amount used" as parameters, subtracts them, stores in "remaining" and returns it. Call with 100 and 40, catch in "my remaining" and print. Call again with 80 and 25.
**PART B FOCUS:** Call the same function with 200 and 75, then 150 and 60. Catch and print each time.

**EXPECTED OUTPUT PART A:**
```
Oil containers remaining 60
Oil containers remaining 55
```
**EXPECTED OUTPUT PART B:**
```
Oil containers remaining 125
Oil containers remaining 90
```

---

## EXERCISE 5: The Full Production Count 🌟

**SECTION NAME:** functions
**EXERCISE NUMBER:** 5
**EMOJI:** 🌟

**SCENARIO:** The full factory production count — factory name from outside, batch size and portions as parameters, calculation inside, answer returned and printed!

**VARIABLES TO USE:**
- Part A: "factory name" outside the function. "batch size" and "portions" as parameters.
- Part B: "factory name" outside the function. "batch size" and "portions" as parameters, different values.

**CONCEPT:** Outside variable + two parameters + operator + RETURN — the full tree.

**PART A FOCUS:** Set "factory name" to "Poppy's Factory" outside the function. Write a function called "production count" that takes "batch size" and "portions" as parameters, multiplies them, stores in "total" and returns it. Call with 10 and 3, catch in "my total" and print both "factory name" and "my total". Call again with 20 and 5.
**PART B FOCUS:** Keep "factory name" as "Poppy's Factory". Call the same function with 15 and 4, then 25 and 2.

**EXPECTED OUTPUT PART A:**
```
Factory: Poppy's Factory
Total production count 30
Factory: Poppy's Factory
Total production count 100
```
**EXPECTED OUTPUT PART B:**
```
Factory: Poppy's Factory
Total production count 60
Factory: Poppy's Factory
Total production count 50
```

---

## NARRATIVE CONTEXT

**Opening for Module 7 Part 3:**
"You know how to use operators and you know how to use RETURN. Now we are going to put them together! Your operators are going to live inside your functions — doing their calculations in there and handing the answer back with RETURN. Let us head back to the popcorn factory and get calculating!"

**Exercise Flow:**
1. Operator inside function, no parameters — multiplication and RETURN
2. Operator inside function, no parameters — subtraction and RETURN
3. Two parameters + operator + RETURN — something goes in, answer comes back
4. Two parameters + subtraction + RETURN — building confidence
5. Outside variable + two parameters + operator + RETURN — the full tree

**Closing:**
"Outstanding work! Your functions are now calculating AND returning answers. You have combined operators and RETURN into something really powerful. You are thinking like a real programmer now! 🚀"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "functions"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Function names use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — FUNCTION, END FUNCTION, CALL, RETURN — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Operators used: +, -, * only — no division yet
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

END OF MODULE 7 FUNCTIONS PART 3 SPECIFICATIONS