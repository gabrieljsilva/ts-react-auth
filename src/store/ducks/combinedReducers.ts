import { combineReducers } from 'redux'

import { reducer as user } from './user'

export const combinedReducers = combineReducers({
  user,
})
