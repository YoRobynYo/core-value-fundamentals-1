#!/usr/bin/env node

// =============================================================
// HTML EXERCISE GENERATOR PIPELINE
// core-value-fundamentals — Language-Agnostic Edition
// =============================================================
//
// USAGE:
//   node build-html.js MODULE-1-VARIABLES
//   node build-html.js MODULE-3-CONDITIONS-PART1
//
// OUTPUT:
//   modules/module-1-variables/index.html
//
// =============================================================

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- CONFIG ---
const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');
const MODULES_DIR = path.join(__dirname, 'modules');
const MAX_ATTEMPTS = 3;
const DELAY_BETWEEN_ATTEMPTS = 15000; // ms

// Foundation files — rules every exercise must follow
const FOUNDATION_FILES = [
  '1-HOW-TO-REWRITE-MODULE-SPECS.md',
  '2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md',
  '3-MODULE-0-TEMPLATE-SPEC.md',
  'NARRATIVE-FRAMEWORK.md',
  'MODULE-1-VARIABLES-HELPER-BOXES.md'
];

// Gold standard HTML — the structure every exercise must match
const GOLD_STANDARD_FILE = 'MODULE-0-EXERCISE-GOLD-STANDARD.html';

// Module mappings
const MODULE_FOLDER_MAP = {
  'MODULE-1-VARIABLES':               'module-1-variables',
  'MODULE-2-OPERATORS':               'module-2-operators',
  'MODULE-3-CONDITIONS-PART1':        'module-3-conditions-part1',
  'MODULE-3-CONDITIONS-PART2':        'module-3-conditions-part2',
  'MODULE-3-CONDITIONS-PART3':        'module-3-conditions-part3',
  'MODULE-3-CONDITIONS-PART4':        'module-3-conditions-part4',
  'MODULE-3-CONDITIONS-PART5':        'module-3-conditions-part5',
  'MODULE-4-LOGICAL-OPERATORS-PART1': 'module-4-logical-operators-part1',
  'MODULE-4-LOGICAL-OPERATORS-PART2': 'module-4-logical-operators-part2',
  'MODULE-5-LOOPS-PART1':             'module-5-loops-part1',
  'MODULE-5-LOOPS-PART2':             'module-5-loops-part2',
  'MODULE-5-LOOPS-PART3':             'module-5-loops-part3',
  'MODULE-5-LOOPS-PART4':             'module-5-loops-part4',
  'MODULE-6-PIRATE-ADVENTURE-PART1':  'module-6-pirate-adventure-part1',
  'MODULE-6-PIRATE-ADVENTURE-PART2':  'module-6-pirate-adventure-part2',
};

const SPEC_FILE_MAP = {
  'MODULE-1-VARIABLES':               'MODULE-1-VARIABLES-SPECS.md',
  'MODULE-2-OPERATORS':               'MODULE-2-OPERATORS-SPECS.md',
  'MODULE-3-CONDITIONS-PART1':        'MODULE-3-CONDITIONS-PART1-SPECS.md',
  'MODULE-3-CONDITIONS-PART2':        'MODULE-3-CONDITIONS-PART2-SPECS.md',
  'MODULE-3-CONDITIONS-PART3':        'MODULE-3-CONDITIONS-PART3-SPECS.md',
  'MODULE-3-CONDITIONS-PART4':        'MODULE-3-CONDITIONS-PART4-SPECS.md',
  'MODULE-3-CONDITIONS-PART5':        'MODULE-3-CONDITIONS-PART5-SPECS.md',
  'MODULE-4-LOGICAL-OPERATORS-PART1': 'MODULE-4-LOGICAL-OPERATORS-PART1-SPECS.md',
  'MODULE-4-LOGICAL-OPERATORS-PART2': 'MODULE-4-LOGICAL-OPERATORS-PART2-SPECS.md',
  'MODULE-5-LOOPS-PART1':             'MODULE-5-LOOPS-PART-1-SPEC.md',
  'MODULE-5-LOOPS-PART2':             'MODULE-5-LOOPS-PART-2-SPEC.md',
  'MODULE-5-LOOPS-PART3':             'MODULE-5-LOOPS-PART-3-SPEC.md',
  'MODULE-5-LOOPS-PART4':             'MODULE-5-LOOPS-PART-4-SPEC.md',
  'MODULE-6-PIRATE-ADVENTURE-PART1':  'MODULE-6-PIRATE-ADVENTURE-PART1-SPECS.md',
  'MODULE-6-PIRATE-ADVENTURE-PART2':  'MODULE-6-PIRATE-ADVENTURE-PART2-SPECS.md',
};

const HELPER_FILE_MAP = {
  'MODULE-1-VARIABLES':               'MODULE-1-VARIABLES-HELPER-BOXES.md',
  'MODULE-2-OPERATORS':               'MODULE-2-OPERATORS-HELPER-BOXES.md',
  'MODULE-3-CONDITIONS-PART1':        'MODULE-3-CONDITIONS-PART1-HELPER-BOXES.md',
  'MODULE-3-CONDITIONS-PART2':        'MODULE-3-CONDITIONS-PART2-HELPER-BOXES.md',
  'MODULE-3-CONDITIONS-PART3':        'MODULE-3-CONDITIONS-PART3-HELPER-BOXES.md',
  'MODULE-3-CONDITIONS-PART4':        'MODULE-3-CONDITIONS-PART4-HELPER-BOXES.md',
  'MODULE-3-CONDITIONS-PART5':        'MODULE-3-CONDITIONS-PART5-HELPER-BOXES.md',
  'MODULE-4-LOGICAL-OPERATORS-PART1': 'MODULE-4-LOGICAL-OPERATORS-PART1-HELPER-BOXES.md',
  'MODULE-4-LOGICAL-OPERATORS-PART2': 'MODULE-4-LOGICAL-OPERATORS-PART2-HELPER-BOXES.md',
  'MODULE-5-LOOPS-PART1':             'MODULE-5-LOOPS-PART-1-HELPER-BOX.md',
  'MODULE-5-LOOPS-PART2':             'MODULE-5-LOOPS-PART-2-HELPER-BOX.md',
  'MODULE-5-LOOPS-PART3':             'MODULE-5-LOOPS-PART-3-HELPER-BOX.md',
  'MODULE-5-LOOPS-PART4':             'MODULE-5-LOOPS-PART-4-HELPER-BOX.md',
  'MODULE-6-PIRATE-ADVENTURE-PART1':  'MODULE-6-PIRATE-ADVENTURE-PART1-HELPER-BOXES.md',
  'MODULE-6-PIRATE-ADVENTURE-PART2':  'MODULE-6-PIRATE-ADVENTURE-PART2-HELPER-BOXES.md',
};

// --- HELPERS ---

function readFile(dir, filename) {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }
  return fs.readFileSync(filePath, 'utf8');
}

function wrapHTML(content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Core Value Fundamentals</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../styles/css/style.css">
</head>
<body>
<main id="main-content">

${content}

</main>
<script src="../../scripts/main.js"></script>
<script src="../../scripts/scroll.js"></script>
</body>
</html>`;
}

function saveHTML(moduleName, content) {
  const folder = MODULE_FOLDER_MAP[moduleName];
  const outputDir = path.join(MODULES_DIR, folder);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const filePath = path.join(outputDir, 'index.html');
  fs.writeFileSync(filePath, wrapHTML(content), 'utf8');
  console.log(`✅ Saved: ${filePath}`);
}

function saveReviewNeeded(moduleName, content) {
  const folder = MODULE_FOLDER_MAP[moduleName];
  const outputDir = path.join(MODULES_DIR, folder);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const filePath = path.join(outputDir, 'REVIEW-NEEDED-index.html');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`⚠️ Saved for review: ${filePath}`);
}

function notify(message) {
  console.log(`\n🔔 NOTIFICATION: ${message}\n`);
  try {
    execSync(`osascript -e 'display notification "${message}" with title "HTML Pipeline"'`);
  } catch {}
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// --- AI SETUP ---
const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.3-70b-versatile'; // confirmed available in March 2026

// Ollama local (primary if available)
async function runOllama(prompt) {
  try {
    const res = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.1:8b',
        prompt,
        stream: false
      })
    });
    if (!res.ok) throw new Error(`Ollama HTTP ${res.status}`);
    const data = await res.json();
    return data.response.trim();
  } catch (err) {
    console.log(`   ⚠️ Ollama not available (${err.message}) — falling back to Groq`);
    throw err;
  }
}

// Groq cloud (main builder)
async function runGroq(prompt) {
  if (!GROQ_API_KEY) throw new Error('GROQ_API_KEY not set in .zshrc');

  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 8000,
      temperature: 0.4
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Groq error ${res.status}: ${errText}`);
  }

  const data = await res.json();
  if (!data.choices?.[0]?.message?.content) {
    throw new Error('Invalid Groq response format');
  }
  return data.choices[0].message.content.trim();
}

// Unified call — Ollama first → Groq
async function callAI(prompt) {
  try {
    console.log(`   🦙 Trying Ollama...`);
    return await runOllama(prompt);
  } catch {
    console.log(`   ⚡ Using Groq (${GROQ_MODEL})...`);
    return await runGroq(prompt);
  }
}

// --- BUILD & VALIDATE PROMPTS (unchanged — they look correct) ---

async function buildHTML(moduleName, foundation, gold, spec, helpers) {
  const prompt = `
You are building a complete HTML exercise file for a children's coding fundamentals course.
This course is LANGUAGE-AGNOSTIC — all exercises use PSEUDOCODE only. No JavaScript, Python, or any real language.

=== GOLD STANDARD HTML STRUCTURE ===
Study this carefully — your output must follow this EXACT structure:

${gold}

=== FOUNDATION RULES ===
${foundation}

=== HELPER BOXES (what children have been taught) ===
${helpers}

=== EXERCISE SPEC (what to build) ===
${spec}

=== BUILD INSTRUCTIONS ===

BRITISH ENGLISH ONLY — CRITICAL:
- lessons (NOT periods)
- colour (NOT color)
- organise (NOT organize)
- maths (NOT math)
- children (NOT students or kids)
- practise (NOT practice as a verb)

PSEUDOCODE RULES — CRITICAL:
- Exercise 1 Part A & Part B → SHOW pseudocode in a code-example div
- Exercises 2-5 Part A & Part B → NO pseudocode shown — Step 4 says "Now write the code to [specific task] in the code block below."

[... the rest of your original prompt remains unchanged ...]

OUTPUT ONLY THE HTML. NO PREAMBLE. NO EXPLANATION.
DO NOT wrap in markdown code fences.
Start with the first <!-- ▼▼▼ --> separator and end with the last <!-- ▲▲▲ -->.
`;

  return await callAI(prompt);
}

async function validateHTML(html, moduleName) {
  const section = getSectionName(moduleName);

  const prompt = `
You are a strict validator for a children's coding course HTML file.

HTML TO VALIDATE:
${html}

[... your original validation prompt remains unchanged ...]

Report each block as:
BLOCK 1 — Language ✅ or ❌ [reason]
...

Then on the final line:
PASS: All blocks passed.
OR
FAIL: [list which blocks failed]
`;

  return await callAI(prompt);
}

function getSectionName(moduleName) {
  if (moduleName.startsWith('MODULE-1')) return 'variables';
  if (moduleName.startsWith('MODULE-2')) return 'operations';
  if (moduleName.startsWith('MODULE-3')) return 'conditions';
  if (moduleName.startsWith('MODULE-4')) return 'logicalOperators';
  if (moduleName.startsWith('MODULE-5')) return 'loops';
  if (moduleName.startsWith('MODULE-6')) return 'pirateAdventure';
  return 'unknown';
}

// --- MAIN ---

async function main() {
  const moduleName = process.argv[2]?.toUpperCase();
  if (!moduleName || !MODULE_FOLDER_MAP[moduleName]) {
    console.error('❌ Provide valid module e.g. node build-html.js MODULE-1-VARIABLES');
    console.error('Valid:', Object.keys(MODULE_FOLDER_MAP).join(', '));
    process.exit(1);
  }

  const specFile   = SPEC_FILE_MAP[moduleName];
  const helperFile = HELPER_FILE_MAP[moduleName];
  const outputFolder = MODULE_FOLDER_MAP[moduleName];
  const startTime = Date.now();

  console.log(`\n🚀 HTML Generator — ${moduleName}`);
  console.log(`📂 Output: modules/${outputFolder}/index.html`);
  console.log(`─────────────────────────────────────\n`);

  // Load files
  let foundation = '';
  for (const f of FOUNDATION_FILES) {
    foundation += `\n\n=== ${f} ===\n\n` + readFile(MAIN_TEMPLATE_DIR, f);
  }
  const gold     = readFile(MAIN_TEMPLATE_DIR, GOLD_STANDARD_FILE);
  const spec     = readFile(MAIN_TEMPLATE_DIR, specFile);
  const helpers  = readFile(MAIN_TEMPLATE_DIR, helperFile);

  let attempt = 0;
  let html = '';
  let validation = '';

  while (attempt < MAX_ATTEMPTS) {
    attempt++;
    console.log(`\n🔄 Attempt ${attempt}/${MAX_ATTEMPTS}`);

    try {
      console.log('   ✍️ Building...');
      html = await buildHTML(moduleName, foundation, gold, spec, helpers);

      console.log('   🔍 Validating...');
      validation = await validateHTML(html, moduleName);

      if (validation.includes('PASS: All blocks passed')) {
        console.log(`\n✅ PASSED!`);
        break;
      }
      console.log(`❌ Failed:\n${validation}`);
    } catch (err) {
      console.error(`   ❌ Error: ${err.message}`);
    }

    if (attempt < MAX_ATTEMPTS) {
      console.log(`   ⏳ Wait ${DELAY_BETWEEN_ATTEMPTS/1000}s...`);
      await sleep(DELAY_BETWEEN_ATTEMPTS);
    }
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const timeStr = elapsed > 60 ? `${Math.floor(elapsed/60)}m ${elapsed%60}s` : `${elapsed}s`;

  if (validation.includes('PASS: All blocks passed')) {
    saveHTML(moduleName, html);
    notify(`${moduleName} built OK (${timeStr})`);
    console.log(`\n🎉 Done! Time: ${timeStr}`);
  } else {
    saveReviewNeeded(moduleName, html);
    notify(`REVIEW NEEDED: ${moduleName} (${timeStr})`);
    console.log(`\n⚠️ Failed after ${MAX_ATTEMPTS} attempts — saved REVIEW-NEEDED-index.html`);
  }
}

main().catch(err => {
  console.error('❌ Fatal:', err);
  process.exit(1);
});