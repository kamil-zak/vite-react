import { app, BrowserWindow, globalShortcut } from 'electron';
import { join } from 'path';
import './ipc/init';
import { startFrontendServer } from './utils/frontendServer';

if (app.isPackaged) startFrontendServer(join(__dirname, '..', 'vite'), 6767);

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const loadWindow = (win: BrowserWindow) => {
  win.loadURL('http://localhost:6767');
  if (!app.isPackaged) win.webContents.openDevTools();
  if (app.isPackaged) win.setFullScreen(true);
};

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    icon: join(__dirname, 'icon.ico'),
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      webSecurity: false,
    },
  });
  loadWindow(win);
};

app.whenReady().then(() => {
  createWindow();

  globalShortcut.register('Control+q', () => {
    process.exit(0);
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
