import { combineReducers } from 'redux';
import appData from './appData';
import albumsData from './albumsData';
import imagesData from './imagesData';
import photographersData from './photographersData';

export default combineReducers({ appData, albumsData, imagesData, photographersData })