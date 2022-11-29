import { configureStore, combineReducers, Reducer, CombinedState } from '@reduxjs/toolkit';
import { windowReducer, configReducer, romReducer } from '../reducers';
import { Store, AppState, AppAction } from '../reducers/types';

const rootReducer:Reducer<CombinedState<AppState>, AppAction> = combineReducers({ 
  win: windowReducer,
  config: configReducer,
  rom: romReducer
})

export const configureReduxStore = (initialState?: AppState): Store => {
  return configureStore<AppState>({ 
    reducer: rootReducer, 
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
  });
}
