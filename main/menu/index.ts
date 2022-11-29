import {
  Menu,
  shell,
  BrowserWindow,
  MenuItemConstructorOptions
} from 'electron';
import { WindowManager } from '../helpers/window'
import { buildDarwinTemplate } from './mac'
import { buildWinTemplate } from './win'

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  windowManager: WindowManager;

  constructor(mainWindow: BrowserWindow, windowManager: WindowManager) {
    this.mainWindow = mainWindow;
    this.windowManager = windowManager;
  }

  buildMenu() {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
    ) {
      this.setupDevelopmentEnvironment();
    }

    const template:MenuItemConstructorOptions[] =
      process.platform === 'darwin'
        ? buildDarwinTemplate(this.windowManager, this.mainWindow, shell)
        : buildWinTemplate(this.windowManager, this.mainWindow, shell);

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  setupDevelopmentEnvironment() {
    this.mainWindow.webContents.on('context-menu', (_, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([
        {
          label: 'Inspect element',
          click: () => {
            this.mainWindow.webContents.inspectElement(x, y);
          }
        }
      ]).popup({ window: this.mainWindow });
    });
  }

  // NOTE: Windows won't use this...
  
  
}
