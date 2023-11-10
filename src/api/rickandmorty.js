import axios from 'axios';
const baseURL = 'https://rickandmortyapi.com/api/character';
const episodeUrl = "https://rickandmortyapi.com/api/episode"

// const axiosInstance = axios.create({
//   baseURL,
// });

export  const fetchDataFilm = async () => {
   const fethResponse =   await  fetch(`${baseURL}`)
   const response =  await fethResponse.json()
   
    return response.results
 }
 export const  fetchSingleDataCharacter = async (id) => {
   const fethResponse =   await  fetch(`${baseURL}/${id}`)
   const response =  await fethResponse.json()
    return response
 }

 export const fetchCharacterWithSearch = async (searchText, searchBy) => {
  const response = await axios.get(`${baseURL}/?${searchBy}=${searchText}`
 
  );

   if (response.data && response.data.results) {
    return response.data.results;
  }
 };
