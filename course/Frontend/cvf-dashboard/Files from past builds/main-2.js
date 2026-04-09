const { app, BrowserWindow, ipcMain } = require('electron');
const { spawn } = require('child_process');
const path = require('path');
const os = require('os');
const fs = require('fs');

const FRONTEND_DIR = path.join(os.homedir(), 'core-value-fundamentals', 'course', 'Frontend');

let win;
let pipelineProcess = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1400,
    height: 860,
    minWidth: 1200,
    minHeight: 720,
    backgroundColor: '#02070e',
    titleBarStyle: 'hiddenInset',
    vibrancy: 'dark',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (pipelineProcess) pipelineProcess.kill();
  app.quit();
});

// ── Pipeline ──────────────────────────────────────────────────
function spawnScript(scriptName) {
  if (pipelineProcess) { pipelineProcess.kill(); pipelineProcess = null; }

  pipelineProcess = spawn('node', [scriptName], {
    cwd: FRONTEND_DIR,
    env: process.env,
  });

  pipelineProcess.stdout.on('data', data => {
    data.toString().split('\n').filter(l => l.trim())
      .forEach(line => win.webContents.send('pipeline-line', line));
  });

  pipelineProcess.stderr.on('data', data => {
    win.webContents.send('pipeline-line', `ERR: ${data.toString().trim()}`);
  });

  pipelineProcess.on('close', code => {
    win.webContents.send('pipeline-done', code);
    pipelineProcess = null;
  });
}

ipcMain.on('start-pipeline', () => spawnScript('rebuild-all.js'));
ipcMain.on('start-audit',    () => spawnScript('audit-html.js'));

ipcMain.on('stop-pipeline', () => {
  if (pipelineProcess) {
    pipelineProcess.kill();
    pipelineProcess = null;
    win.webContents.send('pipeline-stopped');
  }
});

// ── Read locked-modules.json for status ───────────────────────
ipcMain.handle('get-module-status', () => {
  const f = path.join(FRONTEND_DIR, 'locked-modules.json');
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); }
  catch { return {}; }
});
