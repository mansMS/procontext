import { showAlbums, showImages } from '../actions';

const initialState = {
  userId: null,
  albumId: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ALBUM':
      return {
        userId: action.payload,
        albumId: null
      }
    case 'SHOW_IMAGES':
      return {
        ...state,
        albumId: action.payload
      }
    default:
      return state;
  }
}

export const setShowAlbum = (id) => dispatch => {
  dispatch(showAlbums(id));
}

export const setShowImages = (id) => dispatch => {
  dispatch(showImages(id));
}