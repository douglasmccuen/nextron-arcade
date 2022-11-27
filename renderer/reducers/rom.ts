import { GameAction, GameSate } from './types'
import { OPEN_ROM, CLOSE_ROM } from '../actions/rom'

const defaultState:GameSate = {
  isOpen: false,
  mameProcess: null,
  game: null
}

export const romReducer = (state:GameSate = defaultState, action: GameAction) => {
  const { payload } = action
  let update
  switch (action.type) {
    case OPEN_ROM:
      update = (payload) ? {
        isOpen: true,
        mameProcess: payload.mameProcess,
        game: payload.game
      } : state
      break
    case CLOSE_ROM:
      update = { isOpen: false, mameProcess: null, game: null }
      break
    default:
      update = state
      break
  }
  return update
}
