const { app, BrowserWindow, ipcMain } = require('electron');
const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

// Path to your Frontend folder — adjust if needed
const FRONTEND_DIR = path.join(os.homedir(), 'core-value-fundamentals', 'course', 'Frontend');

let win;
let pipelineProcess = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    backgroundColor: '#000008',
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

// ── IPC: start pipeline ───────────────────────────────────────
ipcMain.on('start-pipeline', () => {
  if (pipelineProcess) {
    pipelineProcess.kill();
    pipelineProcess = null;
  }

  pipelineProcess = spawn('node', ['rebuild-all.js'], {
    cwd: FRONTEND_DIR,
    env: process.env,
  });

  pipelineProcess.stdout.on('data', data => {
    const lines = data.toString().split('\n').filter(l => l.trim());
    lines.forEach(line => win.webContents.send('pipeline-line', line));
  });

  pipelineProcess.stderr.on('data', data => {
    win.webContents.send('pipeline-line', `ERR: ${data.toString().trim()}`);
  });

  pipelineProcess.on('close', code => {
    win.webContents.send('pipeline-done', code);
    pipelineProcess = null;
  });
});

ipcMain.on('stop-pipeline', () => {
  if (pipelineProcess) {
    pipelineProcess.kill();
    pipelineProcess = null;
    win.webContents.send('pipeline-stopped');
  }
});
