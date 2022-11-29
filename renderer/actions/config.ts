/* eslint no-console: 0 */
import { Dispatch, ConfigState } from '../reducers/types'
import getConfig from '../../main/config'

export const REFRESH = 'REFRESH'

const refreshConfig = (config: ConfigState) => {
  return {
    type: REFRESH,
    payload: config
  }
}

const refreshConfigAsync = () => {
  return (dispatch: Dispatch) => {
    getConfig()
      .then((cfg: ConfigState) => {
        dispatch(refreshConfig(cfg))
        return true
      })
      .catch(console.error)
  }
}

export default refreshConfigAsync
