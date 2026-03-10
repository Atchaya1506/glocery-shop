const { contextBridge, ipcRenderer } = require('electron');

// Load data synchronously at startup so window.__appData is ready
// before React's useState(() => loadLS(...)) runs
const appData = ipcRenderer.sendSync('load-all-data-sync');
// Inject into window BEFORE any scripts run
Object.defineProperty(window, '__appData', {
  value: appData || {},
  writable: true,
});

contextBridge.exposeInMainWorld('electronAPI', {
  save: (key, value) => {
    ipcRenderer.send('save-data', { key, value });
  },
});
