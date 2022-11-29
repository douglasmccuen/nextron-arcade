import {  ExecException } from 'child_process'
import { RomConfig, ConfigState } from '../../../renderer/reducers/types'

export type EmulatorProps = {
  game: RomConfig,
  config: ConfigState
}

export type Callback = (err: ExecException|null, stdout?: string, stderr?: string) => void
