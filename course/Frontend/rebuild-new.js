#!/usr/bin/env node

// =============================================================
// REBUILD NEW PIPELINE
// core-value-fundamentals — Language-Agnostic Edition
// =============================================================
//
// USAGE:
//   node rebuild-new.js
//
// Rebuilds only the new Module 7 parts (2, 3, 4).
// Run this when you just want to build the latest additions.
// Sit back, have a tea, let Hunter Alpha do the work!
// =============================================================

const fs = require('fs');
const { execSync, spawn } = require('child_process');
const path = require('path');

const PIPELINE_DIR = __dirname;

const MODULES_TO_REBUILD = [
  'MODULE-8-ARRAYS-PART6',
];

const GAP_BETWEEN_MODULES = 5_000; // 5 seconds between modules

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
    execSync(`osascript -e 'display notification "${message}" with title "Rebuild New Pipeline"'`);
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
  const total = MODULES_TO_REBUILD.length;
  const startTime = Date.now();

  console.log(`\n🚀 REBUILD NEW PIPELINE`);
  console.log(`📦 Modules to rebuild: ${total}`);
  console.log(`─────────────────────────────────────\n`);
  console.log(`🍵 Building new Module 7 parts — one at a time!\n`);
  console.log(`─────────────────────────────────────\n`);

  const results = { passed: [], failed: [] };

  for (let i = 0; i < MODULES_TO_REBUILD.length; i++) {
    const module = MODULES_TO_REBUILD[i];

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

    if (i < MODULES_TO_REBUILD.length - 1) {
      await sleep(GAP_BETWEEN_MODULES, `Gap before next module`);
    }
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const timeStr = `${Math.floor(elapsed / 60)}m ${elapsed % 60}s`;

  console.log(`\n${'═'.repeat(50)}`);
  console.log(`📊 REBUILD NEW COMPLETE`);
  console.log('═'.repeat(50));
  console.log(`✅ Passed: ${results.passed.length}/${total}`);
  console.log(`❌ Failed: ${results.failed.length}/${total}`);
  console.log(`⏱️  Total time: ${timeStr}`);

  if (results.failed.length > 0) {
    console.log(`\n⚠️  Modules needing attention:`);
    results.failed.forEach(m => console.log(`   • ${m}`));
    notify(`Rebuild done! ${results.passed.length} passed, ${results.failed.length} need attention. (${timeStr})`);
  } else {
    console.log(`\n🎉 All new modules rebuilt successfully!`);
    notify(`All ${total} new modules rebuilt successfully! (${timeStr})`);
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
