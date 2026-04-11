// #!/usr/bin/env node

// // =============================================================
// // FIX-TEMPLATE.js
// // core-value-fundamentals
// // =============================================================
// // Pure Node.js — no AI, no quota, no heat
// // Fixes banned words and adds RULE 7 to template master file
// //
// // USAGE:
// //   node fix-template.js
// // =============================================================

// const fs = require('fs');
// const path = require('path');
// const { execSync } = require('child_process');

// const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');
// const FILENAME = '2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md';
// const filePath = path.join(MAIN_TEMPLATE_DIR, FILENAME);

// // API Keys
// const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
// const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY || '';
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

// // AI endpoints
// const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
// const GROQ_MODEL = 'llama-3.3-70b-versatile';
// const CEREBRAS_URL = 'https://api.cerebras.ai/v1/chat/completions';
// const CEREBRAS_MODEL = 'llama3.1-8b';

// // Toggle this when Groq has credits
// const GROQ_HAS_CREDITS = false;  // ← SET TO true WHEN YOU HAVE GROQ CREDITS

// // Delays
// const STEP_DELAY = 30000;        // 30 seconds between steps
// const RETRY_DELAY = 15000;       // 15 seconds between retries
// const MAX_ATTEMPTS = 3;

// // =============================================================
// // HELPERS
// // =============================================================

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// function notify(message) {
//   console.log(`\n🔔 ${message}\n`);
//   if (process.platform === 'darwin') {
//     try {
//       execSync(`osascript -e 'display notification "${message}" with title "Template Updater"'`);
//     } catch (e) {}
//   }
// }

// function containsBannedWords(content) {
//   const bannedWords = ['students', 'student', 'console', 'let ', 'const ', 'var '];
//   const lowerContent = content.toLowerCase();
  
//   for (const word of bannedWords) {
//     if (lowerContent.includes(word)) {
//       return true;
//     }
//   }
//   return false;
// }

// function hasRule7(content) {
//   return content.includes('RULE 7: BANNED WORDS');
// }

// // =============================================================
// // AI CALLS
// // =============================================================

// async function callGroq(prompt) {
//   if (!GROQ_API_KEY) throw new Error('GROQ_API_KEY not set');

//   const response = await fetch(GROQ_URL, {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${GROQ_API_KEY}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       model: GROQ_MODEL,
//       messages: [{ role: 'user', content: prompt }],
//       max_tokens: 8000,
//       temperature: 0.2
//     })
//   });

//   if (!response.ok) {
//     const err = await response.text();
//     if (response.status === 429) throw new Error(`RATE_LIMIT: ${err}`);
//     throw new Error(`Groq error ${response.status}: ${err}`);
//   }

//   const data = await response.json();
//   if (!data.choices?.[0]?.message?.content) {
//     throw new Error('Invalid Groq response');
//   }
//   return data.choices[0].message.content;
// }

// async function callCerebras(prompt) {
//   if (!CEREBRAS_API_KEY) throw new Error('CEREBRAS_API_KEY not set');

//   const response = await fetch(CEREBRAS_URL, {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${CEREBRAS_API_KEY}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       model: CEREBRAS_MODEL,
//       messages: [{ role: 'user', content: prompt }],
//       max_tokens: 8000,
//       temperature: 0.2
//     })
//   });

//   if (!response.ok) {
//     const err = await response.text();
//     if (response.status === 429) throw new Error(`RATE_LIMIT: ${err}`);
//     throw new Error(`Cerebras error ${response.status}: ${err}`);
//   }

//   const data = await response.json();
//   if (!data.choices?.[0]?.message?.content) {
//     throw new Error('Invalid Cerebras response');
//   }
//   return data.choices[0].message.content;
// }

// async function callAI(prompt, stepName) {
//   // Try Groq first if credits available
//   if (GROQ_HAS_CREDITS && GROQ_API_KEY) {
//     try {
//       console.log(`   🤖 ${stepName}: Trying Groq...`);
//       const result = await callGroq(prompt);
//       console.log(`   ✅ ${stepName}: Groq succeeded`);
//       return result;
//     } catch (e) {
//       if (e.message.includes('RATE_LIMIT')) {
//         console.log(`   ⚠️  Groq rate limited - falling back to Cerebras...`);
//       } else {
//         console.log(`   ⚠️  Groq failed: ${e.message.slice(0, 80)} - falling back to Cerebras...`);
//       }
//     }
//   }

//   // Fallback to Cerebras
//   if (CEREBRAS_API_KEY) {
//     try {
//       console.log(`   🤖 ${stepName}: Trying Cerebras...`);
//       const result = await callCerebras(prompt);
//       console.log(`   ✅ ${stepName}: Cerebras succeeded`);
//       return result;
//     } catch (e) {
//       console.log(`   ❌ ${stepName}: Cerebras failed: ${e.message.slice(0, 80)}`);
//       throw e;
//     }
//   }

//   throw new Error(`No AI provider available for ${stepName}`);
// }

// // =============================================================
// // STEP 1: Fix Banned Words Only
// // =============================================================

// async function step1FixBannedWords(content) {
//   console.log(`\n   📝 STEP 1: Fixing banned words...`);
  
//   const prompt = `You are fixing a template file for a children's coding course (UK, ages 10-12).

// Fix ONLY the banned words in this file. Make these exact replacements:

// | Wrong | Correct |
// |-------|---------|
// | students | children |
// | student | child |
// | period (any use) | lesson |
// | periods (any use) | lessons |
// | program (as in computer program) | code |
// | programming | coding |
// | practice (as a verb) | practise |
// | color | colour |
// | organize | organise |
// | recognize | recognise |
// | center | centre |
// | math | maths |

// REMOVE these completely (never use them):
// - console (anywhere)
// - let (as code syntax)
// - const (as code syntax)
// - var (as code syntax)
// - AI tool names (Gemini, ChatGPT, Claude, etc) → replace with "AI"

// IMPORTANT RULES:
// - Do NOT change "practice" if it's a noun (e.g., "best practice")
// - Do NOT change CSS properties: "color:" and "text-align: center" must stay as-is
// - Do NOT add any new sections
// - Do NOT change anything else in the file

// OUTPUT: The complete file with only banned words fixed. No explanation. No markdown fences.

// --- START OF FILE ---
// ${content}
// --- END OF FILE ---`;

//   for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
//     try {
//       console.log(`   🔄 Attempt ${attempt} of ${MAX_ATTEMPTS}...`);
//       const result = await callAI(prompt, 'Step 1');
      
//       if (containsBannedWords(result)) {
//         console.log(`   ❌ Step 1 validation failed - banned words still present`);
//         if (attempt < MAX_ATTEMPTS) {
//           console.log(`   ⏳ Waiting ${RETRY_DELAY/1000}s before retry...`);
//           await sleep(RETRY_DELAY);
//           continue;
//         }
//         throw new Error('Step 1 failed: banned words still present after all attempts');
//       }
      
//       console.log(`   ✅ Step 1 complete - banned words fixed`);
//       return result;
      
//     } catch (e) {
//       console.log(`   ❌ Step 1 error: ${e.message}`);
//       if (attempt < MAX_ATTEMPTS) {
//         console.log(`   ⏳ Waiting ${RETRY_DELAY/1000}s before retry...`);
//         await sleep(RETRY_DELAY);
//       } else {
//         throw e;
//       }
//     }
//   }
// }

// // =============================================================
// // STEP 2: Add RULE 7 Section
// // =============================================================

// async function step2AddRule7(content) {
//   console.log(`\n   📝 STEP 2: Adding RULE 7 section...`);
  
//   const rule7Content = `
// ---

// ## RULE 7: BANNED WORDS — NEVER USE THESE

// The following words are banned from ALL exercises, helper boxes, and any content children will read.
// No exceptions. If you are unsure — do not use it.

// ### Banned — Use These Instead

// | ❌ Never Use | ✅ Use Instead |
// |---|---|
// | students / student | children / child |
// | period / periods (ANY use) | lesson / lessons |
// | program / programming | code / coding |
// | practice (verb) | practise |
// | color | colour |
// | organize | organise |
// | recognize | recognise |
// | center | centre |
// | math | maths |
// | console | never use this word |
// | let / const / var | SET (pseudocode only) |
// | AI tool names (Gemini, ChatGPT etc) | AI |

// ### Why This Matters
// - This course is built for children in the UK — British English only
// - "Period" is banned entirely — if AI ever gets it wrong, children could see the wrong meaning
// - "Program/programming" is too technical and language-specific — say "code/coding"
// - Real code syntax (let, const, var) must never appear — pseudocode only (SET, PRINT, IF, FOR)

// ---`;

//   const prompt = `You are updating a template file for a children's coding course.

// Add ONLY the RULE 7 banned words section to this file.
// Insert it immediately after RULE 6.
// Use this EXACT content for RULE 7:

// ${rule7Content}

// IMPORTANT:
// - DO NOT change anything else in the file
// - DO NOT remove any existing content
// - DO NOT add any other sections
// - Just find RULE 6 and insert RULE 7 right after it

// OUTPUT: The complete file with RULE 7 added. No explanation. No markdown fences.

// --- START OF FILE ---
// ${content}
// --- END OF FILE ---`;

//   for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
//     try {
//       console.log(`   🔄 Attempt ${attempt} of ${MAX_ATTEMPTS}...`);
//       const result = await callAI(prompt, 'Step 2');
      
//       if (!hasRule7(result)) {
//         console.log(`   ❌ Step 2 validation failed - RULE 7 missing`);
//         if (attempt < MAX_ATTEMPTS) {
//           console.log(`   ⏳ Waiting ${RETRY_DELAY/1000}s before retry...`);
//           await sleep(RETRY_DELAY);
//           continue;
//         }
//         throw new Error('Step 2 failed: RULE 7 missing after all attempts');
//       }
      
//       console.log(`   ✅ Step 2 complete - RULE 7 added`);
//       return result;
      
//     } catch (e) {
//       console.log(`   ❌ Step 2 error: ${e.message}`);
//       if (attempt < MAX_ATTEMPTS) {
//         console.log(`   ⏳ Waiting ${RETRY_DELAY/1000}s before retry...`);
//         await sleep(RETRY_DELAY);
//       } else {
//         throw e;
//       }
//     }
//   }
// }


// // =============================================================
// // STEP 3: Update RULE 2 (Pseudocode requirement)
// // =============================================================


// // async function step3UpdateRule2(content) {
// //   console.log(`\n   📝 STEP 3: Updating RULE 2 (pseudocode requirement)...`);
  
// //   const prompt = `You are updating a template file for a children's coding course.

// // UPDATE ONLY RULE 2 in this file.

// // Find the section about Exercise 1 Step 4. Make sure it clearly states that BOTH Part A AND Part B must show pseudocode in a code-example div.

// // If the rule only mentions Part A, add Part B explicitly.

// // Add this warning if not present:
// // ⚠️ CRITICAL: Exercise 1 Part B MUST also show pseudocode in a code-example div — exactly like Part A. This is the most commonly missed rule. Never leave Part B without pseudocode.

// // ⚠️ CRITICAL INSTRUCTION - READ CAREFULLY:
// // You MUST return the COMPLETE file below.
// // DO NOT truncate it.
// // DO NOT summarize it.
// // DO NOT return only the part you changed.
// // Return EVERY line from the input file, only changing RULE 2.

// // OUTPUT: The COMPLETE file with RULE 2 updated. No explanation. No markdown fences. No "Here is the updated file" messages.

// // --- START OF FILE ---
// // ${content}
// // --- END OF FILE ---`;

// //   for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
// //     try {
// //       console.log(`   🔄 Attempt ${attempt} of ${MAX_ATTEMPTS}...`);
// //       const result = await callAI(prompt, 'Step 3');
      
// //       // Check that we got most of the file back (not truncated)
// //       const originalLines = content.split('\n').length;
// //       const resultLines = result.split('\n').length;
      
// //       if (resultLines < originalLines * 0.9) {
// //         console.log(`   ⚠️  Result is truncated: ${resultLines} lines vs original ${originalLines} lines`);
// //         if (attempt < MAX_ATTEMPTS) {
// //           console.log(`   🔄 Retrying with stronger instruction...`);
// //           continue;
// //         }
// //         throw new Error(`Step 3 truncated file: ${resultLines} vs ${originalLines} lines`);
// //       }
      
// //       console.log(`   ✅ Step 3 complete - RULE 2 updated (${resultLines} lines)`);
// //       return result;
      
// //     } catch (e) {
// //       console.log(`   ❌ Step 3 error: ${e.message}`);
// //       if (attempt < MAX_ATTEMPTS) {
// //         console.log(`   ⏳ Waiting ${RETRY_DELAY/1000}s before retry...`);
// //         await sleep(RETRY_DELAY);
// //       } else {
// //         throw e;
// //       }
// //     }
// //   }
// // }

// // Step 3 removed - already complete
// console.log("\n✅ All required steps completed (Step 3 skipped - already in template)");




// // =============================================================
// // MAIN
// // =============================================================

// async function main() {
//   console.log('\n🔧 TEMPLATE UPDATER — Three-Step Process');
//   console.log('═══════════════════════════════════════════\n');

//   // Check if file exists
//   if (!fs.existsSync(filePath)) {
//     console.error(`❌ File not found: ${filePath}`);
//     process.exit(1);
//   }

//   // Show available providers
//   console.log('📡 AVAILABLE PROVIDERS:');
//   console.log(`   Groq:     ${GROQ_API_KEY ? '✅' : '❌'} ${GROQ_HAS_CREDITS ? '(credits available)' : '(no credits)'}`);
//   console.log(`   Cerebras: ${CEREBRAS_API_KEY ? '✅' : '❌'}`);
//   console.log(`   Gemini:   ${GEMINI_API_KEY ? '✅' : '❌'} (disabled - quota exhausted)`);
//   console.log('');

//   // Read original file
//   const originalContent = fs.readFileSync(filePath, 'utf8');
//   const originalLines = originalContent.split('\n').length;
//   console.log(`✅ File loaded: ${FILENAME} (${originalLines} lines)\n`);

//   // Create backup
//   const now = new Date();
//   const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
//   const backupPath = path.join(MAIN_TEMPLATE_DIR, FILENAME.replace('.md', `-BACKUP-${timestamp}.md`));
//   fs.writeFileSync(backupPath, originalContent, 'utf8');
//   console.log(`💾 Backup saved: ${path.basename(backupPath)}`);

//   let workingContent = originalContent;
//   const startTime = Date.now();

//   try {
//     // STEP 1: Fix banned words
//     workingContent = await step1FixBannedWords(workingContent);
//     console.log(`   ⏳ Waiting ${STEP_DELAY/1000}s before Step 2...`);
//     await sleep(STEP_DELAY);

//     // STEP 2: Add RULE 7 - DISABLED (needs fixing)
//     // workingContent = await step2AddRule7(workingContent);
//     console.log(`   ⏭️ STEP 2: Skipped (needs fixing - overwrites file)`);

//     // STEP 3: DISABLED - already in template
//     console.log(`   ⏭️ STEP 3: Skipped (RULE 2 already in template)`);

//     // Final validation
//     const finalLines = workingContent.split('\n').length;
//     if (finalLines < originalLines * 0.8) {
//       console.log(`\n🚨 SAFETY BLOCK: Final file is ${finalLines} lines, original was ${originalLines} lines`);
//       console.log(`   Saving as REVIEW-NEEDED instead...`);
//       const reviewPath = filePath.replace('.md', '-REVIEW-NEEDED.md');
//       fs.writeFileSync(reviewPath, workingContent, 'utf8');
//       notify(`SAFETY BLOCK: ${FILENAME} — file too short!`);
//       process.exit(1);
//     }

//     // Save the final file
//     fs.writeFileSync(filePath, workingContent, 'utf8');
    
//     const elapsed = Math.round((Date.now() - startTime) / 1000);
//     const mins = Math.floor(elapsed / 60);
//     const secs = elapsed % 60;
//     const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    
//     console.log(`\n✅ Template updated successfully!`);
//     console.log(`   Time: ${timeStr}`);
//     console.log(`   Lines: ${originalLines} → ${finalLines}`);
//     console.log(`\n🎉 Done!`);
//     notify(`${FILENAME} updated successfully! (${timeStr})`);

//   } catch (error) {
//     console.error(`\n❌ Pipeline failed: ${error.message}`);
//     notify(`Template update failed: ${error.message.slice(0, 50)}`);
//     process.exit(1);
//   }
// }

// // Run the main function
// main().catch(err => {
//   console.error('❌ Fatal error:', err);
//   process.exit(1);
// });











// :::::::: ORIGINAL CODE DO NOT REMOVE :::::::: // 

// #!/usr/bin/env node

// // =============================================================
// // TEMPLATE UPDATER PIPELINE
// // core-value-fundamentals — Language-Agnostic Edition
// // =============================================================
// //
// // USAGE:
// //   node update-template.js 2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md
// //
// // What it does:
// //   1. Reads the target file from mainTemplate/
// //   2. Groq AI fixes all banned words and adds banned words section
// //   3. Saves the updated file back to mainTemplate/
// // =============================================================

// const fs = require('fs');
// const path = require('path');
// const { execSync } = require('child_process');

// const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');
// const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
// const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
// const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
// const GROQ_MODEL = 'meta-llama/llama-4-scout-17b-16e-instruct';
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
// const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
// const MAX_ATTEMPTS = 3;
// const DELAY = 15000;

// // --- HELPERS ---

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// function readFile(filePath) {
//   if (!fs.existsSync(filePath)) {
//     console.error(`❌ File not found: ${filePath}`);
//     process.exit(1);
//   }
//   return fs.readFileSync(filePath, 'utf8');
// }

// function notify(message) {
//   console.log(`\n🔔 NOTIFICATION: ${message}\n`);
//   try {
//     execSync(`osascript -e 'display notification "${message}" with title "Template Updater"'`);
//   } catch (e) {}
// }

// // --- OPENROUTER ---
// async function runOpenRouter(prompt) {
//   if (!OPENROUTER_API_KEY) throw new Error('No OpenRouter API key');

//   const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
//       'Content-Type': 'application/json',
//       'HTTP-Referer': 'https://core-value-fundamentals',
//       'X-Title': 'Template Updater Pipeline'
//     },
//     body: JSON.stringify({
//       model: 'openrouter/auto',
//       messages: [{ role: 'user', content: prompt }],
//       max_tokens: 8000
//     })
//   });

//   if (!response.ok) {
//     const err = await response.text();
//     throw new Error(`OpenRouter error ${response.status}: ${err}`);
//   }

//   const data = await response.json();
//   if (!data.choices || !data.choices[0] || !data.choices[0].message) {
//     console.log(`   🔍 OpenRouter raw response: ${JSON.stringify(data).slice(0, 500)}`);
//     throw new Error('Unexpected API response: ' + JSON.stringify(data).slice(0, 200));
//   }
//   return data.choices[0].message.content.trim();
// }


// // --- GROQ (Free cloud AI) ---
// async function runGroq(prompt) {
//   if (!GROQ_API_KEY) throw new Error('No Groq API key');
//   const response = await fetch(GROQ_URL, {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${GROQ_API_KEY}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       model: GROQ_MODEL,
//       messages: [{ role: 'user', content: prompt }],
//       max_tokens: 8000
//     })
//   });
//   if (!response.ok) {
//     const err = await response.text();
//     throw new Error(`Groq error ${response.status}: ${err}`);
//   }
//   const data = await response.json();
//   if (!data.choices || !data.choices[0] || !data.choices[0].message) {
//     throw new Error('Unexpected Groq response: ' + JSON.stringify(data).slice(0, 200));
//   }
//   return data.choices[0].message.content.trim();
// }

// // --- GEMINI FALLBACK ---
// function runGemini(prompt) {
//   const tempFile = path.join(__dirname, '_gemini_temp.txt');
//   fs.writeFileSync(tempFile, prompt, 'utf8');
//   try {
//     const result = execSync(`gemini -p "$(cat '${tempFile}')" -y`, {
//       encoding: 'utf8',
//       timeout: 300000,
//       stdio: ['pipe', 'pipe', 'ignore']
//     });
//     fs.unlinkSync(tempFile);
//     return result.trim().split('\n')
//       .filter(line => !line.includes('cached credentials') && !line.includes('Loaded'))
//       .join('\n').trim();
//   } catch (e) {
//     if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
//     throw new Error(`Gemini error: ${e.message}`);
//   }
// }


// // --- GROQ (Free cloud AI) ---

// // --- GEMINI API (direct — for validation) ---
// async function runGeminiAPI(prompt) {
//   if (!GEMINI_API_KEY) throw new Error('No Gemini API key');
//   const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       contents: [{ parts: [{ text: prompt }] }],
//       generationConfig: { maxOutputTokens: 2000 }
//     })
//   });
//   if (!response.ok) {
//     const err = await response.text();
//     throw new Error(`Gemini API error ${response.status}: ${err}`);
//   }
//   const data = await response.json();
//   if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
//     throw new Error('Unexpected Gemini response: ' + JSON.stringify(data).slice(0, 200));
//   }
//   return data.candidates[0].content.parts[0].text.trim();
// }

// // --- OLLAMA (offline validator fallback) ---
// // --- RUN AI ---
// async function callAI(prompt) {
//   try {
//     console.log(`   ⚡ Using Groq (llama-3.3-70b)...`);
//     return await runGroq(prompt);
//   } catch (e) {
//     console.log(`   ⚠️  Groq failed — falling back to Gemini API...`);
//     return await runGeminiAPI(prompt);
//   }
// }

// // --- BUILD PROMPT ---
// function buildPrompt(filename, content) {
//   return `
// You are updating a foundation file for a children's coding course called core-value-fundamentals.

// The course is for children aged 10-12 in the UK.

// === FILE TO UPDATE ===
// Filename: ${filename}

// ${content}

// === YOUR TASKS ===

// TASK 1 — FIX BANNED WORDS throughout the entire file:
// - "students" → "children"
// - "student" → "child"  
// - "period" (school period) → "lesson"
// - "periods" (school periods) → "lessons"
// - "program" (as in computer program) → "code"
// - "programming" → "coding"
// - "practice" (as a verb) → "practise"
// - "color" → "colour"
// - "organize" → "organise"
// - "recognize" → "recognise"
// - "center" → "centre"
// - "math" → "maths"
// - NEVER use "console" anywhere
// - NEVER use "let", "const", "var" as code syntax
// - NEVER name specific AI tools — always say "AI"

// IMPORTANT: Do NOT change "period" if it means a full stop punctuation mark.
// Do NOT change "practice" if it is being used as a noun (e.g. "best practice").
// Do NOT change words inside code examples that are showing what NOT to do (marked with ❌ WRONG).

// CRITICAL CSS RULE — NEVER BREAK THIS:
// Do NOT change any CSS property values. CSS is not English — it only understands American spellings.
// - "text-align: center" → LEAVE IT AS "center" — "centre" is NOT valid CSS and will break the layout
// - "color:" in CSS properties → LEAVE IT AS "color" — "colour:" is NOT valid CSS
// - Only change spellings in content that children READ — never in HTML attributes or CSS values

// TASK 2 — ADD A BANNED WORDS SECTION:
// Add it IMMEDIATELY after RULE 6 — it must stay inside the critical rules block so the AI reads it before anything else. Call it:

// ## RULE 7: BANNED WORDS — NEVER USE THESE

// With this exact content:

// ---

// ## RULE 7: BANNED WORDS — NEVER USE THESE

// The following words are banned from ALL exercises, helper boxes, and any content children will read.
// No exceptions. If you are unsure — do not use it.

// ### Banned — Use These Instead

// | ❌ Never Use | ✅ Use Instead |
// |---|---|
// | students / student | children / child |
// | period / periods (school) | lesson / lessons |
// | program / programming | code / coding |
// | practice (verb) | practise |
// | color | colour |
// | organize | organise |
// | recognize | recognise |
// | center | centre |
// | math | maths |
// | console | never use this word |
// | let / const / var | SET (pseudocode only) |
// | AI tool names (Gemini, ChatGPT etc) | AI |

// ### Why This Matters
// - This course is built for children in the UK — British English only
// - "Period" means something very different to children in the UK — always say "lesson"
// - "Program/programming" is too technical and language-specific — say "code/coding"
// - Real code syntax (let, const, var) must never appear — pseudocode only (SET, PRINT, IF, FOR)

// ---

// TASK 3 — UPDATE RULE 2 — EXERCISE 1 PART B PSEUDOCODE:
// Find RULE 2 in the file. In the section about Exercise 1 Step 4, make sure it clearly states that BOTH Part A AND Part B must show pseudocode in a code-example div. If the rule only mentions Part A, add Part B explicitly. Add this warning:

// ⚠️ CRITICAL: Exercise 1 Part B MUST also show pseudocode in a code-example div — exactly like Part A. This is the most commonly missed rule. Never leave Part B without pseudocode.

// TASK 4 — DO NOT CHANGE ANYTHING ELSE:
// - Keep all existing rules exactly as they are
// - Keep all HTML examples exactly as they are
// - Keep all structure, headings, and formatting exactly as they are
// - Only fix the banned words and add the new section

// OUTPUT THE COMPLETE UPDATED FILE.
// NO preamble. NO explanation. NO markdown code fences.
// Start with the very first line of the file and end with the very last line.
// `;
// }

// // --- VALIDATE ---
// function validate(original, updated) {
//   // Check banned words are gone from non-code sections
//   const issues = [];

//   const lines = updated.split('\n');
//   lines.forEach((line, i) => {
//     const lineNum = i + 1;
//     const lower = line.toLowerCase();

//     // Skip lines that are showing WRONG examples (they contain ❌)
//     if (line.includes('❌') || line.includes('NEVER use') || line.includes('Never Use')) return;
//     // Skip the banned words table we just added
//     if (line.includes('| ❌') || line.includes('|---|')) return;

//     if (lower.includes('students') && !line.includes('→') && !line.includes('children / child')) {
//       issues.push(`Line ${lineNum}: still contains "students"`);
//     }
//     if (lower.includes(' period') && !line.includes('→') && !line.includes('lesson') && !line.includes('full stop') && !line.includes('punctuation')) {
//       issues.push(`Line ${lineNum}: still contains "period"`);
//     }
//   });

//   // Check the new section was added
//   if (!updated.includes('RULE 7: BANNED WORDS')) {
//     issues.push('RULE 7 banned words section is missing');
//   }

//   return issues;
// }

// // --- MAIN ---
// async function main() {
//   const filename = process.argv[2];

//   if (!filename) {
//     console.error('❌ Please provide a filename.');
//     console.error('   Example: node update-template.js 2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md');
//     process.exit(1);
//   }

//   const filePath = path.join(MAIN_TEMPLATE_DIR, filename);
//   const startTime = Date.now();

//   console.log(`\n🔧 TEMPLATE UPDATER`);
//   console.log(`📄 File:    ${filename}`);
//   console.log('🤖 AI:      ⚡ Groq (llama-3.3-70b)');
//   console.log(`─────────────────────────────────────\n`);

//   const originalContent = readFile(filePath);
//   console.log(`✅ File loaded (${originalContent.split('\n').length} lines)\n`);

//   let attempt = 0;
//   let updatedContent = '';
//   let issues = [];

//   while (attempt < MAX_ATTEMPTS) {
//     attempt++;
//     console.log(`🔄 Attempt ${attempt} of ${MAX_ATTEMPTS}`);
//     console.log(`   ✍️  Updating file...`);

//     try {
//       const prompt = buildPrompt(filename, originalContent);
//       updatedContent = await callAI(prompt);
//     } catch (e) {
//       console.log(`   ❌ AI error: ${e.message}`);
//       if (attempt < MAX_ATTEMPTS) {
//         console.log(`   ⏳ Waiting 15 seconds before retry...`);
//         await sleep(DELAY);
//       }
//       continue;
//     }

//     console.log(`   🔍 Validating...`);
//     issues = validate(originalContent, updatedContent);

//     if (issues.length === 0) {
//       console.log(`\n✅ PASSED on attempt ${attempt}!`);
//       break;
//     } else {
//       console.log(`\n❌ FAILED on attempt ${attempt}:`);
//       issues.forEach(issue => console.log(`   • ${issue}`));
//       if (attempt < MAX_ATTEMPTS) {
//         console.log(`   ⏳ Waiting 15 seconds before retry...`);
//         await sleep(DELAY);
//       }
//     }
//   }

//   const elapsed = Math.round((Date.now() - startTime) / 1000);
//   const mins = Math.floor(elapsed / 60);
//   const secs = elapsed % 60;
//   const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

//   if (issues.length === 0) {
//     // Safety check — never save a file shorter than the original
//     const originalLines = originalContent.split('\n').length;
//     const updatedLines = updatedContent.split('\n').length;

//     if (updatedLines < originalLines * 0.8) {
//       console.log(`\n🚨 SAFETY BLOCK: Updated file is ${updatedLines} lines but original was ${originalLines} lines.`);
//       console.log(`   Something went wrong — refusing to save to protect your file.`);
//       console.log(`   Saving as REVIEW-NEEDED instead.`);
//       const reviewPath = filePath.replace('.md', '-REVIEW-NEEDED.md');
//       fs.writeFileSync(reviewPath, updatedContent, 'utf8');
//       notify(`SAFETY BLOCK: ${filename} — file too short, not saved!`);
//       return;
//     }

//     // Save a timestamped backup first — never loses history
//     const now = new Date();
//     const timestamp = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
//     const backupName = filename.replace('.md', `-BACKUP-${timestamp}.md`);
//     const backupPath = path.join(MAIN_TEMPLATE_DIR, backupName);
//     fs.writeFileSync(backupPath, originalContent, 'utf8');
//     console.log(`\n💾 Backup saved: ${backupName}`);

//     // Save the updated file
//     fs.writeFileSync(filePath, updatedContent, 'utf8');
//     console.log(`✅ Updated: ${filename}`);
//     console.log(`\n🎉 Done! (${timeStr})`);
//     notify(`${filename} updated successfully! (${timeStr})`);
//   } else {
//     // Save for review
//     const reviewPath = filePath.replace('.md', '-REVIEW-NEEDED.md');
//     fs.writeFileSync(reviewPath, updatedContent, 'utf8');
//     console.log(`\n⚠️  Saved for review: ${filename.replace('.md', '-REVIEW-NEEDED.md')}`);
//     console.log(`⏱️  Total time: ${timeStr}`);
//     notify(`REVIEW NEEDED: ${filename} needs checking! (${timeStr})`);
//   }
// }

// main().catch(err => {
//   console.error('❌ Pipeline error:', err);
//   process.exit(1);
// });
