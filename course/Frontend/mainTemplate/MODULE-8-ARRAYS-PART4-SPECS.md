# MODULE 8 — ARRAYS PART 4 — EXERCISE SPECIFICATIONS
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Spec file for AI to generate all Module 8 Arrays Part 4 exercises

**SETTING:** The Popcorn Factory
**THEME:** The children learn to use conditions (IF/THEN) with lists to filter and make decisions

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-8-ARRAYS-PART4-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: FIND HIGH SCORES 🏆

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 1
**EMOJI:** 🏆

**SCENARIO:** The factory keeps score of how many bags each machine popped. The children need to find and print only the machines that scored above 50 bags.

**VARIABLES TO USE:**
- Part A: "bag counts" = [45, 62, 38, 71, 55, 49] — print only numbers greater than 50
- Part B: "bag counts" = [80, 42, 67, 53, 39, 91] — print only numbers greater than 50

**CONCEPT:** Using IF inside a FOR EACH loop to filter items

**PART A FOCUS:** Write a FOR EACH loop that checks each "bag count" — IF the count is greater than 50, print "High score:" followed by the count
**PART B FOCUS:** Do the same for the second list

**EXPECTED OUTPUT PART A:**
"High score: 62"
"High score: 71"
"High score: 55"

**EXPECTED OUTPUT PART B:**
"High score: 80"
"High score: 67"
"High score: 53"
"High score: 91"

---

## EXERCISE 2: CHECK FIRST ASSISTANT 🔍

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 2
**EMOJI:** 🔍

**SCENARIO:** The supervisor needs to know if the first assistant on the list is "Ben". The children write a condition that checks the first position and prints a special message if it matches.

**VARIABLES TO USE:**
- Part A: "assistants" = ["Ben", "Sara", "Tom", "Aisha"] — check if position 0 equals "Ben"
- Part B: "assistants" = ["Jake", "Sara", "Tom", "Aisha"] — check if position 0 equals "Ben"

**CONCEPT:** Checking a specific position in a list with a condition

**PART A FOCUS:** Write an IF statement that checks if "assistants"[0] equals "Ben". If yes, print "Ben is team leader today!"
**PART B FOCUS:** Write the same check for the second list. If not equal, print "Ben is not here today."

**EXPECTED OUTPUT PART A:**
"Ben is team leader today!"

**EXPECTED OUTPUT PART B:**
"Ben is not here today."

---

## EXERCISE 3: COUNT READY MACHINES ✅

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 3
**EMOJI:** ✅

**SCENARIO:** The factory has a list of machine statuses. The children need to count how many machines are "Ready" to start production.

**VARIABLES TO USE:**
- Part A: "statuses" = ["Ready", "Not Ready", "Ready", "Ready", "Not Ready", "Ready"]
- Part B: "statuses" = ["Not Ready", "Not Ready", "Ready", "Not Ready"]

**CONCEPT:** Using a counter inside a loop with a condition

**PART A FOCUS:** Write a FOR EACH loop that checks each status. IF status equals "Ready", add 1 to a counter called "ready count". After the loop, print "Ready machines:" followed by the count
**PART B FOCUS:** Do the same for the second list

**EXPECTED OUTPUT PART A:**
"Ready machines: 4"

**EXPECTED OUTPUT PART B:**
"Ready machines: 1"

---

## EXERCISE 4: FIND LOW INGREDIENTS ⚠️

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 4
**EMOJI:** ⚠️

**SCENARIO:** The factory tracks how many bags of each ingredient are left. The children need to print a warning for any ingredient with 10 bags or fewer left.

**VARIABLES TO USE:**
- Part A: "ingredient stocks" = [25, 8, 30, 5, 12, 3] — print warning for 10 or fewer
- Part B: "ingredient stocks" = [15, 4, 22, 9, 7] — print warning for 10 or fewer

**CONCEPT:** Using <= (less than or equal to) in a condition with a list

**PART A FOCUS:** Write a FOR EACH loop that checks each stock number. IF stock <= 10, print "Warning: Low ingredient —" followed by the stock number
**PART B FOCUS:** Do the same for the second list

**EXPECTED OUTPUT PART A:**
"Warning: Low ingredient — 8"
"Warning: Low ingredient — 5"
"Warning: Low ingredient — 3"

**EXPECTED OUTPUT PART B:**
"Warning: Low ingredient — 4"
"Warning: Low ingredient — 9"
"Warning: Low ingredient — 7"

---

## EXERCISE 5: COLLECT HIGH NUMBERS ONLY ⭐

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 5
**EMOJI:** ⭐

**SCENARIO:** The supervisor wants a new list containing only the high numbers from the production list. The children write a loop that collects numbers greater than 50 into a new list.

**VARIABLES TO USE:**
- Part A: "production numbers" = [45, 62, 38, 71, 55, 49, 88, 33]
- Part B: "production numbers" = [52, 48, 67, 44, 91, 39, 60]

**CONCEPT:** Building a new list by filtering with a condition

**PART A FOCUS:** Write a FOR EACH loop that checks each number. IF number > 50, ADD it to a new list called "high numbers". After the loop, PRINT "High numbers:" followed by the new list
**PART B FOCUS:** Do the same for the second list

**EXPECTED OUTPUT PART A:**
"High numbers: [62, 71, 55, 88]"

**EXPECTED OUTPUT PART B:**
"High numbers: [52, 67, 91, 60]"

---

## NARRATIVE CONTEXT

**Opening for Module 8 Arrays Part 4:**
"Welcome back! Today you are adding conditions to your loops — so you can ask questions about every item in a list. Which machines are ready? Which flavours are popular? Which ingredients are running low? Let's find out!"

**Exercise Flow:**
1. Find high scores — print only numbers above 50
2. Check first assistant — test a specific position
3. Count ready machines — use a counter with a condition
4. Find low ingredients — use <= to find small numbers
5. Collect high numbers only — build a new list of filtered items

**Closing:**
"Amazing! You can now filter lists, count matches, and build new lists from your data. Your programs are getting smarter and smarter!"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "arrays"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET, PRINT, FOR EACH, IF/THEN, END IF, END FOR, ADD
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

**END OF MODULE 8 ARRAYS PART 4 SPECIFICATIONS**