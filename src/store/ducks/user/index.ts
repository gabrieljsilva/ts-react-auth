import { Reducer } from 'redux'
import { UserTypes } from './types'
import { UserState } from '../../../types/state'

const initialState: UserState = {
  id: '',
  name: '',
  email: '',
  token: '',
}

export const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case UserTypes.SET_USER:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
