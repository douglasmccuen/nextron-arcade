import {
    app,
    Menu,
    MenuItemConstructorOptions
  } from 'electron';

interface DarwinMenuItemConstructorOptions extends MenuItemConstructorOptions {
    selector?: string;
    submenu?: DarwinMenuItemConstructorOptions[] | Menu;
}

export const buildDarwinTemplate = (windowManager, mainWindow, shell):MenuItemConstructorOptions[] => {
    const subMenuAbout: DarwinMenuItemConstructorOptions = {
      label: 'Electron',
      submenu: [
        {
          label: 'About ElectronReact',
          selector: 'orderFrontStandardAboutPanel:'
        },
        { type: 'separator' },
        { label: 'Services', submenu: [] },
        { type: 'separator' },
        {
          label: 'Hide ElectronReact',
          accelerator: 'Command+H',
          selector: 'hide:'
        },
        {
          label: 'Hide Others',
          accelerator: 'Command+Shift+H',
          selector: 'hideOtherApplications:'
        },
        { label: 'Show All', selector: 'unhideAllApplications:' },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    };
    const subMenuEdit: DarwinMenuItemConstructorOptions = {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'Command+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+Command+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'Command+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'Command+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'Command+V', selector: 'paste:' },
        {
          label: 'Select All',
          accelerator: 'Command+A',
          selector: 'selectAll:'
        }
      ]
    };
    const subMenuViewDev: MenuItemConstructorOptions = {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'Command+R',
          click: () => {
            mainWindow.webContents.reload();
          }
        },
        { type: 'separator' },
        {
          label: 'Project List',
          accelerator: 'Ctrl+Command+T',
          click: () => {
            shell.openExternal(
              'https://github.com/users/douglasmccuen/projects/1/views/4'
            )
          }
        },
        {
          label: 'Issues List',
          accelerator: 'Command+T',
          click: () => {
            shell.openExternal(
              'https://github.com/douglasmccuen/nextron-arcade/issues'
            )
          }
        },
        { type: 'separator' },
        {
          label: 'Toggle Full Screen',
          accelerator: 'Ctrl+Command+F',
          click: () => {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          }
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: 'Alt+Command+I',
          click: () => {
            mainWindow.webContents.toggleDevTools();
          }
        },
        { type: 'separator' },
        {
          label: 'Open Mame',
          accelerator: 'Ctrl+Command+M',
          click: () => {
            windowManager.openMame()
          }
        },
        {
          label: 'Open RetroArch',
          accelerator: 'Ctrl+Command+R',
          click: () => {
            windowManager.openRetroArch()
          }
        }
      ]
    };
    const subMenuViewProd: MenuItemConstructorOptions = {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Developer Tools',
          accelerator: 'Alt+Command+I',
          click: () => {
            mainWindow.webContents.toggleDevTools();
          }
        },
        {
          label: 'Toggle Full Screen',
          accelerator: 'Ctrl+Command+F',
          click: () => {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          }
        },
        {
          label: 'Project List',
          accelerator: 'Ctrl+Command+T',
          click: () => {
            shell.openExternal(
              'https://github.com/users/douglasmccuen/projects/1/views/4'
            )
          }
        },
        {
          label: 'Issues List',
          accelerator: 'Command+T',
          click: () => {
            shell.openExternal(
              'https://github.com/douglasmccuen/nextron-arcade/issues'
            )
          }
        },
        {
          label: 'Open Mame',
          accelerator: 'Ctrl+Command+M',
          click: () => {
            windowManager.openMame()
          }
        },
        {
          label: 'Open RetroArch',
          accelerator: 'Ctrl+Command+R',
          click: () => {
            windowManager.openRetroArch()
          }
        }
      ]
    };
    const subMenuWindow: DarwinMenuItemConstructorOptions = {
      label: 'Window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:'
        },
        { label: 'Close', accelerator: 'Command+W', selector: 'performClose:' },
        { type: 'separator' },
        { label: 'Bring All to Front', selector: 'arrangeInFront:' }
      ]
    };
    const subMenuHelp: MenuItemConstructorOptions = {
      label: 'Help',
      submenu: [
        {
          label: 'Electron',
          click() {
            shell.openExternal('https://electronjs.org');
          }
        },
        {
          label: 'Nextron',
          click() {
            shell.openExternal(
              'https://github.com/saltyshiomix/nextron'
            );
          }
        },
        {
          label: 'Electron Discussions',
          click() {
            shell.openExternal('https://www.electronjs.org/community');
          }
        },
        {
          label: 'Electron Issues',
          click() {
            shell.openExternal('https://github.com/electron/electron/issues');
          }
        }
      ]
    };

    const subMenuView =
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
        ? subMenuViewDev
        : subMenuViewProd;

    return [subMenuAbout, subMenuEdit, subMenuView, subMenuWindow, subMenuHelp];
  }
