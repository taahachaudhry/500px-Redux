import { handleActions } from 'redux-actions'

// Disable eslint no-unused-vars here because these are actually used
import { SEARCH_FETCHED, SEARCH_FETCHING } from '../constants/ActionTypes' // eslint-disable-line no-unused-vars

const initialState = {
  fetching: false,
  photos: []
}

export default handleActions({
  SEARCH_FETCHED: {
    next(state, action) {
      return {
        ...state,
        photos: action.payload.photos,
        fetching: false
      };
    },
    throw(state) {
      return {
        ...state,
        fetching: false,
        photos: []
      }
    }
  },
  SEARCH_FETCHING: (state) => {
    return state.set('fetching', true)
  }
}, initialState)
