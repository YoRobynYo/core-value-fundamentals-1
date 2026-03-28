const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('pipeline', {
  start: ()            => ipcRenderer.send('start-pipeline'),
  stop:  ()            => ipcRenderer.send('stop-pipeline'),
  onLine: (cb)         => ipcRenderer.on('pipeline-line',    (_, d) => cb(d)),
  onDone: (cb)         => ipcRenderer.on('pipeline-done',    (_, d) => cb(d)),
  onStopped: (cb)      => ipcRenderer.on('pipeline-stopped', ()     => cb()),
});
