import { exec, ChildProcess } from 'child_process'
import { EmulatorProps, Callback } from './types'
import getConfig from '../../config'

const openMame = ({game, config}:EmulatorProps, cb:Callback):ChildProcess => {
  const {mamePath, mameExec} = config

  // windows vs mac differences follow...
  const cmd = `cd ${mamePath} && ${mameExec} ${game.game}`
  // console.error('open mame', cmd)

  return exec(cmd, cb)
}

export const openMameProcess = async (cb:Callback):Promise<ChildProcess> => {
  const process = await getConfig().then(({mameExec, mamePath}) => {
    const cmd = `cd ${mamePath}; ${mameExec} `
    const options = {}
    return exec(cmd, options, cb)
  })
  return process
}

export default openMame
