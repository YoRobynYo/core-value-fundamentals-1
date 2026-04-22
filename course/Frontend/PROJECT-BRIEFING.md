# CORE VALUE FUNDAMENTALS — PROJECT BRIEFING
## For AI Handoff — Updated April 2026

---

## WHAT IS THIS PROJECT?

A children's coding course called **Core Value Fundamentals** (ages 10-12, UK based).

- Language-agnostic — uses generic pseudocode commands (SET, PRINT, IF, FUNCTION etc) — NOT real syntax
- British English throughout — "colour" not "color", "lessons" not "periods"
- Two themes run through the course: **Classroom** (early modules) and **Popcorn Factory** (later modules)
- Designed so language-specific versions (Python, JavaScript, Rust etc) can be added later as bolt-ons
- Each module has multiple exercises, each exercise has a **Part A** and a **Part B**
- This briefing applies to this course and any future courses built with the same pipeline

---

## COURSE PROGRESS

> ⚠️ This section should be updated at the start of every new build session.

| | |
|--|--|
| **Modules complete** | *(update before each session)* |
| **Modules remaining** | *(update before each session)* |
| **Next module to build** | *(update before each session)* |

See the **Course Content Map** at the bottom of this file for the full list of what has been built, including every exercise and Part A / Part B title.

---

## THE PIPELINE — HOW IT WORKS

Located at: `course/Frontend/` within the project root.

### The Templates (the blueprint layer)

    1-HOW-TO-REWRITE-MODULE-SPECS.md — instructions for writing specs
    2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md — the master exercise template
    3-MODULE-0-TEMPLATE-SPEC.md — the blank spec template
    4-MODULE-0-EXERCISE-GOLD-STANDARD.html — the gold standard HTML example

Then from those you create:

    The SPEC file for the new module
    The HELPER BOXES file for the new module


### The Basic Flow

1. Each module has two files in `mainTemplate/` — a **HELPER BOXES file** and a 
 **SPEC file** 
2. The spec file defines every exercise, what variables to use, and what the expected output should be
3. The helper boxes file contains the teaching content shown to the student before the exercises
4. The pipeline reads these files and uses AI to generate the complete HTML for each module
5. Each exercise generates Part A and Part B separately
6. Validation runs after each generation to catch errors before saving
7. `audit-html.js` checks for banned words and auto-locks clean modules
8. Clean modules are recorded in `locked-modules.json` — these are skipped on future rebuilds

### Key Files

| File | Purpose |
|------|---------|
| `build-html.js` | Main AI exercise generator ⚠️ NO lock check — do not use directly |
| `rebuild-all.js` | ✅ Safe to run — respects locked-modules.json and skips locked modules |
| `rebuild-fix-errors.js` | Rebuilds a hardcoded list of specific failed modules |
| `rebuild-new.js` | Builds specific new modules only |
| `audit-html.js` | Checks for banned words, auto-locks clean modules — always safe to run |
| `update-template.js` | Maintains the master template (3-step process) |
| `locked-modules.json` | Records which modules are locked — updated automatically by audit |
| `pipeline-config.json` | ⚠️ AI provider configuration — check this before every session |
| `mainTemplate/` | All spec and helper box .md files |
| `modules/` | Output folder containing all built index.html files |

### Safe Commands

```bash
node audit-html.js       # Always safe — reads only, never writes module files
node rebuild-all.js      # Safe — skips all locked modules automatically
```

---

## ⚠️ THE AI WATERFALL — READ THIS CAREFULLY

The pipeline uses a **waterfall of AI providers**. When one provider fails or runs out of credits, it silently falls back to the next one in the chain.

### How to Check the Current Provider Order

**Always check `pipeline-config.json` before running the pipeline.** The provider order changes frequently as credits run out and reset. Do not assume any fixed order.

### The Danger Zone — Silent Failures

> 🚨 **This has caused real problems. Read carefully.**

- If a provider runs out of credits, the pipeline does NOT stop or flag an error
- It silently moves to the next provider in the chain
- If it reaches **Ollama** (the last resort), it will still produce output — but the quality will be poor
- Ollama runs locally and is only suitable as a last resort — on this hardware it does not produce good enough content for the course
- **Poor Ollama output looks like it worked but the content will be wrong, jumbled, or off-theme**

### How to Spot a Problem

Check the API STATUS readout during a build run. It looks like this:

```
📊 API STATUS:
Groq:     ░░░░░░░░░░░░░░░░░░░░  0/1000 (0%)
Cerebras: ░░░░░░░░░░░░░░░░░░░░  7/14400 (0%)
Gemini:   ░░░░░░░░░░░░░░░░░░░░  0/1500 (0%)
Ollama:   always available ✅
```

If the top providers are all at 0% and Ollama is the only one available — **stop the build and wait for credits to reset.**

### API Keys

Each provider requires an API key stored in a `.env` file in the project root. This file is NOT committed to git.

- Without a valid key, a provider will be skipped silently
- An expired or missing key behaves the same as no credits — silent skip
- Before running any build, verify your `.env` file has valid keys for your intended providers

---

## THE LOCKING SYSTEM

- `locked-modules.json` records which modules are complete and should not be rebuilt
- `audit-html.js` creates and updates this file automatically after a clean audit
- `rebuild-all.js` reads this file and skips any locked modules
- ⚠️ `build-html.js` does NOT check locks — never run it directly on a module that is already complete

---

## VERIFYING THE COURSE CONTENT

A script called `map.js` lives on the Desktop (and should be copied into the project root for safekeeping). It generates a clean content map of every module, every exercise, and every Part A / Part B title directly from the built HTML files.

Run it any time to verify what has been built:

```bash
node map.js
```

This produces `module-content-map.txt` — compare it against the Course Content Map below to confirm everything is correct.

---

### Rebuilding a Single Module

The rebuild-new.js script does NOT accept command line arguments — it ignores them. The module to rebuild is hardcoded inside the file.

To rebuild a specific module:

    Open rebuild-new.js
    Find the MODULES_TO_REBUILD array at the top
    Change the module name to the one you want to rebuild
    Run node rebuild-new.js
    After rebuild, run node audit-html.js to lock it

Also remember:

    Remove the module from locked-modules.json first — otherwise the rebuild won't overwrite it
    Keep the old folder as a backup by renaming it before rebuilding
    Always check the API STATUS during the build — stop immediately if only Ollama is available

---

## COURSE CONTENT MAP

> This section was last generated: **April 2026**
> To regenerate: run `node map.js` and paste the output here

*(Paste the full output of module-content-map.txt below this line)*


module-1-variables
  Exercise 1: Classroom Introduction 👋
    Part A: Introduce Yourself
    Part B: Teacher and Lesson Information
  Exercise 2: Supply Cupboard Mapping 📦
    Part A: First Supply Items
    Part B: Adding Another Supply
  Exercise 3: Classroom Directory 📚
    Part A: First Classmate
    Part B: Another Classmate
  Exercise 4: Teacher Information 👨‍🏫
    Part A: Main Teacher
    Part B: Teaching Assistant
  Exercise 5: Daily Timetable ⏰
    Part A: First Lesson
    Part B: Second Lesson and Special Activity

module-2-operators
  Exercise 1: Counting Pencils ✏️
    Part A: Adding Up the Shelves
    Part B: Checking the Drawers
  Exercise 2: Supplies Used vs. Remaining 📝
    Part A: Notebooks
    Part B: Erasers
  Exercise 3: Organising into Boxes 📦
    Part A: Markers
    Part B: Crayons
  Exercise 4: Supplies for All Children 🎨
    Part A: Paper Sheets
    Part B: Glue Sticks
  Exercise 5: Complete Classroom Supply Planning 📊
    Part A: How Many Pencils Do We Need?
    Part B: Organising Leftover Papers

module-3-conditions-part1
  Exercise 1: Great Hall Headcount 👥
    Part A: Checking Today's Headcount
    Part B: Checking Maximum Capacity
  Exercise 2: Safety Gear Distribution 🦺
    Part A: Safety Vest Check
    Part B: Hair Net Check
  Exercise 3: Work Station Setup 🛠️
    Part A: Station Readiness Check
    Part B: Clipboard Shortage Check
  Exercise 4: Checking Bags at Station 1 👜
    Part A: Check if Bags are Present
    Part B: Check if We Have Enough Bags
  Exercise 5: Checking Boxes at Station 1 📦
    Part A: Check if Boxes are Present
    Part B: Check if a Box is Labeled

module-3-conditions-part2
  Exercise 1: Bag Positioning Check ✅
    Part A: Checking the Bag Position
    Part B: Spotting a Wrong Position
  Exercise 2: Box Number Verification 🔢
    Part A: Matching Box to Station
    Part B: Catching a Wrong Box
  Exercise 3: Status Light Colour Check 🔴
    Part A: Checking the Setup Light
    Part B: Detecting an Unexpected Light
  Exercise 4: Tool Type Verification 🔧
    Part A: Checking the Correct Tool
    Part B: Spotting the Wrong Tool
  Exercise 5: Lightning Panel Check ⚡
    Part A: Confirming the Power is On
    Part B: Finding a Power Problem

module-3-conditions-part3
  Exercise 1: Safety Guard Verification 🛡️
    Part A: Check Guard Position
    Part B: Check Another Guard
  Exercise 2: Safety Goggles Check 🥽
    Part A: Station 1 Goggles
    Part B: Station 2 Goggles
  Exercise 3: Safety Gloves Check 🧤
    Part A: Minimum Gloves Check
    Part B: Storage Capacity Check
  Exercise 4: Weighing Scale Check ⚖️
    Part A: Scale Calibration Check
    Part B: Maximum Weight Check
  Exercise 5: Final Readiness Verification ✅
    Part A: Enough Helpers Check
    Part B: Maximum People Check

module-3-conditions-part4
  Exercise 1: Bags and Boxes Ready 📦
    Part A: Both Ready
    Part B: One Not Ready
  Exercise 2: Hair Nets and Aprons Check 🦺
    Part A: Enough of Both
    Part B: Missing Aprons
  Exercise 3: Scale Status Check ⚖️
    Part A: Scale Ready
    Part B: Scale Overloaded
  Exercise 4: Tool Check 🔧
    Part A: Right Tools and Enough
    Part B: Not Enough Tools
  Exercise 5: Gloves and Goggles 🧤🥽
    Part A: Fully Equipped
    Part B: Missing Goggles

module-3-conditions-part5
  Exercise 1: Basic Flavours 🍿
    Part A: Plain or Buttery
    Part B: Adding the Salty Option
  Exercise 2: Sweet Flavours 🍬
    Part A: Sweet or Butterscotch
    Part B: Adding Toffee
  Exercise 3: Savoury Flavours 🧀
    Part A: Cheese or Chili
    Part B: Adding BBQ
  Exercise 4: Special Flavours 🍫
    Part A: Caramel or Chocolate
    Part B: Adding Chocolate Nuts
  Exercise 5: Ice Cream Flavours 🍦
    Part A: Vanilla or Strawberry
    Part B: Adding Cookies and Cream

module-4-logical-operators-part1
  Exercise 1: Plain Popcorn - Flavor and Quantity 🌽
    Part A: Checking Today's Batch
    Part B: When Quantity Drops
  Exercise 2: Buttery Popcorn - Flavor and Freshness 🧈
    Part A: Checking Freshness Today
    Part B: When Popcorn Goes Stale
  Exercise 3: Cheese Popcorn - Ingredient and Container 🧀
    Part A: Checking Ingredients Today
    Part B: When Containers are Too Small
  Exercise 4: Sweet Popcorn - Sugar and Label 🍬
    Part A: Checking Sugar and Labels Today
    Part B: When Labels are Wrong
  Exercise 5: Complete Order Check ✅
    Part A: Checking a Good Order
    Part B: When Weight is Insufficient

module-4-logical-operators-part2
  Exercise 1: Butter or Oil 🧈
    Part A: Butter Available, Oil Not Available
    Part B: Oil Available, Butter Not Available
  Exercise 2: Sugar or Honey 🍯
    Part A: Sugar Available, Honey Not Available
    Part B: Honey Available, Sugar Not Available
  Exercise 3: Cheddar or Parmesan 🧀
    Part A: Cheddar Available, Parmesan Not Available
    Part B: Parmesan Available, Cheddar Not Available
  Exercise 4: Peanuts or Almonds 🥜
    Part A: Peanuts Available, Almonds Not Available
    Part B: Almonds Available, Peanuts Not Available
  Exercise 5: Salt or Sea Salt 🧂
    Part A: Salt Available, Sea Salt Not Available
    Part B: Sea Salt Available, Salt Not Available

module-5-loops-part1
  Exercise 1: Counting Bags on the Production Line 📦
    Part A: Counting the First 5 Bags
    Part B: Counting 10 Bags
  Exercise 2: Counting Corn Boxes 🌽
    Part A: Corn Boxes for the First 6 Machines
    Part B: Corn Boxes for All 10 Machines
  Exercise 3: Counting Oil Containers 🛢️
    Part A: Checking Oil Containers in Storage
    Part B: Assigning Oil Containers to Machines
  Exercise 4: Counting Flavor Packets 🍬
    Part A: Counting Flavor Packets on the Shelf
    Part B: Delivering to Flavor Stations
  Exercise 5: Counting Salt Containers 🧂
    Part A: Counting Salt in Storage
    Part B: Delivering Salt to All Machines

module-5-loops-part2
  Exercise 1: Oil Containers with Backup Supply ➕
    Part A: 2 Backup Containers
    Part B: 3 Backup Containers
  Exercise 2: Flavor Packets Distribution ✖️
    Part A: Station Packet Count
    Part B: Storage Area Box Count
  Exercise 3: Salt Packets for Machines ✖️
    Part A: Machine Salt Packets
    Part B: Production Line Salt Containers
  Exercise 4: Mixing Addition and Multiplication 🔢
    Part A: Corn Box Formula
    Part B: Flavor Packet Formula
  Exercise 5: Power Grid Planning ⚡
    Part A: New Line A Power Needs
    Part B: New Line B Power Needs

module-5-loops-part3
  Exercise 1: Tracking Oil Containers 🛢️
    Part A: First Week Tracking
    Part B: Busier Week Ahead
  Exercise 2: Corn Supply Countdown 🌽
    Part A: Five-Day Countdown
    Part B: Extended Production Run
  Exercise 3: Distributing Flavor Packets 🍬
    Part A: Four Machine Setup
    Part B: Expanding to Six Machines
  Exercise 4: Organising Popcorn Bags 📦
    Part A: Shelf Planning
    Part B: Larger Shipment
  Exercise 5: Salt Packet Distribution 🧂
    Part A: Five Machine Distribution
    Part B: Ten Machine Distribution

module-5-loops-part4
  Exercise 1: Tracking Total Corn Boxes 📊
    Part A: Counting Corn From the Shelves
    Part B: Tracking Oil Container Deliveries
  Exercise 2: Tracking Salt Usage Over Time 🧂
    Part A: Daily Salt Usage
    Part B: Weekly Flavour Packet Usage
  Exercise 3: Tracking Production Batches 📦
    Part A: Daily Batch Production
    Part B: Packaging Bags Across Shifts
  Exercise 4: Quality Control Checks ✅
    Part A: Counting Boxes Checked
    Part B: Counting Defects Found
  Exercise 5: Factory Payroll 💰
    Part A: Calculating Total Daily Wages
    Part B: Paying Bonuses to Top Performers

module-6-pirate-adventure-part1
  Exercise 1: Boarding the Ship ⚓
    Part A: A Child With Permission
    Part B: A Younger Child
  Exercise 2: Treasure Map Reading 🗺️
    Part A: The Palm Tree Clue
    Part B: The Waterfall Clue
  Exercise 3: Crew Member Check 👥
    Part A: A Fully Equipped Pirate
    Part B: Missing Equipment
  Exercise 4: Night Watch Duty 🌙
    Part A: Moonlit Night
    Part B: Pitch Black Night
  Exercise 5: Cannon Firing Time 💥
    Part A: Clear Skies
    Part B: Stormy Weather

module-6-pirate-adventure-part2
  Exercise 1: Digging for Treasure ⛏️
    Part A: The Perfect Spot
    Part B: Wrong Location
  Exercise 2: Ancient Puzzle Stones 🪨
    Part A: The Correct Stone
    Part B: The Trap Stone
  Exercise 3: Jungle Path Choice 🌿
    Part A: The Machete Path
    Part B: The Daylight Path
  Exercise 4: Cave Entrance 🕯️
    Part A: Safe Entry
    Part B: Flooded Cave
  Exercise 5: Treasure Chest 🏆
    Part A: Opening the Chest
    Part B: A Rusty Lock
  BONUS Exercise 6: Captain's Final Test 🥇
    Part A: The Golden Medal
    Part B: Too Many Mistakes

module-7-functions-part1
  Exercise 1: My First Function 👋
    Part A: Introduce Me
    Part B: Introducing Samantha
  Exercise 2: My Desk 🪑
    Part A: Create a Function with Two Variables
    Part B: Show My Desk
  Exercise 3: My Classroom 🏫
    Part A: Introduce Myself
    Part B: Introduce Samantha
  Exercise 4: Introducing Anyone 🙋
    Part A: Greet Child
    Part B: Call the Function with a Name of Your Choice
  Exercise 5: The Full Introduction 🌟
    Part A: Setting Up the School
    Part B: Using Functions with Two Parameters

module-7-functions-part2
  Exercise 1: The Pencil Colour ✏️
    Part A: Getting the Pencil Colour
    Part B: Changing the Pencil Colour
  Exercise 2: The Tray Count 📋
    Part A: Tray Count Function
    Part B: Changing the Tray Count
  Exercise 3: The Supply Box 📦
    Part A: Getting a Supply
    Part B: Using the Get Supply Function with More Items
  Exercise 4: The Cupboard Label 🏷️
    Part A: Getting the Cupboard Label
    Part B: Calling the Function with More Cupboard Numbers
  Exercise 5: The Full Supply Check 🌟
    Part A: Checking Supplies in Room 3
    Part B: Changing the Classroom

module-7-functions-part3
  Exercise 1: Counting Flavour Bags 🍬
    Part A: Flavour Bags Calculation
    Part B: More Flavour Bags
  Exercise 2: Sugar Packets Remaining 🍚
    Part A: Finding Remaining Sugar Packets
    Part B: Changing Sugar Packets
  Exercise 3: Ingredient Portions 🧂
    Part A: Calculating Ingredient Portions
    Part B: Calculating More Portions
  Exercise 4: Oil Container Check 🛢️
    Part A: Calculating Oil Remaining
    Part B: Checking More Oil Containers
  Exercise 5: The Full Production Count 🌟
    Part A: Set Factory Name and Call Function
    Part B: The Full Production Count Continued

module-7-functions-part4
  Exercise 1: Goggles Check 🥽
    Part A: Goggles Ready
    Part B: Goggles Not Ready
  Exercise 2: Gloves Check 🧤
    Part A: Checking Gloves
    Part B: Gloves Not Ready
  Exercise 3: Bag Safety Check 📦
    Part A: Checking the Bag Count
    Part B: Checking More Bag Counts
  Exercise 4: Worker Safety Check 🦺
    Part A: Checking Worker Status
    Part B: Checking Worker Status
  Exercise 5: The Full Safety Report 🌟
    Part A: Full Safety Report
    Part B: Checking the Safety Report with Different Bag Counts

module-7-functions-part5
  Exercise 1: Counting Bags Per Batch 🍿
    Part A: Fixed Bag Count
    Part B: Changing the Bag Count
  Exercise 2: Ingredient Usage Per Batch 🧂
    Part A: Calculating Butter Used
    Part B: Calculating Butter Used with a Different Value
  Exercise 3: Flavour Check Per Batch 🍬
    Part A: Checking Flavours
    Part B: Checking More Flavours
  Exercise 4: Batch Safety Check 🦺
    Part A: Checking Bag Count
    Part B: Checking More Batches
  Exercise 5: The Full Production Report 🌟
    Part A: Creating the Production Report
    Part B: Full Production Report with Different Flavours

module-7-functions-part6
  Exercise 1: Taking the First Order ☕
    Part A: Taking the First Order
    Part B: Taking Different Orders
  Exercise 2: Adding Size and Price 🏷️
    Part A: Adding Size and Price to Order
    Part B: Adding Size and Price for Ellaine
  Exercise 3: Checking the Menu 📋
    Part A: Confirming an Order
    Part B: Drink Availability Check
  Exercise 4: The Lunchtime Queue 🔁
    Part A: Served Order
    Part B: Different Drinks
  Exercise 5: The Full Café System 🌟
    Part A: Basic Order Function
    Part B: The Caramel Crunch Café

module-8-arrays-part1
  Exercise 1: The Flavours Clipboard 🍿
    Part A: Create the Flavours List
    Part B: Machine Numbers
  Exercise 2: The Assistants Clipboard 👦
    Part A: Create the Assistants List
    Part B: Adding a New Child
  Exercise 3: The Ingredients Clipboard 🧂
    Part A: Fix the Ingredients List
    Part B: Refine the Ingredients List
  Exercise 4: The Machines Clipboard 🤖
    Part A: Loop through the Ready Machines List
    Part B: Machine Status
  Exercise 5: The Production Clipboard 📦
    Part A: Counting Total Machines
    Part B: First and Last Production Counts

module-8-arrays-part2
  Exercise 1: Count the Flavours 🍿
    Part A: Write a Function to Count Flavours
    Part B: Count Limited Flavours
  Exercise 2: First and Last Machine 🔧
    Part A: Get First and Last
    Part B: Get First and Last v2
  Exercise 3: Check If List Has Items ✅
    Part A: Write a Function
    Part B: Checking an Empty List
  Exercise 4: Get Item by Position 📍
    Part A: Write a function called "get assistant" that takes a list and a position number, then returns the item at that position
    Part B: Get Assistant by Position
  Exercise 5: Update List Inside Function ✏️
    Part A: Fix Box Count
    Part B: Fix Another Box

module-8-arrays-part3
  Exercise 1: Print All Flavours 📋
    Part A: Flavours List
    Part B: Flavours with Fewer Options
  Exercise 2: Welcome Each Assistant 👋
    Part A: Welcome the Assistants
    Part B: Welcome Each Assistant
  Exercise 3: Show Machine Status 🤖
    Part A: Checking Machine Names
    Part B: Machine Status
  Exercise 4: Double the Box Counts 🔢
    Part A: Doubling Box Counts
    Part B: Double the Box Counts 🔢
  Exercise 5: Build a Shopping List 🛒
    Part A: Start with an empty list called "shopping list". ADD "Corn", then ADD "Oil", then ADD "Salt", then ADD "Sugar". Print the final list
    Part B: Building a Shopping List

module-8-arrays-part4
  Exercise 1: Find High Scores 🏆
    Part A: Finding High Scores
    Part B: Finding High Scores
  Exercise 2: Check First Assistant 🔍
    Part A: Checking the First Assistant
    Part B: Checking the First Assistant
  Exercise 3: Count Ready Machines ✅
    Part A: Count Ready Machines in the Factory
    Part B: Count Ready Machines
  Exercise 4: Find Low Ingredients ⚠️
    Part A: Ingredient Stocks
    Part B: Finding Low Ingredients
  Exercise 5: Collect High Numbers Only ⭐
    Part A: Production Numbers
    Part B: Collecting High Numbers Only

module-8-arrays-part5
  Exercise 1: Greet All Assistants Function 👋
    Part A: Write a Function to Greet Assistants
    Part B: Greet All Assistants Function
  Exercise 2: Total Boxes Function 📦
    Part A: Write a Function to Add Up Box Counts
    Part B: Total Boxes Function
  Exercise 3: Add Five to Each Number ➕
    Part A: Current Production
    Part B: Add Five to Each
  Exercise 4: Double Everything Function ✖️
    Part A: Current Production
    Part B: Double Everything Function
  Exercise 5: AVERAGE BOXES FUNCTION 📊
    Part A: Daily Production
    Part B: Average Boxes per Machine

module-8-arrays-part6
  Exercise 1: Count High Scores Function 🏆
    Part A: Counting High Quality Batches
    Part B: Counting High Scores
  Exercise 2: Filter Ready Machines ✅
    Part A: Get Ready Machines
    Part B: Filter Ready Machines
  Exercise 3: Count Low Stock Items ⚠️
    Part A: Counting Low Stock
    Part B: Count Low Stock Ingredients
  Exercise 4: Pass or Fail Function 📝
    Part A: Mark Results
    Part B: Marking Results
  Exercise 5: Collect High Scores Only ⭐
    Part A: Get High Scores
    Part B: Filter High Scores

module-9-objects-part1
  Exercise 1: Spot the Properties 🔍
    Part A: What is the "colour" of the magic bead?
    Part B: What is the "shape" of the magic bead?
  Exercise 2: Build Your Bead Object 🔨
    Part A: Create Your Own Bead
    Part B: Check Your Bead
  Exercise 3: Read Your Bead 📖
    Part A: Read the Colour
    Part B: Read the Shape
  Exercise 4: Update a Property ✏️
    Part A: Change the Colour
    Part B: Change the Size
  Exercise 5: The Golden Bead 🌟
    Part A: Create the Golden Bead
    Part B: Display the Rarity

### Here ends the PROJECT-BRIEFING.md ### 