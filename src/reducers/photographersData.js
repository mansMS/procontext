import { getPhotographersList } from '../services/photographersDataService';
import { photographersDataRequested, photographersDataLoaded, photographersDataError } from '../actions';

const initialState = {
  photographersData: [],
  photographersLoading: false,
  photographersError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOGRAPHERS_DATA_REQUEST':
      return {
        ...state,
        photographersLoading: true,
        photographersError: null
      }
    case 'FETCH_PHOTOGRAPHERS_DATA_SUCCESS':
      return {
        ...state,
        photographersData: action.payload,
        photographersLoading: false,
        photographersError: null
      }
    case 'FETCH_PHOTOGRAPHERS_DATA_FAILURE':
      return {
        ...state,
        photographersLoading: false,
        photographersError: action.payload
      }
    default:
      return state;
  }
}

export const setPhotographersList = () => dispatch => {
  dispatch(photographersDataRequested());
  getPhotographersList()
    .then(response => dispatch(photographersDataLoaded(response)))
    .catch(error => dispatch(photographersDataError(error.message)))
}