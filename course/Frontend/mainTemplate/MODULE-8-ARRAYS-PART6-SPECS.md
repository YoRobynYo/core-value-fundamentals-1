# MODULE 8 — ARRAYS PART 6 — EXERCISE SPECIFICATIONS
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Spec file for AI to generate all Module 8 Arrays Part 6 exercises

**SETTING:** The Popcorn Factory
**THEME:** The children combine lists, conditions, loops, and functions together — the final challenge!

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-8-ARRAYS-PART6-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: COUNT HIGH SCORES FUNCTION 🏆

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 1
**EMOJI:** 🏆

**SCENARIO:** The factory tracks quality scores for each batch of popcorn. The children write a function that counts how many batches scored above 85.

**VARIABLES TO USE:**
- Part A: "quality scores" = [92, 78, 88, 95, 67, 89, 76]
- Part B: "quality scores" = [84, 91, 73, 86, 94, 68]

**CONCEPT:** Function that uses a condition inside a loop to count matches

**PART A FOCUS:** Write a FUNCTION called "count high quality" that TAKES a list called "scores". SET "high count" = 0. Use FOR EACH — IF score > 85, add 1 to "high count". RETURN "high count". CALL the function and PRINT the result
**PART B FOCUS:** CALL the same function with the second list

**EXPECTED OUTPUT PART A:**
"Batches above 85: 4"

**EXPECTED OUTPUT PART B:**
"Batches above 85: 3"

---

## EXERCISE 2: FILTER READY MACHINES ✅

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 2
**EMOJI:** ✅

**SCENARIO:** The factory needs a list of only the machines that are "Ready". The children write a function that takes a status list and returns a new list with only the ready machines.

**VARIABLES TO USE:**
- Part A: "machine statuses" = ["Ready", "Not Ready", "Ready", "Ready", "Not Ready", "Ready"]
- Part B: "machine statuses" = ["Not Ready", "Ready", "Not Ready", "Not Ready", "Ready"]

**CONCEPT:** Function that filters a list based on a condition

**PART A FOCUS:** Write a FUNCTION called "get ready machines" that TAKES a list called "statuses". SET "ready list" = []. Use FOR EACH — IF status equals "Ready", ADD status TO "ready list". RETURN "ready list". CALL the function and PRINT the result
**PART B FOCUS:** CALL the same function with the second list

**EXPECTED OUTPUT PART A:**
["Ready", "Ready", "Ready", "Ready"]

**EXPECTED OUTPUT PART B:**
["Ready", "Ready"]

---

## EXERCISE 3: COUNT LOW STOCK ITEMS ⚠️

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 3
**EMOJI:** ⚠️

**SCENARIO:** The factory needs to know how many ingredients are low (5 or fewer bags left). The children write a function that counts low stock items.

**VARIABLES TO USE:**
- Part A: "stock levels" = [8, 3, 12, 4, 7]
- Part B: "stock levels" = [2, 9, 5, 11, 1]

**CONCEPT:** Function that counts matches based on a condition

**PART A FOCUS:** Write a FUNCTION called "count low stock" that TAKES a list called "levels". SET "low count" = 0. Use FOR EACH — IF "level" <= 5, add 1 to "low count". RETURN "low count". CALL the function and PRINT the result
**PART B FOCUS:** CALL the same function with the second list

**EXPECTED OUTPUT PART A:**
"Low stock ingredients: 2"

**EXPECTED OUTPUT PART B:**
"Low stock ingredients: 3"

---

## EXERCISE 4: PASS OR FAIL FUNCTION 📝

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 4
**EMOJI:** 📝

**SCENARIO:** The factory tests each machine's performance. The children write a function that takes a list of test scores and returns a new list with "Pass" for scores 70 or above, and "Fail" for scores below 70.

**VARIABLES TO USE:**
- Part A: "test scores" = [85, 62, 91, 48, 77, 53]
- Part B: "test scores" = [95, 44, 68, 82, 59]

**CONCEPT:** Function that transforms each item based on a condition

**PART A FOCUS:** Write a FUNCTION called "mark results" that TAKES a list called "scores". SET "results" = []. Use FOR EACH — IF score >= 70, ADD "Pass" TO "results", ELSE ADD "Fail" TO "results". RETURN "results". CALL the function and PRINT the result
**PART B FOCUS:** CALL the same function with the second list

**EXPECTED OUTPUT PART A:**
["Pass", "Fail", "Pass", "Fail", "Pass", "Fail"]

**EXPECTED OUTPUT PART B:**
["Pass", "Fail", "Fail", "Pass", "Fail"]

---

## EXERCISE 5: COLLECT HIGH SCORES ONLY ⭐

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 5
**EMOJI:** ⭐

**SCENARIO:** The supervisor wants a list of only the high quality scores (above 85). The children write a function that takes a list of scores and returns a new list containing only the scores that are above 85.

**VARIABLES TO USE:**
- Part A: "quality scores" = [92, 78, 88, 95, 67, 89, 76]
- Part B: "quality scores" = [84, 91, 73, 86, 94, 68]

**CONCEPT:** Function that filters a list and returns a new list with matching items

**PART A FOCUS:** Write a FUNCTION called "get high scores" that TAKES a list called "scores". SET "high scores" = []. Use FOR EACH — IF "score" > 85, ADD "score" TO "high scores". RETURN "high scores". CALL the function and PRINT "High scores:", "high scores"

**PART B FOCUS:** CALL the same function with the second list

**EXPECTED OUTPUT PART A:**
"High scores: [92, 88, 95, 89]"

**EXPECTED OUTPUT PART B:**
"High scores: [91, 86, 94]"

---

## NARRATIVE CONTEXT

**Opening for Module 8 Arrays Part 6:**
"Welcome to the final challenge! Today you will put EVERYTHING together — lists, loops, conditions, and functions. These are the same kinds of programs that are used in real coding every day. You have learned so much. Let's show what you can do!"

**Exercise Flow:**
1. Count high scores — function that counts matches
2. Filter ready machines — function that returns a filtered list
3. Count low stock items — count items that meet a condition
4. Pass or fail — function that transforms scores to words
5. Average with condition — calculate average of only high scores

**Closing:**
"🎉 AMAZING WORK! 🎉

You have completed Module 8 — Arrays! You can now:
- Create and change lists
- Read items by position
- Use FOR EACH loops
- Write functions that work with lists
- Filter lists with conditions
- Count matches and calculate averages

You have learned one of the most powerful concepts in coding. Well done!"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "arrays"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET, PRINT, FUNCTION, CALL, RETURN, FOR EACH, IF/THEN, ELSE, ADD, LENGTH OF
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

**END OF MODULE 8 ARRAYS PART 6 SPECIFICATIONS**