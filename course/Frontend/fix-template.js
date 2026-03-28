#!/usr/bin/env node

// =============================================================
// FIX-TEMPLATE.js
// core-value-fundamentals
// =============================================================
// Pure Node.js — no AI, no quota, no heat
// Fixes banned words and adds RULE 7 to template master file
//
// USAGE:
//   node fix-template.js
// =============================================================

const fs = require('fs');
const path = require('path');

const MAIN_TEMPLATE_DIR = path.join(__dirname, 'mainTemplate');
const FILENAME = '2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md';
const filePath = path.join(MAIN_TEMPLATE_DIR, FILENAME);

// ---------------------------------------------------------------
// RULE 7 CONTENT
// ---------------------------------------------------------------
const RULE_7 = `
---

## RULE 7: BANNED WORDS — NEVER USE THESE

The following words are banned from ALL exercises, helper boxes, and any content children will read.
No exceptions. If you are unsure — do not use it.

### Banned — Use These Instead

| Never Use | Use Instead |
|---|---|
| students / student | children / child |
| period / periods (school) | lesson / lessons |
| program / programming | code / coding |
| practice (verb) | practise |
| color | colour |
| organize | organise |
| recognize | recognise |
| center | centre |
| math | maths |
| console | never use this word |
| let / const / var | SET (pseudocode only) |
| AI tool names (Gemini, ChatGPT etc) | AI |

### Why This Matters
- This course is built for children in the UK — British English only
- "Period" means something very different to children in the UK — always say "lesson"
- "Program/programming" is too technical and language-specific — say "code/coding"
- Real code syntax (let, const, var) must never appear — pseudocode only (SET, PRINT, IF, FOR)

---
`;

// ---------------------------------------------------------------
// BANNED WORD FIXES
// Line by line so we can be smart about context
// ---------------------------------------------------------------
function fixLine(line) {
  // Skip lines inside ❌ WRONG examples
  if (line.includes('❌') || line.includes('WRONG')) return line;
  // Skip CSS property values
  if (line.includes('text-align: center') || line.includes('background-color') || line.includes('color:')) return line;

  let fixed = line;

  // students/student
  fixed = fixed.replace(/\bStudents\b/g, 'Children');
  fixed = fixed.replace(/\bstudents\b/g, 'children');
  fixed = fixed.replace(/\bStudent\b/g, 'Child');
  fixed = fixed.replace(/\bstudent\b/g, 'child');

  // program/programming (not inside code examples showing JS)
  if (!line.includes('```') && !line.includes('console.log')) {
    fixed = fixed.replace(/\bprogramming\b/g, 'coding');
    fixed = fixed.replace(/\bProgramming\b/g, 'Coding');
    fixed = fixed.replace(/\bprogram\b/g, 'code');
    fixed = fixed.replace(/\bProgram\b/g, 'Code');
  }

  // practice as verb (not "best practice" noun)
  fixed = fixed.replace(/\bpractise\b/g, 'practise'); // already correct, skip
  fixed = fixed.replace(/\bpractice\b(?! tip)/g, 'practise');
  fixed = fixed.replace(/\bPractice\b(?! tip)/g, 'Practise');

  // colour/organise/recognise
  if (!line.includes('color:') && !line.includes('background-color')) {
    fixed = fixed.replace(/\bcolor\b/g, 'colour');
    fixed = fixed.replace(/\bColor\b/g, 'Colour');
  }
  fixed = fixed.replace(/\borganize\b/g, 'organise');
  fixed = fixed.replace(/\bOrganize\b/g, 'Organise');
  fixed = fixed.replace(/\brecognize\b/g, 'recognise');
  fixed = fixed.replace(/\bRecognize\b/g, 'Recognise');

  return fixed;
}

// ---------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------
function main() {
  console.log('\n🔧 FIX-TEMPLATE — Pure Node.js');
  console.log('═══════════════════════════════════\n');

  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  const original = fs.readFileSync(filePath, 'utf8');
  const lines = original.split('\n');
  console.log(`✅ File loaded (${lines.length} lines)`);

  // Check if RULE 7 already exists
  if (original.includes('RULE 7: BANNED WORDS')) {
    console.log('ℹ️  RULE 7 already exists — skipping insertion');
  }

  // Fix each line
  console.log('🔄 Fixing banned words...');
  const fixedLines = lines.map(fixLine);

  // Insert RULE 7 after RULE 6
  let content = fixedLines.join('\n');
  
  if (!original.includes('RULE 7: BANNED WORDS')) {
    // Find end of RULE 6 section
    const rule6End = content.indexOf('\n---\n\n# PART 1:');
    if (rule6End !== -1) {
      content = content.slice(0, rule6End) + RULE_7 + content.slice(rule6End + 5);
      console.log('✅ RULE 7 inserted after RULE 6');
    } else {
      console.log('⚠️  Could not find insertion point for RULE 7 — check file manually');
    }
  }

  // Safety check
  const newLines = content.split('\n').length;
  if (newLines < lines.length * 0.9) {
    console.log(`🚨 SAFETY BLOCK: new file has ${newLines} lines, original had ${lines.length}`);
    process.exit(1);
  }

  // Save backup
  const now = new Date();
  const timestamp = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const backupPath = path.join(MAIN_TEMPLATE_DIR, FILENAME.replace('.md', `-BACKUP-${timestamp}.md`));
  fs.writeFileSync(backupPath, original, 'utf8');
  console.log(`💾 Backup saved: ${FILENAME.replace('.md', `-BACKUP-${timestamp}.md`)}`);

  // Save fixed file
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Saved: ${FILENAME}`);
  console.log(`\n🎉 Done! (${newLines} lines)`);
}

main();
