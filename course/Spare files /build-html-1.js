#!/usr/bin/env node

// =============================================================
// HTML EXERCISE GENERATOR PIPELINE
// core-value-fundamentals — Language-Agnostic Edition
// Updated: March 2026 — fixed prompt, upgraded model, Ollama fallback
// =============================================================
//
// USAGE:
//   node build-html.js MODULE-3-CONDITIONS-PART1
//
// OUTPUT:
//   modules/module-3-conditions-part1/index.html
//
// REQUIRES:
//   GROQ_API_KEY  (primary)
//   Ollama running locally (fallback — ollama serve)
// =============================================================

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// --- LOAD PIPELINE CONFIG ---
const CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, 'pipeline-config.json'), 'utf8'));

// --- CONFIG ---
const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');
const MODULES_DIR       = path.join(__dirname, 'modules');
const MAX_ATTEMPTS      = CONFIG.pipeline.maxAttempts;

// --- AI CONFIG (from pipeline-config.json) ---
const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const GROQ_MODEL   = CONFIG.aiConfig.groq.model;
const GROQ_URL     = CONFIG.aiConfig.groq.url;

const OLLAMA_URL   = CONFIG.aiConfig.ollama.url;
const OLLAMA_MODEL = CONFIG.aiConfig.ollama.model;

// --- GEMINI CONFIG (from pipeline-config.json) ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_MODEL   = CONFIG.aiConfig.gemini.model;
const GEMINI_URL     = CONFIG.aiConfig.gemini.url;

// --- API USAGE TRACKER (from pipeline-config.json) ---
const API_LIMITS = {
  groq:   { max: CONFIG.aiConfig.groq.maxDaily,   used: 0, cutoff: CONFIG.aiConfig.groq.cutoff },
  gemini: { max: CONFIG.aiConfig.gemini.maxDaily,  used: 0, cutoff: CONFIG.aiConfig.gemini.cutoff },
};

function trackUsage(provider) {
  if (API_LIMITS[provider]) API_LIMITS[provider].used++;
}

function isAtLimit(provider) {
  const p = API_LIMITS[provider];
  if (!p) return false;
  return p.used >= Math.floor(p.max * p.cutoff);
}

function progressBar(used, max, cutoff) {
  const total = 20;
  const filled = Math.round((used / max) * total);
  const bar = '█'.repeat(filled) + '░'.repeat(total - filled);
  const pct = Math.round((used / max) * 100);
  const limit = Math.floor(max * cutoff);
  const warning = used >= limit ? ' ⚠️  LIMIT REACHED' : '';
  return `${bar}  ${used}/${max} (${pct}%)${warning}`;
}

function printAPIStatus() {
  console.log(`\n   📊 API STATUS:`);
  console.log(`   Groq:   ${progressBar(API_LIMITS.groq.used, API_LIMITS.groq.max, API_LIMITS.groq.cutoff)}`);
  if (GEMINI_API_KEY) {
    console.log(`   Gemini: ${progressBar(API_LIMITS.gemini.used, API_LIMITS.gemini.max, API_LIMITS.gemini.cutoff)}`);
  }
  console.log(`   Ollama: always available ✅\n`);
}

// Fast mode — set by rebuild-fix-errors.js, removes all delays
const FAST_MODE = process.env.FAST_MODE === 'true';

const DELAY_RETRY             = FAST_MODE ? 0 : 30_000;
const DELAY_RATE_LIMIT        = 90_000;   // Always wait for rate limits — even in FAST mode
const DELAY_BETWEEN_PARTS     = FAST_MODE ? 0 : 60_000;
const DELAY_BETWEEN_EXERCISES = FAST_MODE ? 0 : 60_000;

// --- MODULE MAPS (from pipeline-config.json) ---
function getModuleConfig(moduleId) {
  const mod = CONFIG.modules.find(m => m.id === moduleId);
  if (!mod) return null;
  return mod;
}

function getModuleFolder(moduleId) {
  const mod = getModuleConfig(moduleId);
  return mod ? mod.folder : null;
}

function getSpecFile(moduleId) {
  const mod = getModuleConfig(moduleId);
  return mod ? mod.spec : null;
}

function getHelperFile(moduleId) {
  const mod = getModuleConfig(moduleId);
  return mod ? mod.helper : null;
}

function getSectionName(moduleId) {
  const mod = getModuleConfig(moduleId);
  return mod ? mod.section : 'unknown';
}

const ALL_MODULE_IDS = CONFIG.modules.map(m => m.id);

// --- HELPERS ---

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function readFile(dir, filename) {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }
  return fs.readFileSync(filePath, 'utf8');
}


function extractExerciseSpec(specContent, exerciseNumber) {
  const lines = specContent.split('\n');
  const startMarker = `## EXERCISE ${exerciseNumber}:`;
  const nextMarker  = `## EXERCISE ${exerciseNumber + 1}:`;
  let start = -1, end = lines.length;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith(startMarker)) start = i;
    if (start !== -1 && lines[i].startsWith(nextMarker)) { end = i; break; }
  }
  if (start === -1) return null;
  return lines.slice(start, end).join('\n');
}

function extractHelperHTML(markdownContent) {
  // --- Try to extract existing ```html fences (old format) ---
  const htmlBlocks = [];
  const parts = markdownContent.split('```');
  for (let i = 1; i < parts.length; i += 2) {
    let block = parts[i];
    if (block.startsWith('html')) block = block.slice(4);
    block = block.trim();
    if (block.includes('<div') || block.includes('<h3') || block.includes('<p>')) {
      htmlBlocks.push(block);
    }
  }
  if (htmlBlocks.length > 0) return htmlBlocks.join('\n\n');

  // --- Fallback: convert plain markdown helper boxes to HTML ---
  console.log('   ℹ️  Helper box file is plain markdown — converting to HTML automatically...');
  return convertMarkdownHelpersToHTML(markdownContent);
}

function convertMarkdownHelpersToHTML(md) {
  // Strip everything before the first HELPER BOX heading (skips metadata/header block)
  const firstBoxIndex = md.search(/^## HELPER BOX/im);
  if (firstBoxIndex !== -1) md = md.slice(firstBoxIndex);

  // Strip NOTES FOR PIPELINE / NOTES FOR AI section at the bottom
  md = md.replace(/\n## NOTES FOR[\s\S]*/i, '');

  // Strip --- horizontal rules (they appear between boxes in some files and confuse the parser)
  md = md.replace(/^---+\s*$/gm, '');

  const lines = md.split('\n');
  const boxes = [];
  let currentBox = null;
  let currentList = null;
  let insideCodeBlock = false;
  let codeLines = [];

  function closeList() {
    if (currentList && currentBox) {
      currentBox.lines.push(`<ul class="indented-list">${currentList.join('')}</ul>`);
      currentList = null;
    }
  }

  function closeCode() {
    if (insideCodeBlock && currentBox) {
      currentBox.lines.push(`<div class="code-block"><code>${codeLines.join('<br>')}</code></div>`);
      insideCodeBlock = false;
      codeLines = [];
    }
  }

  function closeBox() {
    closeList();
    closeCode();
    if (currentBox) boxes.push(currentBox);
    currentBox = null;
  }

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    // New box: ## heading — look ahead for a **Title:** line on the next non-blank line
    if (/^#{1,3} /.test(line)) {
      closeBox();
      let title = line.replace(/^#+\s*/, '').trim();
      // Look ahead: if next non-blank line is **Title:** use that instead
      for (let j = i + 1; j < Math.min(i + 4, lines.length); j++) {
        const peek = lines[j].trim();
        if (peek === '') continue;
        const titleMatch = peek.match(/^\*\*Title:\*\*\s*(.+)/);
        if (titleMatch) {
          title = titleMatch[1].trim();
          i = j; // skip that line
        }
        break;
      }
      currentBox = { title, lines: [] };
      continue;
    }

    if (!currentBox) continue;

    // Fenced code block start/end
    if (line.startsWith('```')) {
      if (!insideCodeBlock) {
        closeList();
        insideCodeBlock = true;
        codeLines = [];
      } else {
        closeCode();
      }
      continue;
    }

    if (insideCodeBlock) {
      codeLines.push(line.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      continue;
    }

    // Bullet list items
    if (/^[-*] /.test(line)) {
      if (!currentList) currentList = [];
      const content = line.replace(/^[-*] /, '');
      const html = convertInline(content);
      currentList.push(`<li>${html}</li>`);
      continue;
    }

    // Blank line — close list if open
    if (line === '') {
      closeList();
      continue;
    }

    // > blockquote → note box
    if (line.startsWith('> ')) {
      closeList();
      const content = line.slice(2).trim();
      currentBox.lines.push(`<p class="note">${convertInline(content)}</p>`);
      continue;
    }

    // Regular paragraph
    closeList();
    currentBox.lines.push(`<p>${convertInline(line)}</p>`);
  }

  closeBox();

  if (boxes.length === 0) return md; // nothing parsed, return raw

  return boxes.map((box, idx) => {
    const inner = box.lines.join('\n');
    return `<!-- Helper Box ${idx + 1}: ${box.title} -->
<div class="helper-box">
<h3 class="box-title">${box.title}</h3>

${inner}
</div>
<!-- End of Helper Box ${idx + 1} -->`;
  }).join('\n\n');
}

function convertInline(text) {
  // Bold **text** or __text__
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__(.+?)__/g, '<strong>$1</strong>');
  // Inline code `text`
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Italic *text*
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return text;
}

function cleanAIResponse(text) {
  text = text.replace(/^```html\s*/i, '');
  text = text.replace(/^```\s*/i, '');
  text = text.replace(/```\s*$/i, '');
  text = text.replace(/^<!DOCTYPE[^>]*>/i, '');
  text = text.replace(/<html[^>]*>[\s\S]*?<body[^>]*>/i, '');
  text = text.replace(/<\/body>[\s\S]*?<\/html>/i, '');
  return text.trim();
}

function saveHTML(moduleName, content) {
  const folder    = getModuleFolder(moduleName);
  const outputDir = path.join(MODULES_DIR, folder);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const filePath  = path.join(outputDir, 'index.html');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Saved: ${filePath}`);
}

function saveReviewNeeded(moduleName, content) {
  const folder    = getModuleFolder(moduleName);
  const outputDir = path.join(MODULES_DIR, folder);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const filePath  = path.join(outputDir, 'REVIEW-NEEDED-index.html');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`⚠️  Saved for review: ${filePath}`);
}

function notify(message) {
  console.log(`\n🔔 NOTIFICATION: ${message}\n`);
  try { execSync(`osascript -e 'display notification "${message}" with title "HTML Pipeline"'`); } catch {}
}

// --- AI CALLS ---

async function callGroq(prompt) {
  if (!GROQ_API_KEY) throw new Error('GROQ_API_KEY not set');

  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 4096,
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    if (res.status === 429) throw new Error(`RATE_LIMIT: ${err}`);
    throw new Error(`Groq error ${res.status}: ${err}`);
  }

  const data = await res.json();
  if (!data.choices?.[0]?.message?.content) throw new Error('Invalid Groq response');
  return cleanAIResponse(data.choices[0].message.content);
}

async function callGemini(prompt) {
  if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY not set');
  if (isAtLimit('gemini')) throw new Error('Gemini 90% daily limit reached');

  const res = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { 
        temperature: 0.3, 
        maxOutputTokens: 8192,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    if (res.status === 429) throw new Error(`RATE_LIMIT: ${err}`);
    throw new Error(`Gemini error ${res.status}: ${err}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Invalid Gemini response');
  trackUsage('gemini');
  return cleanAIResponse(text);
}

async function callOllama(prompt) {
  const OLLAMA_TIMEOUT = 90_000; // 90 seconds

  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, OLLAMA_TIMEOUT);

  try {
    const res = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages: [{ role: 'user', content: prompt }],
        stream: false,
      }),
      signal: controller.signal,
    });

    if (!res.ok) throw new Error(`Ollama error ${res.status}: ${await res.text()}`);
    const data = await res.json();
    if (!data.message?.content) throw new Error('Invalid Ollama response');
    return cleanAIResponse(data.message.content);
  } catch (e) {
    if (e.name === 'AbortError') throw new Error('Ollama timed out after 90s — it may be hung');
    throw e;
  } finally {
    clearTimeout(timeout);
  }
}

// Waterfall: Groq → Gemini → Ollama → throw
async function callAI(prompt, label = '') {

  // --- GROQ ---
  if (GROQ_API_KEY && !isAtLimit('groq')) {
    try {
      console.log(`   🤖 Groq (${GROQ_MODEL})...`);
      const result = await callGroq(prompt);
      trackUsage('groq');
      printAPIStatus();
      return result;
    } catch (e) {
      if (e.message.startsWith('RATE_LIMIT')) {
        console.log(`   ⚠️  Groq rate limited — waiting 90s then retrying Groq...`);
        await sleep(DELAY_RATE_LIMIT);
        try {
          console.log(`   🔄 Retrying Groq...`);
          const result = await callGroq(prompt);
          trackUsage('groq');
          printAPIStatus();
          return result;
        } catch (e2) {
          if (e2.message.startsWith('RATE_LIMIT')) {
            console.log(`   ⚠️  Groq rate limited again — waiting another 90s...`);
            await sleep(DELAY_RATE_LIMIT);
            try {
              console.log(`   🔄 Final Groq retry...`);
              const result = await callGroq(prompt);
              trackUsage('groq');
              printAPIStatus();
              return result;
            } catch (e3) {
              console.log(`   ⚠️  Groq failed 3 times — falling back to Gemini...`);
            }
          } else {
            console.log(`   ⚠️  Groq failed again — falling back to Gemini...`);
          }
        }
      } else {
        console.log(`   ⚠️  Groq failed: ${e.message.slice(0, 80)} — falling back to Gemini...`);
      }
    }
  } else if (isAtLimit('groq')) {
    console.log(`   ⚠️  Groq at 90% daily limit — skipping to Gemini...`);
  }

  // --- GEMINI ---
  if (GEMINI_API_KEY && !isAtLimit('gemini')) {
    try {
      console.log(`   🔄 Falling back to Gemini (${GEMINI_MODEL})...`);
      const result = await callGemini(prompt);
      console.log(`   ⏳ Gemini cooldown 15s (5 RPM limit)...`);
      await sleep(15_000);
      printAPIStatus();
      return result;
    } catch (e) {
      if (e.message.startsWith('RATE_LIMIT')) {
        console.log(`   ⚠️  Gemini rate limited — falling back to Ollama...`);
      } else {
        console.log(`   ⚠️  Gemini failed: ${e.message.slice(0, 80)}`);
      }
    }
  } else if (GEMINI_API_KEY && isAtLimit('gemini')) {
    console.log(`   ⚠️  Gemini at 90% daily limit — skipping to Ollama...`);
  }

  // --- OLLAMA ---
  try {
    console.log(`   🔄 Falling back to Ollama (${OLLAMA_MODEL})...`);
    const result = await callOllama(prompt);
    printAPIStatus();
    return result;
  } catch (e) {
    console.log(`   ⚠️  Ollama failed: ${e.message.slice(0, 80)}`);
    console.log(`   💡 Is Ollama running? Start it with: ollama serve`);
  }

  printAPIStatus();
  throw new Error(`All AI providers failed${label ? ` for ${label}` : ''}`);
}

// --- BUILD PROMPT ---

function buildPrompt(exNum, part, sectionName, exerciseSpec, helperSummary) {
  const isEx1     = exNum === 1;
  const partLabel = `Part ${part.toUpperCase()}`;
  const id        = `${sectionName}-ex${exNum}-part-${part}`;

  const fixedFooter = `<label for="${id}" class="code-label">Add your code in the code block below</label>
<div class="code-block" contenteditable="true" id="${id}" data-section="${sectionName}"></div>

<div class="exercise-buttons">
  <button class="hint-button" data-section="${sectionName}" data-ex="${exNum}-part-${part}">Hint</button>
  <button class="run-button" data-section="${sectionName}" data-ex="${exNum}-part-${part}">Run My Code</button>
  <button class="reset-button" data-section="${sectionName}" data-ex="${exNum}-part-${part}">Reset My Code</button>
</div>

<p class="hint" id="${sectionName}-hint${exNum}-part-${part}"></p>
<pre class="output-block" id="${sectionName}-output${exNum}-part-${part}"></pre>
<pre class="answer-block" id="${sectionName}-answer${exNum}-part-${part}"></pre>`;

  let structureRules = '';

  if (isEx1 && part === 'a') {
    structureRules = `
STRUCTURE — output these elements in this exact order:

1. <h3 class="exercise-title">Exercise ${exNum}: [title from spec] [emoji]</h3>

2. <h4 class="sub-title">Part A: [short title]</h4>

3. <p>[Scenario paragraph — 2–3 sentences. British English. Variable names in quotes: "child name" not childName.]</p>

4. <ul class="indented-list">
     <li><strong>Step 1:</strong>&nbsp;&nbsp;Create a variable named "[natural language]" and set its value to <code>VALUE</code>.</li>
     <li><strong>Step 2:</strong>&nbsp;&nbsp;Create a variable named "[natural language]" and set its value to <code>VALUE</code>.</li>
     <li><strong>Step 3:</strong>&nbsp;&nbsp;Use PRINT to display [what to show].</li>
     <li><strong>Step 4:</strong>&nbsp;&nbsp;Now [theme-specific action e.g. "write the code to set up the classroom"]:
       <div class="code-example">
         <code>SET variableName = value<br>SET variableName2 = value2<br>PRINT "label: ", variableName</code>
       </div>
     </li>
   </ul>

PSEUDOCODE RULES: Use SET and PRINT only. No real syntax. <br> for line breaks. No text before the div.`;

  } else if (isEx1 && part === 'b') {
    structureRules = `
STRUCTURE — output these elements in this exact order:

1. <h4 class="sub-title">Part B: [short title]</h4>

2. <p>[One linking sentence from Part A e.g. "Great work! Now let's try with different values."]</p>

3. <p>[Part B scenario — 2–3 sentences with the Part B values from the spec. Variable names in quotes.]</p>

4. <ul class="indented-list">
     <li><strong>Step 1:</strong>&nbsp;&nbsp;Create a variable named "[natural language]" and set its value to <code>VALUE</code>.</li>
     <li><strong>Step 2:</strong>&nbsp;&nbsp;Create a variable named "[natural language]" and set its value to <code>VALUE</code>.</li>
     <li><strong>Step 3:</strong>&nbsp;&nbsp;Use PRINT to display [what to show].</li>
     <li><strong>Step 4:</strong>&nbsp;&nbsp;Now [theme-specific action]:
       <div class="code-example">
         <code>SET variableName = value<br>SET variableName2 = value2<br>PRINT "label: ", variableName</code>
       </div>
     </li>
   </ul>

⚠️ CRITICAL: Part B MUST also show pseudocode in a code-example div — same as Part A.`;

  } else if (part === 'a') {
    structureRules = `
STRUCTURE — output these elements in this exact order:

1. <h3 class="exercise-title">Exercise ${exNum}: [title from spec] [emoji]</h3>

2. <h4 class="sub-title">Part A: [short title]</h4>

3. <p>[Scenario paragraph — 2–3 sentences. British English. Variable names in quotes.]</p>

4. <ul class="indented-list">
     <li><strong>Step 1:</strong>&nbsp;&nbsp;Create a variable named "[natural language]" and set its value to <code>VALUE</code>.</li>
     <li><strong>Step 2:</strong>&nbsp;&nbsp;Create a variable named "[natural language]" and set its value to <code>VALUE</code>.</li>
     <li><strong>Step 3:</strong>&nbsp;&nbsp;Use PRINT to display [what to show].</li>
     <li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code to [specific task from steps above] in the code block below.</li>
   </ul>

⚠️ Step 4 is ONE sentence only — no pseudocode, no code-example div.`;

  } else {
    structureRules = `
STRUCTURE — output these elements in this exact order:

1. <h4 class="sub-title">Part B: [short title]</h4>

2. <p>[One linking sentence from Part A.]</p>

3. <p>[Part B scenario — 2–3 sentences with Part B values. Variable names in quotes.]</p>

4. <ul class="indented-list">
     <li><strong>Step 1:</strong>&nbsp;&nbsp;Create a variable named "[natural language]" and set its value to <code>VALUE</code>.</li>
     <li><strong>Step 2:</strong>&nbsp;&nbsp;Create a variable named "[natural language]" and set its value to <code>VALUE</code>.</li>
     <li><strong>Step 3:</strong>&nbsp;&nbsp;Use PRINT to display [what to show].</li>
     <li><strong>Step 4:</strong>&nbsp;&nbsp;Now write the code to [specific task from steps above] in the code block below.</li>
   </ul>

⚠️ Step 4 is ONE sentence only — no pseudocode, no code-example div.`;
  }

  return `You are generating a complete HTML fragment for a children's coding course.
Children are aged 10–12, based in the UK. British English only throughout.

=== EXERCISE SPEC ===
${exerciseSpec}

=== WHAT HAS BEEN TAUGHT ===
${helperSummary}

=== YOUR TASK ===
Generate the HTML fragment for Exercise ${exNum} ${partLabel}.
${structureRules}

=== COPY THIS FOOTER EXACTLY — DO NOT CHANGE ANY IDs OR ATTRIBUTES ===
${fixedFooter}

=== BANNED — NEVER USE ===
- console, console.log
- let, const, var
- camelCase or snake_case in step instructions (e.g. childName ❌ — use "child name" ✅)
- template literals or backticks
- "students" or "student" → use "children" or "child"
- "programming" → use "coding"
- American spellings in readable text: color, center, math, organize, recognize

=== OUTPUT ===
Raw HTML fragment only. No preamble. No explanation. No markdown fences.
Start with the first HTML tag. End with the last </pre> tag.`;
}

// --- VALIDATE PART ---

function validatePart(html, exNum, part, sectionName) {
  const issues = [];
  const id = `${sectionName}-ex${exNum}-part-${part}`;

  if (!html.includes('Add your code in the code block below'))
    issues.push('Wrong or missing label text');
  if (!html.includes(`id="${id}"`))
    issues.push(`Missing id="${id}"`);
  if (!html.includes(`id="${sectionName}-hint${exNum}-part-${part}"`))
    issues.push('Missing hint id');
  if (!html.includes(`id="${sectionName}-output${exNum}-part-${part}"`))
    issues.push('Missing output id');
  if (!html.includes(`id="${sectionName}-answer${exNum}-part-${part}"`))
    issues.push('Missing answer id');
  if (!html.includes(`data-section="${sectionName}"`))
    issues.push(`Missing data-section="${sectionName}"`);
  if (!html.includes('Run My Code'))
    issues.push('Missing Run My Code button');
  if (!html.includes('Reset My Code'))
    issues.push('Missing Reset My Code button');
  if (!html.includes('Hint'))
    issues.push('Missing Hint button');
  if (!html.includes('class="output-block"'))
    issues.push('Missing output-block');
  if (!html.includes('class="answer-block"'))
    issues.push('Missing answer-block');

  // JS syntax
  if (html.includes('console.log'))  issues.push('Contains console.log');
  if (/\blet /.test(html))           issues.push('Contains "let" keyword');
  if (/\bconst /.test(html))         issues.push('Contains "const" keyword');
  if (/\bvar /.test(html))           issues.push('Contains "var" keyword');

  // Banned words — from pipeline-config.json
  for (const { word, replace, reason } of CONFIG.bannedWords) {
    const w = word.trim();
    if (w === 'let ' || w === 'const ' || w === 'var ' || w === 'console') continue; // handled above
    const regex = new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    // CSS exceptions
    if (w === 'color' && /background-color|border-color|color:|color\s*=/i.test(html)) continue;
    if (w === 'center' && /text-align\s*:\s*center/i.test(html)) continue;
    if (regex.test(html)) issues.push(`Contains "${w}" — use "${replace}" instead`);
  }

  // Exercise 1 — both parts must have pseudocode
  if (exNum === 1 && !html.includes('class="code-example"'))
    issues.push('Exercise 1 missing code-example div with pseudocode');

  return issues.length === 0 ? 'PASS' : 'FAIL: ' + issues.join(', ');
}

// --- MAIN ---

async function main() {
  const moduleName = process.argv[2]?.toUpperCase();

  if (!moduleName || !getModuleConfig(moduleName)) {
    console.error('❌ Provide a valid module name.');
    console.error('   Example: node build-html.js MODULE-3-CONDITIONS-PART1');
    console.error(`   Valid: ${ALL_MODULE_IDS.join(', ')}`);
    process.exit(1);
  }

  if (!GROQ_API_KEY) {
    console.warn('⚠️  GROQ_API_KEY not set — will use Ollama only');
  }

  const sectionName   = getSectionName(moduleName);
  const specContent   = readFile(MAIN_TEMPLATE_DIR, getSpecFile(moduleName));
  const helperContent = readFile(MAIN_TEMPLATE_DIR, getHelperFile(moduleName));
  const helperSummary = helperContent.split('\n').slice(0, 30).join('\n');
  const startTime     = Date.now();

  console.log(`\n🚀 HTML EXERCISE GENERATOR`);
  console.log(`📄 Module:   ${moduleName}`);
  console.log(`🤖 Primary:  Groq (${GROQ_MODEL})`);
  console.log(`🔄 Fallback: Ollama (${OLLAMA_MODEL})`);
  console.log(`📝 Mode:     Part A + Part B separately`);
  console.log(`─────────────────────────────────────\n`);

  const allParts = [];
  let allPassed  = true;

  for (let exNum = 1; exNum <= 5; exNum++) {
    const exerciseSpec = extractExerciseSpec(specContent, exNum);
    if (!exerciseSpec) {
      console.log(`⚠️  Exercise ${exNum} not found in spec — skipping`);
      continue;
    }

    console.log(`\n📝 Exercise ${exNum} / 5`);

    for (const part of ['a', 'b']) {
      const label = `Ex${exNum} Part ${part.toUpperCase()}`;
      console.log(`\n   📌 ${label}...`);
      let partHTML = '';
      let passed   = false;

      for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        try {
          console.log(`   ⚡ Building (attempt ${attempt} of ${MAX_ATTEMPTS})...`);
          const prompt = buildPrompt(exNum, part, sectionName, exerciseSpec, helperSummary);
          partHTML = await callAI(prompt, label);

          console.log(`   🔍 Validating...`);
          console.log(`   📄 Preview: ${partHTML.slice(0, 120).replace(/\n/g, ' ')}...`);

          const result = validatePart(partHTML, exNum, part, sectionName);

          if (result === 'PASS') {
            console.log(`   ✅ ${label} passed!`);
            passed = true;
            break;
          } else {
            console.log(`   ❌ ${result}`);
          }

        } catch (e) {
          console.log(`   ❌ Error: ${e.message.slice(0, 100)}`);
        }

        if (attempt < MAX_ATTEMPTS) {
          console.log(`   ⏳ Retrying in 30s...`);
          await sleep(DELAY_RETRY);
        }
      }

      allParts.push(partHTML);
      if (!passed) {
        allPassed = false;
        console.log(`   ⚠️  ${label} did not fully pass — will save for review`);
      }

      if (part === 'a') {
        console.log(`\n   ⏳ 60s gap before Part B...`);
        await sleep(DELAY_BETWEEN_PARTS);
      }
    }

    if (exNum < 5) {
      console.log(`\n   ⏳ 60s gap before Exercise ${exNum + 1}...`);
      await sleep(DELAY_BETWEEN_EXERCISES);
    }
  }

  // --- Assemble final HTML ---

  const moduleTitle = moduleName
    .replace('MODULE-', 'Module ')
    .replace(/-/g, ' ')
    .replace(/\bPART\b/g, 'Part')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');

  const exercisesTitle = `${moduleTitle} — Exercises`;

  const exerciseBlocks = [];
  let partIndex = 0;
  for (let i = 1; i <= 5; i++) {
    const partA = allParts[partIndex++] || '';
    const partB = allParts[partIndex++] || '';
    if (!partA && !partB) continue;
    const exTitle = partA.match(/class="exercise-title"[^>]*>([^<]+)/)?.[1]?.trim() || `Exercise ${i}`;
    exerciseBlocks.push(
`<!-- ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ -->
<!-- █  // Start::: Exercise ${i}                       █ -->
<!-- █  // ${exTitle.padEnd(43)}█ -->
<!-- ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ -->
<div class="exercise-box" id="${sectionName}-exercise-${i}">
${partA}
${partB}
</div>
<!-- ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ -->
<!-- █  // End::: Exercise ${i}                         █ -->
<!-- ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ -->`);
  }

  const finalHTML = `<!DOCTYPE html>
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
<!-- ============================================================ -->
<!-- GOLD STANDARD EXERCISE FILE                                  -->
<!-- core-value-fundamentals                                      -->
<!-- Language-Agnostic Edition                                    -->
<!-- ============================================================ -->

<!-- ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ -->
<!-- █  // Start::: ${moduleName.padEnd(40)}█ -->
<!-- █  // ${moduleTitle.padEnd(46)}█ -->
<!-- ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ -->
<section class="page" id="${sectionName}-module">

<h2 class="module-title">${moduleTitle}</h2>

<!-- ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ -->
<!-- █  // Start::: Helper Boxes                     █ -->
<!-- ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ -->
${extractHelperHTML(helperContent)}
<!-- ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ -->
<!-- █  // End::: Helper Boxes                       █ -->
<!-- ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ -->

<!-- ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ -->
<!-- █  // Start::: Exercises                        █ -->
<!-- ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ -->
<h2 class="module-title">${exercisesTitle}</h2>

${exerciseBlocks.join('\n\n')}

<!-- ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ -->
<!-- █  // End::: Exercises                          █ -->
<!-- ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ -->

</section>
<!-- ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ -->
<!-- █  // End::: ${moduleName.padEnd(40)}█ -->
<!-- ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ -->

</main>
<script src="../../scripts/main.js"></script>
<script src="../../scripts/scroll.js"></script>
</body>
</html>`;

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const timeStr = elapsed > 60 ? `${Math.floor(elapsed / 60)}m ${elapsed % 60}s` : `${elapsed}s`;

  if (allPassed) {
    saveHTML(moduleName, finalHTML);
    console.log(`\n🎉 Done! (${timeStr})`);
    notify(`${moduleName} built successfully! (${timeStr})`);
  } else {
    saveReviewNeeded(moduleName, finalHTML);
    console.log(`\n⚠️  Some parts need review — saved as REVIEW-NEEDED-index.html (${timeStr})`);
    notify(`REVIEW NEEDED: ${moduleName} (${timeStr})`);
  }
}

main().catch(err => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});
