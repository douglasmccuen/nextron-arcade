import { autoUpdater } from 'electron-updater'
import log from 'electron-log'

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log
    log.info('App starting...');
    autoUpdater.checkForUpdatesAndNotify();
  }
}