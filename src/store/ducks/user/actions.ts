import { action } from 'typesafe-actions'

import { AppUser } from '../../../types/state'
import { UserTypes } from './types'

export const setUser = (user: AppUser) => action(UserTypes.SET_USER, user)
