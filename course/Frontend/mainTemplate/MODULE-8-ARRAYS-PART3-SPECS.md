# MODULE 8 — ARRAYS PART 3 — EXERCISE SPECIFICATIONS
## Language-Agnostic Edition

**Created:** April 2026
**Purpose:** Spec file for AI to generate all Module 8 Arrays Part 3 exercises

**SETTING:** The Popcorn Factory
**THEME:** The children learn to use FOR EACH loops to go through every item in a list automatically

---

## HOW TO USE THIS WITH AI

**Give AI these files:**
1. This spec file
2. MODULE-0-EXERCISE-TEMPLATE-MASTER.md (for structure and rules)
3. MODULE-8-ARRAYS-PART3-HELPER-BOXES.md (for context on what has been taught)

**Instruction to AI:**
"Using the exercise template and helper boxes, generate the complete HTML for
Exercise [NUMBER] following these specifications exactly."

---

## EXERCISE 1: PRINT ALL FLAVOURS 📋

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 1
**EMOJI:** 📋

**SCENARIO:** The supervisor wants to see every flavour on today's menu. The children write a loop that goes through the flavours list and prints each one.

**VARIABLES TO USE:**
- Part A: "flavours" = ["Salted", "Sweet", "Spicy", "Toffee", "Cheese"]
- Part B: "flavours" = ["Butter", "Caramel", "Plain"]

**CONCEPT:** Using FOR EACH to print every item in a list

**PART A FOCUS:** Write a FOR EACH loop that goes through "flavours" and prints each flavour with the message "Flavour:"
**PART B FOCUS:** Write a FOR EACH loop that goes through the shorter list and prints each flavour

**EXPECTED OUTPUT PART A:**
"Flavour: Salted"
"Flavour: Sweet"
"Flavour: Spicy"
"Flavour: Toffee"
"Flavour: Cheese"

**EXPECTED OUTPUT PART B:**
"Flavour: Butter"
"Flavour: Caramel"
"Flavour: Plain"

---

## EXERCISE 2: WELCOME EACH ASSISTANT 👋

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 2
**EMOJI:** 👋

**SCENARIO:** Each assistant arrives at the factory. The children write a loop that prints a welcome message for every assistant on the list.

**VARIABLES TO USE:**
- Part A: "assistants" = ["Ben", "Sara", "Tom", "Aisha"]
- Part B: "assistants" = ["Jake", "Mia", "Leo"]

**CONCEPT:** Using FOR EACH with a message that includes each item

**PART A FOCUS:** Write a FOR EACH loop that prints "Welcome to the factory:" followed by each assistant's name
**PART B FOCUS:** Write the same loop for a different list of assistants

**EXPECTED OUTPUT PART A:**
"Welcome to the factory: Ben"
"Welcome to the factory: Sara"
"Welcome to the factory: Tom"
"Welcome to the factory: Aisha"

**EXPECTED OUTPUT PART B:**
"Welcome to the factory: Jake"
"Welcome to the factory: Mia"
"Welcome to the factory: Leo"

---

## EXERCISE 3: SHOW MACHINE STATUS 🤖

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 3
**EMOJI:** 🤖

**SCENARIO:** The machines clipboard shows each machine's status. The children write a loop that prints "Machine [number] is [status]" for every machine.

**VARIABLES TO USE:**
- Part A: "machine names" = ["Popper 1", "Popper 2", "Popper 3", "Popper 4"]
- Part B: "machine statuses" = ["Ready", "Not Ready", "Ready", "Ready"]

**CONCEPT:** Using FOR EACH with two different lists (one for names, one for statuses)

**PART A FOCUS:** Loop through "machine names" and print "Checking:" followed by each machine name
**PART B FOCUS:** Loop through "machine statuses" and print "Status:" followed by each status

**EXPECTED OUTPUT PART A:**
"Checking: Popper 1"
"Checking: Popper 2"
"Checking: Popper 3"
"Checking: Popper 4"

**EXPECTED OUTPUT PART B:**
"Status: Ready"
"Status: Not Ready"
"Status: Ready"
"Status: Ready"

---

## EXERCISE 4: DOUBLE THE BOX COUNTS 🔢

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 4
**EMOJI:** 🔢

**SCENARIO:** The factory wants to double production. The children write a loop that takes each box count, doubles it, and prints the new number.

**VARIABLES TO USE:**
- Part A: "box counts" = [5, 10, 3, 8, 12]
- Part B: "box counts" = [2, 4, 6, 8, 10]

**CONCEPT:** Doing a calculation on each item inside a FOR EACH loop

**PART A FOCUS:** Write a FOR EACH loop that goes through "box counts". For each "count", SET "doubled" = "count" * 2. Then PRINT "New count:", "doubled"

**PART B FOCUS:** Do the same for the second list

**EXPECTED OUTPUT PART A:**
"New count: 10"
"New count: 20"
"New count: 6"
"New count: 16"
"New count: 24"

**EXPECTED OUTPUT PART B:**
"New count: 4"
"New count: 8"
"New count: 12"
"New count: 16"
"New count: 20"

---

## EXERCISE 5: BUILD A SHOPPING LIST 🛒

**SECTION NAME:** arrays
**EXERCISE NUMBER:** 5
**EMOJI:** 🛒

**SCENARIO:** The supervisor gives the children an empty list and asks them to fill it with ingredients. They start with an empty list, then add each ingredient one by one, and finally print the complete list.

**VARIABLES TO USE:**
- Part A: Start with "shopping list" = [] — then ADD "Corn", ADD "Oil", ADD "Salt", ADD "Sugar"
- Part B: Start with "shopping list" = [] — then ADD "Butter", ADD "Caramel", ADD "Cheese Powder"

**CONCEPT:** Using ADD inside a loop to build a list

**PART A FOCUS:** Start with an empty list called "shopping list". ADD "Corn", then ADD "Oil", then ADD "Salt", then ADD "Sugar". Print the final list
**PART B FOCUS:** Start with an empty list and ADD three different ingredients. Print the final list

**EXPECTED OUTPUT PART A:**
["Corn", "Oil", "Salt", "Sugar"]

**EXPECTED OUTPUT PART B:**
["Butter", "Caramel", "Cheese Powder"]

---

## NARRATIVE CONTEXT

**Opening for Module 8 Arrays Part 3:**
"Welcome back! Today you are learning about FOR EACH loops — a way to visit every single item on a list without writing each one out by hand. Imagine checking every machine on the factory floor without having to walk to each one individually!"

**Exercise Flow:**
1. Print all flavours — simple FOR EACH loop to print each item
2. Welcome each assistant — add a message with each item
3. Show machine status — loop through two different lists
4. Double the box counts — do calculations inside the loop
5. Build a shopping list — use ADD to create a list from scratch

**Closing:**
"Brilliant! You can now loop through any list automatically. No more writing the same code over and over — the computer does the repeating for you!"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "arrays"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — SET, PRINT, FOR EACH, IN, END FOR, ADD
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

**END OF MODULE 8 ARRAYS PART 3 SPECIFICATIONS**