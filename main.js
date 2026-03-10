const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

// Data file stored next to the app (or in user data folder)
const DATA_FILE = path.join(app.getPath('userData'), 'dhandapani_data.json');

// Load all data from disk
function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) { console.error('Load error:', e); }
  return {};
}

// Save a key into the data file
function saveData(key, value) {
  try {
    const data = loadData();
    data[key] = value;
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) { console.error('Save error:', e); }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 820,
    minHeight: 600,
    title: 'தண்டபாணி மளிகை கடை',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile('index.html');
}

// IPC: renderer asks to save data
ipcMain.on('save-data', (event, { key, value }) => {
  saveData(key, value);
});

// IPC: sync load at startup (preload needs data before React runs)
ipcMain.on('load-all-data-sync', (event) => {
  event.returnValue = loadData();
});

// IPC: async load (fallback)
ipcMain.handle('load-all-data', () => {
  return loadData();
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
