/* eslint @typescript-eslint/no-unused-vars: 0 */
import {  ExecException } from 'child_process'
import { WebContents } from 'electron'
import { errorChannel } from './constants'
import { Callback } from './types'

const callback = (web: WebContents):Callback =>
  (error: ExecException|null):void => {
    if (error) {
      // web.send(errorChannel, error.message)
      console.error("FAILED TO OPEN EMULATOR \n",error)
    }
  }

export default callback
