import { createAction } from 'redux-actions'
import axios from 'axios'

import * as types from '../constants/ActionTypes'

const searchUrlBase = 'https://api.500px.com/v1/photos/search'

export const fetchPhotos = createAction(types.SEARCH_FETCHED, (keyword, page) => {
  return axios.get(searchUrlBase + '?term=' + keyword + '&page=' + page + '&rpp=20&image_size=440&sort=highest_rating&consumer_key=qORoTrkfEDEBtysr6psIO2sKU6aHyvjYj0Aq4dRu')
  .then((res) => {
    if(res) {
      return res.data;
    }
  });
})

export const startFetching = createAction(types.SEARCH_FETCHING)
