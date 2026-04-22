// ==========================================================
// MAIN APPLICATION SCRIPT (SINGLE SOURCE OF TRUTH)
// ==========================================================
document.addEventListener('DOMContentLoaded', function () {

  // ==========================================================
  // PAGE FLOW (Cover → Credits → Main Content)
  // ==========================================================
  document
    .querySelector('#cover-page-container .start-button')
    ?.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('cover-page-container').style.display = 'none';
      document.getElementById('credits-page').style.display = 'flex';
    });

  document
    .querySelector('#credits-page .start-button')
    ?.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('credits-page').style.display = 'none';
    });

		// ==========================================================
		//   PART 1: THE DATA
		// ==========================================================
		 

		const exerciseData = {
				 variables: {
					// EXERCISE 1: Classroom Introduction 👋
					"1-part-a": {
						hints: [
							"Use SET to create three variables: \"child name\", \"desk number\", and \"classroom number\".",
							"Use PRINT to display the introduction using commas to join the text and variables."
						],
						answer: "SET \"child name\" = \"Ben\"\nSET \"desk number\" = 7\nSET \"classroom number\" = 102\nPRINT \"My name is \", \"child name\"\nPRINT \"I sit at desk \", \"desk number\", \" in classroom \", \"classroom number\""
					},
					
					"1-part-b": {
						hints: [
							"Use SET to create three variables: \"teacher name\", \"subject\", and \"lesson number\".",
							"Remember that text values like \"Mrs Jones\" need quotes, but the number 1 does not.",
							"Use PRINT to display the message by joining the text and variables with commas."
						],
						answer: "SET \"teacher name\" = \"Mrs Jones\"\nSET \"subject\" = \"Fundamentals\"\nSET \"lesson number\" = 1\nPRINT \"My teacher is \", \"teacher name\", \" and this is \", \"subject\", \" lesson \", \"lesson number\""
					},
					
					// EXERCISE 2: Supply Cupboard Mapping 📦
					"2-part-a": {
						hints: [
							"Create four variables to store the items and their locations.",
							"Use PRINT to combine these variables into the descriptions of where the items are."
						],
						answer: "SET \"first item\" = \"Pencils\"\nSET \"first location\" = \"drawer 1\"\nSET \"second item\" = \"Paper\"\nSET \"second location\" = \"shelf 2\"\nPRINT \"first item\", \" are in \", \"first location\", \". \", \"second item\", \" is on \", \"second location\", \".\""
					},
					
					"2-part-b": {
						hints: [
							"Store the numbers for the shelf, drawer, and cabinet in three variables.",
							"Use PRINT to display the complete supply map using commas to separate each part."
						],
						answer: "SET \"shelf number\" = 3\nSET \"drawer number\" = 1\nSET \"cabinet number\" = 2\nPRINT \"Supply map — Shelf: \", \"shelf number\", \", Drawer: \", \"drawer number\", \", Cabinet: \", \"cabinet number\", \".\""
					},
					
					// EXERCISE 3: Student Directory 📚
					"3-part-a": {
						hints: [
							"Create variables for the child's name, age, and favourite subject.",
							"Use PRINT to display the student record with the correct labels."
						],
						answer: "SET \"first child name\" = \"Sarah\"\nSET \"first child age\" = 11\nSET \"first child favourite subject\" = \"Art\"\nPRINT \"Student: \", \"first child name\", \", Age: \", \"first child age\", \", Favourite subject: \", \"first child favourite subject\""
					},
					
					"3-part-b": {
						hints: [
							"Store the second child's name, grade, and hobby in variables.",
							"Use PRINT to output the formatted directory entry."
						],
						answer: "SET \"second child name\" = \"James\"\nSET \"second child grade\" = 6\nSET \"second child hobby\" = \"Football\"\nPRINT \"Student: \", \"second child name\", \", Grade: \", \"second child grade\", \", Hobby: \", \"second child hobby\""
					},
					
					// EXERCISE 4: Teacher Information 👨‍🏫
					"4-part-a": {
						hints: [
							"Set variables for the teacher's name, their subject, and the room number.",
							"Use PRINT to create the introductory sentence about the teacher."
						],
						answer: "SET \"teacher name\" = \"Mrs Jones\"\nSET \"subject taught\" = \"Maths\"\nSET \"room number\" = 12\nPRINT \"Teacher: \", \"teacher name\", \" teaches \", \"subject taught\", \" in room \", \"room number\", \".\""
					},
					
					"4-part-b": {
						hints: [
							"Create variables for the assistant's name, role, and availability.",
							"Use PRINT to display the formatted assistant information."
						],
						answer: "SET \"assistant name\" = \"Mr Smith\"\nSET \"role\" = \"Science support\"\nSET \"availability\" = \"Mornings\"\nPRINT \"Assistant: \", \"assistant name\", \", Role: \", \"role\", \", Available: \", \"availability\", \".\""
					},
					
					// EXERCISE 5: Daily Schedule ⏰
					"5-part-a": {
						hints: [
							"Store the subject, time, and teacher for the first period in variables.",
							"Use PRINT to output the schedule entry for period 1."
						],
						answer: "SET \"first period subject\" = \"Maths\"\nSET \"first period time\" = \"9am\"\nSET \"first period teacher\" = \"Mrs Jones\"\nPRINT \"Period 1: \", \"first period subject\", \" at \", \"first period time\", \" with \", \"first period teacher\", \".\""
					},
					
					"5-part-b": {
						hints: [
							"Create variables for the second period details and the special activity.",
							"Use PRINT to display the full schedule for the second period."
						],
						answer: "SET \"second period subject\" = \"Science\"\nSET \"second period time\" = \"10am\"\nSET \"special activity\" = \"Nature Walk\"\nPRINT \"Period 2: \", \"second period subject\", \" at \", \"second period time\", \". Today's activity: \", \"special activity\", \".\""
					}
				}, // end module 1 variables 





				// module-2  operations 
				operations: {
					// EXERCISE 1: Counting Pencils ✏️
					"1-part-a": {
						hints: [
							"Use SET to store the number of pencils on each shelf: \"first shelf pencils\" = 15 and \"second shelf pencils\" = 23.",
							"Use SET to calculate \"total pencils\" by adding the two shelf variables together.",
							"Use PRINT to display the counts and the total total, separated by commas."
						],
						answer: "SET \"first shelf pencils\" = 15\nSET \"second shelf pencils\" = 23\nSET \"total pencils\" = \"first shelf pencils\" + \"second shelf pencils\"\nPRINT \"Shelf 1 has \", \"first shelf pencils\", \" pencils. Shelf 2 has \", \"second shelf pencils\", \" pencils. Total: \", \"total pencils\", \" pencils.\""
					},
					"1-part-b": {
						hints: [
							"Use SET to create variables for \"first drawer pencils\" (12) and \"second drawer pencils\" (8).",
							"Create a variable for the \"total pencils\" from the shelves (38) to help calculate the final amount.",
							"Use SET to calculate the \"grand total\" by adding both drawers and the previous shelf total together.",
							"Use PRINT to display the drawer counts and the final grand total of 58 pencils."
						],
						answer: "SET \"first drawer pencils\" = 12\nSET \"second drawer pencils\" = 8\nSET \"shelf total\" = 38\nSET \"grand total\" = \"first drawer pencils\" + \"second drawer pencils\" + \"shelf total\"\nPRINT \"Drawer 1 has \", \"first drawer pencils\", \" pencils. Drawer 2 has \", \"second drawer pencils\", \" pencils. Grand total of all pencils: \", \"grand total\", \".\""
					},

					// EXERCISE 2: Supplies Used vs. Remaining 📝
					"2-part-a": {
						hints: [
							"Use SET to store the starting notebooks (50) and those used (12).",
							"Calculate \"notebooks left\" by subtracting the used amount from the start.",
							"PRINT the results using commas to join text and variables."
						],
						answer: "SET \"notebooks at start\" = 50\nSET \"notebooks used\" = 12\nSET \"notebooks left\" = \"notebooks at start\" - \"notebooks used\"\nPRINT \"Started with \", \"notebooks at start\", \" notebooks. Used \", \"notebooks used\", \" notebooks today. Remaining: \", \"notebooks left\", \" notebooks.\""
					},
					"2-part-b": {
						hints: [
							"Set variables for starting erasers (30) and those used (7).",
							"Calculate the remaining erasers using the subtraction operator (-).",
							"Output the message using PRINT to show that 23 erasers remain."
						],
						answer: "SET \"erasers at start\" = 30\nSET \"erasers used\" = 7\nSET \"erasers remaining\" = \"erasers at start\" - \"erasers used\"\nPRINT \"Started with \", \"erasers at start\", \" erasers. Used \", \"erasers used\", \" erasers today. Remaining: \", \"erasers remaining\", \" erasers.\""
					},

					// EXERCISE 3: Organising Into Boxes 📦
					"3-part-a": {
						hints: [
							"Use SET for \"total markers\" (48) and \"number of boxes\" (4).",
							"Calculate \"markers per box\" by dividing the total by the number of boxes.",
							"PRINT the final counts to show 12 markers per box."
						],
						answer: "SET \"total markers\" = 48\nSET \"number of boxes\" = 4\nSET \"markers per box\" = \"total markers\" / \"number of boxes\"\nPRINT \"We have \", \"total markers\", \" markers to put into \", \"number of boxes\", \" boxes. Each box gets: \", \"markers per box\", \" markers.\""
					},
					"3-part-b": {
						hints: [
							"Set variables for \"total crayons\" (60) and \"number of containers\" (5).",
							"Use the division operator (/) to find how many crayons go in each container.",
							"Display the results with PRINT to show there are 12 crayons per container."
						],
						answer: "SET \"total crayons\" = 60\nSET \"number of containers\" = 5\nSET \"crayons per container\" = \"total crayons\" / \"number of containers\"\nPRINT \"We have \", \"total crayons\", \" crayons to put into \", \"number of containers\", \" containers. Each container gets: \", \"crayons per container\", \" crayons.\""
					},

					// EXERCISE 4: Supplies for All Children 🎨
					"4-part-a": {
						hints: [
							"Set the \"number of children\" (20) and \"sheets per child\" (3).",
							"Calculate \"total sheets\" by multiplying these two variables together.",
							"Use PRINT to show that 60 sheets are needed in total."
						],
						answer: "SET \"number of children\" = 20\nSET \"sheets per child\" = 3\nSET \"total sheets\" = \"number of children\" * \"sheets per child\"\nPRINT \"We have \", \"number of children\", \" children. Each needs \", \"sheets per child\", \" sheets. Total sheets needed: \", \"total sheets\", \".\""
					},
					"4-part-b": {
						hints: [
							"Store the \"number of groups\" (5) and \"glue per group\" (2) in variables.",
							"Use the multiplication operator (*) to calculate the total glue sticks.",
							"PRINT the results to show 10 glue sticks are needed."
						],
						answer: "SET \"number of groups\" = 5\nSET \"glue per group\" = 2\nSET \"total glue sticks\" = \"number of groups\" * \"glue per group\"\nPRINT \"We have \", \"number of groups\", \" groups. Each needs \", \"glue per group\", \" glue sticks. Total glue sticks needed: \", \"total glue sticks\", \".\""
					},

					// EXERCISE 5: Complete Classroom Supply Planning 📊
					"5-part-a": {
						hints: [
							"Calculate \"total children\" by adding those present (18) and absent (2).",
							"Multiply the \"total children\" by \"pencils per child\" (2) to find \"pencils needed\".",
							"PRINT all the steps to show the final total of 40 pencils."
						],
						answer: "SET \"children present\" = 18\nSET \"children absent\" = 2\nSET \"total children\" = \"children present\" + \"children absent\"\nSET \"pencils per child\" = 2\nSET \"pencils needed\" = \"total children\" * \"pencils per child\"\nPRINT \"Present: \", \"children present\", \" children. Absent: \", \"children absent\", \" children. Total children: \", \"total children\", \". Each needs \", \"pencils per child\", \" pencils. Total pencils needed: \", \"pencils needed\", \".\""
					},
					"5-part-b": {
						hints: [
							"Find \"papers left\" by subtracting used papers (35) from those available (100).",
							"Divide the \"papers left\" by the \"number of boxes\" (5) to find \"papers per box\".",
							"Output the full plan to show there are 13 papers per box."
						],
						answer: "SET \"papers available\" = 100\nSET \"papers used\" = 35\nSET \"papers left\" = \"papers available\" - \"papers used\"\nSET \"boxes to fill\" = 5\nSET \"papers per box\" = \"papers left\" / \"boxes to fill\"\nPRINT \"Started with \", \"papers available\", \" papers. Used \", \"papers used\", \" papers. Papers left: \", \"papers left\", \". We have \", \"boxes to fill\", \" boxes. Papers per box: \", \"papers per box\", \".\""
					}
				}, // end of module 2 

				// end of module 2 operations






				// module 3 part 1 
				conditions: {
						"1-part-a": {
								hints: ["Create variables for \"children present\" (18) and \"minimum required\" (15).", "Use PRINT to display the counts.", "Check if headcount passes by comparing if \"children present\" is greater than \"minimum required\"."],
								answer: "SET \"children present\" = 18\nSET \"minimum required\" = 15\nPRINT \"We have \", \"children present\", \" children.\"\nPRINT \"Minimum required is \", \"minimum required\"\nPRINT \"Check passes: \", \"children present\" > \"minimum required\""
						},
						"1-part-b": {
								hints: ["Set \"children present\" to 18 and \"maximum capacity\" to 30.", "Use PRINT to show both values.", "Check if you are under capacity by seeing if \"children present\" is less than \"maximum capacity\"."],
								answer: "SET \"children present\" = 18\nSET \"maximum capacity\" = 30\nPRINT \"We have \", \"children present\", \" children.\"\nPRINT \"Maximum capacity is \", \"maximum capacity\"\nPRINT \"Check passes: \", \"children present\" < \"maximum capacity\""
						},
						"2-part-a": {
								hints: ["Set variables for \"vests available\" (25) and \"children present\" (18).", "PRINT the counts.", "Check if you have enough vests using >=."],
								answer: "SET \"vests available\" = 25\nSET \"children present\" = 18\nPRINT \"Vests: \", \"vests available\", \", Children: \", \"children present\"\nPRINT \"Enough vests: \", \"vests available\" >= \"children present\""
						},
						"2-part-b": {
								hints: ["Create variables for \"hair nets\" (12) and \"children with long hair\" (8).", "PRINT the values.", "Check if you have enough hair nets using >=."],
								answer: "SET \"hair nets\" = 12\nSET \"children with long hair\" = 8\nPRINT \"Hair nets: \", \"hair nets\", \", Needed: \", \"children with long hair\"\nPRINT \"Enough hair nets: \", \"hair nets\" >= \"children with long hair\""
						},
						"3-part-a": {
								hints: ["Set \"stations ready\" to 10 and \"stations needed\" to 8.", "PRINT both variables.", "Check if stations ready is >= stations needed."],
								answer: "SET \"stations ready\" = 10\nSET \"stations needed\" = 8\nPRINT \"Stations ready: \", \"stations ready\", \", Needed: \", \"stations needed\"\nPRINT \"Ready to start: \", \"stations ready\" >= \"stations needed\""
						},
						"3-part-b": {
								hints: ["Set \"clipboards\" to 6 and \"stations needed\" to 8.", "PRINT the counts.", "Check for a shortage by seeing if clipboards is < stations needed."],
								answer: "SET \"clipboards\" = 6\nSET \"stations needed\" = 8\nPRINT \"Clipboards: \", \"clipboards\", \", Stations: \", \"stations needed\"\nPRINT \"Is there a shortage: \", \"clipboards\" < \"stations needed\""
						},
						"4-part-a": {
								hints: ["Set \"bags at station\" to 25.", "Check if count is > 0.", "PRINT the result."],
								answer: "SET \"bags at station\" = 25\nPRINT \"Bags at station: \", \"bags at station\"\nPRINT \"Bags present: \", \"bags at station\" > 0"
						},
						"4-part-b": {
								hints: ["Set \"bags at station\" to 25 and \"bags needed today\" to 20.", "Check if available is >= needed.", "PRINT the result."],
								answer: "SET \"bags at station\" = 25\nSET \"bags needed today\" = 20\nPRINT \"Bags available: \", \"bags at station\", \", Needed: \", \"bags needed today\"\nPRINT \"Enough for today: \", \"bags at station\" >= \"bags needed today\""
						},
						"5-part-a": {
								hints: ["Set \"boxes at station\" to 0.", "Check if count is > 0.", "PRINT the status."],
								answer: "SET \"boxes at station\" = 0\nPRINT \"Boxes at station: \", \"boxes at station\"\nPRINT \"Boxes present: \", \"boxes at station\" > 0"
						},
						"5-part-b": {
								hints: ["Set \"box number\" to 1.", "A labeled box must have a number > 0.", "PRINT the result."],
								answer: "SET \"box number\" = 1\nPRINT \"Current box number: \", \"box number\"\nPRINT \"Properly labeled: \", \"box number\" > 0"
						}
				 }, // end module 3 part 1
				 
				 



				// module 3 part 2 
				conditions2: {
						"1-part-a": {
								hints: ["Set 'bag position' and 'correct position' to 'under chute'.", "Use = to check for match.", "PRINT comparison."],
								answer: "SET \"bag position\" = \"under chute\"\nSET \"correct position\" = \"under chute\"\nPRINT \"Is the bag position correct?\", \"bag position\" = \"correct position\""
						},
						"1-part-b": {
								hints: ["Set 'bag position' to 'left side'.", "Use != to check if position is wrong.", "PRINT result."],
								answer: "SET \"bag position\" = \"left side\"\nSET \"correct position\" = \"under chute\"\nPRINT \"Is the bag position wrong?\", \"bag position\" != \"correct position\""
						},
						"2-part-a": {
								hints: ["Set both 'box number' and 'station number' to 1.", "Check if they match using =.", "PRINT result."],
								answer: "SET \"box number\" = 1\nSET \"station number\" = 1\nPRINT \"Does box match station?\", \"box number\" = \"station number\""
						},
						"2-part-b": {
								hints: ["Set 'box number' to 3.", "Use != to detect mismatch.", "PRINT result."],
								answer: "SET \"box number\" = 3\nSET \"station number\" = 1\nPRINT \"Is there a box mismatch?\", \"box number\" != \"station number\""
						},
						"3-part-a": {
								hints: ["Set 'light colour' and 'expected colour' to 'red'.", "Compare using =.", "PRINT result."],
								answer: "SET \"light colour\" = \"red\"\nSET \"expected colour\" = \"red\"\nPRINT \"Is the light colour correct?\", \"light colour\" = \"expected colour\""
						},
						"3-part-b": {
								hints: ["Set 'light colour' to 'green'.", "Check if mismatch using !=.", "PRINT result."],
								answer: "SET \"light colour\" = \"green\"\nSET \"expected colour\" = \"red\"\nPRINT \"Is there a light mismatch?\", \"light colour\" != \"expected colour\""
						},
						"4-part-a": {
								hints: ["Set 'tool type' to 'scoop'.", "Use = for verification.", "PRINT result."],
								answer: "SET \"tool type\" = \"scoop\"\nSET \"correct tool\" = \"scoop\"\nPRINT \"Is the tool correct?\", \"tool type\" = \"correct tool\""
						},
						"4-part-b": {
								hints: ["Set 'tool type' to 'tongs'.", "Check if tool is wrong with !=.", "PRINT result."],
								answer: "SET \"tool type\" = \"tongs\"\nSET \"correct tool\" = \"scoop\"\nPRINT \"Is the tool incorrect?\", \"tool type\" != \"correct tool\""
						},
						"5-part-a": {
								hints: ["Set 'panel status' to 'on'.", "Confirm power is on with =.", "PRINT result."],
								answer: "SET \"panel status\" = \"on\"\nSET \"expected status\" = \"on\"\nPRINT \"Is the power on?\", \"panel status\" = \"expected status\""
						},
						"5-part-b": {
								hints: ["Set 'panel status' to 'off'.", "Detect power problem with !=.", "PRINT status."],
								answer: "SET \"panel status\" = \"off\"\nSET \"expected status\" = \"on\"\nPRINT \"Is there a power problem?\", \"panel status\" != \"expected status\""
						}
				}, // end module 3 part 2





				// module 3 part 3
				conditions3: {
						"1-part-a": {
								hints: ["Set 'guard position' to 7 and 'minimum safe position' to 5.", "Check safety with >=.", "PRINT status."],
								answer: "SET \"guard position\" = 7\nSET \"minimum safe position\" = 5\nPRINT \"Guard position is safe:\", \"guard position\" >= \"minimum safe position\""
						},
						"1-part-b": {
								hints: ["Set 'guard position' to 3.", "Check if >= 5.", "PRINT result."],
								answer: "SET \"guard position\" = 3\nSET \"minimum safe position\" = 5\nPRINT \"Guard position is safe:\", \"guard position\" >= \"minimum safe position\""
						},
						"2-part-a": {
								hints: ["Set 'goggles available' to 10 and 'children at station' to 8.", "Check availability with >=.", "PRINT result."],
								answer: "SET \"goggles available\" = 10\nSET \"children at station\" = 8\nPRINT \"Enough goggles:\", \"goggles available\" >= \"children at station\""
						},
						"2-part-b": {
								hints: ["Set 'goggles available' to 6.", "Check if >= 9.", "PRINT result."],
								answer: "SET \"goggles available\" = 6\nSET \"children at station\" = 9\nPRINT \"Enough goggles:\", \"goggles available\" >= \"children at station\""
						},
						"3-part-a": {
								hints: ["Set 'gloves available' to 15.", "Verify minimum with >=.", "PRINT status."],
								answer: "SET \"gloves available\" = 15\nSET \"minimum required\" = 12\nPRINT \"At minimum requirement:\", \"gloves available\" >= \"minimum required\""
						},
						"3-part-b": {
								hints: ["Set 'gloves in box' to 22.", "Check capacity with <=.", "PRINT status."],
								answer: "SET \"gloves in box\" = 22\nSET \"maximum capacity\" = 20\nPRINT \"Within capacity:\", \"gloves in box\" <= \"maximum capacity\""
						},
						"4-part-a": {
								hints: ["Set 'scale reading' to 0.", "Check calibration with >=.", "PRINT status."],
								answer: "SET \"scale reading\" = 0\nSET \"minimum reading\" = 0\nPRINT \"Scale calibrated:\", \"scale reading\" >= \"minimum reading\""
						},
						"4-part-b": {
								hints: ["Set 'current weight' to 85.", "Verify limit with <=.", "PRINT status."],
								answer: "SET \"current weight\" = 85\nSET \"maximum weight\" = 100\nPRINT \"Not overloaded:\", \"current weight\" <= \"maximum weight\""
						},
						"5-part-a": {
								hints: ["Set 'helpers at station' to 4.", "Check staffing with >=.", "PRINT status."],
								answer: "SET \"helpers at station\" = 4\nSET \"minimum helpers\" = 3\nPRINT \"Enough helpers:\", \"helpers at station\" >= \"minimum helpers\""
						},
						"5-part-b": {
								hints: ["Set 'people at station' to 8.", "Check occupancy limit with <=.", "PRINT result."],
								answer: "SET \"people at station\" = 8\nSET \"maximum allowed\" = 6\nPRINT \"Not too crowded:\", \"people at station\" <= \"maximum allowed\""
						}
				}, // end module 3 part 3





				// module 3 part 4 
				conditions4: {
						"1-part-a": {
								hints: [
										"Create a variable named \"bags are ready\" and set its value to TRUE.",
										"Create a variable named \"boxes are ready\" and set its value to TRUE.",
										"Use IF, AND, and ELSE to check if both conditions are true — if they are, PRINT a green light message; otherwise PRINT a red light message."
								],
								answer: "SET \"bags are ready\" = TRUE\nSET \"boxes are ready\" = TRUE\nIF \"bags are ready\" AND \"boxes are ready\" THEN\n  PRINT \"Green light - ready to start!\"\nELSE\n  PRINT \"Red light - something needs fixing\"\nEND IF"
						},
						"1-part-b": {
								hints: [
										"Create a variable named \"bags are ready\" and set its value to TRUE.",
										"Create a variable named \"boxes are ready\" and set its value to FALSE.",
										"Use IF, AND, and ELSE to check if both conditions are true — if they are, PRINT a green light message; otherwise PRINT a red light message."
								],
								answer: "SET \"bags are ready\" = TRUE\nSET \"boxes are ready\" = FALSE\nIF \"bags are ready\" AND \"boxes are ready\" THEN\n  PRINT \"Green light - ready to start!\"\nELSE\n  PRINT \"Red light - something needs fixing\"\nEND IF"
						},
						"2-part-a": {
								hints: [
										"Create a variable named \"enough hair nets\" and set its value to TRUE.",
										"Create a variable named \"enough aprons\" and set its value to TRUE.",
										"Use IF, AND, and ELSE to check if both conditions are true — if they are, PRINT a message that children can enter; otherwise PRINT a message that they must wait."
								],
								answer: "SET \"enough hair nets\" = TRUE\nSET \"enough aprons\" = TRUE\nIF \"enough hair nets\" AND \"enough aprons\" THEN\n  PRINT \"Children can enter the Grand Hall!\"\nELSE\n  PRINT \"Please wait - missing safety gear\"\nEND IF"
						},
						"2-part-b": {
								hints: [
										"Create a variable named \"enough hair nets\" and set its value to TRUE.",
										"Create a variable named \"enough aprons\" and set its value to FALSE.",
										"Use IF, AND, and ELSE to check if both conditions are true — if they are, PRINT a message that children can enter; otherwise PRINT a message that they must wait."
								],
								answer: "SET \"enough hair nets\" = TRUE\nSET \"enough aprons\" = FALSE\nIF \"enough hair nets\" AND \"enough aprons\" THEN\n  PRINT \"Children can enter the Grand Hall!\"\nELSE\n  PRINT \"Please wait - missing safety gear\"\nEND IF"
						},
						"3-part-a": {
								hints: [
										"Create a variable named \"scale is calibrated\" and set its value to TRUE.",
										"Create a variable named \"scale is not overloaded\" and set its value to TRUE.",
										"Use IF, AND, and ELSE to check if both conditions are true — if they are, PRINT a message that the scale is ready; otherwise PRINT a message asking for help."
								],
								answer: "SET \"scale is calibrated\" = TRUE\nSET \"scale is not overloaded\" = TRUE\nIF \"scale is calibrated\" AND \"scale is not overloaded\" THEN\n  PRINT \"The scale is ready to use!\"\nELSE\n  PRINT \"Scale error - please ask for help\"\nEND IF"
						},
						"3-part-b": {
								hints: [
										"Create a variable named \"scale is calibrated\" and set its value to TRUE.",
										"Create a variable named \"scale is not overloaded\" and set its value to FALSE.",
										"Use IF, AND, and ELSE to check if both conditions are true — if they are, PRINT a message that the scale is ready; otherwise PRINT a message asking for help."
								],
								answer: "SET \"scale is calibrated\" = TRUE\nSET \"scale is not overloaded\" = FALSE\nIF \"scale is calibrated\" AND \"scale is not overloaded\" THEN\n  PRINT \"The scale is ready to use!\"\nELSE\n  PRINT \"Scale error - please ask for help\"\nEND IF"
						},
						"4-part-a": {
								hints: [
										"Create a variable named \"tool type is correct\" and set its value to TRUE.",
										"Create a variable named \"enough tools are available\" and set its value to TRUE.",
										"Use IF, AND, and ELSE to check if both conditions are true — if they are, PRINT a message that the station is ready; otherwise PRINT a message to get more tools."
								],
								answer: "SET \"tool type is correct\" = TRUE\nSET \"enough tools are available\" = TRUE\nIF \"tool type is correct\" AND \"enough tools are available\" THEN\n  PRINT \"Station 3 is ready to work!\"\nELSE\n  PRINT \"Station incomplete - get more tools\"\nEND IF"
						},
						"4-part-b": {
								hints: [
										"Create a variable named \"tool type is correct\" and set its value to TRUE.",
										"Create a variable named \"enough tools are available\" and set its value to FALSE.",
										"Use IF, AND, and ELSE to check if both conditions are true — if they are, PRINT a message that the station is ready; otherwise PRINT a message to get more tools."
								],
								answer: "SET \"tool type is correct\" = TRUE\nSET \"enough tools are available\" = FALSE\nIF \"tool type is correct\" AND \"enough tools are available\" THEN\n  PRINT \"Station 3 is ready to work!\"\nELSE\n  PRINT \"Station incomplete - get more tools\"\nEND IF"
						},
						"5-part-a": {
								hints: [
										"Create a variable named \"child has gloves\" and set its value to TRUE.",
										"Create a variable named \"child has goggles\" and set its value to TRUE.",
										"Use IF, AND, and ELSE to check if both conditions are true — if they are, PRINT a message that the child is ready to help; otherwise PRINT a message to collect missing items."
								],
								answer: "SET \"child has gloves\" = TRUE\nSET \"child has goggles\" = TRUE\nIF \"child has gloves\" AND \"child has goggles\" THEN\n  PRINT \"Child is ready to help at the machine!\"\nELSE\n  PRINT \"Wait! Collect missing safety items first.\"\nEND IF"
						},
						"5-part-b": {
								hints: [
										"Create a variable named \"child has gloves\" and set its value to TRUE.",
										"Create a variable named \"child has goggles\" and set its value to FALSE.",
										"Use IF, AND, and ELSE to check if both conditions are true — if they are, PRINT a message that the child is ready to help; otherwise PRINT a message to collect missing items."
								],
								answer: "SET \"child has gloves\" = TRUE\nSET \"child has goggles\" = FALSE\nIF \"child has gloves\" AND \"child has goggles\" THEN\n  PRINT \"Child is ready to help at the machine!\"\nELSE\n  PRINT \"Wait! Collect missing safety items first.\"\nEND IF"
						}
				}, // end module 3 part 4
				
				



				// module 3 part 5 
				conditions5: {
						"1-part-a": {
								hints: [
										"Create a variable named \"flavour order\" and set it to \"plain\".",
										"Use IF to check if it equals \"plain\" and PRINT \"Get: Corn only\".",
										"Use ELSE IF for \"buttery\" (PRINT \"Get: Corn and butter\") and ELSE for \"Unknown flavour\"."
								],
								answer: "SET \"flavour order\" = \"plain\"\n\nIF \"flavour order\" = \"plain\" THEN\n  PRINT \"Get: Corn only\"\nELSE IF \"flavour order\" = \"buttery\" THEN\n  PRINT \"Get: Corn and butter\"\nELSE\n  PRINT \"Unknown flavour\"\nEND IF"
						},
						"1-part-b": {
								hints: [
										"Change \"flavour order\" to \"salty\".",
										"Keep your existing IF and ELSE IF checks.",
										"Add a new ELSE IF for \"salty\" and PRINT \"Get: Corn and salt\"."
								],
								answer: "SET \"flavour order\" = \"salty\"\n\nIF \"flavour order\" = \"plain\" THEN\n  PRINT \"Get: Corn only\"\nELSE IF \"flavour order\" = \"buttery\" THEN\n  PRINT \"Get: Corn and butter\"\nELSE IF \"flavour order\" = \"salty\" THEN\n  PRINT \"Get: Corn and salt\"\nELSE\n  PRINT \"Unknown flavour\"\nEND IF"
						},
						"2-part-a": {
								hints: [
										"Create \"sweet flavour\" and set it to \"sweet\".",
										"IF \"sweet\", PRINT \"Get: Corn and sugar\".",
										"ELSE IF \"butterscotch\", PRINT \"Get: Corn and butterscotch\". Use ELSE for \"Unknown sweet flavour\"."
								],
								answer: "SET \"sweet flavour\" = \"sweet\"\n\nIF \"sweet flavour\" = \"sweet\" THEN\n  PRINT \"Get: Corn and sugar\"\nELSE IF \"sweet flavour\" = \"butterscotch\" THEN\n  PRINT \"Get: Corn and butterscotch\"\nELSE\n  PRINT \"Unknown sweet flavour\"\nEND IF"
						},
						"2-part-b": {
								hints: [
										"Change \"sweet flavour\" to \"toffee\".",
										"Keep checks for \"sweet\" and \"butterscotch\".",
										"Add ELSE IF for \"toffee\" and PRINT \"Get: Corn, butter, and toffee pieces\"."
								],
								answer: "SET \"sweet flavour\" = \"toffee\"\n\nIF \"sweet flavour\" = \"sweet\" THEN\n  PRINT \"Get: Corn and sugar\"\nELSE IF \"sweet flavour\" = \"butterscotch\" THEN\n  PRINT \"Get: Corn and butterscotch\"\nELSE IF \"sweet flavour\" = \"toffee\" THEN\n  PRINT \"Get: Corn, butter, and toffee pieces\"\nELSE\n  PRINT \"Unknown sweet flavour\"\nEND IF"
						},
						"3-part-a": {
								hints: [
										"Create \"savoury flavour\" as \"cheese\".",
										"IF \"cheese\", PRINT \"Get: Corn and cheese powder\".",
										"ELSE IF \"chili\", PRINT \"Get: Corn and chili spice\". Use ELSE for unknown savoury."
								],
								answer: "SET \"savoury flavour\" = \"cheese\"\n\nIF \"savoury flavour\" = \"cheese\" THEN\n  PRINT \"Get: Corn and cheese powder\"\nELSE IF \"savoury flavour\" = \"chili\" THEN\n  PRINT \"Get: Corn and chili spice\"\nELSE\n  PRINT \"Unknown savoury flavour\"\nEND IF"
						},
						"3-part-b": {
								hints: [
										"Change \"savoury flavour\" to \"BBQ\".",
										"Add ELSE IF for \"BBQ\" and PRINT \"Get: Corn and BBQ seasoning\"."
								],
								answer: "SET \"savoury flavour\" = \"BBQ\"\n\nIF \"savoury flavour\" = \"cheese\" THEN\n  PRINT \"Get: Corn and cheese powder\"\nELSE IF \"savoury flavour\" = \"chili\" THEN\n  PRINT \"Get: Corn and chili spice\"\nELSE IF \"savoury flavour\" = \"BBQ\" THEN\n  PRINT \"Get: Corn and BBQ seasoning\"\nELSE\n  PRINT \"Unknown savoury flavour\"\nEND IF"
						},
						"4-part-a": {
								hints: [
										"Create \"premium flavour\" as \"caramel\".",
										"IF \"caramel\", PRINT \"Get: Corn, butter, and caramel sauce\".",
										"ELSE IF \"chocolate\", PRINT \"Get: Corn and melted chocolate\"."
								],
								answer: "SET \"premium flavour\" = \"caramel\"\n\nIF \"premium flavour\" = \"caramel\" THEN\n  PRINT \"Get: Corn, butter, and caramel sauce\"\nELSE IF \"premium flavour\" = \"chocolate\" THEN\n  PRINT \"Get: Corn and melted chocolate\"\nELSE\n  PRINT \"Unknown premium flavour\"\nEND IF"
						},
						"4-part-b": {
								hints: [
										"Change \"premium flavour\" to \"chocolate nuts\".",
										"Add ELSE IF for \"chocolate nuts\" and PRINT \"Get: Corn, melted chocolate, and peanuts\"."
								],
								answer: "SET \"premium flavour\" = \"chocolate nuts\"\n\nIF \"premium flavour\" = \"caramel\" THEN\n  PRINT \"Get: Corn, butter, and caramel sauce\"\nELSE IF \"premium flavour\" = \"chocolate\" THEN\n  PRINT \"Get: Corn and melted chocolate\"\nELSE IF \"premium flavour\" = \"chocolate nuts\" THEN\n  PRINT \"Get: Corn, melted chocolate, and peanuts\"\nELSE\n  PRINT \"Unknown premium flavour\"\nEND IF"
						},
						"5-part-a": {
								hints: [
										"Create \"ice cream flavour\" as \"vanilla\".",
										"IF \"vanilla\", PRINT \"Get: Corn and vanilla coating\".",
										"ELSE IF \"strawberry\", PRINT \"Get: Corn and strawberry coating\"."
								],
								answer: "SET \"ice cream flavour\" = \"vanilla\"\n\nIF \"ice cream flavour\" = \"vanilla\" THEN\n  PRINT \"Get: Corn and vanilla coating\"\nELSE IF \"ice cream flavour\" = \"strawberry\" THEN\n  PRINT \"Get: Corn and strawberry coating\"\nELSE\n  PRINT \"Unknown ice cream flavour\"\nEND IF"
						},
						"5-part-b": {
								hints: [
										"Change \"ice cream flavour\" to \"cookies and cream\".",
										"Add ELSE IF for \"cookies and cream\" and PRINT \"Get: Corn, vanilla coating, and cookie crumbles\"."
								],
								answer: "SET \"ice cream flavour\" = \"cookies and cream\"\n\nIF \"ice cream flavour\" = \"vanilla\" THEN\n  PRINT \"Get: Corn and vanilla coating\"\nELSE IF \"ice cream flavour\" = \"strawberry\" THEN\n  PRINT \"Get: Corn and strawberry coating\"\nELSE IF \"ice cream flavour\" = \"cookies and cream\" THEN\n  PRINT \"Get: Corn, vanilla coating, and cookie crumbles\"\nELSE\n  PRINT \"Unknown ice cream flavour\"\nEND IF"
						}
				}, // end of module 3 conditions part 5
				
				// end of module 3 conditions parts 1-5






				// module 4 logical operators part 1
				logicalOperators1: {
				// EXERCISE 1: Flavour and Quantity Check 🍿
				"1-part-a": {
					hints: [
						"Set 'current flavour' and 'required flavour' to \"Plain\".",
						"Set 'bags ready' to 25 and 'bags needed' to 20.",
						"Use IF with AND to check if the flavour matches AND you have enough bags."
					],
					answer: "SET \"current flavour\" = \"Plain\"\nSET \"required flavour\" = \"Plain\"\nSET \"bags ready\" = 25\nSET \"bags needed\" = 20\nIF \"current flavour\" = \"required flavour\" AND \"bags ready\" >= \"bags needed\" THEN\n  PRINT \"The flavour is correct and the quantity is enough: true\"\nELSE\n  PRINT \"The flavour is correct and the quantity is enough: false\"\nEND IF"
				},
				"1-part-b": {
					hints: [
						"Change 'bags ready' to 15 while keeping everything else the same.",
						"Use the same IF/AND logic to see how the result changes when quantity is low."
					],
					answer: "SET \"current flavour\" = \"Plain\"\nSET \"required flavour\" = \"Plain\"\nSET \"bags ready\" = 15\nSET \"bags needed\" = 20\nIF \"current flavour\" = \"required flavour\" AND \"bags ready\" >= \"bags needed\" THEN\n  PRINT \"The flavour is correct and the quantity is enough: true\"\nELSE\n  PRINT \"The flavour is correct and the quantity is enough: false\"\nEND IF"
				},
				// EXERCISE 2: Freshness Verification 🕒
				"2-part-a": {
					hints: [
						"Set both flavour variables to \"Buttery\".",
						"Set 'hours since made' to 2 and 'freshness limit' to 4.",
						"Use IF/AND to check if flavour matches AND 'hours since made' <= 'freshness limit'."
					],
					answer: "SET \"current flavour\" = \"Buttery\"\nSET \"required flavour\" = \"Buttery\"\nSET \"hours since made\" = 2\nSET \"freshness limit in hours\" = 4\nIF \"current flavour\" = \"required flavour\" AND \"hours since made\" <= \"freshness limit in hours\" THEN\n  PRINT \"The flavour is correct and the popcorn is fresh: true\"\nELSE\n  PRINT \"The flavour is correct and the popcorn is fresh: false\"\nEND IF"
				},
				"2-part-b": {
					hints: [
						"Change 'hours since made' to 5.",
						"Keep the logic to see that it fails because 5 is greater than the limit of 4."
					],
					answer: "SET \"current flavour\" = \"Buttery\"\nSET \"required flavour\" = \"Buttery\"\nSET \"hours since made\" = 5\nSET \"freshness limit in hours\" = 4\nIF \"current flavour\" = \"required flavour\" AND \"hours since made\" <= \"freshness limit in hours\" THEN\n  PRINT \"The flavour is correct and the popcorn is fresh: true\"\nELSE\n  PRINT \"The flavour is correct and the popcorn is fresh: false\"\nEND IF"
				},
				// EXERCISE 3: Ingredient and Container Size 🧀
				"3-part-a": {
					hints: [
						"Set ingredient variables to \"Cheddar\".",
						"Set 'container size' to 250 and 'minimum size' to 200.",
						"Use AND to check the ingredient match AND that size is >= minimum."
					],
					answer: "SET \"current ingredient\" = \"Cheddar\"\nSET \"required ingredient\" = \"Cheddar\"\nSET \"container size in grams\" = 250\nSET \"minimum size in grams\" = 200\nIF \"current ingredient\" = \"required ingredient\" AND \"container size in grams\" >= \"minimum size in grams\" THEN\n  PRINT \"The ingredient is correct and the container is large enough: true\"\nELSE\n  PRINT \"The ingredient is correct and the container is large enough: false\"\nEND IF"
				},
				"3-part-b": {
					hints: [
						"Change 'container size' to 180.",
						"The code should now PRINT the false message because the container is too small."
					],
					answer: "SET \"current ingredient\" = \"Cheddar\"\nSET \"required ingredient\" = \"Cheddar\"\nSET \"container size in grams\" = 180\nSET \"minimum size in grams\" = 200\nIF \"current ingredient\" = \"required ingredient\" AND \"container size in grams\" >= \"minimum size in grams\" THEN\n  PRINT \"The ingredient is correct and the container is large enough: true\"\nELSE\n  PRINT \"The ingredient is correct and the container is large enough: false\"\nEND IF"
				},
				// EXERCISE 4: Sugar and Label Accuracy 🏷️
				"4-part-a": {
					hints: [
						"Set 'sugar amount' to 50 and 'needed' to 45.",
						"Set both label text variables to \"Sweet Popcorn\".",
						"Check if sugar is enough (>=) AND the label matches."
					],
					answer: "SET \"sugar amount in grams\" = 50\nSET \"sugar needed in grams\" = 45\nSET \"current label text\" = \"Sweet Popcorn\"\nSET \"required label text\" = \"Sweet Popcorn\"\nIF \"sugar amount in grams\" >= \"sugar needed in grams\" AND \"current label text\" = \"required label text\" THEN\n  PRINT \"Enough sugar and correct label: true\"\nELSE\n  PRINT \"Enough sugar and correct label: false\"\nEND IF"
				},
				"4-part-b": {
					hints: [
						"Change 'current label text' to \"Salty Popcorn\".",
						"Keep everything else the same to see the label mismatch trigger the ELSE block."
					],
					answer: "SET \"sugar amount in grams\" = 50\nSET \"sugar needed in grams\" = 45\nSET \"current label text\" = \"Salty Popcorn\"\nSET \"required label text\" = \"Sweet Popcorn\"\nIF \"sugar amount in grams\" >= \"sugar needed in grams\" AND \"current label text\" = \"required label text\" THEN\n  PRINT \"Enough sugar and correct label: true\"\nELSE\n  PRINT \"Enough sugar and correct label: false\"\nEND IF"
				},
				// EXERCISE 5: Weight and Flavour Order ⚖️
				"5-part-a": {
					hints: [
						"Set both flavour variables to \"Caramel\".",
						"Set 'current weight' to 500 and 'required weight' to 450.",
						"Use AND to verify flavour match AND that weight is >= required."
					],
					answer: "SET \"ordered flavour\" = \"Caramel\"\nSET \"current flavour\" = \"Caramel\"\nSET \"current weight in grams\" = 500\nSET \"required weight in grams\" = 450\nIF \"ordered flavour\" = \"current flavour\" AND \"current weight in grams\" >= \"required weight in grams\" THEN\n  PRINT \"Correct flavour and sufficient weight: true\"\nELSE\n  PRINT \"Correct flavour and sufficient weight: false\"\nEND IF"
				},
				"5-part-b": {
					hints: [
						"Change 'current weight' to 400.",
						"Run the code to see that the weight check (400 >= 450) now fails."
					],
					answer: "SET \"ordered flavour\" = \"Caramel\"\nSET \"current flavour\" = \"Caramel\"\nSET \"current weight in grams\" = 400\nSET \"required weight in grams\" = 450\nIF \"ordered flavour\" = \"current flavour\" AND \"current weight in grams\" >= \"required weight in grams\" THEN\n  PRINT \"Correct flavour and sufficient weight: true\"\nELSE\n  PRINT \"Correct flavour and sufficient weight: false\"\nEND IF"
				}
			}, // end module 4 logical operators part 1





			// module 4 logical operators part 2
			logicalOperators2: {
			// EXERCISE 1: Machine Power (Butter OR Oil) 🔋
			"1-part-a": {
				hints: [
					"Set 'butter available' to true and 'oil available' to false.",
					"Use IF with OR to check if either is true.",
					"PRINT the status of both before the IF check."
				],
				answer: "SET \"butter available\" = true\nSET \"oil available\" = false\nPRINT \"Butter:\", \"butter available\", \", Oil:\", \"oil available\"\nIF \"butter available\" OR \"oil available\" THEN\n  PRINT \"Machine can run: true\"\nELSE\n  PRINT \"Machine can run: false\"\nEND IF"
			},
			"1-part-b": {
				hints: [
					"Flip the values: 'butter available' = false, 'oil available' = true.",
					"Use the same IF/OR logic to show the machine can still run with oil."
				],
				answer: "SET \"butter available\" = false\nSET \"oil available\" = true\nPRINT \"Butter:\", \"butter available\", \", Oil:\", \"oil available\"\nIF \"butter available\" OR \"oil available\" THEN\n  PRINT \"Machine can run: true\"\nELSE\n  PRINT \"Machine can run: false\"\nEND IF"
			},
			// EXERCISE 2: Sweetener Check (Sugar OR Honey) 🍯
			"2-part-a": {
				hints: [
					"Set 'sugar available' to true and 'honey available' to false.",
					"Use IF/OR to check if you can make sweet popcorn."
				],
				answer: "SET \"sugar available\" = true\nSET \"honey available\" = false\nIF \"sugar available\" OR \"honey available\" THEN\n  PRINT \"Can make sweet popcorn: true\"\nELSE\n  PRINT \"Can make sweet popcorn: false\"\nEND IF"
			},
			"2-part-b": {
				hints: [
					"Set 'sugar available' to false and 'honey available' to true.",
					"Verify that honey alone is enough to pass the OR check."
				],
				answer: "SET \"sugar available\" = false\nSET \"honey available\" = true\nIF \"sugar available\" OR \"honey available\" THEN\n  PRINT \"Can make sweet popcorn: true\"\nELSE\n  PRINT \"Can make sweet popcorn: false\"\nEND IF"
			},
			// EXERCISE 3: Cheese Type (Cheddar OR Parmesan) 🧀
			"3-part-a": {
				hints: [
					"Set 'cheddar available' to true and 'parmesan available' to false.",
					"Use IF/OR to check for cheese popcorn readiness."
				],
				answer: "SET \"cheddar available\" = true\nSET \"parmesan available\" = false\nIF \"cheddar available\" OR \"parmesan available\" THEN\n  PRINT \"Can make cheese popcorn: true\"\nELSE\n  PRINT \"Can make cheese popcorn: false\"\nEND IF"
			},
			"3-part-b": {
				hints: [
					"Set 'cheddar' to false and 'parmesan' to true.",
					"The OR operator ensures the output is still true if parmesan is available."
				],
				answer: "SET \"cheddar available\" = false\nSET \"parmesan available\" = true\nIF \"cheddar available\" OR \"parmesan available\" THEN\n  PRINT \"Can make cheese popcorn: true\"\nELSE\n  PRINT \"Can make cheese popcorn: false\"\nEND IF"
			},
			// EXERCISE 4: Nutty Toppings (Peanuts OR Almonds) 🥜
			"4-part-a": {
				hints: [
					"Set 'peanuts available' to true and 'almonds available' to false.",
					"Check if we can make nutty popcorn using OR."
				],
				answer: "SET \"peanuts available\" = true\nSET \"almonds available\" = false\nIF \"peanuts available\" OR \"almonds available\" THEN\n  PRINT \"Can make nutty popcorn: true\"\nELSE\n  PRINT \"Can make nutty popcorn: false\"\nEND IF"
			},
			"4-part-b": {
				hints: [
					"Set 'peanuts' to false and 'almonds' to true.",
					"Confirm that almonds allow the nutty popcorn production to continue."
				],
				answer: "SET \"peanuts available\" = false\nSET \"almonds available\" = true\nIF \"peanuts available\" OR \"almonds available\" THEN\n  PRINT \"Can make nutty popcorn: true\"\nELSE\n  PRINT \"Can make nutty popcorn: false\"\nEND IF"
			},
			// EXERCISE 5: Savoury Seasoning (Salt OR Sea Salt) 🧂
			"5-part-a": {
				hints: [
					"Set 'salt available' to true and 'sea salt available' to false.",
					"Use IF/OR to check if savoury popcorn can be made."
				],
				answer: "SET \"salt available\" = true\nSET \"sea salt available\" = false\nIF \"salt available\" OR \"sea salt available\" THEN\n  PRINT \"Can make savoury popcorn: true\"\nELSE\n  PRINT \"Can make savoury popcorn: false\"\nEND IF"
			},
			"5-part-b": {
				hints: [
					"Set 'salt' to false and 'sea salt' to true.",
					"Check if the OR logic handles the swap to sea salt correctly."
				],
				answer: "SET \"salt available\" = false\nSET \"sea salt available\" = true\nIF \"salt available\" OR \"sea salt available\" THEN\n  PRINT \"Can make savoury popcorn: true\"\nELSE\n  PRINT \"Can make savoury popcorn: false\"\nEND IF"
			}
		}, // end module 4 logical operators part 2

		// end of module 4 logical operators






		// module 5 loops part 1
		loops1: {
			// EXERCISE 1: Production Line Counting 🎒
			"1-part-a": {
				hints: [
					"Set 'number of bags' to 5.",
					"Use a FOR loop with 'bag number' from 1 TO 'number of bags'.",
					"Inside the loop, PRINT 'Bag', 'bag number', and 'is ready'."
				],
				answer: "SET \"number of bags\" = 5\nFOR \"bag number\" FROM 1 TO \"number of bags\" DO\n  PRINT \"Bag\", \"bag number\", \"is ready\"\nEND FOR"
			},
			"1-part-b": {
				hints: [
					"Set 'number of bags' to 10.",
					"Update the PRINT message to say 'passing through'.",
					"The loop will now repeat 10 times."
				],
				answer: "SET \"number of bags\" = 10\nFOR \"bag number\" FROM 1 TO \"number of bags\" DO\n  PRINT \"Bag\", \"bag number\", \"passing through\"\nEND FOR"
			},
			// EXERCISE 2: Corn Box Distribution 🌽
			"2-part-a": {
				hints: [
					"Create a FOR loop with 'machine number' from 1 TO 6.",
					"Inside, PRINT a message about the machine receiving a corn box.",
					"Ensure you include the 'machine number' variable in your PRINT statement."
				],
				answer: "FOR \"machine number\" FROM 1 TO 6 DO\n  PRINT \"Machine\", \"machine number\", \"is receiving its corn box\"\nEND FOR"
			},
			"2-part-b": {
				hints: [
					"Change the loop range to count from 1 TO 10.",
					"Keep the same PRINT message from Part A."
				],
				answer: "FOR \"machine number\" FROM 1 TO 10 DO\n  PRINT \"Machine\", \"machine number\", \"is receiving its corn box\"\nEND FOR"
			},
			// EXERCISE 3: Oil Container Management 🛢️
			"3-part-a": {
				hints: [
					"Use a FOR loop with 'container number' from 1 TO 7.",
					"PRINT a message confirming each container is being checked."
				],
				answer: "FOR \"container number\" FROM 1 TO 7 DO\n  PRINT \"Checking oil container number:\", \"container number\"\nEND FOR"
			},
			"3-part-b": {
				hints: [
					"Loop 'machine number' from 1 TO 8.",
					"Inside, PRINT that the machine is receiving its oil container."
				],
				answer: "FOR \"machine number\" FROM 1 TO 8 DO\n  PRINT \"Machine\", \"machine number\", \"receiving oil container\"\nEND FOR"
			},
			// EXERCISE 4: Flavour Packet Inventory 🌶️
			"4-part-a": {
				hints: [
					"Loop 'packet number' from 1 TO 5.",
					"PRINT a message for each packet being counted."
				],
				answer: "FOR \"packet number\" FROM 1 TO 5 DO\n  PRINT \"Counting flavour packet:\", \"packet number\"\nEND FOR"
			},
			"4-part-b": {
				hints: [
					"Loop 'station number' from 1 TO 9.",
					"PRINT that the station is receiving its flavour packet."
				],
				answer: "FOR \"station number\" FROM 1 TO 9 DO\n  PRINT \"Station\", \"station number\", \"received flavour packet\"\nEND FOR"
			},
			// EXERCISE 5: Salt Container Delivery 🧂
			"5-part-a": {
				hints: [
					"Loop 'container number' from 1 TO 4.",
					"PRINT a confirmation for each salt container."
				],
				answer: "FOR \"container number\" FROM 1 TO 4 DO\n  PRINT \"Salt container\", \"container number\", \"counted\"\nEND FOR"
			},
			"5-part-b": {
				hints: [
					"Loop 'machine number' from 1 TO 10.",
					"PRINT the delivery message for all machines."
				],
				answer: "FOR \"machine number\" FROM 1 TO 10 DO\n  PRINT \"Machine\", \"machine number\", \"is receiving its salt container\"\nEND FOR"
			}
		}, // end module 5 loops part 1





		// module 5 loops part 2
		loops2: {
			// EXERCISE 1: Container & Backup Math 🛢️
			"1-part-a": {
				hints: [
					"Create a FOR loop for 'container number' from 1 TO 5.",
					"Inside the loop, SET 'backup containers' to 2.",
					"Calculate 'total containers' by adding the current 'container number' to 'backup containers'.",
					"PRINT the results using commas to join the variables and text."
				],
				answer: "FOR \"container number\" FROM 1 TO 5 DO\n  SET \"backup containers\" = 2\n  SET \"total containers\" = \"container number\" + \"backup containers\"\n  PRINT \"Container \", \"container number\", \" plus \", \"backup containers\", \" backups is \", \"total containers\", \" total.\"\nEND FOR"
			},
			"1-part-b": {
				hints: [
					"Loop 'container number' from 1 TO 6.",
					"Inside, SET 'backup containers' to 3 and calculate the total."
				],
				answer: "FOR \"container number\" FROM 1 TO 6 DO\n  SET \"backup containers\" = 3\n  SET \"total containers\" = \"container number\" + \"backup containers\"\n  PRINT \"Container \", \"container number\", \" plus \", \"backup containers\", \" backups is \", \"total containers\", \" total.\"\nEND FOR"
			},
			// EXERCISE 2: Packet & Box Multipliers 📦
			"2-part-a": {
				hints: [
					"Loop 'station number' from 1 TO 5.",
					"Calculate 'total packets' by multiplying 'station number' by 2.",
					"PRINT the station number and the calculated total."
				],
				answer: "FOR \"station number\" FROM 1 TO 5 DO\n  SET \"total packets\" = \"station number\" * 2\n  PRINT \"Station \", \"station number\", \" total packets: \", \"total packets\"\nEND FOR"
			},
			"2-part-b": {
				hints: [
					"Loop 'storage area number' from 1 TO 4.",
					"Calculate 'total boxes' by multiplying the area number by 3."
				],
				answer: "FOR \"storage area number\" FROM 1 TO 4 DO\n  SET \"total boxes\" = \"storage area number\" * 3\n  PRINT \"Storage area \", \"storage area number\", \" total boxes: \", \"total boxes\"\nEND FOR"
			},
			// EXERCISE 3: Salt Distribution Multipliers 🧂
			"3-part-a": {
				hints: [
					"Loop 'machine number' from 1 TO 5.",
					"Multiply the machine number by 4 to get 'total packets'.",
					"Output the result for each machine."
				],
				answer: "FOR \"machine number\" FROM 1 TO 5 DO\n  SET \"total packets\" = \"machine number\" * 4\n  PRINT \"Machine \", \"machine number\", \" salt packets: \", \"total packets\"\nEND FOR"
			},
			"3-part-b": {
				hints: [
					"Loop 'line number' from 1 TO 6.",
					"Multiply 'line number' by 5 to find 'total containers'."
				],
				answer: "FOR \"line number\" FROM 1 TO 6 DO\n  SET \"total containers\" = \"line number\" * 5\n  PRINT \"Line \", \"line number\", \" total salt containers: \", \"total containers\"\nEND FOR"
			},
			// EXERCISE 4: Combined Operations (Multiply + Add) ➕
			"4-part-a": {
				hints: [
					"Loop 'machine number' from 1 TO 4.",
					"SET 'extra boxes' to 3.",
					"Calculate 'total boxes' = ('machine number' * 2) + 'extra boxes'."
				],
				answer: "FOR \"machine number\" FROM 1 TO 4 DO\n  SET \"extra boxes\" = 3\n  SET \"total boxes\" = (\"machine number\" * 2) + \"extra boxes\"\n  PRINT \"Machine \", \"machine number\", \" corn boxes: \", \"total boxes\"\nEND FOR"
			},
			"4-part-b": {
				hints: [
					"Loop 'station number' from 1 TO 5.",
					"SET 'bonus packets' to 2.",
					"Calculate 'total packets' = ('station number' * 3) + 'bonus packets'."
				],
				answer: "FOR \"station number\" FROM 1 TO 5 DO\n  SET \"bonus packets\" = 2\n  SET \"total packets\" = (\"station number\" * 3) + \"bonus packets\"\n  PRINT \"Station \", \"station number\", \" flavour packets: \", \"total packets\"\nEND FOR"
			},
			// EXERCISE 5: Power Consumption Logic ⚡
			"5-part-a": {
				hints: [
					"Loop 'machine number' from 1 TO 5.",
					"SET 'extra power per machine' to 5.",
					"Calculate 'power needed' = ('machine number' * 10) + 'extra power per machine'."
				],
				answer: "FOR \"machine number\" FROM 1 TO 5 DO\n  SET \"extra power per machine\" = 5\n  SET \"power needed\" = (\"machine number\" * 10) + \"extra power per machine\"\n  PRINT \"Machine \", \"machine number\", \" power needed: \", \"power needed\"\nEND FOR"
			},
			"5-part-b": {
				hints: [
					"Loop 'machine number' from 1 TO 4.",
					"SET 'extra power per machine' to 8.",
					"Calculate 'power needed' = ('machine number' * 12) + 'extra power per machine'."
				],
				answer: "FOR \"machine number\" FROM 1 TO 4 DO\n  SET \"extra power per machine\" = 8\n  SET \"power needed\" = (\"machine number\" * 12) + \"extra power per machine\"\n  PRINT \"Machine \", \"machine number\", \" power needed: \", \"power needed\"\nEND FOR"
			}
		}, // end module 5 loops part 2





		// module 5 loops part 3
		loops3: {
			// EXERCISE 1: Oil Container Depletion 🛢️
			"1-part-a": {
				hints: [
					"SET 'total containers' to 30 and 'number of shifts' to 6.",
					"Use a FOR loop from 1 TO 'number of shifts'.",
					"Inside the loop, subtract 1 from 'total containers' and PRINT the remaining count."
				],
				answer: "SET \"total containers\" = 30\nSET \"number of shifts\" = 6\nFOR shift FROM 1 TO 6 DO\n  SET \"total containers\" = \"total containers\" - 1\n  PRINT \"Shift\", shift, \":\", \"total containers\", \"containers remain\"\nEND FOR"
			},
			"1-part-b": {
				hints: [
					"Set 'total containers' to 50 and 'number of shifts' to 8.",
					"Use the same loop logic to track containers over the busier week."
				],
				answer: "SET \"total containers\" = 50\nSET \"number of shifts\" = 8\nFOR shift FROM 1 TO 8 DO\n  SET \"total containers\" = \"total containers\" - 1\n  PRINT \"Shift\", shift, \":\", \"total containers\", \"containers remain\"\nEND FOR"
			},
			// EXERCISE 2: Corn Supply Tracking 🌽
			"2-part-a": {
				hints: [
					"SET 'starting corn' to 20, 'days' to 5, and 'used per day' to 2.",
					"Inside the loop, subtract 'used per day' from 'starting corn'.",
					"PRINT the current day and the corn remaining."
				],
				answer: "SET \"starting corn\" = 20\nSET \"days\" = 5\nSET \"used per day\" = 2\nFOR day FROM 1 TO \"days\" DO\n  SET \"starting corn\" = \"starting corn\" - \"used per day\"\n  PRINT \"Day\", day, \":\", \"starting corn\", \"units of corn remain\"\nEND FOR"
			},
			"2-part-b": {
				hints: [
					"Set 'starting corn' to 100, 'days' to 10, and 'used per day' to 3.",
					"Track the supply over the 10-day production run."
				],
				answer: "SET \"starting corn\" = 100\nSET \"days\" = 10\nSET \"used per day\" = 3\nFOR day FROM 1 TO \"days\" DO\n  SET \"starting corn\" = \"starting corn\" - \"used per day\"\n  PRINT \"Day\", day, \":\", \"starting corn\", \"units of corn remain\"\nEND FOR"
			},
			// EXERCISE 3: Flavour Packet Distribution 🌶️
			"3-part-a": {
				hints: [
					"SET 'total packets' to 24.",
					"Loop from 1 TO 4 (representing machines).",
					"Inside, divide 'total packets' by the loop variable to find out what each gets."
				],
				answer: "SET \"total packets\" = 24\nFOR machines FROM 1 TO 4 DO\n  SET \"each gets\" = \"total packets\" / machines\n  PRINT machines, \"machines: Each gets\", \"each gets\", \"packets\"\nEND FOR"
			},
			"3-part-b": {
				hints: [
					"Set 'total packets' to 48 and loop from 1 TO 6 machines.",
					"Calculate and PRINT the distribution for each machine count."
				],
				answer: "SET \"total packets\" = 48\nFOR machines FROM 1 TO 6 DO\n  SET \"each gets\" = \"total packets\" / machines\n  PRINT machines, \"machines: Each gets\", \"each gets\", \"packets\"\nEND FOR"
			},
			// EXERCISE 4: Shelf Organization 📦
			"4-part-a": {
				hints: [
					"SET 'total bags' to 36 and loop from 1 TO 6 (representing shelves).",
					"Divide total bags by the current shelf number to see the distribution."
				],
				answer: "SET \"total bags\" = 36\nFOR shelves FROM 1 TO 6 DO\n  SET \"bags per shelf\" = \"total bags\" / shelves\n  PRINT shelves, \"shelves: Each holds\", \"bags per shelf\", \"bags\"\nEND FOR"
			},
			"4-part-b": {
				hints: [
					"Set 'total bags' to 60 and loop from 1 TO 6 shelves.",
					"Divide and PRINT the bags per shelf result."
				],
				answer: "SET \"total bags\" = 60\nFOR shelves FROM 1 TO 6 DO\n  SET \"bags per shelf\" = \"total bags\" / shelves\n  PRINT shelves, \"shelves: Each holds\", \"bags per shelf\", \"bags\"\nEND FOR"
			},
			// EXERCISE 5: Salt Inventory and Distribution 🧂
			"5-part-a": {
				hints: [
					"SET 'total salt' to 40 and 'number of machines' to 5.",
					"Calculate 'per machine' before the loop.",
					"Use a loop to subtract 'per machine' from 'total salt' at each step."
				],
				answer: "SET \"total salt\" = 40\nSET \"number of machines\" = 5\nSET \"per machine\" = \"total salt\" / \"number of machines\"\nFOR machine FROM 1 TO \"number of machines\" DO\n  SET \"total salt\" = \"total salt\" - \"per machine\"\n  PRINT \"Machine\", machine, \"received salt. Remaining total:\", \"total salt\"\nEND FOR"
			},
			"5-part-b": {
				hints: [
					"Set 'total salt' to 100 and 'number of machines' to 10.",
					"Distribute the salt and track the decreasing inventory in the PRINT statement."
				],
				answer: "SET \"total salt\" = 100\nSET \"number of machines\" = 10\nSET \"per machine\" = \"total salt\" / \"number of machines\"\nFOR machine FROM 1 TO \"number of machines\" DO\n  SET \"total salt\" = \"total salt\" - \"per machine\"\n  PRINT \"Machine\", machine, \"received salt. Remaining total:\", \"total salt\"\nEND FOR"
			}
		}, // end module 5 loops part 3





		// module 5 loops part 4
		loops4: {
			// EXERCISE 1: Corn Box & Oil Inventory Totals 📦
			"1-part-a": {
				hints: [
					"Initialize 'total corn boxes' to 0 outside the loop.",
					"Use a FOR loop from 1 TO 'number of shelves'.",
					"Inside, add 'boxes per shelf' to 'total corn boxes' and PRINT the result."
				],
				answer: "SET \"total corn boxes\" = 0\nSET \"number of shelves\" = 4\nSET \"boxes per shelf\" = 5\nFOR counter FROM 1 TO \"number of shelves\" DO\n  SET \"total corn boxes\" = \"total corn boxes\" + \"boxes per shelf\"\n  PRINT \"Added\", \"boxes per shelf\", \"boxes from shelf\", counter, \"Total now:\", \"total corn boxes\", \"boxes\"\nEND FOR"
			},
			"1-part-b": {
				hints: [
					"Start 'total oil containers' at 0.",
					"Loop through 5 deliveries, adding 6 containers each time.",
					"PRINT the delivery number and the new total in each cycle."
				],
				answer: "SET \"total oil containers\" = 0\nSET \"number of deliveries\" = 5\nSET \"containers per delivery\" = 6\nFOR counter FROM 1 TO \"number of deliveries\" DO\n  SET \"total oil containers\" = \"total oil containers\" + \"containers per delivery\"\n  PRINT \"Delivery\", counter, \"Received\", \"containers per delivery\", \"containers Total:\", \"total oil containers\", \"containers\"\nEND FOR"
			},
			// EXERCISE 2: Ingredient Usage Over Time 🧂
			"2-part-a": {
				hints: [
					"Initialize 'total salt used' to 0.",
					"Loop from 1 TO 'number of days' (5).",
					"Add 'packets used per day' (3) to the total each iteration."
				],
				answer: "SET \"total salt used\" = 0\nSET \"number of days\" = 5\nSET \"packets used per day\" = 3\nFOR day FROM 1 TO \"number of days\" DO\n  SET \"total salt used\" = \"total salt used\" + \"packets used per day\"\n  PRINT \"Day\", day, \"Total salt used:\", \"total salt used\"\nEND FOR"
			},
			"2-part-b": {
				hints: [
					"Track 'total flavour used' starting at 0.",
					"Loop for 4 weeks, adding 8 packets per week.",
					"PRINT the weekly accumulation."
				],
				answer: "SET \"total flavour used\" = 0\nSET \"number of weeks\" = 4\nSET \"packets used per week\" = 8\nFOR week FROM 1 TO \"number of weeks\" DO\n  SET \"total flavour used\" = \"total flavour used\" + \"packets used per week\"\n  PRINT \"Week\", week, \"Total flavour packets used:\", \"total flavour used\"\nEND FOR"
			},
			// EXERCISE 3: Production Benchmarks 🏭
			"3-part-a": {
				hints: [
					"Initialize 'total batches completed' to 0.",
					"Loop through 6 days, adding 7 batches each day.",
					"PRINT the daily progress and the running total."
				],
				answer: "SET \"total batches completed\" = 0\nSET \"number of days\" = 6\nSET \"batches per day\" = 7\nFOR day FROM 1 TO \"number of days\" DO\n  SET \"total batches completed\" = \"total batches completed\" + \"batches per day\"\n  PRINT \"Day\", day, \"Total batches completed:\", \"total batches completed\"\nEND FOR"
			},
			"3-part-b": {
				hints: [
					"Start 'total bags packaged' at 0.",
					"Loop through 8 shifts, adding 10 bags per shift.",
					"PRINT the shift number and current total bags."
				],
				answer: "SET \"total bags packaged\" = 0\nSET \"number of shifts\" = 8\nSET \"bags per shift\" = 10\nFOR shift FROM 1 TO \"number of shifts\" DO\n  SET \"total bags packaged\" = \"total bags packaged\" + \"bags per shift\"\n  PRINT \"Shift\", shift, \"Total bags packaged:\", \"total bags packaged\"\nEND FOR"
			},
			// EXERCISE 4: Quality Control & Defects 🛠️
			"4-part-a": {
				hints: [
					"Initialize 'total boxes checked' to 0.",
					"Loop for 8 batches, adding 3 boxes per batch.",
					"PRINT the accumulation of quality checks."
				],
				answer: "SET \"total boxes checked\" = 0\nSET \"number of batches\" = 8\nSET \"boxes checked per batch\" = 3\nFOR batch FROM 1 TO \"number of batches\" DO\n  SET \"total boxes checked\" = \"total boxes checked\" + \"boxes checked per batch\"\n  PRINT \"Batch\", batch, \"Total boxes checked:\", \"total boxes checked\"\nEND FOR"
			},
			"4-part-b": {
				hints: [
					"Initialize 'total defects found' to 0.",
					"Loop for 6 hours, adding 2 defects per hour.",
					"PRINT the total defects found up to that hour."
				],
				answer: "SET \"total defects found\" = 0\nSET \"number of hours\" = 6\nSET \"defects found per hour\" = 2\nFOR hour FROM 1 TO \"number of hours\" DO\n  SET \"total defects found\" = \"total defects found\" + \"defects found per hour\"\n  PRINT \"Hour\", hour, \"Total defects found:\", \"total defects found\"\nEND FOR"
			},
			// EXERCISE 5: Factory Payroll Logic 💸
			"5-part-a": {
				hints: [
					"Set 'total wages' to 0.",
					"Loop through 5 workers, adding 100 to the total per iteration.",
					"PRINT the worker number and the increasing wage total."
				],
				answer: "SET \"total wages\" = 0\nSET \"number of workers\" = 5\nSET \"daily wage per worker\" = 100\nFOR worker FROM 1 TO \"number of workers\" DO\n  SET \"total wages\" = \"total wages\" + \"daily wage per worker\"\n  PRINT \"Worker\", worker, \"Total wages calculated:\", \"total wages\"\nEND FOR"
			},
			"5-part-b": {
				hints: [
					"Start 'total bonus paid' at 0.",
					"Loop for 3 workers, adding 50 each time.",
					"PRINT the total bonus payout progress."
				],
				answer: "SET \"total bonus paid\" = 0\nSET \"number of workers\" = 3\nSET \"bonus per worker\" = 50\nFOR worker FROM 1 TO \"number of workers\" DO\n  SET \"total bonus paid\" = \"total bonus paid\" + \"bonus per worker\"\n  PRINT \"Worker\", worker, \"Total bonus paid:\", \"total bonus paid\"\nEND FOR"
			}
		}, // end module 5 loops part 4





		// module 6 pirate-adventure part 1
			pirateAdventure: {
				// EXERCISE 1: Digging for Treasure ⛏️
				"1-part-a": {
					hints: [
						"Start by using `SET` to create two variables: `\"has shovel\"` (set it to true) and `\"steps from tree\"` (set it to 10).",
						"Now use an `IF` statement. Use `AND` to check if you have the shovel `AND` if you are at step 10.",
						"If both are true, use `PRINT` to say: \"⛏️ Perfect spot — start digging!\""
					],
					answer: "SET \"has shovel\" TO true\nSET \"steps from tree\" TO 10\nIF \"has shovel\" IS true AND \"steps from tree\" IS 10 THEN\n  PRINT \"⛏️ Perfect spot — start digging!\"\nENDIF"
				},
				"1-part-b": {
					hints: [
						"Set the `\"steps from tree\"` to 12 this time.",
						"Since 12 is not 10, your `IF` condition won't be true anymore.",
						"Add an `ELSE` part to your code to `PRINT`: \"📍 Wrong location — check your steps!\""
					],
					answer: "SET \"has shovel\" TO true\nSET \"steps from tree\" TO 12\nIF \"has shovel\" IS true AND \"steps from tree\" IS 10 THEN\n  PRINT \"⛏️ Perfect spot — start digging!\"\nELSE\n  PRINT \"📍 Wrong location — check your steps!\"\nENDIF"
				},

				// EXERCISE 2: Ancient Puzzle Stones 🪨
				"2-part-a": {
					hints: [
						"Use `SET` to pick a stone! For Part A, set `\"stone number\"` to 2.",
						"Use an `IF` statement with `OR` to see if the stone is 2 `OR` 3.",
						"If it's either one, `PRINT`: \"✅ Correct stone — passage opens!\""
					],
					answer: "SET \"stone number\" TO 2\nIF \"stone number\" IS 2 OR \"stone number\" IS 3 THEN\n  PRINT \"✅ Correct stone — passage opens!\"\nENDIF"
				},
				"2-part-b": {
					hints: [
						"This time, set `\"stone number\"` to 1.",
						"Stone 1 is a trap! Use an `IF` statement to check if the stone number is 1.",
						"If it is, `PRINT`: \"❌ Stone 1 triggers trap — careful!\""
					],
					answer: "SET \"stone number\" TO 1\nIF \"stone number\" IS 1 THEN\n  PRINT \"❌ Stone 1 triggers trap — careful!\"\nENDIF"
				},

				// EXERCISE 3: Jungle Path Choice 🌿
				"3-part-a": {
					hints: [
						"Set `\"has machete\"` to true and `\"is daylight\"` to false.",
						"Use the `OR` operator. The path is clear if you have a machete `OR` if it is daylight.",
						"If the condition is met, `PRINT`: \"🌿 Path clear — continue adventure!\""
					],
					answer: "SET \"has machete\" TO true\nSET \"is daylight\" TO false\nIF \"has machete\" IS true OR \"is daylight\" IS true THEN\n  PRINT \"🌿 Path clear — continue adventure!\"\nENDIF"
				},
				"3-part-b": {
					hints: [
						"Now set `\"has machete\"` to false but `\"is daylight\"` to true.",
						"The `OR` operator only needs ONE thing to be true to work. Is one of them still true?",
						"`PRINT` the same success message as before!"
					],
					answer: "SET \"has machete\" TO false\nSET \"is daylight\" TO true\nIF \"has machete\" IS true OR \"is daylight\" IS true THEN\n  PRINT \"🌿 Path clear — continue adventure!\"\nENDIF"
				},

				// EXERCISE 4: Cave Entrance 🕯️
				"4-part-a": {
					hints: [
						"Create two variables: `\"has torch\"` (true) and `\"cave flooded\"` (false).",
						"Use `AND` with `NOT`. You can enter if you have a torch `AND` the cave is `NOT` flooded.",
						"If safe, `PRINT`: \"🕯️ Cave safe — watch your step!\""
					],
					answer: "SET \"has torch\" TO true\nSET \"cave flooded\" TO false\nIF \"has torch\" IS true AND NOT \"cave flooded\" IS true THEN\n  PRINT \"🕯️ Cave safe — watch your step!\"\nENDIF"
				},
				"4-part-b": {
					hints: [
						"Set `\"cave flooded\"` to true. Oh no!",
						"Since the cave IS flooded, your `NOT \"cave flooded\"` check will fail.",
						"Use `ELSE` to `PRINT`: \"💧 Cannot enter — cave is flooded!\""
					],
					answer: "SET \"has torch\" TO true\nSET \"cave flooded\" TO true\nIF \"has torch\" IS true AND NOT \"cave flooded\" IS true THEN\n  PRINT \"🕯️ Cave safe — watch your step!\"\nELSE\n  PRINT \"💧 Cannot enter — cave is flooded!\"\nENDIF"
				},

				// EXERCISE 5: Treasure Chest 🏆
				"5-part-a": {
					hints: [
						"This is a big one! Set `\"has key\"` to true, `\"secret code\"` to 123, and `\"chest rusty\"` to false.",
						"Use parentheses `()` around your `OR` check like this: `(code IS 123 OR code IS 456)`.",
						"Check if you have the key `AND` the code is right `AND NOT` rusty. Then `PRINT`: \"🏆💎 TREASURE FOUND — YOU WIN!\""
					],
					answer: "SET \"has key\" TO true\nSET \"secret code\" TO 123\nSET \"chest rusty\" TO false\nIF \"has key\" IS true AND (\"secret code\" IS 123 OR \"secret code\" IS 456) AND NOT \"chest rusty\" IS true THEN\n  PRINT \"🏆💎 TREASURE FOUND — YOU WIN!\"\nENDIF"
				},
				"5-part-b": {
					hints: [
						"Set `\"chest rusty\"` to true. Rust makes it hard to open!",
						"Even with the key and code, if it's rusty, it won't open. Your `AND NOT \"chest rusty\"` check will fail.",
						"Use `ELSE` to `PRINT`: \"🔒 Still locked — chest is too rusty!\""
					],
					answer: "SET \"has key\" TO true\nSET \"secret code\" TO 123\nSET \"chest rusty\" TO true\nIF \"has key\" IS true AND (\"secret code\" IS 123 OR \"secret code\" IS 456) AND NOT \"chest rusty\" IS true THEN\n  PRINT \"🏆💎 TREASURE FOUND — YOU WIN!\"\nELSE\n  PRINT \"🔒 Still locked — chest is too rusty!\"\nENDIF"
				},

				// BONUS EXERCISE: Captain's Final Test 🥇
				"6-part-a": {
					hints: [
						"The ultimate pirate test! Set all four variables from the instructions.",
						"Use `AND` to join all four checks: age, mistakes, secret word, and challenges.",
						"If everything matches, `PRINT`: \"🏆🎉 GOLDEN CODER MEDAL EARNED! You mastered ALL conditions!\""
					],
					answer: "SET \"child age\" TO 9\nSET \"number of mistakes\" TO 2\nSET \"secret word\" TO \"treasure\"\nSET \"challenges completed\" TO 5\nIF \"child age\" >= 7 AND \"number of mistakes\" < 3 AND \"secret word\" IS \"treasure\" AND \"challenges completed\" IS 5 THEN\n  PRINT \"🏆🎉 GOLDEN CODER MEDAL EARNED! You mastered ALL conditions!\"\nENDIF"
				},
				"6-part-b": {
					hints: [
						"Change `\"number of mistakes\"` to 3. This is one mistake too many!",
						"Because you used `AND`, if even one thing is wrong, the whole check fails.",
						"Use `ELSE` to `PRINT`: \"⚓ Keep practising — review your conditions!\""
					],
					answer: "SET \"child age\" TO 9\nSET \"number of mistakes\" TO 3\nSET \"secret word\" TO \"treasure\"\nSET \"challenges completed\" TO 5\nIF \"child age\" >= 7 AND \"number of mistakes\" < 3 AND \"secret word\" IS \"treasure\" AND \"challenges completed\" IS 5 THEN\n  PRINT \"🏆🎉 GOLDEN CODER MEDAL EARNED! You mastered ALL conditions!\"\nELSE\n  PRINT \"⚓ Keep practising — review your conditions!\"\nENDIF"
				}
			}, // end module 6 pirate-adventure part 1





			// module 6 pirate-adventure part 2
			pirateAdventure2: {
			// EXERCISE 1: Digging for Treasure ⛏️
			"1-part-a": {
				hints: [
					"SET 'has shovel' to true and 'steps from tree' to 10.",
					"Use an IF statement with AND to check both conditions.",
					"PRINT the digging message if the condition is met."
				],
				answer: "SET \"has shovel\" = true\nSET \"steps from tree\" = 10\n\nIF \"has shovel\" AND \"steps from tree\" = 10 THEN\n  PRINT \"⛏️ Perfect spot — start digging!\"\nELSE\n  PRINT \"📍 Wrong location — check your steps!\"\nEND IF"
			},
			"1-part-b": {
				hints: [
					"Keep 'has shovel' as true, but change 'steps from tree' to 12.",
					"Use the same IF statement. The ELSE block should run this time."
				],
				answer: "SET \"has shovel\" = true\nSET \"steps from tree\" = 12\n\nIF \"has shovel\" AND \"steps from tree\" = 10 THEN\n  PRINT \"⛏️ Perfect spot — start digging!\"\nELSE\n  PRINT \"📍 Wrong location — check your steps!\"\nEND IF"
			},
			// EXERCISE 2: Puzzle Stones 🗿
			"2-part-a": {
				hints: [
					"SET 'stone number' to 2.",
					"Check if the stone is 2 OR 3 for the first condition.",
					"Add an ELSE IF for stone 1."
				],
				answer: "SET \"stone number\" = 2\nIF \"stone number\" = 2 OR \"stone number\" = 3 THEN\n  PRINT \"✨ The stone glows — it's part of the puzzle!\"\nELSE IF \"stone number\" = 1 THEN\n  PRINT \"⚠️ Watch out! This stone looks like a trap!\"\nELSE\n  PRINT \"Just a normal rock.\"\nEND IF"
			},
			"2-part-b": {
				hints: [
					"SET 'stone number' to 1.",
					"Use the same structure to trigger the trap message."
				],
				answer: "SET \"stone number\" = 1\nIF \"stone number\" = 2 OR \"stone number\" = 3 THEN\n  PRINT \"✨ The stone glows — it's part of the puzzle!\"\nELSE IF \"stone number\" = 1 THEN\n  PRINT \"⚠️ Watch out! This stone looks like a trap!\"\nELSE\n  PRINT \"Just a normal rock.\"\nEND IF"
			},
			// EXERCISE 3: Jungle Path 🌴
			"3-part-a": {
				hints: [
					"SET 'has machete' to true and 'is daylight' to false.",
					"Use an IF statement with OR to see if you can clear the path."
				],
				answer: "SET \"has machete\" = true\nSET \"is daylight\" = false\nIF \"has machete\" OR \"is daylight\" THEN\n  PRINT \"🌿 You can push through the jungle path!\"\nELSE\n  PRINT \"🌳 The jungle is too thick and dark to pass.\"\nEND IF"
			},
			"3-part-b": {
				hints: [
					"SET 'has machete' to false and 'is daylight' to true.",
					"The OR check will still be true because it is daylight."
				],
				answer: "SET \"has machete\" = false\nSET \"is daylight\" = true\nIF \"has machete\" OR \"is daylight\" THEN\n  PRINT \"🌿 You can push through the jungle path!\"\nELSE\n  PRINT \"🌳 The jungle is too thick and dark to pass.\"\nEND IF"
			},
			// EXERCISE 4: Cave Entrance 🦇
			"4-part-a": {
				hints: [
					"SET 'has torch' to true and 'cave flooded' to false.",
					"Use NOT with 'cave flooded' to check if it's dry."
				],
				answer: "SET \"has torch\" = true\nSET \"cave flooded\" = false\nIF \"has torch\" AND NOT \"cave flooded\" THEN\n  PRINT \"🔦 Torch lit and cave is dry. Let's go!\"\nELSE\n  PRINT \"🌊 Too dangerous to enter the cave right now.\"\nEND IF"
			},
			"4-part-b": {
				hints: [
					"Change 'cave flooded' to true.",
					"The AND NOT condition will now fail."
				],
				answer: "SET \"has torch\" = true\nSET \"cave flooded\" = true\nIF \"has torch\" AND NOT \"cave flooded\" THEN\n  PRINT \"🔦 Torch lit and cave is dry. Let's go!\"\nELSE\n  PRINT \"🌊 Too dangerous to enter the cave right now.\"\nEND IF"
			},
			// EXERCISE 5: Treasure Chest 💎
			"5-part-a": {
				hints: [
					"Initialize 'has key' (true), 'secret code' (123), and 'chest rusty' (false).",
					"Check: has key AND code = 123 AND NOT rusty."
				],
				answer: "SET \"has key\" = true\nSET \"secret code\" = 123\nSET \"chest rusty\" = false\nIF \"has key\" AND \"secret code\" = 123 AND NOT \"chest rusty\" THEN\n  PRINT \"🔓 The chest clicks open! Gold everywhere!\"\nELSE\n  PRINT \"🔒 Still locked — something isn't right.\"\nEND IF"
			},
			"5-part-b": {
				hints: [
					"Set 'chest rusty' to true to check the fail condition."
				],
				answer: "SET \"has key\" = true\nSET \"secret code\" = 123\nSET \"chest rusty\" = true\nIF \"has key\" AND \"secret code\" = 123 AND NOT \"chest rusty\" THEN\n  PRINT \"🔓 The chest clicks open! Gold everywhere!\"\nELSE\n  PRINT \"🔒 Still locked — the hinges are too rusty!\"\nEND IF"
			},
			// EXERCISE 6: The Captain's Final Test 🏴‍☠️
			"6-part-a": {
				hints: [
					"Set all four variables: age (9), mistakes (2), word ('treasure'), challenges (5).",
					"Combine them using AND logic."
				],
				answer: "SET \"child age\" = 9\nSET \"number of mistakes\" = 2\nSET \"secret word\" = \"treasure\"\nSET \"challenges completed\" = 5\nIF \"child age\" >= 8 AND \"number of mistakes\" < 3 AND \"secret word\" = \"treasure\" AND \"challenges completed\" >= 5 THEN\n  PRINT \"🎉 You passed the Captain's test! Welcome aboard!\"\nELSE\n  PRINT \"⚓ Keep training, matey. You're not a pirate yet!\"\nEND IF"
			},
			"6-part-b": {
				hints: [
					"Set 'number of mistakes' to 3 to trigger the failure message."
				],
				answer: "SET \"child age\" = 9\nSET \"number of mistakes\" = 3\nSET \"secret word\" = \"treasure\"\nSET \"challenges completed\" = 5\nIF \"child age\" >= 8 AND \"number of mistakes\" < 3 AND \"secret word\" = \"treasure\" AND \"challenges completed\" >= 5 THEN\n  PRINT \"🎉 You passed the Captain's test! Welcome aboard!\"\nELSE\n  PRINT \"⚓ Too many mistakes! The Captain isn't happy.\"\nEND IF"
			}
		}, // end module 6 pirate-adventure part 2

		// end module 6 pirate-adventure 





		// module 7 functions part 1 
			functions: {
			// EXERCISE 1: My First Function 👋
			"1-part-a": {
				hints: [
					"Create a variable named \"child name\" and set its value to \"David\".",
					"Write a function called \"introduce me\" that prints the value of \"child name\".",
					"Call the function \"introduce me\" to display the output."
				],
				answer: "SET \"child name\" = \"David\"\nFUNCTION \"introduce me\"\n  PRINT \"My name is \", \"child name\"\nEND FUNCTION\nCALL \"introduce me\""
			},
			"1-part-b": {
				hints: [
					"Create a variable named \"child name\" and set its value to \"Samantha\".",
					"Write the same function called \"introduce me\" that prints the child name.",
					"Call the function \"introduce me\" again."
				],
				answer: "SET \"child name\" = \"Samantha\"\nFUNCTION \"introduce me\"\n  PRINT \"My name is \", \"child name\"\nEND FUNCTION\nCALL \"introduce me\""
			},

			// EXERCISE 2: My Desk 🪑
			"2-part-a": {
				hints: [
					"Create a variable named \"child name\" and set its value to \"David\".",
					"Create a variable named \"desk number\" and set its value to 5.",
					"Use PRINT to display \"My name is \" followed by \"child name\" and then \"I sit at desk \" followed by \"desk number\"."
				],
				answer: "SET \"child name\" = \"David\"\nSET \"desk number\" = 5\nFUNCTION \"show my desk\"\n  PRINT \"My name is \", \"child name\"\n  PRINT \"I sit at desk \", \"desk number\"\nEND FUNCTION\nCALL \"show my desk\""
			},
			"2-part-b": {
				hints: [
					"Create a variable named \"child name\" and set its value to \"Gabrielle\".",
					"Create a variable named \"desk number\" and set its value to 12.",
					"Use PRINT to display \"My name is \" followed by the value of \"child name\" and \"I sit at desk \" followed by the value of \"desk number\"."
				],
				answer: "SET \"child name\" = \"Gabrielle\"\nSET \"desk number\" = 12\nFUNCTION \"show my desk\"\n  PRINT \"My name is \", \"child name\"\n  PRINT \"I sit at desk \", \"desk number\"\nEND FUNCTION\nCALL \"show my desk\""
			},

			// EXERCISE 3: My Classroom 🏫
			"3-part-a": {
				hints: [
					"Create a variable named \"child name\" and set its value to \"David\".",
					"Create a variable named \"desk number\" and set its value to 5.",
					"Create a variable named \"classroom\" and set its value to \"Room 3\".",
					"Write a function called \"introduce myself\" that prints \"My name is child name\", \"I sit at desk desk number\", and \"My classroom is classroom\"."
				],
				answer: "SET \"child name\" = \"David\"\nSET \"desk number\" = 5\nSET \"classroom\" = \"Room 3\"\nFUNCTION \"introduce myself\"\n  PRINT \"My name is \", \"child name\"\n  PRINT \"I sit at desk \", \"desk number\"\n  PRINT \"My classroom is \", \"classroom\"\nEND FUNCTION\nCALL \"introduce myself\""
			},
			"3-part-b": {
				hints: [
					"Create a variable named \"child name\" and set its value to \"Samantha\".",
					"Create a variable named \"desk number\" and set its value to 8.",
					"Create a variable named \"classroom\" and set its value to \"Room 5\".",
					"Use PRINT to display \"My name is \", \"child name\", \"I sit at desk \", \"desk number\", \"My classroom is \", \"classroom\"."
				],
				answer: "SET \"child name\" = \"Samantha\"\nSET \"desk number\" = 8\nSET \"classroom\" = \"Room 5\"\nFUNCTION \"introduce myself\"\n  PRINT \"My name is \", \"child name\"\n  PRINT \"I sit at desk \", \"desk number\"\n  PRINT \"My classroom is \", \"classroom\"\nEND FUNCTION\nCALL \"introduce myself\""
			},

			// EXERCISE 4: Introducing Anyone 🙋
			"4-part-a": {
				hints: [
					"Create a variable named \"child name\" and set its value to \"David\".",
					"Create a variable named \"child name\" and set its value to \"Samantha\".",
					"Use PRINT to display a greeting message.",
					"Call the \"greet child\" function with \"David\" and then with \"Samantha\"."
				],
				answer: "FUNCTION \"greet child\" WITH \"child name\"\n  PRINT \"Hello \", \"child name\", \", welcome to class!\"\nEND FUNCTION\nCALL \"greet child\" WITH \"David\"\nCALL \"greet child\" WITH \"Samantha\""
			},
			"4-part-b": {
				hints: [
					"Create a variable named \"child name\" and set its value to \"Gabrielle\".",
					"Create a variable named \"child name\" and set its value to \"Emily\".",
					"Use PRINT to display \"Hello \" followed by the value of \"child name\", followed by \", welcome to class!\".",
					"Call the \"greet child\" function with the values of \"child name\"."
				],
				answer: "FUNCTION \"greet child\" WITH \"child name\"\n  PRINT \"Hello \", \"child name\", \", welcome to class!\"\nEND FUNCTION\nCALL \"greet child\" WITH \"Gabrielle\"\nCALL \"greet child\" WITH \"Emily\""
			},

			// EXERCISE 5: The Full Introduction 🌟
			"5-part-a": {
				hints: [
					"Create a variable named \"school name\" and set its value to \"Greenfield Primary\".",
					"Create a function called \"full introduction\" that takes \"child name\" and \"desk number\" as parameters.",
					"Inside the function, use PRINT to display \"School: \", \"school name\", \"My name is \", \"child name\", \"I sit at desk \", \"desk number\".",
					"Call the function with \"child name\" set to \"David\" and \"desk number\" set to 5, then with \"child name\" set to \"Samantha\" and \"desk number\" set to 8."
				],
				answer: "SET \"school name\" = \"Greenfield Primary\"\nFUNCTION \"full introduction\" WITH \"child name\", \"desk number\"\n  PRINT \"School: \", \"school name\"\n  PRINT \"My name is \", \"child name\"\n  PRINT \"I sit at desk \", \"desk number\"\nEND FUNCTION\nCALL \"full introduction\" WITH \"David\", 5\nCALL \"full introduction\" WITH \"Samantha\", 8"
			},
			"5-part-b": {
				hints: [
					"Create a variable named \"school name\" and set its value to \"Greenfield Primary\".",
					"Create a function called \"full introduction\" that takes \"child name\" and \"desk number\" as parameters and prints all three pieces of information.",
					"Use PRINT to display \"School: \", \"school name\", \"My name is \", \"child name\", \"I sit at desk \", \"desk number\".",
					"Call the function with \"Gabrielle\" and 3 as parameters.",
					"Call the function again with the child's own name and desk number."
				],
				answer: "SET \"school name\" = \"Greenfield Primary\"\nFUNCTION \"full introduction\" WITH \"child name\", \"desk number\"\n  PRINT \"School: \", \"school name\"\n  PRINT \"My name is \", \"child name\"\n  PRINT \"I sit at desk \", \"desk number\"\nEND FUNCTION\nCALL \"full introduction\" WITH \"Gabrielle\", 3\nCALL \"full introduction\" WITH \"David\", 5"
			}
		}, // end module-7-functions-part 1





		// module-7-functions-part 2 
		functions2: { 
			// EXERCISE 1: Pencil Colours ✏️
			"1-part-a": {
				hints: [
					"Define a FUNCTION 'get pencil colour' that returns 'yellow'.",
					"SET a variable 'pencil colour' to the result of the function call.",
					"PRINT the message with the variable."
				],
				answer: "FUNCTION \"get pencil colour\"\n  RETURN \"yellow\"\nEND FUNCTION\n\nSET \"pencil colour\" = \"get pencil colour\"\nPRINT \"The pencil colour is \", \"pencil colour\""
			},
			"1-part-b": {
				hints: [
					"Change the RETURN value to 'red' inside the function.",
					"Call the function and catch the result in 'pencil colour'."
				],
				answer: "FUNCTION \"get pencil colour\"\n  RETURN \"red\"\nEND FUNCTION\n\nSET \"pencil colour\" = \"get pencil colour\"\nPRINT \"The pencil colour is \", \"pencil colour\""
			},
			// EXERCISE 2: Tray Counts 📥
			"2-part-a": {
				hints: [
					"FUNCTION 'get tray count' should RETURN 10.",
					"SET 'tray count' to the result of 'get tray count'.",
					"PRINT 'There are ', tray count, ' trays in the classroom'."
				],
				answer: "FUNCTION \"get tray count\"\n  RETURN 10\nEND FUNCTION\n\nSET \"tray count\" = \"get tray count\"\nPRINT \"There are \", \"tray count\", \" trays in the classroom\""
			},
			"2-part-b": {
				hints: [
					"Update the function to RETURN 15.",
					"Call the function and store it in 'tray count' before printing."
				],
				answer: "FUNCTION \"get tray count\"\n  RETURN 15\nEND FUNCTION\n\nSET \"tray count\" = \"get tray count\"\nPRINT \"There are \", \"tray count\", \" trays in the classroom\""
			},
			// EXERCISE 3: Supply Parameters ✂️
			"3-part-a": {
				hints: [
					"FUNCTION 'get supply' needs a parameter: 'supply name'.",
					"Inside, RETURN 'supply name'.",
					"Call it with 'ruler', then call it with 'scissors'."
				],
				answer: "FUNCTION \"get supply\"(\"supply name\")\n  RETURN \"supply name\"\nEND FUNCTION\n\nSET \"my supply\" = \"get supply\"(\"ruler\")\nPRINT \"my supply\"\nSET \"my supply\" = \"get supply\"(\"scissors\")\nPRINT \"my supply\""
			},
			"3-part-b": {
				hints: [
					"Call 'get supply' with 'glue stick', then with 'paint brush'.",
					"PRINT 'My supply is ' followed by the variable each time."
				],
				answer: "FUNCTION \"get supply\"(\"supply name\")\n  RETURN \"supply name\"\nEND FUNCTION\n\nSET \"my supply\" = \"get supply\"(\"glue stick\")\nPRINT \"My supply is \", \"my supply\"\nSET \"my supply\" = \"get supply\"(\"paint brush\")\nPRINT \"My supply is \", \"my supply\""
			},
			// EXERCISE 4: Cupboard Labels 🏷️
			"4-part-a": {
				hints: [
					"FUNCTION 'get cupboard label' takes 'cupboard number'.",
					"RETURN the 'cupboard number' as the label.",
					"Call it with 1 and 2, catching the result in 'my label'."
				],
				answer: "FUNCTION \"get cupboard label\"(\"cupboard number\")\n  RETURN \"cupboard number\"\nEND FUNCTION\n\nSET \"my label\" = \"get cupboard label\"(1)\nPRINT \"my label\"\nSET \"my label\" = \"get cupboard label\"(2)\nPRINT \"my label\""
			},
			"4-part-b": {
				hints: [
					"Call the same function with 3 and then with 4.",
					"Catch each result in 'my label' and PRINT it."
				],
				answer: "FUNCTION \"get cupboard label\"(\"cupboard number\")\n  RETURN \"cupboard number\"\nEND FUNCTION\n\nSET \"my label\" = \"get cupboard label\"(3)\nPRINT \"my label\"\nSET \"my label\" = \"get cupboard label\"(4)\nPRINT \"my label\""
			},
			// EXERCISE 5: Classroom Supplies 🏫
			"5-part-a": {
				hints: [
					"SET 'classroom name' to 'Room 3'.",
					"Define 'check supply' to return its parameter.",
					"Call it with 'pencil' and 'ruler' while printing the classroom name."
				],
				answer: "SET \"classroom name\" = \"Room 3\"\nFUNCTION \"check supply\"(\"supply name\")\n  RETURN \"supply name\"\nEND FUNCTION\n\nPRINT \"classroom name\", \"check supply\"(\"pencil\")\nPRINT \"classroom name\", \"check supply\"(\"ruler\")"
			},
			"5-part-b": {
				hints: [
					"Change 'classroom name' to 'Room 5'.",
					"Call 'check supply' with 'scissors' and 'glue stick'.",
					"Output both the classroom and the returned supply."
				],
				answer: "SET \"classroom name\" = \"Room 5\"\nFUNCTION \"check supply\"(\"supply name\")\n  RETURN \"supply name\"\nEND FUNCTION\n\nPRINT \"classroom name\", \"check supply\"(\"scissors\")\nPRINT \"classroom name\", \"check supply\"(\"glue stick\")"
			}
		}, // end module 7 functions part 2 





		// module 7 functions part 3
		functions3: {
			// EXERCISE 1: Flavour Bags Calculation 🍬
			// (Note: The HTML starts by teaching the logic before wrapping it in functions in later exercises)
			"1-part-a": {
				hints: [
					"Set 'bags' to 10 and 'flavours' to 3.",
					"Multiply them to find the total.",
					"PRINT 'Flavour bags needed' and the result."
				],
				answer: "SET \"bags\" = 10\nSET \"flavours\" = 3\nSET \"total\" = \"bags\" * \"flavours\"\nSET \"my total\" = \"total\"\nPRINT \"Flavour bags needed \", \"my total\""
			},
			"1-part-b": {
				hints: [
					"Set 'bags' to 20 and 'flavours' to 4.",
					"Calculate the total and PRINT the result."
				],
				answer: "SET bags = 20\nSET flavours = 4\nSET total = bags * flavours\nPRINT \"Flavour bags needed \", total"
			},
			// EXERCISE 2: Sugar Packets Remaining 🍚
			"2-part-a": {
				hints: [
					"Define a FUNCTION 'sugar remaining' with parameters 'started with' and 'used'.",
					"Subtract 'used' from 'started with' and RETURN the result.",
					"Call the function with 50 and 15."
				],
				answer: "FUNCTION \"sugar remaining\"(\"started with\", \"used\")\n  SET \"remaining\" = \"started with\" - \"used\"\n  RETURN \"remaining\"\nEND FUNCTION\n\nPRINT \"Sugar packets remaining: \", \"sugar remaining\"(50, 15)"
			},
			"2-part-b": {
				hints: [
					"Use the 'sugar remaining' function with 100 and 35.",
					"PRINT the result of the function call."
				],
				answer: "FUNCTION \"sugar remaining\"(\"started with\", \"used\")\n  SET \"remaining\" = \"started with\" - \"used\"\n  RETURN \"remaining\"\nEND FUNCTION\n\nPRINT \"Sugar packets remaining: \", \"sugar remaining\"(100, 35)"
			},
			// EXERCISE 3: Ingredient Portions 🧂
			"3-part-a": {
				hints: [
					"Define 'get portions' with 'batch size' and 'portions'.",
					"RETURN the result of multiplying the two parameters.",
					"Call it with 5 and 4."
				],
				answer: "FUNCTION \"get portions\"(\"batch size\", \"portions\")\n  RETURN \"batch size\" * \"portions\"\nEND FUNCTION\n\nPRINT \"Total portions needed: \", \"get portions\"(5, 4)"
			},
			"3-part-b": {
				hints: [
					"Call 'get portions' with (10, 6) and (12, 2).",
					"Catch the results in 'my total' and PRINT."
				],
				answer: "FUNCTION \"get portions\"(\"batch size\", \"portions\")\n  RETURN \"batch size\" * \"portions\"\nEND FUNCTION\n\nSET \"my total\" = \"get portions\"(10, 6)\nPRINT \"Total portions: \", \"my total\"\nSET \"my total\" = \"get portions\"(12, 2)\nPRINT \"Total portions: \", \"my total\""
			},
			// EXERCISE 4: Oil Container Check 🛢️
			"4-part-a": {
				hints: [
					"Define 'oil remaining' to take 'starting amount' and 'amount used'.",
					"Calculate the difference and RETURN it.",
					"Call with 100 and 40."
				],
				answer: "FUNCTION \"oil remaining\"(\"starting amount\", \"amount used\")\n  SET \"remaining\" = \"starting amount\" - \"amount used\"\n  RETURN \"remaining\"\nEND FUNCTION\n\nPRINT \"Oil containers remaining: \", \"oil remaining\"(100, 40)"
			},
			"4-part-b": {
				hints: [
					"Call 'oil remaining' with (200, 75) and (150, 60).",
					"Store in 'first remaining' and 'second remaining' then PRINT."
				],
				answer: "FUNCTION \"oil remaining\"(\"starting amount\", \"amount used\")\n  SET \"remaining\" = \"starting amount\" - \"amount used\"\n  RETURN \"remaining\"\nEND FUNCTION\n\nSET \"first remaining\" = \"oil remaining\"(200, 75)\nSET \"second remaining\" = \"oil remaining\"(150, 60)\nPRINT \"First batch remaining: \", \"first remaining\"\nPRINT \"Second batch remaining: \", \"second remaining\""
			},
			// EXERCISE 5: The Full Production Count 🌟
			"5-part-a": {
				hints: [
					"Define 'production count' to multiply 'batch size' and 'portions'.",
					"RETURN the total.",
					"Call with 10/3 and 20/5, printing 'factory name' each time."
				],
				answer: "SET \"factory name\" = \"Poppy's Factory\"\nFUNCTION \"production count\"(\"batch size\", \"portions\")\n  SET \"total\" = \"batch size\" * \"portions\"\n  RETURN \"total\"\nEND FUNCTION\n\nSET \"my total\" = \"production count\"(10, 3)\nPRINT \"factory name\", \" \", \"my total\"\nSET \"my total\" = \"production count\"(20, 5)\nPRINT \"factory name\", \" \", \"my total\""
			},
			"5-part-b": {
				hints: [
					"Use the 'production count' function with 15/4 and 25/2.",
					"PRINT 'Poppy's Factory' with the returned values."
				],
				answer: "SET \"factory name\" = \"Poppy's Factory\"\nFUNCTION \"production count\"(\"batch size\", \"portions\")\n  SET \"total\" = \"batch size\" * \"portions\"\n  RETURN \"total\"\nEND FUNCTION\n\nPRINT \"factory name\", \" \", \"production count\"(15, 4)\nPRINT \"factory name\", \" \", \"production count\"(25, 2)"
			} 
		}, // end module 7 functions part 3





		// end module 7 functions part 4
		functions4: {
			// EXERCISE 1: Goggles Check 🥽
			"1-part-a": {
				hints: [
					"SET 'goggles ready' to 'yes'.",
					"Inside the FUNCTION, use IF to check if 'goggles ready' equals 'yes'.",
					"RETURN 'Goggles are ready!' or 'Goggles are missing!'."
				],
				answer: "SET \"goggles ready\" = \"yes\"\n\nFUNCTION \"check goggles\"\n  IF \"goggles ready\" = \"yes\" THEN\n    RETURN \"Goggles are ready!\"\n  ELSE\n    RETURN \"Goggles are missing!\"\n  END IF\nEND FUNCTION\n\nPRINT \"Goggles check: \", \"check goggles\"()"
			},
			"1-part-b": {
				hints: [
					"Change 'goggles ready' to 'no'.",
					"The function logic remains the same, but the output will change."
				],
				answer: "SET \"goggles ready\" = \"no\"\n\nFUNCTION \"check goggles\"\n  IF \"goggles ready\" = \"yes\" THEN\n    RETURN \"Goggles are ready!\"\n  ELSE\n    RETURN \"Goggles are missing!\"\n  END IF\nEND FUNCTION\n\nPRINT \"Goggles check: \", \"check goggles\"()"
			},
			// EXERCISE 2: Gloves Check 🧤
			"2-part-a": {
				hints: [
					"Define 'check gloves'.",
					"Return the ready message if 'gloves ready' is 'yes'.",
					"Catch the function result in 'my check' and PRINT it."
				],
				answer: "SET \"gloves ready\" = \"yes\"\n\nFUNCTION \"check gloves\"\n  IF \"gloves ready\" = \"yes\" THEN\n    RETURN \"Gloves are ready!\"\n  ELSE\n    RETURN \"Gloves are missing!\"\n  END IF\nEND FUNCTION\n\nSET \"my check\" = \"check gloves\"()\nPRINT \"my check\""
			},
			"2-part-b": {
				hints: [
					"Change 'gloves ready' to 'no'.",
					"PRINT the result of 'check gloves' to see the 'missing' message."
				],
				answer: "SET \"gloves ready\" = \"no\"\n\nFUNCTION \"check gloves\"\n  IF \"gloves ready\" = \"yes\" THEN\n    RETURN \"Gloves are ready!\"\n  ELSE\n    RETURN \"Gloves are missing!\"\n  END IF\nEND FUNCTION\n\nPRINT \"Gloves check: \", \"check gloves\"()"
			},
			// EXERCISE 3: Bag Count Logic 🛍️
			"3-part-a": {
				hints: [
					"FUNCTION 'check bag count' takes 'bag count' as a parameter.",
					"Check if 'bag count' > 5.",
					"Call it once with 10 and once with 3."
				],
				answer: "FUNCTION \"check bag count\"(\"bag count\")\n  IF \"bag count\" > 5 THEN\n    RETURN \"Safe to proceed!\"\n  ELSE\n    RETURN \"Not enough bags!\"\n  END IF\nEND FUNCTION\n\nPRINT \"Result 1: \", \"check bag count\"(10)\nPRINT \"Result 2: \", \"check bag count\"(3)"
			},
			"3-part-b": {
				hints: [
					"Create variables for 'first bag count' (8) and 'second bag count' (2).",
					"Call the function using these variables."
				],
				answer: "FUNCTION \"check bag count\"(\"bag count\")\n  IF \"bag count\" > 5 THEN\n    RETURN \"Safe to proceed!\"\n  ELSE\n    RETURN \"Not enough bags!\"\n  END IF\nEND FUNCTION\n\nSET \"first bag count\" = 8\nSET \"second bag count\" = 2\nPRINT \"First check: \", \"check bag count\"(\"first bag count\")\nPRINT \"Second check: \", \"check bag count\"(\"second bag count\")"
			},
			// EXERCISE 4: Worker Status 👷
			"4-part-a": {
				hints: [
					"Define 'check worker' with 'worker status' parameter.",
					"Check if status equals 'ready'.",
					"Call with 'ready' and then 'not ready'."
				],
				answer: "FUNCTION \"check worker\"(\"worker status\")\n  IF \"worker status\" = \"ready\" THEN\n    RETURN \"Worker can enter!\"\n  ELSE\n    RETURN \"Worker is not ready!\"\n  END IF\nEND FUNCTION\n\nPRINT \"check worker\"(\"ready\")\nPRINT \"check worker\"(\"not ready\")"
			},
			"4-part-b": {
				hints: [
					"SET 'worker status' to 'ready', then call the function.",
					"SET it to 'not ready', and call it again."
				],
				answer: "FUNCTION \"check worker\"(\"worker status\")\n  IF \"worker status\" = \"ready\" THEN\n    RETURN \"Worker can enter!\"\n  ELSE\n    RETURN \"Worker is not ready!\"\n  END IF\nEND FUNCTION\n\nSET \"worker status\" = \"ready\"\nPRINT \"check worker\"(\"worker status\")\nSET \"worker status\" = \"not ready\"\nPRINT \"check worker\"(\"worker status\")"
			},
			// EXERCISE 5: Safety Report 📋
			"5-part-a": {
				hints: [
					"Create 'safety report' to check if 'bag count' > 5.",
					"PRINT 'Poppy's Factory' and the result of calling with 10 and 3."
				],
				answer: "SET \"factory name\" = \"Poppy's Factory\"\n\nFUNCTION \"safety report\"(\"bag count\")\n  IF \"bag count\" > 5 THEN\n    RETURN \"Safe to proceed!\"\n  ELSE\n    RETURN \"Not enough bags!\"\n  END IF\nEND FUNCTION\n\nPRINT \"factory name\", \" \", \"safety report\"(10)\nPRINT \"factory name\", \" \", \"safety report\"(3)"
			},
			"5-part-b": {
				hints: [
					"Store the function result in 'my report'.",
					"Call with 8, then call with 2, printing each time."
				],
				answer: "SET \"factory name\" = \"Poppy's Factory\"\n\nFUNCTION \"safety report\"(\"bag count\")\n  IF \"bag count\" > 5 THEN\n    RETURN \"Safe to proceed!\"\n  ELSE\n    RETURN \"Not enough bags!\"\n  END IF\nEND FUNCTION\n\nSET \"bag count\" = 8\nSET \"my report\" = \"safety report\"(\"bag count\")\nPRINT \"factory name\", \" \", \"my report\"\n\nSET \"bag count\" = 2\nSET \"my report\" = \"safety report\"(\"bag count\")\nPRINT \"factory name\", \" \", \"my report\""
			}
		}, // end module 7 functions part 4





		 // module 7 functions part 5
		 functions5: {
			// EXERCISE 1: Batch Counting Loop 🔄
			"1-part-a": {
				hints: [
					"Define 'count bags' to RETURN 10.",
					"SET 'bag count' to the result of calling the function.",
					"PRINT the message with 'bag count'."
				],
				answer: "FUNCTION \"count bags\"\n  RETURN 10\nEND FUNCTION\n\nSET \"bag count\" = \"count bags\"()\nPRINT \"Bags in this batch: \", \"bag count\""
			},
			"1-part-b": {
				hints: [
					"Define 'count bags' to RETURN 15.",
					"Use a LOOP that runs 3 times.",
					"Inside the loop, call the function and PRINT the result."
				],
				answer: "FUNCTION \"count bags\"\n  RETURN 15\nEND FUNCTION\n\nLOOP 3 TIMES\n  SET \"bag count\" = \"count bags\"()\n  PRINT \"Bags in this batch: \", \"bag count\"\nEND LOOP"
			},
			// EXERCISE 2: Butter Calculation Loop 🧈
			"2-part-a": {
				hints: [
					"Inside a LOOP of 4, SET 'butter used' to 5.",
					"Calculate 'total' as 'butter used' * 2.",
					"PRINT the total each time."
				],
				answer: "LOOP 4 TIMES\n  SET \"butter used\" = 5\n  SET \"total\" = \"butter used\" * 2\n  PRINT \"Total butter used this batch: \", \"total\"\nEND LOOP"
			},
			"2-part-b": {
				hints: [
					"Repeat the loop 4 times but use 8 for 'butter used'.",
					"PRINT the 'total' butter used."
				],
				answer: "LOOP 4 TIMES\n  SET \"butter used\" = 8\n  SET \"total\" = \"butter used\" * 2\n  PRINT \"Total butter used this batch: \", \"total\"\nEND LOOP"
			},
			// EXERCISE 3: Flavour List Check 👅
			"3-part-a": {
				hints: [
					"FUNCTION 'check flavour' takes 'flavour' as a parameter.",
					"Inside, PRINT a message including the 'flavour'.",
					"Loop through 'butter', 'cheese', and 'salt' to call the function."
				],
				answer: "FUNCTION \"check flavour\"(\"flavour\")\n  PRINT \"Checking flavour: \", \"flavour\"\nEND FUNCTION\n\nFOR EACH \"flavour\" IN [\"butter\", \"cheese\", \"salt\"]\n  \"check flavour\"(\"flavour\")\nEND FOR"
			},
			"3-part-b": {
				hints: [
					"SET 'flavour list' to ['caramel', 'chilli', 'toffee'].",
					"Loop through the list and call 'check flavour' for each item."
				],
				answer: "FUNCTION \"check flavour\"(\"flavour\")\n  RETURN \"Checking flavour: \" + \"flavour\"\nEND FUNCTION\n\nSET \"flavour list\" = [\"caramel\", \"chilli\", \"toffee\"]\nFOR EACH \"f\" IN \"flavour-list\"\n  PRINT \"check flavour\"(\"f\")\nEND FOR"
			},
			// EXERCISE 4: Batch Safety Loop 🛡️
			"4-part-a": {
				hints: [
					"FUNCTION 'batch safety check' checks if 'bag count' > 5.",
					"RETURN 'Safe to proceed!' or 'Not enough bags!'.",
					"Call the function in a loop with values 12, 3, and 8."
				],
				answer: "FUNCTION \"batch safety check\"(\"bag count\")\n  IF \"bag count\" > 5 THEN\n    RETURN \"Safe to proceed!\"\n  ELSE\n    RETURN \"Not enough bags!\"\n  END IF\nEND FUNCTION\n\nFOR EACH \"count\" IN [12, 3, 8]\n  PRINT \"check: \", \"batch safety check\"(\"count\")\nEND FOR"
			},
			"4-part-b": {
				hints: [
					"Loop through bag counts 15, 2, and 10.",
					"Call 'batch safety check' and PRINT the result for each."
				],
				answer: "FUNCTION \"batch safety check\"(\"bag count\")\n  IF \"bag count\" > 5 THEN\n    RETURN \"Safe to proceed!\"\n  ELSE\n    RETURN \"Not enough bags!\"\n  END IF\nEND FUNCTION\n\nFOR EACH \"count\" IN [15, 2, 10]\n  PRINT \"Batch result: \", \"batch safety check\"(\"count\")\nEND FOR"
			},
			// EXERCISE 5: Production Report 📋
			"5-part-a": {
				hints: [
					"FUNCTION 'production report' takes 'flavour' and 'bag count'.",
					"If count > 5, return 'Ready!', otherwise 'Not enough bags!'.",
					"Loop through the three specific pairs of data."
				],
				answer: "SET \"factory name\" = \"Poppy's Factory\"\n\nFUNCTION \"production report\"(\"flavour\", \"bag count\")\n  IF \"bag count\" > 5 THEN\n    RETURN \"flavour\" + \" — Ready!\"\n  ELSE\n    RETURN \"flavour\" + \" — Not enough bags!\"\n  END IF\nEND FUNCTION\n\nPRINT \"factory name\", \" \", \"production report\"(\"butter\", 12)\nPRINT \"factory name\", \" \", \"production report\"(\"cheese\", 3)\nPRINT \"factory name\", \" \", \"production report\"(\"salt\", 8)"
			},
			"5-part-b": {
				hints: [
					"Use the same 'production report' function.",
					"Call it inside a loop three times with the given data and PRINT the factory name."
				],
				answer: "SET \"factory name\" = \"Poppy's Factory\"\n\nFUNCTION \"production report\"(\"flavour\", \"bag count\")\n  IF \"bag count\" > 5 THEN\n    RETURN \"flavour\" + \" — Ready!\"\n  ELSE\n    RETURN \"flavour\" + \" — Not enough bags!\"\n  END IF\nEND FUNCTION\n\n// Note: Assuming a list of objects or parallel arrays for the loop\nPRINT \"factory name\", \" \", \"production report\"(\"butter\", 12)\nPRINT \"factory name\", \" \", \"production report\"(\"cheese\", 3)\nPRINT \"factory name\", \" \", \"production report\"(\"salt\", 8)"
			}
		}, // end module 7 functions part 5





		// module 7 functions part 6
		functions6: {
			// EXERCISE 1: Simple Order Taking ☕
			"1-part-a": {
				hints: [
					"Define 'take order' with 'customer name' and 'drink' parameters.",
					"RETURN the two values joined together.",
					"Call it with 'Marivic' and 'The Butter Blast'."
				],
				answer: "FUNCTION \"take order\"(\"customer name\", \"drink\")\n  RETURN \"customer name\" + \" — \" + \"drink\"\nEND FUNCTION\n\nSET \"customerName\" = \"Marivic\"\nSET \"drink\" = \"The Butter Blast\"\nSET \"order\" = \"take order\"(\"customerName\", \"drink\")\nPRINT \"Order: \", \"order\""
			},
			"1-part-b": {
				hints: [
					"Set variables for Gabrielle and The Caramel Crunch.",
					"PRINT the order using the variables."
				],
				answer: "SET \"customerName\" = \"Gabrielle\"\nSET \"drink\" = \"The Caramel Crunch\"\nPRINT \"Order: \", \"customerName\", \" — \", \"drink\""
			},
			// EXERCISE 2: Adding Size and Price 💰
			"2-part-a": {
				hints: [
					"Create a function that uses 'small price' (3) and 'large price' (4).",
					"PRINT the complete order details including the price."
				],
				answer: "FUNCTION \"take order\"(\"name\", \"drink\", \"size\")\n  SET \"small price\" = 3\n  SET \"large price\" = 4\n  IF \"size\" = \"small\" THEN\n    RETURN \"name\" + \" — \" + \"drink\" + \" — Price: 3\"\n  ELSE\n    RETURN \"name\" + \" — \" + \"drink\" + \" — Price: 4\"\n  END IF\nEND FUNCTION\n\nPRINT \"take order\"(\"Marivic\", \"The Butter Blast\", \"large\")"
			},
			"2-part-b": {
				hints: [
					"Call 'take order' for Ellaine with a 'small' 'The Kernel Kicker'.",
					"PRINT the result."
				],
				answer: "SET \"customer name\" = \"Ellaine\"\nSET \"drink\" = \"The Kernel Kicker\"\nSET \"size\" = \"small\"\nPRINT \"take order\"(\"customer name\", \"drink\", \"size\")"
			},
			// EXERCISE 3: Drink Availability Check ✅
			"3-part-a": {
				hints: [
					"FUNCTION 'check order' uses an 'available' variable.",
					"If 'yes', return confirmation. If 'no', return sorry message.",
					"Call for Marivic with The Toffee Pop."
				],
				answer: "FUNCTION \"check order\"(\"customer name\", \"drink\")\n  SET \"available\" = \"yes\"\n  IF \"available\" = \"yes\" THEN\n    RETURN \"Order confirmed: \" + \"customer name\" + \" — \" + \"drink\" + \" — ready shortly!\"\n  ELSE\n    RETURN \"Sorry, \" + \"drink\" + \" is not available.\"\n  END IF\nEND FUNCTION\n\nSET \"result\" = \"check order\"(\"Marivic\", \"The Toffee Pop\")\nPRINT \"result\""
			},
			"3-part-b": {
				hints: [
					"Set 'available' to 'no' inside the function.",
					"Call it for Gabrielle and The Cheese Whip."
				],
				answer: "FUNCTION \"check order\"(\"customer name\", \"drink\")\n  SET \"available\" = \"no\"\n  IF \"available\" = \"yes\" THEN\n    RETURN \"Order confirmed: \" + \"customer name\" + \" — \" + \"drink\"\n  ELSE\n    RETURN \"Sorry, \" + \"customer name\" + \". \" + \"drink\" + \" is out of stock.\"\n  END IF\nEND FUNCTION\n\nPRINT \"check order\"(\"Gabrielle\", \"The Cheese Whip\")"
			},
			// EXERCISE 4: Serving Multiple Customers 🏃
			"4-part-a": {
				hints: [
					"Create 'serve customer' function.",
					"Call it four times for Marivic, Gabrielle, Alec, and Ellaine."
				],
				answer: "FUNCTION \"serve customer\"(\"name\", \"drink\")\n  RETURN \"Served: \" + \"name\" + \" — \" + \"drink\"\nEND FUNCTION\n\nPRINT \"serve customer\"(\"Marivic\", \"The Chilli Fizz\")\nPRINT \"serve customer\"(\"Gabrielle\", \"The Butter Blast\")\nPRINT \"serve customer\"(\"Alec\", \"The Toffee Pop\")\nPRINT \"serve customer\"(\"Ellaine\", \"The Cheese Whip\")"
			},
			"4-part-b": {
				hints: [
					"Call 'serve customer' specifically for Marivic with 'The Butter Blast'.",
					"PRINT the result."
				],
				answer: "SET \"drink\" = \"The Butter Blast\"\nPRINT \"serve customer\"(\"Marivic\", \"drink\")"
			},
			// EXERCISE 5: The Final Cafe Report 📝
			"5-part-a": {
				hints: [
					"FUNCTION 'fullOrder' takes name, drink, and size.",
					"Include 'cafeName' (The Popcorn Press) in the output.",
					"Process all four customers."
				],
				answer: "SET \"cafeName\" = \"The Popcorn Press\"\n\nFUNCTION \"fullOrder\"(\"customerName\", \"drink\", \"size\")\n  PRINT \"cafeName\", \": \", \"customerName\", \" — \", \"drink\", \" (\", \"size\", \")\"\nEND FUNCTION\n\n\"fullOrder\"(\"Marivic\", \"The Butter Blast\", \"large\")\n\"fullOrder\"(\"Gabrielle\", \"The Caramel Crunch\", \"small\")\n\"fullOrder\"(\"Alec\", \"The Toffee Pop\", \"large\")\n\"fullOrder\"(\"Ellaine\", \"The Cheese Whip\", \"small\")"
			},
			"5-part-b": {
				hints: [
					"Use 'full order' to process the final four customers.",
					"Make sure the 'cafe name' is displayed each time."
				],
				answer: "SET \"cafe name\" = \"The Popcorn Press\"\n\nFUNCTION \"full order\"(\"name\", \"drink\", \"size\")\n  RETURN \"cafe name\" + \": \" + \"name\" + \" — \" + \"drink\" + \" (\" + \"size\" + \")\"\nEND FUNCTION\n\nPRINT \"full order\"(\"Marivic\", \"The Factory Frost\", \"small\")\nPRINT \"full order\"(\"Gabrielle\", \"The Kernel Kicker\", \"large\")\nPRINT \"full order\"(\"Alec\", \"The Toffee Pop\", \"small\")\nPRINT \"full order\"(\"Ellaine\", \"The Cheese Whip\", \"large\")"
			}
		}, // end module 7 functions part 6

		// module 7 functions part 1-6 completed 





		// module 8 arrays part 1
		arrays1: {
			// EXERCISE 1: Indexing Flavours and Machines 🔢
			"1-part-a": {
				hints: [
					"Create the list with square brackets [].",
					"Use [0] for the first item and [2] for the third.",
					"PRINT both values with their labels."
				],
				answer: "SET \"today's flavours\" = [\"Salted\", \"Sweet\", \"Spicy\", \"Toffee\", \"Cheese\"]\nSET \"first flavour\" = \"today's flavours\"[0]\nSET \"third flavour\" = \"today's flavours\"[2]\nPRINT \"First flavour: \", \"first flavour\", \"Third flavour: \", \"third flavour\""
			},
			"1-part-b": {
				hints: [
					"Access machine numbers at index [1] for the second and [4] for the last.",
					"PRINT labels for both machine numbers."
				],
				answer: "SET \"machine numbers\" = [1, 2, 3, 4, 5]\nSET \"second machine number\" = \"machine numbers\"[1]\nSET \"last machine number\" = \"machine numbers\"[4]\nPRINT \"Second machine: \", \"second machine number\", \", Last machine: \", \"last machine number\""
			},
			// EXERCISE 2: Managing Assistants (Add/Remove) 👥
			"2-part-a": {
				hints: [
					"Define the list of assistants.",
					"PRINT the initial list.",
					"Use REMOVE \"Tom\" FROM assistants."
				],
				answer: "SET \"assistants\" = [\"Ben\", \"Sara\", \"Tom\", \"Aisha\"]\nPRINT \"assistants\"\nREMOVE \"Tom\" FROM \"assistants\""
			},
			"2-part-b": {
				hints: [
					"Start with the new list of three names.",
					"REMOVE Aisha and then ADD Jake."
				],
				answer: "SET \"assistants\" = [\"Ben\", \"Sara\", \"Aisha\"]\nPRINT \"Current assistants: \", \"assistants\"\nREMOVE \"Aisha\" FROM \"assistants\"\nADD \"Jake\" TO \"assistants\""
			},
			// EXERCISE 3: Updating Ingredients 🧂
			"3-part-a": {
				hints: [
					"Start with the basic ingredients.",
					"Update the variable by setting it to a new list with Toffee Sauce and Cheese Powder."
				],
				answer: "SET \"ingredients\" = [\"Salt\", \"Sugar\", \"Chilli\", \"Butter\", \"Milk\"]\nSET \"ingredients\" = [\"Salt\", \"Sugar\", \"Chilli\", \"Toffee Sauce\", \"Cheese Powder\"]\nPRINT \"Updated ingredients: \", \"ingredients\""
			},
			"3-part-b": {
				hints: [
					"Update the list again to use more specific names like 'Sea Salt' and 'Hot Chilli Flakes'."
				],
				answer: "SET \"ingredients\" = [\"Salt\", \"Sugar\", \"Chilli\", \"Toffee Sauce\", \"Cheese Powder\"]\nSET \"ingredients\" = [\"Sea Salt\", \"Sugar\", \"Hot Chilli Flakes\", \"Toffee Sauce\", \"Cheese Powder\"]\nPRINT \"Refined ingredients: \", \"ingredients\""
			},
			// EXERCISE 4: Machine Status Loops 🔄
			"4-part-a": {
				hints: [
					"Create the 'ready machines' list.",
					"Use FOR EACH to loop through the list and print each machine name."
				],
				answer: "SET \"ready machines\" = [\"Machine 1\", \"Machine 2\", \"Machine 3\", \"Machine 4\"]\nSET \"machine name\" = \"Checking: \"\nFOR EACH \"m\" IN \"ready machines\"\n  PRINT \"machine name\", \"m\"\nEND FOR"
			},
			"4-part-b": {
				hints: [
					"Loop through the status list.",
					"Inside the loop, set 'status' to the current VALUE and PRINT it."
				],
				answer: "SET \"machine status\" = [\"Ready\", \"Not Ready\", \"Ready\", \"Ready\", \"Not Ready\"]\nFOR EACH \"val\" IN \"machine status\"\n  SET \"status\" = \"val\"\n  PRINT \"Status: \", \"status\"\nEND FOR"
			},
			// EXERCISE 5: Production Counts 📦
			"5-part-a": {
				hints: [
					"Use LENGTH OF \"boxes produced\" to get the total count.",
					"PRINT the result with the required label."
				],
				answer: "SET \"boxes produced\" = [12, 8, 15, 10, 9]\nSET \"total boxes\" = LENGTH OF \"boxes produced\"\nPRINT \"Total machines that produced today: \", \"total boxes\""
			},
			"5-part-b": {
				hints: [
					"Access index [0] for the first and [4] for the last.",
					"PRINT both production counts."
				],
				answer: "SET \"boxes produced\" = [12, 8, 15, 10, 9]\nSET \"first production count\" = \"boxes produced\"[0]\nSET \"last production count\" = \"boxes produced\"[4]\nPRINT \"First machine produced: \", \"first production count\"\nPRINT \"Last machine produced: \", \"last production count\""
			}
		}, // end module 8 arrays part 1




		// module 8 arrays part 2 
		arrays2: {
			// EXERCISE 1: Function to Count Flavours 🍦
			"1-part-a": {
				hints: [
					"Define the list of 6 flavours.",
					"Use LENGTH OF to get the size of the array.",
					"PRINT the result."
				],
				answer: "SET \"today's flavours\" = [\"Salted\", \"Sweet\", \"Spicy\", \"Toffee\", \"Cheese\", \"Butter\"]\nSET \"count\" = LENGTH OF \"today's flavours\"\nPRINT \"Total flavours today: \", \"count\""
			},
			"1-part-b": {
				hints: [
					"Create a FUNCTION that takes a list as a parameter.",
					"RETURN the LENGTH OF that list.",
					"Call it with 'limited flavours'."
				],
				answer: "SET \"limited flavours\" = [\"Salted\", \"Sweet\", \"Butter\"]\n\nFUNCTION \"count limited flavours\"(\"list\")\n  RETURN LENGTH OF \"list\"\nEND FUNCTION\n\nPRINT \"Limited menu has: \", \"count limited flavours\"(\"limited flavours\")"
			},
			// EXERCISE 2: First and Last IDs 🆔
			"2-part-a": {
				hints: [
					"In your function, item 0 is the first.",
					"The last item is at [LENGTH OF list - 1].",
					"Call it with your machine IDs list."
				],
				answer: "SET \"machine IDs\" = [101, 102, 103, 104, 105]\n\nFUNCTION \"get first and last\"(\"list\")\n  SET \"first\" = \"list\"[0]\n  SET \"lastIndex\" = (LENGTH OF \"list\") - 1\n  SET \"last\" = \"list\"[\"lastIndex\"]\n  RETURN [\"first\", \"last\"]\nEND FUNCTION\n\nSET \"result\" = \"get first and last\"(\"machine IDs\")\nPRINT \"First machine: \", \"result\"[0]\nPRINT \"Last machine: \", \"result\"[1]"
			},
			"2-part-b": {
				hints: [
					"The logic for 'first and last' is the same even for a shorter list.",
					"Use the same index subtraction to find the end of the array."
				],
				answer: "SET \"machine IDs\" = [201, 202, 203]\n\nFUNCTION \"get first and last v2\"(\"list\")\n  SET \"first\" = \"list\"[0]\n  SET \"lastPos\" = (LENGTH OF \"list\") - 1\n  RETURN [\"first\", \"list\"[\"lastPos\"]]\nEND FUNCTION\n\nSET \"output\" = \"get first and last v2\"(\"machine IDs\")\nPRINT \"First machine: \", \"output\"[0], \"Last machine: \", \"output\"[1]"
			},
			// EXERCISE 3: Ingredient Check (Empty vs Full) 🛒
			"3-part-a": {
				hints: [
					"Check if LENGTH OF list is greater than 0.",
					"If it has items, return a success message."
				],
				answer: "SET \"ingredients\" = [\"Salt\", \"Sugar\", \"Oil\"]\n\nFUNCTION \"check ingredients\"(\"list\")\n  IF (LENGTH OF \"list\") > 0 THEN\n    RETURN \"Ingredients are ready!\"\n  ELSE\n    RETURN \"Warning: No ingredients!\"\n  END IF\nEND FUNCTION\n\nPRINT \"check ingredients\"(\"ingredients\")"
			},
			"3-part-b": {
				hints: [
					"Pass an empty list [] to the function.",
					"The function should now return the 'Warning' or empty message."
				],
				answer: "SET \"ingredients\" = []\nPRINT \"check ingredients\"(\"ingredients\")"
			},
			// EXERCISE 4: Get Assistant by Position 👤
			"4-part-a": {
				hints: [
					"FUNCTION 'get assistant' should take the list and a position number.",
					"RETURN the item at that index."
				],
				answer: "SET \"assistants\" = [\"Ben\", \"Sara\", \"Tom\", \"Aisha\", \"Jake\"]\n\nFUNCTION \"get assistant\"(\"list\", \"pos\")\n  RETURN \"list\"[\"pos\"]\nEND FUNCTION\n\nSET \"position\" = 2\nPRINT \"Assistant at position \", \"position\", \": \", \"get assistant\"(\"assistants\", \"position\")"
			},
			"4-part-b": {
				hints: [
					"Change the position variable to 4.",
					"The result should be the 5th person in the list (Jake)."
				],
				answer: "SET \"position\" = 4\nPRINT \"Assistant at position \", \"position\", \": \", \"get assistant\"(\"assistants\", \"position\")"
			},
			// EXERCISE 5: Fixing Data (Updating Items) 🛠️
			"5-part-a": {
				hints: [
					"Inside the function, update the list at index [1] to 20.",
					"RETURN the whole list so you can see the change."
				],
				answer: "SET \"box counts\" = [12, 8, 15, 10, 9]\n\nFUNCTION \"fix box count\"(\"list\")\n  UPDATE \"list\"[1] = 20\n  RETURN \"list\"\nEND FUNCTION\n\nPRINT \"fix box count\"(\"box counts\")"
			},
			"5-part-b": {
				hints: [
					"This time, update index [3] to 25.",
					"Return the list and PRINT it."
				],
				answer: "SET \"box counts\" = [12, 8, 15, 10, 9]\n\nFUNCTION \"fix another box\"(\"list\")\n  UPDATE \"list\"[3] = 25\n  RETURN \"list\"\nEND FUNCTION\n\nPRINT \"Updated list: \", \"fix another box\"(\"box counts\")"
			}
		}, // end module 8 arrays part 2





		// module 8 arrays part 3
		arrays3: {
			// EXERCISE 1: Looping through Flavours 🍦
			"1-part-a": {
				hints: [
					"Set the 'flavours' variable with the list of 5 flavours.",
					"Use FOR EACH flavour IN flavours.",
					"Inside the loop, PRINT 'Flavour: ' followed by the variable."
				],
				answer: "SET \"flavours\" = [\"Salted\", \"Sweet\", \"Spicy\", \"Toffee\", \"Cheese\"]\nFOR EACH \"flavour\" IN \"flavours\"\n  PRINT \"Flavour: \", \"flavour\"\nEND FOR"
			},
			"1-part-b": {
				hints: [
					"Set 'flavours' to the new list: ['Butter', 'Caramel', 'Plain'].",
					"Loop through the list and PRINT each with 'Flavour:'."
				],
				answer: "SET \"flavours\" = [\"Butter\", \"Caramel\", \"Plain\"]\nFOR EACH \"flavour\" IN \"flavours\"\n  PRINT \"Flavour: \", \"flavour\"\nEND FOR"
			},
			// EXERCISE 2: Welcoming Assistants 👥
			"2-part-a": {
				hints: [
					"Create the 'assistants' list.",
					"Use a FOR EACH loop to PRINT the welcome message for each name."
				],
				answer: "SET \"assistants\" = [\"Ben\", \"Sara\", \"Tom\", \"Aisha\"]\nFOR EACH \"assistant\" IN \"assistants\"\n  PRINT \"Welcome to the factory: \", \"assistant\"\nEND FOR"
			},
			"2-part-b": {
				hints: [
					"Create the list for Jake, Mia, and Leo.",
					"Loop and PRINT 'Welcome to the factory:' followed by the name."
				],
				answer: "SET \"assistants\" = [\"Jake\", \"Mia\", \"Leo\"]\nFOR EACH \"assistant\" IN \"assistants\"\n  PRINT \"Welcome to the factory: \", \"assistant\"\nEND FOR"
			},
			// EXERCISE 3: Checking Machine Status ⚙️
			"3-part-a": {
				hints: [
					"Loop through the 'machine names' list.",
					"PRINT 'Checking: ' followed by the machine name."
				],
				answer: "SET \"machine names\" = [\"Popper 1\", \"Popper 2\", \"Popper 3\", \"Popper 4\"]\nFOR EACH \"machine\" IN \"machine names\"\n  PRINT \"Checking: \", \"machine\"\nEND FOR"
			},
			"3-part-b": {
				hints: [
					"Loop through 'machine statuses'.",
					"PRINT 'Status: ' followed by the current status."
				],
				answer: "SET \"machine statuses\" = [\"Ready\", \"Not Ready\", \"Ready\", \"Ready\"]\nFOR EACH \"status\" IN \"machine statuses\"\n  PRINT \"Status: \", \"status\"\nEND FOR"
			},
			// EXERCISE 4: Doubling Counts 🔢
			"4-part-a": {
				hints: [
					"Loop through 'box counts'.",
					"For each item, SET 'doubled' = count * 2.",
					"PRINT 'New count:' followed by 'doubled'."
				],
				answer: "SET \"box counts\" = [10, 20, 30, 40, 50]\nFOR EACH \"count\" IN \"box counts\"\n  SET \"doubled\" = \"count\" * 2\n  PRINT \"New count: \", \"doubled\"\nEND FOR"
			},
			"4-part-b": {
				hints: [
					"Loop through the list [2, 4, 6, 8, 10].",
					"SET 'doubled' to count * 2 and PRINT the result."
				],
				answer: "SET \"counts\" = [2, 4, 6, 8, 10]\nFOR EACH \"count\" IN \"counts\"\n  SET \"doubled\" = \"count\" * 2\n  PRINT \"New count: \", \"doubled\"\nEND FOR"
			},
			// EXERCISE 5: Building a Shopping List 🛒
			"5-part-a": {
				hints: [
					"Start with an empty list [].",
					"Use ADD for Corn, Oil, Salt, and Sugar.",
					"PRINT the final list."
				],
				answer: "SET \"shopping list\" = []\nADD \"Corn\" TO \"shopping list\"\nADD \"Oil\" TO \"shopping list\"\nADD \"Salt\" TO \"shopping list\"\nADD \"Sugar\" TO \"shopping list\"\nPRINT \"shopping list\""
			},
			"5-part-b": {
				hints: [
					"Start with an empty list [].",
					"ADD Butter, Caramel, and Cheese Powder.",
					"PRINT the complete list."
				],
				answer: "SET \"shopping list\" = []\nADD \"Butter\" TO \"shopping list\"\nADD \"Caramel\" TO \"shopping list\"\nADD \"Cheese Powder\" TO \"shopping list\"\nPRINT \"shopping list\""
			}
		}, // end module 8 arrays part 3





		// module 8 arrays part 4
		arrays4: {
			// EXERCISE 1: Filtering Bag Counts 🎒
			"1-part-a": {
				hints: [
					"Define 'bag counts' as a list of numbers.",
					"Use FOR EACH to loop through 'bag counts'.",
					"Inside the loop, check IF 'bag count' > 50."
				],
				answer: "SET \"bag counts\" = [45, 62, 38, 71, 55, 49]\nFOR EACH \"bag count\" IN \"bag counts\"\n  IF \"bag count\" > 50 THEN\n    PRINT \"High score: \", \"bag count\"\n  END IF\nEND FOR"
			},
			"1-part-b": {
				hints: [
					"Use the list [80, 42, 67, 53, 39, 91].",
					"Loop and check IF the count is greater than 50.",
					"PRINT 'High score:' for every match."
				],
				answer: "SET \"bag counts\" = [80, 42, 67, 53, 39, 91]\nFOR EACH \"bag count\" IN \"bag counts\"\n  IF \"bag count\" > 50 THEN\n    PRINT \"High score: \", \"bag count\"\n  END IF\nEND FOR"
			},
			// EXERCISE 2: Checking the Leader 👤
			"2-part-a": {
				hints: [
					"Access position 0 of the 'assistants' list.",
					"Check if that value is EQUAL TO 'Ben'.",
					"If true, PRINT the leader message."
				],
				answer: "SET \"assistants\" = [\"Ben\", \"Sara\", \"Tom\", \"Aisha\"]\nIF \"assistants\"[0] == \"Ben\" THEN\n  PRINT \"Ben is team leader today!\"\nEND IF"
			},
			"2-part-b": {
				hints: [
					"Set assistants to [\"Jake\", \"Sara\", \"Tom\", \"Aisha\"].",
					"Check if index [0] is 'Ben'.",
					"Since it isn't, handle the negative check and PRINT 'Ben is not here today.'."
				],
				answer: "SET \"assistants\" = [\"Jake\", \"Sara\", \"Tom\", \"Aisha\"]\nIF \"assistants\"[0] == \"Ben\" THEN\n  PRINT \"Ben is team leader today!\"\nELSE\n  PRINT \"Ben is not here today.\"\nEND IF"
			},
			// EXERCISE 3: Counting Ready Machines ⚙️
			"3-part-a": {
				hints: [
					"Start 'ready count' at 0.",
					"Loop through machine statuses.",
					"If status is 'Ready', add 1 to your count."
				],
				answer: "SET \"ready count\" = 0\nFOR EACH \"status\" IN \"machine statuses\"\n  IF \"status\" == \"Ready\" THEN\n    SET \"ready count\" = \"ready count\" + 1\n  END IF\nEND FOR\nPRINT \"Ready machines: \", \"ready count\""
			},
			"3-part-b": {
				hints: [
					"Initialize your counter variable first.",
					"Use the FOR EACH loop to iterate and increment the counter.",
					"PRINT the final result after the loop ends."
				],
				answer: "SET \"ready count\" = 0\nFOR EACH \"status\" IN \"machine statuses\"\n  IF \"status\" == \"Ready\" THEN\n    SET \"ready count\" = \"ready count\" + 1\n  END IF\nEND FOR\nPRINT \"Ready machines: \", \"ready count\""
			},
			// EXERCISE 4: Stock Warnings ⚠️
			"4-part-a": {
				hints: [
					"Loop through 'ingredient stocks'.",
					"Check IF the stock number <= 10.",
					"PRINT the warning message including the stock count."
				],
				answer: "SET \"ingredient stocks\" = [25, 8, 30, 5, 12, 3]\nFOR EACH \"stock\" IN \"ingredient stocks\"\n  IF \"stock\" <= 10 THEN\n    PRINT \"Warning: Low ingredient — \", \"stock\"\n  END IF\nEND FOR"
			},
			"4-part-b": {
				hints: [
					"Use the new stock list [15, 4, 22, 9, 7].",
					"Loop and check for values less than or equal to 10.",
					"PRINT the warnings."
				],
				answer: "SET \"ingredient stocks\" = [15, 4, 22, 9, 7]\nFOR EACH \"stock\" IN \"ingredient stocks\"\n  IF \"stock\" <= 10 THEN\n    PRINT \"Warning: Low ingredient — \", \"stock\"\n  END IF\nEND FOR"
			},
			// EXERCISE 5: Collecting High Numbers ⭐
			"5-part-a": {
				hints: [
					"Create 'high numbers' as an empty list [].",
					"If a production number is > 50, ADD it to 'high numbers'.",
					"PRINT 'High numbers: ' followed by the new list."
				],
				answer: "SET \"production numbers\" = [45, 62, 38, 71, 55, 49, 88, 33]\nSET \"high numbers\" = []\nFOR EACH \"num\" IN \"production numbers\"\n  IF \"num\" > 50 THEN\n    ADD \"num\" TO \"high numbers\"\n  END IF\nEND FOR\nPRINT \"High numbers: \", \"high numbers\""
			},
			"5-part-b": {
				hints: [
					"Initialize the empty list 'high numbers'.",
					"Loop through the production list and filter numbers > 50.",
					"Use ADD to populate the new list."
				],
				answer: "SET \"production numbers\" = [52, 48, 67, 44, 91, 39, 60]\nSET \"high numbers\" = []\nFOR EACH \"num\" IN \"production numbers\"\n  IF \"num\" > 50 THEN\n    ADD \"num\" TO \"high numbers\"\n  END IF\nEND FOR\nPRINT \"high numbers\""
			}
		}, // end module 8 arrays part 4





		// module 8 arrays part 5
		arrays5: {
			// EXERCISE 1: Function to Greet Assistants 👥
			"1-part-a": {
				hints: [
					"Create the 'morning assistants' list first.",
					"Define 'greet assistants' to take one parameter.",
					"Use FOR EACH inside the function to PRINT each name."
				],
				answer: "SET \"morning assistants\" = [\"Ben\", \"Sara\", \"Tom\"]\nFUNCTION \"greet assistants\"(\"assistant list\")\n  FOR EACH \"assistant\" IN \"assistant list\"\n    PRINT \"Hello: \", \"assistant\"\n  END FOR\nEND FUNCTION\n\"greet assistants\"(\"morning assistants\")"
			},
			"1-part-b": {
				hints: [
					"Set the afternoon list.",
					"Call the function you already defined in Part A."
				],
				answer: "SET \"afternoon assistants\" = [\"Aisha\", \"Jake\", \"Mia\"]\n\"greet assistants\"(\"afternoon assistants\")"
			},
			// EXERCISE 2: Summing Box Counts 📦
			"2-part-a": {
				hints: [
					"Initialize 'sum' to 0.",
					"In the function, loop through 'counts' and add each value to 'sum'.",
					"Make sure to RETURN the final sum."
				],
				answer: "FUNCTION \"total boxes\"(\"counts\")\n  SET \"sum\" = 0\n  FOR EACH \"count\" IN \"counts\"\n    SET \"sum\" = \"sum\" + \"count\"\n  END FOR\n  RETURN \"sum\"\nEND FUNCTION"
			},
			"2-part-b": {
				hints: [
					"Create the 'production' list.",
					"Store the result of 'total boxes(production)' in a variable.",
					"PRINT the result with the required message."
				],
				answer: "SET \"production\" = [20, 18, 22, 16, 19]\nSET \"result\" = \"total boxes\"(\"production\")\nPRINT \"Total boxes produced: \", \"result\""
			},
			// EXERCISE 3: Mapping (Add Five) ➕
			"3-part-a": {
				hints: [
					"Define 'add five to each' to take a list.",
					"Create an empty list inside the function, add 5 to each item, and ADD to the new list.",
					"RETURN the new list."
				],
				answer: "SET \"current production\" = [10, 15, 8, 12, 20]\nFUNCTION \"add five to each\"(\"numbers\")\n  SET \"updated list\" = []\n  FOR EACH \"num\" IN \"numbers\"\n    ADD (\"num\" + 5) TO \"updated list\"\n  END FOR\n  RETURN \"updated list\"\nEND FUNCTION\nPRINT \"Function to add 5 to each number in the list: \", \"add five to each\"(\"current production\")"
			},
			"3-part-b": {
				hints: [
					"Set up the new production list.",
					"Call the function and store it in 'new list'.",
					"PRINT the result."
				],
				answer: "SET \"current production\" = [6, 9, 14, 11, 18]\nSET \"new list\" = \"add five to each\"(\"current production\")\nPRINT \"new list is now \", \"new list\""
			},
			// EXERCISE 4: Double List Mapping ✖️
			"4-part-a": {
				hints: [
					"Create 'double list' function.",
					"Loop through 'original', multiply by 2, and ADD to 'doubled list'.",
					"PRINT the starting message."
				],
				answer: "SET \"current production\" = [5, 10, 3, 8, 12]\nFUNCTION \"double list\"(\"original\")\n  SET \"doubled list\" = []\n  FOR EACH \"num\" IN \"original\"\n    ADD (\"num\" * 2) TO \"doubled list\"\n  END FOR\n  RETURN \"doubled list\"\nEND FUNCTION\nPRINT \"Double the current production: \"\nPRINT \"double list\"(\"current production\")"
			},
			"4-part-b": {
				hints: [
					"Use the new list [7, 14, 6, 9, 11].",
					"Call 'double list' and PRINT the returned values."
				],
				answer: "SET \"current production\" = [7, 14, 6, 9, 11]\nSET \"result\" = \"double list\"(\"current production\")\nPRINT \"result\""
			},
			// EXERCISE 5: Calculating the Average 📊
			"5-part-a": {
				hints: [
					"To find average, divide the 'total boxes' by the LENGTH OF the list.",
					"RETURN this calculation result."
				],
				answer: "FUNCTION \"calculate average\"(\"list\")\n  SET \"total\" = \"total boxes\"(\"list\")\n  SET \"average\" = \"total\" / (LENGTH OF \"list\")\n  RETURN \"average\"\nEND FUNCTION\nPRINT \"Average boxes per machine:\""
			},
			"5-part-b": {
				hints: [
					"Create the 'numbers' list.",
					"Call the average function and PRINT the result."
				],
				answer: "SET \"numbers\" = [8, 12, 10, 14, 16]\nSET \"final average\" = \"calculate average\"(\"numbers\")\nPRINT \"Average boxes per machine: \", \"final average\""
			}
		}, // module 8 arrays part 5





		// module 8 arrays part 6
		arrays6: {
			// EXERCISE 1: Counting High Quality Batches 🧪
			"1-part-a": {
				hints: [
					"Initialize 'high count' to 0.",
					"Loop through quality scores and check if each is > 85.",
					"If the condition is met, add 1 to your counter."
				],
				answer: "SET \"quality scores\" = [92, 78, 88, 95, 67, 89, 76]\nSET \"high count\" = 0\nFOR EACH \"score\" IN \"quality scores\"\n  IF \"score\" > 85 THEN\n    SET \"high count\" = \"high count\" + 1\n  END IF\nEND FOR\nPRINT \"Batches above 85: \", \"high count\""
			},
			"1-part-b": {
				hints: [
					"Use the same logic with the new list: [84, 91, 73, 86, 94, 68].",
					"Check for scores > 85 and increment your counter."
				],
				answer: "SET \"quality scores\" = [84, 91, 73, 86, 94, 68]\nSET \"high count\" = 0\nFOR EACH \"score\" IN \"quality scores\"\n  IF \"score\" > 85 THEN\n    SET \"high count\" = \"high count\" + 1\n  END IF\nEND FOR\nPRINT \"Batches above 85: \", \"high count\""
			},
			// EXERCISE 2: Filtering Ready Machines 🤖
			"2-part-a": {
				hints: [
					"Create 'ready list' as an empty list [].",
					"Loop through statuses and if you find 'Ready', ADD it to your new list."
				],
				answer: "SET \"machine statuses\" = [\"Ready\", \"Not Ready\", \"Ready\", \"Ready\", \"Not Ready\", \"Ready\"]\nSET \"ready list\" = []\nPRINT \"Machine statuses: \", \"machine statuses\"\nFOR EACH \"status\" IN \"machine statuses\"\n  IF \"status\" == \"Ready\" THEN\n    ADD \"status\" TO \"ready list\"\n  END IF\nEND FOR"
			},
			"2-part-b": {
				hints: [
					"Define the 'get ready machines' function.",
					"Call it with the new status list and store it in 'ready machines'.",
					"PRINT the result."
				],
				answer: "SET \"machine statuses\" = [\"Not Ready\", \"Ready\", \"Not Ready\", \"Not Ready\", \"Ready\"]\nFUNCTION \"get ready machines\"(\"list\")\n  SET \"ready list\" = []\n  FOR EACH \"status\" IN \"list\"\n    IF \"status\" == \"Ready\" THEN\n      ADD \"status\" TO \"ready list\"\n    END IF\n  END FOR\n  RETURN \"ready list\"\nEND FUNCTION\nSET \"ready machines\" = \"get ready machines\"(\"machine statuses\")\nPRINT \"ready machines\""
			},
			// EXERCISE 3: Counting Low Stock 📦
			"3-part-a": {
				hints: [
					"Loop through stock levels.",
					"Check if the level is <= 5.",
					"Increment 'low count' for every match."
				],
				answer: "SET \"stock levels\" = [8, 3, 12, 4, 7]\nSET \"low count\" = 0\nPRINT \"Low stock ingredients: \"\nFOR EACH \"level\" IN \"stock levels\"\n  IF \"level\" <= 5 THEN\n    SET \"low count\" = \"low count\" + 1\n  END IF\nEND FOR"
			},
			"3-part-b": {
				hints: [
					"Initialize 'low count' to 0.",
					"Use a loop to check each level against the threshold (5).",
					"PRINT the final message after the loop."
				],
				answer: "SET \"low count\" = 0\nFOR EACH \"level\" IN \"stock levels\"\n  IF \"level\" <= 5 THEN\n    SET \"low count\" = \"low count\" + 1\n  END IF\nEND FOR\nPRINT \"Low stock ingredients: \", \"low count\""
			},
			// EXERCISE 4: Mapping Pass/Fail 📝
			"4-part-a": {
				hints: [
					"Loop through 'test scores'.",
					"Check IF score >= 70 to ADD 'Pass', ELSE ADD 'Fail' to the results list."
				],
				answer: "SET \"test scores\" = [85, 62, 91, 48, 77, 53]\nSET \"results\" = []\nPRINT \"test scores\"\nFOR EACH \"score\" IN \"test scores\"\n  IF \"score\" >= 70 THEN\n    ADD \"Pass\" TO \"results\"\n  ELSE\n    ADD \"Fail\" TO \"results\"\n  END IF\nEND FOR"
			},
			"4-part-b": {
				hints: [
					"Define 'mark results' function with the IF/ELSE logic.",
					"Call it with the new list [95, 44, 68, 82, 59].",
					"PRINT the returned list."
				],
				answer: "SET \"test scores\" = [95, 44, 68, 82, 59]\nFUNCTION \"mark results\"(\"list\")\n  SET \"outcome\" = []\n  FOR EACH \"score\" IN \"list\"\n    IF \"score\" >= 70 THEN\n      ADD \"Pass\" TO \"outcome\"\n    ELSE\n      ADD \"Fail\" TO \"outcome\"\n    END IF\n  END FOR\n  RETURN \"outcome\"\nEND FUNCTION\nPRINT \"mark results\"(\"test scores\")"
			},
			// EXERCISE 5: Extracting High Scores 🎖️
			"5-part-a": {
				hints: [
					"Define 'get high scores' with an internal empty list.",
					"Loop through input scores and ADD those > 85 to the new list.",
					"PRINT the result inside or outside as specified."
				],
				answer: "SET \"quality scores\" = [92, 78, 88, 95, 67, 89, 76]\nFUNCTION \"get high scores\"(\"scores\")\n  SET \"high scores\" = []\n  FOR EACH \"score\" IN \"scores\"\n    IF \"score\" > 85 THEN\n      ADD \"score\" TO \"high scores\"\n    END IF\n  END FOR\n  PRINT \"High scores:\", \"high scores\"\nEND FUNCTION"
			},
			"5-part-b": {
				hints: [
					"Set up the new quality scores list.",
					"Call the function and PRINT the final result."
				],
				answer: "SET \"quality scores\" = [84, 91, 73, 86, 94, 68]\n\"get high scores\"(\"quality scores\")\nPRINT \"High scores:\", \"quality scores\""
			}
		}, 	// end module 8 arrays part 6

		// module 8 arrays part 1-6 completed 
















			arrays: {
					// "1-part-a": { hints: [], answer: "" },
					// "1-part-b": { hints: [], answer: "" }
			},

			objects: {
					// "1-part-a": { hints: [], answer: "" },
					// "1-part-b": { hints: [], answer: "" }
			},

			events: {
					// "1-part-a": { hints: [], answer: "" },
					// "1-part-b": { hints: [], answer: "" }
			}

		};

  // ==========================================================
  // HINT STATE
  // ==========================================================
  const hintProgress = {};

  // ==========================================================
  // CORE FUNCTIONS
  // ==========================================================
  function showHint(section, ex) {
    const data = exerciseData[section]?.[ex];
    if (!data) return;

    hintProgress[section] ??= {};
    hintProgress[section][ex] ??= 0;

    const hintDiv = document.getElementById(`${section}-hint${ex}`);
    const answerDiv = document.getElementById(`${section}-answer${ex}`);
    const progress = hintProgress[section][ex];

    if (progress < data.hints.length) {
      const formattedHint = data.hints[progress].replace(/`(.*?)`/g, '<code>$1</code>');
      hintDiv.innerHTML += `<strong>Hint ${progress + 1}:</strong> ${formattedHint}<br>`;
      hintProgress[section][ex]++;
    } else {
      answerDiv.textContent = data.answer;
      answerDiv.classList.add('show');
    }
  }

  function runCode(section, number) {
    const codeBox = document.getElementById(`${section}-ex${number}`);
    const output = document.getElementById(`${section}-output${number}`);
    if (!codeBox || !output) return;

    const code = codeBox.innerText
      .replace(/\u00a0/g, ' ')
      .replace(/\u200b/g, '')
      .trim();

    const lines = code.split('\n').map(l => l.trim()).filter(l => l !== '');
    const variables = {};
    const functions = {};
    const outputLines = [];

    // ----------------------------------------------------------
    // RESOLVE A SINGLE VALUE (string literal, number, variable)
    // ----------------------------------------------------------
    function resolveValue(val) {
      const trimmed = val.trim();
      if (trimmed === 'TRUE' || trimmed === 'true') return true;
      if (trimmed === 'FALSE' || trimmed === 'false') return false;
      if ((trimmed.startsWith('"') && trimmed.endsWith('"')) ||
          (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
        const inner = trimmed.slice(1, -1);
        if (variables.hasOwnProperty(inner)) return variables[inner];
        return inner;
      }
      if (!isNaN(trimmed) && trimmed !== '') return Number(trimmed);
      if (variables.hasOwnProperty(trimmed)) return variables[trimmed];
      return trimmed;
    }

    // ----------------------------------------------------------
    // RESOLVE AN EXPRESSION (handles operators)
    // ----------------------------------------------------------
    function resolveExpression(expr) {
      expr = expr.trim();

      // Handle CALL inside expression
      if (expr.startsWith('CALL ')) {
        return callFunction(expr.slice(5).trim());
      }

      const operators = ['>=', '<=', '!=', '>', '<', '=', '+', '-', '*', '/'];
      for (const op of operators) {
        const idx = expr.indexOf(op);
        if (idx > 0) {
          const left = resolveValue(expr.slice(0, idx).trim());
          const right = resolveValue(expr.slice(idx + op.length).trim());
          if (op === '+') return (typeof left === 'string' || typeof right === 'string')
            ? String(left) + String(right) : left + right;
          if (op === '-') return left - right;
          if (op === '*') return left * right;
          if (op === '/') return left / right;
          if (op === '>=') return left >= right;
          if (op === '<=') return left <= right;
          if (op === '!=') return left !== right;
          if (op === '>') return left > right;
          if (op === '<') return left < right;
          if (op === '=') return left === right;
        }
      }
      return resolveValue(expr);
    }

    // ----------------------------------------------------------
    // EVALUATE A CONDITION (AND / OR / NOT)
    // ----------------------------------------------------------
    function evaluateCondition(condStr) {
      condStr = condStr.trim();

      if (condStr.startsWith('NOT ')) {
        return !evaluateCondition(condStr.slice(4).trim());
      }
      if (condStr.includes(' AND ')) {
        return condStr.split(' AND ').every(part => evaluateCondition(part.trim()));
      }
      if (condStr.includes(' OR ')) {
        return condStr.split(' OR ').some(part => evaluateCondition(part.trim()));
      }
      return resolveExpression(condStr);
    }

    // ----------------------------------------------------------
    // PARSE ARGUMENTS FROM A CALL e.g. (10, 3) or ("hello", x)
    // ----------------------------------------------------------
    function parseArgs(argStr) {
      const args = [];
      let current = '';
      let inQuote = false;
      for (let c = 0; c < argStr.length; c++) {
        if (argStr[c] === '"') inQuote = !inQuote;
        if (argStr[c] === ',' && !inQuote) {
          args.push(resolveValue(current.trim()));
          current = '';
        } else {
          current += argStr[c];
        }
      }
      if (current.trim()) args.push(resolveValue(current.trim()));
      return args;
    }

    // ----------------------------------------------------------
    // CALL A FUNCTION BY NAME WITH OPTIONAL ARGS
    // e.g. callFunction('"count packets"')
    // e.g. callFunction('"get portions" (10, 3)')
    // ----------------------------------------------------------
    function callFunction(callStr) {
      callStr = callStr.trim();
      let funcName = '';
      let args = [];

      const parenIdx = callStr.indexOf('(');
      if (parenIdx !== -1) {
        funcName = callStr.slice(0, parenIdx).trim();
        const argStr = callStr.slice(parenIdx + 1, callStr.lastIndexOf(')'));
        args = parseArgs(argStr);
      } else {
        funcName = callStr.trim();
      }

      // Strip quotes from function name
      if (funcName.startsWith('"') && funcName.endsWith('"'))
        funcName = funcName.slice(1, -1);

      const func = functions[funcName];
      if (!func) return undefined;

      // Save current variables, bind parameters
      const savedVars = { ...variables };
      func.params.forEach((p, i) => {
        variables[p] = args[i] !== undefined ? args[i] : undefined;
      });

      let returnValue = undefined;
      const funcLines = func.body.map(l => l.trim()).filter(l => l !== '');

      let fi = 0;
      while (fi < funcLines.length) {
        const fl = funcLines[fi].trim();

        if (fl.startsWith('RETURN ')) {
          returnValue = resolveValue(fl.slice(7).trim());
          break;
        }

        // SET inside function
        if (fl.startsWith('SET ')) {
          const rest = fl.slice(4).trim();
          const eqIdx = rest.indexOf('=');
          if (eqIdx !== -1) {
            let varName = rest.slice(0, eqIdx).trim();
            let valExpr = rest.slice(eqIdx + 1).trim();
            if (varName.startsWith('"') && varName.endsWith('"'))
              varName = varName.slice(1, -1);
            if (valExpr.startsWith('CALL ')) {
              variables[varName] = callFunction(valExpr.slice(5).trim());
            } else {
              variables[varName] = resolveExpression(valExpr);
            }
          }
          fi++;
          continue;
        }

        // PRINT inside function
        if (fl.startsWith('PRINT ')) {
          const rest = fl.slice(6).trim();
          const parts = [];
          let current = '';
          let inQuote = false;
          for (let c = 0; c < rest.length; c++) {
            if (rest[c] === '"') inQuote = !inQuote;
            if (rest[c] === ',' && !inQuote) {
              parts.push(current);
              current = '';
            } else {
              current += rest[c];
            }
          }
          if (current.trim()) parts.push(current);
          const result = parts.map(p => {
            const pt = p.trim();
            return resolveValue(pt);
          }).join(' ');
          outputLines.push(String(result));
          fi++;
          continue;
        }

        fi++;
      }

      // Restore variables after function call
      Object.keys(variables).forEach(k => delete variables[k]);
      Object.assign(variables, savedVars);

      return returnValue;
    }

    // ----------------------------------------------------------
    // EXECUTE A BLOCK OF LINES
    // ----------------------------------------------------------
    try {
      function executeBlock(blockLines) {
        let idx = 0;
        while (idx < blockLines.length) {
          const line = blockLines[idx].trim();

          // SET
          if (line.startsWith('SET ')) {
            const rest = line.slice(4).trim();
            const eqIdx = rest.indexOf('=');
            if (eqIdx !== -1) {
              let varName = rest.slice(0, eqIdx).trim();
              let valExpr = rest.slice(eqIdx + 1).trim();
              if (varName.startsWith('"') && varName.endsWith('"'))
                varName = varName.slice(1, -1);
              if (valExpr.startsWith('CALL ')) {
                variables[varName] = callFunction(valExpr.slice(5).trim());
              } else {
                variables[varName] = resolveExpression(valExpr);
              }
            }
            idx++;
            continue;
          }

          // PRINT
          if (line.startsWith('PRINT ')) {
            const rest = line.slice(6).trim();
            const parts = [];
            let current = '';
            let inQuote = false;
            for (let c = 0; c < rest.length; c++) {
              if (rest[c] === '"') inQuote = !inQuote;
              if (rest[c] === ',' && !inQuote) {
                parts.push(current);
                current = '';
              } else {
                current += rest[c];
              }
            }
            if (current.trim()) parts.push(current);

            const result = parts.map(p => {
              const pt = p.trim();
              // Check for comparison operators
              for (const op of ['>=', '<=', '!=', '>', '<']) {
                const idx = pt.indexOf(op);
                if (idx > 0) {
                  const left = resolveValue(pt.slice(0, idx).trim());
                  const right = resolveValue(pt.slice(idx + op.length).trim());
                  if (op === '>=') return left >= right;
                  if (op === '<=') return left <= right;
                  if (op === '!=') return left !== right;
                  if (op === '>') return left > right;
                  if (op === '<') return left < right;
                }
              }
              return resolveValue(pt);
            }).join(' ');
            outputLines.push(String(result));
            idx++;
            continue;
          }

          // FUNCTION definition — store it
          if (line.startsWith('FUNCTION ')) {
            const funcDef = line.slice(9).trim();
            let funcName = '';
            let params = [];

            const parenIdx = funcDef.indexOf('(');
            if (parenIdx !== -1) {
              funcName = funcDef.slice(0, parenIdx).trim();
              if (funcName.startsWith('"') && funcName.endsWith('"'))
                funcName = funcName.slice(1, -1);
              const paramStr = funcDef.slice(parenIdx + 1, funcDef.lastIndexOf(')'));
              params = paramStr.split(',').map(p => {
                p = p.trim();
                if (p.startsWith('"') && p.endsWith('"')) p = p.slice(1, -1);
                return p;
              }).filter(p => p !== '');
            } else {
              funcName = funcDef.trim();
              if (funcName.startsWith('"') && funcName.endsWith('"'))
                funcName = funcName.slice(1, -1);
            }

            const funcBody = [];
            idx++;
            while (idx < blockLines.length &&
                   blockLines[idx].trim() !== 'END FUNCTION') {
              funcBody.push(blockLines[idx]);
              idx++;
            }

            functions[funcName] = { params, body: funcBody };
            idx++;
            continue;
          }

          // CALL standalone
          if (line.startsWith('CALL ')) {
            callFunction(line.slice(5).trim());
            idx++;
            continue;
          }

          // IF / ELSE IF / ELSE / END IF
          if (line.startsWith('IF ') && line.endsWith('THEN')) {
            const condStr = line.slice(3, line.lastIndexOf('THEN')).trim();
            const branches = [];
            let currentCond = condStr;
            let currentBlock = [];
            idx++;

            while (idx < blockLines.length) {
              const l = blockLines[idx].trim();
              if (l.startsWith('ELSE IF ') && l.endsWith('THEN')) {
                branches.push({ cond: currentCond, block: currentBlock });
                currentCond = l.slice(8, l.lastIndexOf('THEN')).trim();
                currentBlock = [];
              } else if (l === 'ELSE') {
                branches.push({ cond: currentCond, block: currentBlock });
                currentCond = null;
                currentBlock = [];
              } else if (l === 'END IF' || l === 'ENDIF') {
                branches.push({ cond: currentCond, block: currentBlock });
                break;
              } else {
                currentBlock.push(l);
              }
              idx++;
            }

            let executed = false;
            for (const branch of branches) {
              if (branch.cond !== null && !executed && evaluateCondition(branch.cond)) {
                executed = true;
                executeBlock(branch.block);
                break;
              }
            }

            // Handle ELSE branch
            if (!executed) {
              const elseBranch = branches.find(b => b.cond === null);
              if (elseBranch) executeBlock(elseBranch.block);
            }

            idx++;
            continue;
          }

          idx++;
        }
      }

      executeBlock(lines);
      output.textContent = outputLines.join('\n') || 'Code ran but produced no output.';

    } catch (err) {
      output.textContent = 'Error: ' + err.message;
    }
  }

  function resetExercise(section, number) {
    hintProgress[section] ??= {};
    document.getElementById(`${section}-ex${number}`).innerText = '';
    document.getElementById(`${section}-hint${number}`).innerHTML = '';
    document.getElementById(`${section}-output${number}`).innerText = '';
    document.getElementById(`${section}-answer${number}`).innerText = '';
    hintProgress[section][number] = 0;
  }

  // ==========================================================
  // BUTTON WIRING
  // ==========================================================
  document.querySelectorAll('.hint-button').forEach(btn => {
    btn.addEventListener('click', () => {
      showHint(btn.dataset.section, btn.dataset.ex);
    });
  });

  document.querySelectorAll('.run-button').forEach(btn => {
    btn.addEventListener('click', () => {
      runCode(btn.dataset.section, btn.dataset.ex);
    });
  });

  document.querySelectorAll('.reset-button').forEach(btn => {
    btn.addEventListener('click', () => {
      resetExercise(btn.dataset.section, btn.dataset.ex);
    });
  }); 
});
