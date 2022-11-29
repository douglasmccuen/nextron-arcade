import type { Dispatch as ReduxDispatch, Store as ReduxStore } from '@reduxjs/toolkit'

export type KeyMap = {
  back: string[]
  forward: string[]
  select: string[]
  spin: string[]
  // sleep: string[]
  // mute: string[]
}

export type GameSate = {
  isOpen: boolean
  game: string
  mameProcess: object
}

export type RomConfig = {
  game: string
  name: string
  emulator: string,
  core?: string,
  image: string
  preview: string
  description: string
  rating: number
}

export type ConfigState = {
  roms?: [RomConfig]
  romsByGame?: {[key:string]: RomConfig}
  romConfigPath: string
  mamePath: string
  mameExec: string
  retroArchPath: string
  retroArchExec: string
  retroArchCorePath: string
  retroArchCoreExt: string
  cwd: string
  keyMap: KeyMap
}

export type WindowState = {
  isWindowMuted: boolean
  isOSMuted: boolean
  volumeLevel: number
}

export type AppState = {
  rom: GameSate
  config: ConfigState
  win: WindowState
}

export interface GameAction {
  type: string
  payload?: { mameProcess: number, game: string }
}

export interface ConfigAction {
  type: string
  payload: ConfigState
}

export interface WindowAction {
  type: string
  payload: { isMute?: boolean, level?: number }
}

export type AppAction =
  | GameAction
  | ConfigAction
  | WindowAction;

export type GetState = () => AppState

export type Dispatch = ReduxDispatch<AppAction>

export type Store = ReduxStore<AppState, AppAction>
