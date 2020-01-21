import { getImageList } from '../services/imagesDataService';
import { imagesDataRequested, imagesDataLoaded, imagesDataError } from '../actions';

const initialState = {
  imagesData: [],
  imagesLoading: false,
  imagesError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_DATA_REQUEST':
      return {
        ...state,
        imagesLoading: true,
        imagesError: null
      }
    case 'FETCH_IMAGES_DATA_SUCCESS':
      return {
        ...state,
        imagesData: action.payload,
        imagesLoading: false,
        imagesError: null
      }
    case 'FETCH_IMAGES_DATA_FAILURE':
      return {
        ...state,
        imagesLoading: false,
        imagesError: action.payload
      }
    default:
      return state;
  }
}

export const setImagesList = (id) => dispatch => {
  dispatch(imagesDataRequested());
  getImageList(id)
    .then(response => dispatch(imagesDataLoaded(response)))
    .catch(error => dispatch(imagesDataError(error.message)))
}