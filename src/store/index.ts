import { createStore, Store } from 'redux'

import { AppState } from '../types/state'
import { combinedReducers } from './ducks/combinedReducers'

export const store: Store<AppState> = createStore(combinedReducers)
