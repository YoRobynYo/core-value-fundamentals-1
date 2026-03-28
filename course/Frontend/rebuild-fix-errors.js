#!/usr/bin/env node

// =============================================================
// REBUILD FIX ERRORS PIPELINE
// core-value-fundamentals — Language-Agnostic Edition
// =============================================================
//
// USAGE:
//   node rebuild-fix-errors.js
//
// Rebuilds only the modules that failed the last audit.
// Runs in FAST mode — no gaps between exercises (Ollama only).
// Update the MODULES_TO_REBUILD list after each audit run.
// Sit back, have a tea, let Hunter Alpha do the work!
// =============================================================

const fs = require('fs');
const readline = require('readline');
const { execSync, spawn } = require('child_process');
const path = require('path');

const PIPELINE_DIR = __dirname;

// ─────────────────────────────────────────────────────────────
// UPDATE THIS LIST after each audit run
// ─────────────────────────────────────────────────────────────
const MODULES_TO_REBUILD = [
  'MODULE-1-VARIABLES',
  'MODULE-3-CONDITIONS-PART2',
  'MODULE-3-CONDITIONS-PART3',
  'MODULE-3-CONDITIONS-PART5',
  'MODULE-5-LOOPS-PART1',
  'MODULE-5-LOOPS-PART3',
];

function notify(message) {
  console.log(`\n🔔 NOTIFICATION: ${message}\n`);
  try {
    execSync(`osascript -e 'display notification "${message}" with title "Fix Errors Pipeline"'`);
  } catch (e) {}
}

function askQuestion(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer.trim().toLowerCase());
    });
  });
}

function runModule(moduleName) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(PIPELINE_DIR, 'build-html.js');
    if (!fs.existsSync(scriptPath)) {
      reject(new Error(`build-html.js not found`));
      return;
    }
    const child = spawn('node', [scriptPath, moduleName], {
      env: { ...process.env, FAST_MODE: 'true' },
      stdio: 'inherit',
      cwd: PIPELINE_DIR,
    });
    child.on('close', code => resolve({ success: code === 0, code }));
    child.on('error', err => reject(err));
  });
}

function runAudit() {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(PIPELINE_DIR, 'audit-html.js');
    if (!fs.existsSync(scriptPath)) {
      console.log(`\n💡 audit-html.js not found — skipping audit.`);
      resolve();
      return;
    }
    const child = spawn('node', [scriptPath], {
      env: process.env,
      stdio: 'inherit',
      cwd: PIPELINE_DIR,
    });
    child.on('close', code => resolve({ success: code === 0, code }));
    child.on('error', err => reject(err));
  });
}

async function main() {
  const total = MODULES_TO_REBUILD.length;
  const startTime = Date.now();

  console.log(`\n🚀 REBUILD FIX ERRORS PIPELINE`);
  console.log(`📦 Modules to fix: ${total}`);
  console.log(`⚡ Mode: FAST — no gaps between exercises`);
  console.log(`─────────────────────────────────────\n`);
  console.log(`Modules queued:`);
  MODULES_TO_REBUILD.forEach(m => console.log(`   • ${m}`));
  console.log(`\n─────────────────────────────────────\n`);

  const answer = await askQuestion(`⚠️  Ready to rebuild ${total} modules? (Y/N): `);
  if (answer !== 'y') {
    console.log(`\n👋 Cancelled — run again when you're ready!\n`);
    process.exit(0);
  }

  console.log(`\n🍵 Let's fix those errors!\n`);

  const results = { passed: [], failed: [] };

  for (let i = 0; i < MODULES_TO_REBUILD.length; i++) {
    const module = MODULES_TO_REBUILD[i];

    console.log('\n' + '═'.repeat(50));
    console.log(`  STEP ${i + 1} OF ${total}: FIX ${module}`);
    console.log('═'.repeat(50));

    try {
      const result = await runModule(module);
      if (result.success) {
        results.passed.push(module);
      } else {
        console.log(`❌ ${module} failed (exit code ${result.code})`);
        results.failed.push(module);
      }
    } catch (e) {
      console.log(`❌ ${module} error: ${e.message}`);
      results.failed.push(module);
    }
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const timeStr = `${Math.floor(elapsed / 60)}m ${elapsed % 60}s`;

  console.log(`\n${'═'.repeat(50)}`);
  console.log(`📊 FIX ERRORS COMPLETE`);
  console.log('═'.repeat(50));
  console.log(`✅ Passed: ${results.passed.length}/${total}`);
  console.log(`❌ Failed: ${results.failed.length}/${total}`);
  console.log(`⏱️  Total time: ${timeStr}`);

  if (results.failed.length > 0) {
    console.log(`\n⚠️  Still needing attention:`);
    results.failed.forEach(m => console.log(`   • ${m}`));
    notify(`Fix errors done! ${results.passed.length} fixed, ${results.failed.length} still need attention. (${timeStr})`);
  } else {
    console.log(`\n🎉 All errors fixed successfully!`);
    notify(`All ${total} errors fixed successfully! (${timeStr})`);
  }

  // ─────────────────────────────────────────────────────────
  // AUTO-AUDIT after fixes
  // ─────────────────────────────────────────────────────────
  console.log(`\n${'═'.repeat(50)}`);
  console.log('  🔍 RE-RUNNING AUDIT TO CONFIRM');
  console.log('═'.repeat(50) + '\n');
  await runAudit();
}

main().catch(err => {
  console.error('❌ Pipeline error:', err);
  process.exit(1);
});
