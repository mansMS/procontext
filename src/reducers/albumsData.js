import { getAlbumsList } from '../services/albumsDataService';
import { albumsDataRequested, albumsDataLoaded, albumsDataError } from '../actions';

const initialState = {
  albumsData: [],
  albumsLoading: false,
  albumsError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS_DATA_REQUEST':
      return {
        ...state,
        albumsLoading: true,
        albumsError: null
      }
    case 'FETCH_ALBUMS_DATA_SUCCESS':
      return {
        ...state,
        albumsData: action.payload,
        albumsLoading: false,
        albumsError: null
      }
    case 'FETCH_ALBUMS_DATA_FAILURE':
      return {
        ...state,
        albumsLoading: false,
        albumsError: action.payload
      }
    default:
      return state;
  }
}

export const setAlbumsList = (id) => dispatch => {
  dispatch(albumsDataRequested());
  getAlbumsList(id)
    .then(response => dispatch(albumsDataLoaded(response)))
    .catch(error => dispatch(albumsDataError(error.message)))
}