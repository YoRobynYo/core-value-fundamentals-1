#!/usr/bin/env node

// =============================================================
// REBUILD ALL PIPELINE
// core-value-fundamentals — Language-Agnostic Edition
// =============================================================
//
// USAGE:
//   node rebuild-all.js
//
// Rebuilds all modules one by one with gaps between each.
// After all modules are done, waits 30s then runs audit-html.js.
// Sit back, have a tea, let Hunter Alpha do the work!
// =============================================================

const fs = require('fs');
const { execSync, spawn } = require('child_process');
const path = require('path');

const PIPELINE_DIR = __dirname;

// Load locked modules — these are skipped during rebuild
function getLockedModules() {
  const lockFile = path.join(PIPELINE_DIR, 'locked-modules.json');
  if (!fs.existsSync(lockFile)) return {};
  try {
    return JSON.parse(fs.readFileSync(lockFile, 'utf8'));
  } catch (e) {
    console.warn('⚠️  Could not read locked-modules.json — treating all as unlocked');
    return {};
  }
}

const MODULES_TO_REBUILD = [
  'MODULE-1-VARIABLES',
  'MODULE-2-OPERATORS',
  'MODULE-3-CONDITIONS-PART1',
  'MODULE-3-CONDITIONS-PART2',
  'MODULE-3-CONDITIONS-PART3',
  'MODULE-3-CONDITIONS-PART4',
  'MODULE-3-CONDITIONS-PART5',
  'MODULE-4-LOGICAL-OPERATORS-PART1',
  'MODULE-4-LOGICAL-OPERATORS-PART2',
  'MODULE-5-LOOPS-PART1',
  'MODULE-5-LOOPS-PART2',
  'MODULE-5-LOOPS-PART3',
  'MODULE-5-LOOPS-PART4',
  'MODULE-6-PIRATE-ADVENTURE-PART1',
  'MODULE-6-PIRATE-ADVENTURE-PART2',
  'MODULE-7-FUNCTIONS-PART1',
  'MODULE-7-FUNCTIONS-PART2',
  'MODULE-7-FUNCTIONS-PART3',
  'MODULE-7-FUNCTIONS-PART4',
];

const GAP_BETWEEN_MODULES = 60_000; // 60 seconds between modules

function sleep(ms, label) {
  if (label) {
    process.stdout.write(`\n   ⏳ ${label}`);
    let remaining = Math.round(ms / 1000);
    return new Promise(resolve => {
      const interval = setInterval(() => {
        remaining--;
        process.stdout.write(`\r   ⏳ ${label} (${remaining}s remaining)  `);
        if (remaining <= 0) {
          clearInterval(interval);
          process.stdout.write('\n');
          resolve();
        }
      }, 1000);
    });
  }
  return new Promise(resolve => setTimeout(resolve, ms));
}

function notify(message) {
  console.log(`\n🔔 NOTIFICATION: ${message}\n`);
  try {
    execSync(`osascript -e 'display notification "${message}" with title "Rebuild All Pipeline"'`);
  } catch (e) {}
}

function runScript(scriptName, args = []) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(PIPELINE_DIR, scriptName);
    if (!fs.existsSync(scriptPath)) {
      reject(new Error(`Script not found: ${scriptPath}`));
      return;
    }
    const child = spawn('node', [scriptPath, ...args], {
      env: process.env,
      stdio: 'inherit',
      cwd: PIPELINE_DIR,
    });
    child.on('close', code => resolve({ success: code === 0, code }));
    child.on('error', err => reject(err));
  });
}

async function main() {
  const locked = getLockedModules();
  const toRebuild = MODULES_TO_REBUILD.filter(m => !locked[m]);
  const skipped = MODULES_TO_REBUILD.filter(m => locked[m]);
  const startTime = Date.now();

  if (skipped.length > 0) {
    console.log(`🔒 Skipping ${skipped.length} locked modules:`);
    skipped.forEach(m => console.log(`   • ${m}`));
    console.log('');
  }

  const total = toRebuild.length;

  console.log(`\n🚀 REBUILD ALL PIPELINE`);
  console.log(`📦 Modules to rebuild: ${total} (${skipped.length} locked/skipped)`);
  console.log(`─────────────────────────────────────\n`);
  console.log(`🍵 AI automation — one module at a time!\n`);
  console.log(`─────────────────────────────────────\n`);

  const results = { passed: [], failed: [] };

  for (let i = 0; i < toRebuild.length; i++) {
    const module = toRebuild[i];

    console.log('\n' + '═'.repeat(50));
    console.log(`  STEP ${i + 1} OF ${total}: BUILD ${module}`);
    console.log('═'.repeat(50));

    try {
      const result = await runScript('build-html.js', [module]);
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

    if (i < toRebuild.length - 1) {
      await sleep(GAP_BETWEEN_MODULES, `Gap before next module`);
    }
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const timeStr = `${Math.floor(elapsed / 60)}m ${elapsed % 60}s`;

  console.log(`\n${'═'.repeat(50)}`);
  console.log(`📊 REBUILD COMPLETE`);
  console.log('═'.repeat(50));
  console.log(`✅ Passed: ${results.passed.length}/${total}`);
  console.log(`❌ Failed: ${results.failed.length}/${total}`);
  console.log(`⏱️  Total time: ${timeStr}`);

  if (results.failed.length > 0) {
    console.log(`\n⚠️  Modules needing attention:`);
    results.failed.forEach(m => console.log(`   • ${m}`));
    notify(`Rebuild done! ${results.passed.length} passed, ${results.failed.length} need attention. (${timeStr})`);
  } else {
    console.log(`\n🎉 All modules rebuilt successfully!`);
    notify(`All ${total} modules rebuilt successfully! (${timeStr})`);
  }

  // ─────────────────────────────────────────────────────────
  // AUTO-AUDIT
  // ─────────────────────────────────────────────────────────

  const auditPath = path.join(PIPELINE_DIR, 'audit-html.js');
  if (fs.existsSync(auditPath)) {
    await sleep(30_000, 'Waiting before audit');
    console.log(`\n${'═'.repeat(50)}`);
    console.log('  🔍 RUNNING AUDIT');
    console.log('═'.repeat(50) + '\n');
    await runScript('audit-html.js');
  } else {
    console.log(`\n💡 audit-html.js not found — skipping audit.`);
  }
}

main().catch(err => {
  console.error('❌ Pipeline error:', err);
  process.exit(1);
});
