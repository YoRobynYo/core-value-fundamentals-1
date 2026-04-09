#!/usr/bin/env node

// =============================================================
// RUN PIPELINE — MASTER ORCHESTRATOR
// core-value-fundamentals — Language-Agnostic Edition
// =============================================================
//
// USAGE:
//   node run-pipeline.js              → runs everything (template update + all modules)
//   node run-pipeline.js --inspect    → inspect only, no AI calls
//   node run-pipeline.js --template   → update template only
//   node run-pipeline.js --build      → build HTML for all modules only
//   node run-pipeline.js --module MODULE-3-CONDITIONS-PART1   → one module only
//   node run-pipeline.js --from MODULE-3-CONDITIONS-PART2     → start from a module
//   node run-pipeline.js --dry-run    → show plan, no execution
//
// REQUIRES:
//   GROQ_API_KEY environment variable set
//   update-template.js in same directory
//   build-html.js in same directory
//   mainTemplate/ directory with all spec files
//
// =============================================================

'use strict';

const fs   = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

// ─── CONFIG ──────────────────────────────────────────────────

const PIPELINE_DIR     = __dirname;
const MAIN_TEMPLATE_DIR = path.join(PIPELINE_DIR, 'mainTemplate');

const GAP_BETWEEN_FILES_MS = 30_000;  // 30 seconds between each job
const GAP_TEMPLATE_TO_BUILD = 10_000; // 10 seconds after template update before builds begin

// The template file that update-template.js processes
const TEMPLATE_FILE = '2-MODULE-0-EXERCISE-TEMPLATE-MASTER.md';

// All modules in the order they should be built
const ALL_MODULES = [
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
  'MODULE-7-FUNCTIONS-PART5',
  'MODULE-7-FUNCTIONS-PART6',
];

// Files each module requires (for inspection)
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
  'MODULE-7-FUNCTIONS-PART1':         'MODULE-7-FUNCTIONS-PART1-SPECS.md',
  'MODULE-7-FUNCTIONS-PART2':         'MODULE-7-FUNCTIONS-PART2-SPECS.md',
  'MODULE-7-FUNCTIONS-PART3':         'MODULE-7-FUNCTIONS-PART3-SPECS.md',
  'MODULE-7-FUNCTIONS-PART4':         'MODULE-7-FUNCTIONS-PART4-SPECS.md',
  'MODULE-7-FUNCTIONS-PART5':         'MODULE-7-FUNCTIONS-PART5-SPECS.md',
  'MODULE-7-FUNCTIONS-PART6':         'MODULE-7-FUNCTIONS-PART6-SPECS.md',
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
  'MODULE-7-FUNCTIONS-PART1':         'MODULE-7-FUNCTIONS-PART1-HELPER-BOXES.md',
  'MODULE-7-FUNCTIONS-PART2':         'MODULE-7-FUNCTIONS-PART2-HELPER-BOXES.md',
  'MODULE-7-FUNCTIONS-PART3':         'MODULE-7-FUNCTIONS-PART3-HELPER-BOXES.md',
  'MODULE-7-FUNCTIONS-PART4':         'MODULE-7-FUNCTIONS-PART4-HELPER-BOXES.md',
  'MODULE-7-FUNCTIONS-PART5':         'MODULE-7-FUNCTIONS-PART5-HELPER-BOXES.md',
  'MODULE-7-FUNCTIONS-PART6':         'MODULE-7-FUNCTIONS-PART6-HELPER-BOXES.md',
};

// ─── HELPERS ─────────────────────────────────────────────────

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

function exists(filePath) {
  return fs.existsSync(filePath);
}

function checkEnv() {
  const anthropicKey = process.env.ANTHROPIC_API_KEY || '';
  const groqKey      = process.env.GROQ_API_KEY || '';

  if (anthropicKey.length > 20) {
    return { ok: true, primary: 'Claude (Anthropic)', fallback: groqKey.length > 20 ? 'Groq' : 'none' };
  }
  if (groqKey.length > 20) {
    // Groq alone is fine — will be used as primary by the scripts if Claude key missing
    return { ok: true, primary: 'Groq (fallback only — no ANTHROPIC_API_KEY)', fallback: 'none' };
  }
  return { ok: false, reason: 'Neither ANTHROPIC_API_KEY nor GROQ_API_KEY is set' };
}

function notify(msg) {
  console.log(`\n🔔 ${msg}`);
  try { execSync(`osascript -e 'display notification "${msg}" with title "Pipeline"'`); } catch {}
}

function formatTime(ms) {
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

function hr(char = '─', width = 50) {
  return char.repeat(width);
}

// ─── INSPECTION ──────────────────────────────────────────────

function inspectProject() {
  console.log('\n🔍 PROJECT INSPECTION');
  console.log(hr('═'));

  // Check pipeline scripts
  console.log('\n📁 PIPELINE SCRIPTS');
  console.log(hr());
  const scripts = ['build-html.js', 'update-template.js', 'pipeline-monitor.js'];
  for (const s of scripts) {
    const p = path.join(PIPELINE_DIR, s);
    const found = exists(p);
    console.log(`   ${found ? '✅' : '❌'} ${s}`);
  }

  // Check mainTemplate directory
  console.log('\n📁 mainTemplate/ DIRECTORY');
  console.log(hr());
  if (!exists(MAIN_TEMPLATE_DIR)) {
    console.log('   ❌ mainTemplate/ directory does NOT exist');
    return;
  }
  console.log('   ✅ mainTemplate/ exists');

  // Check template master file
  const templatePath = path.join(MAIN_TEMPLATE_DIR, TEMPLATE_FILE);
  const hasRule7 = exists(templatePath)
    ? fs.readFileSync(templatePath, 'utf8').includes('RULE 7: BANNED WORDS')
    : false;
  console.log(`   ${exists(templatePath) ? '✅' : '❌'} ${TEMPLATE_FILE}${exists(templatePath) ? (hasRule7 ? ' (RULE 7 ✅)' : ' (needs update — RULE 7 missing)') : ''}`);

  // Check each module's files
  console.log('\n📋 MODULE FILE STATUS');
  console.log(hr());
  console.log('   Module                          Spec    Helper  Output');
  console.log('   ' + hr('-', 60));

  for (const mod of ALL_MODULES) {
    const specFile   = SPEC_FILE_MAP[mod];
    const helperFile = HELPER_FILE_MAP[mod];
    const specOK     = exists(path.join(MAIN_TEMPLATE_DIR, specFile));
    const helperOK   = exists(path.join(MAIN_TEMPLATE_DIR, helperFile));

    const folder     = mod.toLowerCase().replace('module-', 'module-').replace(/_/g, '-');
    const outFolder  = path.join(PIPELINE_DIR, 'modules', mod.toLowerCase()
      .replace('module-', 'module-')
      .replace(/-part/g, '-part'));
    const outputOK   = exists(path.join(outFolder, 'index.html'));

    const label      = mod.padEnd(35);
    console.log(`   ${label} ${specOK ? '✅' : '❌'}     ${helperOK ? '✅' : '❌'}     ${outputOK ? '✅ built' : '○ pending'}`);
  }

  console.log('\n🔑 ENVIRONMENT');
  console.log(hr());
  const envCheck     = checkEnv();
  const hasAnthropic = (process.env.ANTHROPIC_API_KEY || '').length > 20;
  const hasGroq      = (process.env.GROQ_API_KEY || '').length > 20;
  console.log(`   ANTHROPIC_API_KEY: ${hasAnthropic ? '✅ Set (primary)' : '❌ Not set — Claude will not run'}`);
  console.log(`   GROQ_API_KEY:      ${hasGroq ? '✅ Set (fallback)' : '○ Not set (optional fallback)'}`);

  console.log('\n' + hr('═') + '\n');
}

// ─── RUN A CHILD PROCESS ─────────────────────────────────────

function runScript(scriptName, args = []) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(PIPELINE_DIR, scriptName);

    if (!exists(scriptPath)) {
      reject(new Error(`Script not found: ${scriptPath}`));
      return;
    }

    const child = spawn('node', [scriptPath, ...args], {
      env: process.env,
      stdio: 'inherit',   // pipe all output straight to terminal
      cwd: PIPELINE_DIR,
    });

    child.on('close', code => {
      if (code === 0) {
        resolve({ success: true, code });
      } else {
        resolve({ success: false, code });  // resolve not reject — we handle failure ourselves
      }
    });

    child.on('error', err => {
      reject(err);
    });
  });
}

// ─── JOB RESULTS LOG ─────────────────────────────────────────

const results = [];

function logResult(label, success, duration, notes = '') {
  results.push({ label, success, duration, notes });
}

function printSummary() {
  const passed  = results.filter(r => r.success).length;
  const failed  = results.filter(r => !r.success).length;
  const total   = results.length;

  console.log('\n');
  console.log(hr('═'));
  console.log('  PIPELINE COMPLETE — SUMMARY');
  console.log(hr('═'));
  console.log(`  Total jobs:  ${total}`);
  console.log(`  ✅ Passed:   ${passed}`);
  console.log(`  ❌ Failed:   ${failed}`);
  console.log(hr());

  for (const r of results) {
    const icon  = r.success ? '✅' : '❌';
    const time  = r.duration ? ` (${formatTime(r.duration)})` : '';
    const notes = r.notes ? `  ← ${r.notes}` : '';
    console.log(`  ${icon}  ${r.label}${time}${notes}`);
  }

  console.log(hr('═'));

  if (failed > 0) {
    console.log('\n  ⚠️  Some jobs failed. Check REVIEW-NEEDED files in their output folders.');
    console.log('  Re-run failed modules with:');
    for (const r of results.filter(r => !r.success)) {
      if (r.label.startsWith('MODULE-')) {
        console.log(`     node run-pipeline.js --module ${r.label}`);
      }
    }
  } else {
    console.log('\n  🎉 All jobs passed!');
  }

  console.log('');
}

// ─── PARSE ARGS ──────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    inspect:    args.includes('--inspect'),
    dryRun:     args.includes('--dry-run'),
    templateOnly: args.includes('--template'),
    buildOnly:  args.includes('--build'),
    module:     null,
    fromModule: null,
  };

  const modIdx  = args.indexOf('--module');
  const fromIdx = args.indexOf('--from');

  if (modIdx !== -1 && args[modIdx + 1]) {
    opts.module = args[modIdx + 1].toUpperCase();
  }
  if (fromIdx !== -1 && args[fromIdx + 1]) {
    opts.fromModule = args[fromIdx + 1].toUpperCase();
  }

  return opts;
}

// ─── MAIN ─────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs();
  const pipelineStart = Date.now();

  console.log('\n');
  console.log(hr('═'));
  console.log('  🚀  RUN PIPELINE — core-value-fundamentals');
  console.log(`  📅  ${new Date().toLocaleString('en-GB')}`);
  console.log(hr('═'));

  // Always inspect first
  inspectProject();

  if (opts.inspect) {
    console.log('  --inspect flag set. Inspection complete — no jobs run.\n');
    return;
  }

  // ── Guard: check env ──────────────────────────────────────
  if (!opts.dryRun) {
    const envCheck = checkEnv();
    if (!envCheck.ok) {
      console.error(`\n❌ CANNOT RUN: ${envCheck.reason}`);
      console.error('   Set your Anthropic key: export ANTHROPIC_API_KEY="your-key-here"');
      console.error('   Set your Groq key:      export GROQ_API_KEY="your-key-here"  (fallback)\n');
      process.exit(1);
    }
  }

  // ── Guard: check mainTemplate dir ────────────────────────
  if (!exists(MAIN_TEMPLATE_DIR)) {
    console.error(`\n❌ CANNOT RUN: mainTemplate/ directory not found at ${MAIN_TEMPLATE_DIR}`);
    console.error('   Create the directory and add your spec/helper files.\n');
    process.exit(1);
  }

  // ── Determine which modules to build ─────────────────────
  let modulesToBuild = [...ALL_MODULES];

  if (opts.module) {
    if (!ALL_MODULES.includes(opts.module)) {
      console.error(`\n❌ Unknown module: ${opts.module}`);
      console.error(`   Valid modules:\n   ${ALL_MODULES.join('\n   ')}\n`);
      process.exit(1);
    }
    modulesToBuild = [opts.module];
  }

  if (opts.fromModule) {
    const idx = ALL_MODULES.indexOf(opts.fromModule);
    if (idx === -1) {
      console.error(`\n❌ Unknown module for --from: ${opts.fromModule}\n`);
      process.exit(1);
    }
    modulesToBuild = ALL_MODULES.slice(idx);
  }

  // ── Print plan ───────────────────────────────────────────
  const runTemplate = !opts.buildOnly && !opts.module && !opts.fromModule;
  const runBuilds   = !opts.templateOnly;

  console.log('📋 PLAN');
  console.log(hr());
  if (runTemplate) {
    console.log(`   1. Update template: ${TEMPLATE_FILE}`);
    console.log(`   2. Wait ${GAP_TEMPLATE_TO_BUILD / 1000}s`);
  }
  if (runBuilds) {
    modulesToBuild.forEach((m, i) => {
      const num = runTemplate ? i + 3 : i + 1;
      const specOK = exists(path.join(MAIN_TEMPLATE_DIR, SPEC_FILE_MAP[m]));
      const helperOK = exists(path.join(MAIN_TEMPLATE_DIR, HELPER_FILE_MAP[m]));
      const warning = (!specOK || !helperOK) ? ' ⚠️  (missing files — will skip)' : '';
      console.log(`   ${num}. Build ${m}${warning}`);
      if (i < modulesToBuild.length - 1) {
        console.log(`      ↳ wait 30s`);
      }
    });
  }
  console.log('');

  if (opts.dryRun) {
    console.log('  --dry-run flag set. Plan printed — no jobs run.\n');
    return;
  }

  // ── Confirm ──────────────────────────────────────────────
  const totalJobs = (runTemplate ? 1 : 0) + (runBuilds ? modulesToBuild.length : 0);
  const estMins   = Math.ceil(((totalJobs - 1) * 30 + totalJobs * 90) / 60); // rough estimate
  console.log(`  Total jobs: ${totalJobs}  |  Estimated time: ~${estMins} minutes`);
  console.log('  Starting in 3 seconds... (Ctrl+C to cancel)\n');
  await sleep(3000);

  // ─────────────────────────────────────────────────────────
  // STEP 1: UPDATE TEMPLATE
  // ─────────────────────────────────────────────────────────

  if (runTemplate) {
    console.log('\n' + hr('═'));
    console.log('  STEP 1 OF ' + totalJobs + ': UPDATE TEMPLATE');
    console.log(hr('═'));

    const tStart = Date.now();

    if (!exists(path.join(MAIN_TEMPLATE_DIR, TEMPLATE_FILE))) {
      console.log(`  ⚠️  Template file not found — skipping template update`);
      logResult('Template Update', false, 0, 'File not found');
    } else {
      const result = await runScript('update-template.js', [TEMPLATE_FILE]);
      const elapsed = Date.now() - tStart;
      logResult('Template Update', result.success, elapsed,
        result.success ? '' : `Exit code ${result.code}`);

      if (!result.success) {
        console.log('\n  ⚠️  Template update failed — continuing with existing template');
      }
    }

    if (runBuilds) {
      await sleep(GAP_TEMPLATE_TO_BUILD, `Waiting before first build`);
    }
  }

  // ─────────────────────────────────────────────────────────
  // STEP 2+: BUILD EACH MODULE
  // ─────────────────────────────────────────────────────────

  if (runBuilds) {
    for (let i = 0; i < modulesToBuild.length; i++) {
      const mod       = modulesToBuild[i];
      const jobNum    = (runTemplate ? 2 : 1) + i;
      const specFile  = SPEC_FILE_MAP[mod];
      const helperFile = HELPER_FILE_MAP[mod];
      const specOK    = exists(path.join(MAIN_TEMPLATE_DIR, specFile));
      const helperOK  = exists(path.join(MAIN_TEMPLATE_DIR, helperFile));

      console.log('\n' + hr('═'));
      console.log(`  STEP ${jobNum} OF ${totalJobs}: BUILD ${mod}`);
      console.log(hr('═'));

      if (!specOK || !helperOK) {
        const missing = [
          !specOK   ? `spec (${specFile})`   : null,
          !helperOK ? `helper (${helperFile})` : null,
        ].filter(Boolean).join(', ');
        console.log(`  ⚠️  Skipping — missing files: ${missing}`);
        logResult(mod, false, 0, `Missing: ${missing}`);
      } else {
        const bStart = Date.now();
        const result = await runScript('build-html.js', [mod]);
        const elapsed = Date.now() - bStart;
        logResult(mod, result.success, elapsed,
          result.success ? '' : `Exit code ${result.code}`);
      }

      // 30 second gap between modules (not after the last one)
      if (i < modulesToBuild.length - 1) {
        await sleep(GAP_BETWEEN_FILES_MS, `Gap before next module`);
      }
    }
  }

  // ─────────────────────────────────────────────────────────
  // DONE
  // ─────────────────────────────────────────────────────────

  const totalElapsed = Date.now() - pipelineStart;
  printSummary();
  notify(`Pipeline complete — ${results.filter(r => r.success).length}/${results.length} passed (${formatTime(totalElapsed)})`);

  // ─────────────────────────────────────────────────────────
  // AUTO-AUDIT
  // ─────────────────────────────────────────────────────────

  const auditPath = path.join(PIPELINE_DIR, 'audit-html.js');
  if (exists(auditPath)) {
    await sleep(30_000, 'Waiting before audit');
    console.log('\n' + hr('═'));
    console.log('  🔍 RUNNING AUDIT');
    console.log(hr('═') + '\n');
    await runScript('audit-html.js');
  }
}

main().catch(err => {
  console.error('\n❌ Pipeline crashed:', err);
  process.exit(1);
});
