import {
    MenuItemConstructorOptions
} from 'electron';

export const buildWinTemplate = (windowManager, mainWindow, shell):MenuItemConstructorOptions[] => {
    const templateDefault:MenuItemConstructorOptions[] = [
      {
        label: '&File',
        submenu: [
          {
            label: '&Open',
            accelerator: 'Ctrl+O'
          },
          {
            label: '&Close',
            accelerator: 'Ctrl+W',
            click: () => {
              mainWindow.close();
            }
          }
        ]
      },
      {
        label: '&View',
        submenu:
          process.env.NODE_ENV === 'development' ||
          process.env.DEBUG_PROD === 'true'
            ? [
                {
                  label: '&Reload',
                  accelerator: 'Ctrl+R',
                  click: () => {
                    mainWindow.webContents.reload();
                  }
                },
                {
                  label: 'Toggle &Full Screen',
                  accelerator: 'F11',
                  click: () => {
                    mainWindow.setFullScreen(
                      !mainWindow.isFullScreen()
                    );
                  }
                },
                {
                  label: 'Toggle &Developer Tools',
                  accelerator: 'Alt+Ctrl+I',
                  click: () => {
                    mainWindow.webContents.toggleDevTools();
                  }
                }
              ]
            : [
                {
                  label: 'Toggle &Full Screen',
                  accelerator: 'F11',
                  click: () => {
                    mainWindow.setFullScreen(
                      !mainWindow.isFullScreen()
                    );
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
                      'https://github.com/douglasmccuen/nexttron-arcade/issues'
                    )
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
                },
                { type: 'separator' },
                {
                  label: 'Toggle &Developer Tools',
                  accelerator: 'Alt+Ctrl+I',
                  click: () => {
                    mainWindow.webContents.toggleDevTools();
                  }
                }
              ]
      },
      {
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
      }
    ];

    return templateDefault;
  }