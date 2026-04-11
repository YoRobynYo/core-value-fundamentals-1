# MODULE 8 — ARRAYS PART 2 — EXERCISE SPECIFICATIONS
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Spec file for AI to generate all Module 8 Arrays Part 2 exercises

**SETTING:** The Popcorn Factory
**THEME:** The children learn to pass lists into functions and get results back

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-8-ARRAYS-PART2-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: COUNT THE FLAVOURS 🍿

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 1
**EMOJI:** 🍿

**SCENARIO:** The supervisor at the popcorn factory needs to know how many flavours are on today's production list. The children write a function that takes the flavours list and returns the total count.

**VARIABLES TO USE:**
- Part A: "today's flavours" = ["Salted", "Sweet", "Spicy", "Toffee", "Cheese", "Butter"]
- Part B: "limited flavours" = ["Salted", "Sweet", "Butter"]

**CONCEPT:** Passing a list into a function and using LENGTH OF to count items

**PART A FOCUS:** Write a function called "count flavours" that takes a list and returns how many flavours are in it using LENGTH OF
**PART B FOCUS:** Write a function called "count limited flavours" that takes a list and returns the total count

**EXPECTED OUTPUT PART A:**
"Total flavours today: 6"

**EXPECTED OUTPUT PART B:**
"Limited menu has: 3 flavours"

---

## EXERCISE 2: FIRST AND LAST MACHINE 🔧

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 2
**EMOJI:** 🔧

**SCENARIO:** The factory has a list of machine IDs. The children need to write a function that takes the list and returns the first machine ID and the last machine ID using positions.

**VARIABLES TO USE:**
- Part A: "machine IDs" = [101, 102, 103, 104, 105]
- Part B: "machine IDs" = [201, 202, 203]

**CONCEPT:** Reading specific positions from a list inside a function

**PART A FOCUS:** Write a function called "get first and last" that takes a list, returns the item at position 0 and the item at the last position using LENGTH OF - 1
**PART B FOCUS:** Write a function called "get first and last v2" that does the same for a shorter list

**EXPECTED OUTPUT PART A:**
"First machine: 101"
"Last machine: 105"

**EXPECTED OUTPUT PART B:**
"First machine: 201"
"Last machine: 203"

---

## EXERCISE 3: CHECK IF LIST HAS ITEMS ✅

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 3
**EMOJI:** ✅

**SCENARIO:** Before starting production, the supervisor needs to check if the ingredients list has any items at all. The children write a function that returns "Ready to go!" if the list has items, or "No ingredients!" if it is empty.

**VARIABLES TO USE:**
- Part A: "ingredients" = ["Salt", "Sugar", "Oil"]
- Part B: "ingredients" = []

**CONCEPT:** Using LENGTH OF in a condition to check if a list is empty or not

**PART A FOCUS:** Write a function called "check ingredients" that takes a list, uses LENGTH OF to see if it has items, and returns a message
**PART B FOCUS:** Write the same function and show what happens with an empty list

**EXPECTED OUTPUT PART A:**
"Ready to go!"

**EXPECTED OUTPUT PART B:**
"No ingredients!"

---

## EXERCISE 4: GET ITEM BY POSITION 📍

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 4
**EMOJI:** 📍

**SCENARIO:** The supervisor asks the children to write a helper function that can grab any item from the assistants list by its position number. The function takes a list AND a position number, then returns the item at that position.

**VARIABLES TO USE:**
- Part A: "assistants" = ["Ben", "Sara", "Tom", "Aisha", "Jake"] — get position 2
- Part B: "assistants" = ["Ben", "Sara", "Tom", "Aisha", "Jake"] — get position 4

**CONCEPT:** Passing two things into a function (a list AND a number)

**PART A FOCUS:** Write a function called "get assistant" that takes a list and a position number, then returns the item at that position
**PART B FOCUS:** Call the same function with a different position number

**EXPECTED OUTPUT PART A:**
"Assistant at position 2: Tom"

**EXPECTED OUTPUT PART B:**
"Assistant at position 4: Jake"

---

## EXERCISE 5: UPDATE LIST INSIDE FUNCTION ✏️

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 5
**EMOJI:** ✏️

**SCENARIO:** The production list has a mistake — the wrong box count was recorded for one machine. The children write a function that takes the list, updates a specific position, and returns the updated list.

**VARIABLES TO USE:**
- Part A: "box counts" = [12, 8, 15, 10, 9] — update position 1 (second item) to 20
- Part B: "box counts" = [12, 8, 15, 10, 9] — update position 3 (fourth item) to 25

**CONCEPT:** Using UPDATE inside a function

**PART A FOCUS:** Write a function called "fix box count" that takes a list, updates position 1 to 20, and returns the updated list
**PART B FOCUS:** Write a function called "fix another box" that updates position 3 to 25

**EXPECTED OUTPUT PART A:**
[12, 20, 15, 10, 9]

**EXPECTED OUTPUT PART B:**
[12, 8, 15, 25, 9]

---

## NARRATIVE CONTEXT

**Opening for Module 8 Arrays Part 2:**
"Welcome back to the Popcorn Factory! Today you are learning how to give your lists to functions — just like handing a clipboard to an assistant and asking them to count, find, or change something. Let's get started!"

**Exercise Flow:**
1. Count the flavours — use LENGTH OF inside a function
2. Find first and last machine — read by position inside a function
3. Check if list has items — use LENGTH OF with a condition
4. Get item by position — pass a list AND a number into a function
5. Update list inside function — change a specific position

**Closing:**
"Fantastic work! You can now pass lists into functions, count them, read from them, and even update them. Next we will learn how to loop through lists automatically!"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "arrays"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET, PRINT, FUNCTION, CALL, RETURN, LENGTH OF, UPDATE
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

**END OF MODULE 8 ARRAYS PART 2 SPECIFICATIONS**