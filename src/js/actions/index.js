import { createAction } from 'redux-actions'
import axios from 'axios'

import * as types from '../constants/ActionTypes'

const urlBase = 'https://api.500px.com/v1/photos'
const searchUrlBase = urlBase + '/search'

export const fetchPhotos = createAction(types.SEARCH_FETCHED, (keyword, tag, page) => {
  return axios.get(searchUrlBase + '?term=' + keyword + '&tag=' + tag + '&page=' + page + '&rpp=21&image_size=600&sort=highest_rating&consumer_key=qORoTrkfEDEBtysr6psIO2sKU6aHyvjYj0Aq4dRu')
  .then((res) => {
    if(res) {
      return {
        data: res.data,
        keyword,
        tag
      }
    }
  });
})

export const startFetching = createAction(types.SEARCH_FETCHING)

export const fetchActivePhoto = createAction(types.ACTIVE_PHOTO, (photo, id) => {
  return {
    photo,
    id
  }
})

export const fetchFeaturedPhotos = createAction(types.FEATURED_FETCHED, (feature, page) => {
  return axios.get(urlBase + '?feature=' + feature + '&page=' + page + '&rpp=21&image_size=600&sort=highest_rating&consumer_key=qORoTrkfEDEBtysr6psIO2sKU6aHyvjYj0Aq4dRu')
  .then((res) => {
    if(res) {
      return {
        data: res.data,
        feature
      }
    }
  });
})
