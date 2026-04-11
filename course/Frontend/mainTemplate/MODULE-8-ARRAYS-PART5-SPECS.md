# MODULE 8 — ARRAYS PART 5 — EXERCISE SPECIFICATIONS
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Spec file for AI to generate all Module 8 Arrays Part 5 exercises

**SETTING:** The Popcorn Factory
**THEME:** The children combine lists, loops, and functions together in one program

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-8-ARRAYS-PART5-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: GREET ALL ASSISTANTS FUNCTION 👋

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 1
**EMOJI:** 👋

**SCENARIO:** The supervisor wants a reusable function that can greet any list of assistants. The children write a function that takes a list and prints a welcome message for each person.

**VARIABLES TO USE:**
- Part A: "morning assistants" = ["Ben", "Sara", "Tom"]
- Part B: "afternoon assistants" = ["Aisha", "Jake", "Mia"]

**CONCEPT:** Writing a function that contains a FOR EACH loop

**PART A FOCUS:** Write a FUNCTION called "greet assistants" that TAKES a list called "assistant list". Inside, use FOR EACH to print "Hello:" followed by each assistant. CALL the function with "morning assistants"
**PART B FOCUS:** CALL the same function with "afternoon assistants"

**EXPECTED OUTPUT PART A:**
"Hello: Ben"
"Hello: Sara"
"Hello: Tom"

**EXPECTED OUTPUT PART B:**
"Hello: Aisha"
"Hello: Jake"
"Hello: Mia"

---

## EXERCISE 2: TOTAL BOXES FUNCTION 📦

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 2
**EMOJI:** 📦

**SCENARIO:** The factory needs to know the total number of popcorn boxes produced by all machines. The children write a function that takes a list of box counts, adds them up, and returns the total.

**VARIABLES TO USE:**
- Part A: "production" = [12, 8, 15, 10, 9]
- Part B: "production" = [20, 18, 22, 16, 19]

**CONCEPT:** Function that loops through a list, adds up values, and RETURNS the total

**PART A FOCUS:** Write a FUNCTION called "total boxes" that TAKES a list called "counts". SET "sum" = 0. Use FOR EACH to add each count to "sum". RETURN "sum". CALL the function and PRINT the result
**PART B FOCUS:** CALL the same function with the second list

**EXPECTED OUTPUT PART A:**
"Total boxes produced: 54"

**EXPECTED OUTPUT PART B:**
"Total boxes produced: 95"

---

## EXERCISE 3: ADD FIVE TO EACH NUMBER ➕

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 3
**EMOJI:** ➕

**SCENARIO:** The factory wants to increase every machine's production by 5 boxes next week. The children write a function that takes a list of numbers, adds 5 to each one, and returns a new list.

**VARIABLES TO USE:**
- Part A: "current production" = [10, 15, 8, 12, 20]
- Part B: "current production" = [6, 9, 14, 11, 18]

**CONCEPT:** Function that transforms each item by adding a number

**PART A FOCUS:** Write a FUNCTION called "add five to each" that TAKES a list called "numbers". SET "new list" = []. Use FOR EACH — SET "new number" = "number" + 5, then ADD "new number" TO "new list". RETURN "new list". CALL the function and PRINT the result

**PART B FOCUS:** CALL the same function with the second list

**EXPECTED OUTPUT PART A:**
[15, 20, 13, 17, 25]

**EXPECTED OUTPUT PART B:**
[11, 14, 19, 16, 23]

---

## EXERCISE 4: DOUBLE EVERYTHING FUNCTION ✖️

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 4
**EMOJI:** ✖️

**SCENARIO:** The factory wants to double production for next week. The children write a function that takes a list of numbers, doubles each one, and returns a new list with the doubled values.

**VARIABLES TO USE:**
- Part A: "current production" = [5, 10, 3, 8, 12]
- Part B: "current production" = [7, 14, 6, 9, 11]

**CONCEPT:** Function that creates and returns a new list by transforming each item

**PART A FOCUS:** Write a FUNCTION called "double list" that TAKES a list called "original". SET "doubled list" = []. Use FOR EACH — SET "doubled" = "number" * 2, then ADD "doubled" TO "doubled list". RETURN "doubled list". CALL the function and PRINT the result

**PART B FOCUS:** CALL the same function with the second list

**EXPECTED OUTPUT PART A:**
[10, 20, 6, 16, 24]

**EXPECTED OUTPUT PART B:**
[14, 28, 12, 18, 22]

---

## EXERCISE 5: AVERAGE BOXES FUNCTION 📊

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 5
**EMOJI:** 📊

**SCENARIO:** The factory manager wants to know the average number of boxes produced per machine. The children write a function that calculates the average (total divided by how many numbers).

**VARIABLES TO USE:**
- Part A: "daily production" = [10, 20, 15, 25, 30]
- Part B: "daily production" = [8, 12, 10, 14, 16]

**CONCEPT:** Function that uses total and count to calculate an average

**PART A FOCUS:** Write a FUNCTION called "calculate average" that TAKES a list called "numbers". SET "total" = 0. Use FOR EACH — SET "total" = "total" + "number". Then SET "average" = "total" / LENGTH OF "numbers". RETURN "average". CALL the function and PRINT "Average boxes per machine:", "average"

**PART B FOCUS:** CALL the same function with the second list

**EXPECTED OUTPUT PART A:**
"Average boxes per machine: 20"

**EXPECTED OUTPUT PART B:**
"Average boxes per machine: 12"

---

## NARRATIVE CONTEXT

**Opening for Module 8 Arrays Part 5:**
"Welcome back! Now it's time to put everything together — lists, loops, AND functions. You will write functions that take lists, loop through every item, and return useful results like totals and averages. This is how real coding works!"

**Exercise Flow:**
1. Greet all assistants — function with a loop inside
2. Total boxes function — add up all numbers in a list
3. Add five to each number — transform every item in a list
4. Double everything — create a new transformed list
5. Average boxes — calculate the mean average

**Closing:**
"Incredible work! You are now combining lists, loops, and functions to solve problems. These are the same skills used in real coding every day!"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "arrays"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET, PRINT, FUNCTION, CALL, RETURN, FOR EACH, ADD, LENGTH OF
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Uses `<code>` tags (not `<highlight>`)
- [ ] IDs follow pattern: arrays-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="arrays"
- [ ] Empty hint/output/answer containers present
- [ ] Expected outputs match the spec
- [ ] Popcorn factory theme consistent throughout
- [ ] British English throughout
- [ ] Nothing used that hasn't been taught (Rule 6)

---

**END OF MODULE 8 ARRAYS PART 5 SPECIFICATIONS**