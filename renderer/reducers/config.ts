/* eslint no-param-reassign: off */
import { ConfigAction, ConfigState, RomConfig } from './types'
import { REFRESH } from '../actions/config'

const defaultState: ConfigState = {
  romConfigPath: '',
  mamePath: '',
  mameExec: '',
  retroArchPath: '',
  retroArchExec: '',
  retroArchCorePath: '',
  retroArchCoreExt: '',
  cwd: '',
  romsByGame: {}
}

export const configReducer = (state:ConfigState = defaultState, action: ConfigAction) => {
  if (action.type === REFRESH) {
    const update = { ...action.payload, romsByGame: {} }
    update.romsByGame = update.roms.reduce((byGame: {[key:string]: RomConfig}, rom:RomConfig) => {
      byGame[rom.game] = { ...rom }
      return byGame
    },{})
    return update
  }
  return state
}
