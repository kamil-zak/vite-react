import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import './ipc/init';

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const loadWindow = (win: BrowserWindow) => {
  if (app.isPackaged) return win.loadFile('dist/vite/index.html');
  win.loadURL('http://localhost:6767');
  win.webContents.openDevTools();
};

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    icon: join(__dirname, 'icon.ico'),
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
    },
  });

  loadWindow(win);
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
