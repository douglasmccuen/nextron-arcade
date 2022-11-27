import { exec, ChildProcess } from 'child_process'
import { EmulatorProps, Callback } from './types'
import getConfig from '../../config'

const openRetroArch = ({game, config}:EmulatorProps, cb:Callback):ChildProcess => {
  const { romConfigPath, retroArchPath, retroArchExec, retroArchCorePath, retroArchCoreExt } = config

  // windows vs mac differences follow...
  const cd = `cd ${retroArchPath}`
  const core = `${retroArchCorePath}${game.core}${retroArchCoreExt}`
  const rom = `${romConfigPath}${game.game}`
  const cmd = `${cd} && ${retroArchExec} -f -L ${core} ${rom}`

  console.error("OPEN RA", cmd)
  return exec(cmd, cb)
}

export const openRetroArchProcess = async (cb:Callback):Promise<ChildProcess> => {
  const process = await getConfig().then(({retroArchPath, retroArchExec}) => {
    const cmd = `cd %userprofile%\\Public\\${retroArchPath} && ${retroArchExec}.lnk -f`
    const options = {}
    return exec(cmd, options, cb)
  })
  return process
}

export default openRetroArch
