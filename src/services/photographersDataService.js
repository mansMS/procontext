import { getPhotographersListURL } from '../services/sourceURLs';

export const getPhotographersList = async () => {
  try {
    const response = await fetch(getPhotographersListURL);
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