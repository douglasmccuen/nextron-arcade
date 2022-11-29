import { app } from 'electron';
import AppUpdater from './updater'
import serve from 'electron-serve';
import { createWindow } from './helpers';
import { WindowManager, AudioManager } from './helpers/window'
import MenuBuilder from './menu'

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  // handle the creation of windows for emulators
  const windowManager = new WindowManager(mainWindow)
  windowManager.activate()

  const audioManager = new AudioManager(mainWindow)
  audioManager.activate()

  const menuBuilder = new MenuBuilder(mainWindow, windowManager);
  menuBuilder.buildMenu();

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
    new AppUpdater();
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
