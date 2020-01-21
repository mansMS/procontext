import { getAlbumsListURL } from '../services/sourceURLs';

export const getAlbumsList = async albumId => {
  try {
    const response = await fetch(`${getAlbumsListURL}${albumId}`);
    if (!response.ok) {
      throw new Error(`Ошибка загрузки ${response.status}`)
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error('Ошибка:', error);
    return ('Ошибка при загрузке');
  }
}