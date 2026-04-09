# MODULE 7 - FUNCTIONS PART 6 - EXERCISE SPECIFICATIONS
## Language-Agnostic Edition

**Created:** March 2026
**Purpose:** Spec file for AI to generate all Module 7 Functions Part 6 exercises
**SETTING:** ☕ The Popcorn Press Café — grand finale
**THEME:** Everything together — variables, operators, conditions, loops, functions, return, parameters

---

## TEACHING PHILOSOPHY — READ THIS FIRST

Part 6 is the grand finale of Module 7 and the culmination of the entire course so far.
No new concepts are introduced. Everything has already been taught.
The goal is to show children how everything works together in one real scenario.

The Popcorn Press café is the setting — children run the café ordering system.
Each exercise adds one more layer until Exercise 5 is the complete system.

- Exercise 1: Simple order function — customer name and drink, RETURN the order
- Exercise 2: Add size and price — operator inside the function
- Exercise 3: Add a condition — check if drink is available
- Exercise 4: Add a loop — process multiple customers automatically
- Exercise 5: The complete café system — all 10 drinks, all customers, full bill

⚠️ CRITICAL — FUNCTION FIRST RULE:
Every exercise MUST lead with the function.
The correct order is ALWAYS:
1. Write the FUNCTION with RETURN
2. Variables SET inside or outside as appropriate
3. Loop calls the function (where applicable)
4. PRINT the result

---

## THE POPCORN PRESS MENU

1. The Butter Blast
2. The Caramel Crunch
3. The Salt & Swirl
4. The Kernel Kicker
5. The Toffee Pop
6. The Cheese Whip
7. The Chilli Fizz
8. The Sweet Batch
9. The Midnight Kernel
10. The Factory Frost

---

## EXERCISE 1: Taking the First Order ☕

**SECTION NAME:** functions
**EXERCISE NUMBER:** 1
**EMOJI:** ☕

**SCENARIO:** The Popcorn Press is open! Take the very first order — a simple function that takes a customer name and drink and returns the order.

**VARIABLES TO USE:**
- Part A: "customer name" and "drink" as parameters
- Part B: "customer name" and "drink" as parameters, different values

**CONCEPT:** Simple function with two parameters and RETURN — the foundation of the café system.

**PART A FOCUS:** Write a function called "take order" that takes "customer name" and "drink" as parameters and returns them together as the order. Call it with "Marivic" and "The Butter Blast". Catch in "order" and print it.
**PART B FOCUS:** Call the same function with "Gabrielle" and "The Caramel Crunch". Catch and print.

**EXPECTED OUTPUT PART A:**
```
Order: Marivic — The Butter Blast
```
**EXPECTED OUTPUT PART B:**
```
Order: Gabrielle — The Caramel Crunch
```

---

## EXERCISE 2: Adding Size and Price 🏷️

**SECTION NAME:** functions
**EXERCISE NUMBER:** 2
**EMOJI:** 🏷️

**SCENARIO:** Customers can now choose their size! Add size and price to the order. Small costs £3, large costs £4.

**VARIABLES TO USE:**
- Part A: "customer name", "drink" and "size" as parameters. "small price" and "large price" outside the function.
- Part B: "customer name", "drink" and "size" as parameters, different values.

**CONCEPT:** Outside variables + three parameters + operator + RETURN.

**PART A FOCUS:** SET "small price" to 3 and "large price" to 4 outside the function. Write a function called "take order" that takes "customer name", "drink" and "size" as parameters. Inside, SET "price" to "small price". Use an operator to calculate if size is large add 1 to price. RETURN the complete order with price. Call with "Alec", "The Salt & Swirl", "large". Catch in "order" and print.
**PART B FOCUS:** Call the same function with "Ellaine", "The Kernel Kicker", "small". Catch and print.

**EXPECTED OUTPUT PART A:**
```
The Popcorn Press: Alec — The Salt & Swirl (large) — £4
```
**EXPECTED OUTPUT PART B:**
```
The Popcorn Press: Ellaine — The Kernel Kicker (small) — £3
```

---

## EXERCISE 3: Checking the Menu 📋

**SECTION NAME:** functions
**EXERCISE NUMBER:** 3
**EMOJI:** 📋

**SCENARIO:** Some drinks have run out! Add a condition to check if the drink is available before taking the order.

**VARIABLES TO USE:**
- Part A: "customer name" and "drink" as parameters. "available" set inside the function.
- Part B: "customer name" and "drink" as parameters, different values.

**CONCEPT:** Function with condition + parameters + RETURN — check availability before confirming order.

**PART A FOCUS:** Write a function called "check order" that takes "customer name" and "drink" as parameters. Inside, SET "available" to "yes". IF "available" = "yes" RETURN the order confirmed, ELSE RETURN sorry message. Call with "Marivic" and "The Toffee Pop". Catch in "result" and print.
**PART B FOCUS:** Change "available" to "no" inside the function. Call with "Gabrielle" and "The Cheese Whip". Catch and print.

**EXPECTED OUTPUT PART A:**
```
Order confirmed: Marivic — The Toffee Pop — ready shortly!
```
**EXPECTED OUTPUT PART B:**
```
Sorry Gabrielle — The Cheese Whip is not available today.
```

---

## EXERCISE 4: The Lunchtime Queue 🔁

**SECTION NAME:** functions
**EXERCISE NUMBER:** 4
**EMOJI:** 🔁

**SCENARIO:** The lunchtime rush is here! Use a loop to process multiple orders automatically — one function handles the whole queue!

**VARIABLES TO USE:**
- Part A: "customer name" and "drink" as parameters. Loop processes Marivic, Gabrielle, Alec, Ellaine.
- Part B: Same function, different drinks in the loop.

**CONCEPT:** Loop calling a function with parameters — the queue runs automatically.

**PART A FOCUS:** Write a function called "serve customer" that takes "customer name" and "drink" as parameters and returns the order. Write a loop that calls the function four times:
- Marivic — The Chilli Fizz
- Gabrielle — The Sweet Batch
- Alec — The Midnight Kernel
- Ellaine — The Factory Frost
Catch in "order" and print each time.

**PART B FOCUS:** Same function, same loop structure. Different drinks:
- Marivic — The Butter Blast
- Gabrielle — The Toffee Pop
- Alec — The Salt & Swirl
- Ellaine — The Kernel Kicker
Catch and print each time.

**EXPECTED OUTPUT PART A:**
```
Served: Marivic — The Chilli Fizz
Served: Gabrielle — The Sweet Batch
Served: Alec — The Midnight Kernel
Served: Ellaine — The Factory Frost
```
**EXPECTED OUTPUT PART B:**
```
Served: Marivic — The Butter Blast
Served: Gabrielle — The Toffee Pop
Served: Alec — The Salt & Swirl
Served: Ellaine — The Kernel Kicker
```

---

## EXERCISE 5: The Full Café System 🌟

**SECTION NAME:** functions
**EXERCISE NUMBER:** 5
**EMOJI:** 🌟

**SCENARIO:** The complete Popcorn Press ordering system — café name outside, customer name, drink and size as parameters, condition checks size, operator calculates price, loop processes all customers, RETURN hands back the complete order. Everything. All at once.

**VARIABLES TO USE:**
- Part A: "cafe name" outside. "customer name", "drink", "size" as parameters. Loop processes all four customers with different drinks and sizes.
- Part B: Same function. Loop processes all four customers with different drinks and sizes.

**CONCEPT:** Outside variable + three parameters + condition + operator + RETURN + loop — the complete system.

**PART A FOCUS:** 
SET "cafe name" to "The Popcorn Press" outside the function.
Write a function called "full order" that takes "customer name", "drink" and "size" as parameters.
Inside: IF "size" = "large" SET "price" to 4 ELSE SET "price" to 3 END IF.
RETURN the complete order including cafe name, customer name, drink, size and price.
Write a loop that calls the function four times:
- Marivic — The Caramel Crunch — large
- Gabrielle — The Cheese Whip — small
- Alec — The Sweet Batch — large
- Ellaine — The Midnight Kernel — small
Catch in "order" and print each time.

**PART B FOCUS:** Keep "cafe name" as "The Popcorn Press". Same function. Loop with:
- Marivic — The Factory Frost — small
- Gabrielle — The Chilli Fizz — large
- Alec — The Butter Blast — small
- Ellaine — The Caramel Crunch — large
Catch and print each time.

**EXPECTED OUTPUT PART A:**
```
The Popcorn Press: Marivic — The Caramel Crunch (large) — £4
The Popcorn Press: Gabrielle — The Cheese Whip (small) — £3
The Popcorn Press: Alec — The Sweet Batch (large) — £4
The Popcorn Press: Ellaine — The Midnight Kernel (small) — £3
```
**EXPECTED OUTPUT PART B:**
```
The Popcorn Press: Marivic — The Factory Frost (small) — £3
The Popcorn Press: Gabrielle — The Chilli Fizz (large) — £4
The Popcorn Press: Alec — The Butter Blast (small) — £3
The Popcorn Press: Ellaine — The Caramel Crunch (large) — £4
```

---

## NARRATIVE CONTEXT

**Opening for Module 7 Part 6:**
"You have made it to the grand finale! You have learned variables, operators, conditions, loops and functions. You have worked on the factory floor, tracked ingredients, checked safety equipment and processed batches. Now it is time for something special — The Popcorn Press café is open and YOU are running it! Every skill you have learned comes together right here. Let us open for business!"

**Exercise Flow:**
1. First order — simple function, two parameters, RETURN
2. Size and price — add operator and outside variables
3. Menu check — add condition to check availability
4. Lunchtime queue — add loop to process multiple customers
5. The complete system — everything together, the full café in one function

**Closing:**
"You did it! You have just built a complete café ordering system using everything you have learned — variables, operators, conditions, loops, functions, parameters and RETURN. From Module 1 variables all the way to The Popcorn Press. You are a coder. Well done! ☕🍿🎉"

---

## QUALITY CHECKLIST FOR AI GENERATION

When AI generates the exercise, verify:
- [ ] Section name is "functions"
- [ ] Exercise number matches
- [ ] Both Part A and Part B are included
- [ ] FUNCTION is written FIRST — loop and calls come after
- [ ] Variables use natural language in quotes — NOT camelCase
- [ ] Function names use natural language in quotes — NOT camelCase
- [ ] Uses pseudocode only — no real language syntax
- [ ] Uses PRINT with commas — no + concatenation
- [ ] Prices shown in £ (pounds) — British currency
- [ ] IDs follow pattern: functions-ex[number]-part-[letter]
- [ ] Data attributes correct: data-section="functions"
- [ ] Exercise 1 Part A shows pseudocode in code-example div
- [ ] Exercise 1 Part B shows pseudocode in code-example div
- [ ] Exercises 2-5 Part B Step 4 references specific task — no pseudocode shown
- [ ] Nothing used that hasn't been taught in a helper box (Rule 6)
- [ ] British English throughout
- [ ] Café name: The Popcorn Press
- [ ] Names used: Marivic, Gabrielle, Alec, Ellaine
- [ ] All drink names from The Popcorn Press menu used across exercises

---

END OF MODULE 7 FUNCTIONS PART 6 SPECIFICATIONS
