import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { connect } from 'react-redux'
import Mame from '../components/Mame';
import { openGame, closeGame } from '../actions/rom';
import refreshConfig from '../actions/config';
import {
  isWindowMuted as getIsWindowMuted, muteWindow, isOSMuted as getIsOSMuted, muteOS, setOSVolumeLevel,
  getOSVolumeLevel, gotToSleepNow as onSleep
} from '../actions/window'
import { AppState } from '../reducers/types';

function mapStateToProps(state: AppState) {
  const { isOpen } = state.rom
  const { roms=[], keyMap } = state.config
  const { isOSMuted, isWindowMuted, volumeLevel } = state.win

  // sort the games by name
  const games = [...roms]
  games.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })

  return { isOpen, games, isOSMuted, isWindowMuted, volumeLevel, keyMap }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({
    openGame, closeGame, refreshConfig, muteWindow,
    getIsWindowMuted, getIsOSMuted,
    muteOS, setOSVolumeLevel, getOSVolumeLevel, onSleep
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Mame);
