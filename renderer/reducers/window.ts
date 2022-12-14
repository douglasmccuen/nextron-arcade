import { WindowAction, WindowState } from './types'
import {
  TOGGLE_MUTE_WINDOW, GET_MUTE_WINDOW, TOGGLE_MUTE_OS, GET_MUTE_OS,
  SET_OS_VOLUME, GET_OS_VOLUME
} from '../actions/window'

const defaultState:WindowState = {
  isWindowMuted: false,
  isOSMuted: false,
  volumeLevel: 0
}

export const windowReducer = (state:WindowState = defaultState, action: WindowAction) => {
  const { payload, type } = action
  let update
  switch (type) {
    case TOGGLE_MUTE_WINDOW:
    case GET_MUTE_WINDOW:
      update = { ...state, isWindowMuted: payload.isMute }
      break
    case TOGGLE_MUTE_OS:
    case GET_MUTE_OS:
      update = { ...state, isOSMuted: payload.isMute }
      break
    case SET_OS_VOLUME:
    case GET_OS_VOLUME:
      update = { ...state, volumeLevel: payload.level }
      break
    default:
      update = state
      break
  }
  return update
}
