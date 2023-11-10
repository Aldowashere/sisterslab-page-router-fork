import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/character';

export const fetchDataFilm = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const fetchSingleDataCharacter = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching single character data:', error);
    return null;
  }
};

export const fetchCharacterWithSearch = async (searchText, searchBy) => {
  try {
    const response = await axios.get(`${baseURL}/?${searchBy}=${searchText}`);
    return response.data.results || [];
  } catch (error) {
    console.error('Error fetching character with search:', error);
    return [];
  }
};
