const photographersDataRequested = () => {
  return {
    type: 'FETCH_PHOTOGRAPHERS_DATA_REQUEST'
  }
}

const photographersDataLoaded = photographersData => {
  return {
    type: 'FETCH_PHOTOGRAPHERS_DATA_SUCCESS',
    payload: photographersData
  }
}

const photographersDataError = error => {
  return {
    type: 'FETCH_PHOTOGRAPHERS_DATA_FAILURE',
    payload: error
  }
}

const albumsDataRequested = () => {
  return {
    type: 'FETCH_ALBUMS_DATA_REQUEST'
  }
}

const albumsDataLoaded = albumsData => {
  return {
    type: 'FETCH_ALBUMS_DATA_SUCCESS',
    payload: albumsData
  }
}

const albumsDataError = error => {
  return {
    type: 'FETCH_ALBUMS_DATA_FAILURE',
    payload: error
  }
}
const imagesDataRequested = () => {
  return {
    type: 'FETCH_IMAGES_DATA_REQUEST'
  }
}

const imagesDataLoaded = imagesData => {
  return {
    type: 'FETCH_IMAGES_DATA_SUCCESS',
    payload: imagesData
  }
}

const imagesDataError = error => {
  return {
    type: 'FETCH_IMAGES_DATA_FAILURE',
    payload: error
  }
}

const showAlbums = id => {
  return {
    type: 'SHOW_ALBUM',
    payload: id
  }
}

const showImages = id => {
  return {
    type: 'SHOW_IMAGES',
    payload: id
  }
}

export {
  photographersDataRequested, photographersDataLoaded, photographersDataError,
  albumsDataRequested, albumsDataLoaded, albumsDataError,
  imagesDataRequested, imagesDataLoaded, imagesDataError,
  showAlbums, showImages
};