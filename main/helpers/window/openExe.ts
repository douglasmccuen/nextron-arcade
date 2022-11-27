import { exec, ChildProcess } from 'child_process'
import { EmulatorProps, Callback } from './types'

const openExe = ({game, config}:EmulatorProps, cb:Callback):ChildProcess => {
  const { romConfigPath, cwd } = config

  // windows vs mac differences follow...
  const cd = `cd ${romConfigPath}${game.name}`
  const cmd = `${cd} && ${cwd}${game.game}`

  console.error("OPEN EXE", cmd)
  return exec(cmd, cb)
}

export default openExe
