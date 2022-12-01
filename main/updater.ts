import { autoUpdater } from 'electron-updater'
import log from 'electron-log'

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log
    log.info('App starting...');
    autoUpdater.autoDownload = true
    autoUpdater.autoInstallOnAppQuit = true
    autoUpdater.autoRunAppAfterInstall = true
    const feed = autoUpdater.getFeedURL()
    autoUpdater.checkForUpdatesAndNotify
    console.log(`update feed url: ${feed}`)
    autoUpdater.checkForUpdatesAndNotify().then(console.log);
  }
}