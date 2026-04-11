# module 8 - arrays part 1 - exercise specifications
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Spec file for AI to generate all Module 8 Arrays Part 1 exercises

**SETTING:** The Popcorn Factory
**THEME:** The children arrive at the popcorn factory and work through a checklist of lists — flavours, assistants, ingredients, machines, and production boxes

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-8-ARRAYS-PART1-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: THE FLAVOURS CLIPBOARD 🍿

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 1
**EMOJI:** 🍿

**SCENARIO:** The children arrive at the popcorn factory and the supervisor hands them a clipboard. The first list on the clipboard shows today's popcorn flavours. The children need to create the list and read from it.

**VARIABLES TO USE:**
- Part A: "today's flavours" = ["Salted", "Sweet", "Spicy", "Toffee", "Cheese"]
- Part B: "machine numbers" = [1, 2, 3, 4, 5]

**CONCEPT:** Creating an array and reading items from it by position

**PART A FOCUS:** Create the flavours list and read the first and third flavour by position
**PART B FOCUS:** Create the machine numbers list and read the second and last machine number by position

**EXPECTED OUTPUT PART A:**
"First flavour: Salted"
"Third flavour: Spicy"

**EXPECTED OUTPUT PART B:**
"Second machine: 2"
"Last machine: 5"

---

## EXERCISE 2: THE ASSISTANTS CLIPBOARD 👦

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 2
**EMOJI:** 👦

**SCENARIO:** The next list on the clipboard shows which children are helping at the factory today. One child didn't arrive so their name needs removing. A new child has turned up so their name needs adding.

**VARIABLES TO USE:**
- Part A: "assistants" = ["Ben", "Sara", "Tom", "Aisha"] — REMOVE "Tom" from position 2
- Part B: "assistants" = ["Ben", "Sara", "Aisha"] — ADD "Jake" to the list

**CONCEPT:** Using ADD and REMOVE to change a list

**PART A FOCUS:** Create the assistants list and REMOVE the child who didn't arrive
**PART B FOCUS:** Take the updated list and ADD the new child who turned up

**EXPECTED OUTPUT PART A:**
["Ben", "Sara", "Aisha"]

**EXPECTED OUTPUT PART B:**
["Ben", "Sara", "Aisha", "Jake"]

---

## EXERCISE 3: THE INGREDIENTS CLIPBOARD 🧂

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 3
**EMOJI:** 🧂

**SCENARIO:** The ingredients list has some mistakes — the wrong ingredients were written down for two of the flavours. The children need to spot the errors and UPDATE the list before production starts.

**VARIABLES TO USE:**
- Part A: "ingredients" = ["Salt", "Sugar", "Chilli", "Butter", "Milk"] — UPDATE position 3 from "Butter" to "Toffee Sauce", UPDATE position 4 from "Milk" to "Cheese Powder"
- Part B: "ingredients" = ["Salt", "Sugar", "Chilli", "Toffee Sauce", "Cheese Powder"] — UPDATE position 0 from "Salt" to "Sea Salt", UPDATE position 2 from "Chilli" to "Hot Chilli Flakes"

**CONCEPT:** Using UPDATE to correct mistakes on a list

**PART A FOCUS:** Fix the ingredients list by updating two wrong items
**PART B FOCUS:** Refine the ingredients list further with more precise ingredient names

**EXPECTED OUTPUT PART A:**
["Salt", "Sugar", "Chilli", "Toffee Sauce", "Cheese Powder"]

**EXPECTED OUTPUT PART B:**
["Sea Salt", "Sugar", "Hot Chilli Flakes", "Toffee Sauce", "Cheese Powder"]

---

## EXERCISE 4: THE MACHINES CLIPBOARD 🤖

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 4
**EMOJI:** 🤖

**SCENARIO:** The machines clipboard shows which machines are ready to start production. The children need to loop through the list and print the status of every machine so the supervisor knows which ones are good to go.

**VARIABLES TO USE:**
- Part A: "ready machines" = ["Machine 1", "Machine 2", "Machine 3", "Machine 4"]
- Part B: "machine status" = ["Ready", "Not Ready", "Ready", "Ready", "Not Ready"]

**CONCEPT:** Using FOR EACH to loop through a list and print every item

**PART A FOCUS:** Loop through the ready machines list and print each machine name
**PART B FOCUS:** Loop through the machine status list and print each status

**EXPECTED OUTPUT PART A:**
"Checking: Machine 1"
"Checking: Machine 2"
"Checking: Machine 3"
"Checking: Machine 4"

**EXPECTED OUTPUT PART B:**
"Status: Ready"
"Status: Not Ready"
"Status: Ready"
"Status: Ready"
"Status: Not Ready"

---

## EXERCISE 5: THE PRODUCTION CLIPBOARD 📦

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 5
**EMOJI:** 📦

**SCENARIO:** At the end of the visit, the children check the production clipboard which shows how many boxes each machine produced today. They write a function that takes the list and counts the total boxes produced.

**VARIABLES TO USE:**
- Part A: "boxes produced" = [12, 8, 15, 10, 9] — function counts total using LENGTH OF
- Part B: "boxes produced" = [20, 18, 22, 16, 19] — function finds the first machine's count and the last machine's count

**CONCEPT:** Passing a list into a function and getting something back

**PART A FOCUS:** Write a function that takes the boxes list and returns the total number of machines that produced boxes using LENGTH OF
**PART B FOCUS:** Write a function that takes the boxes list and returns the first and last production counts by position

**EXPECTED OUTPUT PART A:**
"Total machines that produced today: 5"

**EXPECTED OUTPUT PART B:**
"First machine produced: 20"
"Last machine produced: 19"

---

## NARRATIVE CONTEXT

**Opening for Module 8 Arrays Part 1:**
"Welcome to the Popcorn Factory! Today you are helping the supervisor check the factory clipboards before production begins. Each clipboard has a list on it — and your job is to read them, fix any mistakes, and make sure everything is ready. Let's get started!"

**Exercise Flow:**
1. Read the flavours clipboard — create a list and read from it by position
2. Update the assistants clipboard — ADD and REMOVE names as children arrive and leave
3. Fix the ingredients clipboard — UPDATE the wrong ingredients before production starts
4. Check the machines clipboard — loop through every machine and print its status
5. Count the production clipboard — use a function to process the boxes list and report back

**Closing:**
"Brilliant work! You have learned how to create lists, read from them, change them, loop through them, and use them with functions. The factory is ready — and so are you! Next we will go deeper into how lists and functions work together. 🍿"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "arrays"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET, PRINT, ADD, REMOVE, UPDATE, FOR EACH, FUNCTION — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Uses `<code>` tags (not `<highlight>`)
- [ ] IDs follow pattern: arrays-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="arrays"
- [ ] Image filename and alt text match spec (if used)
- [ ] Empty hint/output/answer containers present
- [ ] Exercise 1 Part A and Part B show complete pseudocode answer
- [ ] Exercises 2-5 Part A and Part B reference specific task — no pseudocode shown
- [ ] Expected outputs match the spec
- [ ] Popcorn factory theme consistent throughout
- [ ] British English throughout — lessons not periods, colour not color, children not students
- [ ] Nothing used that hasn't been taught in a helper box (Rule 6)

---

## GENERATION RESULTS

**When you generate with AI, document here:**
- Which AI was used: ___________
- Exercise generated: ___________
- Did it generate correctly? YES / NO
- What needed fixing: ___________
- Number of attempts needed: ___________

---

**END OF MODULE 8 ARRAYS PART 1 SPECIFICATIONS**
