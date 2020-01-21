import { getImageListURL } from '../services/sourceURLs';

export const getImageList = async imagesId => {
  try {
    const response = await fetch(`${getImageListURL}${imagesId}`);
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