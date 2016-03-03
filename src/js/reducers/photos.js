import { handleActions } from 'redux-actions'
import Immutable from 'immutable'

// Disable eslint no-unused-vars here because these are actually used
import { SEARCH_FETCHED, SEARCH_FETCHING } from '../constants/ActionTypes' // eslint-disable-line no-unused-vars

const initialState = Immutable.Map({
  fetching: false,
  photos: Immutable.List()
})

export default handleActions({
  SEARCH_FETCHED: {
    next(state, action) {
      return state.merge({
        fetching: false,
        photos: Immutable.fromJS(action.payload.photos)
      })
    },
    throw(state) {
      return state.merge({
        fetching: false,
        photos: Immutable.List()
      })
    }
  },
  SEARCH_FETCHING: (state) => {
    return state.set('fetching', true)
  }
}, initialState)
