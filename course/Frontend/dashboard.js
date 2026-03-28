#!/usr/bin/env node

// =============================================================
// PIPELINE DASHBOARD
// core-value-fundamentals — Language-Agnostic Edition
// =============================================================
//
// USAGE:
//   node dashboard.js
//
// Runs rebuild-all.js underneath and renders a live dashboard.
// No external dependencies — uses Node built-ins only.
// =============================================================

'use strict';

const { spawn }  = require('child_process');
const path       = require('path');
const readline   = require('readline');

// ─── COLOURS ─────────────────────────────────────────────────
const C = {
  reset:    '\x1b[0m',
  bold:     '\x1b[1m',
  dim:      '\x1b[2m',

  black:    '\x1b[30m',
  red:      '\x1b[31m',
  green:    '\x1b[32m',
  yellow:   '\x1b[33m',
  blue:     '\x1b[34m',
  magenta:  '\x1b[35m',
  cyan:     '\x1b[36m',
  white:    '\x1b[37m',

  bgBlack:  '\x1b[40m',
  bgRed:    '\x1b[41m',
  bgGreen:  '\x1b[42m',
  bgBlue:   '\x1b[44m',
  bgCyan:   '\x1b[46m',

  brightRed:     '\x1b[91m',
  brightGreen:   '\x1b[92m',
  brightYellow:  '\x1b[93m',
  brightBlue:    '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan:    '\x1b[96m',
  brightWhite:   '\x1b[97m',
};

// ─── TERMINAL HELPERS ─────────────────────────────────────────
const W = process.stdout.columns || 80;

function cls()          { process.stdout.write('\x1b[2J\x1b[H'); }
function moveTo(r, c)   { process.stdout.write(`\x1b[${r};${c}H`); }
function hideCursor()   { process.stdout.write('\x1b[?25l'); }
function showCursor()   { process.stdout.write('\x1b[?25h'); }
function write(s)       { process.stdout.write(s); }

function padEnd(str, len, char = ' ') {
  const plain = stripAnsi(str);
  const pad   = Math.max(0, len - plain.length);
  return str + char.repeat(pad);
}

function stripAnsi(str) {
  return str.replace(/\x1b\[[0-9;]*m/g, '');
}

function center(str, width) {
  const plain = stripAnsi(str);
  const pad   = Math.max(0, Math.floor((width - plain.length) / 2));
  return ' '.repeat(pad) + str;
}

// ─── STATE ────────────────────────────────────────────────────

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
];

const TOTAL = ALL_MODULES.length;

const state = {
  currentModule:  '',
  currentStep:    0,
  moduleStatuses: {},   // module → 'pending' | 'building' | 'passed' | 'failed'
  currentAI:      '',
  waitingFor:     '',
  waitTotal:      0,
  waitStart:      0,
  isWaiting:      false,
  passed:         0,
  failed:         0,
  startTime:      Date.now(),
  done:           false,
  auditRunning:   false,
  logLines:       [],
  MAX_LOG:        12,
};

// Init all modules as pending
ALL_MODULES.forEach(m => { state.moduleStatuses[m] = 'pending'; });

// ─── LOG PARSER ───────────────────────────────────────────────
// Reads rebuild-all.js stdout and updates state

function parseLine(line) {
  const clean = line.trim();
  if (!clean) return;

  // New module starting
  const stepMatch = clean.match(/STEP (\d+) OF \d+: BUILD (MODULE-[\w-]+)/);
  if (stepMatch) {
    const mod = stepMatch[2];
    state.currentModule = mod;
    state.currentStep   = parseInt(stepMatch[1]);
    state.currentAI     = '';
    state.isWaiting     = false;
    ALL_MODULES.forEach(m => {
      if (state.moduleStatuses[m] === 'building') state.moduleStatuses[m] = 'pending';
    });
    if (state.moduleStatuses[mod] === 'pending') {
      state.moduleStatuses[mod] = 'building';
    }
    addLog(`${C.brightCyan}▶ Building ${mod}${C.reset}`);
    return;
  }

  // AI provider
  if (clean.includes('Groq (')) {
    state.currentAI = 'Groq';
  } else if (clean.includes('Falling back to Ollama') || clean.includes('Retrying Groq')) {
    state.currentAI = clean.includes('Ollama') ? 'Ollama' : 'Groq (retry)';
  }

  // Rate limited / waiting
  const waitMatch = clean.match(/waiting (\d+)s/i);
  if (waitMatch && (clean.includes('rate limit') || clean.includes('Gap'))) {
    const secs = parseInt(waitMatch[1]);
    state.isWaiting  = true;
    state.waitTotal  = secs;
    state.waitStart  = Date.now();
    state.waitingFor = clean.includes('rate limit') ? 'Groq rate limit' : 'Gap between modules';
    addLog(`${C.yellow}⏳ ${state.waitingFor} — ${secs}s${C.reset}`);
    return;
  }

  // Waiting cleared
  if (clean.includes('Retrying Groq') || clean.includes('Building (attempt')) {
    state.isWaiting = false;
  }

  // Pass / fail per exercise
  if (clean.match(/✅ Ex\d+ Part [AB] passed/)) {
    const m = clean.match(/Ex(\d+) Part ([AB])/);
    if (m) addLog(`${C.brightGreen}  ✅ Ex${m[1]} Part ${m[2]} passed${C.reset}`);
  }
  if (clean.match(/❌ FAIL/)) {
    addLog(`${C.brightRed}  ❌ ${clean.replace('❌ ', '')}${C.reset}`);
  }

  // Module saved (passed)
  if (clean.includes('✅ Saved:')) {
    if (state.currentModule) {
      state.moduleStatuses[state.currentModule] = 'passed';
      state.passed++;
      addLog(`${C.brightGreen}✅ ${state.currentModule} saved${C.reset}`);
    }
  }

  // Module saved for review (failed)
  if (clean.includes('REVIEW-NEEDED')) {
    if (state.currentModule) {
      state.moduleStatuses[state.currentModule] = 'failed';
      state.failed++;
      addLog(`${C.brightRed}⚠️  ${state.currentModule} needs review${C.reset}`);
    }
  }

  // Audit
  if (clean.includes('RUNNING AUDIT')) {
    state.auditRunning = true;
    addLog(`${C.brightMagenta}🔍 Running audit...${C.reset}`);
  }

  // Done
  if (clean.includes('All') && clean.includes('rebuilt successfully')) {
    state.done = true;
  }
}

function addLog(line) {
  state.logLines.push(line);
  if (state.logLines.length > state.MAX_LOG) {
    state.logLines.shift();
  }
}

// ─── RENDER ───────────────────────────────────────────────────

function progressBar(value, total, width) {
  const pct   = total > 0 ? value / total : 0;
  const filled = Math.round(pct * width);
  const empty  = width - filled;
  const bar    = C.brightGreen + '█'.repeat(filled) + C.dim + C.white + '░'.repeat(empty) + C.reset;
  const label  = `${C.brightWhite}${value}${C.reset}${C.dim}/${total}${C.reset}`;
  return bar + '  ' + label;
}

function formatTime(ms) {
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

function moduleGrid() {
  const cols   = 2;
  const colW   = Math.floor((W - 4) / cols);
  const lines  = [];

  for (let i = 0; i < ALL_MODULES.length; i += cols) {
    let row = '  ';
    for (let j = 0; j < cols; j++) {
      const mod    = ALL_MODULES[i + j];
      if (!mod) { row += ' '.repeat(colW); continue; }
      const status = state.moduleStatuses[mod] || 'pending';
      const short  = mod.replace('MODULE-', 'M').replace(/-/g, ' ').toLowerCase();

      let icon, colour;
      switch (status) {
        case 'passed':   icon = '✅'; colour = C.brightGreen;   break;
        case 'failed':   icon = '❌'; colour = C.brightRed;     break;
        case 'building': icon = '⚡'; colour = C.brightYellow;  break;
        default:         icon = '○';  colour = C.dim + C.white; break;
      }

      const cell = `${icon} ${colour}${short}${C.reset}`;
      row += padEnd(cell, colW);
    }
    lines.push(row);
  }
  return lines;
}

function render() {
  cls();

  const elapsed  = Date.now() - state.startTime;
  const timeStr  = formatTime(elapsed);
  const barWidth = W - 30;

  // ── Header ──────────────────────────────────────────────
  write(C.bgBlack);
  write('\n');
  write(center(`${C.bold}${C.brightCyan}◆  CORE VALUE FUNDAMENTALS — PIPELINE DASHBOARD  ◆${C.reset}`, W) + '\n');
  write(center(`${C.dim}${C.white}Elapsed: ${timeStr}${C.reset}`, W) + '\n');
  write(C.dim + '─'.repeat(W) + C.reset + '\n');

  // ── Overall Progress ────────────────────────────────────
  const done    = state.passed + state.failed;
  write('\n');
  write(`  ${C.bold}${C.brightWhite}OVERALL PROGRESS${C.reset}\n`);
  write(`  ${progressBar(done, TOTAL, barWidth)}\n`);
  write(`  ${C.brightGreen}✅ ${state.passed} passed${C.reset}   ${C.brightRed}❌ ${state.failed} failed${C.reset}   ${C.dim}${C.white}${TOTAL - done} remaining${C.reset}\n`);
  write('\n');
  write(C.dim + '─'.repeat(W) + C.reset + '\n');

  // ── Module Grid ─────────────────────────────────────────
  write('\n');
  write(`  ${C.bold}${C.brightWhite}MODULES${C.reset}\n\n`);
  moduleGrid().forEach(l => write(l + '\n'));
  write('\n');
  write(C.dim + '─'.repeat(W) + C.reset + '\n');

  // ── Current Status ──────────────────────────────────────
  write('\n');
  write(`  ${C.bold}${C.brightWhite}STATUS${C.reset}\n\n`);

  if (state.done && !state.auditRunning) {
    write(`  ${C.brightGreen}${C.bold}🎉 All modules complete!${C.reset}\n`);
  } else if (state.auditRunning) {
    write(`  ${C.brightMagenta}🔍 Running audit...${C.reset}\n`);
  } else if (state.isWaiting) {
    const elapsed_w = Math.floor((Date.now() - state.waitStart) / 1000);
    const remaining = Math.max(0, state.waitTotal - elapsed_w);
    const wBar      = progressBar(elapsed_w, state.waitTotal, 30);
    write(`  ${C.yellow}⏳ ${state.waitingFor}${C.reset}\n`);
    write(`  ${wBar}   ${C.brightYellow}${remaining}s remaining${C.reset}\n`);
  } else if (state.currentModule) {
    const aiColour = state.currentAI === 'Groq' ? C.brightCyan :
                     state.currentAI === 'Ollama' ? C.yellow : C.brightMagenta;
    write(`  ${C.brightCyan}⚡ ${state.currentModule}${C.reset}\n`);
    if (state.currentAI) {
      write(`  ${C.dim}AI:${C.reset} ${aiColour}${state.currentAI}${C.reset}\n`);
    }
  } else {
    write(`  ${C.dim}Starting...${C.reset}\n`);
  }

  write('\n');
  write(C.dim + '─'.repeat(W) + C.reset + '\n');

  // ── Live Log ────────────────────────────────────────────
  write('\n');
  write(`  ${C.bold}${C.brightWhite}LIVE LOG${C.reset}\n\n`);
  if (state.logLines.length === 0) {
    write(`  ${C.dim}Waiting for output...${C.reset}\n`);
  } else {
    state.logLines.forEach(l => write(`  ${l}\n`));
  }

  write('\n');
  write(C.dim + '─'.repeat(W) + C.reset + '\n');
  write(center(`${C.dim}Ctrl+C to stop${C.reset}`, W) + '\n');
}

// ─── MAIN ─────────────────────────────────────────────────────

async function main() {
  hideCursor();
  cls();

  // Render loop — 1s tick
  const renderInterval = setInterval(render, 1000);
  render();

  // Spawn rebuild-all.js
  const child = spawn('node', [path.join(__dirname, 'rebuild-all.js')], {
    cwd:   __dirname,
    env:   process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  const rl = readline.createInterface({ input: child.stdout });
  rl.on('line', line => {
    parseLine(line);
    // Also pipe raw to a log file for debugging
    // fs.appendFileSync('pipeline.log', line + '\n');
  });

  const rlerr = readline.createInterface({ input: child.stderr });
  rlerr.on('line', line => {
    addLog(`${C.brightRed}ERR: ${line.trim()}${C.reset}`);
  });

  child.on('close', () => {
    state.done = true;
    clearInterval(renderInterval);
    render();
    showCursor();
    write('\n\n');
    process.exit(0);
  });

  // Clean exit on Ctrl+C
  process.on('SIGINT', () => {
    clearInterval(renderInterval);
    showCursor();
    cls();
    write(`\n${C.yellow}Pipeline stopped.${C.reset}\n\n`);
    child.kill();
    process.exit(0);
  });

  // Resize support
  process.stdout.on('resize', () => {
    render();
  });
}

main().catch(err => {
  showCursor();
  console.error('Dashboard error:', err);
  process.exit(1);
});
