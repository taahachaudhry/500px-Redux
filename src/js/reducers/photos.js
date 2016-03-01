import { handleActions } from 'redux-actions'
import Immutable from 'immutable'

import * as types from '../constants/ActionTypes'

const initialState = {
  fetching: false,
  photos: Immutable.List()
}

export default handleActions({
  types.SEARCH_FETCHED: {
    next(state, action) {
      return state.merge({
        fetching: false,
        photos: Immutable.fromJS(action.payload.data)
      })
    },
    throw(state) {
      return state.merge({
        fetching: false,
        photos: Immutable.List()
      })
    }
  },
  types.SEARCH_FETCHING: (state) => {
    return state.set('fetching', true)
  }
}, initialState)
